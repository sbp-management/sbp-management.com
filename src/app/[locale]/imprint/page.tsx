import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { LegalPage } from "@/components/v2/legal-page";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await getDictionary();
  return pageMetadata("imprint", legal.imprint.meta);
}

export default async function ImprintPage() {
  const { legal } = await getDictionary();
  return (
    <LegalPage
      doc={legal.imprint}
      risk="Check: legal form, commercial register entry and person responsible for content (§ 18 MStV) are missing; “§ 5 DDG” line added – confirm"
    />
  );
}
