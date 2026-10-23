import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  ProjectHero,
  RelatedProjects,
  SectionTitle,
  SplitText,
} from "@/components/v2/page-parts";
import { StatusChip } from "@/components/v2/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { exchange } = await getDictionary();
  return pageMetadata("exchange", exchange.meta);
}

export default async function ExchangePage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { exchange } = dict;

  return (
    <>
      <ProjectHero data={exchange} labels={dict.project} />

      <Band>
        <SectionTitle title={exchange.programs.title} />
        <ul className="grid gap-6 md:grid-cols-2">
          {exchange.programs.items.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 140}
              variant="scale"
              className="flex flex-col border border-line bg-white p-6 sm:p-8"
            >
              {p.status === "In preparation" ? (
                <Review
                  kind="approve"
                  note="Planned for September 2026 – date has passed: confirm whether it took place and update"
                  inline
                >
                  <StatusChip tone={p.tone}>{p.status}</StatusChip>
                </Review>
              ) : (
                <p>
                  <StatusChip tone={p.tone}>{p.status}</StatusChip>
                </p>
              )}
              <h3 className="mt-5 font-display text-[1.625rem] leading-tight font-medium">
                {p.title}
              </h3>
              {p.body.map((b) => (
                <p key={b} className="mt-3 text-[0.9375rem] leading-relaxed">
                  {b}
                </p>
              ))}
            </Reveal>
          ))}
        </ul>
      </Band>

      <Band tone="paper">
        <SplitText title={exchange.format.title} body={exchange.format.body} />
      </Band>

      <RelatedProjects locale={locale} current="exchange" dict={dict} />
      <ClosingCta locale={locale} dict={dict} cta={exchange.cta} />
    </>
  );
}
