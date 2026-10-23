/**
 * Serbian (Latin) copy for the relaunch, from "SBP Website SR.docx" (sbp-working-files).
 * Must keep exactly the shape of the German master text de.ts (see dictionaries.ts).
 * `link` values are page keys from config.ts, not URLs.
 */
import type { Dictionary } from "./dictionaries";
import { srLegal } from "./sr-legal";
import { srPages } from "./sr-pages";
import { srServices } from "./sr-services";

export const sr: Dictionary = {
  meta: {
    title: "SBP Management | Međunarodni projekti u zdravstvu",
    description:
      "SBP Management razvija i realizuje međunarodne projekte u zdravstvu: upravljanje projektima, optimizacija procesa, snabdevanje sterilnim materijalom, medicinska tehnika, stručno obrazovanje i razvoj kadrova. Nemačka, Srbija, Kazahstan i Centralna Azija.",
  },

  notFound: {
    eyebrow: "Greška 404",
    title: "Stranica nije pronađena",
    body: "Stranica koju tražite ne postoji ili je premeštena. Krenite ponovo sa početne strane ili nas kontaktirajte.",
    home: "Na početnu stranu",
    contact: "Kontaktirajte nas",
  },

  a11y: {
    skip: "Pređi na sadržaj",
    home: "SBP Management, početna strana",
    mainNav: "Glavna navigacija",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    language: "Jezik",
    comingSoon: "uskoro",
  },

  nav: {
    items: [
      { label: "O nama", link: "about" },
      {
        label: "Oblasti usluga",
        link: "services",
        children: [
          { label: "Upravljanje projektima u zdravstvu", link: "svcProject" },
          { label: "Optimizacija klinika i procesa", link: "svcProcess" },
          { label: "Snabdevanje sterilnim materijalom i medicinska tehnika", link: "svcSterile" },
          { label: "Obrazovanje i razvoj kompetencija", link: "svcEducation" },
          { label: "Kadrovska rešenja", link: "workforce" },
        ],
      },
      {
        label: "Projekti",
        link: "projects",
        children: [
          { label: "MASOK Akademija | Srbija", link: "masok" },
          { label: "Centar kompetencija | Kazahstan i Centralna Azija", link: "kazakhstan" },
          { label: "Projekti u Nemačkoj", link: "germany" },
          { label: "Međunarodni programi razmene", link: "exchange" },
        ],
      },
      { label: "Za klinike i institucije", link: "hospitals" },
      { label: "Poslovi", link: "jobs" },
    ],
    contact: "Kontakt",
  },

  home: {
    hero: {
      eyebrow: "Zdravstvo · Obrazovanje · Tehnologija · Međunarodni projekti",
      // Each entry is one line of the headline (lines never wrap); the accent line sits underneath.
      titleLines: ["Međunarodni", "zdravstveni projekti."],
      titleAccent: "Od strategije do realizacije.",
      lead: "SBP Management razvija i realizuje projekte na preseku zdravstva, stručnog obrazovanja, snabdevanja sterilnim materijalom, medicinske tehnike i razvoja kadrova.",
      body: "Od Nemačke, preko Srbije, do Centralne Azije povezujemo klinike, obrazovne ustanove, institucije i kompanije i razvijamo strukture koje dugoročno funkcionišu.",
      primary: "Naši projekti",
      secondary: "Za klinike i institucije",
      candidates: "Za kandidate – karijera u Nemačkoj",
      /** City names on the map, by region id. */
      mapCities: { de: "Berlin", rs: "Leskovac", kz: "Astana" },
      mapLabel: "Regioni projekata SBP Management-a: Nemačka, Srbija i Kazahstan / Centralna Azija",
      regions: [
        { id: "de", country: "Nemačka", place: "Berlin · od 2011.", focus: "Klinički i procesni projekti" },
        { id: "rs", country: "Srbija", place: "Leskovac", focus: "MASOK Akademija" },
        { id: "kz", country: "Kazahstan", place: "& Centralna Azija", focus: "Zdravstvena akademija" },
      ],
    },

    ticker: [
      "Upravljanje projektima u zdravstvu",
      "Nemačka",
      "Snabdevanje sterilnim materijalom",
      "Srbija",
      "Medicinska tehnika",
      "Kazahstan & Centralna Azija",
      "Obrazovanje i obuka",
      "Međunarodna razmena",
      "Kadrovska rešenja",
    ],

    intro: {
      eyebrow: "Čime se SBP bavi",
      title: "Više od pridobijanja kadrova",
      body: "Zdravstveni sistemi funkcionišu održivo onda kada se procesi, kvalifikacije, tehnologija i ljudi posmatraju zajedno. SBP Management prati klinike, institucije i međunarodne partnere od analize i razvoja projekta do praktične implementacije.",
      pillars: ["Zdravstvo", "Obrazovanje", "Tehnologija", "Kadrovi"],
    },

    projects: {
      eyebrow: "Međunarodni projekti",
      title: "Projekti koji povezuju strukture",
      body: "SBP Management razvija projekte tamo gde se susreću zdravstvena zaštita, kvalifikacija, tehnologija i organizacija.",
      all: "Svi projekti",
      cta: "Otkrijte projekat",
      statusLabel: "Status",
      items: [
        {
          region: "Srbija",
          code: "RS",
          name: "MASOK Akademija",
          title: "Razvoj kompetencija za zdravstvo i medicinsku tehniku",
          body: "Sa MASOK Akademijom u Leskovcu, SBP Management razvija model koji povezuje stručno obrazovanje, praktičnu kvalifikaciju, međunarodne standarde kvaliteta i zahteve zdravstva i medicinske tehnike.",
          focus: ["Hirurški instrumenti", "Medicinski asistenti (MFA)", "Snabdevanje sterilnim materijalom"],
          status: "Realizacija / izgradnja",
          tone: "active",
          link: "masok",
        },
        {
          region: "Kazahstan & Centralna Azija",
          code: "KZ",
          name: "Zdravstvena akademija Kazahstan",
          title: "Izgradnja centra kompetencija za savremenu zdravstvenu zaštitu",
          body: "Nemačko-kazahstanska zdravstvena inicijativa sledi integrisani pristup razvoju savremenih struktura u kvalifikaciji kadrova, upravljanju bolnicama, snabdevanju sterilnim materijalom, medicinskoj tehnici, digitalizaciji i upravljanju kvalitetom.",
          focus: ["Zdravstvena akademija", "Obuka trenera", "Upravljanje kvalitetom"],
          status: "Faza iniciranja i izgradnje",
          tone: "planned",
          link: "kazakhstan",
        },
        {
          region: "Nemačka",
          code: "DE",
          name: "Klinički i procesni projekti",
          title: "Organizacija, kadrovi i održive strukture zdravstvene zaštite",
          body: "Sarađujemo sa klinikama, kliničkim grupama, zdravstvenim udruženjima i drugim akterima u zdravstvu. Naš pristup povezuje optimizaciju procesa, organizacioni razvoj i strateško planiranje kadrova.",
          focus: ["Optimizacija procesa", "Organizacioni razvoj", "Planiranje kadrova"],
          status: "U toku",
          tone: "ongoing",
          link: "germany",
        },
        {
          region: "Međunarodno",
          code: "INT",
          name: "Programi razmene",
          title: "Znanje nastaje kroz susrete",
          body: "Međunarodni programi razmene i prakse za učenike, polaznike stručnog obrazovanja, stručnjake i obrazovne ustanove, koji omogućavaju direktan transfer znanja između Nemačke i partnerskih zemalja.",
          focus: ["Stručne posete", "Programi prakse", "Transfer znanja"],
          status: "U toku",
          tone: "ongoing",
          link: "exchange",
        },
      ],
    },

    services: {
      eyebrow: "Oblasti usluga",
      title: "Pet kompetencija. Jedan integrisani pristup.",
      cta: "Sve oblasti usluga",
      items: [
        {
          title: "Upravljanje projektima u zdravstvu",
          body: "Koncepcija, koordinacija i realizacija kompleksnih zdravstvenih projekata sa nacionalnim i međunarodnim partnerima.",
        },
        {
          title: "Optimizacija klinika i procesa",
          body: "Analiza i unapređenje kliničkih procesa, organizacionih struktura, međusobnih veza, kadrovskih procesa i standarda kvaliteta.",
        },
        {
          title: "Snabdevanje sterilnim materijalom i medicinska tehnika",
          body: "Projekti u vezi sa AEMP/CSSD, reprocesiranjem, hirurškim instrumentima, kvalitetom procesa, dokumentacijom i razvojem tehničkih kompetencija.",
        },
        {
          title: "Obrazovanje i razvoj kompetencija",
          body: "Razvoj praktično orijentisanih modela obuke, kurikuluma, train-the-trainer koncepata i međunarodni transfer znanja.",
        },
        {
          title: "Kadrovska rešenja",
          body: "Strateško planiranje kadrova, međunarodno pridobijanje stručnjaka, priznavanje kvalifikacija, integracija i održiv onbording.",
        },
      ],
    },

    germany: {
      eyebrow: "Nemačka",
      title: "Od pridobijanja kadrova do održivog razvoja klinika",
      body: [
        "Naše dugogodišnje iskustvo u nemačkim klinikama pokazuje: kadrovska pitanja ne mogu se rešavati izolovano. Uspešna integracija stručnjaka zahteva funkcionalne procese, jasne odgovornosti, dobar onbording i stabilne organizacione strukture.",
        "Zato SBP Management povezuje kadrovska rešenja sa razvojem procesa i organizacije u zdravstvu.",
      ],
      cta: "Klinički i procesni projekti",
      ctaSecondary: "Kadrovska rešenja",
      imageAlt: "Dve osobe se rukuju preko stola tokom sastanka",
      // Figures carried over from the current site. Confirm before publishing.
      stats: [
        { value: "2011", label: "Osnovana u Berlinu" },
        { value: ">40", label: "Partnerskih klinika" },
        { value: "3", label: "Ključna projektna regiona" },
      ],
    },

    process: {
      eyebrow: "Naš način rada",
      steps: ["Analiziramo", "Razvijamo", "Povezujemo", "Implementiramo"],
      body: "Identifikujemo konkretne potrebe, razvijamo projektne i kompetencijske modele, okupljamo relevantne partnere i pratimo praktičnu realizaciju.",
    },

    network: {
      eyebrow: "Partneri i mreža",
      title: "Mreža u zdravstvu, obrazovanju i industriji",
      body: "Sarađujemo sa klinikama, zdravstvenim udruženjima, obrazovnim ustanovama, komorama, javnim institucijama i industrijskim partnerima. Navodimo samo organizacije koje su odobrile javno navođenje reference.",
      categories: [
        "Klinike i kliničke grupe",
        "Zdravstvena udruženja i stručne organizacije",
        "Obrazovne ustanove i akademije",
        "Komore i privredne organizacije",
        "Institucije u oblasti kvalifikacija i dualnog obrazovanja",
        "Industrijski i tehnološki partneri",
      ],
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Razgovarajte sa nama o svom projektu.",
      body: "Bilo da je reč o optimizaciji klinike, kvalifikaciji, snabdevanju sterilnim materijalom, medicinskoj tehnici, međunarodnoj saradnji ili razvoju kadrova – zajedno sa vama razvijamo rešenje koje odgovara vašoj organizaciji i vašem tržištu.",
      primary: "Pošaljite upit za projekat",
      or: "ili nas kontaktirajte direktno",
    },
  },

  jobs: {
    meta: {
      title: "Poslovi",
      description:
        "Karijera u Nemačkoj i oglasi za posao po regionima: Nemačka, Srbija i Kazahstan & Centralna Azija. SBP Management prati međunarodne zdravstvene stručnjake od prijave do uspešnog početka rada.",
    },

    candidates: {
      eyebrow: "Za kandidate",
      title: "Karijera u Nemačkoj",
      body: "Imate diplomu iz oblasti medicine ili zdravstva koja je priznata u zemljama DACH regiona i tražite profesionalnu priliku u Nemačkoj?",
      steps: ["Jezik", "Priznavanje", "Viza i ulazak", "Onbording"],
      primary: "Aktuelni oglasi za posao",
      secondary: "Savetovanje za kandidate",
    },

    boards: {
      eyebrow: "Oglasi za posao",
      title: "Pronađite oglase po regionu",
      body: "Izaberite region u kojem želite da radite i pogledajte aktuelne oglase za posao.",
      cta: "Pogledajte oglase",
      // Each card opens that region's job page.
      items: [
        {
          code: "DE",
          region: "Nemačka",
          title: "Klinike i zdravstvene ustanove u Nemačkoj",
          body: "Aktuelne pozicije za lekare, medicinske sestre i tehničare i medicinske stručnjake u našim partnerskim klinikama.",
          note: "Oglasi na nemačkom jeziku",
          link: "jobsGermany",
        },
        {
          code: "RS",
          region: "Srbija",
          title: "Zdravstvo i medicinska tehnika u Srbiji",
          body: "Oglasi povezani sa našim projektima u Srbiji.",
          note: "",
          link: "jobsSerbia",
        },
        {
          code: "KZ",
          region: "Kazahstan & Centralna Azija",
          title: "Zdravstvo u Kazahstanu i Centralnoj Aziji",
          body: "Oglasi povezani sa Nemačko-kazahstanskom zdravstvenom inicijativom.",
          note: "",
          link: "jobsKazakhstan",
        },
      ],
    },
  },

  status: {
    active: "U izgradnji",
    planned: "Planirano",
    ongoing: "U toku",
  },

  footer: {
    tagline: "Međunarodni zdravstveni projekti. Od strategije do realizacije.",
    columns: [
      {
        heading: "Projekti",
        links: [
          { label: "MASOK Akademija | Srbija", link: "masok" },
          { label: "Kazahstan & Centralna Azija", link: "kazakhstan" },
          { label: "Projekti u Nemačkoj", link: "germany" },
          { label: "Programi razmene", link: "exchange" },
        ],
      },
      {
        heading: "Kompanija",
        links: [
          { label: "O nama", link: "about" },
          { label: "Oblasti usluga", link: "services" },
          { label: "Kadrovska rešenja", link: "workforce" },
          { label: "Za klinike i institucije", link: "hospitals" },
          { label: "Kontakt", link: "contact" },
        ],
      },
      {
        heading: "Kandidati",
        links: [
          { label: "Karijera u Nemačkoj", link: "candidates" },
          { label: "Oglasi za posao", link: "jobBoards" },
        ],
      },
    ],
    legal: [
      { label: "Impresum", link: "imprint" },
      { label: "Politika privatnosti", link: "privacy" },
    ],
    gapaAlt: "GAPA – udruženje za kvalitet u regrutovanju i posredovanju medicinskih sestara i tehničara iz inostranstva",
    copyright: "SBP Management",
  },

  ...srPages,
  ...srServices,
  ...srLegal,
};
