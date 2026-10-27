"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  allLocales,
  hasLocale,
  href,
  localizePath,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ChevronDown, cx } from "./ui";
import { Review } from "./review";

const LOGO = "/images/sbp-logo.png";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Pick<Dictionary, "nav" | "a11y">;
}) {
  const { nav, a11y } = dict;
  const pathname = usePathname();
  // The menu remembers the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // The visible address of this page (German pages report their internal /de route).
  const current = localizePath(pathname, locale);
  const isCurrent = (path: string) =>
    current === path || current.startsWith(`${path}/`);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b bg-white transition-[border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-line shadow-[0_8px_24px_-18px_#0b103340]"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[85rem] items-center gap-2 px-5 sm:gap-4 sm:px-8 xl:h-20">
        <Link
          href={href(locale, "home")}
          aria-label={a11y.home}
          className="shrink-0"
        >
          <Image
            src={LOGO}
            alt=""
            width={912}
            height={664}
            priority
            sizes="90px"
            className="h-12 w-auto xl:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label={a11y.mainNav}
          className="ml-6 hidden flex-1 items-center xl:flex"
        >
          <ul className="flex items-center">
            {nav.items.map((item) => {
              const path = href(locale, item.link);
              const children = "children" in item ? item.children : null;
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={path}
                    aria-current={isCurrent(path) ? "page" : undefined}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:text-brand aria-[current=page]:text-brand"
                  >
                    {item.label}
                    {children && (
                      <ChevronDown className="opacity-60 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                    )}
                  </Link>
                  {children && (
                    <div className="invisible absolute top-full left-0 translate-y-2 pt-2 opacity-0 transition-[opacity,visibility,translate] duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="w-80 border border-line bg-white p-2 shadow-lift">
                        {children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={href(locale, child.link)}
                              className="block px-3.5 py-2.5 text-[0.875rem] leading-snug text-text transition-colors hover:bg-paper hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Review
            kind="approve"
            note="DE / RU / SR translations pending"
            className="hidden xl:block"
          >
            <LanguageSwitch
              locale={locale}
              pathname={pathname}
              a11y={a11y}
              className="flex"
            />
          </Review>
          {/* Projects stay one tap away on small screens too. */}
          <Link
            href={href(locale, "projects")}
            className="flex items-center px-2 py-2 text-[0.8125rem] font-semibold text-ink transition-colors hover:text-brand sm:px-3 sm:text-[0.875rem] xl:hidden"
          >
            {nav.items.find((i) => i.link === "projects")?.label}
          </Link>
          <Link
            href={href(locale, "contact")}
            className="hidden min-h-11 items-center bg-ink px-5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-brand md:flex"
          >
            {nav.contact}
          </Link>
          <button
            type="button"
            onClick={() => setMenuPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            className="flex size-11 items-center justify-center bg-ink text-white transition-colors hover:bg-brand xl:hidden"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {open ? (
                <path d="m4 4 12 12M16 4 4 16" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Reading progress, where the browser supports scroll-driven animations (site.css). */}
      <div
        aria-hidden
        className="scroll-progress absolute inset-x-0 -bottom-px hidden h-0.5 bg-brand"
      />

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white xl:hidden"
      >
        <nav
          aria-label={a11y.mainNav}
          className="mx-auto max-w-[85rem] px-5 pt-4 pb-10 sm:px-8"
        >
          <ul className="divide-y divide-line">
            {nav.items.map((item) => (
              <li key={item.label} className="py-4">
                <Link
                  href={href(locale, item.link)}
                  className="font-display text-[1.5rem] text-ink"
                >
                  {item.label}
                </Link>
                {"children" in item && (
                  <ul className="mt-2 grid gap-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={href(locale, child.link)}
                          className="block py-1.5 text-[0.9375rem] text-text"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={href(locale, "contact")}
              className="flex min-h-12 items-center bg-ink px-6 text-[0.9375rem] font-semibold text-white"
            >
              {nav.contact}
            </Link>
            <LanguageSwitch locale={locale} pathname={pathname} a11y={a11y} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LanguageSwitch({
  locale,
  pathname,
  a11y,
  className,
}: {
  locale: Locale;
  pathname: string;
  a11y: Dictionary["a11y"];
  className?: string;
}) {
  return (
    <ul
      aria-label={a11y.language}
      className={cx(
        "flex items-center text-[0.75rem] font-semibold tracking-wide",
        className,
      )}
    >
      {allLocales.map((l) => {
        const current = l.code === locale;
        // Languages not yet in `locales` are listed but inactive until their translation is published.
        return (
          <li key={l.code}>
            {!current && hasLocale(l.code) ? (
              <Link
                href={localizePath(pathname, l.code)}
                lang={l.code}
                hrefLang={l.code}
                title={l.name}
                className="block px-1.5 py-1 text-muted transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ) : current ? (
              <span
                lang={l.code}
                aria-current="true"
                className="block px-1.5 py-1 text-ink"
              >
                {l.label}
              </span>
            ) : (
              <span
                lang={l.code}
                title={`${l.name} – ${a11y.comingSoon}`}
                className="block px-1.5 py-1 text-muted/50"
              >
                {l.label}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
