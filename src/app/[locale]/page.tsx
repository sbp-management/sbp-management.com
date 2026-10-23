import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import { CountUp } from "@/components/v2/count-up";
import { Mosaic } from "@/components/v2/mosaic";
import { ProjectCard } from "@/components/v2/project-card";
import { RegionMap } from "@/components/v2/region-map";
import { PhotoSlideshow } from "@/components/v2/photo-slideshow";
import { photoSet } from "@/content/photo-sets";
import { Ticker } from "@/components/v2/ticker";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Heading,
  TextLink,
} from "@/components/v2/ui";
import { company } from "@/content/site";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Review } from "@/components/v2/review";
import { HeroSlideshow } from "@/components/v2/hero-slideshow";

/** Inline style helpers for the motion classes in site.css. */
const at = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
const nth = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** Splits a heading into words that rise in one after another (`.hero-word`). */
function Words({ text, from = 0 }: { text: string; from?: number }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      <span className="hero-word" style={nth(from + i)}>
        {word}
      </span>{" "}
    </span>
  ));
}

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getDictionary();
  return pageMetadata("home", meta, { absoluteTitle: true });
}

export default async function HomePage() {
  const locale = await getLocale();
  const { home, photos } = await getDictionary();
  const {
    hero,
    ticker,
    intro,
    projects,
    services,
    process,
    germany,
    network,
    contact,
  } = home;
  // Word offsets so the rise-in animation runs across all headline lines in order.
  const lineStart = hero.titleLines.map((_, i) =>
    hero.titleLines
      .slice(0, i)
      .reduce((n, line) => n + line.split(" ").length, 0),
  );
  const titleWords = hero.titleLines.join(" ").split(" ").length;
  // How many font-sizes wide the longest line is (Cyrillic letters are wider), so the headline
  // shrinks just enough to keep every line unbroken within the screen and the 44rem text column
  // (which sits beside the map on wide screens) in every language.
  const ems = (line: string, latin: number, cyrillic: number) =>
    line.length * (/[\u0400-\u04FF]/.test(line) ? cyrillic : latin);
  const fit = {
    "--title-fit": Math.max(...hero.titleLines.map((l) => ems(l, 0.48, 0.62))),
    "--accent-fit": ems(hero.titleAccent, 0.512, 0.66),
  } as React.CSSProperties;

  return (
    <>
      {/* 1 · Hero: positioning + the three core regions */}
      <section className="relative overflow-hidden bg-hero pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
        {/* Background slideshow of the project photos (60% opacity) */}
        <>
          <HeroSlideshow />
        </>
        <Container className="relative z-[2] grid items-center gap-12 xl:grid-cols-[44rem_1fr] xl:gap-14">
          {/* variant "none": no slide of its own, but the headline words replay when scrolled back to */}
          <Reveal
            variant="none"
            className="flex max-w-[44rem] flex-col items-start"
          >
            <div className="hero-in" style={at(0)}>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            {/* Sizes shrink with the screen only as far as needed to keep every line unbroken. */}
            <h1
              style={fit}
              className="font-display text-[min(4.5rem,calc((100vw-4rem)/var(--title-fit)),calc(44rem/var(--title-fit)))] leading-[1.05] font-medium tracking-[-0.02em]"
            >
              {hero.titleLines.map((line, i) => (
                <span key={line} className="block whitespace-nowrap">
                  <Words text={line} from={lineStart[i]} />
                </span>
              ))}
              <span className="mt-4 block text-[min(2.375rem,calc((100vw-4rem)/var(--accent-fit)),calc(44rem/var(--accent-fit)))] leading-[1.15] tracking-[-0.01em] whitespace-nowrap text-brand">
                <Words text={hero.titleAccent} from={titleWords} />
              </span>
            </h1>
            <p
              className="hero-in mt-8 text-[1.125rem] leading-relaxed text-ink sm:text-[1.25rem]"
              style={at(700)}
            >
              {hero.lead}
            </p>
            <p className="hero-in mt-4 text-[#4a5070]" style={at(850)}>
              {hero.body}
            </p>
            <div
              className="hero-in mt-10 flex flex-wrap gap-4"
              style={at(1000)}
            >
              <ButtonLink href={href(locale, "projects")}>
                {hero.primary}
              </ButtonLink>
              <ButtonLink
                href={href(locale, "hospitals")}
                variant="outline"
                className="border-ink/40"
              >
                {hero.secondary}
              </ButtonLink>
            </div>
            <div className="hero-in" style={at(1150)}>
              <TextLink
                href={href(locale, "candidates")}
                className="mt-6 text-[0.9375rem] text-teal-deep"
              >
                {hero.candidates}
              </TextLink>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            variant="scale"
            className="w-full max-w-[40rem] xl:max-w-none"
          >
            <RegionMap
              regions={hero.regions}
              cities={hero.mapCities}
              label={hero.mapLabel}
            />
          </Reveal>
        </Container>
      </section>

      <Ticker items={ticker} />

      {/* 2 · What SBP does + claim */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <Reveal
            variant="left"
            className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20"
          >
            <div>
              <Eyebrow>{intro.eyebrow}</Eyebrow>
              <Heading>{intro.title}</Heading>
            </div>
            <p className="self-end text-[1.125rem] leading-relaxed sm:text-[1.25rem]">
              {intro.body}
            </p>
          </Reveal>
          <Reveal as="div" delay={100}>
            <ul className="stagger mt-14 grid grid-cols-2 border-t border-ink/15 sm:grid-cols-4 lg:mt-20">
              {intro.pillars.map((p, i) => (
                <li
                  key={p}
                  style={nth(i)}
                  className="flex items-center gap-3 border-b border-ink/15 py-6 sm:border-b-0 sm:py-8"
                >
                  <span
                    aria-hidden
                    className="size-3 rotate-45 bg-brand"
                    style={{ opacity: 1 - i * 0.2 }}
                  />
                  <span className="font-display text-[clamp(1.4rem,1rem+1.4vw,2.25rem)] text-ink">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* 3 · Project cards: Serbia, Kazakhstan, Germany, exchange */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[40rem]">
              <Eyebrow>{projects.eyebrow}</Eyebrow>
              <Heading>{projects.title}</Heading>
              <p className="mt-6 text-[1.0625rem]">{projects.body}</p>
            </div>
            <TextLink
              href={href(locale, "projects")}
              className="shrink-0 text-ink"
            >
              {projects.all}
            </TextLink>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {projects.items.map((p, i) => (
              <Reveal
                as="li"
                key={p.code}
                delay={(i % 2) * 150}
                variant="scale"
              >
                <ProjectCard
                  project={p}
                  locale={locale}
                  cta={projects.cta}
                  statusLabel={projects.statusLabel}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4 · Competencies */}
      <section className="relative overflow-hidden bg-ink py-20 text-white/75 lg:py-28">
        <div
          aria-hidden
          className="bg-dots absolute inset-0 text-white/[0.05]"
        />
        <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="light">{services.eyebrow}</Eyebrow>
            <Heading className="text-white">{services.title}</Heading>

            <div className="mt-10 border-t border-line-dark pt-8">
              <p className="mb-4 text-[0.75rem] font-bold tracking-[0.14em] text-lilac uppercase">
                {process.eyebrow}
              </p>
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-[1.375rem] text-white">
                {process.steps.map((s, i) => (
                  <li
                    key={s}
                    className="cycle-step flex items-center gap-3"
                    style={nth(i)}
                  >
                    <span aria-hidden className="size-1.5 bg-brand" />
                    {s}.
                  </li>
                ))}
              </ol>
              <p className="mt-4 max-w-[30rem]">{process.body}</p>
            </div>
            <ButtonLink
              href={href(locale, "services")}
              variant="light"
              className="mt-10"
            >
              {services.cta}
            </ButtonLink>
          </Reveal>

          <ol className="border-t border-line-dark">
            {services.items.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                variant="right"
                delay={i * 60}
                className="group/row grid gap-2 border-b border-line-dark py-8 transition-colors hover:bg-white/[0.03] sm:grid-cols-[4.5rem_1fr]"
              >
                <span className="font-display text-[1.125rem] text-lilac transition-transform duration-300 group-hover/row:translate-x-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.625rem] leading-tight font-medium text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[34rem]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5 · Germany: hospital and process projects */}
      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="none" className="relative">
            <div className="slide-fade parallax relative aspect-[4/3.4] overflow-hidden">
              <PhotoSlideshow
                slides={photoSet("germanyHospitals", photos.alt)}
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
            <Mosaic
              cols={3}
              tile={28}
              pattern={[0, 0.5, 1, 0.3, 0, 0.7, 0, 0.9, 0]}
              className="absolute -right-3 -bottom-6 sm:-right-6"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>{germany.eyebrow}</Eyebrow>
            <Heading>{germany.title}</Heading>
            {germany.body.map((p) => (
              <p key={p} className="mt-6 text-[1.0625rem] leading-relaxed">
                {p}
              </p>
            ))}
            <Review
              kind="approve"
              note="Figures carried over from the old site – confirm “>40 partner hospitals” before publishing"
              className="mt-10"
            >
              <dl className="grid grid-cols-3 border-y border-line">
                {germany.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-5 ${i ? "border-l border-line pl-4 sm:pl-6" : ""}`}
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] leading-none text-ink">
                      <CountUp value={s.value} />
                    </dd>
                    <dd
                      aria-hidden
                      className="mt-2 text-[0.8125rem] leading-snug text-muted"
                    >
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Review>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={href(locale, "germany")}>
                {germany.cta}
              </ButtonLink>
              <ButtonLink href={href(locale, "workforce")} variant="outline">
                {germany.ctaSecondary}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6 · Partners / network (names only once approved) */}
      <section className="bg-paper py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{network.eyebrow}</Eyebrow>
            <Heading size="md">{network.title}</Heading>
            <p className="mt-6">{network.body}</p>
          </Reveal>
          <Review
            kind="approve"
            note="Partner names and logos can only be shown once each organisation has approved being named"
          >
            <ul className="grid gap-px bg-paper-2 sm:grid-cols-2">
              {network.categories.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 90}
                  variant="scale"
                  className="group/cat flex items-start gap-4 bg-paper p-6 transition-colors hover:bg-brand-soft sm:bg-white"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 grid size-5 shrink-0 grid-cols-2 gap-px transition-transform duration-500 group-hover/cat:rotate-90"
                  >
                    {[1, 0.4, 0.6, 0.2].map((o, j) => (
                      <span
                        key={j}
                        className="bg-brand"
                        style={{ opacity: (o + i * 0.13) % 1 || 1 }}
                      />
                    ))}
                  </span>
                  <span className="font-semibold text-ink">{c}</span>
                </Reveal>
              ))}
            </ul>
          </Review>
        </Container>
      </section>

      {/* 7 · Contact / project inquiry */}
      <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
        <Mosaic
          cols={6}
          tile={44}
          pattern={[
            0, 0, 0, 0.15, 0.3, 0.1, 0, 0, 0.2, 0, 0.12, 0.35, 0, 0, 0, 0.25, 0,
            0.1,
          ]}
          color="var(--color-brand)"
          className="pointer-events-none absolute top-0 right-0 hidden md:block"
        />
        {/* drifting squares */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[
            {
              c: "top-[18%] left-[62%] size-10 bg-brand/10",
              d: 0,
              dx: "18px",
              dy: "-30px",
              dr: "20deg",
            },
            {
              c: "top-[55%] left-[78%] size-16 bg-brand/[0.07]",
              d: 1200,
              dx: "-24px",
              dy: "-18px",
              dr: "-14deg",
            },
            {
              c: "top-[70%] left-[56%] size-6 bg-ink/10",
              d: 600,
              dx: "30px",
              dy: "-40px",
              dr: "45deg",
            },
            {
              c: "top-[30%] left-[88%] size-5 bg-brand/20",
              d: 2000,
              dx: "-14px",
              dy: "26px",
              dr: "30deg",
            },
          ].map((sq, i) => (
            <span
              key={i}
              className={`drift absolute hidden md:block ${sq.c}`}
              style={
                {
                  "--d": `${sq.d}ms`,
                  "--dx": sq.dx,
                  "--dy": sq.dy,
                  "--dr": sq.dr,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <Container className="relative">
          <Reveal className="max-w-[46rem]">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <Heading>{contact.title}</Heading>
            <p className="mt-6 text-[1.125rem] leading-relaxed">
              {contact.body}
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ButtonLink
                href={href(locale, "contact")}
                className="shrink-0 self-start sm:self-auto"
              >
                {contact.primary}
              </ButtonLink>
              <p className="text-[0.9375rem]">
                {contact.or}:{" "}
                <a
                  href={company.phoneHref}
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                >
                  {company.phone}
                </a>
                {" · "}
                <a
                  href={company.emailHref}
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
