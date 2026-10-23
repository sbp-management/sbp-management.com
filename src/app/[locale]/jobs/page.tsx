import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/v2/reveal";
import { FLAGS, REGION_PATTERNS } from "@/components/v2/flags";
import { Mosaic } from "@/components/v2/mosaic";
import { ArrowRight, Container, Eyebrow, Heading } from "@/components/v2/ui";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { jobs } = await getDictionary();
  return pageMetadata("jobs", jobs.meta);
}

export default async function JobsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { jobs } = dict;
  const { boards } = jobs;

  return (
    <>
      {/* Job boards first: one card per region, each leading to that region's job board. */}
      <section
        id="job-boards"
        className="bg-paper pt-16 pb-20 lg:pt-24 lg:pb-28"
      >
        <Container>
          <Reveal className="max-w-[40rem]">
            <Eyebrow>{boards.eyebrow}</Eyebrow>
            <Heading as="h1">{boards.title}</Heading>
            <p className="mt-6 text-[1.0625rem]">{boards.body}</p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {boards.items.map((board, i) => (
              <Reveal as="li" key={board.code} delay={i * 120} variant="scale">
                <article className="glow-border group relative flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-lift">
                  <>
                    {/* White band like INT: code on the left, the flag on the right fading in from white. */}
                    <div className="relative flex h-48 items-end overflow-hidden border-b border-line bg-white px-6 pb-5 sm:px-8">
                      <div className="flag-fade absolute inset-y-0 right-0 w-[70%] overflow-hidden md:max-lg:w-[50%]">
                        <Image
                          src={FLAGS[board.code].src}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 22vw, 70vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* the animated squares sit above the code, like on the INT card */}
                      <Mosaic
                        cols={4}
                        tile={20}
                        pattern={
                          REGION_PATTERNS[board.code] ?? REGION_PATTERNS.DE
                        }
                        className="absolute top-6 left-6 transition-transform duration-500 group-hover:scale-105 sm:left-8"
                      />
                      <p className="relative font-display text-[3.5rem] leading-none md:max-lg:text-[3rem] font-medium text-ink">
                        {board.code}
                      </p>
                    </div>
                  </>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-6 sm:px-8 sm:pb-8">
                    <p className="text-[0.75rem] font-bold tracking-[0.14em] text-brand uppercase">
                      {board.region}
                    </p>
                    <h3 className="mt-2 font-display text-[1.5rem] leading-tight font-medium">
                      <Link
                        href={href(locale, board.link)}
                        className="after:absolute after:inset-0"
                      >
                        {board.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed">
                      {board.body}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-7">
                      <span
                        aria-hidden
                        className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand"
                      >
                        {boards.cta}
                        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                      {board.note && (
                        <span className="text-[0.75rem] text-muted">
                          {board.note}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
