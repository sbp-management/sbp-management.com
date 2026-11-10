"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Google Analytics 4, loaded only after the visitor opts in (TTDSG § 25, GDPR Art. 6 (1) a).
 * Before consent nothing from Google is loaded and no cookie is set. The choice is kept in
 * localStorage (strictly necessary, no cookie). "Cookie settings" in the footer reopens the banner;
 * withdrawing consent deletes the _ga cookies and reloads the page so the tag is gone.
 * The Measurement ID comes from NEXT_PUBLIC_GA_ID; without it this component renders nothing.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

const KEY = "sbp-analytics-consent";
const OPEN_EVENT = "sbp:cookie-settings";
const CHANGE_EVENT = "sbp:consent-change";
type Choice = "granted" | "denied";

export type ConsentText = {
  title: string;
  body: string;
  privacy: string;
  accept: string;
  decline: string;
  settings: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    /* private mode: the banner simply shows again next visit */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function loadGa() {
  if (!GA_ID || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  // gtag must push the arguments object itself, not an array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  // Consent Mode v2: analytics only; advertising features stay off.
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
}

function removeGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      }
    }
  }
}

export function Analytics({ text, privacyHref }: { text: ConsentText; privacyHref: string }) {
  // On the server (and during hydration) the choice is unknown: render no banner there.
  const choice = useSyncExternalStore(subscribe, readChoice, () => "unknown" as const);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (GA_ID && choice === "granted") loadGa();
  }, [choice]);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const open = choice === null || reopened;
  if (!GA_ID || !open) return null;

  const decide = (next: Choice) => {
    const before = readChoice();
    saveChoice(next);
    setReopened(false);
    if (next === "denied" && (before === "granted" || window.gtag)) {
      // Stop gtag first, otherwise it writes its cookies again before the reload.
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      removeGaCookies();
      location.reload();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-5"
    >
      <div className="mx-auto max-w-[44rem] border border-line bg-white p-5 text-text shadow-[0_12px_40px_rgba(11,16,51,0.18)] sm:p-6">
        <p id="consent-title" className="font-display text-[1.25rem] text-ink">
          {text.title}
        </p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed">
          {text.body}{" "}
          <Link href={privacyHref} className="text-brand underline underline-offset-4">
            {text.privacy}
          </Link>
        </p>
        {/* Both buttons look the same on purpose: declining must be as easy as accepting. */}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="min-w-[9rem] flex-1 border border-ink bg-white px-5 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-paper sm:flex-none"
          >
            {text.decline}
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="min-w-[9rem] flex-1 border border-ink bg-ink px-5 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-2 sm:flex-none"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that reopens the banner, so consent can be withdrawn as easily as it was given. */
export function CookieSettingsButton({ label }: { label: string }) {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="hover:text-white"
    >
      {label}
    </button>
  );
}
