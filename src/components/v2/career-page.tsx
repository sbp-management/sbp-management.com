import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  LinkCard,
  NumberedCards,
  PageHero,
  SectionTitle,
  SplitText,
  SquareList,
} from "@/components/v2/page-parts";
import { JsonLd } from "@/components/v2/json-ld";
import { Review } from "@/components/v2/review";
import { ArrowRight, Heading } from "@/components/v2/ui";
import { jobDetails } from "@/content/jobs-data";
import { photoSet, type PhotoSet } from "@/content/photo-sets";
import { href, type PageKey } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { pageMetadata, SITE_URL } from "@/i18n/metadata";

/** Dictionary keys of the profession pages (content in de-careers.ts). */
export type CareerKey =
  | "careerNursesPage"
  | "careerDoctorsPage"
  | "careerMidwivesPage"
  | "careerMedtechPage"
  | "careerSterilePage";

const CAREERS: {
  key: CareerKey;
  page: PageKey;
  photos: PhotoSet;
  jobs: string[];
}[] = [
  // `jobs`: start of the slugs of the job listings (jobs-data.ts) that belong to the profession.
  {
    key: "careerNursesPage",
    page: "careerNurses",
    photos: "careers",
    jobs: ["pflege"],
  },
  {
    key: "careerDoctorsPage",
    page: "careerDoctors",
    photos: "careers",
    jobs: ["assistenzarzt", "facharzt", "oberarzt"],
  },
  {
    key: "careerMidwivesPage",
    page: "careerMidwives",
    photos: "careers",
    jobs: ["hebamme"],
  },
  {
    key: "careerMedtechPage",
    page: "careerMedtech",
    photos: "careers",
    jobs: [
      "anasthesietechnische",
      "operationstechnische",
      "mtra",
      "mtr-",
      "mtl",
    ],
  },
  {
    key: "careerSterilePage",
    page: "careerSterile",
    photos: "sterileSupply",
    jobs: ["aemp", "zsva", "sterilgut"],
  },
];

const STOCK_NOTE =
  "Photos uploaded 2026-10-22 – confirm their source and that the licence allows use on the website";

export async function careerMetadata(key: CareerKey): Promise<Metadata> {
  const { meta } = (await getDictionary())[key];
  const career = CAREERS.find((c) => c.key === key)!;
  return pageMetadata(career.page, meta, { absoluteTitle: true });
}

/**
 * One profession under Jobs in Germany: hero, requirements, the path in four steps, recognition /
 * visa / work, the matching open positions, personal support, questions, the other professions.
 * Adds breadcrumb and FAQ structured data so search engines understand the page.
 */
export async function CareerPage({ career: key }: { career: CareerKey }) {
  const locale = await getLocale();
  const dict = await getDictionary();
  const page = dict[key];
  const { careerPage: t, candidateSupport: support } = dict;
  const career = CAREERS.find((c) => c.key === key)!;
  const jobs = jobDetails.filter((job) =>
    career.jobs.some((start) => job.slug.startsWith(start)),
  );
  const others = CAREERS.filter((c) => c.key !== key);
  const url = (p: string) => `${SITE_URL}${p}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            [t.crumbs.home, href(locale, "home")],
            [t.crumbs.jobs, href(locale, "jobs")],
            [t.crumbs.germany, href(locale, "jobsGermany")],
            [page.title, href(locale, career.page)],
          ].map(([name, path], i) => ({
            "@type": "ListItem",
            position: i + 1,
            name,
            item: url(path),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <Review kind="risk" note={STOCK_NOTE}>
        <PageHero
          eyebrow={t.eyebrow}
          title={page.title}
          lead={page.lead}
          body={page.body}
          photo={photoSet(career.photos, dict.photos.alt)}
        />
      </Review>

      <Review
        kind="approve"
        note="Draft text (recognition, language, visa) – check the facts and approve before relying on it"
      >
        <Band>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <Heading size="md">{t.requirements}</Heading>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
                {t.note}
              </p>
            </Reveal>
            <SquareList items={page.requirements} columns={1} />
          </div>
        </Band>

        <Band tone="paper">
          <SectionTitle title={t.steps} />
          <NumberedCards items={page.steps} />
        </Band>

        {page.sections.map((s, i) => (
          <Band key={s.title} tone={i % 2 ? "paper" : "white"}>
            <SplitText title={s.title} body={s.body} />
          </Band>
        ))}
      </Review>

      {/* The open positions of this profession (job listings of the German site). */}
      <Band tone={page.sections.length % 2 ? "paper" : "white"}>
        <SectionTitle title={t.openings.title} />
        {jobs.length ? (
          <ul className="border-t border-line">
            {jobs.map((job) => (
              <li key={job.slug} className="border-b border-line">
                <Link
                  href={`${href(locale, "jobsGermany")}/${job.slug}`}
                  lang="de"
                  className="group grid gap-2 py-5 transition-colors hover:bg-paper sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-4"
                >
                  <span className="font-display text-[1.25rem] leading-snug text-ink group-hover:text-brand">
                    {job.title}
                  </span>
                  <span
                    lang={locale}
                    className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand"
                  >
                    {t.openings.view}
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-[44rem] text-[1.0625rem] leading-relaxed">
            {t.openings.none}
          </p>
        )}
      </Band>

      <Band tone={page.sections.length % 2 ? "white" : "paper"}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Heading size="md">{support.title}</Heading>
            <p className="mt-6 text-[1.0625rem] leading-relaxed">
              {support.body}
            </p>
          </Reveal>
          <SquareList items={support.items} columns={1} />
        </div>
      </Band>

      <Review
        kind="approve"
        note="Questions and answers – confirm especially that support is free of charge for applicants"
      >
        <Band tone={page.sections.length % 2 ? "paper" : "white"}>
          <SectionTitle title={t.faq} />
          <div className="max-w-[52rem] border-t border-line">
            {page.faq.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[1.1875rem] leading-snug text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="mt-1 text-[1.25rem] leading-none text-brand transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 text-[1rem] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Band>
      </Review>

      <Band tone={page.sections.length % 2 ? "white" : "paper"}>
        <SectionTitle title={t.others} />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {others.map((c, i) => (
            <Reveal as="li" key={c.key} delay={i * 90} variant="scale">
              <LinkCard
                title={dict[c.key].card.title}
                body={dict[c.key].card.body}
                href={href(locale, c.page)}
                cta={t.more}
              />
            </Reveal>
          ))}
        </ul>
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={t.apply} />
    </>
  );
}

/** Cards linking to every profession page (used on the Jobs in Germany page). */
export async function CareerCards() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.careerPage;
  return (
    <Band>
      <SectionTitle
        eyebrow={t.overview.eyebrow}
        title={t.overview.title}
        body={t.overview.body}
      />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CAREERS.map((c, i) => (
          <Reveal as="li" key={c.key} delay={(i % 3) * 90} variant="scale">
            <LinkCard
              title={dict[c.key].card.title}
              body={dict[c.key].card.body}
              href={href(locale, c.page)}
              cta={t.more}
              index={i}
            />
          </Reveal>
        ))}
      </ul>
    </Band>
  );
}
