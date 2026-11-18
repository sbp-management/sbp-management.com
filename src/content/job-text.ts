import type { Locale } from "@/i18n/config";
import { jobTemplates } from "./job-templates";
import type { Block, JobDetail } from "./types";

/**
 * Location detail shown everywhere a job's place appears — the listing text, the search-result
 * description, the location filter, and the structured data Google reads for Google for Jobs.
 *
 * "exact": the real town (e.g. "Albstadt"). Needed for Google for Jobs eligibility and for
 * location/radius search to match these listings — this is what the site used before and what
 * we measured passing Google's Rich Results Test.
 * "region": only the Bundesland (e.g. "Baden-Württemberg"), per the client's instruction of
 * 2026-11-18. Expect Google for Jobs eligibility and local-search matching to weaken; the real
 * town is still kept in each job's data (job.location.city), so switching this back to "exact"
 * is the only change needed to fully restore the previous behaviour.
 */
export const JOB_LOCATION_DETAIL: "exact" | "region" = "region";

/** Replaces {name} placeholders. */
const fill = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");

const seg = (t: string) => [{ t }];

/** The region name as written in running text and titles of a language. */
const jobRegionName = (job: JobDetail, locale: Locale) =>
  jobTemplates[locale].region[job.location.region] ?? job.location.region;

/** Town (or, in "region" mode, Bundesland) name as written in running text and titles. */
export const jobCity = (job: JobDetail, locale: Locale) =>
  JOB_LOCATION_DETAIL === "region"
    ? jobRegionName(job, locale)
    : (jobTemplates[locale].cityName[job.location.city] ?? job.location.city);

/** Job title with the town, e.g. "Oberarzt (m/w/d) Neurologie in Albstadt". */
export const jobTitle = (job: JobDetail, locale: Locale) =>
  fill(jobTemplates[locale].titleWithCity, {
    title: job.title[locale],
    city: jobCity(job, locale),
  });

/** Tasks of the position. */
export function jobTasks(job: JobDetail, locale: Locale) {
  const values = { area: job.area[locale], req: job.req[locale] };
  return jobTemplates[locale].tasks[job.level]
    .map((line) => fill(line, values))
    .filter(Boolean);
}

/** Profile: the job's own requirement (or the degree for residents), the professional licence, plus the lines every job shares. */
export function jobProfile(job: JobDetail, locale: Locale) {
  const t = jobTemplates[locale];
  const profession = job.profession ?? "physician";
  const first = job.level === "AA" ? t.profile.AA : [job.req[locale]];
  const licence = t.profile.licence[profession];
  const language = t.profile.language[profession];
  return [...first, licence, language, ...t.profile.common].filter(Boolean);
}

/** SBP's support for the applicant (also given to search engines as the job's benefits). */
export function jobSupport(job: JobDetail, locale: Locale) {
  const t = jobTemplates[locale].support;
  return [t.licence[job.profession ?? "physician"], ...t.common];
}

/** Description for search results (meta description). */
export const jobMetaDescription = (job: JobDetail, locale: Locale) =>
  fill(jobTemplates[locale].meta[job.venue ?? "hospital"], {
    title: job.title[locale],
    city: jobCity(job, locale),
  });

/** The full listing text in one language. */
export function jobArticle(job: JobDetail, locale: Locale): Block[] {
  const t = jobTemplates[locale];
  const venue = job.venue ?? "hospital";
  const regionName = jobRegionName(job, locale);
  // In "region" mode the {city} slot already holds the Bundesland, so the parenthetical would be
  // redundant (and the same is true for a city-state like Berlin, whose city equals its region).
  const region =
    JOB_LOCATION_DETAIL === "region" || job.location.city === job.location.region
      ? ""
      : ` (${regionName})`;
  const intro = fill(t.intro[venue], {
    city: jobCity(job, locale),
    region,
    role: t.role[job.level],
    area: job.area[locale],
  });
  return [
    { type: "p", text: seg(intro) },
    { type: "quote", text: seg(t.direct[venue]) },
    { type: "h5", text: seg(t.tasksTitle) },
    { type: "ul", items: jobTasks(job, locale).map(seg) },
    { type: "h5", text: seg(t.profileTitle) },
    { type: "ul", items: jobProfile(job, locale).map(seg) },
    { type: "h5", text: seg(t.supportTitle) },
    { type: "ul", items: jobSupport(job, locale).map(seg) },
    { type: "h5", text: seg(t.ctaTitle) },
    { type: "p", text: seg(t.cta) },
  ];
}
