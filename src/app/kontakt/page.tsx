import type { Metadata } from "next";
import { ContactBlock } from "@/components/contact-section";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { company, contactPage, contactSection } from "@/content/site";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <PageShell showAddress>
      {/* The white strip behind the lower part of the card is what makes it overlap the mint area. */}
      <section className="relative bg-mint-soft px-[5%] pt-10 pb-10 lg:pt-20 lg:pb-20">
        <div className="absolute inset-x-0 bottom-0 min-h-[250px] bg-white" />

        <Reveal className="relative mx-auto flex max-w-[800px] flex-col items-center text-center">
          <Eyebrow>{contactPage.eyebrow}</Eyebrow>
          <h1 className="mb-3.5 text-[35px] leading-[1.2] font-bold tracking-[-0.04em] text-ink lg:text-[64px] lg:leading-[76.8px]">
            {contactPage.title}
          </h1>
        </Reveal>

        <Reveal className="relative z-[5] mx-auto mt-12 max-w-[650px]">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_1.25fr]">
            <ContactBlock icon={<PhoneIcon />} label={contactSection.phoneLabel} value={company.phone} href={company.phoneHref} />
            <ContactBlock icon={<MailIcon />} label={contactSection.mailLabel} value={company.email} href={company.emailHref} />
          </div>

          <div className="rounded-[5px] border border-line-strong bg-white px-2.5 pt-8 pb-[62px] shadow-float md:px-8">
            <ContactForm variant="contactPage" />
            <p className="mt-5 text-[14px] leading-5 text-body">
              {contactPage.feedback}{" "}
              <a href={`mailto:${company.feedbackEmail}`} className="hover:text-brand">
                {company.feedbackEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
