import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuickApplyForm } from "@/components/v2/quick-apply-form";
import { Container } from "@/components/v2/ui";
import { quickContact, quickPosition } from "@/content/quick-apply";
import { href } from "@/i18n/config";
import { getLocale } from "@/i18n/dictionaries";

/**
 * "Schnellbewerbung": the landing page Google Ads link to (/schnellbewerbung?stelle=…&utm_…).
 * German only, kept out of search results, the menu and the sitemap. Anonymous: no hospital names,
 * towns or links to listings that name them.
 */
export const metadata: Metadata = {
  title: { absolute: "Jetzt in 1 Minute bewerben | SBP Management" },
  description: "Schnell und unkompliziert bei SBP Management bewerben.",
  robots: { index: false, follow: false },
};

const POINTS = [
  "SBP Management ist Personalvermittler",
  "Ihr Arbeitsvertrag wird direkt mit unserem Auftraggeber geschlossen",
  `Ihre Ansprechpartnerin: ${quickContact.name}`,
];

export default async function QuickApplyPage({
  searchParams,
}: PageProps<"/[locale]/schnellbewerbung">) {
  if ((await getLocale()) !== "de") notFound();
  const { stelle } = await searchParams;
  const slug = typeof stelle === "string" ? stelle : undefined;
  const position = quickPosition(slug);

  return (
    <section className="bg-paper pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-[44rem]">
        <h1 className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.08] font-medium tracking-[-0.02em] text-ink">
          Jetzt in 1 Minute bewerben
        </h1>
        {position && position.slug !== "initiativ" && (
          <p className="mt-4 font-display text-[1.25rem] leading-snug text-ink sm:text-[1.375rem]">
            {position.title}
            {position.region && ` · ${position.region}`}
          </p>
        )}
        <ul className="mt-6 grid gap-2.5">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[1rem] leading-snug">
              <span aria-hidden className="mt-1.5 size-2.5 shrink-0 rotate-45 bg-brand" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <QuickApplyForm initialStelle={position?.slug} privacyHref={href("de", "privacy")} />
        </div>
        </div>
      </Container>
    </section>
  );
}
