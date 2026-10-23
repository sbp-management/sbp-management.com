import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import {
  Band,
  ClosingCta,
  ProjectHero,
  RelatedProjects,
  SectionTitle,
  SplitText,
  SquareList,
} from "@/components/v2/page-parts";
import { TextLink } from "@/components/v2/ui";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { PhotoSlideshow } from "@/components/v2/photo-slideshow";
import { photoSet } from "@/content/photo-sets";

export async function generateMetadata(): Promise<Metadata> {
  const { germanyPage } = await getDictionary();
  return pageMetadata("germany", germanyPage.meta);
}

export default async function GermanyPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { germanyPage: de } = dict;

  return (
    <>
      <ProjectHero
        data={de}
        labels={dict.project}
        visual={
          <div className="slide-fade parallax relative aspect-[4/3] overflow-hidden">
            <PhotoSlideshow
              slides={photoSet("germanyHospitals", dict.photos.alt)}
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
            />
          </div>
        }
      />

      <Band>
        <SectionTitle title={de.modules.title} />
        <SquareList items={de.modules.items} />
      </Band>

      <Band tone="paper">
        <div className="grid gap-16">
          <SplitText title={de.cooperation.title} body={de.cooperation.body} />
          <SplitText title={de.workforce.title} body={de.workforce.body}>
            <TextLink
              href={href(locale, "workforce")}
              className="mt-6 text-ink"
            >
              {de.workforce.label}
            </TextLink>
          </SplitText>
        </div>
      </Band>

      <RelatedProjects locale={locale} current="germany" dict={dict} />
      <ClosingCta locale={locale} dict={dict} cta={de.cta} />
    </>
  );
}
