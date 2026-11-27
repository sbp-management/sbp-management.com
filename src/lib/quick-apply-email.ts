import { quickLimits, quickOptions, quickPosition } from "@/content/quick-apply";

/**
 * Checks and cleans a "Schnellbewerbung" and builds its email. Kept free of sending so it can be
 * tested on its own. The email layout is read by the info@ Apps Script: one "Label: value" per line,
 * empty optional fields keep their label, "Nachricht:" always last. Change the layout only together
 * with that script.
 */

export type QuickField =
  | "stelle"
  | "beruf"
  | "anerkennung"
  | "deutsch"
  | "verfuegbarkeit"
  | "vorname"
  | "nachname"
  | "email"
  | "telefon"
  | "nachricht"
  | "einwilligung";

export type QuickValues = {
  stelle: string;
  beruf: string;
  anerkennung: string;
  deutsch: string;
  verfuegbarkeit: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  nachricht: string;
  einwilligung: boolean;
  utm_source: string;
  utm_campaign: string;
  utm_content: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** One line: no line breaks (they could fake an extra "Label:" line in the email), trimmed, capped. */
export const oneLine = (value: string, max: number) =>
  value.replace(/[\r\n\u2028\u2029]+/g, " ").trim().slice(0, max).trim();

/** A UTM value: one line, only letters, digits, space and _ . -, capped. */
export const utmValue = (value: string) =>
  oneLine(value, quickLimits.utm * 2)
    .replace(/[^A-Za-z0-9_.\- ]/g, "")
    .slice(0, quickLimits.utm)
    .trim();

/** "Quelle:" from utm_source; nothing else from the visitor is trusted for it. */
export function quickSource(source: string) {
  const s = source.toLowerCase();
  if (!s) return "Website";
  if (s === "google") return "Google Ads";
  if (s === "facebook" || s === "instagram") return "Facebook / Instagram";
  if (s === "meta") return "Meta Ads";
  return `Sonstige: ${source}`;
}

/** "2026-11-27 14:03 (Europe/Berlin)". */
export function berlinTime(date: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute} (Europe/Berlin)`;
}

const get = (data: FormData, key: string) => String(data.get(key) ?? "");

/** Cleans the submitted form; returns the values and the fields that are missing or invalid. */
export function readQuickForm(data: FormData): { values: QuickValues; fields: QuickField[] } {
  const message = get(data, "nachricht").replace(/\r\n?/g, "\n").trim();
  const values: QuickValues = {
    stelle: oneLine(get(data, "stelle"), 80),
    beruf: oneLine(get(data, "beruf"), 40),
    anerkennung: oneLine(get(data, "anerkennung"), 40),
    deutsch: oneLine(get(data, "deutsch"), 40),
    verfuegbarkeit: oneLine(get(data, "verfuegbarkeit"), 40),
    vorname: oneLine(get(data, "vorname"), quickLimits.name),
    nachname: oneLine(get(data, "nachname"), quickLimits.name),
    email: oneLine(get(data, "email"), quickLimits.email),
    telefon: oneLine(get(data, "telefon"), quickLimits.phone),
    nachricht: message.slice(0, quickLimits.message),
    einwilligung: get(data, "einwilligung") === "ja",
    utm_source: utmValue(get(data, "utm_source")),
    utm_campaign: utmValue(get(data, "utm_campaign")),
    utm_content: utmValue(get(data, "utm_content")),
  };
  const fields: QuickField[] = [];
  if (!quickPosition(values.stelle)) fields.push("stelle");
  const pick = (key: keyof typeof quickOptions) =>
    (quickOptions[key] as readonly string[]).includes(values[key]);
  if (!pick("beruf")) fields.push("beruf");
  if (!pick("anerkennung")) fields.push("anerkennung");
  if (!pick("deutsch")) fields.push("deutsch");
  if (!pick("verfuegbarkeit")) fields.push("verfuegbarkeit");
  if (!values.vorname) fields.push("vorname");
  if (!values.nachname) fields.push("nachname");
  if (!EMAIL.test(values.email)) fields.push("email");
  if ((values.telefon.match(/\d/g) ?? []).length < 6) fields.push("telefon");
  if (message.length > quickLimits.message) fields.push("nachricht");
  if (!values.einwilligung) fields.push("einwilligung");
  return { values, fields };
}

/** Subject and plain-text body in the layout the info@ script reads. */
export function quickEmail(values: QuickValues, sentAt: Date) {
  const title = quickPosition(values.stelle)?.title ?? values.stelle;
  const lines: [string, string][] = [
    ["Anliegen", "Schnellbewerbung"],
    ["Stelle", title],
    ["Beruf", values.beruf],
    ["Anerkennung", values.anerkennung],
    ["Deutschkenntnisse", values.deutsch],
    ["Verfügbarkeit", values.verfuegbarkeit],
    ["Vorname", values.vorname],
    ["Nachname", values.nachname],
    ["Email", values.email],
    ["Telefonnummer", values.telefon],
    ["Quelle", quickSource(values.utm_source)],
    ["Kampagne", values.utm_campaign],
    ["Anzeige", values.utm_content],
    ["Einwilligung", `ja, ${berlinTime(sentAt)}`],
    ["Nachricht", values.nachricht],
  ];
  return {
    subject: `Bewerbung: ${title} – ${values.vorname} ${values.nachname}`,
    text: lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
  };
}
