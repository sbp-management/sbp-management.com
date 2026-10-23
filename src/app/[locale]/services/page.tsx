import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import Link from "next/link";
import { Reveal } from "@/components/v2/reveal";
import { Band, ClosingCta, PageHero } from "@/components/v2/page-parts";
import { ArrowRight } from "@/components/v2/ui";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { PHOTO_FILES } from "@/content/photos";

export async function generateMetadata(): Promise<Metadata> {
  const { services } = await getDictionary();
  return pageMetadata("services", services.meta);
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { services, home } = dict;

  return (
    <>
      <>
        <PageHero
          eyebrow={services.eyebrow}
          title={services.title}
          lead={services.lead}
          photo={{
            ...PHOTO_FILES.servicesSterileSupply,
            alt: dict.photos.alt.servicesSterileSupply,
          }}
        />
      </>

      <Band>
        <ol className="border-t border-line">
          {services.items.map((s, i) => (
            // Each area links to its own page (the ids stay as anchors for old links).
            <Reveal
              as="li"
              key={s.id}
              variant="right"
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-8 lg:py-12"
            >
              <span
                id={s.id}
                className="font-display text-[1.25rem] text-brand"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-[clamp(1.6rem,1.3rem+1vw,2.25rem)] leading-tight font-medium">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-[44rem] text-[1.0625rem] leading-relaxed">
                  {s.body}
                </p>
              </div>
              <Link
                href={href(locale, s.link)}
                className="group flex items-center gap-2 self-center text-[0.9375rem] font-semibold text-ink hover:text-brand"
              >
                {services.more}
                <span className="sr-only">: {s.title}</span>
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </ol>
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={home.contact.primary} />
    </>
  );
}
