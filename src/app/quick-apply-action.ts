"use server";

import { isRateLimited, sendToInbox } from "@/lib/inbox";
import { quickEmail, readQuickForm, type QuickField } from "@/lib/quick-apply-email";

export type QuickApplyState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; fields: QuickField[] }
  // Input was fine but the message could not be delivered (mail provider down, rate limited).
  | { status: "failed" };

/**
 * "Schnellbewerbung" (/schnellbewerbung): checks the form again on the server and emails it to info@
 * the same way as the job application form (Resend, Reply-To = applicant), in the layout of
 * quickEmail(). Sends nothing else (the confirmation to the applicant comes from the info@ script).
 */
export async function submitQuickApplication(
  _prev: QuickApplyState,
  data: FormData,
): Promise<QuickApplyState> {
  // Honeypot: real visitors never see or fill this field. Bots get "success", nothing is sent.
  if (String(data.get("website") ?? "").trim()) return { status: "success" };

  const { values, fields } = readQuickForm(data);
  if (fields.length) return { status: "error", fields };
  if (await isRateLimited()) return { status: "failed" };

  const { subject, text } = quickEmail(values, new Date());
  const sent = await sendToInbox({ subject, text, replyTo: values.email });
  return sent ? { status: "success" } : { status: "failed" };
}
