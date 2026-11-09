import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFormV2 } from "@/components/v2/contact-form";
import { JsonLd } from "@/components/v2/json-ld";
import { JobArticle } from "@/components/v2/job-article";
import { Reveal } from "@/components/v2/reveal";
import { ArrowRight, Container, Eyebrow, TextLink } from "@/components/v2/ui";
import {
  jobArticle,
  jobCity,
  jobMetaDescription,
  jobProfile,
  jobSupport,
  jobTasks,
  jobTitle,
} from "@/content/job-text";
import { jobDetails } from "@/content/jobs-data";
import { company } from "@/content/site";
import type { Block, JobDetail, Seg } from "@/content/types";
import { href, type Locale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { pathMetadata, SITE_URL } from "@/i18n/metadata";

/** Path of one listing in a given language. */
const jobPath = (locale: Locale, slug: string) =>
  `${href(locale, "jobsGermany")}/${slug}`;

/** How many similar positions are shown under a listing. */
const RELATED = 4;

export function generateStaticParams() {
  return jobDetails.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/jobs/germany/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  if (!job) return {};
  const locale = await getLocale();
  return pathMetadata(
    (l) => jobPath(l, slug),
    {
      title: jobTitle(job, locale),
      description: jobMetaDescription(job, locale),
    },
    { absoluteTitle: true },
  );
}

/** Listing text as simple HTML, for the job description search engines show. */
const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const segs = (text: Seg[]) =>
  text.map((s) => (s.br ? "<br>" : esc(s.t ?? ""))).join("");
function blocksToHtml(blocks: Block[]) {
  return blocks
    .map((b) => {
      if ("items" in b)
        return `<${b.type}>${b.items.map((i) => `<li>${segs(i)}</li>`).join("")}</${b.type}>`;
      const tag = b.type === "quote" ? "p" : b.type;
      return `<${tag}>${segs(b.text)}</${tag}>`;
    })
    .join("");
}

/** Date in the listing as YYYY-MM-DD. */
function isoDate(date: string) {
  const d = new Date(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/**
 * Google for Jobs data (schema.org JobPosting) for one listing in one language; SBP Management is
 * the contact, the hospital is not named.
 */
function jobPosting(job: JobDetail, locale: Locale, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: jobTitle(job, locale),
    description: blocksToHtml(jobArticle(job, locale)),
    datePosted: isoDate(job.date),
    validThrough: `${job.validThrough}T23:59:59+01:00`,
    identifier: {
      "@type": "PropertyValue",
      name: company.name,
      value: job.category,
    },
    hiringOrganization: {
      "@type": "Organization",
      name: company.name,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/sbp-logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.city,
        postalCode: job.location.postalCode,
        addressRegion: job.location.region,
        addressCountry: "DE",
      },
    },
    industry: "Healthcare",
    occupationalCategory: "Physician",
    responsibilities: jobTasks(job, locale).join("; "),
    qualifications: jobProfile(job, locale).join("; "),
    jobBenefits: jobSupport(locale).join("; "),
    directApply: true,
    url,
  };
}

/** Other open positions, the same department first, then the same town. */
function relatedJobs(job: JobDetail) {
  const score = (j: JobDetail) =>
    (j.department === job.department ? 2 : 0) +
    (j.location.city === job.location.city ? 1 : 0);
  return jobDetails
    .filter((j) => j.slug !== job.slug)
    .map((j, i) => ({ j, i, s: score(j) }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, RELATED)
    .map(({ j }) => j);
}

/**
 * One job listing: header, listing text in the visitor's language, application form, similar
 * positions and a link to the guide for doctors.
 */
export default async function JobListingPage({
  params,
}: PageProps<"/[locale]/jobs/germany/[slug]">) {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  if (!job) notFound();

  const locale = await getLocale();
  const dict = await getDictionary();
  const { jobListing: t, jobRegions, contactPage, jobFilter } = dict;
  const published = new Date(job.date);
  const date = Number.isNaN(published.getTime())
    ? job.date
    : published.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
  const related = relatedJobs(job);

  return (
    <>
      <JsonLd
        data={jobPosting(job, locale, `${SITE_URL}${jobPath(locale, slug)}`)}
      />
      <section className="bg-paper pt-14 pb-14 lg:pt-20 lg:pb-20">
        <Container>
          <TextLink
            href={`${href(locale, "jobsGermany")}#openings`}
            className="mb-10 text-ink"
          >
            {t.back}
          </TextLink>
          <Eyebrow>
            {t.eyebrow} · {jobRegions.germany.openings.ref} {job.category}
          </Eyebrow>
          <h1 className="max-w-[56rem] font-display text-[clamp(2rem,1.3rem+2.4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.02em]">
            {jobTitle(job, locale)}
          </h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[0.9375rem]">
            <div>
              <dt className="text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
                {t.published}
              </dt>
              <dd className="mt-1 text-ink">{date}</dd>
            </div>
            <div>
              <dt className="text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
                {jobFilter.department}
              </dt>
              <dd className="mt-1 text-ink">
                {jobFilter.departments[job.department]} · {jobCity(job, locale)}
              </dd>
            </div>
            <div>
              <dt className="text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
                {t.contact}
              </dt>
              <dd lang="de" className="mt-1 text-ink">
                {job.author}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal>
            <div className="max-w-[46rem]">
              <JobArticle blocks={jobArticle(job, locale)} />
              <p className="mt-10">
                <TextLink
                  href={href(locale, "careerDoctors")}
                  className="text-ink"
                >
                  {jobFilter.guide}
                </TextLink>
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-paper p-6 sm:p-8">
              <h2 className="font-display text-[1.75rem] leading-tight font-medium">
                {t.applyTitle}
              </h2>
              <p className="mt-3 mb-8 text-[0.9375rem] leading-relaxed">
                {t.applyBody}
              </p>
              {/* SBP reads applications in German, so the German title goes with them. */}
              <ContactFormV2
                copy={contactPage.form}
                job={{ title: jobTitle(job, "de"), error: t.jobError }}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Similar positions: keeps visitors on the site and links every listing to others. */}
      <section className="border-t border-line bg-paper py-16 lg:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] leading-tight font-medium">
            {jobFilter.related}
          </h2>
          <ul className="mt-8 border-t border-line">
            {related.map((r) => (
              <li key={r.slug} className="border-b border-line">
                <Link
                  href={jobPath(locale, r.slug)}
                  className="group grid gap-2 py-5 transition-colors hover:bg-white sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-4"
                >
                  <span>
                    <span className="block font-display text-[1.25rem] leading-snug text-ink group-hover:text-brand">
                      {jobTitle(r, locale)}
                    </span>
                    <span className="mt-1 block text-[0.875rem] text-muted">
                      {jobFilter.departments[r.department]} ·{" "}
                      {jobCity(r, locale)}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand">
                    {jobRegions.germany.openings.view}
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
