import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/site";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Mosaic } from "./mosaic";
import { Container } from "./ui";

const LOGO = "/images/sbp-logo.png";
const GAPA = "/images/671ccc98250a51bc3547e24c-image013.png";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { footer } = dict;
  return (
    <footer className="relative overflow-hidden bg-ink text-white/75">
      <Mosaic
        cols={5}
        tile={36}
        pattern={[0, 0, 0, 0.12, 0.3, 0, 0, 0.2, 0, 0.12, 0, 0.08, 0, 0.25, 0]}
        color="var(--color-brand)"
        className="pointer-events-none absolute top-0 right-0 hidden md:block"
      />
      <Container className="relative pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-5">
              <span className="inline-flex bg-white p-3">
                <Image
                  src={LOGO}
                  alt="SBP Management"
                  width={912}
                  height={664}
                  sizes="90px"
                  className="h-14 w-auto"
                />
              </span>
              {/* The GAPA mark is white on transparent, made for dark backgrounds. */}
              <Image
                src={GAPA}
                alt={footer.gapaAlt}
                width={1707}
                height={1375}
                className="h-[4.5rem] w-auto"
              />
            </div>
            <p className="mt-6 max-w-[26ch] font-display text-[1.375rem] leading-snug text-white">
              {footer.tagline}
            </p>
            <address className="mt-6 text-[0.9375rem] leading-7 not-italic">
              {company.address.join(", ")}
              <br />
              <a href={company.phoneHref} className="hover:text-white">
                {company.phone}
              </a>
              <br />
              <a href={company.emailHref} className="hover:text-white">
                {company.email}
              </a>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-[0.75rem] font-bold tracking-[0.14em] text-lilac uppercase">
                  {col.heading}
                </p>
                <ul className="grid gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={href(locale, l.link)}
                        className="text-[0.9375rem] transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Mirror of the contact band above: from the divider line down, the navy fades into black. */}
      <div className="relative mt-16 bg-linear-to-b from-ink to-black">
        <Container className="pb-16">
          <div className="flex flex-col gap-4 border-t border-line-dark pt-6 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {footer.copyright}
            </p>
            <ul className="flex gap-6">
              {footer.legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={href(locale, l.link)}
                    className="hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
