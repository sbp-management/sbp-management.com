import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  LinkCard,
  PageHero,
  SectionTitle,
  SquareList,
} from "@/components/v2/page-parts";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { photoSet } from "@/content/photo-sets";
import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { workforcePage } = await getDictionary();
  return pageMetadata("workforce", workforcePage.meta);
}

export default async function WorkforcePage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { workforcePage: wf } = dict;

  return (
    <>
      <Review
        kind="risk"
        note="Photos uploaded 2026-10-22 – confirm their source and that the licence allows use on the website"
      >
        <PageHero
          eyebrow={wf.eyebrow}
          title={wf.title}
          subtitle={wf.subtitle}
          lead={wf.lead}
          body={[wf.body]}
          photo={photoSet("workforce", dict.photos.alt)}
        />
      </Review>

      <Band>
        <SectionTitle title={wf.hospitals.title} />
        <SquareList items={wf.hospitals.items} />
      </Band>

      {/* Onward paths: hospital development and the candidate side */}
      <Band tone="paper">
        <ul className="grid gap-6 md:grid-cols-2">
          <Reveal as="li" variant="scale">
            <LinkCard
              title={wf.related.title}
              body={wf.related.body}
              href={href(locale, "germany")}
              cta={wf.related.label}
            />
          </Reveal>
          <Reveal as="li" delay={140} variant="scale">
            <LinkCard
              title={wf.candidates.title}
              body={wf.candidates.body}
              href={href(locale, "jobs")}
              cta={wf.candidates.label}
            />
          </Reveal>
        </ul>
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={wf.cta} />
    </>
  );
}
