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

/** Profile: the job's own requirement (or the degree for residents) plus the lines every job shares. */
export function jobProfile(job: JobDetail, locale: Locale) {
  const t = jobTemplates[locale];
  const first = job.level === "AA" ? t.profile.AA : [job.req[locale]];
  return [...first, ...t.profile.common].filter(Boolean);
}

/** SBP's support for the applicant (also given to search engines as the job's benefits). */
export const jobSupport = (locale: Locale) => jobTemplates[locale].support;

/** Description for search results (meta description). */
export const jobMetaDescription = (job: JobDetail, locale: Locale) =>
  fill(jobTemplates[locale].meta, {
    title: job.title[locale],
    city: jobCity(job, locale),
  });

/** The full listing text in one language. */
export function jobArticle(job: JobDetail, locale: Locale): Block[] {
  const t = jobTemplates[locale];
  const intro = fill(t.intro, {
    city: t.city[job.location.city] ?? job.location.city,
    role: t.role[job.level],
    area: job.area[locale],
  });
  return [
    { type: "p", text: seg(intro) },
    { type: "quote", text: seg(t.direct) },
    { type: "h5", text: seg(t.tasksTitle) },
    { type: "ul", items: jobTasks(job, locale).map(seg) },
    { type: "h5", text: seg(t.profileTitle) },
    { type: "ul", items: jobProfile(job, locale).map(seg) },
    { type: "h5", text: seg(t.supportTitle) },
    { type: "ul", items: jobSupport(locale).map(seg) },
    { type: "h5", text: seg(t.ctaTitle) },
    { type: "p", text: seg(t.cta) },
  ];
}
