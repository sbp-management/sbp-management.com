import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { LegalPage } from "@/components/v2/legal-page";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await getDictionary();
  return pageMetadata("privacy", legal.privacy.meta);
}

export default async function PrivacyPage() {
  const { legal } = await getDictionary();
  return (
    <LegalPage
      doc={legal.privacy}
      risk="Legal review required before publishing: hosting provider, data transfers outside the EU and processing agreements still open; the German Datenschutz page must be updated to match"
    />
  );
}
