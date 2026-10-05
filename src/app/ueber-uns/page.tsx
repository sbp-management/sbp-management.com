import Image from "next/image";
import type { Metadata } from "next";
import { Arcs } from "@/components/arcs";
import { ContactSection } from "@/components/contact-section";
import { StarIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/ui";
import { about, assets } from "@/content/site";

export const metadata: Metadata = { title: "Über uns" };

const paragraph = "text-[16px] leading-8 tracking-[-0.02em] text-body md:text-[18px]";
const subheading = "mt-2.5 mb-4 text-[32px] leading-[38.4px] font-bold tracking-[-0.02em] text-ink";

export default function AboutPage() {
  return (
    <PageShell>
      {/* Title + banner */}
      <section className="px-[5%] py-5">
        <Reveal className="mx-auto flex max-w-[870px] flex-col items-center text-center">
          <div className="mb-4 flex items-center text-body">
            <StarIcon className="mr-2 size-4" />
            <p className="text-[16px] leading-6 font-semibold tracking-[0.04em] uppercase">{about.eyebrow}</p>
          </div>
          <h1 className="mb-3.5 text-[35px] leading-[1.2] font-bold tracking-[-0.04em] text-ink lg:text-[64px] lg:leading-[76.8px]">
            {about.title}
          </h1>
        </Reveal>
      </section>

      <div className="relative h-[200px] w-full overflow-hidden md:h-[300px]">
        <Image
          src={assets.companyHeader}
          alt="Lächelndes medizinisches Team in heller Berufskleidung"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <Arcs corner="br" size={170} stroke="#ffffff" className="hidden md:block" />
      </div>

      {/* Intro */}
      <section className="px-[5%] py-5">
        <Container>
          <Reveal className="grid items-center gap-x-[51px] gap-y-6 lg:grid-cols-2">
            <div>
              <Eyebrow tone="purple" gap={0}>
                {about.intro.eyebrow}
              </Eyebrow>
              <h2 className={subheading}>{about.intro.title}</h2>
              <p className={paragraph}>{about.intro.left}</p>
            </div>
            <p className={paragraph}>{about.intro.right}</p>
          </Reveal>
        </Container>
      </section>

      {/* Team */}
      <section className="px-[5%] py-5">
        <Container size="team" className="py-10">
          <Reveal className="mb-12 text-center">
            <h2 className={subheading}>{about.team.title}</h2>
            <p className={paragraph}>{about.team.subtitle}</p>
          </Reveal>

          <ul className="grid gap-x-7 gap-y-[30px] min-[480px]:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {about.team.members.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 100} className="flex flex-col items-center text-center">
                <div className="group mb-[21px] size-40 overflow-hidden rounded-full min-[480px]:size-[200px] lg:size-[240px]">
                  <div className="relative size-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 992px) 240px, (min-width: 480px) 200px, 160px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-[22px] leading-8 font-bold text-plum lg:text-[24px] lg:leading-[34px]">{m.name}</h3>
                <p
                  className={`mt-4 mb-2 text-[14px] tracking-[0.1em] uppercase ${
                    "tall" in m && m.tall ? "leading-8 text-ink" : "leading-5 text-slate"
                  }`}
                >
                  {m.role}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ContactSection />
    </PageShell>
  );
}
