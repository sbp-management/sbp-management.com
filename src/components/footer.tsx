import Image from "next/image";
import Link from "next/link";
import { assets, company, footer, footerLinks } from "@/content/site";

function LinkColumn({ heading, links }: { heading: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div>
      <p className="mb-6 text-[12px] leading-4 font-semibold tracking-[0.06em] text-mint uppercase">{heading}</p>
      <ul className="grid gap-4">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="block py-1 text-[14px] text-white transition-colors duration-300 hover:text-mint"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ note = footer.careerNote, showAddress = false }: { note?: string; showAddress?: boolean }) {
  return (
    <footer className="bg-navy px-[5%] pt-[60px] pb-[60px] lg:py-[100px]">
      <div className="mx-auto grid w-full max-w-[1080px] justify-items-center gap-11 text-center md:justify-items-start md:text-left lg:grid-cols-[1.75fr_1.25fr_1fr_2.25fr] md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start">
          <Image src={assets.logo} alt="SBP Management" width={100} height={75} className="mb-4 h-auto w-[100px]" />
          <Image
            src={assets.gapa}
            alt="GAPA, Gütegemeinschaft zur Anwerbung und Vermittlung von Pflegekräften aus dem Ausland"
            width={1440}
            height={1160}
            className="mb-4 h-auto w-[100px]"
          />
          {showAddress ? (
            <address className="mb-2.5 max-w-[30ch] text-[16px] leading-8 tracking-[-0.02em] text-white not-italic">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          ) : (
            <p className="mb-2.5 max-w-[30ch] text-[16px] leading-8 tracking-[-0.02em] text-brand-tint">{note}</p>
          )}
        </div>
        <LinkColumn heading={footer.companyHeading} links={footerLinks.company} />
        <LinkColumn heading={footer.legalHeading} links={footerLinks.legal} />
      </div>
    </footer>
  );
}
