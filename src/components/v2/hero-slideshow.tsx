import { PHOTO_FILES } from "@/content/photos";
import { PhotoSlideshow } from "./photo-slideshow";

/** Every photo used on the site, in the order they appear behind the homepage hero. */
const SLIDES = Object.values(PHOTO_FILES).map((p) => ({ src: p.src, alt: "" }));

/** Decorative background slideshow for the homepage hero: all site photos at 60% opacity. */
export function HeroSlideshow() {
  return (
    // z-0 makes this its own layer group, so the slides and the wash always stay behind the hero text.
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <PhotoSlideshow slides={SLIDES} sizes="100vw" opacity={0.6} priority />
      {/* Readability wash behind the text: grey on the left fading out towards the map; even on small screens. */}
      <div className="absolute inset-0 z-[3] bg-hero/60 xl:bg-transparent xl:bg-linear-to-r xl:from-hero/85 xl:via-hero/55 xl:via-40% xl:to-transparent xl:to-70%" />
    </div>
  );
}
