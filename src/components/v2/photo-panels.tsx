import { PhotoSlideshow, type Slide } from "./photo-slideshow";
import { Reveal } from "./reveal";

/**
 * One to three photo slideshows side by side (one per subject). A single slideshow runs wide;
 * several sit in equal columns and change at different moments.
 */
export function SlideshowPanels({
  panels,
}: {
  panels: readonly (readonly Slide[])[];
}) {
  const single = panels.length === 1;
  const cols = single
    ? ""
    : panels.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";
  return (
    <div className={`grid gap-6 ${cols}`}>
      {panels.map((slides, i) => (
        <Reveal
          key={i}
          delay={i * 120}
          variant="scale"
          className={`relative overflow-hidden ${single ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"}`}
        >
          <PhotoSlideshow
            slides={slides}
            sizes={
              single
                ? "(min-width: 1360px) 1296px, 100vw"
                : "(min-width: 768px) 33vw, 100vw"
            }
            offset={i * 4000}
            // Many event photos are portraits: keep the crop high so faces stay in the frame.
            className="object-cover object-[center_28%]"
          />
        </Reveal>
      ))}
    </div>
  );
}
