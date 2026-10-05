import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return <LegalPage doc="datenschutz" />;
}
