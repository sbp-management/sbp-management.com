/**
 * Languages of the site. SBP Management is a German company: German is the main language and
 * lives at the root of the domain with German addresses (sbp-management.com/ueber-uns).
 * English, Russian and Serbian are translations under /en, /ru and /sr.
 */
export const locales = ["de", "en", "ru", "sr"] as const;
export type Locale = (typeof locales)[number];

/** The main language: no /de prefix, German addresses. */
export const defaultLocale = "de" satisfies Locale;

/** Every language of the site, in the order of the switcher. */
export const allLocales = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "sr", label: "SR", name: "Srpski" },
] as const;

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/**
 * Addresses of the translations, below /en, /ru and /sr. They are also the internal routes
 * (folders in src/app/[locale]); the German addresses below are mapped onto them in next.config.ts.
 */
export const paths = {
  home: "",
  about: "/about",
  services: "/services",
  projects: "/projects",
  masok: "/projects/masok-akademija",
  kazakhstan: "/projects/kazakhstan-central-asia",
  germany: "/projects/germany",
  exchange: "/projects/exchange-programs",
  hospitals: "/hospitals-institutions",
  workforce: "/workforce-solutions",
  // One page per service area (content in en-services.ts); Medical Technology is the second half of the Sterile Supply page.
  svcProject: "/services/healthcare-project-management",
  svcProcess: "/services/hospital-process-optimization",
  svcSterile: "/services/sterile-supply-medical-technology",
  svcMedtech: "/services/sterile-supply-medical-technology#medical-technology",
  svcEducation: "/services/education-competence-development",
  candidates: "/jobs/germany",
  jobs: "/jobs",
  jobBoards: "/jobs",
  jobsGermany: "/jobs/germany",
  jobsSerbia: "/jobs/serbia",
  jobsKazakhstan: "/jobs/kazakhstan-central-asia",
  // One page per profession under Jobs in Germany (content in en-careers.ts).
  careerNurses: "/jobs/germany/nurses",
  careerDoctors: "/jobs/germany/doctors",
  careerMidwives: "/jobs/germany/midwives",
  careerMedtech: "/jobs/germany/medical-technical-staff",
  careerSterile: "/jobs/germany/sterile-processing",
  contact: "/contact",
  privacy: "/privacy",
  imprint: "/imprint",
} as const;

export type PageKey = keyof typeof paths;

/** German addresses (main language, at the root of the domain). */
export const dePaths: Record<PageKey, string> = {
  home: "/",
  about: "/ueber-uns",
  services: "/leistungsfelder",
  projects: "/projekte",
  masok: "/projekte/masok-akademija",
  kazakhstan: "/projekte/kasachstan-zentralasien",
  germany: "/projekte/deutschland",
  exchange: "/projekte/austauschprogramme",
  hospitals: "/fuer-kliniken-institutionen",
  workforce: "/personalloesungen",
  svcProject: "/leistungsfelder/projektmanagement-gesundheitswesen",
  svcProcess: "/leistungsfelder/klinik-prozessoptimierung",
  svcSterile: "/leistungsfelder/sterilgutversorgung-medizintechnik",
  svcMedtech: "/leistungsfelder/sterilgutversorgung-medizintechnik#medizintechnik",
  svcEducation: "/leistungsfelder/bildung-kompetenzentwicklung",
  candidates: "/jobs/deutschland",
  jobs: "/jobs",
  jobBoards: "/jobs",
  jobsGermany: "/jobs/deutschland",
  jobsSerbia: "/jobs/serbien",
  jobsKazakhstan: "/jobs/kasachstan-zentralasien",
  careerNurses: "/jobs/deutschland/pflegefachkraefte",
  careerDoctors: "/jobs/deutschland/aerzte",
  careerMidwives: "/jobs/deutschland/hebammen",
  careerMedtech: "/jobs/deutschland/medizinisch-technische-berufe",
  careerSterile: "/jobs/deutschland/sterilgutversorgung",
  contact: "/kontakt",
  privacy: "/datenschutz",
  imprint: "/impressum",
};

/** Address of a page in a language. */
export const href = (locale: Locale, page: PageKey) =>
  locale === defaultLocale ? dePaths[page] : `/${locale}${paths[page]}`;

/** Pages whose address can be followed by a slug (a single job listing). */
const PARENTS: PageKey[] = ["jobsGermany"];

/**
 * The same page in another language: `pathname` is the address the visitor is on (any language),
 * the result the matching address in `target` (falls back to that language's homepage).
 */
export function localizePath(pathname: string, target: Locale): string {
  // German pages are served from internal /de routes, so inside the app their address can show
  // up either as the German one (/ueber-uns) or as the internal one (/de/about).
  const prefixed = pathname.match(/^\/(de|en|ru|sr)(?=\/|$)/);
  const rest = prefixed ? pathname.slice(prefixed[0].length) || "" : pathname;
  const table: Record<PageKey, string> = prefixed
    ? (paths as Record<PageKey, string>)
    : dePaths;
  const norm = (p: string) => p.split("#")[0].replace(/\/$/, "") || "/";
  const here = norm(rest || "/");
  const keys = Object.keys(table) as PageKey[];
  const exact = keys.find((k) => norm(table[k]) === here);
  if (exact) return href(target, exact);
  for (const k of PARENTS) {
    const base = norm(table[k]);
    if (here.startsWith(base + "/")) return href(target, k) + here.slice(base.length);
  }
  return href(target, "home");
}
