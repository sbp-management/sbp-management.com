/**
 * Square-tile mosaic taken from the SBP logo. Decorative only.
 * `pattern` holds one opacity per tile (row by row); 0 leaves a gap.
 * Tiles pop in one by one when the surrounding Reveal enters the viewport, then shimmer
 * (styles: `.tile` in site.css).
 */
export function Mosaic({
  pattern,
  cols,
  tile = 28,
  gap = 0,
  color = "var(--color-brand)",
  className,
}: {
  pattern: number[];
  cols: number;
  tile?: number;
  gap?: number;
  color?: string;
  className?: string;
}) {
  const rows = Math.ceil(pattern.length / cols);
  const step = tile + gap;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${cols * step - gap} ${rows * step - gap}`}
      width={cols * step - gap}
      height={rows * step - gap}
      className={className}
    >
      {pattern.map((o, i) =>
        o ? (
          <rect
            key={i}
            x={(i % cols) * step}
            y={Math.floor(i / cols) * step}
            width={tile}
            height={tile}
            fill={color}
            fillOpacity={o}
            className="tile"
            style={
              {
                "--td": `${i * 45}ms`,
                // Spread the shimmer so neighbouring tiles never pulse together.
                "--tw": `${((i * 7919) % 23) * 220}ms`,
              } as React.CSSProperties
            }
          />
        ) : null,
      )}
    </svg>
  );
}
