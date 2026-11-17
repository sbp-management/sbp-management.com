import type { Locale } from "@/i18n/config";
import { jobTemplates } from "./job-templates";
import type { Block, JobDetail } from "./types";

/** Replaces {name} placeholders. */
const fill = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");

const seg = (t: string) => [{ t }];

/** Town name as written in running text and titles of a language. */
export const jobCity = (job: JobDetail, locale: Locale) =>
  jobTemplates[locale].cityName[job.location.city] ?? job.location.city;

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
  // A city-state (e.g. Berlin) has the same name as its region, so showing both is redundant.
  const regionName = t.region[job.location.region] ?? job.location.region;
  const region =
    job.location.city === job.location.region ? "" : ` (${regionName})`;
  const intro = fill(t.intro[venue], {
    city: t.city[job.location.city] ?? job.location.city,
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
