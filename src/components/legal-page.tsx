import { legalDocs } from "@/content/legal-data";
import { PageShell } from "./page-shell";
import { Lines } from "./rich-text";
import { Container } from "./ui";

/** Impressum and Datenschutz: a 48px title and 16/32 text in an 870px column. */
export function LegalPage({ doc }: { doc: keyof typeof legalDocs }) {
  const { title, paragraphs } = legalDocs[doc];
  return (
    <PageShell>
      <section className="px-[3%] py-[60px]">
        <Container size="prose">
          <h1 className="mb-4 text-[35px] leading-[1.2] font-bold tracking-[-0.04em] text-ink md:text-[48px] md:leading-[57.6px]">
            {title}
          </h1>
          {paragraphs.map((lines, i) => (
            <p key={i} className="mb-2.5 text-left text-[16px] leading-8 tracking-[-0.02em] text-ink">
              <Lines lines={lines} />
            </p>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}
