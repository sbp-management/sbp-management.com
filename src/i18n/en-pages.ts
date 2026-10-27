/**
 * English copy for the inner pages, from "SBP Website EN.docx" sections 6–16.
 * Merged into the dictionary in en.ts; translations keep exactly this shape.
 * `link` values are page keys from config.ts; `href` values are plain URLs.
 */
export const enPages = {
  about: {
    meta: {
      title: "About Us",
      description:
        "SBP Management is a Berlin-based company for the development, management, and implementation of healthcare projects, working with hospitals, institutions, and international partners since 2011.",
    },
    eyebrow: "About Us",
    title: "International projects for a stronger healthcare system",
    lead: "SBP Management is a Berlin-based company for the development, management, and implementation of healthcare projects. Since 2011, we have been working with hospitals, healthcare organizations, educational institutions, public bodies, and international partners.",
    body: [
      "Our projects connect areas that are often considered separately in healthcare: organization, workforce, vocational education, medical technology, sterile supply, and international cooperation.",
      "Our aim is not to create short-term one-off solutions. We develop structures that build knowledge, improve processes, and can be further developed locally in the long term.",
    ],
    facts: [
      { value: "2011", label: "Founded in Berlin" },
      { value: "3", label: "Core project regions" },
    ],
    international: {
      eyebrow: "From Germany to international projects",
      title: "Experience from German hospitals as the foundation",
      body: [
        "The experience gained from working with German hospitals forms an important foundation for our international projects.",
        "In Serbia, SBP Management, together with Akademija MASOK, is developing models for vocational qualification in healthcare and medical technology. These experiences also serve as a reference for the development of the German-Kazakh Health Initiative and a planned competence center in Kazakhstan with a perspective for Central Asia.",
      ],
    },
    team: {
      eyebrow: "Team",
      title: "Meet the Team",
      body: "Expertise in healthcare, education, and international project management – one team that delivers results that last.",
      photoAlt: "Portrait of",
      /** Shown in the circle while a team member's photo is still missing. */
      photoSoon: "Photo coming soon",
      /** In order: row 1 CEO, Junior Consultant; row 2 Team Management/HR ×2, International Project Manager, Real Estate (photo to come); row 3 Marketing, Accounting, IT. Empty name = not known yet. */
      members: [
        { name: "Sabina Banda", role: "CEO" },
        { name: "Nikola Banda", role: "Junior Consultant" },
        { name: "Ana Zakarashvili", role: "Team Management / HR" },
        { name: "Josephine Heinrich", role: "Team Management / HR" },
        { name: "Milica Golubović", role: "International Project Manager" },
        { name: "", role: "Real Estate" },
        { name: "Yaw Addo", role: "Marketing" },
        { name: "Adriel Mangiring", role: "Accounting" },
        { name: "Stephen Ntah", role: "IT Administration" },
      ],
    },
    work: {
      eyebrow: "How we work",
      title: "Analyze. Develop. Connect. Implement.",
      body: [
        "We identify concrete needs, develop project and competence models, bring the relevant partners together, and support practical implementation.",
        "In doing so, we work at the interface between hospitals, education, industry, institutions, and international partners.",
      ],
      steps: [
        { title: "Analyze", body: "We identify concrete needs." },
        { title: "Develop", body: "We develop project and competence models." },
        { title: "Connect", body: "We bring the relevant partners together." },
        { title: "Implement", body: "We support practical implementation." },
      ],
    },
  },

  services: {
    meta: {
      title: "Service Areas",
      description:
        "Healthcare project management, hospital and process optimization, sterile supply, medical technology and surgical instruments, education and training, and Workforce Solutions.",
    },
    eyebrow: "Service Areas",
    title: "Competencies for healthcare, education, and\u00A0technology",
    lead: "Healthcare systems work sustainably when processes, qualifications, technology, and people are considered together. SBP Management supports hospitals, institutions, and international partners from analysis and project development to practical implementation.",
    more: "Learn more",
    items: [
      {
        id: "healthcare-project-management",
        title: "Healthcare Project Management",
        body: "Strategic conception, stakeholder management, project steering, international coordination, and implementation support.",
        link: "svcProject",
      },
      {
        id: "hospital-process-optimization",
        title: "Hospital & Process Optimization",
        body: "Further development of organization, workflows, interfaces, resources, HR processes, and operational structures.",
        link: "svcProcess",
      },
      {
        id: "sterile-supply",
        title: "Sterile Supply",
        body: "Process development in AEMP/CSSD, quality, documentation, competence building, traceability, and alignment with international standards.",
        link: "svcSterile",
      },
      {
        id: "medical-technology",
        title: "Medical Technology & Surgical Instruments",
        body: "Qualification, maintenance, repair, lifecycle management, and the link between healthcare and the technical industry.",
        link: "svcMedtech",
      },
      {
        id: "education-training",
        title: "Education & Training",
        body: "Curriculum development, vocational qualification, train-the-trainer, academy models, practical training, and practice partnerships.",
        link: "svcEducation",
      },
      {
        id: "workforce-solutions",
        title: "Workforce Solutions",
        body: "Workforce planning, international professionals, recognition, language, onboarding, and sustainable integration into hospitals and healthcare facilities.",
        link: "workforce",
      },
    ],
  },

  projectsPage: {
    meta: {
      title: "Projects",
      description:
        "MASOK Akademija in Serbia, the Healthcare Academy Kazakhstan, hospital and process projects in Germany, and international exchange programs.",
    },
    eyebrow: "Projects",
    title: "Projects that connect structures",
    lead: "SBP Management develops projects where healthcare, qualification, technology, and organization come together. Our work ranges from local hospital processes to international competence and education models.",
    items: [
      {
        region: "Serbia",
        code: "RS",
        name: "MASOK Akademija",
        title: "Vocational education, medical technology, and sterile supply",
        body: "Establishment of a practice-oriented competence model in Leskovac, linked to qualification development, practical training, medical technology, and the healthcare economy.",
        focus: ["Surgical instruments", "Medical assistants (MFA)", "Sterile supply"],
        status: "Implementation / setup",
        tone: "active",
        link: "masok",
      },
      {
        region: "Kazakhstan & Central Asia",
        code: "KZ",
        name: "Healthcare Academy Kazakhstan",
        title: "Healthcare modernization and competence development",
        body: "German-Kazakh cooperation initiative for workforce development, hospital management, sterile supply, medical technology, digitalization, and quality.",
        focus: ["Healthcare Academy", "Train-the-trainer", "Quality management"],
        status: "Initiation phase",
        tone: "planned",
        link: "kazakhstan",
      },
      {
        region: "Germany",
        code: "DE",
        name: "Hospital, process, and workforce projects",
        title: "Organization, processes, and workforce",
        body: "Cooperation with hospitals, hospital groups, associations, and healthcare organizations, focusing on organization, processes, workforce, and sustainable care structures.",
        focus: ["Process optimization", "Organizational development", "Workforce planning"],
        status: "Ongoing",
        tone: "ongoing",
        link: "germany",
      },
      {
        region: "International",
        code: "INT",
        name: "International Exchange Programs",
        title: "Practice, training, and knowledge transfer",
        body: "Exchange and job-shadowing programs as a practical bridge between educational institutions and partners in Germany and other countries.",
        focus: ["Job shadowing", "Practical programs", "Knowledge transfer"],
        status: "Ongoing",
        tone: "ongoing",
        link: "exchange",
      },
    ],
  },

  /** Labels shared by the four project pages. */
  project: {
    facts: "Project facts",
    region: "Region",
    location: "Location",
    focus: "Focus",
    status: "Status",
    related: "More projects",
    back: "All projects",
  },

  masok: {
    meta: {
      title: "MASOK Akademija | Serbia",
      description:
        "MASOK Akademija in Leskovac: vocational education meets healthcare and medical technology. Qualification for surgical instruments, medical assistants, and sterile supply.",
    },
    code: "RS",
    region: "Serbia",
    location: "Leskovac",
    status: "Implementation / setup",
    tone: "active",
    focus: "Surgical instruments, medical assistants (MFA), sterile supply",
    eyebrow: "Project · Serbia",
    title: "MASOK Akademija",
    subtitle: "Vocational education meets healthcare and medical technology",
    lead: "The International Academy for Vocational Professional Education – MASOK in Leskovac is an education and competence center for practice-oriented qualification programs in line with European and international quality requirements.",
    body: "The academy forms the institutional core of a model that links qualification development, training, practical competence, international cooperation, and economic development.",
    standard: {
      title: "From qualification standard to practical competence",
      body: [
        "The starting point of the project was the development of a new qualification standard for the manufacturing and repair of surgical instruments.",
        "The project responds to a concrete need: hospitals and companies require qualified professionals for the maintenance, repair, and lifecycle management of medical instruments. At the same time, professional instrument repair creates a sustainable approach – instruments can be used longer, resources conserved, and medical waste reduced.",
      ],
    },
    fields: {
      title: "Education and competence fields",
      items: [
        {
          title: "Mechanic for the Manufacturing and Repair of Surgical Instruments",
          subtitle: "Technical competence for the healthcare sector",
          body: "Theoretical and practical qualification in the field of surgical instruments, aligned with German quality and technical standards. The developed qualification standard forms the basis for structured training and practical competence development.",
          status: "",
        },
        {
          title: "Medical Assistants (MFA)",
          subtitle: "Practice-oriented model based on the German example",
          body: "Development of a training model for medical assistance that combines administrative, organizational, and selected medical tasks and can relieve clinical and outpatient structures.",
          status: "Program in development",
        },
        {
          title: "Sterilization Technician",
          subtitle: "AEMP/CSSD, process quality, and documentation",
          body: "Qualification for the reprocessing of medical devices and sterile supply, focusing on process workflows, documentation, quality assurance, and safe working standards.",
          status: "Program in development",
        },
      ],
    },
    practice: {
      title: "Practice, training, and knowledge transfer",
      body: "Practical orientation is a central component of the model. Cooperation with the Technical School in Vlasotince and its Training Center provides the foundation for practical training. Teachers and professional partners are involved in the knowledge transfer through international exchange and qualification formats.",
    },
    international: {
      title: "From Serbia to international markets",
      body: "The model developed in Serbia combines education, quality, project management, and international cooperation. This structure serves as a reference for the further development of competence models in other countries – in particular for the German-Kazakh Health Initiative and the planned Healthcare Academy Kazakhstan.",
    },
    external: {
      title: "Programs, enrollment, and admission",
      body: "Details on classes, enrollment, program duration, and admission are published by MASOK Akademija on its own website.",
      label: "Visit masok.eu",
      href: "https://masok.eu",
    },
    cta: "Request cooperation",
  },

  kazakhstan: {
    meta: {
      title: "Healthcare Academy Kazakhstan | Kazakhstan & Central Asia",
      description:
        "German-Kazakh Health Initiative: a planned competence center for modern healthcare in Kazakhstan with a perspective for Central Asia.",
    },
    code: "KZ",
    region: "Kazakhstan & Central Asia",
    location: "Kazakhstan",
    status: "Initiation phase",
    tone: "planned",
    focus: "Workforce qualification, hospital management, sterile supply, medical technology, digitalization, quality",
    eyebrow: "Project · Kazakhstan & Central Asia",
    title: "German-Kazakh Health Initiative",
    subtitle: "A competence center for the future of healthcare",
    lead: "SBP Management is developing a long-term German-Kazakh cooperation initiative to modernize healthcare, develop medical professional competencies, and advance healthcare management.",
    body: "The goal is to establish sustainable structures that transfer German and European experience to Kazakhstan's conditions and can be further developed locally in the long term.",
    approach: {
      title: "Integrated approach",
      body: "The initiative is not designed as an isolated single project. It combines workforce development, vocational education, medical technology, sterile supply, digitalization, quality management, and organizational development in a modular overall structure.",
    },
    academy: {
      title: "Healthcare Academy Kazakhstan",
      body: [
        "The institutional centerpiece is the planned establishment of a Healthcare Academy Kazakhstan. The academy is intended to bring together qualification, train-the-trainer programs, quality assurance, knowledge transfer, and the coordination of international partnerships under one roof.",
        "In the long term, this is intended to grow into a competence center that can be relevant not only for Kazakhstan but also, in perspective, for other Central Asian countries.",
      ],
    },
    modules: {
      title: "Project modules",
      items: [
        { title: "Medical Assistants (MFA)", body: "Development of a practice-oriented MFA qualification based on the German model." },
        {
          title: "Surgical Instruments & Medical Technology",
          body: "Qualification for technical processes related to surgical instruments, maintenance, and medical technology.",
        },
        { title: "Sterile Supply – AEMP/CSSD", body: "Building professional competence and process standards for professional sterile supply." },
        { title: "Digitalization & Quality Management", body: "Digital documentation, traceability, process quality, and quality assurance." },
        { title: "Nursing & Hospital Management", body: "Organizational development, resource management, and modern management structures." },
        { title: "Healthcare Academy Kazakhstan", body: "Establishment of a sustainable training and competence structure." },
        { title: "Hospital Partnerships", body: "Professional exchange, job shadowing, and know-how transfer with German hospital partners." },
        { title: "International Network", body: "Cooperation with institutions, chambers, and education and industry partners." },
      ],
    },
    stages: {
      title: "Central Asia perspective",
      body: "The development is designed in several stages: from partner identification and pilot planning, through the establishment of the academy and initial qualification programs, to scaling and developing a regional competence center with reach across Central Asia.",
      items: [
        "Partner identification and pilot planning",
        "Establishment of the academy and initial qualification programs",
        "Scaling and a regional competence center for Central Asia",
      ],
    },
    reference: {
      title: "Serbia as a reference model",
      body: "A particular strength of the project is that SBP Management is not starting from scratch. Experience from the model developed in Serbia – curricula, practical training, quality assurance, train-the-trainer, and international partnerships – serves as a reference for adaptation to new markets.",
    },
    cta: "Request cooperation",
  },

  germanyPage: {
    meta: {
      title: "Hospital and Process Projects | Germany",
      description:
        "SBP Management supports hospitals in Germany in analyzing structures, improving interfaces, and developing sustainable solutions for organization, personnel, and operational workflows.",
    },
    code: "DE",
    region: "Germany",
    location: "Berlin · since 2011",
    status: "Ongoing",
    tone: "ongoing",
    focus: "Process optimization, organizational development, workforce planning",
    eyebrow: "Project · Germany",
    title: "Hospital and process projects",
    subtitle: "Thinking hospital processes, organization, and workforce together",
    lead: "For many years, SBP Management has been working with hospitals, hospital groups, healthcare associations, and other healthcare organizations in Germany.",
    body: "Out of many years of experience in international talent acquisition, a broader consulting and project approach has developed: we do not view personnel in isolation but as part of clinical processes, organizational structures, and quality of care. SBP Management supports hospitals in analyzing structures, improving interfaces, and developing sustainable solutions for organization, personnel, and operational workflows.",
    imageAlt: "Two people shaking hands across a desk at a meeting",
    modules: {
      title: "Service modules",
      items: [
        "Analysis of clinical and administrative workflows",
        "Optimization of interfaces, roles, and responsibilities",
        "Organizational and resource development",
        "Onboarding and integration processes",
        "Staffing needs and workforce planning",
        "Quality and documentation processes",
        "Processes in sterile supply and AEMP/CSSD",
        "International knowledge, education, and project partnerships",
      ],
    },
    cooperation: {
      title: "Cooperation in healthcare",
      body: "SBP Management works with hospitals, hospital groups, healthcare associations, professional organizations, and other partners in healthcare. In doing so, we combine operational experience from the German healthcare market with international project management and competence building.",
    },
    workforce: {
      title: "Workforce Solutions",
      body: "International talent acquisition remains an important component – embedded in the question of how hospitals can organize workflows, teams, and resources in a stable, long-term way.",
      label: "Workforce Solutions",
    },
    cta: "Get in touch",
  },

  exchange: {
    meta: {
      title: "International Exchange Programs",
      description:
        "International exchange, job-shadowing, and practical programs for school students, trainees, professionals, and educational institutions.",
    },
    code: "INT",
    region: "International",
    location: "Germany ⇄ partner countries",
    status: "Ongoing",
    tone: "ongoing",
    focus: "Exchange, job shadowing, and practical programs",
    eyebrow: "Project · International",
    title: "International Exchange Programs",
    subtitle: "Sharing knowledge. Broadening perspectives. Connecting structures.",
    lead: "International qualification does not happen exclusively in the classroom. Direct professional exchange enables young people and professionals to experience work processes, quality standards, and professional cultures first-hand.",
    body: "SBP Management designs and organizes international exchange, job-shadowing, and practical programs together with educational institutions and practice partners.",
    programs: {
      title: "Programs",
      items: [
        {
          title: "Pharma exchange project",
          status: "Completed",
          tone: "ongoing",
          body: [
            "As part of an exchange project already carried out in the pharmaceutical field, school students were able to gain practical insights into an international professional environment.",
            "The focus was on professional exchange, practical experience, and getting to know different training and work structures.",
          ],
        },
        {
          title: "Schwanen Apotheke Frankfurt – September 2026",
          status: "In preparation",
          tone: "planned",
          body: [
            "A further exchange project with the Schwanen Apotheke in Frankfurt is planned for September 2026.",
            "The program is intended to give young participants insights into everyday pharmacy work and pharmaceutical work processes in Germany and to promote professional and intercultural exchange.",
          ],
        },
      ],
    },
    format: {
      title: "Exchange as a distinct project format",
      body: "For SBP Management, exchange programs are more than study trips. They are a distinct project format for knowledge transfer, competence development, and building sustainable partnerships between education and practice.",
    },
    cta: "Get in touch",
  },

  workforcePage: {
    meta: {
      title: "Workforce Solutions",
      description:
        "International professionals and Workforce Solutions: sustainable workforce development for hospitals, from first contact through recognition and visa to integration into everyday clinical work.",
    },
    eyebrow: "Service area · Germany",
    title: "International Professionals & Workforce Solutions",
    subtitle: "Sustainable workforce development for hospitals",
    lead: "International talent acquisition has been a field of competence of SBP Management for many years. We support hospitals and qualified professionals from the first contact through recognition and visa procedures to integration into everyday clinical work.",
    body: "We do not see recruitment as an isolated placement service. What matters is that qualification, area of deployment, organization, induction, and long-term integration fit together.",
    hospitals: {
      title: "For hospitals",
      items: [
        "Identification of suitable international professionals",
        "Support with recognition and visa procedures",
        "Organization or coordination of language qualifications",
        "Support with adaptation measures and knowledge examinations",
        "Onboarding and integration",
        "Support with organizational matters",
        "Strategic workforce and capacity planning",
      ],
    },
    candidates: {
      title: "Are you a healthcare professional?",
      body: "Find current openings and personal support on our Jobs page.",
      label: "Go to Jobs",
    },
    related: {
      title: "Connected with hospital and process development",
      body: "Successful workforce integration requires functioning processes, clear responsibilities, good onboarding, and resilient organizational structures.",
      label: "Hospital & process projects",
    },
    cta: "Get in touch",
  },

  hospitals: {
    meta: {
      title: "For Hospitals & Institutions",
      description:
        "Project development, process optimization, cooperations, and Workforce Solutions for hospitals, hospital groups, and healthcare institutions.",
    },
    eyebrow: "For Hospitals & Institutions",
    title: "Talk to us about your project.",
    lead: "Are you planning a healthcare project, looking to further develop clinical processes, build competencies, or involve international partners? We look forward to talking with you.",
    paths: {
      title: "How we work with hospitals and institutions",
      items: [
        {
          title: "Project development",
          body: "Conception, coordination, and implementation of complex healthcare projects with national and international partners.",
          link: "projects",
        },
        {
          title: "Process optimization",
          body: "Analysis and further development of clinical workflows, organizational structures, interfaces, HR processes, and quality standards.",
          link: "germany",
        },
        {
          title: "Cooperations",
          body: "We combine operational experience from the German healthcare market with international project management and competence building.",
          link: "about",
        },
        {
          title: "Workforce Solutions",
          body: "Strategic workforce planning, international talent acquisition, recognition, integration, and sustainable onboarding.",
          link: "workforce",
        },
      ],
    },
    modules: {
      title: "Service modules for hospitals",
      items: [
        "Analysis of clinical and administrative workflows",
        "Optimization of interfaces, roles, and responsibilities",
        "Organizational and resource development",
        "Onboarding and integration processes",
        "Staffing needs and workforce planning",
        "Quality and documentation processes",
        "Processes in sterile supply and AEMP/CSSD",
        "International knowledge, education, and project partnerships",
      ],
    },
    cta: "Start a project inquiry",
  },

  contactPage: {
    meta: {
      title: "Contact",
      description: "Talk to SBP Management about your healthcare project, a cooperation, Workforce Solutions, or your career in Germany.",
    },
    eyebrow: "Contact",
    title: "Talk to us about your project.",
    lead: "Are you planning a healthcare project, looking to further develop clinical processes, build competencies, or involve international partners? We look forward to talking with you.",
    details: { heading: "Reach us directly", address: "Address", phone: "Phone", email: "Email" },
    form: {
      heading: "Send us a message",
      reason: "Reason for your inquiry",
      reasons: [
        "Project inquiry / Healthcare Project Management",
        "Hospital and process optimization",
        "Sterile supply / medical technology",
        "Education / academy / qualification",
        "International cooperation",
        "Workforce Solutions for hospitals",
        "Application / candidate advice",
        "Other",
      ],
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone (optional)",
      organization: "Organization (optional)",
      message: "Your message",
      required: "Fields without “optional” are required.",
      consent: "By sending this form you agree that we use your details to answer your inquiry.",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you. Your message has been sent – we will get back to you shortly.",
      error: "Please fill in your first name, last name, and a valid email address.",
      failed: "Your message could not be sent. Please write to us directly:",
    },
  },

  /** Closing call to action used at the end of the inner pages. */
  closing: {
    eyebrow: "Contact",
    title: "Talk to us about your project.",
    body: "Whether hospital optimization, qualification, sterile supply, medical technology, international cooperation, or workforce development – together with you, we develop a solution that fits your organization and your market.",
    or: "or reach us directly",
  },

  /** Client photos: alt texts and the headings of the photo sections. */
  photos: {
    alt: {
      aboutMinistryGroup: "SBP Management with project partners at a ministry in Serbia",
      aboutMinistryMeeting: "Working meeting with project partners at a ministry in Serbia",
      hospitalsBuergerhospital: "Team photo in front of the Bürgerhospital in Frankfurt",
      projectsSigning: "Signing of an agreement with project partners in Serbia",
      masokLeskovacCity: "Meeting at the City of Leskovac",
      masokMeeting: "Project meeting with partners in Serbia",
      masokWorkshop: "Visit to a training workshop with machine tools",
      masokWorkshop2: "Machine tools in a training workshop",
      masokMechatronicsLab: "Training lab with automation and robotics equipment",
      masokComputerLab: "Visit to a computer training room",
      masokTrainingHall: "Visit to a training hall under construction",
      masokSchoolVisit: "Project partners on a school campus in Serbia",
      servicesSterileSupply: "Visit to a sterile supply department (AEMP/CSSD)",
      masokMfaBuergerhospitalMeeting: "Meeting on the MFA programme with the Bürgerhospital in a conference room",
      masokPartnerMeeting: "Working meeting with MASOK partners at a conference table",
      instrumentsTrainingSet: "Surgical instruments laid out for training",
      sbpMinistryMeeting: "SBP Management in a meeting at a ministry in Serbia",
      sbpLeskovacCityMeeting: "Meeting with representatives of the City of Leskovac",
      educationSterileSupplyVisit: "Training visit to a sterile supply department",
      masokAgreementDocuments: "Partners presenting a signed cooperation agreement",
      sbpPartnerDinner: "Dinner with project partners",
      masokPartnerGroup: "Group photo with MASOK partners in an office",
      masokSigning: "Signing a cooperation agreement",
      masokHandshake: "Handshake after signing a cooperation agreement",
      masokMeetingOffice: "Meeting with partners in an office in Leskovac",
      masokMeetingTeam: "Discussion with partners at the conference table",
      sbpMinistryEconomy: "Visit to the Ministry of Economy in Serbia",
      masokCampusVisit: "Visitors in front of the MASOK training hall",
      sbpLeskovacCityTalks: "Talks with the City of Leskovac",
      masokCampusGroup: "Group photo in front of the MASOK Akademija building",
      projectWorkshopHall: "Training workshop with machines",
      masokPartnersSelfie: "Project partners on a visit",
      sbpMinistryVisit: "SBP Management at the Ministry of Economy in Serbia",
      sbpMinistryTeam: "SBP Management team at a ministry in Serbia",
      sbpMinistryDelegation: "Delegation at the Ministry of Economy in Serbia",
      masokSterileSupplyVisit: "Visit to a sterile supply department with MASOK partners",
      projectSterileSupplyVisit: "Project visit to a sterile supply department",
      sbpAsanusVisit: "Welcome sign for the SBP Management visit at a partner company",
      germanyHandshake: "Two people shaking hands across a desk at a meeting",
      childrenCareOutdoors: "Small child running towards a woman in a park",
      ecgGraphic: "ECG curve on a monitor grid",
      nursePatientMonitor: "Nurse checking a patient monitor in a hospital room",
      microscopeLab: "Gloved hands adjusting a laboratory microscope",
      childExamination: "Doctor listening to a young girl's back with a stethoscope",
      childTeddyStethoscope: "Child holding a stethoscope to a teddy bear",
      elderlyCareWalker: "Caregiver walking with an elderly woman using a walker",
      elderlyCareHands: "Elderly person's hands drawing with a pencil at a table",
      elderlyCareBedside: "Caregiver holding the hand of an elderly patient in bed",
      labTechnicianInstruments: "Technician in a hair cap working with instruments in a laboratory",
      nurseTablet: "Nurse reading a tablet at a hospital reception",
      doctorStethoscope: "Doctor in blue scrubs with a stethoscope",
      doctorNotes: "Doctor taking notes at a desk",
      anesthesiaWorkstation: "Anaesthetist at a ventilation and monitoring workstation",
      ecgElectrodes: "ECG electrodes being attached to a patient",
      surgicalInstrumentsGloves: "Gloved hands holding surgical instruments",
      stethoscopeExamination: "Gloved hand placing a stethoscope on a patient's arm",
      nurseInstrumentPreparation: "Nurse in sterile clothing preparing surgical instruments",
      stethoscopeHands: "Healthcare worker holding a stethoscope behind the back",
      clinicalDocumentation: "Clinician writing on a clipboard next to a patient",
      nursePatientCare: "Nurse caring for a patient in a hospital bed",
      infusionCare: "Nurse adjusting an infusion in a patient room",
      clinicItTeam: "Two clinic staff working together at a computer",
      precisionMachining: "Precision machining of a metal part",
      laboratoryTeam: "Laboratory staff working at modern equipment",
      surgicalInstruments: "Surgical clamps and scissors on a sterile cloth",
      surgeryInstrumentsHands: "Surgical team handing over instruments during an operation",
      operatingTeam: "Operating team working together in an operating room",
      icuMonitor: "Ventilation monitor next to a patient in intensive care",
      keyboardDocumentation: "Hands typing on a keyboard",
      xRay: "X-ray image of two hands",
      medicalTeamCorridor: "Medical team walking down a hospital corridor",
      newbornCare: "Gloved hands holding a newborn baby's feet",
      maternityCare: "Hands resting on a pregnant woman's belly",
      physiotherapyKnee: "Physiotherapist treating a patient's knee",
      physiotherapyBand: "Foot exercise with a resistance band in physiotherapy",
    },
    masok: { eyebrow: "Project visits", title: "Impressions from Serbia" },
    projects: { eyebrow: "On site", title: "Impressions from our projects" },
  },

  /** The three region job pages the Jobs cards lead to. */
  /** A single job listing (the listing text itself is in German). */
  jobListing: {
    eyebrow: "Job opening",
    published: "Published",
    contact: "Your contact",
    back: "All openings in Germany",
    note: "This listing is in German.",
    applyTitle: "Apply for this position",
    applyBody: "Send us your details and a short message about yourself. We will get back to you personally.",
    jobError: "Please fill in your first name, last name, a valid email address, and a short message.",
  },

  jobRegions: {
    back: "All job boards",
    germany: {
      meta: {
        title: "Jobs in Germany",
        description:
          "Career in Germany: current job openings at German hospitals and personal support from application, recognition, and visa to a successful start.",
      },
      openings: {
        eyebrow: "Current openings",
        title: "Job openings in Germany",
        note: "Listings in German",
        ref: "Ref.",
        view: "View listing",
        all: "All listings",
      },
    },
    serbia: {
      meta: { title: "Jobs in Serbia", description: "Job openings connected to SBP Management's projects in Serbia." },
      eyebrow: "Jobs · Serbia",
      title: "Jobs in Serbia",
      lead: "Openings connected to our projects in Serbia.",
      project: { label: "MASOK Akademija | Serbia", link: "masok" },
    },
    kazakhstan: {
      meta: {
        title: "Jobs in Kazakhstan & Central Asia",
        description: "Job openings connected to the German-Kazakh Health Initiative.",
      },
      eyebrow: "Jobs · Kazakhstan & Central Asia",
      title: "Jobs in Kazakhstan & Central Asia",
      lead: "Openings connected to the German-Kazakh Health Initiative.",
      project: { label: "Healthcare Academy Kazakhstan", link: "kazakhstan" },
    },
    empty: {
      title: "No openings published at the moment",
      body: "There are currently no published openings for this region. Get in touch to send an unsolicited application or to ask about upcoming opportunities.",
      contact: "Get in touch",
      project: "About the project",
    },
  },

  /** Candidate support on the Jobs page (brief section 13). */
  candidateSupport: {
    eyebrow: "Your career in Germany",
    title: "Personal support from application to a successful start",
    body: "Are you working in the medical field and would like to shape your professional future in Germany? SBP Management guides international professionals individually and transparently through the necessary steps.",
    listTitle: "We support you with",
    items: [
      "German language courses and linguistic preparation",
      "Visa and entry",
      "Recognition of foreign professional qualifications",
      "Recognition of additional qualifications and further training",
      "Family reunification",
      "Finding accommodation and initial administrative steps",
      "Salary classification and consideration of professional experience, where applicable",
      "Preparation, onboarding, and integration in German hospitals",
    ],
    apply: "Apply now",
  },
} as const;
