import { company, contactSection } from "@/content/site";
import { Arcs } from "./arcs";
import { ContactForm } from "./contact-form";
import { MailIcon, PhoneIcon } from "./icons";
import { Reveal } from "./reveal";
import { Eyebrow, SectionHeading } from "./ui";

export function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-start p-3.5 md:justify-center md:p-6">
      <div className="mr-6 flex size-12 min-w-12 items-center justify-center bg-brand text-white">{icon}</div>
      <div>
        <p className="text-[12px] leading-4 font-semibold tracking-[0.06em] text-ink uppercase">{label}</p>
        <a href={href} className="text-[16px] leading-6 font-medium tracking-[-0.01em] whitespace-nowrap text-body hover:text-brand">
          {value}
        </a>
      </div>
    </div>
  );
}

/** Mint contact band with phone/mail blocks and the enquiry form (home + Über uns + Services). */
export function ContactSection({ id }: { id?: string }) {
  return (
    <section id={id} className="relative bg-mint-soft px-[5%] py-10 lg:py-20">
      <Arcs corner="br" size={190} />
      <div className="mx-auto flex max-w-[580px] flex-col items-center text-center">
        <Reveal>
          <Eyebrow>{contactSection.eyebrow}</Eyebrow>
          <SectionHeading size="md">{contactSection.title}</SectionHeading>
        </Reveal>
      </div>

      <Reveal className="relative z-[5] mx-auto mt-12 max-w-[650px]">
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_1.25fr]">
          <ContactBlock icon={<PhoneIcon />} label={contactSection.phoneLabel} value={company.phone} href={company.phoneHref} />
          <ContactBlock icon={<MailIcon />} label={contactSection.mailLabel} value={company.email} href={company.emailHref} />
        </div>

        <div className="rounded-[5px] border border-line-strong bg-white px-2.5 pt-8 pb-[69px] shadow-float md:px-8">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
