import { Fragment } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container, Eyebrow } from "./ui";
import { Review } from "./review";

type Doc = Dictionary["legal"]["privacy"];

/** Highlights [placeholders] that still need to be filled in before the page goes live. */
function WithPlaceholders({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <Review
        key={i}
        kind="approve"
        note="Placeholder – fill in before publishing"
        inline
      >
        {part}
      </Review>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** Privacy Policy / Imprint: plain, readable long-form text. */
export function LegalPage({ doc, risk }: { doc: Doc; risk: string }) {
  return (
    <>
      <section className="bg-paper pt-14 pb-12 lg:pt-20 lg:pb-16">
        <Container>
          <Eyebrow>{doc.eyebrow}</Eyebrow>
          <h1 className="font-display text-[clamp(2.25rem,1.3rem+3vw,4rem)] leading-[1.05] font-medium tracking-[-0.02em]">
            {doc.title}
          </h1>
          {doc.note && (
            <p className="mt-6 max-w-[46rem] text-[1.0625rem]">{doc.note}</p>
          )}
          {doc.updated && (
            <p className="mt-3 text-[0.875rem] text-muted">
              <WithPlaceholders text={doc.updated} />
            </p>
          )}
        </Container>
      </section>

      <Container className="py-14 lg:py-20">
        <Review kind="risk" note={risk} className="max-w-[46rem]">
          <article className="max-w-[46rem] text-[1rem] leading-relaxed">
            {doc.sections.map((section) => (
              <section key={section.heading} className="mt-12 first:mt-0">
                <h2 className="font-display text-[clamp(1.5rem,1.2rem+0.8vw,2rem)] leading-tight font-medium">
                  {section.heading}
                </h2>
                {section.blocks.map((block, i) =>
                  "h" in block ? (
                    <h3 key={i} className="mt-8 font-semibold text-ink">
                      {block.h}
                    </h3>
                  ) : "ul" in block ? (
                    <ul key={i} className="mt-3 grid gap-2">
                      {block.ul.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2.5 size-1.5 shrink-0 bg-brand"
                          />
                          <span>
                            <WithPlaceholders text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="mt-3">
                      <WithPlaceholders text={block.p} />
                    </p>
                  ),
                )}
              </section>
            ))}
          </article>
        </Review>
      </Container>
    </>
  );
}
