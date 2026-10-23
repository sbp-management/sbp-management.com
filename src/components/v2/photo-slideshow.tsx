"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Slide = { src: string; alt: string };

const HOLD_MS = 12000; // time each photo stays before the next one slides in

/**
 * Photos sliding through one after another (keyframes in site.css, `.hero-slide`): the
 * incoming photo slides in and settles at 96% of the transition while the outgoing one fades out.
 * Fills its positioned parent. Only the visible, outgoing and upcoming photos are rendered.
 * With "reduce motion" on, the first photo is shown still.
 */
export function PhotoSlideshow({
  slides,
  sizes,
  opacity = 1,
  priority = false,
  className = "object-cover",
  offset = 0,
}: {
  slides: readonly Slide[];
  sizes: string;
  /** Resting opacity of the photos (the homepage hero uses 0.6). */
  opacity?: number;
  priority?: boolean;
  /** Classes for each image (object-fit / position). */
  className?: string;
  /** Delay before the first change, so slideshows on the same page don't change in step. */
  offset?: number;
}) {
  const [{ current, previous }, setSlides] = useState<{
    current: number;
    previous: number | null;
  }>({ current: 0, previous: null });

  useEffect(() => {
    if (slides.length < 2) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: number | undefined;
    const advance = () =>
      setSlides((s) => ({
        current: (s.current + 1) % slides.length,
        previous: s.current,
      }));
    const start = window.setTimeout(() => {
      advance();
      id = window.setInterval(advance, HOLD_MS);
    }, HOLD_MS + offset);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [slides.length, offset]);

  const next = (current + 1) % slides.length;

  return (
    // isolate: the incoming photo is raised above the outgoing one only within the slideshow, so
    // anything placed over it (the square mosaics, captions) always stays on top.
    <div
      className="absolute inset-0 isolate overflow-hidden"
      style={{ "--slide-o": opacity } as React.CSSProperties}
    >
      {slides.map((slide, i) => {
        const state =
          i === current
            ? previous === null
              ? "is-first"
              : "is-in"
            : i === previous
              ? "is-out"
              : "";
        if (!state && i !== next) return null;
        return (
          <div key={slide.src} className={`hero-slide ${state}`}>
            <Image
              src={slide.src}
              // Only the photo on screen is described; the others are hidden until they slide in.
              alt={state === "is-first" || state === "is-in" ? slide.alt : ""}
              aria-hidden={
                state === "is-first" || state === "is-in" ? undefined : true
              }
              fill
              sizes={sizes}
              priority={priority && i === 0}
              className={className}
            />
          </div>
        );
      })}
    </div>
  );
}
