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
};

export type LegalDoc = {
  title: string;
  /** Each paragraph is a list of lines; an empty line is a deliberate blank line. */
  paragraphs: Seg[][][];
};
