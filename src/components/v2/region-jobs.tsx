import { Reveal } from "@/components/v2/reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Band, PageHero } from "./page-parts";
import { ButtonLink, Heading, TextLink } from "./ui";
import { Review } from "./review";

type Region = Dictionary["jobRegions"]["serbia"];

/** Job page for a region without published openings yet (Serbia, Kazakhstan & Central Asia). */
export function RegionJobs({
  locale,
  dict,
  region,
}: {
  locale: Locale;
  dict: Dictionary;
  region: Region;
}) {
  const { empty, back } = dict.jobRegions;
  return (
    <>
      <PageHero
        eyebrow={region.eyebrow}
        title={region.title}
        lead={region.lead}
      />
      <Band>
        <Review
          kind="approve"
          note="No job board for this region yet – send links or listings"
        >
          <Reveal className="grid gap-8 border border-line bg-white p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Heading size="md">{empty.title}</Heading>
              <p className="mt-6 text-[1.0625rem] leading-relaxed">
                {empty.body}
              </p>
            </div>
            <div className="flex flex-col items-start gap-6">
              <ButtonLink href={href(locale, "contact")}>
                {empty.contact}
              </ButtonLink>
              <TextLink
                href={href(locale, region.project.link)}
                className="text-ink"
              >
                {empty.project}: {region.project.label}
              </TextLink>
              <TextLink href={href(locale, "jobs")} className="text-ink">
                {back}
              </TextLink>
            </div>
          </Reveal>
        </Review>
      </Band>
    </>
  );
}
