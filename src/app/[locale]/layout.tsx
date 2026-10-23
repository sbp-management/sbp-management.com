import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { SHOW_REVIEW } from "@/components/v2/review";
import { ReviewPanel } from "@/components/v2/review-panel";
import { SiteFooter } from "@/components/v2/site-footer";
import { SiteHeader } from "@/components/v2/site-header";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { SITE_URL } from "@/i18n/metadata";
import "./site.css";

// Both families cover Cyrillic, needed for the RU and SR versions.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: `%s | SBP Management` },
    description: dict.meta.description,
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html lang={locale} className={`${manrope.variable} ${serif.variable}`}>
      <body className="min-h-screen">
        <noscript>
          <style>{`[data-reveal],[data-reveal] .stagger>*,.rise-img,.slide-fade,.slide-in{opacity:1!important;transform:none!important;translate:none!important}[data-reveal] *{animation-play-state:running!important}.tile{scale:1!important}.img-wipe{clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only z-[100] bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.a11y.skip}
        </a>
        <SiteHeader locale={locale} dict={{ nav: dict.nav, a11y: dict.a11y }} />
        {/* clip: elements waiting to slide in sideways must never widen the page */}
        <main id="main" className="overflow-x-clip">
          {children}
        </main>
        <SiteFooter locale={locale} dict={dict} />
        {SHOW_REVIEW && <ReviewPanel />}
      </body>
    </html>
  );
}
