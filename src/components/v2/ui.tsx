import Link from "next/link";
import type { StatusTone } from "@/i18n/dictionaries";

export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/** 1360px content column with responsive side gutters (wide enough for the two-line hero headline beside the map). */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[85rem] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Small uppercase label with a mosaic square, placed above section headings. */
export function Eyebrow({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: "brand" | "teal" | "light";
  className?: string;
}) {
  const color = { brand: "text-brand", teal: "text-teal", light: "text-lilac" }[
    tone
  ];
  return (
    <p
      className={cx(
        "mb-6 flex items-center gap-2.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase",
        color,
        className,
      )}
    >
      <span aria-hidden className="size-2 shrink-0 bg-current" />
      {children}
    </p>
  );
}

const HEADING = {
  xl: "text-[clamp(2.3rem,1.3rem+3vw,3.75rem)] leading-[1.05] tracking-[-0.02em]",
  lg: "text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.08] tracking-[-0.015em]",
  md: "text-[clamp(1.6rem,1.3rem+1.1vw,2.25rem)] leading-[1.15] tracking-[-0.01em]",
} as const;

export function Heading({
  children,
  size = "lg",
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  size?: keyof typeof HEADING;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={cx("font-display font-medium", HEADING[size], className)}>
      {children}
    </Tag>
  );
}

const BUTTON = {
  ink: "bg-ink text-white hover:bg-brand",
  brand: "bg-brand text-white hover:bg-brand-deep",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-brand-soft",
  outlineLight:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
  teal: "bg-teal text-white hover:bg-teal-deep",
  outlineTeal:
    "border border-teal/40 text-teal-deep hover:border-teal hover:bg-teal hover:text-white",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "ink",
  arrow = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof BUTTON;
  arrow?: boolean;
  className?: string;
}) {
  const classes = cx(
    "group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 text-[0.9375rem] font-semibold transition-colors duration-200",
    BUTTON[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );
  return /^(mailto:|tel:|https?:)/.test(href) ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Underlined text link with an arrow. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 font-semibold underline decoration-current/30 underline-offset-[6px] transition-colors hover:decoration-current",
        className,
      )}
    >
      {children}
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

const STATUS = {
  active: "bg-brand-soft text-brand-deep",
  planned: "bg-amber-soft text-amber",
  ongoing: "bg-green-soft text-green",
} as const;

/** Project status chip; wording comes from the project itself ("Initiation phase", "Ongoing", ...). */
export function StatusChip({
  tone,
  children,
}: {
  tone: StatusTone;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 px-2.5 py-1 text-[0.75rem] leading-5 font-semibold",
        STATUS[tone],
      )}
    >
      <span
        aria-hidden
        className={cx(
          "size-1.5 rounded-full bg-current",
          tone !== "ongoing" && "opacity-70",
        )}
      />
      {children}
    </span>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      className={cx("shrink-0", className)}
    >
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      width="12"
      height="12"
      fill="none"
      className={cx("shrink-0", className)}
    >
      <path
        d="m2.5 4.5 3.5 3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
