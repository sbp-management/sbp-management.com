import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { Article } from "@/components/rich-text";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui";
import { jobDetails } from "@/content/jobs-data";
import { assets, footer } from "@/content/site";

export function generateStaticParams() {
  return jobDetails.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stellenausschreibungen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  return { title: job?.title ?? "Stellenausschreibung" };
}

export default async function JobDetailPage({ params }: PageProps<"/stellenausschreibungen/[slug]">) {
  const { slug } = await params;
  const job = jobDetails.find((j) => j.slug === slug);
  if (!job) notFound();

  const metaCard = "flex items-center justify-center border border-line px-6 py-4 text-center text-[14px] font-semibold text-ink";

  return (
    <PageShell footerNote={footer.careerNote}>
      <section className="px-[5%] py-5">
        <Container>
          <Reveal className="mx-auto flex max-w-[870px] flex-col items-center text-center">
            <h1 className="mb-3.5 text-[30px] leading-[1.2] font-bold tracking-[-0.04em] text-ink lg:text-[64px] lg:leading-[76.8px]">
              {job.title}
            </h1>
            <div className="mt-11 hidden w-full gap-4 min-[480px]:grid lg:grid-cols-3">
              <div className={metaCard}>
                <Image src={assets.categoryIcon} alt="" width={24} height={24} unoptimized className="mr-2" />
                {job.category}
              </div>
              <div className={metaCard}>
                <Image src={assets.dateIcon} alt="" width={24} height={24} unoptimized className="mr-2" />
                {job.date}
              </div>
              <div className={metaCard}>
                {job.authorImage && (
                  <span className="relative mr-2 size-8 min-w-8 overflow-hidden rounded-full bg-brand">
                    <Image src={job.authorImage} alt="" fill sizes="32px" className="object-cover" />
                  </span>
                )}
                {job.author}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Some jobs have no banner image; the live site still keeps the (blank) 250px band, so we do too. */}
      <div className="relative h-[120px] w-full md:h-[150px] lg:h-[250px]">
        {job.banner && <Image src={job.banner} alt="" fill priority sizes="100vw" className="object-cover" />}
      </div>

      <section className="px-[5%] py-5">
        <Container size="small">
          <Reveal className="mx-auto max-w-[620px]">
            <Article blocks={job.article} />
          </Reveal>

          <Reveal className="mt-8 rounded-[5px] border border-line-strong bg-white px-2.5 pt-8 pb-[62px] shadow-float md:px-8">
            <ContactForm variant="job" context={job.title} />
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
