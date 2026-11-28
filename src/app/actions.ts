"use server";

import { isRateLimited, sendToInbox, type MailAttachment } from "@/lib/inbox";

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

/** An ad tag on one line: a line break could otherwise fake an extra "Label:" line in the email. */
const tag = (data: FormData, key: string, max: number) =>
  text(data, key).replace(/[\r\n\u2028\u2029]+/g, " ").trim().slice(0, max);

function channelLabel(data: FormData): string {
  const source = tag(data, "utm_source", 60);
  const medium = tag(data, "utm_medium", 60);
  const campaign = tag(data, "utm_campaign", 80);
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

type Attachment = MailAttachment;

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
  if (fields.length) return { status: "error", fields, values };

  // Checked before the CV is read, so repeated large uploads are turned away without being processed.
  if (await isRateLimited()) return { status: "failed", values };

  const cv = values.kind === "job" ? await readCv(data, `${values.Vorname} ${values.Nachname}`) : null;
  if (cv === "invalid") return { status: "error", fields: ["Lebenslauf"], values };

  return (await deliver(values, cv)) ? { status: "success" } : { status: "failed", values };
}

async function deliver(values: FormValues, cv: Attachment | null): Promise<boolean> {
  const name = `${values.Vorname} ${values.Nachname}`;
  const subject = values.kind === "job" ? `Bewerbung: ${values.Stelle || "Initiativ"} – ${name}` : `Website-Anfrage – ${name}`;
  const body = FIELDS.filter((key) => values[key]).map((key) => `${key}: ${values[key]}`).join("\n\n");
  const emailText = cv ? `${body}\n\nLebenslauf: im Anhang (${cv.filename})` : body;

  return sendToInbox({
    subject,
    text: emailText,
    replyTo: values.Email,
    attachments: cv ? [cv] : undefined,
    logText: body,
  });
}
