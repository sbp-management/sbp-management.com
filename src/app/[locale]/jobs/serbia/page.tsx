import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { RegionJobs } from "@/components/v2/region-jobs";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const { jobRegions } = await getDictionary();
  return pageMetadata("jobsSerbia", jobRegions.serbia.meta);
}

export default async function SerbiaJobsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  return (
    <RegionJobs locale={locale} dict={dict} region={dict.jobRegions.serbia} />
  );
}
