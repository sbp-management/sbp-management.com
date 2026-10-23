/** Endless band of keywords. The list is rendered twice so the loop is seamless; the copy is hidden from screen readers. */
export function Ticker({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 font-display text-[clamp(1.25rem,1rem+1vw,1.875rem)] font-bold whitespace-nowrap text-white"
        >
          {item}
          <span aria-hidden className="size-2.5 rotate-45 bg-brand" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="ticker overflow-hidden border-y border-line-dark bg-ink py-5">
      <div className="ticker-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
