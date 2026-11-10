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
      risk="Register entry checked 2026-11-10 against the official printout (SBP Management e.K., Amtsgericht Charlottenburg, HRA 65793 B, owner Sabina Banda, Einzelunternehmen). Check whether § 18 MStV applies; “§ 5 DDG” line – confirm"
    />
  );
}
