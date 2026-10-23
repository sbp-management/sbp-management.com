import type { Metadata } from "next";
import { href, locales, type Locale, type PageKey } from "./config";
import { getDictionary, getLocale } from "./dictionaries";

/** Public address of the site (canonical URLs, sitemap, share previews). */
export const SITE_URL = "https://www.sbp-management.com";

/** Open Graph locale per site language. */
const OG_LOCALE: Record<string, string> = { en: "en_GB", de: "de_DE", ru: "ru_RU", sr: "sr_RS" };

/** hreflang links to the same page in every published language (x-default: German, the default language). */
function languages(pathFor: (locale: Locale) => string) {
  return Object.fromEntries([
    ...locales.map((l: Locale) => [l, pathFor(l)]),
    ["x-default", pathFor("de")],
  ]);
}

/** Share preview image per language (1200×630, public/images/og-image-{locale}.png). */
const shareImage = (locale: Locale, alt: string) => ({
  url: `/images/og-image-${locale}.png`,
  width: 1200,
  height: 630,
  alt,
});

/**
 * Metadata for one page: title, description, canonical URL and the share preview
 * (Open Graph / X), plus hreflang links to the same page in the other languages.
 */
export async function pageMetadata(
  page: PageKey,
  meta: { readonly title: string; readonly description: string },
  options: { absoluteTitle?: boolean } = {},
): Promise<Metadata> {
  return pathMetadata((l) => href(l, page), meta, options);
}

/** Same as pageMetadata, for pages whose path is not a PageKey (e.g. a single job listing). */
export async function pathMetadata(
  pathFor: (locale: Locale) => string,
  meta: { readonly title: string; readonly description: string },
  { absoluteTitle = false }: { absoluteTitle?: boolean } = {},
): Promise<Metadata> {
  const locale = await getLocale();
  const url = pathFor(locale);
  const image = shareImage(locale, (await getDictionary()).meta.title);
  return {
    title: absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languages(pathFor) },
    openGraph: {
      type: "website",
      siteName: "SBP Management",
      locale: OG_LOCALE[locale] ?? "de_DE",
      url,
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    twitter: { card: "summary_large_image", images: [image.url] },
  };
}
