import { Fragment } from "react";
import type { Block, Seg } from "@/content/types";

const LINK = "text-[#0000ee] underline";

/** Renders inline runs (bold / italic / links / line breaks) as React elements. */
export function Inline({ segs }: { segs: ReadonlyArray<Seg> }) {
  return (
    <>
      {segs.map((s, i) => {
        if (s.br) return <br key={i} />;
        let node: React.ReactNode = s.t;
        if (s.b) node = <strong>{node}</strong>;
        if (s.i) node = <em>{node}</em>;
        if (s.href) node = <a href={s.href} className={LINK}>{node}</a>;
        return <Fragment key={i}>{node}</Fragment>;
      })}
    </>
  );
}

/** Lines separated by <br>; an empty line renders as a blank line, like the source. */
export function Lines({ lines }: { lines: ReadonlyArray<ReadonlyArray<Seg>> }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.length ? <Inline segs={line} /> : "‍"}
        </Fragment>
      ))}
    </>
  );
}

/** Job-article typography, measured from the live rich-text styles. */
export function Article({ blocks }: { blocks: ReadonlyArray<Block> }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h4":
            return (
              <h2 key={i} className="mb-4 text-[28px] leading-[1.2] font-bold tracking-[-0.02em] text-ink md:text-[40px] md:leading-[48px]">
                <Inline segs={b.text} />
              </h2>
            );
          case "h5":
            return (
              <h2 key={i} className="mt-2.5 mb-4 text-[26px] leading-[1.2] font-bold tracking-[-0.02em] text-ink md:text-[32px] md:leading-[38.4px]">
                <Inline segs={b.text} />
              </h2>
            );
          case "h6":
            return (
              <h3 key={i} className="mb-4 text-[24px] leading-8 font-semibold tracking-[-0.02em] text-[#333]">
                <Inline segs={b.text} />
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mb-8 text-[16px] leading-8 tracking-[-0.02em] text-ink">
                <Inline segs={b.text} />
              </p>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-8 bg-mint-soft p-6 text-[16px] leading-8 text-mint-deep">
                <Inline segs={b.text} />
              </blockquote>
            );
          case "ul":
          case "ol": {
            const List = b.type;
            return (
              <List
                key={i}
                // flow-root keeps the last item's 14px margin inside the list, as Webflow's rich text does.
                className={`my-8 flow-root pl-10 text-[16px] leading-6 text-ink ${b.type === "ul" ? "list-disc" : "list-decimal"}`}
              >
                {b.items.map((item, j) => (
                  <li key={j} className="mb-3.5">
                    <Inline segs={item} />
                  </li>
                ))}
              </List>
            );
          }
        }
      })}
    </div>
  );
}
