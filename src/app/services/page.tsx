import Image from "next/image";
import type { Metadata } from "next";
import { Arcs } from "@/components/arcs";
import { ContactSection } from "@/components/contact-section";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { assets, services } from "@/content/site";

export const metadata: Metadata = { title: "Leistungen" };

const paragraph = "text-[16px] leading-8 tracking-[-0.02em] text-body md:text-[18px]";
const subheading = "mt-2.5 mb-4 text-[32px] leading-[38.4px] font-bold tracking-[-0.02em] text-ink";

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Navy band; the white intro card overhangs its bottom edge by 14px. */}
      <section className="relative bg-navy px-[5%] pt-[60px] lg:pt-20">
        <Arcs corner="tr" size={330} stroke="#4754ff" opacity={0.55} />
        <div className="absolute inset-x-0 -bottom-px hidden h-[14px] bg-white lg:block" />
        <Container size="narrow">
          <Reveal className="mt-1.5 mb-14 flex flex-col items-center bg-white px-6 py-8 text-center shadow-float lg:mt-12 lg:mb-0 lg:p-12">
            <h1 className={subheading}>{services.intro.title}</h1>
            <p className={paragraph}>{services.intro.body}</p>
          </Reveal>
        </Container>
      </section>

      {/* Image + text rows */}
      <section className="px-[5%] pt-5">
        <Container className="space-y-10">
          {services.rows.map((row, i) => {
            const imageFirst = i % 2 === 1;
            const image = (
              <div className="relative h-[360px] w-full max-w-[370px] overflow-hidden lg:h-[494px]">
                <Image
                  src={row.image === "surgeon" ? assets.surgeon : assets.handshake}
                  alt={row.image === "surgeon" ? "Chirurg im OP bei der Arbeit" : "Händeschütteln zwischen Geschäftspartnern"}
                  fill
                  priority={i === 0}
                  sizes="370px"
                  className="object-cover"
                />
              </div>
            );
            return (
              <Reveal key={row.title} className="grid items-center gap-x-[51px] gap-y-6 lg:grid-cols-2">
                <div className={`flex flex-col items-start ${imageFirst ? "lg:order-2" : ""}`}>
                  <Eyebrow tone="purple" gap={10}>
                    {row.eyebrow}
                  </Eyebrow>
                  <h2 className={subheading}>{row.title}</h2>
                  <p className={paragraph}>{row.body}</p>
                </div>
                {imageFirst ? (
                  <div className="relative flex items-center justify-center p-8 lg:order-1">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-mist" />
                    <div className="relative z-[5] w-full max-w-[370px]">{image}</div>
                  </div>
                ) : (
                  image
                )}
              </Reveal>
            );
          })}
        </Container>
      </section>

      {/* Values */}
      <section className="px-[5%] pt-[60px] pb-20 lg:pt-[100px] lg:pb-[120px]">
        <Reveal className="mx-auto flex max-w-[580px] flex-col items-center text-center">
          <Eyebrow>{services.values.eyebrow}</Eyebrow>
          <SectionHeading size="md">{services.values.title}</SectionHeading>
        </Reveal>
        <Container>
          <Reveal>
            <ul className="mx-auto mt-16 grid max-w-[540px] gap-10 lg:max-w-none lg:grid-cols-2">
              {services.values.items.map((v) => (
                <li key={v.title} className="flex flex-col items-center justify-center border border-line px-8 py-10 text-center lg:p-8">
                  <h3 className="mb-4 text-[24px] leading-8 font-semibold tracking-[-0.02em] text-[#333]">{v.title}</h3>
                  <p className={paragraph}>{v.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <ContactSection />
    </PageShell>
  );
}
