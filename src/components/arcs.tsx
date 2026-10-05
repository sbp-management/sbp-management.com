type Corner = "tl" | "tr" | "bl" | "br";

const CORNER_CLASS: Record<Corner, string> = {
  br: "bottom-0 right-0",
  bl: "bottom-0 left-0 -scale-x-100",
  tr: "top-0 right-0 -scale-y-100",
  tl: "top-0 left-0 -scale-100",
};

/**
 * Concentric quarter-arcs that decorate section corners (hero, CTA, contact, banner).
 * The circles are centred just outside the chosen corner so only the arcs show.
 */
export function Arcs({
  corner = "br",
  size = 180,
  stroke = "#0e1681",
  opacity = 1,
  className = "",
}: {
  corner?: Corner;
  size?: number;
  stroke?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none absolute ${CORNER_CLASS[corner]} ${className}`}
      style={{ opacity }}
    >
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <circle cx="232" cy="232" r="204" />
        <circle cx="232" cy="232" r="170" />
        <circle cx="232" cy="232" r="136" />
      </g>
    </svg>
  );
}
