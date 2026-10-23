import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactFormV2 } from "@/components/v2/contact-form";
import { JobArticle } from "@/components/v2/job-article";
import { Reveal } from "@/components/v2/reveal";
import { Container, Eyebrow, TextLink } from "@/components/v2/ui";
import { jobDetails } from "@/content/jobs-data";
import { href, type Locale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { pathMetadata } from "@/i18n/metadata";

/** Path of one listing in a given language (the listing text itself is German everywhere). */
const jobPath = (locale: Locale, slug: string) =>
  `${href(locale, "jobsGermany")}/${slug}`;

export function generateStaticParams() {
  return jobDetails.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/jobs/germany/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  if (!job) return {};
  const { jobListing } = await getDictionary();
  return pathMetadata((l) => jobPath(l, slug), {
    title: job.title,
    description: `${jobListing.eyebrow}: ${job.title}`,
  });
}

/** One job listing in the design of the relaunch: header, listing text, contact person, application form. */
export default async function JobListingPage({
  params,
}: PageProps<"/[locale]/jobs/germany/[slug]">) {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  if (!job) notFound();

  const locale = await getLocale();
  const dict = await getDictionary();
  const { jobListing: t, jobRegions, contactPage } = dict;
  const published = new Date(job.date);
  const date = Number.isNaN(published.getTime())
    ? job.date
    : published.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

  return (
    <>
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
          <h1
            lang="de"
            className="max-w-[56rem] font-display text-[clamp(2rem,1.3rem+2.4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.02em]"
          >
            {job.title}
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
                {t.contact}
              </dt>
              <dd className="mt-1 flex items-center gap-3 text-ink">
                {job.authorImage && (
                  <span className="relative size-8 overflow-hidden rounded-full bg-brand">
                    <Image
                      src={job.authorImage}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </span>
                )}
                <span lang="de">{job.author}</span>
              </dd>
            </div>
          </dl>
          {t.note && (
            <p className="mt-6 text-[0.875rem] text-muted">{t.note}</p>
          )}
        </Container>
      </section>

      {job.banner && (
        <Container className="pt-12 lg:pt-16">
          <div className="relative aspect-[3/1] overflow-hidden">
            <Image
              src={job.banner}
              alt=""
              fill
              sizes="(min-width: 1360px) 1296px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      )}

      <section className="py-16 lg:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal>
            <div lang="de" className="max-w-[46rem]">
              <JobArticle blocks={job.article} />
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
              <ContactFormV2
                copy={contactPage.form}
                job={{ title: job.title, error: t.jobError }}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
