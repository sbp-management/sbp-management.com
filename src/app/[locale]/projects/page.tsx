import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  PageHero,
  type Photo,
  PhotoGrid,
  SectionTitle,
} from "@/components/v2/page-parts";
import { PHOTO_FILES, type PhotoKey } from "@/content/photos";
import { ProjectCard } from "@/components/v2/project-card";
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
  const { projectsPage } = await getDictionary();
  return pageMetadata("projects", projectsPage.meta);
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { projectsPage, home, germanyPage } = dict;

  return (
    <>
      <PageHero
        eyebrow={projectsPage.eyebrow}
        title={projectsPage.title}
        lead={projectsPage.lead}
      />

      <Band>
        <ul className="grid gap-6 md:grid-cols-2">
          {projectsPage.items.map((p, i) => (
            <Reveal as="li" key={p.code} delay={(i % 2) * 150} variant="scale">
              <ProjectCard
                project={p}
                locale={locale}
                cta={home.projects.cta}
                statusLabel={home.projects.statusLabel}
              />
            </Reveal>
          ))}
        </ul>
      </Band>

      {/* Photos from the projects */}
      <Band tone="paper">
        <SectionTitle
          eyebrow={dict.photos.projects.eyebrow}
          title={dict.photos.projects.title}
        />
        <>
          <PhotoGrid
            photos={photos(dict.photos.alt, [
              "projectsSigning",
              "masokLeskovacCity",
              "masokWorkshop",
            ])}
          />
        </>
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={germanyPage.cta} />
    </>
  );
}
