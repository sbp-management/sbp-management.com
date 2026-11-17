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
  | "diabetology"
  | "emergency"
  | "gastroenterology"
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

/**
 * Level of the position: for a doctor, Oberarzt, Leitender Oberarzt, Facharzt or Assistenzarzt;
 * PF is a registered nurse (Pflegefachkraft), HEB a midwife (Hebamme).
 */
export type JobLevel = "OA" | "LOA" | "FA" | "AA" | "PF" | "HEB";

/** Which profession's wording (medical licence vs. nursing/midwifery licence, etc.) a listing uses. */
export type JobProfession = "physician" | "nurse" | "midwife";

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
  /** Inpatient hospital (default) or an outpatient practice/MVZ — picks the intro/direct-employment wording. */
  venue?: "hospital" | "practice";
  /** physician (default), nurse or midwife — picks the professional-licence line in the profile. */
  profession?: JobProfession;
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
