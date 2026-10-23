@AGENTS.md

# Project rules

## Photos: always optimize before they go on the website

Every photo added to `public/images/` (the owner's standing instruction, 2026-10-13):

1. Work on a copy. Never change the original in `~/Desktop/sbp-working-files/`.
2. Bake in the orientation (EXIF rotation) and strip **all** metadata (GPS location, camera, dates): sharp `.rotate()` without `withMetadata()`.
3. Convert to sRGB.
4. Resize so the long edge is at most 2000 px, but never smaller than the largest size the page can request (check the `sizes` prop; team portraits ~1200 px are plenty).
5. Re-encode as JPEG, quality ~82–85. Keep PNG only when the image needs transparency.
6. If re-encoding makes the file larger, keep the smaller version.
7. Show it with `next/image` and an accurate `sizes`; `next.config.ts` serves AVIF/WebP in the right size automatically.
8. Check the page in the browser before and after; nothing should look different.
