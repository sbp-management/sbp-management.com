/**
 * Flag photos per region code: free photos from Unsplash (Unsplash License, commercial use allowed,
 * no credit required). Source pages and photographers: ~/Desktop/sbp-working-files/images/flags-unsplash/SOURCES.md.
 */
export const FLAGS: Record<
  string,
  { src: string; width: number; height: number; contain?: boolean }
> = {
  DE: { src: "/images/flags/flag-de.jpg", width: 1600, height: 1200 },
  RS: { src: "/images/flags/flag-rs.jpg", width: 1600, height: 1200 },
  KZ: { src: "/images/flags/flag-kz.jpg", width: 1600, height: 1200 },
  INT: { src: "/images/flags/flag-int.jpg", width: 1600, height: 1066 },
};

/** One square mosaic per region (drawn over the flag), so the cards are recognisable at a glance. */
export const REGION_PATTERNS: Record<string, number[]> = {
  RS: [0.9, 0.5, 0, 0.3, 0, 0.7, 0.4, 0, 0.2, 0, 0.6, 0.9],
  KZ: [0, 0.3, 0.8, 0.5, 0.2, 0, 0.6, 0.9, 0, 0.4, 0, 0.3],
  DE: [0.5, 0, 0.9, 0, 0.8, 0.3, 0, 0.6, 0, 0.6, 0.2, 0],
  INT: [0.3, 0.7, 0, 0.9, 0, 0, 0.5, 0, 0.8, 0.4, 0, 0.6],
};
