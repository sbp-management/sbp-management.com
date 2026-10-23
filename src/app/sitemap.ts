import type { MetadataRoute } from "next";
import { jobDetails } from "@/content/jobs-data";
import { href, locales, paths, type PageKey } from "@/i18n/config";
import { SITE_URL } from "@/i18n/metadata";

/** Keys that are anchors or aliases of another page, so they are not listed twice. */
const SKIP: PageKey[] = ["svcMedtech", "candidates", "jobBoards"];

/** Every page of the relaunched site in every language, including every job listing. */
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = (Object.keys(paths) as PageKey[]).filter(
    (key) => !SKIP.includes(key),
  );
  // Each language version is listed, with links to its translations (hreflang).
  const pages = locales.flatMap((locale) =>
    keys.map((key) => ({
      url: `${SITE_URL}${href(locale, key)}`,
      priority: key === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}${href(l, key)}`]),
        ),
      },
    })),
  );
  const jobs = locales.flatMap((locale) =>
    jobDetails.map((job) => ({
      url: `${SITE_URL}${href(locale, "jobsGermany")}/${job.slug}`,
      priority: 0.4,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            `${SITE_URL}${href(l, "jobsGermany")}/${job.slug}`,
          ]),
        ),
      },
    })),
  );
  return [...pages, ...jobs];
}
