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
import { ButtonLink } from "@/components/v2/ui";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { SlideshowPanels } from "@/components/v2/photo-panels";
import { photoSet } from "@/content/photo-sets";

import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { hospitals } = await getDictionary();
  return pageMetadata("hospitals", hospitals.meta);
}

export default async function HospitalsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { hospitals, services } = dict;

  return (
    <>
      <PageHero
        eyebrow={hospitals.eyebrow}
        title={hospitals.title}
        lead={hospitals.lead}
      >
        <div
          className="hero-in mt-10"
          style={{ "--d": "600ms" } as React.CSSProperties}
        >
          <ButtonLink href={href(locale, "contact")}>
            {hospitals.cta}
          </ButtonLink>
        </div>
      </PageHero>

      <Band>
        <SectionTitle title={hospitals.paths.title} />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hospitals.paths.items.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 110} variant="scale">
              <LinkCard
                title={p.title}
                body={p.body}
                href={href(locale, p.link)}
                cta={services.more}
                index={i}
              />
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* Photo: hospital partner visit, right after "How we work" (sits close under the cards) */}
      <Band className="pt-0 lg:pt-0">
        <Review
          kind="approve"
          note="Shows the Bürgerhospital Frankfurt by name – confirm approval to show it as a reference"
        >
          <SlideshowPanels panels={[photoSet("hospitals", dict.photos.alt)]} />
        </Review>
      </Band>

      <Band tone="paper">
        <SectionTitle title={hospitals.modules.title} />
        <SquareList items={hospitals.modules.items} />
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={hospitals.cta} />
    </>
  );
}
