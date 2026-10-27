import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./reveal";
import { Review } from "./review";
import { SectionTitle } from "./page-parts";

/**
 * Portraits in the order of about.team.members; null = photo not available yet (placeholder).
 * File names carry the date of the photo: give a replaced photo a new date, or browsers keep the old
 * one (images are cached for a year).
 */
const PHOTOS: (string | null)[] = [
  "/images/team/sabina-banda-2026-10-27.jpg",
  "/images/team/nikola-banda-2026-10-27.jpg",
  "/images/team/ana-zakarashvili-2026-10-27.jpg",
  "/images/team/josephine-heinrich-2026-10-27.jpg",
  "/images/team/milica-golubovic-2026-10-27.jpg",
  null, // Real Estate – photo to come
  "/images/team/yaw-addo-2026-10-27.jpg",
  "/images/team/adriel-mangiring-2026-10-27.jpg",
  "/images/team/stephen-ntah-2026-10-27.jpg",
];

/** People per row: CEO and Junior Consultant; Team Management/HR ×2, International Project Manager and Real Estate; Marketing, Accounting and IT. */
const ROWS = [2, 4, 3];

/**
 * "Meet the Team": round portraits in three rows. On each available photo a short blue line runs
 * once around the circle every 5 seconds (.team-orbit in site.css); missing photos show a placeholder.
 */
export function TeamSection({ team }: { team: Dictionary["about"]["team"] }) {
  // Index of the first member in each row (0, 2, 5).
  const starts = ROWS.map((_, r) =>
    ROWS.slice(0, r).reduce((a, b) => a + b, 0),
  );
  const rows = ROWS.map((n, r) =>
    team.members
      .slice(starts[r], starts[r] + n)
      .map((m, j) => ({ ...m, index: starts[r] + j })),
  );

  return (
    <>
      {/* Centred like the portrait rows below. */}
      <div className="flex flex-col items-center text-center">
        <SectionTitle title={team.title} body={team.body} />
      </div>
      <div className="grid gap-12 sm:gap-14">
        {rows.map((row, r) => (
          <ul
            key={r}
            className="flex flex-wrap justify-center gap-x-10 gap-y-12 sm:gap-x-16"
          >
            {row.map((m) => {
              const photo = PHOTOS[m.index];
              return (
                <Reveal
                  as="li"
                  key={m.index}
                  delay={(m.index % 3) * 110}
                  variant="scale"
                  className="flex w-44 flex-col items-center text-center sm:w-52"
                >
                  <div className="relative size-40 sm:size-48">
                    {photo ? (
                      <>
                        <span
                          aria-hidden
                          className="team-orbit"
                          style={
                            {
                              "--d": `${m.index * 650}ms`,
                            } as React.CSSProperties
                          }
                        />
                        <div className="relative size-full overflow-hidden rounded-full bg-paper ring-1 ring-line">
                          <Image
                            src={photo}
                            alt={m.name ? `${team.photoAlt} ${m.name}` : m.role}
                            fill
                            sizes="(min-width: 640px) 192px, 160px"
                            className="object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <Review
                        kind="approve"
                        note="Team photo missing – placeholder for now"
                        className="size-full"
                      >
                        <div className="flex size-full flex-col items-center justify-center rounded-full border border-dashed border-line bg-paper text-muted">
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="size-14 opacity-40"
                            fill="currentColor"
                          >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
                          </svg>
                          <span className="mt-2 text-[0.75rem]">
                            {team.photoSoon}
                          </span>
                        </div>
                      </Review>
                    )}
                  </div>
                  {/* Name, then the position centred under it. Without a name yet the line stays empty, so
                      the positions line up across the row. */}
                  <p className="mt-5 min-h-[1.25em] font-display text-[1.375rem] leading-tight font-medium text-ink">
                    {m.name || (
                      <Review kind="approve" note="Name missing" inline>
                        <span className="sr-only">–</span>
                      </Review>
                    )}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-muted">{m.role}</p>
                </Reveal>
              );
            })}
          </ul>
        ))}
      </div>
    </>
  );
}
