import type { Metadata } from "next";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  LinkCard,
  NumberedCards,
  PageHero,
  SectionTitle,
  SquareList,
} from "@/components/v2/page-parts";
import { Review } from "@/components/v2/review";
import { PhotoSlideshow } from "@/components/v2/photo-slideshow";
import { photoSet, type PhotoSet } from "@/content/photo-sets";
import { Heading, TextLink } from "@/components/v2/ui";
import { href, type PageKey } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

/** Dictionary keys of the individual service area pages (content in en-services.ts). */
type ServiceKey =
  "svcProjectPage" | "svcProcessPage" | "svcSterilePage" | "svcEducationPage";

const SERVICE_PAGE: Record<ServiceKey, PageKey> = {
  svcProjectPage: "svcProject",
  svcProcessPage: "svcProcess",
  svcSterilePage: "svcSterile",
  svcEducationPage: "svcEducation",
};

/** Photos sliding through at the top of each service area page (content/photo-sets.ts). */
const HERO_SET: Record<ServiceKey, PhotoSet> = {
  svcProjectPage: "projectManagement",
  svcProcessPage: "processOptimization",
  svcSterilePage: "sterileSupply",
  svcEducationPage: "education",
};

/** Sections (by id) that get their own slideshow next to the list. */
const SECTION_SET: Partial<Record<string, PhotoSet>> = {
  "medical-technology": "medicalTechnology",
  medizintechnik: "medicalTechnology",
};

const STOCK_NOTE =
  "Photos uploaded 2026-10-22 – confirm their source and that the licence allows use on the website";

export async function serviceAreaMetadata(key: ServiceKey): Promise<Metadata> {
  const { meta } = (await getDictionary())[key];
  return pageMetadata(SERVICE_PAGE[key], meta);
}

/**
 * One service area: hero, what we do (one or more lists; each has an id so the menu can
 * point at it), how we work, where it comes into practice, then the closing band.
 */
export async function ServiceAreaPage({ area }: { area: ServiceKey }) {
  const locale = await getLocale();
  const dict = await getDictionary();
  const page = dict[area];
  const { serviceArea: t } = dict;

  return (
    <>
      <Review kind="risk" note={STOCK_NOTE}>
        <PageHero
          eyebrow={t.eyebrow}
          title={page.title}
          lead={page.lead}
          body={page.body}
          photo={photoSet(HERO_SET[area], dict.photos.alt)}
        />
      </Review>

      <Review
        kind="approve"
        note="Draft text put together from the brief – page content needs approval"
      >
        {page.sections.map((section, i) => (
          <Band
            key={section.id}
            id={section.id}
            tone={i % 2 ? "paper" : "white"}
          >
            {SECTION_SET[section.id] ? (
              // A section with its own photos: text and list on the left, slideshow on the right.
              <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <SectionTitle
                    title={section.title}
                    body={section.body || undefined}
                  />
                  <SquareList items={section.items} columns={1} />
                </div>
                <Reveal className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[28rem]">
                  <PhotoSlideshow
                    slides={photoSet(SECTION_SET[section.id]!, dict.photos.alt)}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    offset={4000}
                  />
                </Reveal>
              </div>
            ) : (
              <>
                <SectionTitle
                  title={section.title}
                  body={section.body || undefined}
                />
                <SquareList items={section.items} />
              </>
            )}
          </Band>
        ))}

        <Band tone={page.sections.length % 2 ? "paper" : "white"}>
          <SectionTitle title={t.how.title} body={t.how.body} />
          <NumberedCards items={t.how.steps} />
        </Band>

        <Band tone={page.sections.length % 2 ? "white" : "paper"}>
          <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-14">
            <Heading size="md">{t.related}</Heading>
            <TextLink
              href={href(locale, "services")}
              className="shrink-0 text-ink"
            >
              {t.back}
            </TextLink>
          </Reveal>
          <ul className="grid gap-6 md:grid-cols-3">
            {page.related.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 120} variant="scale">
                <LinkCard
                  title={r.title}
                  body={r.body}
                  href={href(locale, r.link as PageKey)}
                  cta={t.more}
                />
              </Reveal>
            ))}
          </ul>
        </Band>
      </Review>

      <ClosingCta locale={locale} dict={dict} cta={t.cta} />
    </>
  );
}
