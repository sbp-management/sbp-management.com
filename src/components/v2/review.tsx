/**
 * Review marks shown while the site is being built (never in a production build unless
 * NEXT_PUBLIC_REVIEW_MARKS=1):
 *   kind="approve" – yellow: needs the client's approval, or is a placeholder.
 *   kind="risk"    – red: security, legal, or image-rights issue.
 * `note` says what is needed. Wrap a block (default) or a piece of text (`inline`).
 * The list of all open items lives in the project note (Claude files → sbp-website → Review items).
 */
export const SHOW_REVIEW =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_REVIEW_MARKS === "1";

const STYLE = {
  approve: {
    box: "outline-[#f5c400]",
    label: "bg-[#ffd60a] text-[#3d3000]",
    tag: "Approval",
  },
  risk: {
    box: "outline-[#e11d2e]",
    label: "bg-[#e11d2e] text-white",
    tag: "Risk",
  },
} as const;

export function Review({
  kind,
  note,
  inline,
  children,
  className = "",
  when = true,
}: {
  kind: "approve" | "risk";
  note: string;
  inline?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Mark only when true (lets a component mark some instances and not others). */
  when?: boolean;
}) {
  if (!SHOW_REVIEW || !when) return <>{children}</>;
  const s = STYLE[kind];
  if (inline) {
    return (
      <mark
        data-review={kind}
        data-review-note={note}
        title={`${s.tag}: ${note}`}
        className={
          kind === "approve"
            ? "bg-[#ffe45c] px-0.5 text-inherit"
            : "bg-[#ffd3d6] px-0.5 text-inherit"
        }
      >
        {children}
      </mark>
    );
  }
  return (
    <div
      data-review={kind}
      data-review-note={note}
      className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} outline-[3px] outline-offset-4 outline-dashed ${s.box} ${className}`}
    >
      <span
        className={`pointer-events-none absolute left-2 ${/\b(absolute|fixed)\b/.test(className) ? "top-2" : "-top-3"} z-30 w-max max-w-[min(20rem,85vw)] px-2 py-0.5 text-[0.6875rem] leading-tight font-bold ${s.label}`}
      >
        {s.tag}: {note}
      </span>
      {children}
    </div>
  );
}
