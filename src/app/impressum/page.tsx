import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return <LegalPage doc="impressum" />;
}
