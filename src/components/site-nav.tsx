"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assets, company, nav } from "@/content/site";
import { CloseIcon, MenuIcon } from "./icons";

const linkClass =
  "mx-2 px-4 py-2 text-[14px] leading-6 font-medium tracking-[-0.02em] text-ink transition-colors duration-[350ms] hover:bg-mist hover:text-black";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-[100px] items-center px-[3%] lg:px-[5%]">
      <div className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between px-[5px]">
        <div className="flex flex-1 items-center">
          <Link href="/" className="mr-2.5 shrink-0 lg:mr-[4vw]" aria-label="SBP Management, Startseite">
            <Image src={assets.logo} alt="" width={102} height={77} priority className="h-auto w-[102px]" />
          </Link>

          <nav
            id="site-menu"
            aria-label="Hauptnavigation"
            className={`${
              open ? "block" : "hidden"
            } absolute inset-x-0 top-[80px] border-y border-line bg-white py-2 shadow-float lg:static lg:flex lg:items-center lg:border-0 lg:bg-transparent lg:py-0 lg:shadow-none`}
          >
            {nav.map((item) => {
              const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} block lg:inline-block`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-end">
          <a href={company.phoneHref} className={`${linkClass} hidden md:block`}>
            {company.phone}
          </a>
          <Link
            href="/kontakt"
            className="hidden border border-ink px-6 py-2 text-[14px] leading-6 font-semibold tracking-[-0.01em] text-ink transition-colors duration-[350ms] hover:bg-ink hover:text-white lg:block"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className={`ml-3.5 p-2.5 transition-colors duration-[350ms] lg:hidden ${
              open ? "bg-mint text-ink" : "bg-navy text-white hover:bg-mint hover:text-ink"
            }`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
