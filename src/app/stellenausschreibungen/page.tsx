import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/ui";
import { footer, jobs } from "@/content/site";

export const metadata: Metadata = { title: "Stellenausschreibungen" };

export default function JobsPage() {
  return (
    <PageShell footerNote={footer.careerNoteJobs}>
      <section className="px-[5%] py-5">
        <Reveal className="mx-auto flex max-w-[870px] flex-col items-center text-center">
          <Eyebrow tone="muted" gap={16}>{jobs.eyebrow}</Eyebrow>
          <h1 className="mb-3.5 text-[35px] leading-[1.2] font-bold tracking-[-0.04em] text-ink lg:text-[64px] lg:leading-[76.8px]">
            {jobs.title}
          </h1>
        </Reveal>

        <Container size="wide">
          <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {jobs.items.map((job, i) => (
              <Reveal as="li" key={job.slug} delay={(i % 3) * 80} className="h-full">
                <Link
                  href={`/stellenausschreibungen/${job.slug}`}
                  className="flex h-full flex-col border border-line px-8 py-10 text-ink transition-colors duration-300 hover:border-line-strong hover:text-brand lg:p-6"
                >
                  <p className="mb-2 text-[14px] leading-6 font-semibold tracking-[0.04em] text-ink-800 uppercase">
                    {jobs.cardLabel}
                  </p>
                  <h2 className="mb-4 text-[24px] leading-8 font-semibold">{job.title}</h2>
                  <span className="flex items-center py-1 text-[14px] leading-6 font-medium tracking-[-0.02em]">
                    {jobs.link}
                    <ArrowRightIcon className="ml-2 size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
