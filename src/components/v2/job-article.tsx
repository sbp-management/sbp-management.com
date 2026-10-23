import { Fragment } from "react";
import type { Block, Seg } from "@/content/types";

/** Inline runs of a job listing (bold, italic, links, line breaks). */
function Inline({ segs }: { segs: ReadonlyArray<Seg> }) {
  return (
    <>
      {segs.map((s, i) => {
        if (s.br) return <br key={i} />;
        let node: React.ReactNode = s.t;
        if (s.b)
          node = <strong className="font-semibold text-ink">{node}</strong>;
        if (s.i) node = <em>{node}</em>;
        if (s.href)
          node = (
            <a
              href={s.href}
              className="text-brand underline underline-offset-2 hover:text-ink"
            >
              {node}
            </a>
          );
        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}

/** The text of a job listing, in the typography of the relaunched site. */
export function JobArticle({ blocks }: { blocks: ReadonlyArray<Block> }) {
  return (
    <div className="text-[1.0625rem] leading-relaxed">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h4":
          case "h5":
            return (
              <h2
                key={i}
                className="mt-12 mb-5 font-display text-[clamp(1.5rem,1.25rem+0.8vw,2rem)] leading-tight font-medium first:mt-0"
              >
                <Inline segs={b.text} />
              </h2>
            );
          case "h6":
            return (
              <h3
                key={i}
                className="mt-8 mb-3 text-[1.125rem] font-semibold text-ink"
              >
                <Inline segs={b.text} />
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mb-5">
                <Inline segs={b.text} />
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-teal bg-[#e7f3f2] px-6 py-5 font-semibold text-teal"
              >
                <Inline segs={b.text} />
              </blockquote>
            );
          case "ul":
          case "ol":
            return (
              <ul key={i} className="my-6 grid gap-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-2.5 size-2 shrink-0 rotate-45 bg-brand"
                    />
                    <span>
                      <Inline segs={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}
