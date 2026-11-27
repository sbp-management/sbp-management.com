import { headers } from "next/headers";
import { company } from "@/content/site";

export type MailAttachment = { filename: string; content: string };

/**
 * Sends one email to company.email (info@) through Resend, the way every form on the site does.
 * Only returns true once Resend has accepted the message. Env:
 *   RESEND_API_KEY  required in production; without it, development logs the message instead.
 *   CONTACT_FROM    sender on a domain verified in Resend (default: website@sbp-management.com).
 * `logText` is what development prints instead of sending (defaults to the email text).
 */
export async function sendToInbox({
  subject,
  text,
  replyTo,
  attachments,
  logText = text,
}: {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: MailAttachment[];
  logText?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] RESEND_API_KEY is not set; message NOT delivered:", subject);
      return false;
    }
    console.info(`[contact] dev mode, not sent:\n${subject}\n\n${logText}`);
    return true;
  }

  const payload = JSON.stringify({
    from: process.env.CONTACT_FROM || `SBP Website <website@sbp-management.com>`,
    to: [company.email],
    reply_to: replyTo,
    subject,
    text,
    ...(attachments?.length && { attachments }),
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
 * Best-effort flood protection: at most 5 submissions per IP per 10 minutes, shared by all forms.
 * Kept in memory, so it is per server instance and resets on deploy.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

export async function isRateLimited(): Promise<boolean> {
  const h = await headers();
  // Netlify passes the visitor's IP in x-nf-client-connection-ip; x-forwarded-for elsewhere.
  const ip = h.get("x-nf-client-connection-ip") ?? h.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 10_000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}
