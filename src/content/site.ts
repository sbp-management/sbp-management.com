/**
 * All page copy lives here so it can be replaced in one place.
 * The wording is the original text from sbp-management.com.
 * Long-form legal text and job articles live in legal-data.ts and jobs-data.ts.
 */

const CDN = "/images";

export const assets = {
  logo: `${CDN}/62a72e8643d23241aa291403-SBP-Logo-360px.png`,
  gapa: `${CDN}/671ccc98250a51bc3547e24c-image013.png`,
  heroPhoto: `${CDN}/62a72db8ebc0aed792548bad-Healthcare-Worker.png`,
  companyHeader: `${CDN}/62a72db8ebc0aeca18548bab-Company-Header.png`,
  surgeon: `${CDN}/62a72db8ebc0ae640e548b9e-Content-Image-02.png`,
  handshake: `${CDN}/63c7fe843c05b1e4ec511b96-pexels-photo-5668842.jpeg`,
  categoryIcon: `${CDN}/62a72db8ebc0ae17aa548ba2-Category.svg`,
  dateIcon: `${CDN}/62a72db8ebc0ae0f8b548ba1-Date.svg`,
  team: {
    sabina: `${CDN}/66697e94ae34ec63a0a1eb46-Sabina-Banda-Bild-transformed.jpeg`,
    nikola: `${CDN}/666986423ce19310f48a3347-Nikola-Banda-Bild.png`,
    nemanja: `${CDN}/666994db42d2ff0f01fff89b-Nemanja-Banda-Bild-Kopie-2.jpeg`,
  },
} as const;

export const company = {
  name: "SBP Management",
  phone: "+49 (0)30 437 46 351",
  phoneHref: "tel:+493043746351",
  email: "info@sbp-management.com",
  emailHref: "mailto:info@sbp-management.com",
  feedbackEmail: "feedback@sbp-management.com",
  address: ["Brunowstr. 14", "13507 Berlin DE"],
} as const;

export const nav = [
  { label: "Startseite", href: "/" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Services", href: "/services" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerLinks = {
  company: [
    { label: "Startseite", href: "/" },
    { label: "Über Uns", href: "/ueber-uns" },
    { label: "Services", href: "/services" },
    { label: "Stellenausschreibungen", href: "/stellenausschreibungen" },
  ],
  legal: [
    { label: "Kontakt", href: "/kontakt" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Genderhinweis", href: "/datenschutz" },
  ],
} as const;

export const footer = {
  homeNote: "Bei SBP in besten Händen.",
  careerNote: "Ändern Sie Ihre berufliche Karriere heute noch",
  careerNoteJobs: "Ändern Sie Ihre berufliche Karriere noch heute.",
  companyHeading: "SBP Management",
  legalHeading: "Unternehmen",
} as const;

export const home = {
  eyebrow: "Strategische Beratung",
  title: "Strategische Beratung und internationale Projekte im medizinischen Sektor.",
  lead: "SBP Management begleitet Kliniken, Unternehmen und Institutionen in projektbasierter Zusammenarbeit. Seit 2011 verbinden wir deutsche Qualitätsstandards mit internationalen Vorhaben und dem Austausch medizinischen Wissens.",
  cta: "Kontakt",
  stat: { value: ">40", label: "Partnerkliniken" },
  fields: {
    eyebrow: "TÄTIGKEITSFELDER",
    title: "Womit wir uns befassen",
    cards: [
      {
        title: "Strategische Beratung für Kliniken",
        body: "Wir begleiten Klinikkonzerne und kommunale Träger bei personal- und ausbildungsstrategischen Vorhaben und beim Aufbau langfristiger Qualifizierungsstrukturen.",
      },
      {
        title: "Internationalisierung von Unternehmen",
        body: "Etablierte deutsche Unternehmen und einzelne Geschäftsbereiche begleiten wir bei der Erschließung internationaler Märkte, etwa beim Aufbau von Produktionsstandorten für die Aufbereitung chirurgischer Instrumente in Drittländern.",
      },
      {
        title: "Partnerschaften und Wissenstransfer",
        body: "Wir verbinden deutsche Krankenhäuser mit medizinischen Vereinigungen im Ausland. Grundlage sind partnerschaftliche Abkommen, die dem fachlichen Austausch und der gegenseitigen Unterstützung dienen.",
      },
      {
        title: "Bildung und Standards",
        body: "In eigenen Initiativen fördern wir Ausbildung und Qualitätsstandards nach deutschem Vorbild, etwa eine private Akademie für medizinisch-technische Berufe und unser Engagement für Hygienestandards, das in Serbien bereits erste Fachsymposien hervorgebracht hat.",
      },
    ],
  },
  cta_block: {
    title: "Für Anfragen unserer Partner und Mandanten",
    button: "E-Mail senden",
    href: "mailto:info@sbp-management.com?subject=Fragen%3A%20WebSite%20SBP",
  },
} as const;

export const contactSection = {
  eyebrow: "Kontakt",
  title: "Kontaktieren Sie uns mit Ihrem Anliegen.",
  phoneLabel: "Telefon",
  mailLabel: "Mail",
} as const;

/** Form copy per page. Webflow's English default success text was replaced with the German one used on the home page. */
const SUCCESS = "Danke! Wir haben Ihre Anfrage erhalten!";
const CONSENT =
  "Mit dem Abschicken der Anfrage stimmen Sie zu, dass wir Ihre Daten zum Zweck Ihrer Anfrage verarbeiten dürfen.";
const ERROR_HOME = "Oops! Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Angaben!";
const ERROR_PAGE = "Oops! Es ist ein Fehler aufgetreten, bitte überprüfen Sie Ihre Angaben.";

export const forms = {
  common: {
    firstName: "Vorname*",
    lastName: "Nachname*",
    email: "E-Mail*",
    consent: CONSENT,
    required: "*Pflichtfelder",
    sending: "Bitte warten …",
    success: SUCCESS,
    /** Shown when the input was valid but delivery failed; followed by email and phone links. */
    failed: "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es in einigen Minuten erneut oder kontaktieren Sie uns direkt:",
  },
  home: {
    phone: "Telefonnummer",
    message: "Schreiben Sie hier Ihre Nachricht an uns.",
    submit: "Senden",
    error: ERROR_HOME,
    showRequiredNote: true,
  },
  contactPage: {
    phone: "Telefonnummer",
    message: "Schreiben Sie Ihre Nachricht hier...",
    submit: "Abschicken",
    error: ERROR_PAGE,
    showRequiredNote: false,
  },
  job: {
    phone: "Telefonnummer (z.B. +123 456789)",
    qualification: "Qualifikation",
    message:
      "*Schreiben Sie Ihre Nachricht hier... (z.B. Wunschposition, Wunschort, Qualifikation, Deutschkenntnisse etc.)",
    submit: "Abschicken",
    error: ERROR_PAGE,
    showRequiredNote: true,
  },
} as const;

export const about = {
  eyebrow: "Die Geschichte von SBP",
  title: "Von der Personalberatung zum Partner für medizinische Projekte.",
  intro: {
    eyebrow: "Ein kleiner Einblick",
    title: "Über Uns",
    left: "SBP Management wurde 2011 als spezialisierte Personalberatung im Gesundheitswesen gegründet. Über die Jahre ist daraus ein Beratungshaus geworden, das deutsche Kliniken, Unternehmen und Institutionen bei anspruchsvollen medizinischen Projekten begleitet. Den Kern unserer Arbeit bilden heute zwei Gedanken: die Verbindung deutscher Gesundheitsstrukturen mit internationalen Partnern und die Bildung, also die Weitergabe von Wissen und Standards über Grenzen hinweg. Beratung verstehen wir dabei nicht als einmalige Leistung, sondern als Begleitung über die gesamte Laufzeit eines Vorhabens. Diese Haltung hat uns über mehr als ein Jahrzehnt zu einem verlässlichen Partner für einige der größten Klinikkonzerne Deutschlands und für angesehene kommunale Träger gemacht.",
    right:
      "Wie sich das in der Praxis zeigt, lässt sich an unseren Projekten ablesen. Wir verbinden deutsche Krankenhäuser über Freundschaftsverträge und Abkommen mit medizinischen Vereinigungen im Ausland und schaffen einen verlässlichen Rahmen für fachlichen Austausch und gegenseitige Unterstützung. In einer eigenen privaten Akademie stärken wir das Ausbildungswissen für OP-Feinmechaniker und weitere medizinisch-technische Berufe und geben deutsche Qualitätsmaßstäbe an Fachkräfte im Ausland weiter. Zugleich begleiten wir Unternehmen bei der Internationalisierung, unter anderem beim Aufbau einer Produktionsstätte für die Aufbereitung medizinischer Instrumente in einem Drittland. Mit einem eigens gegründeten Verein fördern wir Hygienestandards nach deutschem Vorbild in Serbien, wo bereits erste Fachsymposien stattgefunden haben. Weitere Vorhaben zur kompetenzorientierten Ausbildung im internationalen Raum befinden sich in Vorbereitung.",
  },
  team: {
    title: "Lernen Sie unser Team kennen",
    subtitle: "Ein kleines Familienunternehmen mit großem Wirkungskreis.",
    members: [
      { name: "Sabina Banda", role: "CEO & Gründerin", image: assets.team.sabina },
      { name: "Nikola Banda", role: "Gesundheitsökonom & Projektmanagement", image: assets.team.nikola, tall: true },
      { name: "Nemanja Banda", role: "Business Analyst", image: assets.team.nemanja },
    ],
  },
} as const;

export const services = {
  intro: {
    title: "Wovon wir überzeugt sind",
    body: "Seit unserer Gründung setzen wir auf eine transparente und verlässliche Beratung. Wir verstehen unsere Leistungen nicht als einzelne Aufträge, sondern als Projekte, die wir über ihre gesamte Laufzeit begleiten. Im Mittelpunkt stehen zwei Anliegen: die Verbindung deutscher Gesundheitsstrukturen mit internationalen Partnern und die Bildung, also die Weitergabe von Wissen und Standards. Diese Seite gibt einen Einblick in die Felder, in denen wir für unsere Mandanten arbeiten.",
  },
  rows: [
    {
      eyebrow: "Bildung",
      title: "Ausbildung und Wissenstransfer",
      body: "Bildung ist der Kern unserer Beratung. In einer eigenen privaten Akademie stärken wir das Ausbildungswissen für OP-Feinmechaniker und weitere medizinisch-technische Berufe und geben deutsche Qualitätsmaßstäbe an Fachkräfte im Ausland weiter. Wir begleiten Kliniken und Träger beim Aufbau langfristiger Qualifizierungsstrukturen und fördern mit einem eigens gegründeten Verein Hygienestandards nach deutschem Vorbild, die in Serbien bereits in ersten Fachsymposien Gestalt angenommen haben. Weitere Vorhaben zur kompetenzorientierten Ausbildung im internationalen Raum befinden sich in Vorbereitung.",
      image: "surgeon",
    },
    {
      eyebrow: "Verbindung",
      title: "Internationale Projekte und Partnerschaften",
      body: "Die zweite Säule unserer Arbeit ist die Verbindung. Über Freundschaftsverträge und Abkommen bringen wir deutsche Krankenhäuser mit medizinischen Vereinigungen im Ausland zusammen und schaffen einen verlässlichen Rahmen für fachlichen Austausch und gegenseitige Unterstützung. Etablierte deutsche Unternehmen begleiten wir bei der Internationalisierung, unter anderem beim Aufbau einer Produktionsstätte für die Aufbereitung medizinischer Instrumente in einem Drittland. So entstehen tragfähige Brücken zwischen dem deutschen Gesundheitswesen und internationalen Partnern.",
      image: "handshake",
    },
  ],
  values: {
    eyebrow: "Unsere Werte",
    title: "Werte, die unsere Projekte tragen",
    items: [
      { title: "Innovation", body: "In einer dynamischen Welt muss man stets neue Wege und Lösungen finden." },
      { title: "Transparenz", body: "Transparenz hilft bei der Zusammenarbeit und unterstützt wichtige Prozesse." },
      {
        title: "Sicherheit",
        body: "Unser Expertenteam besitzt alle nötigen Kompetenzen und lässt Sie sich auf Ihr Tagesgeschäft fokussieren.",
      },
      { title: "Ehrlichkeit", body: "Eine vertrauensvolle und erfolgsorientierte Zusammenarbeit basiert auf Ehrlichkeit." },
    ],
  },
} as const;

export const contactPage = {
  eyebrow: "Kontaktieren sie uns",
  title: "Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch!",
  feedback: "Beschwerde / Feedback Kanal:",
} as const;

export const jobs = {
  eyebrow: "Stellenausschreibungen",
  title: "Aktuelle bundesweite Job-Angebote",
  cardLabel: "Stellenausschreibung",
  link: "Link",
  /** Listing order and card titles as shown on the live list page. Slugs match jobs-data.ts. */
  items: [
    { title: "Pflegedienstleitung (m/w/d) Baden-Württemberg", slug: "pflegedienstleitung-m-w-d-baden-wurttemberg" },
    { title: "AEMP Leitung (m/w/d) Sterilgutversorgung Sebnitz", slug: "aemp-leitung-m-w-d-sterilgutversorgung-sebnitz" },
    {
      title: "Facharzt (m/w/d) für Frauenheilkunde und Geburtshilfe in Vollzeit, unbefristet",
      slug: "facharzt-m-w-d-fuer-frauenheilkunde-und-geburtshilfe-in-vollzeit-unbefristet-202403",
    },
    {
      title: "Assistenzarzt für die Gynäkologie und Geburtshilfe (m/w/d) in Vollzeit, unbefristet",
      slug: "assistenzarzt-fur-die-gynakologie-und-geburtshilfe-m-w-d-in-vollzeit-unbefristet-202402",
    },
    {
      title: "Assistenzarzt (m/w/d) Gefäßchirurgie in Brandenburg in Voll- oder Teilzeit, unbefristet",
      slug: "assistenzarzt-m-w-d-gefasschirurgie-in-brandenburg-in-voll-oder-teilzeit-unbefristet-202328",
    },
    {
      title: "Anästhesietechnische Assistenten (ATA) (m/w/d) in Frankfurt am Main in Voll- oder Teilzeit, unbefristet",
      slug: "anasthesietechnische-assistenten-ata-m-w-d-in-frankfurt-am-main-in-voll-oder-teilzeit-unbefristet-202327",
    },
    {
      title: "Pflegefachkräfte (m/w/d) Intensivstation in Frankfurt am Main in Voll- oder Teilzeit, unbefristet",
      slug: "pflegefachkrafte-m-w-d-intensivstation-in-frankfurt-am-main-in-voll-oder-teilzeit-unbefristet-202326",
    },
    {
      title: "Pflegefachkräfte (m/w/d) Pädiatrie in Frankfurt am Main in Vollzeit, unbefristet",
      slug: "pflegefachkrafte-m-w-d-intensiv-padiatrie-u-neonatologie-in-frankfurt-am-main-in-voll-oder-teilzeit-unbefristet-202325",
    },
    {
      title: "MTRA (m/w/d) in Frankfurt am Main in Voll- oder Teilzeit, unbefristet",
      slug: "mtra-m-w-d-in-frankfurt-am-main-in-voll-oder-teilzeit-unbefristet-202324",
    },
  ],
} as const;
