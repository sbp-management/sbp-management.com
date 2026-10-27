import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  PageHero,
  SplitText,
} from "@/components/v2/page-parts";
import { Eyebrow, Heading } from "@/components/v2/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { SlideshowPanels } from "@/components/v2/photo-panels";
import { TeamSection } from "@/components/v2/team";
import { photoSet } from "@/content/photo-sets";

import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { about } = await getDictionary();
  return pageMetadata("about", about.meta);
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const { about, home } = dict;

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        lead={about.lead}
        body={about.body}
      >
        <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-ink/15 pt-8">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-display text-[2.5rem] leading-none text-ink">
                {f.value}
              </dd>
              <dd aria-hidden className="mt-2 text-[0.8125rem] text-muted">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Band>
        <SplitText
          eyebrow={about.international.eyebrow}
          title={about.international.title}
          body={about.international.body}
        />
        <Review
          kind="approve"
          note="Includes the welcome sign of a partner company (ASANUS) with names – confirm they agree to be shown"
          className="mt-14"
        >
          <SlideshowPanels
            panels={[
              photoSet("aboutMinistries", dict.photos.alt),
              photoSet("aboutPartners", dict.photos.alt),
            ]}
          />
        </Review>
      </Band>

      {/* How we work: four steps */}
      <Band tone="ink">
        <Reveal className="max-w-[44rem]">
          <Eyebrow tone="light">{about.work.eyebrow}</Eyebrow>
          <Heading className="text-white">{about.work.title}</Heading>
          {about.work.body.map((p) => (
            <p key={p} className="mt-6 text-[1.0625rem] leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
        <ol className="mt-14 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {about.work.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 110}
              variant="scale"
              className="bg-ink p-6 sm:p-8"
            >
              <span className="font-display text-[1.125rem] text-lilac">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[1.75rem] font-medium text-white">
                {s.title}
              </h3>
              <p className="mt-2">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Band>

      {/* Meet the Team */}
      <Band>
        <TeamSection team={about.team} />
      </Band>

      {/* Partners and network (names only once approved) */}
      <Band tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{home.network.eyebrow}</Eyebrow>
            <Heading size="md">{home.network.title}</Heading>
            <p className="mt-6">{home.network.body}</p>
          </Reveal>
          <Review
            kind="approve"
            note="Partner names and logos can only be shown once each organisation has approved being named"
          >
            <ul className="grid gap-px bg-paper-2 sm:grid-cols-2">
              {home.network.categories.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 90}
                  variant="scale"
                  className="flex items-start gap-4 bg-white p-6"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-2.5 shrink-0 rotate-45 bg-brand"
                  />
                  <span className="font-semibold text-ink">{c}</span>
                </Reveal>
              ))}
            </ul>
          </Review>
        </div>
      </Band>

      <ClosingCta locale={locale} dict={dict} cta={home.contact.primary} />
    </>
  );
}
