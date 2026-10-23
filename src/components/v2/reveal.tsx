"use client";

import { useEffect, useRef } from "react";

/**
 * Plays its scroll effects every time it comes into view (styles in app/[locale]/site.css).
 *
 * - `data-in` is set once enough of it is visible: transitions (fade, slide, tiles) play in.
 * - Once it has left the screen completely, `data-in` is removed and `data-out` set, which also
 *   resets the keyframe animations inside (headline words, map, counters), so they replay
 *   the next time it scrolls in. It only resets when fully out of view, so nothing flickers
 *   while it is still partly visible.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant,
  enterAt = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
  /** Entrance direction: "left" | "right" | "scale" | "none" (no movement, only replays its children). */
  variant?: "left" | "right" | "scale" | "none";
  /** Share of the element that must be visible before it plays (0 = as soon as it enters the window). */
  enterAt?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= enterAt) {
          el.removeAttribute("data-out");
          el.setAttribute("data-in", "");
        } else if (!entry.isIntersecting) {
          el.removeAttribute("data-in");
          el.setAttribute("data-out", "");
        }
      },
      { threshold: [0, enterAt] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enterAt]);

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant ?? ""}
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
