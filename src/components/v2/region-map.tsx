import type { Dictionary } from "@/i18n/dictionaries";
import { Mosaic } from "./mosaic";

type Region = Dictionary["home"]["hero"]["regions"][number];

/**
 * Stylised corridor Germany → Serbia → Kazakhstan. Node positions are a rough
 * equirectangular projection (lon 0–80°E, lat 58–38°N) onto the 1000×560 viewBox.
 *
 * Animation (styles in site.css, paused until the surrounding Reveal is in view):
 * Berlin appears, the route draws to Leskovac, then on to Astana; labels and the
 * caption follow, and small squares keep travelling along the routes.
 */
const NODES = {
  de: { x: 167, y: 154, delay: 500 },
  rs: { x: 274, y: 420, delay: 1500 },
  kz: { x: 893, y: 190, delay: 2600 },
} as const;

const { de, rs, kz } = NODES;
const ROUTES = [
  {
    id: "de-rs",
    d: `M${de.x} ${de.y} Q 120 300 ${rs.x} ${rs.y}`,
    delay: 700,
    faint: false,
  },
  {
    id: "rs-kz",
    d: `M${rs.x} ${rs.y} Q 600 420 ${kz.x} ${kz.y}`,
    delay: 1700,
    faint: false,
  },
  {
    id: "de-kz",
    d: `M${de.x} ${de.y} Q 530 0 ${kz.x} ${kz.y}`,
    delay: 2400,
    faint: true,
  },
];
/** Germany → Serbia → Kazakhstan as one path, for the travelling square. */
const MAIN_PATH = `M${de.x} ${de.y} Q 120 300 ${rs.x} ${rs.y} Q 600 420 ${kz.x} ${kz.y}`;
const CAPTION_START = 2900;
const TRAVEL_START = 3300;

const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function RegionMap({
  regions,
  cities,
  label,
}: {
  regions: readonly Region[];
  /** City name per region id, in the page's language. */
  cities: Dictionary["home"]["hero"]["mapCities"];
  label: string;
}) {
  return (
    <figure
      aria-label={label}
      className="wait-in relative overflow-hidden bg-ink text-white"
    >
      <div className="relative aspect-[1000/560]">
        <div
          aria-hidden
          className="bg-dots absolute inset-0 text-white/[0.09]"
        />
        <Mosaic
          cols={4}
          tile={18}
          pattern={[0, 0.25, 0, 0.5, 0.15, 0, 0.35, 0, 0, 0.6, 0, 0.2]}
          color="var(--color-lilac)"
          className="absolute right-5 bottom-5 h-auto w-14 sm:w-20"
        />

        <svg
          aria-hidden
          viewBox="0 0 1000 560"
          className="absolute inset-0 size-full"
        >
          <defs>
            {/* Each dashed route is revealed by a solid stroke that draws itself. */}
            {ROUTES.map((r) => (
              <mask
                key={r.id}
                id={`map-mask-${r.id}`}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1000"
                height="560"
              >
                <path
                  d={r.d}
                  pathLength={1}
                  className="route-draw"
                  style={delay(r.delay)}
                  stroke="white"
                  strokeWidth="12"
                  fill="none"
                />
              </mask>
            ))}
            <path id="map-main-route" d={MAIN_PATH} fill="none" />
            <path id="map-arc-route" d={ROUTES[2].d} fill="none" />
          </defs>

          {/* latitude guides */}
          {[140, 280, 420].map((y) => (
            <line
              key={y}
              x1="0"
              x2="1000"
              y1={y}
              y2={y}
              stroke="white"
              strokeOpacity="0.06"
            />
          ))}

          {ROUTES.map((r) => (
            <path
              key={r.id}
              d={r.d}
              mask={`url(#map-mask-${r.id})`}
              className="route-line"
              stroke={r.faint ? "white" : "var(--color-lilac)"}
              strokeOpacity={r.faint ? 0.25 : 1}
              strokeWidth={r.faint ? 1.5 : 2}
              fill="none"
            />
          ))}

          {/* squares travelling the corridor, and back along the northern arc */}
          <g className="map-fade map-traveler" style={delay(TRAVEL_START)}>
            <rect x="-5" y="-5" width="10" height="10" fill="white">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="paced"
              >
                <mpath href="#map-main-route" />
              </animateMotion>
            </rect>
            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              fill="var(--color-lilac)"
              fillOpacity="0.8"
            >
              <animateMotion
                dur="8s"
                begin="2s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="1;0"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#map-arc-route" />
              </animateMotion>
            </rect>
          </g>

          {/* nodes */}
          {Object.entries(NODES).map(([id, n], i) => (
            <g key={id}>
              <g className="map-fade" style={delay(n.delay)}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="9"
                  fill="var(--color-brand)"
                  className="node-pulse"
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
              </g>
              <g className="map-node" style={delay(n.delay)}>
                <rect
                  x={n.x - 9}
                  y={n.y - 9}
                  width="18"
                  height="18"
                  fill="var(--color-brand)"
                />
                <rect
                  x={n.x - 4}
                  y={n.y - 4}
                  width="8"
                  height="8"
                  fill="white"
                />
              </g>
            </g>
          ))}
        </svg>

        {/* country labels, HTML so they stay crisp and translatable */}
        {regions.map((r) => {
          const n = NODES[r.id as keyof typeof NODES];
          if (!n) return null;
          // Kazakhstan sits near the right edge, so its label goes above the node instead of beside it.
          const right = r.id === "kz";
          return (
            <div
              key={r.id}
              className={`absolute ${right ? "-translate-y-full" : "-translate-y-1/2"}`}
              style={
                right
                  ? {
                      right: pct(1000 - n.x - 12, 1000),
                      top: pct(n.y - 24, 560),
                    }
                  : { left: pct(n.x + 22, 1000), top: pct(n.y, 560) }
              }
            >
              <div className="map-fade" style={delay(n.delay + 250)}>
                <p
                  className={`font-display text-[clamp(0.9rem,0.6rem+1.2vw,1.5rem)] leading-none ${right ? "text-right" : ""}`}
                >
                  {r.country}
                </p>
                <p
                  className={`mt-1 hidden text-[0.75rem] text-white/60 sm:block ${right ? "text-right" : ""}`}
                >
                  {cities[r.id as keyof typeof cities]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <figcaption className="grid grid-cols-3 border-t border-line-dark">
        {regions.map((r, i) => (
          <div
            key={r.id}
            className={`map-fade px-3 py-4 sm:px-5 sm:py-5 ${i ? "border-l border-line-dark" : ""}`}
            style={delay(CAPTION_START + i * 150)}
          >
            <p className="text-[0.6875rem] font-bold tracking-[0.12em] text-lilac uppercase">
              {r.place}
            </p>
            <p className="mt-1 text-[0.8125rem] leading-snug text-white/85 sm:text-[0.875rem]">
              {r.focus}
            </p>
          </div>
        ))}
      </figcaption>
    </figure>
  );
}
