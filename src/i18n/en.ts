/**
 * English copy, from "SBP Website EN.docx" (sbp-working-files). A translation of the German
 * master text: it keeps exactly the shape of de.ts (checked by the Dictionary type).
 * `link` values are page keys from config.ts, not URLs.
 */
import { enLegal } from "./en-legal";
import { enPages } from "./en-pages";
import { enServices } from "./en-services";
import type { Dictionary } from "./dictionaries";

export const en: Dictionary = {
  meta: {
    title: "SBP Management | International Healthcare Projects",
    description:
      "SBP Management develops and implements international healthcare projects: project management, process optimization, sterile supply, medical technology, vocational education and workforce development. Germany, Serbia, Kazakhstan and Central Asia.",
  },

  notFound: {
    eyebrow: "Error 404",
    title: "Page not found",
    body: "The page you are looking for does not exist or has moved. Start again from the homepage or get in touch with us.",
    home: "Go to the homepage",
    contact: "Contact us",
  },

  a11y: {
    skip: "Skip to content",
    home: "SBP Management, home",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    comingSoon: "coming soon",
  },

  nav: {
    items: [
      { label: "About Us", link: "about" },
      {
        label: "Service Areas",
        link: "services",
        children: [
          { label: "Healthcare Project Management", link: "svcProject" },
          { label: "Hospital & Process Optimization", link: "svcProcess" },
          { label: "Sterile Supply & Medical Technology", link: "svcSterile" },
          { label: "Education & Competence Development", link: "svcEducation" },
          { label: "Workforce Solutions", link: "workforce" },
        ],
      },
      {
        label: "Projects",
        link: "projects",
        children: [
          { label: "MASOK Akademija | Serbia", link: "masok" },
          { label: "Competence Center | Kazakhstan & Central Asia", link: "kazakhstan" },
          { label: "Projects in Germany", link: "germany" },
          { label: "International Exchange Programs", link: "exchange" },
        ],
      },
      { label: "For Hospitals & Institutions", link: "hospitals" },
      { label: "Jobs", link: "jobs" },
    ],
    contact: "Contact",
  },

  home: {
    hero: {
      eyebrow: "Healthcare · Education · Technology · International Projects",
      // Each entry is one line of the headline (lines never wrap); the accent line sits underneath.
      titleLines: ["International", "healthcare projects."],
      titleAccent: "From strategy to implementation.",
      lead: "SBP Management develops and implements projects at the intersection of healthcare, vocational education, sterile supply, medical technology, and workforce development.",
      body: "From Germany through Serbia to Central Asia, we connect hospitals, educational institutions, organizations, and companies, and develop structures that work in the long term.",
      primary: "Our Projects",
      secondary: "For Hospitals & Institutions",
      candidates: "For Candidates – Career in Germany",
      /** City names on the map, by region id. */
      mapCities: { de: "Berlin", rs: "Leskovac", kz: "Astana" },
      mapLabel: "SBP Management project regions: Germany, Serbia, and Kazakhstan / Central Asia",
      regions: [
        { id: "de", country: "Germany", place: "Berlin · since 2011", focus: "Hospital & process projects" },
        { id: "rs", country: "Serbia", place: "Leskovac", focus: "MASOK Akademija" },
        { id: "kz", country: "Kazakhstan", place: "& Central Asia", focus: "Healthcare Academy" },
      ],
    },

    ticker: [
      "Healthcare Project Management",
      "Germany",
      "Sterile Supply",
      "Serbia",
      "Medical Technology",
      "Kazakhstan & Central Asia",
      "Education & Training",
      "International Exchange",
      "Workforce Solutions",
    ],

    intro: {
      eyebrow: "What SBP does",
      title: "More than talent acquisition",
      body: "Healthcare systems work sustainably when processes, qualifications, technology, and people are considered together. SBP Management supports hospitals, institutions, and international partners from analysis and project development to practical implementation.",
      pillars: ["Healthcare", "Education", "Technology", "Workforce"],
    },

    projects: {
      eyebrow: "International projects",
      title: "Projects that connect structures",
      body: "SBP Management develops projects where healthcare, qualification, technology, and organization come together.",
      all: "All projects",
      cta: "Discover project",
      statusLabel: "Status",
      items: [
        {
          region: "Serbia",
          code: "RS",
          name: "MASOK Akademija",
          title: "Competence development for healthcare and medical technology",
          body: "With the MASOK Akademija in Leskovac, SBP Management is developing a model that combines vocational education, practical qualification, international quality standards, and the requirements of healthcare and medical technology.",
          focus: ["Surgical instruments", "Medical assistants (MFA)", "Sterile supply"],
          status: "Implementation / setup",
          tone: "active",
          link: "masok",
        },
        {
          region: "Kazakhstan & Central Asia",
          code: "KZ",
          name: "Healthcare Academy Kazakhstan",
          title: "Establishing a competence center for modern healthcare",
          body: "The German-Kazakh Health Initiative pursues an integrated approach to workforce qualification, hospital management, sterile supply, medical technology, digitalization, and quality management.",
          focus: ["Healthcare Academy", "Train-the-trainer", "Quality management"],
          status: "Initiation and setup phase",
          tone: "planned",
          link: "kazakhstan",
        },
        {
          region: "Germany",
          code: "DE",
          name: "Hospital and process projects",
          title: "Organization, workforce, and sustainable care structures",
          body: "We work with hospitals, hospital groups, healthcare associations, and other healthcare stakeholders, combining process optimization, organizational development, and strategic workforce planning.",
          focus: ["Process optimization", "Organizational development", "Workforce planning"],
          status: "Ongoing",
          tone: "ongoing",
          link: "germany",
        },
        {
          region: "International",
          code: "INT",
          name: "Exchange programs",
          title: "Knowledge grows through encounter",
          body: "International exchange and practical programs for school students, trainees, professionals, and educational institutions, enabling direct knowledge transfer between Germany and partner countries.",
          focus: ["Job shadowing", "Practical programs", "Knowledge transfer"],
          status: "Ongoing",
          tone: "ongoing",
          link: "exchange",
        },
      ],
    },

    services: {
      eyebrow: "Service areas",
      title: "Five competencies. One integrated approach.",
      cta: "All service areas",
      items: [
        {
          title: "Healthcare Project Management",
          body: "Conception, coordination, and implementation of complex healthcare projects with national and international partners.",
        },
        {
          title: "Hospital & Process Optimization",
          body: "Analysis and further development of clinical workflows, organizational structures, interfaces, HR processes, and quality standards.",
        },
        {
          title: "Sterile Supply & Medical Technology",
          body: "Projects around AEMP/CSSD, reprocessing, surgical instruments, process quality, documentation, and technical competence development.",
        },
        {
          title: "Education & Competence Development",
          body: "Development of practice-oriented training models, curricula, train-the-trainer concepts, and international knowledge transfer.",
        },
        {
          title: "Workforce Solutions",
          body: "Strategic workforce planning, international talent acquisition, recognition, integration, and sustainable onboarding.",
        },
      ],
    },

    germany: {
      eyebrow: "Germany",
      title: "From talent acquisition to sustainable hospital development",
      body: [
        "Our many years of experience in German hospitals show: staffing issues cannot be solved in isolation. Successful workforce integration requires functioning processes, clear responsibilities, good onboarding, and resilient organizational structures.",
        "That is why SBP Management combines Workforce Solutions with process and organizational development in healthcare.",
      ],
      cta: "Hospital & process projects",
      ctaSecondary: "Workforce Solutions",
      imageAlt: "Two people shaking hands across a desk at a meeting",
      // Figures carried over from the current site. Confirm before publishing.
      stats: [
        { value: "2011", label: "Founded in Berlin" },
        { value: ">40", label: "Partner hospitals" },
        { value: "3", label: "Core project regions" },
      ],
    },

    process: {
      eyebrow: "How we work",
      steps: ["Analyze", "Develop", "Connect", "Implement"],
      body: "We identify concrete needs, develop project and competence models, bring the relevant partners together, and support practical implementation.",
    },

    network: {
      eyebrow: "Partners & network",
      title: "A network across healthcare, education, and industry",
      body: "We work with hospitals, healthcare associations, educational institutions, chambers, public institutions, and industry partners. We only name organizations that have approved public reference.",
      categories: [
        "Hospitals and hospital groups",
        "Healthcare associations and professional organizations",
        "Educational institutions and academies",
        "Chambers and business organizations",
        "Institutions for qualification and dual education",
        "Industry and technology partners",
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Talk to us about your project.",
      body: "Whether hospital optimization, qualification, sterile supply, medical technology, international cooperation, or workforce development – together with you, we develop a solution that fits your organization and your market.",
      primary: "Start a project inquiry",
      or: "or reach us directly",
    },
  },

  jobs: {
    meta: {
      title: "Jobs",
      description:
        "Career in Germany and job openings by region: Germany, Serbia, and Kazakhstan & Central Asia. SBP Management supports international healthcare professionals from application to a successful start.",
    },

    candidates: {
      eyebrow: "For candidates",
      title: "Career in Germany",
      body: "Hold a medical or healthcare Diploma recognized in the DACH regions and are looking for a professional opportunity in Germany?",
      steps: ["Language", "Recognition", "Visa & entry", "Onboarding"],
      primary: "Current job openings",
      secondary: "Advice for candidates",
    },

    boards: {
      eyebrow: "Job boards",
      title: "Find openings by region",
      body: "Choose the region you would like to work in to see its current job openings.",
      cta: "View job openings",
      // Each card opens that region's job page.
      items: [
        {
          code: "DE",
          region: "Germany",
          title: "Hospitals and healthcare facilities in Germany",
          body: "Current positions for doctors, nursing staff, and medical specialists at our partner hospitals.",
          note: "Listings in German",
          link: "jobsGermany",
        },
        {
          code: "RS",
          region: "Serbia",
          title: "Healthcare and medical technology in Serbia",
          body: "Openings connected to our projects in Serbia.",
          note: "",
          link: "jobsSerbia",
        },
        {
          code: "KZ",
          region: "Kazakhstan & Central Asia",
          title: "Healthcare in Kazakhstan and Central Asia",
          body: "Openings connected to the German-Kazakh Health Initiative.",
          note: "",
          link: "jobsKazakhstan",
        },
      ],
    },
  },

  status: {
    active: "In setup",
    planned: "Planned",
    ongoing: "Ongoing",
  },

  footer: {
    tagline: "International healthcare projects. From strategy to implementation.",
    columns: [
      {
        heading: "Projects",
        links: [
          { label: "MASOK Akademija | Serbia", link: "masok" },
          { label: "Kazakhstan & Central Asia", link: "kazakhstan" },
          { label: "Projects in Germany", link: "germany" },
          { label: "Exchange Programs", link: "exchange" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About Us", link: "about" },
          { label: "Service Areas", link: "services" },
          { label: "Workforce Solutions", link: "workforce" },
          { label: "For Hospitals & Institutions", link: "hospitals" },
          { label: "Contact", link: "contact" },
        ],
      },
      {
        heading: "Candidates",
        links: [
          { label: "Career in Germany", link: "candidates" },
          { label: "Job Listings", link: "jobBoards" },
        ],
      },
    ],
    legal: [
      { label: "Imprint", link: "imprint" },
      { label: "Privacy Policy", link: "privacy" },
    ],
    gapaAlt: "GAPA – quality association for the recruitment and placement of nursing staff from abroad",
    copyright: "SBP Management",
  },

  ...enPages,
  ...enServices,
  ...enLegal,
};
