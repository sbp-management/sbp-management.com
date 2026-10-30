/**
 * German copy – the main language and master text of the site, from "SBP Website DE.docx"
 * (sbp-working-files). EN / RU / SR must keep exactly this shape (see dictionaries.ts).
 * `link` values are page keys from config.ts, not URLs.
 */
import { deCareers } from "./de-careers";
import { deLegal } from "./de-legal";
import { dePages } from "./de-pages";
import { deServices } from "./de-services";

export const de = {
  meta: {
    title: "SBP Management | Internationale Gesundheitsprojekte",
    description:
      "SBP Management entwickelt und realisiert internationale Projekte im Gesundheitswesen: Projektmanagement, Prozessoptimierung, Sterilgutversorgung, Medizintechnik, berufliche Bildung und Fachkräfteentwicklung. Deutschland, Serbien, Kasachstan und Zentralasien.",
  },

  notFound: {
    eyebrow: "Fehler 404",
    title: "Seite nicht gefunden",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben. Starten Sie erneut auf der Startseite oder nehmen Sie Kontakt mit uns auf.",
    home: "Zur Startseite",
    contact: "Kontakt aufnehmen",
  },

  a11y: {
    skip: "Zum Inhalt springen",
    home: "SBP Management, Startseite",
    mainNav: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    comingSoon: "in Kürze",
  },

  nav: {
    items: [
      { label: "Über uns", link: "about" },
      {
        label: "Leistungsfelder",
        link: "services",
        children: [
          { label: "Projektmanagement im Gesundheitswesen", link: "svcProject" },
          { label: "Klinik- & Prozessoptimierung", link: "svcProcess" },
          { label: "Sterilgutversorgung & Medizintechnik", link: "svcSterile" },
          { label: "Bildung & Kompetenzentwicklung", link: "svcEducation" },
          { label: "Personallösungen", link: "workforce" },
        ],
      },
      {
        label: "Projekte",
        link: "projects",
        children: [
          { label: "MASOK Akademija | Serbien", link: "masok" },
          { label: "Kompetenzzentrum | Kasachstan & Zentralasien", link: "kazakhstan" },
          { label: "Projekte in Deutschland", link: "germany" },
          { label: "Internationale Austauschprogramme", link: "exchange" },
        ],
      },
      { label: "Für Kliniken & Institutionen", link: "hospitals" },
      { label: "Jobs", link: "jobs" },
    ],
    contact: "Kontakt",
  },

  home: {
    hero: {
      eyebrow: "Gesundheit · Bildung · Technologie · Internationale Projekte",
      // Each entry is one line of the headline (lines never wrap); the accent line sits underneath.
      titleLines: ["Internationale", "Gesundheitsprojekte."],
      titleAccent: "Von der Strategie bis zur Umsetzung.",
      lead: "SBP Management entwickelt und realisiert Projekte an der Schnittstelle von Gesundheitswesen, beruflicher Bildung, Sterilgutversorgung, Medizintechnik und Fachkräfteentwicklung.",
      body: "Von Deutschland über Serbien bis Zentralasien verbinden wir Kliniken, Bildungseinrichtungen, Institutionen und Unternehmen und entwickeln Strukturen, die langfristig funktionieren.",
      primary: "Unsere Projekte",
      secondary: "Für Kliniken & Institutionen",
      candidates: "Für Kandidaten – Karriere in Deutschland",
      /** City names on the map, by region id. */
      mapCities: { de: "Berlin", rs: "Leskovac", kz: "Astana" },
      mapLabel: "Projektregionen von SBP Management: Deutschland, Serbien und Kasachstan / Zentralasien",
      regions: [
        { id: "de", country: "Deutschland", place: "Berlin · seit 2011", focus: "Klinik- & Prozessprojekte" },
        { id: "rs", country: "Serbien", place: "Leskovac", focus: "MASOK Akademija" },
        { id: "kz", country: "Kasachstan", place: "& Zentralasien", focus: "Gesundheitsakademie" },
      ],
    },

    ticker: [
      "Projektmanagement im Gesundheitswesen",
      "Deutschland",
      "Sterilgutversorgung",
      "Serbien",
      "Medizintechnik",
      "Kasachstan & Zentralasien",
      "Bildung & Training",
      "Internationaler Austausch",
      "Personallösungen",
    ],

    intro: {
      eyebrow: "Was SBP macht",
      title: "Mehr als Personalgewinnung",
      body: "Gesundheitssysteme funktionieren dann nachhaltig, wenn Prozesse, Qualifikationen, Technologie und Menschen zusammengedacht werden. SBP Management begleitet Kliniken, Institutionen und internationale Partner von der Analyse und Projektentwicklung bis zur praktischen Implementierung.",
      pillars: ["Gesundheit", "Bildung", "Technologie", "Fachkräfte"],
    },

    projects: {
      eyebrow: "Internationale Projekte",
      title: "Projekte, die Strukturen verbinden",
      body: "SBP Management entwickelt Projekte dort, wo Gesundheitsversorgung, Qualifikation, Technologie und Organisation zusammenkommen.",
      all: "Alle Projekte",
      cta: "Projekt entdecken",
      statusLabel: "Status",
      items: [
        {
          region: "Serbien",
          code: "RS",
          name: "MASOK Akademija",
          title: "Kompetenzentwicklung für Gesundheit und Medizintechnik",
          body: "Mit der MASOK Akademija in Leskovac entwickelt SBP Management ein Modell, das berufliche Bildung, praktische Qualifizierung, internationale Qualitätsstandards und die Anforderungen des Gesundheitswesens und der Medizintechnik miteinander verbindet.",
          focus: ["Chirurgische Instrumente", "Medizinische Fachangestellte (MFA)", "Sterilgutversorgung"],
          status: "Umsetzung / Aufbau",
          tone: "active",
          link: "masok",
        },
        {
          region: "Kasachstan & Zentralasien",
          code: "KZ",
          name: "Gesundheitsakademie Kasachstan",
          title: "Aufbau eines Kompetenzzentrums für moderne Gesundheitsversorgung",
          body: "Die Deutsch-Kasachische Gesundheitsinitiative verfolgt einen integrierten Ansatz zur Entwicklung moderner Strukturen in Fachkräftequalifizierung, Krankenhausmanagement, Sterilgutversorgung, Medizintechnik, Digitalisierung und Qualitätsmanagement.",
          focus: ["Gesundheitsakademie", "Train-the-Trainer", "Qualitätsmanagement"],
          status: "Initiierungs- und Aufbauphase",
          tone: "planned",
          link: "kazakhstan",
        },
        {
          region: "Deutschland",
          code: "DE",
          name: "Klinik- und Prozessprojekte",
          title: "Organisation, Fachkräfte und nachhaltige Versorgungsstrukturen",
          body: "In Deutschland arbeitet SBP Management mit Kliniken, Klinikgruppen, Gesundheitsverbänden und weiteren Akteuren des Gesundheitswesens zusammen. Unser Ansatz verbindet Prozessoptimierung, Organisationsentwicklung und strategische Personalplanung.",
          focus: ["Prozessoptimierung", "Organisationsentwicklung", "Personalplanung"],
          status: "Laufend",
          tone: "ongoing",
          link: "germany",
        },
        {
          region: "International",
          code: "INT",
          name: "Austauschprogramme",
          title: "Wissen entsteht durch Begegnung",
          body: "Internationale Austausch- und Praxisprogramme für Schülerinnen und Schüler, Auszubildende, Fachkräfte und Bildungseinrichtungen – für direkten Wissenstransfer zwischen Deutschland und internationalen Partnerländern.",
          focus: ["Hospitationen", "Praxisprogramme", "Wissenstransfer"],
          status: "Laufend",
          tone: "ongoing",
          link: "exchange",
        },
      ],
    },

    services: {
      eyebrow: "Leistungsfelder",
      title: "Fünf Kompetenzen. Ein integrierter Ansatz.",
      cta: "Alle Leistungsfelder",
      items: [
        {
          title: "Projektmanagement im Gesundheitswesen",
          body: "Konzeption, Koordination und Umsetzung komplexer Gesundheitsprojekte mit nationalen und internationalen Partnern.",
        },
        {
          title: "Klinik- & Prozessoptimierung",
          body: "Analyse und Weiterentwicklung klinischer Abläufe, Organisationsstrukturen, Schnittstellen, Personalprozesse und Qualitätsstandards.",
        },
        {
          title: "Sterilgutversorgung & Medizintechnik",
          body: "Projekte rund um AEMP/CSSD, Aufbereitung, chirurgische Instrumente, Prozessqualität, Dokumentation und technische Kompetenzentwicklung.",
        },
        {
          title: "Bildung & Kompetenzentwicklung",
          body: "Entwicklung praxisorientierter Ausbildungsmodelle, Curricula, Train-the-Trainer-Konzepte und internationaler Wissenstransfer.",
        },
        {
          title: "Personallösungen",
          body: "Strategische Fachkräfteplanung, internationale Personalgewinnung, Anerkennung, Integration und nachhaltiges Onboarding.",
        },
      ],
    },

    germany: {
      eyebrow: "Deutschland",
      title: "Von Fachkräftegewinnung zu nachhaltiger Klinikentwicklung",
      body: [
        "Unsere langjährige Erfahrung in deutschen Kliniken zeigt: Personalfragen lassen sich nicht isoliert lösen. Erfolgreiche Fachkräfteintegration braucht funktionierende Prozesse, klare Verantwortlichkeiten, gutes Onboarding und belastbare Organisationsstrukturen.",
        "Deshalb verbindet SBP Management Personallösungen mit Prozess- und Organisationsentwicklung im Gesundheitswesen.",
      ],
      cta: "Klinik- & Prozessprojekte",
      ctaSecondary: "Personallösungen",
      imageAlt: "Zwei Personen geben sich bei einem Termin über einen Schreibtisch hinweg die Hand",
      // Figures carried over from the current site. Confirm before publishing.
      stats: [
        { value: "2011", label: "Gegründet in Berlin" },
        { value: ">40", label: "Partnerkliniken" },
        { value: "3", label: "Kernregionen für Projekte" },
      ],
    },

    process: {
      eyebrow: "Unsere Arbeitsweise",
      steps: ["Analysieren", "Entwickeln", "Verbinden", "Implementieren"],
      body: "Wir identifizieren konkrete Bedarfe, entwickeln Projekt- und Kompetenzmodelle, bringen relevante Partner zusammen und begleiten die praktische Umsetzung.",
    },

    network: {
      eyebrow: "Partner & Netzwerk",
      title: "Ein Netzwerk aus Gesundheitswesen, Bildung und Industrie",
      body: "Wir arbeiten mit Kliniken, Gesundheitsverbänden, Bildungseinrichtungen, Kammern, öffentlichen Institutionen und Industriepartnern zusammen. Organisationen nennen wir nur, wenn eine Freigabe zur öffentlichen Referenznennung vorliegt.",
      categories: [
        "Kliniken und Klinikgruppen",
        "Gesundheitsverbände und Fachorganisationen",
        "Bildungseinrichtungen und Akademien",
        "Kammern und Wirtschaftsorganisationen",
        "Institutionen im Bereich Qualifikation und duale Bildung",
        "Industrie- und Technologiepartner",
      ],
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Sprechen Sie mit uns über Ihr Projekt.",
      body: "Ob Klinikoptimierung, Qualifizierung, Sterilgutversorgung, Medizintechnik, internationale Kooperation oder Fachkräfteentwicklung – wir entwickeln gemeinsam mit Ihnen eine Lösung, die zu Ihrer Organisation und Ihrem Markt passt.",
      primary: "Projektanfrage starten",
      or: "oder direkt erreichen",
    },
  },

  jobs: {
    meta: {
      title: "Jobs",
      description:
        "Karriere in Deutschland und Stellenangebote nach Region: Deutschland, Serbien sowie Kasachstan & Zentralasien. SBP Management begleitet internationale Fachkräfte im Gesundheitswesen von der Bewerbung bis zum erfolgreichen Start.",
    },

    candidates: {
      eyebrow: "Für Kandidaten",
      title: "Karriere in Deutschland",
      body: "Sie verfügen über einen im DACH-Raum anerkannten medizinischen oder pflegerischen Abschluss und suchen eine berufliche Perspektive in Deutschland?",
      steps: ["Sprache", "Anerkennung", "Visum & Einreise", "Onboarding"],
      primary: "Aktuelle Stellenangebote",
      secondary: "Beratung für Kandidaten",
    },

    boards: {
      eyebrow: "Stellenbörsen",
      title: "Stellen nach Region finden",
      body: "Wählen Sie die Region, in der Sie arbeiten möchten, um die aktuellen Stellenangebote zu sehen.",
      cta: "Stellenangebote ansehen",
      // Each card opens that region's job page.
      items: [
        {
          code: "DE",
          region: "Deutschland",
          title: "Kliniken und Gesundheitseinrichtungen in Deutschland",
          body: "Aktuelle Stellen für Ärztinnen und Ärzte, Pflegefachkräfte und medizinisches Fachpersonal in unseren Partnerkliniken.",
          note: "",
          link: "jobsGermany",
        },
        {
          code: "RS",
          region: "Serbien",
          title: "Gesundheitswesen und Medizintechnik in Serbien",
          body: "Stellenangebote im Zusammenhang mit unseren Projekten in Serbien.",
          note: "",
          link: "jobsSerbia",
        },
        {
          code: "KZ",
          region: "Kasachstan & Zentralasien",
          title: "Gesundheitswesen in Kasachstan und Zentralasien",
          body: "Stellenangebote im Zusammenhang mit der Deutsch-Kasachischen Gesundheitsinitiative.",
          note: "",
          link: "jobsKazakhstan",
        },
      ],
    },
  },

  status: {
    active: "Im Aufbau",
    planned: "Geplant",
    ongoing: "Laufend",
  },

  footer: {
    tagline: "Internationale Gesundheitsprojekte. Von der Strategie bis zur Umsetzung.",
    columns: [
      {
        heading: "Projekte",
        links: [
          { label: "MASOK Akademija | Serbien", link: "masok" },
          { label: "Kasachstan & Zentralasien", link: "kazakhstan" },
          { label: "Projekte in Deutschland", link: "germany" },
          { label: "Austauschprogramme", link: "exchange" },
        ],
      },
      {
        heading: "Unternehmen",
        links: [
          { label: "Über uns", link: "about" },
          { label: "Leistungsfelder", link: "services" },
          { label: "Personallösungen", link: "workforce" },
          { label: "Für Kliniken & Institutionen", link: "hospitals" },
          { label: "Kontakt", link: "contact" },
        ],
      },
      {
        heading: "Kandidaten",
        links: [
          { label: "Karriere in Deutschland", link: "candidates" },
          { label: "Stellenangebote", link: "jobBoards" },
        ],
      },
    ],
    legal: [
      { label: "Impressum", link: "imprint" },
      { label: "Datenschutz", link: "privacy" },
    ],
    gapaAlt: "GAPA – Gütegemeinschaft Anwerbung und Vermittlung von Pflegekräften aus dem Ausland",
    copyright: "SBP Management",
  },

  ...dePages,
  ...deServices,
  ...deLegal,
  ...deCareers,
} as const;
