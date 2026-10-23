import { Reveal } from "@/components/v2/reveal";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Mosaic } from "./mosaic";
import { PhotoSlideshow, type Slide } from "./photo-slideshow";
import { ButtonLink, Container, Eyebrow, Heading } from "./ui";

/**
 * "Career in Germany": the candidate path, set apart in teal. The section around the
 * panel slowly cycles through the theme tints (`.theme-cycle` in site.css).
 */
export function CandidatesPanel({
  locale,
  copy,
  photos,
  as = "h2",
}: {
  locale: Locale;
  copy: Dictionary["jobs"]["candidates"];
  /** The fields candidates work in (nursing, paediatrics, elderly care, therapy), sliding through. */
  photos: readonly Slide[];
  /** h1 when the panel opens its page. */
  as?: "h1" | "h2";
}) {
  return (
    <section className="theme-cycle py-[5px]">
      <Container>
        <Reveal className="relative overflow-hidden bg-teal-soft">
          <div className="grid items-end lg:grid-cols-[1.2fr_1fr]">
            <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:py-20">
              <Eyebrow tone="teal">{copy.eyebrow}</Eyebrow>
              <Heading as={as}>{copy.title}</Heading>
              <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed">
                {copy.body}
              </p>
              <ol className="stagger mt-8 flex flex-wrap gap-2">
                {copy.steps.map((s, i) => (
                  <li
                    key={s}
                    style={{ "--i": i } as React.CSSProperties}
                    className="flex items-center gap-2 bg-white px-3 py-1.5 text-[0.8125rem] font-semibold text-teal-deep"
                  >
                    <span className="text-teal/60">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-wrap gap-4">
                {/* Jumps to the openings list below the panel on the Germany jobs page. */}
                <ButtonLink href="#openings" variant="teal">
                  {copy.primary}
                </ButtonLink>
                <ButtonLink
                  href={href(locale, "contact")}
                  variant="outlineTeal"
                >
                  {copy.secondary}
                </ButtonLink>
              </div>
            </div>
            {/* Photos of the care fields slide through; below the text on small screens. */}
            <div className="relative aspect-[4/3] h-full overflow-hidden lg:aspect-auto lg:min-h-[30rem]">
              <PhotoSlideshow
                slides={photos}
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
              <Mosaic
                cols={4}
                tile={40}
                pattern={[0, 0.25, 0, 0.5, 0.15, 0, 0.4, 0, 0, 0.3, 0, 0.2]}
                color="var(--color-teal)"
                className="absolute top-6 right-6 z-[2] w-28 sm:w-36"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
