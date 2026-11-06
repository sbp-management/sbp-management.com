/**
 * German copy for the inner pages, from "SBP Website DE.docx" sections 6–16.
 * Merged into the dictionary in de.ts; keeps exactly the shape of en-pages.ts.
 * `link` values are page keys from config.ts; `href` values are plain URLs.
 */
export const dePages = {
  about: {
    meta: {
      title: "Über uns",
      description:
        "SBP Management ist ein in Berlin ansässiges Unternehmen für Entwicklung, Steuerung und Umsetzung von Projekten im Gesundheitswesen und arbeitet seit 2011 mit Kliniken, Institutionen und internationalen Partnern zusammen.",
    },
    eyebrow: "Über uns",
    title: "Internationale Projekte für ein stärkeres Gesundheitswesen",
    lead: "SBP Management ist ein in Berlin ansässiges Unternehmen für Entwicklung, Steuerung und Umsetzung von Projekten im Gesundheitswesen. Seit 2011 arbeiten wir mit Kliniken, Gesundheitsorganisationen, Bildungseinrichtungen, Institutionen und internationalen Partnern zusammen.",
    body: [
      "Unsere Projekte verbinden Bereiche, die im Gesundheitswesen häufig getrennt betrachtet werden: Organisation, Fachkräfte, berufliche Bildung, Medizintechnik, Sterilgutversorgung und internationale Kooperation.",
      "Unser Anspruch ist nicht, kurzfristige Einzellösungen zu schaffen. Wir entwickeln Strukturen, die Wissen aufbauen, Prozesse verbessern und langfristig vor Ort weiterentwickelt werden können.",
    ],
    facts: [
      { value: "2011", label: "Gegründet in Berlin" },
      { value: "3", label: "Kernregionen für Projekte" },
    ],
    international: {
      eyebrow: "Von Deutschland zu internationalen Projekten",
      title: "Erfahrung aus deutschen Kliniken als Grundlage",
      body: [
        "Die Erfahrungen aus der Zusammenarbeit mit deutschen Kliniken bilden eine wichtige Grundlage für unsere internationalen Projekte.",
        "In Serbien entwickelt SBP Management mit der Akademija MASOK Modelle für berufliche Qualifikation im Gesundheitswesen und in der Medizintechnik. Diese Erfahrungen bilden zugleich eine Referenz für die Entwicklung der Deutsch-Kasachischen Gesundheitsinitiative und eines geplanten Kompetenzzentrums in Kasachstan mit Perspektive für Zentralasien.",
      ],
    },
    team: {
      eyebrow: "Team",
      title: "Lernen Sie das Team kennen",
      body: "Expertise in Gesundheitswesen, Bildung und internationalem Projektmanagement – ein Team, das Ergebnisse liefert, die bleiben.",
      photoAlt: "Porträt von",
      /** Shown in the circle while a team member's photo is still missing. */
      photoSoon: "Foto folgt",
      /** In order: row 1 CEO, Junior Consultant; row 2 Team Management/HR ×2, International Project Manager; row 3 Real Estate, Accounting, IT. Empty name = not known yet. */
      members: [
        { name: "Sabina Banda", role: "CEO" },
        { name: "Nikola Banda", role: "Junior Consultant" },
        { name: "Ana Zakarashvili", role: "Teammanagement / HR" },
        { name: "Josephine Heinrich", role: "Teammanagement / HR" },
        { name: "Milica Golubović", role: "Internationale Projektmanagerin" },
        { name: "Esra Simsek", role: "Immobilien" },
        { name: "Adriel Mangiring", role: "Buchhaltung" },
        { name: "Stephen Ntah", role: "IT-Administration" },
      ],
    },
    work: {
      eyebrow: "Unsere Arbeitsweise",
      title: "Analysieren. Entwickeln. Verbinden. Implementieren.",
      body: [
        "Wir identifizieren konkrete Bedarfe, entwickeln Projekt- und Kompetenzmodelle, bringen relevante Partner zusammen und begleiten die praktische Umsetzung.",
        "Dabei arbeiten wir an der Schnittstelle zwischen Kliniken, Bildung, Industrie, Institutionen und internationalen Partnern.",
      ],
      steps: [
        { title: "Analysieren", body: "Wir identifizieren konkrete Bedarfe." },
        { title: "Entwickeln", body: "Wir entwickeln Projekt- und Kompetenzmodelle." },
        { title: "Verbinden", body: "Wir bringen relevante Partner zusammen." },
        { title: "Implementieren", body: "Wir begleiten die praktische Umsetzung." },
      ],
    },
  },

  services: {
    meta: {
      title: "Leistungsfelder",
      description:
        "Projektmanagement im Gesundheitswesen, Klinik- und Prozessoptimierung, Sterilgutversorgung, Medizintechnik und chirurgische Instrumente, Bildung und Training sowie Personallösungen.",
    },
    eyebrow: "Leistungsfelder",
    title: "Kompetenzen für Gesundheit, Bildung und\u00A0Technologie",
    lead: "Gesundheitssysteme funktionieren dann nachhaltig, wenn Prozesse, Qualifikationen, Technologie und Menschen zusammengedacht werden. SBP Management begleitet Kliniken, Institutionen und internationale Partner von der Analyse und Projektentwicklung bis zur praktischen Implementierung.",
    more: "Mehr erfahren",
    items: [
      {
        id: "healthcare-project-management",
        title: "Projektmanagement im Gesundheitswesen",
        body: "Strategische Konzeption, Stakeholder-Management, Projektsteuerung, internationale Koordination und Implementierungsbegleitung.",
        link: "svcProject",
      },
      {
        id: "hospital-process-optimization",
        title: "Klinik- & Prozessoptimierung",
        body: "Weiterentwicklung von Organisation, Abläufen, Schnittstellen, Ressourcen, Personalprozessen und betrieblichen Strukturen.",
        link: "svcProcess",
      },
      {
        id: "sterile-supply",
        title: "Sterilgutversorgung",
        body: "Prozessentwicklung in AEMP/CSSD, Qualität, Dokumentation, Kompetenzaufbau, Rückverfolgbarkeit und Orientierung an internationalen Standards.",
        link: "svcSterile",
      },
      {
        id: "medical-technology",
        title: "Medizintechnik & chirurgische Instrumente",
        body: "Qualifizierung, Wartung, Reparatur, Lebenszyklusmanagement und Verbindung zwischen Gesundheitswesen und technischer Industrie.",
        link: "svcMedtech",
      },
      {
        id: "education-training",
        title: "Bildung & Training",
        body: "Curriculum-Entwicklung, berufliche Qualifikation, Train-the-Trainer, Akademiemodelle, praktische Ausbildung und Praxispartnerschaften.",
        link: "svcEducation",
      },
      {
        id: "workforce-solutions",
        title: "Personallösungen",
        body: "Personalplanung, internationale Fachkräfte, Anerkennung, Sprache, Onboarding und nachhaltige Integration in Kliniken und Gesundheitseinrichtungen.",
        link: "workforce",
      },
    ],
  },

  projectsPage: {
    meta: {
      title: "Projekte",
      description:
        "MASOK Akademija in Serbien, Gesundheitsakademie Kasachstan, Klinik- und Prozessprojekte in Deutschland sowie internationale Austauschprogramme.",
    },
    eyebrow: "Projekte",
    title: "Projekte, die Strukturen verbinden",
    lead: "SBP Management entwickelt Projekte dort, wo Gesundheitsversorgung, Qualifikation, Technologie und Organisation zusammenkommen. Unsere Arbeit reicht von lokalen Klinikprozessen bis zu internationalen Kompetenz- und Bildungsmodellen.",
    items: [
      {
        region: "Serbien",
        code: "RS",
        name: "MASOK Akademija",
        title: "Berufliche Bildung, Medizintechnik und Sterilgutversorgung",
        body: "Aufbau eines praxisorientierten Kompetenzmodells in Leskovac mit Verbindung zu Qualifikationsentwicklung, praktischer Ausbildung, Medizintechnik und Gesundheitswirtschaft.",
        focus: ["Chirurgische Instrumente", "Medizinische Fachangestellte (MFA)", "Sterilgutversorgung"],
        status: "Umsetzung / Aufbau",
        tone: "active",
        link: "masok",
      },
      {
        region: "Kasachstan & Zentralasien",
        code: "KZ",
        name: "Gesundheitsakademie Kasachstan",
        title: "Gesundheitsmodernisierung und Kompetenzentwicklung",
        body: "Deutsch-kasachische Kooperationsinitiative für Fachkräfteentwicklung, Krankenhausmanagement, Sterilgutversorgung, Medizintechnik, Digitalisierung und Qualität.",
        focus: ["Gesundheitsakademie", "Train-the-Trainer", "Qualitätsmanagement"],
        status: "Initiierungsphase",
        tone: "planned",
        link: "kazakhstan",
      },
      {
        region: "Deutschland",
        code: "DE",
        name: "Klinik-, Prozess- und Personalprojekte",
        title: "Organisation, Prozesse und Personal",
        body: "Zusammenarbeit mit Kliniken, Klinikgruppen, Verbänden und Gesundheitsorganisationen mit Fokus auf Organisation, Prozesse, Personal und nachhaltige Versorgungsstrukturen.",
        focus: ["Prozessoptimierung", "Organisationsentwicklung", "Personalplanung"],
        status: "Laufend",
        tone: "ongoing",
        link: "germany",
      },
      {
        region: "International",
        code: "INT",
        name: "Internationale Austauschprogramme",
        title: "Praxis, Ausbildung und Wissenstransfer",
        body: "Austausch- und Hospitationsprogramme als praktische Brücke zwischen Bildungseinrichtungen und Partnern in Deutschland und weiteren Ländern.",
        focus: ["Hospitationen", "Praxisprogramme", "Wissenstransfer"],
        status: "Laufend",
        tone: "ongoing",
        link: "exchange",
      },
    ],
  },

  /** Labels shared by the four project pages. */
  project: {
    facts: "Projektfakten",
    region: "Region",
    location: "Standort",
    focus: "Schwerpunkt",
    status: "Status",
    related: "Weitere Projekte",
    back: "Alle Projekte",
  },

  masok: {
    meta: {
      title: "MASOK Akademija | Serbien",
      description:
        "MASOK Akademija in Leskovac: Berufliche Bildung trifft Gesundheitswesen und Medizintechnik. Qualifizierung für chirurgische Instrumente, Medizinische Fachangestellte und Sterilgutversorgung.",
    },
    code: "RS",
    region: "Serbien",
    location: "Leskovac",
    status: "Umsetzung / Aufbau",
    tone: "active",
    focus: "Chirurgische Instrumente, Medizinische Fachangestellte (MFA), Sterilgutversorgung",
    eyebrow: "Projekt · Serbien",
    title: "MASOK Akademija",
    subtitle: "Berufliche Bildung trifft Gesundheitswesen und Medizintechnik",
    lead: "Die Internationale Akademie für berufliche Fachkräftebildung – MASOK in Leskovac ist ein Bildungs- und Kompetenzzentrum für praxisorientierte Qualifizierungsprogramme nach europäischen und internationalen Qualitätsanforderungen.",
    body: "Die Akademie bildet das institutionelle Zentrum eines Modells, das Qualifikationsentwicklung, Ausbildung, praktische Kompetenz, internationale Zusammenarbeit und wirtschaftliche Entwicklung miteinander verbindet.",
    standard: {
      title: "Vom Qualifikationsstandard zur praktischen Kompetenz",
      body: [
        "Ausgangspunkt des Projekts war die Entwicklung eines neuen Qualifikationsstandards für die Herstellung und Reparatur chirurgischer Instrumente.",
        "Das Projekt reagiert auf einen konkreten Bedarf: Krankenhäuser und Unternehmen benötigen qualifizierte Fachkräfte für Wartung, Reparatur und Lebenszyklusmanagement medizinischer Instrumente. Gleichzeitig schafft die professionelle Reparatur von Instrumenten einen nachhaltigen Ansatz – Instrumente können länger eingesetzt, Ressourcen geschont und medizinischer Abfall reduziert werden.",
      ],
    },
    fields: {
      title: "Bildungs- und Kompetenzfelder",
      items: [
        {
          title: "Mechaniker/in für Herstellung und Reparatur chirurgischer Instrumente",
          subtitle: "Technische Kompetenz für den Gesundheitssektor",
          body: "Theoretische und praktische Qualifizierung im Bereich chirurgischer Instrumente mit Orientierung an deutschen Qualitäts- und technischen Standards. Der entwickelte Qualifikationsstandard bildet die Grundlage für die strukturierte Ausbildung und praktische Kompetenzentwicklung.",
          status: "",
        },
        {
          title: "Medizinische Fachangestellte (MFA)",
          subtitle: "Praxisorientiertes Modell nach deutschem Vorbild",
          body: "Entwicklung eines Ausbildungsmodells für medizinische Assistenz, das administrative, organisatorische und ausgewählte medizinische Aufgaben miteinander verbindet und klinische sowie ambulante Strukturen entlasten kann.",
          status: "Programm in Entwicklung",
        },
        {
          title: "Sterilisationstechniker/in",
          subtitle: "AEMP/CSSD, Prozessqualität und Dokumentation",
          body: "Qualifizierung für die Aufbereitung von Medizinprodukten und Sterilgutversorgung mit Fokus auf Prozessabläufe, Dokumentation, Qualitätssicherung und sichere Arbeitsstandards.",
          status: "Programm in Entwicklung",
        },
      ],
    },
    practice: {
      title: "Praxis, Training und Wissenstransfer",
      body: "Praxisorientierung ist ein zentraler Bestandteil des Modells. Die Zusammenarbeit mit der Technischen Schule in Vlasotince und dem dortigen Training Center schafft die Grundlage für praktische Ausbildung. Lehrkräfte und Fachpartner werden durch internationale Austausch- und Qualifizierungsformate in den Wissenstransfer eingebunden.",
    },
    international: {
      title: "Von Serbien in internationale Märkte",
      body: "Das in Serbien entwickelte Modell verbindet Bildung, Qualität, Projektsteuerung und internationale Kooperation. Diese Struktur dient als Referenz für die Weiterentwicklung von Kompetenzmodellen in anderen Ländern – insbesondere für die Deutsch-Kasachische Gesundheitsinitiative und die geplante Gesundheitsakademie Kasachstan.",
    },
    external: {
      title: "Programme, Anmeldung und Aufnahme",
      body: "Informationen zu Unterricht, Anmeldung, Programmdauer und Aufnahme veröffentlicht die MASOK Akademija auf ihrer eigenen Website.",
      label: "Zu masok.eu",
      href: "https://masok.eu",
    },
    cta: "Kooperation anfragen",
  },

  kazakhstan: {
    meta: {
      title: "Gesundheitsakademie Kasachstan | Kasachstan & Zentralasien",
      description:
        "Deutsch-Kasachische Gesundheitsinitiative: ein geplantes Kompetenzzentrum für moderne Gesundheitsversorgung in Kasachstan mit Perspektive für Zentralasien.",
    },
    code: "KZ",
    region: "Kasachstan & Zentralasien",
    location: "Kasachstan",
    status: "Initiierungsphase",
    tone: "planned",
    focus: "Fachkräftequalifizierung, Krankenhausmanagement, Sterilgutversorgung, Medizintechnik, Digitalisierung, Qualität",
    eyebrow: "Projekt · Kasachstan & Zentralasien",
    title: "Deutsch-Kasachische Gesundheitsinitiative",
    subtitle: "Ein Kompetenzzentrum für die Zukunft des Gesundheitswesens",
    lead: "SBP Management entwickelt eine langfristige deutsch-kasachische Kooperationsinitiative zur Modernisierung des Gesundheitswesens, zur Entwicklung medizinischer Fachkompetenzen und zur Weiterentwicklung des Gesundheitsmanagements.",
    body: "Ziel ist der Aufbau nachhaltiger Strukturen, die deutsche und europäische Erfahrungen auf die Rahmenbedingungen Kasachstans übertragen und langfristig lokal weiterentwickelt werden können.",
    approach: {
      title: "Integrierter Ansatz",
      body: "Die Initiative ist nicht als isoliertes Einzelprojekt angelegt. Sie verbindet Fachkräfteentwicklung, berufliche Bildung, Medizintechnik, Sterilgutversorgung, Digitalisierung, Qualitätsmanagement und Organisationsentwicklung in einer modularen Gesamtstruktur.",
    },
    academy: {
      title: "Gesundheitsakademie Kasachstan",
      body: [
        "Als institutionelles Herzstück ist der Aufbau einer Gesundheitsakademie Kasachstan vorgesehen. Die Akademie soll Qualifizierung, Train-the-Trainer-Programme, Qualitätssicherung, Wissenstransfer und die Koordination internationaler Partnerschaften unter einem Dach verbinden.",
        "Langfristig soll daraus ein Kompetenzzentrum entstehen, das nicht nur für Kasachstan, sondern perspektivisch auch für weitere Länder Zentralasiens relevant sein kann.",
      ],
    },
    modules: {
      title: "Projektmodule",
      items: [
        { title: "Medizinische Fachangestellte (MFA)", body: "Entwicklung einer praxisnahen MFA-Qualifizierung nach deutschem Vorbild." },
        {
          title: "OP-Instrumente & Medizintechnik",
          body: "Qualifizierung für technische Prozesse rund um chirurgische Instrumente, Wartung und Medizintechnik.",
        },
        { title: "Sterilgutversorgung – AEMP/CSSD", body: "Aufbau von Fachkompetenz und Prozessstandards für professionelle Sterilgutversorgung." },
        { title: "Digitalisierung & Qualitätsmanagement", body: "Digitale Dokumentation, Rückverfolgbarkeit, Prozessqualität und Qualitätssicherung." },
        { title: "Pflege- & Krankenhausmanagement", body: "Organisationsentwicklung, Ressourcensteuerung und moderne Managementstrukturen." },
        { title: "Gesundheitsakademie Kasachstan", body: "Aufbau einer nachhaltigen Ausbildungs- und Kompetenzstruktur." },
        { title: "Klinikpartnerschaften", body: "Fachaustausch, Hospitationen und Know-how-Transfer mit deutschen Klinikpartnern." },
        { title: "Internationales Netzwerk", body: "Zusammenarbeit mit Institutionen, Kammern, Bildungs- und Industriepartnern." },
      ],
    },
    stages: {
      title: "Perspektive Zentralasien",
      body: "Die Entwicklung ist mehrstufig angelegt: von der Partneridentifikation und Pilotplanung über den Aufbau der Akademie und erste Qualifizierungsprogramme bis zur Skalierung und Entwicklung eines regionalen Kompetenzzentrums mit Ausstrahlung auf Zentralasien.",
      items: [
        "Partneridentifikation und Pilotplanung",
        "Aufbau der Akademie und erste Qualifizierungsprogramme",
        "Skalierung und regionales Kompetenzzentrum für Zentralasien",
      ],
    },
    reference: {
      title: "Referenzmodell Serbien",
      body: "Eine besondere Stärke des Projekts liegt darin, dass SBP Management nicht bei null beginnt. Erfahrungen aus dem in Serbien entwickelten Modell – Curricula, praktische Ausbildung, Qualitätssicherung, Train-the-Trainer und internationale Partnerschaften – bilden eine Referenz für die Anpassung an neue Märkte.",
    },
    cta: "Kooperation anfragen",
  },

  germanyPage: {
    meta: {
      title: "Klinik- und Prozessprojekte | Deutschland",
      description:
        "SBP Management unterstützt Kliniken in Deutschland dabei, Strukturen zu analysieren, Schnittstellen zu verbessern und nachhaltige Lösungen für Organisation, Personal und operative Abläufe zu entwickeln.",
    },
    code: "DE",
    region: "Deutschland",
    location: "Berlin · seit 2011",
    status: "Laufend",
    tone: "ongoing",
    focus: "Prozessoptimierung, Organisationsentwicklung, Personalplanung",
    eyebrow: "Projekt · Deutschland",
    title: "Klinik- und Prozessprojekte",
    subtitle: "Klinikprozesse, Organisation und Fachkräfte gemeinsam denken",
    lead: "Seit vielen Jahren arbeitet SBP Management mit Kliniken, Klinikgruppen, Gesundheitsverbänden und weiteren Gesundheitsorganisationen in Deutschland zusammen.",
    body: "Aus der langjährigen Erfahrung in der internationalen Fachkräftegewinnung hat sich ein breiterer Beratungs- und Projektansatz entwickelt: Wir betrachten Personal nicht isoliert, sondern als Bestandteil klinischer Prozesse, Organisationsstrukturen und Versorgungsqualität. SBP Management unterstützt Kliniken dabei, Strukturen zu analysieren, Schnittstellen zu verbessern und nachhaltige Lösungen für Organisation, Personal und operative Abläufe zu entwickeln.",
    imageAlt: "Zwei Personen geben sich bei einem Termin über einen Schreibtisch hinweg die Hand",
    modules: {
      title: "Leistungsbausteine",
      items: [
        "Analyse klinischer und administrativer Abläufe",
        "Optimierung von Schnittstellen, Rollen und Verantwortlichkeiten",
        "Organisations- und Ressourcenentwicklung",
        "Onboarding- und Integrationsprozesse",
        "Personalbedarfs- und Kapazitätsplanung",
        "Qualitäts- und Dokumentationsprozesse",
        "Prozesse in Sterilgutversorgung und AEMP/CSSD",
        "Internationale Wissens-, Bildungs- und Projektpartnerschaften",
      ],
    },
    cooperation: {
      title: "Zusammenarbeit im Gesundheitswesen",
      body: "SBP Management arbeitet mit Kliniken, Klinikgruppen, Gesundheitsverbänden, Fachorganisationen und weiteren Partnern im Gesundheitswesen zusammen. Dabei verbinden wir operative Erfahrung aus dem deutschen Gesundheitsmarkt mit internationalem Projektmanagement und Kompetenzaufbau.",
    },
    workforce: {
      title: "Personallösungen",
      body: "Internationale Fachkräftegewinnung bleibt ein wichtiger Bestandteil – eingebettet in die Frage, wie Kliniken Abläufe, Teams und Ressourcen langfristig stabil organisieren können.",
      label: "Personallösungen",
    },
    cta: "Kontakt aufnehmen",
  },

  exchange: {
    meta: {
      title: "Internationale Austauschprogramme",
      description:
        "Internationale Austausch-, Hospitations- und Praxisprogramme für Schülerinnen und Schüler, Auszubildende, Fachkräfte und Bildungseinrichtungen.",
    },
    code: "INT",
    region: "International",
    location: "Deutschland ⇄ Partnerländer",
    status: "Laufend",
    tone: "ongoing",
    focus: "Austausch-, Hospitations- und Praxisprogramme",
    eyebrow: "Projekt · International",
    title: "Internationale Austauschprogramme",
    subtitle: "Wissen teilen. Perspektiven erweitern. Strukturen verbinden.",
    lead: "Internationale Qualifizierung funktioniert nicht ausschließlich im Unterricht. Direkter fachlicher Austausch ermöglicht jungen Menschen und Fachkräften, Arbeitsprozesse, Qualitätsstandards und berufliche Kulturen unmittelbar kennenzulernen.",
    body: "SBP Management konzipiert und organisiert internationale Austausch-, Hospitations- und Praxisprogramme gemeinsam mit Bildungseinrichtungen und Praxispartnern.",
    programs: {
      title: "Programme",
      items: [
        {
          title: "Pharma-Austauschprojekt",
          status: "Abgeschlossen",
          tone: "ongoing",
          body: [
            "Im Rahmen eines bereits durchgeführten Austauschprojekts im pharmazeutischen Bereich konnten Schülerinnen und Schüler praktische Einblicke in ein internationales berufliches Umfeld gewinnen.",
            "Im Mittelpunkt standen fachlicher Austausch, praktische Erfahrungen und das Kennenlernen unterschiedlicher Ausbildungs- und Arbeitsstrukturen.",
          ],
        },
        {
          title: "Schwanen Apotheke Frankfurt – September 2026",
          status: "In Vorbereitung",
          tone: "planned",
          body: [
            "Für September 2026 ist ein weiteres Austauschprojekt mit der Schwanen Apotheke in Frankfurt geplant.",
            "Das Programm soll jungen Teilnehmerinnen und Teilnehmern Einblicke in den Apothekenalltag und pharmazeutische Arbeitsprozesse in Deutschland ermöglichen und den fachlichen sowie interkulturellen Austausch fördern.",
          ],
        },
      ],
    },
    format: {
      title: "Austausch als eigenes Projektformat",
      body: "Austauschprogramme sind für SBP Management mehr als Studienreisen. Sie sind ein eigenständiges Projektformat für Wissenstransfer, Kompetenzentwicklung und den Aufbau nachhaltiger Partnerschaften zwischen Bildung und Praxis.",
    },
    cta: "Kontakt aufnehmen",
  },

  workforcePage: {
    meta: {
      title: "Personallösungen",
      description:
        "Internationale Fachkräfte und Personallösungen: nachhaltige Personalentwicklung für Kliniken – vom ersten Kontakt über Anerkennung und Visum bis zur Integration in den klinischen Alltag.",
    },
    eyebrow: "Leistungsfeld · Deutschland",
    title: "Internationale Fachkräfte & Personallösungen",
    subtitle: "Nachhaltige Personalentwicklung für Kliniken",
    lead: "Internationale Fachkräftegewinnung ist seit vielen Jahren ein Kompetenzfeld von SBP Management. Wir begleiten Kliniken und qualifizierte Fachkräfte vom ersten Kontakt über Anerkennungs- und Visaverfahren bis zur Integration in den klinischen Alltag.",
    body: "Dabei verstehen wir Recruitment nicht als isolierte Vermittlungsleistung. Entscheidend ist, dass Qualifikation, Einsatzbereich, Organisation, Einarbeitung und langfristige Integration zusammenpassen.",
    hospitals: {
      title: "Für Kliniken",
      items: [
        "Identifikation geeigneter internationaler Fachkräfte",
        "Unterstützung bei Anerkennungs- und Visaverfahren",
        "Organisation bzw. Koordination von Sprachqualifikationen",
        "Begleitung von Anpassungsmaßnahmen und Kenntnisprüfungen",
        "Onboarding und Integration",
        "Unterstützung bei organisatorischen Fragen",
        "Strategische Personal- und Kapazitätsplanung",
      ],
    },
    candidates: {
      title: "Sie sind medizinische Fachkraft?",
      body: "Aktuelle Stellenangebote und persönliche Begleitung finden Sie auf unserer Jobs-Seite.",
      label: "Zu den Jobs",
    },
    related: {
      title: "Verbunden mit Klinik- und Prozessentwicklung",
      body: "Erfolgreiche Fachkräfteintegration braucht funktionierende Prozesse, klare Verantwortlichkeiten, gutes Onboarding und belastbare Organisationsstrukturen.",
      label: "Klinik- & Prozessprojekte",
    },
    cta: "Kontakt aufnehmen",
  },

  hospitals: {
    meta: {
      title: "Für Kliniken & Institutionen",
      description:
        "Projektentwicklung, Prozessoptimierung, Kooperationen und Personallösungen für Kliniken, Klinikgruppen und Einrichtungen des Gesundheitswesens.",
    },
    eyebrow: "Für Kliniken & Institutionen",
    title: "Sprechen Sie mit uns über Ihr Projekt.",
    lead: "Sie planen ein Projekt im Gesundheitswesen, möchten klinische Prozesse weiterentwickeln, Kompetenzen aufbauen oder internationale Partner einbinden? Wir freuen uns auf den Austausch.",
    paths: {
      title: "So arbeiten wir mit Kliniken und Institutionen",
      items: [
        {
          title: "Projektentwicklung",
          body: "Konzeption, Koordination und Umsetzung komplexer Gesundheitsprojekte mit nationalen und internationalen Partnern.",
          link: "projects",
        },
        {
          title: "Prozessoptimierung",
          body: "Analyse und Weiterentwicklung klinischer Abläufe, Organisationsstrukturen, Schnittstellen, Personalprozesse und Qualitätsstandards.",
          link: "germany",
        },
        {
          title: "Kooperationen",
          body: "Wir verbinden operative Erfahrung aus dem deutschen Gesundheitsmarkt mit internationalem Projektmanagement und Kompetenzaufbau.",
          link: "about",
        },
        {
          title: "Personallösungen",
          body: "Strategische Fachkräfteplanung, internationale Personalgewinnung, Anerkennung, Integration und nachhaltiges Onboarding.",
          link: "workforce",
        },
      ],
    },
    modules: {
      title: "Leistungsbausteine für Kliniken",
      items: [
        "Analyse klinischer und administrativer Abläufe",
        "Optimierung von Schnittstellen, Rollen und Verantwortlichkeiten",
        "Organisations- und Ressourcenentwicklung",
        "Onboarding- und Integrationsprozesse",
        "Personalbedarfs- und Kapazitätsplanung",
        "Qualitäts- und Dokumentationsprozesse",
        "Prozesse in Sterilgutversorgung und AEMP/CSSD",
        "Internationale Wissens-, Bildungs- und Projektpartnerschaften",
      ],
    },
    cta: "Projektanfrage starten",
  },

  contactPage: {
    meta: {
      title: "Kontakt",
      description:
        "Sprechen Sie mit SBP Management über Ihr Gesundheitsprojekt, eine Kooperation, Personallösungen oder Ihre Karriere in Deutschland.",
    },
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns über Ihr Projekt.",
    lead: "Sie planen ein Projekt im Gesundheitswesen, möchten klinische Prozesse weiterentwickeln, Kompetenzen aufbauen oder internationale Partner einbinden? Wir freuen uns auf den Austausch.",
    details: { heading: "Direkter Kontakt", address: "Adresse", phone: "Telefon", email: "E-Mail" },
    form: {
      heading: "Schreiben Sie uns",
      reason: "Anlass Ihrer Anfrage",
      reasons: [
        "Projektanfrage / Projektmanagement im Gesundheitswesen",
        "Klinik- und Prozessoptimierung",
        "Sterilgutversorgung / Medizintechnik",
        "Bildung / Akademie / Qualifizierung",
        "Internationale Kooperation",
        "Personallösungen für Kliniken",
        "Bewerbung / Kandidatenberatung",
        "Sonstiges",
      ],
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefon (optional)",
      organization: "Organisation (optional)",
      message: "Ihre Nachricht",
      required: "Felder ohne „optional“ sind Pflichtfelder.",
      consent: "Mit dem Absenden dieses Formulars erklären Sie sich einverstanden, dass wir Ihre Angaben zur Beantwortung Ihrer Anfrage verwenden.",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Vielen Dank. Ihre Nachricht wurde gesendet – wir melden uns in Kürze bei Ihnen.",
      error: "Bitte geben Sie Ihren Vornamen, Ihren Nachnamen und eine gültige E-Mail-Adresse an.",
      failed: "Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt:",
    },
  },

  /** Closing call to action used at the end of the inner pages. */
  closing: {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns über Ihr Projekt.",
    body: "Ob Klinikoptimierung, Qualifizierung, Sterilgutversorgung, Medizintechnik, internationale Kooperation oder Fachkräfteentwicklung – wir entwickeln gemeinsam mit Ihnen eine Lösung, die zu Ihrer Organisation und Ihrem Markt passt.",
    or: "oder direkt erreichen",
  },

  /** Client photos: alt texts and the headings of the photo sections. */
  photos: {
    alt: {
      aboutMinistryGroup: "SBP Management mit Projektpartnern in einem Ministerium in Serbien",
      aboutMinistryMeeting: "Arbeitstreffen mit Projektpartnern in einem Ministerium in Serbien",
      hospitalsBuergerhospital: "Teamfoto vor dem Bürgerhospital in Frankfurt",
      projectsSigning: "Unterzeichnung einer Vereinbarung mit Projektpartnern in Serbien",
      masokLeskovacCity: "Treffen bei der Stadt Leskovac",
      masokMeeting: "Projekttreffen mit Partnern in Serbien",
      masokWorkshop: "Besuch einer Ausbildungswerkstatt mit Werkzeugmaschinen",
      masokWorkshop2: "Werkzeugmaschinen in einer Ausbildungswerkstatt",
      masokMechatronicsLab: "Ausbildungslabor mit Automatisierungs- und Robotiktechnik",
      masokComputerLab: "Besuch eines Computer-Schulungsraums",
      masokTrainingHall: "Besuch einer im Bau befindlichen Ausbildungshalle",
      masokSchoolVisit: "Projektpartner auf einem Schulgelände in Serbien",
      servicesSterileSupply: "Besuch einer Aufbereitungseinheit für Medizinprodukte (AEMP)",
      masokMfaBuergerhospitalMeeting: "Besprechung zum MFA-Programm mit dem Bürgerhospital im Konferenzraum",
      masokPartnerMeeting: "Arbeitstreffen mit MASOK-Partnern am Konferenztisch",
      instrumentsTrainingSet: "Chirurgische Instrumente für die Ausbildung bereitgelegt",
      sbpMinistryMeeting: "SBP Management bei einer Besprechung in einem Ministerium in Serbien",
      sbpLeskovacCityMeeting: "Treffen mit Vertretern der Stadt Leskovac",
      educationSterileSupplyVisit: "Ausbildungsbesuch in einer Aufbereitungseinheit für Medizinprodukte",
      masokAgreementDocuments: "Partnerinnen präsentieren eine unterzeichnete Kooperationsvereinbarung",
      sbpPartnerDinner: "Abendessen mit Projektpartnern",
      masokPartnerGroup: "Gruppenfoto mit MASOK-Partnern in einem Büro",
      masokSigning: "Unterzeichnung einer Kooperationsvereinbarung",
      masokHandshake: "Handschlag nach der Unterzeichnung einer Kooperationsvereinbarung",
      masokMeetingOffice: "Besprechung mit Partnern in einem Büro in Leskovac",
      masokMeetingTeam: "Gespräch mit Partnern am Konferenztisch",
      sbpMinistryEconomy: "Besuch im Wirtschaftsministerium in Serbien",
      masokCampusVisit: "Besucher vor der Ausbildungshalle der MASOK",
      sbpLeskovacCityTalks: "Gespräche mit der Stadt Leskovac",
      masokCampusGroup: "Gruppenfoto vor dem Gebäude der MASOK Akademija",
      projectWorkshopHall: "Ausbildungswerkstatt mit Maschinen",
      masokPartnersSelfie: "Projektpartner bei einem Besuch",
      sbpMinistryVisit: "SBP Management im Wirtschaftsministerium in Serbien",
      sbpMinistryTeam: "Team von SBP Management in einem Ministerium in Serbien",
      sbpMinistryDelegation: "Delegation im Wirtschaftsministerium in Serbien",
      masokSterileSupplyVisit: "Besuch einer Aufbereitungseinheit für Medizinprodukte mit MASOK-Partnern",
      projectSterileSupplyVisit: "Projektbesuch in einer Aufbereitungseinheit für Medizinprodukte",
      sbpAsanusVisit: "Begrüßungstafel für den Besuch von SBP Management bei einem Partnerunternehmen",
      germanyHandshake: "Zwei Personen geben sich bei einem Termin über einen Schreibtisch hinweg die Hand",
      childrenCareOutdoors: "Kleines Kind läuft im Park auf eine Frau zu",
      ecgGraphic: "EKG-Kurve auf einem Monitorraster",
      nursePatientMonitor: "Pflegekraft prüft einen Patientenmonitor im Krankenzimmer",
      microscopeLab: "Hände in Handschuhen stellen ein Labormikroskop ein",
      childExamination: "Ärztin hört den Rücken eines Mädchens mit dem Stethoskop ab",
      childTeddyStethoscope: "Kind hält ein Stethoskop an einen Teddybären",
      elderlyCareWalker: "Pflegekraft begleitet eine ältere Frau mit Rollator",
      elderlyCareHands: "Hände einer älteren Person beim Malen am Tisch",
      elderlyCareBedside: "Pflegekraft hält die Hand eines älteren Patienten im Bett",
      labTechnicianInstruments: "Technikerin mit Haube arbeitet im Labor an Instrumenten",
      nurseTablet: "Pflegekraft liest an einem Klinikempfang auf einem Tablet",
      doctorStethoscope: "Arzt in blauer Arbeitskleidung mit Stethoskop",
      doctorNotes: "Ärztin macht sich Notizen am Schreibtisch",
      anesthesiaWorkstation: "Anästhesist an einem Beatmungs- und Überwachungsplatz",
      ecgElectrodes: "Anlegen von EKG-Elektroden bei einem Patienten",
      surgicalInstrumentsGloves: "Hände in Handschuhen mit chirurgischen Instrumenten",
      stethoscopeExamination: "Hand im Handschuh setzt ein Stethoskop am Arm an",
      nurseInstrumentPreparation: "Pflegekraft in steriler Kleidung bereitet OP-Instrumente vor",
      stethoscopeHands: "Fachkraft hält ein Stethoskop hinter dem Rücken",
      clinicalDocumentation: "Fachkraft dokumentiert auf einem Klemmbrett beim Patienten",
      nursePatientCare: "Pflegekraft versorgt eine Patientin im Klinikbett",
      infusionCare: "Pflegekraft stellt eine Infusion im Patientenzimmer ein",
      clinicItTeam: "Zwei Klinikmitarbeiterinnen arbeiten gemeinsam am Computer",
      precisionMachining: "Präzisionsbearbeitung eines Metallteils",
      laboratoryTeam: "Labormitarbeitende an modernen Geräten",
      surgicalInstruments: "Chirurgische Klemmen und Scheren auf einem sterilen Tuch",
      surgeryInstrumentsHands: "OP-Team reicht während einer Operation Instrumente an",
      operatingTeam: "OP-Team bei der Arbeit im Operationssaal",
      icuMonitor: "Beatmungsmonitor neben einem Patienten auf der Intensivstation",
      keyboardDocumentation: "Hände tippen auf einer Tastatur",
      xRay: "Röntgenbild zweier Hände",
      medicalTeamCorridor: "Medizinisches Team auf einem Klinikflur",
      newbornCare: "Hände in Handschuhen halten die Füße eines Neugeborenen",
      maternityCare: "Hände auf dem Bauch einer schwangeren Frau",
      physiotherapyKnee: "Physiotherapeut behandelt das Knie eines Patienten",
      physiotherapyBand: "Fußübung mit einem Therapieband in der Physiotherapie",
    },
    masok: { eyebrow: "Projektbesuche", title: "Eindrücke aus Serbien" },
    projects: { eyebrow: "Vor Ort", title: "Eindrücke aus unseren Projekten" },
  },

  /** The three region job pages the Jobs cards lead to. */
  /** Eine einzelne Stellenanzeige (der Anzeigentext selbst ist auf Deutsch). */
  jobListing: {
    eyebrow: "Stellenangebot",
    published: "Veröffentlicht",
    contact: "Ihr Ansprechpartner",
    back: "Alle Stellenangebote in Deutschland",
    note: "",
    applyTitle: "Jetzt auf diese Stelle bewerben",
    applyBody: "Senden Sie uns Ihre Angaben und eine kurze Nachricht zu Ihrer Person. Wir melden uns persönlich bei Ihnen.",
    jobError: "Bitte geben Sie Vorname, Nachname, eine gültige E-Mail-Adresse und eine kurze Nachricht an.",
  },

  jobRegions: {
    back: "Alle Stellenbörsen",
    germany: {
      meta: {
        title: "Jobs in Deutschland",
        description:
          "Karriere in Deutschland: aktuelle Stellenangebote in deutschen Kliniken und persönliche Begleitung von Bewerbung, Anerkennung und Visum bis zum erfolgreichen Start.",
      },
      openings: {
        eyebrow: "Aktuelle Stellen",
        title: "Stellenangebote in Deutschland",
        note: "",
        ref: "Ref.",
        view: "Anzeige ansehen",
        all: "Alle Anzeigen",
      },
    },
    serbia: {
      meta: { title: "Jobs in Serbien", description: "Stellenangebote im Zusammenhang mit den Projekten von SBP Management in Serbien." },
      eyebrow: "Jobs · Serbien",
      title: "Jobs in Serbien",
      lead: "Stellenangebote im Zusammenhang mit unseren Projekten in Serbien.",
      project: { label: "MASOK Akademija | Serbien", link: "masok" },
    },
    kazakhstan: {
      meta: {
        title: "Jobs in Kasachstan & Zentralasien",
        description: "Stellenangebote im Zusammenhang mit der Deutsch-Kasachischen Gesundheitsinitiative.",
      },
      eyebrow: "Jobs · Kasachstan & Zentralasien",
      title: "Jobs in Kasachstan & Zentralasien",
      lead: "Stellenangebote im Zusammenhang mit der Deutsch-Kasachischen Gesundheitsinitiative.",
      project: { label: "Gesundheitsakademie Kasachstan", link: "kazakhstan" },
    },
    empty: {
      title: "Derzeit keine Stellen veröffentlicht",
      body: "Für diese Region sind aktuell keine Stellenangebote veröffentlicht. Nehmen Sie gern Kontakt mit uns auf, um sich initiativ zu bewerben oder nach kommenden Möglichkeiten zu fragen.",
      contact: "Kontakt aufnehmen",
      project: "Zum Projekt",
    },
  },

  /** Candidate support on the Jobs page (brief section 13). */
  candidateSupport: {
    eyebrow: "Ihre Karriere in Deutschland",
    title: "Persönliche Begleitung von der Bewerbung bis zum erfolgreichen Start",
    body: "Sie sind im medizinischen Bereich tätig und möchten Ihre berufliche Zukunft in Deutschland gestalten? SBP Management begleitet internationale Fachkräfte individuell und transparent durch die notwendigen Schritte.",
    listTitle: "Wir unterstützen Sie bei",
    items: [
      "Deutschsprachkursen und sprachlicher Vorbereitung",
      "Visum und Einreise",
      "Anerkennung ausländischer Berufsabschlüsse",
      "Anerkennung von Zusatzqualifikationen und Weiterbildungen",
      "Familienzusammenführung",
      "Wohnungssuche und ersten administrativen Schritten",
      "Tariflicher Einordnung bzw. Berücksichtigung von Berufserfahrung, soweit anwendbar",
      "Vorbereitung, Onboarding und Integration in deutschen Kliniken",
    ],
    apply: "Jetzt bewerben",
  },
} as const;
