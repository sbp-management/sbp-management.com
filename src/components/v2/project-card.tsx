import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FLAGS, REGION_PATTERNS as PATTERNS } from "./flags";
import { Mosaic } from "./mosaic";
import { ArrowRight, StatusChip } from "./ui";

type Project = Dictionary["home"]["projects"]["items"][number];

/** Project card used on the homepage and the projects overview: region, title, objective, focus, status, CTA. */
export function ProjectCard({
  project,
  locale,
  cta,
  statusLabel,
}: {
  project: Project;
  locale: Locale;
  cta: string;
  statusLabel: string;
}) {
  const flag = FLAGS[project.code];
  return (
    <article className="glow-border group relative flex h-full flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-lift">
      <>
        {flag?.contain ? (
          // Image with its own white background (INT globe): shown whole on the right of a white band.
          <div className="relative flex h-44 items-end overflow-hidden border-b border-line bg-white px-6 pb-5 sm:h-52 sm:px-8">
            <Image
              src={flag.src}
              alt=""
              fill
              sizes="(min-width: 768px) 20vw, 50vw"
              className="object-contain object-right py-4 pr-4 transition-transform duration-700 group-hover:scale-105 sm:pr-6"
            />
            <Mosaic
              cols={4}
              tile={22}
              pattern={PATTERNS[project.code] ?? PATTERNS.INT}
              className="absolute top-6 left-6 transition-transform duration-500 group-hover:scale-105 sm:left-8"
            />
            <div className="relative">
              <p className="font-display text-[3.5rem] leading-none font-medium text-ink sm:text-[4.5rem] md:max-lg:text-[3rem]">
                {project.code}
              </p>
            </div>
          </div>
        ) : flag ? (
          // White band like INT: code on the left, the flag on the right fading in from white.
          <div className="relative flex h-44 items-end overflow-hidden border-b border-line bg-white px-6 pb-5 sm:h-52 sm:px-8">
            {/* A three-letter code (INT) is wider, so its flag starts further right; on tablets the cards are narrow, so the flag takes less room. */}
            <div
              className={`flag-fade absolute inset-y-0 right-0 overflow-hidden ${project.code.length > 2 ? "w-[55%] md:max-lg:w-[40%]" : "w-[70%] md:max-lg:w-[50%]"}`}
            >
              <Image
                src={flag.src}
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 70vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* the animated squares sit above the code, like on the INT card */}
            <Mosaic
              cols={4}
              tile={22}
              pattern={PATTERNS[project.code] ?? PATTERNS.INT}
              className="absolute top-6 left-6 transition-transform duration-500 group-hover:scale-105 sm:left-8"
            />
            <div className="relative">
              <p className="font-display text-[3.5rem] leading-none font-medium text-ink sm:text-[4.5rem] md:max-lg:text-[3rem]">
                {project.code}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative flex h-44 items-end justify-between overflow-hidden bg-paper px-6 pb-5 transition-colors duration-300 group-hover:bg-brand-soft sm:h-52 sm:px-8">
            <div>
              <p className="font-display text-[3.5rem] leading-none font-medium text-ink sm:text-[4.5rem] md:max-lg:text-[3rem]">
                {project.code}
              </p>
            </div>
            <Mosaic
              cols={4}
              tile={22}
              pattern={PATTERNS[project.code] ?? PATTERNS.INT}
              className="absolute top-6 left-6 transition-transform duration-500 group-hover:scale-105 sm:left-8"
            />
          </div>
        )}
      </>

      <div className="flex flex-1 flex-col px-6 pt-6 pb-6 sm:px-8 sm:pb-8">
        <p className="text-[0.75rem] font-bold tracking-[0.14em] text-brand uppercase">
          {project.region}
        </p>
        <h3 className="mt-2 font-display text-[1.75rem] leading-tight md:max-lg:text-[1.375rem] font-medium">
          <Link
            href={href(locale, project.link)}
            className="after:absolute after:inset-0"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-[1rem] font-semibold text-ink">
          {project.title}
        </p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed">{project.body}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.focus.map((f) => (
            <li
              key={f}
              className="border border-line px-2.5 py-1 text-[0.75rem] font-medium text-text"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-7">
          <p className="flex items-center gap-2">
            <span className="sr-only">{statusLabel}:</span>
            <StatusChip tone={project.tone}>{project.status}</StatusChip>
          </p>
          <span
            aria-hidden
            className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand"
          >
            {cta}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
