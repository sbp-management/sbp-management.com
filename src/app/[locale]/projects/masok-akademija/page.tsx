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
import { type Photo, PhotoGrid } from "@/components/v2/page-parts";
import { PHOTO_FILES, type PhotoKey } from "@/content/photos";
import { ButtonLink, Eyebrow, Heading } from "@/components/v2/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

/** Client photos with their translated alt texts. */
function photos(
  alt: Record<string, string>,
  keys: readonly PhotoKey[],
  plain = false,
): Photo[] {
  return keys.map((k) => ({
    ...PHOTO_FILES[k],
    alt: alt[k],
    tall: plain ? false : "tall" in PHOTO_FILES[k],
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { masok } = await getDictionary();
  return pageMetadata("masok", masok.meta);
}

export default async function MasokPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { masok } = dict;

  return (
    <>
      <ProjectHero data={masok} labels={dict.project} />

      <Band>
        <SplitText title={masok.standard.title} body={masok.standard.body} />
      </Band>

      <Band tone="paper">
        <SectionTitle title={masok.fields.title} />
        <NumberedCards
          columns={3}
          items={masok.fields.items.map((f) => ({
            title: f.title,
            body: `${f.subtitle}. ${f.body}`,
            status: f.status || undefined,
          }))}
        />
      </Band>

      <Band>
        <div className="grid gap-16">
          <SplitText title={masok.practice.title} body={masok.practice.body} />
          <SplitText
            title={masok.international.title}
            body={masok.international.body}
          />
        </div>
      </Band>

      {/* Photos from the project visits in Serbia */}
      <Band tone="paper">
        <SectionTitle
          eyebrow={dict.photos.masok.eyebrow}
          title={dict.photos.masok.title}
        />
        <>
          <PhotoGrid
            photos={photos(dict.photos.alt, [
              "masokLeskovacCity",
              "masokMeeting",
              "masokTrainingHall",
              "masokWorkshop",
              "masokWorkshop2",
              "masokMechatronicsLab",
              "masokComputerLab",
              "masokSchoolVisit",
            ])}
          />
        </>
      </Band>

      {/* Programs and admission live on MASOK's own website. */}
      <Band className="lg:py-20">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-[40rem]">
            <Eyebrow>MASOK Akademija</Eyebrow>
            <Heading size="md">{masok.external.title}</Heading>
            <p className="mt-6">{masok.external.body}</p>
          </div>
          <ButtonLink
            href={masok.external.href}
            variant="outline"
            className="shrink-0 self-start md:self-auto"
          >
            {masok.external.label}
          </ButtonLink>
        </Reveal>
      </Band>

      <RelatedProjects locale={locale} current="masok" dict={dict} />
      <ClosingCta locale={locale} dict={dict} cta={masok.cta} />
    </>
  );
}
