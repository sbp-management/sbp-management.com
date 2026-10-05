import Image from "next/image";
import { Arcs } from "@/components/arcs";
import { ContactSection } from "@/components/contact-section";
import { SmileBubbleIcon, StarIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { assets, footer, home } from "@/content/site";

export default function HomePage() {
  return (
    <PageShell footerNote={footer.homeNote} offsetNav={false}>
      {/* Hero */}
      <section className="relative px-[5%] pt-[100px]">
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-mint lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[40%]">
          <Arcs corner="br" size={190} />
        </div>

        <Container className="mt-5 grid gap-4 lg:grid-cols-2">
          <Reveal className="flex flex-col items-start justify-center pb-5 md:pb-[60px] lg:pb-[100px]">
            <div className="mb-4 flex items-center text-ink">
              <StarIcon className="mr-2 shrink-0" />
              <p className="text-[16px] leading-8 font-semibold tracking-[0.05em] uppercase">{home.eyebrow}</p>
            </div>
            <h1 className="mb-6 text-[35px] leading-[1.2] font-bold tracking-[-0.04em] text-ink lg:text-[64px] lg:leading-[76.8px]">
              {home.title}
            </h1>
            <p className="text-[16px] leading-8 tracking-[-0.02em] text-body md:text-[18px]">{home.lead}</p>
            <Button href="/kontakt" className="mt-8">
              {home.cta}
            </Button>
          </Reveal>

          <Reveal delay={120} className="relative flex items-center self-end">
            <Image
              src={assets.heroPhoto}
              alt="Lächelnde Ärztin in türkisfarbener Berufskleidung mit Stethoskop"
              width={590}
              height={682}
              priority
              sizes="(min-width: 992px) 532px, 90vw"
              className="mx-auto h-auto w-full max-w-[532px] lg:mx-0"
            />
            <div className="absolute top-1/2 right-0 hidden w-full max-w-64 -translate-y-1/2 items-center bg-white p-6 whitespace-nowrap shadow-badge md:flex">
              <div className="mr-6 flex size-16 min-w-16 items-center justify-center bg-mint p-3.5">
                <SmileBubbleIcon className="size-9" />
              </div>
              <div>
                <p className="text-[56px] leading-[67.2px] font-bold tracking-[-0.04em] text-ink">{home.stat.value}</p>
                <p className="text-[16px] leading-6 font-medium tracking-[-0.01em] text-black">{home.stat.label}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Tätigkeitsfelder */}
      <section className="px-[5%] py-[60px] lg:py-[100px]">
        <Reveal className="mx-auto flex max-w-[870px] flex-col items-center text-center">
          <Eyebrow gap={8}>{home.fields.eyebrow}</Eyebrow>
          <SectionHeading>{home.fields.title}</SectionHeading>
        </Reveal>

        <Container size="wide">
          <Reveal>
            <ul className="mx-auto mt-16 grid max-w-[540px] gap-10 lg:max-w-none lg:grid-cols-3">
              {home.fields.cards.map((card) => (
                <li key={card.title} className="flex flex-col items-center justify-center border border-line px-8 py-10 text-center lg:p-8">
                  <h3 className="mb-4 text-[24px] leading-8 font-semibold tracking-[-0.02em] text-[#333]">{card.title}</h3>
                  <p className="text-[16px] leading-8 tracking-[-0.02em] text-body md:text-[18px]">{card.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* CTA block */}
      <section className="px-[5%] py-10">
        <Container>
          <Reveal className="relative overflow-hidden bg-navy px-6 py-20 text-center md:px-[54px]">
            <Arcs corner="tr" size={330} stroke="#4754ff" opacity={0.55} />
            <Arcs corner="bl" size={230} stroke="#4754ff" opacity={0.4} />
            <div className="relative mx-auto flex max-w-[600px] flex-col items-center justify-center">
              <h2 className="mb-8 text-[32px] leading-[1.2] font-bold tracking-[-0.02em] text-white md:text-[40px] md:leading-[48px]">
                {home.cta_block.title}
              </h2>
              <Button
                href={home.cta_block.href}
                variant="brand"
                className="hover:bg-white hover:text-navy"
              >
                {home.cta_block.button}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactSection />
    </PageShell>
  );
}
