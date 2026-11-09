/** One run of inline text: plain, bold, italic, a link, or a line break. */
export type Seg = {
  t?: string;
  b?: 1;
  i?: 1;
  href?: string;
  br?: 1;
};

export type Block =
  | { type: "h4" | "h5" | "h6" | "p" | "quote"; text: Seg[] }
  | { type: "ul" | "ol"; items: Seg[][] };

/** Departments of the open positions (labels in each dictionary under jobDepartments). */
export type JobDepartment =
  | "anesthesia"
  | "emergency"
  | "generalMedicine"
  | "geriatrics"
  | "gynecology"
  | "intensive"
  | "internal"
  | "neurology"
  | "palliative"
  | "pediatrics"
  | "pulmonology"
  | "radiology"
  | "trauma";

/** Level of a doctor's position: Oberarzt, Leitender Oberarzt, Facharzt, Assistenzarzt. */
export type JobLevel = "OA" | "LOA" | "FA" | "AA";

/** A text in each language of the site (de, en, ru, sr). */
export type JobText = { de: string; en: string; ru: string; sr: string };

/**
 * One open position. The listing text is put together per language from these fields and the
 * shared sentences in job-templates.ts (see job-text.ts), so each job only holds what is specific to it.
 */
export type JobDetail = {
  slug: string;
  /** Reference number shown with the listing, e.g. "2026.05". */
  category: string;
  /** Date of publication, e.g. "November 6, 2026". */
  date: string;
  /** Contact person shown on the listing. */
  author: string;
  level: JobLevel;
  /** Department, for grouping and filtering (labels per language in jobFilter.departments). */
  department: JobDepartment;
  /** Job title without the town. */
  title: JobText;
  /** Where in the hospital, as it completes the sentences in job-templates.ts ("in der Neurologie"). */
  area: JobText;
  /** Profile requirement (Oberarzt, Facharzt) or training goal (Assistenzarzt); may be empty. */
  req: JobText;
  /** Where the job is (Google for Jobs needs it). */
  location: { city: string; postalCode: string; region: string };
  /** ISO date after which the listing is no longer shown as open to search engines. */
  validThrough: string;
};

export type LegalDoc = {
  title: string;
  /** Each paragraph is a list of lines; an empty line is a deliberate blank line. */
  paragraphs: Seg[][][];
};
