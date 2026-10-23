"use client";

import { useEffect, useRef } from "react";

/**
 * Counts the number in `value` up each time it scrolls into view (">40" counts 0 → 40, keeping ">").
 * The final value is rendered on the server, so it is correct without JS and for screen readers.
 */
export function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = /^(\D*)(\d+)(.*)$/.exec(value);
    if (!el || !match || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    // Years count up from a couple of decades earlier rather than from 0.
    const from = target > 1000 ? target - 20 : 0;
    let frame = 0;

    // Counts once per visit: re-arms only after the number has left the screen completely.
    let armed = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          armed = true;
          return;
        }
        if (!armed || entry.intersectionRatio < 0.6) return;
        armed = false;
        cancelAnimationFrame(frame);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${prefix}${Math.round(from + (target - from) * eased)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        el.textContent = `${prefix}${from}${suffix}`;
        frame = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.6] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
