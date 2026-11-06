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

export type JobDetail = {
  slug: string;
  title: string;
  /** Category chip, e.g. "2024.05". */
  category: string;
  date: string;
  author: string;
  authorImage: string | null;
  banner: string | null;
  article: Block[];
  /** Department, for grouping and filtering (labels per language in jobDepartments). */
  department: JobDepartment;
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
