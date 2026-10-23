import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { Reveal } from "@/components/v2/reveal";
import { ContactFormV2 } from "@/components/v2/contact-form";
import { Band, PageHero } from "@/components/v2/page-parts";
import { Heading } from "@/components/v2/ui";
import { company } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import { Review } from "@/components/v2/review";

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage } = await getDictionary();
  return pageMetadata("contact", contactPage.meta);
}

export default async function ContactPage() {
  const { contactPage: c } = await getDictionary();

  const details = [
    {
      label: c.details.address,
      value: company.address.join(", "),
      href: undefined,
    },
    { label: c.details.phone, value: company.phone, href: company.phoneHref },
    { label: c.details.email, value: company.email, href: company.emailHref },
  ];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Band>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <Heading size="md" as="h2">
              {c.details.heading}
            </Heading>
            <dl className="mt-8 border-t border-line">
              {details.map((d) => (
                <div key={d.label} className="border-b border-line py-5">
                  <dt className="text-[0.75rem] font-bold tracking-[0.14em] text-muted uppercase">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-[1.0625rem] font-semibold text-ink">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="underline-offset-4 hover:text-brand hover:underline"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <Heading size="md" as="h2">
              {c.form.heading}
            </Heading>
            <div className="mt-8">
              <Review
                kind="risk"
                note="Legal check: consent wording and link to the Privacy Policy"
              >
                <ContactFormV2 copy={c.form} />
              </Review>
            </div>
          </Reveal>
        </div>
      </Band>
    </>
  );
}
