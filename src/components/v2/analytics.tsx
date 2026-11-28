"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { googleAds } from "@/content/google-ads";

/**
 * Consent banner with two categories, each loaded only after the visitor opts in
 * (TDDDG § 25, GDPR Art. 6 (1) a):
 *   - Statistics: Google Analytics 4 (NEXT_PUBLIC_GA_ID, "G-…").
 *   - Marketing: Google Ads conversion measurement (ID and label in src/content/google-ads.ts);
 *     counts a sent Schnellbewerbung that came from an ad. No remarketing, no ad personalisation.
 * Before consent nothing from Google is loaded and no cookie is set. The choice is kept in
 * localStorage (strictly necessary, no cookie). "Cookie settings" in the footer reopens the banner;
 * withdrawing a consent deletes Google's cookies and reloads the page so the tags are gone.
 * Without either ID this component renders nothing.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const ADS_ID = googleAds.id;

/** Forms that report a sent submission (trackLead). */
type LeadKind = "job" | "contact" | "schnellbewerbung";
/** Which of them count as a Google Ads conversion: only the Schnellbewerbung. */
const ADS_LABEL: Partial<Record<LeadKind, string>> = googleAds.labels;
const ENABLED = Boolean(GA_ID || ADS_ID);

const KEY = "sbp-consent-v2";
const OPEN_EVENT = "sbp:cookie-settings";
const CHANGE_EVENT = "sbp:consent-change";

type Consent = { analytics: boolean; marketing: boolean };

export type ConsentText = {
  title: string;
  body: string;
  privacy: string;
  statsLabel: string;
  statsText: string;
  marketingLabel: string;
  marketingText: string;
  acceptAll: string;
  declineAll: string;
  save: string;
  settings: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// ---- stored choice -------------------------------------------------------------------------

/** Choice stored by the earlier banner (statistics only): "granted" / "denied". */
const OLD_KEY = "sbp-analytics-consent";

function readRaw(): string | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return raw;
    // Carry over an answer given in the earlier banner, so returning visitors aren't asked again.
    const old = localStorage.getItem(OLD_KEY);
    if (old === "granted" || old === "denied") {
      return JSON.stringify({ analytics: old === "granted", marketing: false });
    }
    return null;
  } catch {
    return null;
  }
}

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw);
    return { analytics: v.analytics === true, marketing: v.marketing === true };
  } catch {
    return null;
  }
}

function save(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
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

// ---- Google tag ----------------------------------------------------------------------------

const configured = new Set<string>();

/** Loads gtag.js once and turns on what the visitor agreed to (never switches anything off). */
function apply(consent: Consent) {
  const ga = consent.analytics && GA_ID;
  const ads = consent.marketing && ADS_ID;
  if (!ga && !ads) return;

  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    // gtag must push the arguments object itself, not an array.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga || ads || "")}`;
    document.head.appendChild(s);
  }

  // Consent Mode v2. Ad personalisation (remarketing) stays denied in every case.
  window.gtag("consent", "update", {
    analytics_storage: ga ? "granted" : "denied",
    ad_storage: ads ? "granted" : "denied",
    ad_user_data: ads ? "granted" : "denied",
    ad_personalization: "denied",
  });
  if (ga && !configured.has(GA_ID)) {
    configured.add(GA_ID);
    window.gtag("config", GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  }
  if (ads && !configured.has(ADS_ID)) {
    configured.add(ADS_ID);
    window.gtag("config", ADS_ID, { allow_ad_personalization_signals: false });
  }
}

function removeGoogleCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (/^(_ga|_ga_.*|_gid|_gcl_.*)$/.test(name)) {
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      }
    }
  }
}

/**
 * Call when a form was sent successfully. Reports a GA event (statistics consent) and a Google Ads
 * conversion (marketing consent); does nothing for what the visitor has not agreed to.
 */
export function trackLead(kind: LeadKind) {
  const consent = parse(readRaw());
  if (!consent || !window.gtag) return;
  if (consent.analytics && GA_ID) {
    window.gtag("event", "generate_lead", { send_to: GA_ID, lead_type: kind });
  }
  const label = ADS_LABEL[kind];
  if (consent.marketing && ADS_ID && label) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
  }
}

// ---- banner --------------------------------------------------------------------------------

export function Analytics({ text, privacyHref }: { text: ConsentText; privacyHref: string }) {
  // On the server (and during hydration) the choice is unknown: render no banner there.
  const raw = useSyncExternalStore(subscribe, readRaw, () => "unknown");
  const consent = raw === "unknown" ? undefined : parse(raw);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (ENABLED && consent) apply(consent);
  }, [consent?.analytics, consent?.marketing]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const open = consent === null || reopened;
  if (!ENABLED || !open) return null;

  return (
    <Banner
      key={raw ?? "none"}
      text={text}
      privacyHref={privacyHref}
      initial={consent ?? { analytics: false, marketing: false }}
      onDone={() => setReopened(false)}
    />
  );
}

function Banner({
  text,
  privacyHref,
  initial,
  onDone,
}: {
  text: ConsentText;
  privacyHref: string;
  initial: Consent;
  onDone: () => void;
}) {
  const [stats, setStats] = useState(initial.analytics);
  const [marketing, setMarketing] = useState(initial.marketing);

  const decide = (next: Consent) => {
    const before = parse(readRaw());
    save(next);
    onDone();
    const withdrawn =
      (before?.analytics && !next.analytics) || (before?.marketing && !next.marketing);
    if (withdrawn && window.gtag) {
      // Stop gtag first, otherwise it writes its cookies again before the reload.
      window.gtag("consent", "update", {
        analytics_storage: next.analytics ? "granted" : "denied",
        ad_storage: next.marketing ? "granted" : "denied",
        ad_user_data: next.marketing ? "granted" : "denied",
      });
      removeGoogleCookies();
      location.reload();
    }
  };

  const btn =
    "min-w-[9rem] flex-1 border border-ink px-5 py-3 text-[0.9375rem] font-semibold transition-colors sm:flex-none";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[90] max-h-[100dvh] overflow-y-auto p-3 sm:p-5"
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

        <div className="mt-4 grid gap-3">
          {[
            GA_ID && { id: "consent-stats", label: text.statsLabel, desc: text.statsText, on: stats, set: setStats },
            ADS_ID && { id: "consent-marketing", label: text.marketingLabel, desc: text.marketingText, on: marketing, set: setMarketing },
          ]
            .filter((o) => !!o)
            .map((o) => (
              <label key={o.id} htmlFor={o.id} className="flex cursor-pointer gap-3 border border-line p-3">
                <input
                  id={o.id}
                  type="checkbox"
                  checked={o.on}
                  onChange={(e) => o.set(e.target.checked)}
                  className="mt-1 size-4 shrink-0 accent-[var(--color-brand)]"
                />
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-ink">{o.label}</span>
                  <span className="block text-[0.875rem] leading-relaxed">{o.desc}</span>
                </span>
              </label>
            ))}
        </div>

        {/* "Decline all" and "Accept all" look the same on purpose: declining must be as easy as accepting. */}
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => decide({ analytics: false, marketing: false })}
            className={`${btn} bg-ink text-white hover:bg-ink-2`}
          >
            {text.declineAll}
          </button>
          <button
            type="button"
            onClick={() => decide({ analytics: stats, marketing })}
            className={`${btn} bg-white text-ink hover:bg-paper`}
          >
            {text.save}
          </button>
          <button
            type="button"
            onClick={() => decide({ analytics: true, marketing: true })}
            className={`${btn} bg-ink text-white hover:bg-ink-2`}
          >
            {text.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that reopens the banner, so consent can be withdrawn as easily as it was given. */
export function CookieSettingsButton({ label }: { label: string }) {
  if (!ENABLED) return null;
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
