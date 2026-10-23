import { notFound } from "next/navigation";

// Any unknown address below /en shows the site's own 404 page (not-found.tsx) with header and footer.
export default function Missing() {
  notFound();
}
