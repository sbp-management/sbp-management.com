import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import {
  Band,
  ClosingCta,
  PageHero,
  SectionTitle,
  SplitText,
  type Photo,
  PhotoGrid,
} from "@/components/v2/page-parts";
import { Eyebrow, Heading } from "@/components/v2/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { PHOTO_FILES, type PhotoKey } from "@/content/photos";
import { Review } from "@/components/v2/review";

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

/** Team portraits, in the order of about.team.members (metadata removed, max 1000 px). */
const TEAM_PHOTOS = [
  "/images/team/sabina.jpg",
  "/images/team/nikola.jpg",
  "/images/team/nemanja.jpg",
];

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
        <div className="mt-14">
          <>
            <PhotoGrid
              columns={2}
              photos={photos(
                dict.photos.alt,
                ["aboutMinistryGroup", "aboutMinistryMeeting"],
                true,
              )}
            />
          </>
        </div>
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

      {/* Team (from the old About page) */}
      <Band>
        <SectionTitle
          eyebrow={about.team.eyebrow}
          title={about.team.title}
          body={about.team.body}
        />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.members.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 110} variant="scale">
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                  <Image
                    src={TEAM_PHOTOS[i]}
                    alt={`${about.team.photoAlt} ${m.name}`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-display text-[1.5rem] leading-tight font-medium text-ink">
                    {m.name}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-muted">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
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
