import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  NumberedCards,
  ProjectHero,
  RelatedProjects,
  SectionTitle,
  SplitText,
} from "@/components/v2/page-parts";
import { Eyebrow, Heading } from "@/components/v2/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { kazakhstan } = await getDictionary();
  return pageMetadata("kazakhstan", kazakhstan.meta);
}

export default async function KazakhstanPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { kazakhstan: kz } = dict;

  return (
    <>
      <ProjectHero data={kz} labels={dict.project} />

      <Band>
        <div className="grid gap-16">
          <SplitText title={kz.approach.title} body={kz.approach.body} />
          <SplitText title={kz.academy.title} body={kz.academy.body} />
        </div>
      </Band>

      <Band tone="paper">
        <SectionTitle title={kz.modules.title} />
        <NumberedCards items={kz.modules.items} />
      </Band>

      {/* Stages towards a regional competence center */}
      <Band tone="ink">
        <Reveal className="max-w-[44rem]">
          <Eyebrow tone="light">{kz.region}</Eyebrow>
          <Heading className="text-white">{kz.stages.title}</Heading>
          <p className="mt-6 text-[1.0625rem] leading-relaxed">
            {kz.stages.body}
          </p>
        </Reveal>
        <ol className="mt-14 grid gap-px bg-line-dark md:grid-cols-3">
          {kz.stages.items.map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={i * 140}
              variant="left"
              className="relative bg-ink p-6 sm:p-8"
            >
              <span className="font-display text-[1.125rem] text-lilac">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-[1.375rem] leading-snug text-white">
                {s}
              </p>
            </Reveal>
          ))}
        </ol>
      </Band>

      <Band>
        <SplitText title={kz.reference.title} body={kz.reference.body} />
      </Band>

      <RelatedProjects locale={locale} current="kazakhstan" dict={dict} />
      <ClosingCta locale={locale} dict={dict} cta={kz.cta} />
    </>
  );
}
