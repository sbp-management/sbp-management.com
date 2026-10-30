import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import Link from "next/link";
import { Reveal } from "@/components/v2/reveal";
import { CandidatesPanel } from "@/components/v2/candidates-panel";
import { CareerCards } from "@/components/v2/career-page";
import { photoSet } from "@/content/photo-sets";
import { Band, SquareList } from "@/components/v2/page-parts";
import {
  ArrowRight,
  ButtonLink,
  Eyebrow,
  Heading,
  TextLink,
} from "@/components/v2/ui";
import { jobDetails } from "@/content/jobs-data";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { jobRegions } = await getDictionary();
  return pageMetadata("jobsGermany", jobRegions.germany.meta);
}

/** Germany: Career in Germany, the current openings (the German listings), and personal support. */
export default async function GermanyJobsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { jobs, jobRegions, candidateSupport: support } = dict;
  const o = jobRegions.germany.openings;

  return (
    <>
      <Review
        kind="risk"
        note="Photos uploaded 2026-10-22 – confirm their source and that the licence allows use on the website"
      >
        <CandidatesPanel
          locale={locale}
          copy={jobs.candidates}
          photos={photoSet("careers", dict.photos.alt)}
          as="h1"
        />
      </Review>

      {/* Current openings: the job listings of the German site, each opening its full listing. */}
      <section id="openings" className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[85rem] px-5 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>{o.eyebrow}</Eyebrow>
              <Heading size="md">{o.title}</Heading>
              {o.note && (
                <p className="mt-4 text-[0.875rem] text-muted">{o.note}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-6">
              <TextLink href={href(locale, "jobs")} className="text-ink">
                {jobRegions.back}
              </TextLink>
            </div>
          </Reveal>

          <Review
            kind="approve"
            note="Listings dated 2023–2025 (from the old site) – confirm which are still open"
            className="mt-10 lg:mt-14"
          >
            <ul className="border-t border-line">
              {jobDetails.map((job, i) => (
                <Reveal
                  as="li"
                  key={job.slug}
                  delay={(i % 4) * 60}
                  variant="right"
                  className="border-b border-line"
                >
                  <Link
                    href={`${href(locale, "jobsGermany")}/${job.slug}`}
                    lang="de"
                    className="group grid gap-2 py-5 transition-colors hover:bg-white sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
                  >
                    <span className="text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
                      <span lang="en">{o.ref}</span> {job.category}
                    </span>
                    <span className="font-display text-[1.25rem] leading-snug text-ink group-hover:text-brand">
                      {job.title}
                    </span>
                    <span
                      lang="en"
                      className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand"
                    >
                      {o.view}
                      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </Review>
        </div>
      </section>

      {/* One page per profession: recognition, language and visa for each. */}
      <CareerCards />

      {/* Personal support (brief section 13) */}
      <Band tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="teal">{support.eyebrow}</Eyebrow>
            <Heading size="md">{support.title}</Heading>
            <p className="mt-6 text-[1.0625rem] leading-relaxed">
              {support.body}
            </p>
            <ButtonLink
              href={href(locale, "contact")}
              variant="teal"
              className="mt-10"
            >
              {support.apply}
            </ButtonLink>
          </Reveal>
          <div>
            <p className="mb-4 text-[0.75rem] font-bold tracking-[0.14em] text-muted uppercase">
              {support.listTitle}
            </p>
            <SquareList items={support.items} columns={1} />
          </div>
        </div>
      </Band>
    </>
  );
}
