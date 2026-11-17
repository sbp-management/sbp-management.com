"use server";

import { headers } from "next/headers";
import { company } from "@/content/site";

export type FormValues = Record<string, string>;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; fields: string[]; values: FormValues }
  // Input was fine but the message could not be delivered (mail provider down, misconfigured, rate limited).
  | { status: "failed"; values: FormValues };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Fields copied into the email, in this order. "Quelle" is filled in below, not read directly from the form. */
const FIELDS = ["Anliegen", "Stelle", "Quelle", "Vorname", "Nachname", "Email", "Telefonnummer", "Organisation", "Qualifikation", "Nachricht"];

const text = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

/**
 * Where an application came from. contact-form.tsx reads a tagged ad link's utm_source/utm_medium/
 * utm_campaign client-side (sessionStorage keeps the tag if the visitor browses on before applying)
 * and resends them as hidden fields. Naming matches the recruiting-ads proposal's link convention.
 */
const CHANNELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google Ads",
  linkedin: "LinkedIn",
};

function channelLabel(data: FormData): string {
  const source = text(data, "utm_source").slice(0, 60);
  const medium = text(data, "utm_medium").slice(0, 60);
  const campaign = text(data, "utm_campaign").slice(0, 80);
  const name = !source ? "Website" : (CHANNELS[source.toLowerCase()] ?? `Andere (${source})`);
  const withMedium = medium ? `${name} – ${medium}` : name;
  return campaign ? `${withMedium} (Kampagne: ${campaign})` : withMedium;
}

/**
 * CV upload on the application form: PDF or Word, at most 4 MB. Netlify functions accept about 6 MB per
 * request, so 4 MB leaves room for the rest of the form. The file is only attached to the email.
 */
const CV_MAX_BYTES = 4 * 1024 * 1024;
/** Allowed file types with the bytes their files start with (so a renamed file of another kind is refused). */
const CV_TYPES: Record<string, number[]> = {
  pdf: [0x25, 0x50, 0x44, 0x46], // %PDF
  docx: [0x50, 0x4b, 0x03, 0x04], // ZIP container
  doc: [0xd0, 0xcf, 0x11, 0xe0], // old Word format
};

type Attachment = { filename: string; content: string };

/** The uploaded CV as an email attachment; null = none uploaded; "invalid" = wrong type or too large. */
async function readCv(data: FormData, name: string): Promise<Attachment | null | "invalid"> {
  const file = data.get("Lebenslauf");
  if (!(file instanceof File) || file.size === 0) return null;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  const magic = CV_TYPES[ext];
  if (!magic || file.size > CV_MAX_BYTES) return "invalid";
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!magic.every((b, i) => bytes[i] === b)) return "invalid";
  const safeName = name.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_|_$/g, "") || "Bewerbung";
  return { filename: `Lebenslauf_${safeName}.${ext}`, content: Buffer.from(bytes).toString("base64") };
}

/**
 * Validates the contact / application form and emails it to company.email via Resend.
 *
 * Only reports success once Resend has accepted the message. Env:
 *   RESEND_API_KEY  required in production; without it, development logs the message instead.
 *   CONTACT_FROM    sender on a domain verified in Resend (default: website@sbp-management.com).
 */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (text(data, "website")) return { status: "success" };

  const values: FormValues = { kind: text(data, "kind") };
  for (const key of FIELDS) values[key] = text(data, key);
  values.Quelle = channelLabel(data);

  const fields: string[] = [];
  if (!values.Vorname) fields.push("Vorname");
  if (!values.Nachname) fields.push("Nachname");
  if (!EMAIL.test(values.Email)) fields.push("Email");
  // The job application form requires a message; the general forms do not.
  if (values.kind === "job" && !values.Nachricht) fields.push("Nachricht");
  if (values.Nachricht.length > 5000) fields.push("Nachricht");
  const cv = values.kind === "job" ? await readCv(data, `${values.Vorname} ${values.Nachname}`) : null;
  if (cv === "invalid") fields.push("Lebenslauf");
  if (fields.length) return { status: "error", fields, values };

  const h = await headers();
  // Netlify passes the visitor's IP in x-nf-client-connection-ip; x-forwarded-for elsewhere.
  const ip = h.get("x-nf-client-connection-ip") ?? h.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) return { status: "failed", values };

  return (await deliver(values, cv === "invalid" ? null : cv)) ? { status: "success" } : { status: "failed", values };
}

async function deliver(values: FormValues, cv: Attachment | null): Promise<boolean> {
  const name = `${values.Vorname} ${values.Nachname}`;
  const subject = values.kind === "job" ? `Bewerbung: ${values.Stelle || "Initiativ"} – ${name}` : `Website-Anfrage – ${name}`;
  const body = FIELDS.filter((key) => values[key]).map((key) => `${key}: ${values[key]}`).join("\n\n");
  const emailText = cv ? `${body}\n\nLebenslauf: im Anhang (${cv.filename})` : body;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] RESEND_API_KEY is not set; message NOT delivered:", subject);
      return false;
    }
    console.info(`[contact] dev mode, not sent:\n${subject}\n\n${body}`);
    return true;
  }

  const payload = JSON.stringify({
    from: process.env.CONTACT_FROM || `SBP Website <website@sbp-management.com>`,
    to: [company.email],
    reply_to: values.Email,
    subject,
    text: emailText,
    ...(cv && { attachments: [cv] }),
  });
  // Same key on the retry, so Resend never sends the message twice.
  const idempotencyKey = crypto.randomUUID();

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body: payload,
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return true;
      console.error(`[contact] Resend rejected (attempt ${attempt}): ${res.status} ${await res.text()}`);
      // 4xx means bad config or input; retrying will not help (except 429 rate limiting).
      if (res.status < 500 && res.status !== 429) return false;
    } catch (err) {
      console.error(`[contact] Resend request failed (attempt ${attempt}):`, err);
    }
    if (attempt === 1) await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

/**
 * Best-effort flood protection: at most 5 submissions per IP per 10 minutes.
 * Kept in memory, so it is per server instance and resets on deploy.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 10_000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}
