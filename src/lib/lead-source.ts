/**
 * Lead source from an ad link's utm_source, the same groups everywhere: the "Quelle:" line of the
 * Schnellbewerbung email and the lead_source of the Google Analytics lead event. Meta Lead Ads
 * (instant forms) never reach the website; they are counted in the info@ sheet, not here.
 */
export type LeadChannel = "Website" | "Google Ads" | "Facebook / Instagram" | "Meta Ads" | "Sonstige";

export function leadChannel(utmSource: string): LeadChannel {
  const s = utmSource.trim().toLowerCase();
  if (!s) return "Website";
  if (s === "google") return "Google Ads";
  if (s === "facebook" || s === "instagram") return "Facebook / Instagram";
  if (s === "meta") return "Meta Ads";
  return "Sonstige";
}

/** An ad tag reduced to one short line of safe characters (for analytics and emails). */
export const cleanTag = (value: string) =>
  value
    .replace(/[\r\n\u2028\u2029]+/g, " ")
    .replace(/[^A-Za-z0-9_.\- ]/g, "")
    .trim()
    .slice(0, 80)
    .trim();
