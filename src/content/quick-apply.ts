/**
 * "Schnellbewerbung" landing page (/schnellbewerbung, German only, not in the menu or sitemap): the
 * positions a Google Ads link can name with ?stelle=, and the answer options of the form. Change the
 * list here; the page and the server action read it from this file. Titles must match the ads.
 * Anonymous on purpose (rule E1): no hospital names or towns; a region at most "Süddeutschland".
 */

export type QuickGroup = "Pflege" | "Hebamme" | "Ärzte";

export type QuickPosition = {
  /** Value of ?stelle= in the ad link. */
  slug: string;
  title: string;
  /** Pre-selects "Ihr Beruf"; none for an open application. */
  group?: QuickGroup;
  /** Shown after the title on the page, e.g. "Süddeutschland"; leave out when not confirmed. */
  region?: string;
};

export const quickPositions: QuickPosition[] = [
  { slug: "pflege-notaufnahme", title: "Pflegefachkraft (m/w/d) Notaufnahme", group: "Pflege" },
  { slug: "pflege-altersmedizin", title: "Pflegefachkraft (m/w/d) Altersmedizin", group: "Pflege" },
  { slug: "pflege-pneumologie", title: "Pflegefachkraft (m/w/d) Pneumologie", group: "Pflege" },
  { slug: "pflege-paediatrie", title: "Pflegefachkraft (m/w/d) Pädiatrie", group: "Pflege" },
  { slug: "pflege-allgemein", title: "Pflegefachkraft (m/w/d) Allgemeinpflege", group: "Pflege" },
  { slug: "intensivpflege", title: "Fachpflegekraft (m/w/d) Intensivpflege", group: "Pflege" },
  { slug: "kinderkrankenpflege", title: "Gesundheits- und Kinderkrankenpfleger (m/w/d)", group: "Pflege" },
  { slug: "hebamme-kreisssaal", title: "Hebamme (m/w/d) Kreißsaal", group: "Hebamme" },
  { slug: "zurueck-in-die-klinik", title: "Zurück in die Klinik – Pflege (m/w/d)", group: "Pflege" },
  { slug: "oa-pneumologie", title: "Oberarzt (m/w/d) Pneumologie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "oa-paed-notaufnahme", title: "Oberarzt (m/w/d) Pädiatrische Notaufnahme", group: "Ärzte", region: "Süddeutschland" },
  { slug: "oa-kinder-gastroenterologie", title: "Oberarzt (m/w/d) Kinder-Gastroenterologie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "fa-kinder-jugendmedizin", title: "Facharzt (m/w/d) Kinder- und Jugendmedizin", group: "Ärzte", region: "Süddeutschland" },
  { slug: "oa-altersmedizin-schlaganfall", title: "Oberarzt (m/w/d) Altersmedizin und Schlaganfall", group: "Ärzte", region: "Süddeutschland" },
  { slug: "oa-innere-geriatrie", title: "Oberarzt (m/w/d) Innere Medizin und Geriatrie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "fa-innere-geriatrie", title: "Facharzt (m/w/d) Innere Medizin, Geriatrie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "fa-gastroenterologie", title: "Facharzt (m/w/d) Gastroenterologie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "fa-diabetologie", title: "Facharzt (m/w/d) Diabetologie", group: "Ärzte", region: "Süddeutschland" },
  { slug: "initiativ", title: "Andere / Initiativbewerbung" },
];

/** The position a ?stelle= value names, or undefined for an unknown or missing value. */
export const quickPosition = (slug: string | undefined | null) =>
  quickPositions.find((p) => p.slug === slug);

/** Answer options; the label is also the value written into the email. */
export const quickOptions = {
  beruf: ["Pflegefachkraft", "Hebamme", "Ärztin / Arzt", "Anderer Beruf"],
  anerkennung: ["Ja", "In Bearbeitung", "Nein", "Weiß nicht"],
  deutsch: ["Wenig (A1–A2)", "B1", "B2", "C1 oder besser"],
  verfuegbarkeit: ["Sofort", "In 3 Monaten", "In 6 Monaten", "Später"],
} as const;

/** "Ihr Beruf" pre-selected from the position's group. */
export const quickBerufForGroup: Record<QuickGroup, (typeof quickOptions.beruf)[number]> = {
  Pflege: "Pflegefachkraft",
  Hebamme: "Hebamme",
  Ärzte: "Ärztin / Arzt",
};

/** Recruiting contact named on the page and in the thank-you message. */
export const quickContact = {
  name: "Ana Zakarashvili",
  whatsappHref: "https://wa.me/491727621292",
};

/** Field limits, checked in the browser and again on the server. */
export const quickLimits = { name: 80, email: 120, phone: 30, message: 1500, utm: 80 } as const;
