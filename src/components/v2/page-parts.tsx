import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/v2/reveal";
import { company } from "@/content/site";
import { href, type Locale, type PageKey } from "@/i18n/config";
import type { Dictionary, StatusTone } from "@/i18n/dictionaries";
import { FLAGS } from "./flags";
import { Mosaic } from "./mosaic";
import { PhotoSlideshow } from "./photo-slideshow";
import { ProjectCard } from "./project-card";
import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Heading,
  StatusChip,
  TextLink,
  cx,
} from "./ui";

/* Building blocks shared by the inner pages (About, Services, Projects, …). */

const nth = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * The diagonal line of the page hero: solid navy 5px wide (±2.5px), fading out over ~30px on each
 * side. Distances are divided by 1.5 because the element is scaled 1.5× (see PageHero).
 */
const EDGE_LINE = [
  "linear-gradient(to top right",
  "transparent calc(50% - 20px)",
  "rgb(11 16 51 / 0.22) calc(50% - 5.3px)",
  "rgb(11 16 51 / 0.55) calc(50% - 1.67px)",
  "var(--color-ink) calc(50% - 1.67px)",
  "var(--color-ink) calc(50% + 1.67px)",
  "rgb(11 16 51 / 0.55) calc(50% + 1.67px)",
  "rgb(11 16 51 / 0.22) calc(50% + 5.3px)",
  "transparent calc(50% + 20px))",
].join(", ");

/**
 * Opening band of an inner page: eyebrow, h1, optional subtitle, lead and body.
 * With `photo`, the photo fills the right of the band, cut along a diagonal that runs from
 * 40% of the width at the top to 60% at the bottom, edged by a 5px navy line that fades out softly on both sides.
 * On small screens the photo sits under the text instead.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  lead,
  body,
  children,
  photo,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  lead: string;
  body?: readonly string[];
  children?: React.ReactNode;
  /** One photo, or several that slide through one after another. */
  photo?: Photo | readonly Photo[];
}) {
  const shots = photo ? (Array.isArray(photo) ? photo : [photo as Photo]) : [];
  const visual = (sizes: string, className: string, priority = false) =>
    shots.length > 1 ? (
      <PhotoSlideshow
        slides={shots}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    ) : (
      <Image
        src={shots[0].src}
        alt={shots[0].alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  return (
    <section className="relative overflow-hidden bg-paper pt-14 pb-16 lg:pt-20 lg:pb-24">
      {photo && (
        <>
          {/* One photo layer across the band; left of the line a paper-coloured panel at 80% lets it
              bleed through at 20%, so both sides always show the same (sliding) photo, lined up. */}
          {/* isolate: the panel's z-index stays inside this layer, so the edge lines below still draw on top. */}
          <div className="absolute inset-0 isolate hidden lg:block">
            {visual("100vw", "object-cover object-[center_42%]", true)}
            <div
              aria-hidden
              className="absolute inset-0 z-[2] bg-paper/80 [clip-path:polygon(0_0,40%_0,60%_100%,0_100%)]"
            />
          </div>
          {/* The edge: a 5px navy line on the diagonal that fades out softly on both sides. The box spans
              40%–60% of the width, so its top-left→bottom-right diagonal is the cut line; a gradient
              "to top right" runs at right angles to that diagonal, so the px stops are true distances
              from the line. The box is scaled up 1.5× around its centre (same diagonal) so the fade
              isn't cut off near the box edges; the stops are divided by 1.5 to compensate. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[40%] hidden w-[20%] scale-150 lg:block"
            style={{ backgroundImage: EDGE_LINE }}
          />
        </>
      )}
      <Mosaic
        cols={5}
        tile={40}
        pattern={[
          0, 0, 0.12, 0.3, 0.6, 0, 0.08, 0, 0.45, 0.2, 0, 0, 0.25, 0, 0.12,
        ]}
        className={cx(
          "pointer-events-none absolute top-0 right-0 hidden",
          !photo && "md:block",
        )}
      />
      <Container className="relative">
        {/* With a photo, the text stays left of the diagonal (which starts at 40% of the width), ending about 20px before it. */}
        <Reveal
          variant="none"
          className={cx(
            "max-w-[52rem]",
            photo &&
              "lg:max-w-[min(52rem,calc(40vw-max(2rem,(100vw-85rem)/2+2rem)-20px))]",
          )}
        >
          <div
            className="hero-in"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className={cx(
              "hero-in font-display text-[clamp(2.25rem,1.3rem+3vw,4rem)] leading-[1.05] font-medium tracking-[-0.02em]",
              // Next to the photo the heading scales with the text column (which narrows again on very wide screens), so the longest line always fits.
              photo &&
                "lg:text-[min(clamp(2.25rem,0.9rem+3.4vw,4rem),calc((40vw-max(2rem,(100vw-85rem)/2+2rem)-20px)/7.4))]",
            )}
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="hero-in mt-4 font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-snug text-brand"
              style={{ "--d": "240ms" } as React.CSSProperties}
            >
              {subtitle}
            </p>
          )}
          <p
            className="hero-in mt-8 text-[1.125rem] leading-relaxed text-ink sm:text-[1.25rem]"
            style={{ "--d": "360ms" } as React.CSSProperties}
          >
            {lead}
          </p>
          {body?.map((p) => (
            <p
              key={p}
              className="hero-in mt-4 text-[#4a5070]"
              style={{ "--d": "480ms" } as React.CSSProperties}
            >
              {p}
            </p>
          ))}
        </Reveal>
        {children}
        {photo && (
          <div className="relative mt-10 aspect-[4/3] overflow-hidden lg:hidden">
            {visual("100vw", "object-cover")}
          </div>
        )}
      </Container>
    </section>
  );
}

type ProjectData = {
  code: string;
  region: string;
  location: string;
  status: string;
  tone: StatusTone;
  focus: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
  body: string;
};

const PATTERNS: Record<string, number[]> = {
  RS: [0.9, 0.5, 0, 0.3, 0, 0.7, 0.4, 0, 0.2, 0, 0.6, 0.9, 0.3, 0, 0.8, 0.2],
  KZ: [0, 0.3, 0.8, 0.5, 0.2, 0, 0.6, 0.9, 0, 0.4, 0, 0.3, 0.7, 0.2, 0, 0.5],
  DE: [0.5, 0, 0.9, 0, 0.8, 0.3, 0, 0.6, 0, 0.6, 0.2, 0, 0.4, 0, 0.7, 0.3],
  INT: [0.3, 0.7, 0, 0.9, 0, 0, 0.5, 0, 0.8, 0.4, 0, 0.6, 0, 0.9, 0.2, 0],
};

/** Project page opening: text on the left, a large region panel and the project facts on the right. */
export function ProjectHero({
  data,
  labels,
  visual,
}: {
  data: ProjectData;
  labels: Dictionary["project"];
  /** Replaces the region panel, e.g. with a photo. */
  visual?: React.ReactNode;
}) {
  const flag = FLAGS[data.code];
  const facts = [
    { label: labels.region, value: data.region },
    { label: labels.location, value: data.location },
    { label: labels.focus, value: data.focus },
  ];
  return (
    <section className="relative overflow-hidden bg-paper pt-14 pb-16 lg:pt-20 lg:pb-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal variant="none">
          <div
            className="hero-in"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </div>
          <h1
            className="hero-in font-display text-[clamp(2.25rem,1.3rem+3vw,4rem)] leading-[1.05] font-medium tracking-[-0.02em]"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            {data.title}
          </h1>
          <p
            className="hero-in mt-4 font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-snug text-brand"
            style={{ "--d": "240ms" } as React.CSSProperties}
          >
            {data.subtitle}
          </p>
          <p
            className="hero-in mt-8 text-[1.125rem] leading-relaxed text-ink sm:text-[1.25rem]"
            style={{ "--d": "360ms" } as React.CSSProperties}
          >
            {data.lead}
          </p>
          <p
            className="hero-in mt-4 text-[#4a5070]"
            style={{ "--d": "480ms" } as React.CSSProperties}
          >
            {data.body}
          </p>
        </Reveal>

        {/* A custom visual (e.g. a photo) brings its own entrance, so the column doesn't scale in as well. */}
        <Reveal delay={200} variant={visual ? "none" : "scale"}>
          <>
            {visual ?? (
              // Same look as the cards: white panel, flag on the right fading in from white,
              // squares and code on the left.
              <div
                className={cx(
                  "relative flex aspect-[4/3] flex-col justify-end overflow-hidden p-8",
                  flag
                    ? "border border-line bg-white text-ink"
                    : "bg-ink text-white",
                )}
              >
                {flag?.contain ? (
                  <div className="absolute inset-y-0 right-0 w-[46%] py-8 pr-8">
                    <div className="relative size-full">
                      <Image
                        src={flag.src}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 240px, 40vw"
                        className="object-contain object-right"
                      />
                    </div>
                  </div>
                ) : flag ? (
                  // A three-letter code (INT) is wider, so its flag starts further right and never sits under the letters.
                  <div
                    className={cx(
                      "flag-fade absolute inset-y-0 right-0 overflow-hidden",
                      data.code.length > 2 ? "w-[55%]" : "w-[70%]",
                    )}
                  >
                    <Image
                      src={flag.src}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 1024px) 400px, 70vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="bg-dots absolute inset-0 text-white/[0.08]"
                  />
                )}
                <Mosaic
                  cols={4}
                  tile={36}
                  pattern={PATTERNS[data.code] ?? PATTERNS.INT}
                  color={flag ? "var(--color-brand)" : "var(--color-lilac)"}
                  className="absolute top-8 left-8 h-auto w-28 sm:w-36"
                />
                <p
                  aria-hidden
                  className="relative font-display text-[clamp(4.5rem,3rem+5vw,7.5rem)] leading-none"
                >
                  {data.code}
                </p>
                <p className="relative mt-3 text-[0.8125rem] tracking-wide opacity-70">
                  {data.location}
                </p>
              </div>
            )}
          </>
          <dl className="mt-6 grid gap-x-6 border-t border-ink/15 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-ink/15 py-4">
                <dt className="text-[0.75rem] font-bold tracking-[0.14em] text-muted uppercase">
                  {f.label}
                </dt>
                <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
            <div className="border-b border-ink/15 py-4">
              <dt className="text-[0.75rem] font-bold tracking-[0.14em] text-muted uppercase">
                {labels.status}
              </dt>
              <dd className="mt-1.5">
                <StatusChip tone={data.tone}>{data.status}</StatusChip>
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

/** Plain content band. */
export function Band({
  children,
  tone = "white",
  id,
  className,
}: {
  children: React.ReactNode;
  tone?: "white" | "paper" | "ink";
  id?: string;
  className?: string;
}) {
  const bg = { white: "", paper: "bg-paper", ink: "bg-ink text-white/75" }[
    tone
  ];
  return (
    <section id={id} className={cx("relative py-20 lg:py-28", bg, className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Heading on the left, paragraphs on the right. */
export function SplitText({
  eyebrow,
  title,
  body,
  children,
  light,
}: {
  eyebrow?: string;
  title: string;
  body: string | readonly string[];
  children?: React.ReactNode;
  light?: boolean;
}) {
  const paragraphs = typeof body === "string" ? [body] : body;
  return (
    <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
      <div>
        {eyebrow && (
          <Eyebrow tone={light ? "light" : "brand"}>{eyebrow}</Eyebrow>
        )}
        <Heading size="md" className={light ? "text-white" : undefined}>
          {title}
        </Heading>
      </div>
      <div>
        {paragraphs.map((p, i) => (
          <p
            key={p}
            className={cx(
              "text-[1.0625rem] leading-relaxed sm:text-[1.125rem]",
              i > 0 && "mt-5",
            )}
          >
            {p}
          </p>
        ))}
        {children}
      </div>
    </Reveal>
  );
}

/** Bulleted list with the logo's square as bullet, in one or two columns. */
export function SquareList({
  items,
  columns = 2,
}: {
  items: readonly string[];
  columns?: 1 | 2;
}) {
  return (
    <Reveal>
      <ul
        className={cx(
          "stagger grid gap-x-10 border-t border-line",
          columns === 2 && "md:grid-cols-2",
        )}
      >
        {items.map((item, i) => (
          <li
            key={item}
            style={nth(i)}
            className="flex items-start gap-4 border-b border-line py-5"
          >
            <span
              aria-hidden
              className="mt-2 size-2.5 shrink-0 rotate-45 bg-brand"
            />
            <span className="font-semibold text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Grid of numbered cards (modules, steps, programs). */
export function NumberedCards({
  items,
  columns = 4,
}: {
  items: readonly { title: string; body: string; status?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <ul className={cx("grid gap-px border border-line bg-line", cols)}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={(i % columns) * 90}
          variant="scale"
          className="flex flex-col bg-white p-6 sm:p-8"
        >
          <span className="font-display text-[1.125rem] text-brand">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-[1.375rem] leading-tight font-medium">
            {item.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed">{item.body}</p>
          {item.status && (
            <p className="mt-auto pt-5">
              <StatusChip tone="active">{item.status}</StatusChip>
            </p>
          )}
        </Reveal>
      ))}
    </ul>
  );
}

/** Section heading row used above lists and grids. */
export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-[44rem] lg:mb-14">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading size="md">{title}</Heading>
      {body && <p className="mt-6 text-[1.0625rem] leading-relaxed">{body}</p>}
    </Reveal>
  );
}

/** The other project cards, shown at the end of a project page. */
export function RelatedProjects({
  locale,
  current,
  dict,
}: {
  locale: Locale;
  current: PageKey;
  dict: Dictionary;
}) {
  const others = dict.projectsPage.items.filter((p) => p.link !== current);
  return (
    <Band>
      <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-14">
        <Heading size="md">{dict.project.related}</Heading>
        <TextLink href={href(locale, "projects")} className="shrink-0 text-ink">
          {dict.project.back}
        </TextLink>
      </Reveal>
      <ul className="grid gap-6 md:grid-cols-3">
        {others.map((p, i) => (
          <Reveal as="li" key={p.code} delay={i * 120} variant="scale">
            <ProjectCard
              project={p}
              locale={locale}
              cta={dict.home.projects.cta}
              statusLabel={dict.home.projects.statusLabel}
            />
          </Reveal>
        ))}
      </ul>
    </Band>
  );
}

/** Closing call to action at the end of each inner page. */
export function ClosingCta({
  locale,
  dict,
  cta,
}: {
  locale: Locale;
  dict: Dictionary;
  /** Button label, e.g. "Request cooperation". */
  cta: string;
}) {
  const { closing } = dict;
  // Black at the top; over the lower 60% it blends smoothly into the navy of the footer below.
  return (
    <section className="relative z-[1] -mb-px overflow-hidden bg-linear-to-b from-black from-40% to-ink py-20 text-white/80 lg:py-24">
      <div
        aria-hidden
        className="bg-dots absolute inset-0 text-white/[0.05] [mask-image:linear-gradient(to_bottom,#000_30%,transparent_85%)]"
      />
      <Mosaic
        cols={5}
        tile={40}
        pattern={[
          0, 0, 0.15, 0.3, 0.6, 0, 0.1, 0, 0.45, 0.2, 0, 0, 0.25, 0, 0.12,
        ]}
        className="pointer-events-none absolute top-0 right-0 hidden md:block"
      />
      <Container className="relative">
        {/* Heading, text and buttons slide in from the left one after another (no fade). */}
        <Reveal variant="none" enterAt={0} className="max-w-[46rem]">
          <div className="slide-in">
            <Eyebrow tone="light">{closing.eyebrow}</Eyebrow>
            <Heading className="text-white">{closing.title}</Heading>
          </div>
          <p
            className="slide-in mt-6 text-[1.125rem] leading-relaxed"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            {closing.body}
          </p>
          <div
            className="slide-in mt-10 flex flex-col gap-6 sm:flex-row sm:items-center"
            style={{ "--d": "240ms" } as React.CSSProperties}
          >
            <ButtonLink
              href={href(locale, "contact")}
              variant="light"
              className="shrink-0 self-start sm:self-auto"
            >
              {cta}
            </ButtonLink>
            <p className="text-[0.9375rem]">
              {closing.or}:{" "}
              <a
                href={company.phoneHref}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {company.phone}
              </a>
              {" · "}
              <a
                href={company.emailHref}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Card linking to another page (used on the Hospitals and Workforce pages). */
export function LinkCard({
  title,
  body,
  href: to,
  cta,
  index,
}: {
  title: string;
  body: string;
  href: string;
  cta?: string;
  index?: number;
}) {
  return (
    <article className="glow-border group relative flex h-full flex-col border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-lift sm:p-8">
      {index !== undefined && (
        <span className="font-display text-[1.125rem] text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3 className="mt-3 font-display text-[1.375rem] leading-tight font-medium">
        <Link href={to} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed">{body}</p>
      {cta && (
        <span
          aria-hidden
          className="mt-auto flex items-center gap-2 pt-6 text-[0.875rem] font-semibold text-ink group-hover:text-brand"
        >
          {cta}
          <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      )}
    </article>
  );
}

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  tall?: boolean;
};

/**
 * Photo grid: landscape photos are 4:3 tiles, `tall` photos span two rows. Each photo slides
 * and fades in as it scrolls into view (`.slide-fade`), and zooms slightly on hover.
 */
export function PhotoGrid({
  photos,
  columns = 3,
}: {
  photos: readonly Photo[];
  columns?: 2 | 3;
}) {
  // A single photo spans the full width in a wider 3:2 frame.
  if (photos.length === 1) {
    const p = photos[0];
    return (
      <Reveal variant="none">
        <figure className="slide-fade group relative overflow-hidden bg-paper">
          <Image
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            sizes="(min-width: 1360px) 1296px, 100vw"
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </figure>
      </Reveal>
    );
  }
  // Fixed row heights so every tile lines up; photos fill their tile (cropped from the centre).
  return (
    <ul
      className={cx(
        "grid gap-4 sm:grid-cols-2 sm:auto-rows-[15rem] lg:gap-6",
        columns === 3
          ? "lg:grid-cols-3 lg:auto-rows-[19rem]"
          : "lg:auto-rows-[26rem]",
      )}
    >
      {photos.map((p, i) => (
        <Reveal
          as="li"
          key={p.src}
          variant="none"
          delay={(i % columns) * 120}
          className={cx(p.tall && "sm:row-span-2")}
        >
          <figure className="slide-fade group relative h-full overflow-hidden bg-paper">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={
                columns === 3
                  ? "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  : "(min-width: 640px) 50vw, 100vw"
              }
              className={cx(
                "w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-full",
                p.tall
                  ? "aspect-[3/4] sm:aspect-auto"
                  : "aspect-[4/3] sm:aspect-auto",
              )}
            />
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
