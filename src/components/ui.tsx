import Link from "next/link";

const cx = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(" ");

const CONTAINER_SIZE = {
  default: "max-w-[1080px]", // the main content column
  wide: "max-w-[1280px]", // full-width card grids
  small: "max-w-[920px]", // job article + application form
  prose: "max-w-[870px]", // legal text
  narrow: "max-w-[650px]", // forms and the services intro card
  team: "max-w-[1218px] px-6", // team grid: 1218px column with 24px gutters (1170px content)
} as const;

/** Centres content in one of the site's fixed column widths. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof CONTAINER_SIZE;
}) {
  return <div className={cx("relative z-[5] mx-auto w-full", CONTAINER_SIZE[size], className)}>{children}</div>;
}

const EYEBROW_TONE = {
  brand: "text-brand text-[16px] leading-8 tracking-[0.05em]",
  ink: "text-ink text-[16px] leading-8 tracking-[0.05em]",
  muted: "text-body text-[16px] leading-6 tracking-[0.04em]",
  purple: "text-purple text-[14px] leading-6 tracking-[0.06em]",
} as const;

/** Small uppercase label that sits above section headings. */
const EYEBROW_GAP = { 0: "mb-0", 8: "mb-2", 10: "mb-2.5", 14: "mb-[14px]", 16: "mb-4" } as const;

export function Eyebrow({
  children,
  tone = "brand",
  gap = 14,
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof EYEBROW_TONE;
  /** Space below the label in px; the original varies by section. */
  gap?: keyof typeof EYEBROW_GAP;
  className?: string;
}) {
  return <p className={cx("font-semibold uppercase", EYEBROW_GAP[gap], EYEBROW_TONE[tone], className)}>{children}</p>;
}

const HEADING_SIZE = {
  lg: "text-[35px] leading-[1.2] tracking-[-0.04em] md:text-[48px] md:leading-[57.6px]",
  md: "text-[32px] leading-[1.2] tracking-[-0.02em] md:text-[40px] md:leading-[48px]",
} as const;

/** Section heading: `lg` is 48/57.6 (home focus areas), `md` is 40/48 (contact block, values). */
export function SectionHeading({
  children,
  className,
  size = "lg",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof HEADING_SIZE;
  as?: "h1" | "h2" | "h3";
}) {
  return <Tag className={cx("mb-4 font-bold text-ink", HEADING_SIZE[size], className)}>{children}</Tag>;
}

const BUTTON_VARIANT = {
  navy: "bg-navy text-white hover:bg-brand",
  brand: "bg-brand text-white hover:bg-navy",
  outline: "border border-ink bg-transparent font-semibold text-ink hover:bg-ink hover:text-white",
} as const;

export function Button({
  href,
  children,
  variant = "navy",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof BUTTON_VARIANT;
  className?: string;
}) {
  const isExternal = /^(mailto:|tel:|https?:)/.test(href);
  const classes = cx(
    "inline-flex min-h-12 items-center justify-center px-6 py-2 text-center text-[14px] transition-colors duration-300",
    BUTTON_VARIANT[variant],
    className,
  );
  return isExternal ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
