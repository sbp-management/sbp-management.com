import type { Locale } from "@/i18n/config";
import type { JobLevel, JobProfession } from "./types";

/** Shared sentences of every job listing, per language; {placeholders} are filled in job-text.ts. */
export type JobTemplates = {
  /** Opening sentence: {city}, {role}, {area}; separate wording for a hospital vs. an outpatient practice/MVZ. */
  intro: { hospital: string; practice: string };
  /** How the position is named in the opening sentence, per level. */
  role: Record<JobLevel, string>;
  /** Direct employment, no agency; separate wording for a hospital vs. an outpatient practice/MVZ. */
  direct: { hospital: string; practice: string };
  tasksTitle: string;
  profileTitle: string;
  supportTitle: string;
  ctaTitle: string;
  cta: string;
  /** Tasks per level: {area} and, for residents, {req} (the training goal). */
  tasks: Record<JobLevel, string[]>;
  /** Profile lines: AA = residents' first line; licence/language = per profession; common = every job. */
  profile: {
    AA: string[];
    common: string[];
    licence: Record<JobProfession, string>;
    language: Record<JobProfession, string>;
  };
  /** Support lines: the first (licence-specific advice) varies by profession, the rest are shared. */
  support: { licence: Record<JobProfession, string>; common: string[] };
  /** Search result description: {title}, {city}; separate wording for a hospital vs. an outpatient practice/MVZ. */
  meta: { hospital: string; practice: string };
  /** Town as used in the opening sentence. */
  city: Record<string, string>;
  /** Town in titles and lists. */
  cityName: Record<string, string>;
  /** Title with town: {title}, {city}. */
  titleWithCity: string;
  /** State/region name as used in the opening sentence, keyed by the English name stored on the job. */
  region: Record<string, string>;
};

export const jobTemplates: Record<Locale, JobTemplates> = {
  de: {
    intro: {
      hospital: "Für eine Klinik in {city}{region} suchen wir {role} {area}.",
      practice: "Für eine ambulante Praxis in {city}{region} suchen wir {role} {area}.",
    },
    role: {
      OA: "eine Oberärztin oder einen Oberarzt (m/w/d)",
      LOA: "eine Leitende Oberärztin oder einen Leitenden Oberarzt (m/w/d)",
      FA: "eine Fachärztin oder einen Facharzt (m/w/d)",
      AA: "eine Assistenzärztin oder einen Assistenzarzt (m/w/d)",
      PF: "eine Pflegefachkraft (m/w/d)",
      HEB: "eine Hebamme (m/w/d)",
    },
    direct: {
      hospital: "Keine Zeitarbeits- oder Leasingfirma! Sie schließen den Arbeitsvertrag direkt mit der Klinik.",
      practice: "Keine Zeitarbeits- oder Leasingfirma! Sie schließen den Arbeitsvertrag direkt mit der Praxis.",
    },
    tasksTitle: "Ihre Aufgaben",
    profileTitle: "Ihr Profil",
    supportTitle: "So begleiten wir Sie",
    ctaTitle:
      "Erhalten Sie heute noch Ihren Termin für ein unverbindliches Kennenlernen",
    cta: "Falls Sie Interesse an diesem Angebot haben, treten Sie gerne mit uns in Kontakt. Alle Leistungen von SBP sind für Sie kostenlos. Lassen Sie sich jetzt von unserem Experten-Team beraten.",
    tasks: {
      OA: [
        "Oberärztliche Verantwortung {area}",
        "Anleitung und Weiterbildung der Assistenzärztinnen und -ärzte",
        "Enge Zusammenarbeit mit Pflege und den anderen Fachbereichen",
      ],
      LOA: [
        "Leitende oberärztliche Verantwortung {area} und Vertretung der Chefärztin oder des Chefarztes",
        "Anleitung und Weiterbildung der Assistenzärztinnen und -ärzte",
        "Enge Zusammenarbeit mit Pflege und den anderen Fachbereichen",
      ],
      FA: [
        "Fachärztliche Betreuung der Patientinnen und Patienten {area}",
        "Anleitung der Assistenzärztinnen und -ärzte",
        "Enge Zusammenarbeit mit Pflege und den anderen Fachbereichen",
      ],
      AA: [
        "Ärztliche Betreuung der Patientinnen und Patienten {area} unter fachärztlicher Anleitung",
        "{req}",
        "Enge Zusammenarbeit mit Pflege und den anderen Fachbereichen",
      ],
      PF: [
        "Pflegerische Versorgung der Patientinnen und Patienten {area}",
        "Durchführung ärztlich angeordneter Maßnahmen und sorgfältige Dokumentation",
        "Enge Zusammenarbeit mit dem ärztlichen Team und den anderen Berufsgruppen",
      ],
      HEB: [
        "Geburtshilfliche Betreuung und Begleitung der Patientinnen {area}",
        "Beratung und Begleitung rund um Geburtsvorbereitung und Wochenbett",
        "Enge Zusammenarbeit mit dem ärztlichen Team und den anderen Berufsgruppen",
      ],
    },
    profile: {
      AA: ["Abgeschlossenes Medizinstudium"],
      licence: {
        physician: "Approbation als Ärztin oder Arzt in Deutschland – oder die Bereitschaft, sie zu erwerben (wir begleiten Sie dabei)",
        nurse: "Anerkennung als Pflegefachkraft in Deutschland – oder die Bereitschaft, sie zu erwerben (wir begleiten Sie dabei)",
        midwife: "Berufszulassung als Hebamme in Deutschland – oder die Bereitschaft, sie zu erwerben (wir begleiten Sie dabei)",
      },
      language: {
        physician: "Allgemeine Deutschkenntnisse (in der Regel B2) und die Fachsprachprüfung auf Niveau C1",
        nurse: "Deutschkenntnisse auf Niveau B2",
        midwife: "Deutschkenntnisse auf Niveau B2",
      },
      common: [
        "Teamfähigkeit, Verantwortungsbewusstsein und Engagement",
      ],
    },
    support: {
      licence: {
        physician: "Beratung zu Approbation, Fachsprach- und Kenntnisprüfung",
        nurse: "Beratung zur Anerkennung als Pflegefachkraft und zur Fachsprachprüfung",
        midwife: "Beratung zur Berufszulassung als Hebamme und zur Fachsprachprüfung",
      },
      common: [
        "Unterstützung bei Visum und Aufenthaltstitel",
        "Begleitung beim Umzug und Ankommen in der Region",
      ],
    },
    meta: {
      hospital: "{title} in {city}: Direktanstellung, keine Zeitarbeit. Kostenlose Begleitung bei der Anerkennung, Visum und Umzug. Jetzt bewerben.",
      practice: "{title} in {city}: Direktanstellung in einer ambulanten Praxis, keine Zeitarbeit. Kostenlose Begleitung bei der Anerkennung, Visum und Umzug. Jetzt bewerben.",
    },
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Heppenheim",
      "Frankfurt am Main": "Frankfurt am Main",
      Korbach: "Korbach",
    },
    titleWithCity: "{title} in {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Heppenheim",
      "Frankfurt am Main": "Frankfurt am Main",
      Korbach: "Korbach",
    },
    region: {
      "Baden-Württemberg": "Baden-Württemberg",
      "Berlin": "Berlin",
      "Brandenburg": "Brandenburg",
      "Hesse": "Hessen",
    },
  },
  en: {
    intro: {
      hospital: "For a hospital in {city}{region}, we are looking for {role} {area}.",
      practice: "For an outpatient practice in {city}{region}, we are looking for {role} {area}.",
    },
    role: {
      OA: "a senior physician (m/f/d)",
      LOA: "a senior consultant (m/f/d)",
      FA: "a specialist (m/f/d)",
      AA: "a resident physician (m/f/d)",
      PF: "a registered nurse (m/f/d)",
      HEB: "a midwife (m/f/d)",
    },
    direct: {
      hospital: "No temporary staffing or leasing agency! You sign your employment contract directly with the hospital.",
      practice: "No temporary staffing or leasing agency! You sign your employment contract directly with the practice.",
    },
    tasksTitle: "Your tasks",
    profileTitle: "Your profile",
    supportTitle: "How we support you",
    ctaTitle: "Book a no-obligation introductory call today",
    cta: "If you are interested in this position, please get in touch. All of SBP's services are free of charge for you. Talk to our team of experts now.",
    tasks: {
      OA: [
        "Senior physician responsibility {area}",
        "Supervising and training resident physicians",
        "Close cooperation with nursing and the other departments",
      ],
      LOA: [
        "Leading senior physician responsibility {area} and deputising for the head of department",
        "Supervising and training resident physicians",
        "Close cooperation with nursing and the other departments",
      ],
      FA: [
        "Specialist care of patients {area}",
        "Supervising resident physicians",
        "Close cooperation with nursing and the other departments",
      ],
      AA: [
        "Medical care of patients {area} under specialist supervision",
        "{req}",
        "Close cooperation with nursing and the other departments",
      ],
      PF: [
        "Nursing care of patients {area}",
        "Carrying out physician-ordered measures and careful documentation",
        "Close cooperation with the medical team and other professional groups",
      ],
      HEB: [
        "Midwifery care and support for patients {area}",
        "Counselling and support around birth preparation and postpartum care",
        "Close cooperation with the medical team and other professional groups",
      ],
    },
    profile: {
      AA: ["Completed medical degree"],
      licence: {
        physician: "Medical licence (Approbation) in Germany – or the willingness to obtain it (we support you)",
        nurse: "Recognition as a registered nurse in Germany – or the willingness to obtain it (we support you)",
        midwife: "Professional licence as a midwife in Germany – or the willingness to obtain it (we support you)",
      },
      language: {
        physician: "General German (usually B2) and the medical language exam at C1",
        nurse: "German at level B2",
        midwife: "German at level B2",
      },
      common: [
        "Team spirit, sense of responsibility and commitment",
      ],
    },
    support: {
      licence: {
        physician: "Advice on the medical licence (Approbation), medical language exam and knowledge test",
        nurse: "Advice on recognition as a registered nurse and the medical language exam",
        midwife: "Advice on the midwife professional licence and the medical language exam",
      },
      common: [
        "Support with visa and residence permit",
        "Help with relocation and settling into the region",
      ],
    },
    meta: {
      hospital: "{title} in {city}, Germany: hired directly by the hospital, no agency. Free help with professional recognition, visa and relocation.",
      practice: "{title} in {city}, Germany: hired directly by the practice, no agency. Free help with professional recognition, visa and relocation.",
    },
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Heppenheim",
      "Frankfurt am Main": "Frankfurt am Main",
      Korbach: "Korbach",
    },
    titleWithCity: "{title} in {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Heppenheim",
      "Frankfurt am Main": "Frankfurt am Main",
      Korbach: "Korbach",
    },
    region: {
      "Baden-Württemberg": "Baden-Württemberg",
      "Berlin": "Berlin",
      "Brandenburg": "Brandenburg",
      "Hesse": "Hesse",
    },
  },
  ru: {
    intro: {
      hospital: "Для клиники в городе {city}{region} мы ищем {role} для работы {area}.",
      practice: "Для амбулаторной практики в городе {city}{region} мы ищем {role} для работы {area}.",
    },
    role: {
      OA: "старшего врача (Oberarzt, м/ж/д)",
      LOA: "ведущего старшего врача (Leitender Oberarzt, м/ж/д)",
      FA: "врача-специалиста (Facharzt, м/ж/д)",
      AA: "врача-ассистента (Assistenzarzt, м/ж/д)",
      PF: "медицинскую сестру / медицинского брата (Pflegefachkraft, м/ж/д)",
      HEB: "акушерку (Hebamme, м/ж/д)",
    },
    direct: {
      hospital: "Никакой временной занятости или лизинга персонала! Трудовой договор вы заключаете напрямую с клиникой.",
      practice: "Никакой временной занятости или лизинга персонала! Трудовой договор вы заключаете напрямую с практикой.",
    },
    tasksTitle: "Ваши задачи",
    profileTitle: "Ваш профиль",
    supportTitle: "Как мы вас сопровождаем",
    ctaTitle:
      "Договоритесь уже сегодня о знакомстве без каких-либо обязательств",
    cta: "Если вас заинтересовала эта вакансия, свяжитесь с нами. Все услуги SBP для вас бесплатны. Получите консультацию нашей команды экспертов прямо сейчас.",
    tasks: {
      OA: [
        "Ответственность старшего врача {area}",
        "Руководство и обучение врачей-ассистентов",
        "Тесное взаимодействие с сестринским персоналом и другими отделениями",
      ],
      LOA: [
        "Ответственность ведущего старшего врача {area} и замещение заведующего отделением (Chefarzt)",
        "Руководство и обучение врачей-ассистентов",
        "Тесное взаимодействие с сестринским персоналом и другими отделениями",
      ],
      FA: [
        "Специализированная врачебная помощь пациентам {area}",
        "Руководство врачами-ассистентами",
        "Тесное взаимодействие с сестринским персоналом и другими отделениями",
      ],
      AA: [
        "Лечение пациентов {area} под руководством врача-специалиста",
        "{req}",
        "Тесное взаимодействие с сестринским персоналом и другими отделениями",
      ],
      PF: [
        "Сестринский уход за пациентами {area}",
        "Выполнение назначений врача и тщательное документирование",
        "Тесное взаимодействие с врачебной командой и другими специалистами",
      ],
      HEB: [
        "Акушерский уход и сопровождение пациенток {area}",
        "Консультирование и сопровождение при подготовке к родам и в послеродовой период",
        "Тесное взаимодействие с врачебной командой и другими специалистами",
      ],
    },
    profile: {
      AA: ["Законченное высшее медицинское образование"],
      licence: {
        physician: "Апробация (Approbation) для работы врачом в Германии – или готовность ее получить (мы поможем вам в этом)",
        nurse: "Признание квалификации медицинской сестры/медбрата в Германии – или готовность ее получить (мы поможем вам в этом)",
        midwife: "Допуск к профессии акушерки в Германии – или готовность его получить (мы поможем вам в этом)",
      },
      language: {
        physician: "Общее знание немецкого языка (как правило, B2) и экзамен по профессиональному языку на уровне C1",
        nurse: "Знание немецкого языка на уровне B2",
        midwife: "Знание немецкого языка на уровне B2",
      },
      common: [
        "Умение работать в команде, ответственность и инициативность",
      ],
    },
    support: {
      licence: {
        physician: "Консультации по апробации (Approbation), экзамену по профессиональному языку (Fachsprachprüfung) и экзамену на знание медицины (Kenntnisprüfung)",
        nurse: "Консультации по признанию квалификации медицинской сестры/медбрата и экзамену по профессиональному языку (Fachsprachprüfung)",
        midwife: "Консультации по допуску к профессии акушерки и экзамену по профессиональному языку (Fachsprachprüfung)",
      },
      common: [
        "Помощь с визой и видом на жительство",
        "Сопровождение при переезде и обустройстве в регионе",
      ],
    },
    meta: {
      hospital: "{title}, {city}: договор напрямую с клиникой. Бесплатная помощь с признанием квалификации, визой и переездом.",
      practice: "{title}, {city}: договор напрямую с практикой. Бесплатная помощь с признанием квалификации, визой и переездом.",
    },
    city: {
      Balingen: "Балинген",
      Albstadt: "Альбштадт",
      Berlin: "Берлин",
      Heppenheim: "Хеппенхайм",
      "Frankfurt am Main": "Франкфурт-на-Майне",
      Korbach: "Корбах",
    },
    titleWithCity: "{title}, {city}",
    cityName: {
      Balingen: "Балинген",
      Albstadt: "Альбштадт",
      Berlin: "Берлин",
      Heppenheim: "Хеппенхайм",
      "Frankfurt am Main": "Франкфурт-на-Майне",
      Korbach: "Корбах",
    },
    region: {
      "Baden-Württemberg": "земля Баден-Вюртемберг",
      "Berlin": "Берлин",
      "Brandenburg": "земля Бранденбург",
      "Hesse": "земля Гессен",
    },
  },
  sr: {
    intro: {
      hospital: "Za kliniku u gradu {city}{region} tražimo {role} {area}.",
      practice: "Za ambulantnu praksu u gradu {city}{region} tražimo {role} {area}.",
    },
    role: {
      OA: "starijeg lekara (Oberarzt, m/ž/d)",
      LOA: "vodećeg starijeg lekara (Leitender Oberarzt, m/ž/d)",
      FA: "lekara specijalistu (Facharzt, m/ž/d)",
      AA: "lekara na specijalizaciji (Assistenzarzt, m/ž/d)",
      PF: "medicinsku sestru / medicinskog tehničara (Pflegefachkraft, m/ž/d)",
      HEB: "babicu (Hebamme, m/ž/d)",
    },
    direct: {
      hospital: "Ne radi se o agenciji za privremeno zapošljavanje ili ustupanje radnika! Ugovor o radu potpisujete direktno sa klinikom.",
      practice: "Ne radi se o agenciji za privremeno zapošljavanje ili ustupanje radnika! Ugovor o radu potpisujete direktno sa praksom.",
    },
    tasksTitle: "Vaši zadaci",
    profileTitle: "Vaš profil",
    supportTitle: "Kako vas podržavamo",
    ctaTitle: "Zakažite još danas termin za neobavezan razgovor i upoznavanje",
    cta: "Ako vas zanima ova ponuda, slobodno nam se javite. Sve usluge SBP-a su za vas besplatne. Posavetujte se sada sa našim timom stručnjaka.",
    tasks: {
      OA: [
        "Odgovornost starijeg lekara {area}",
        "Vođenje i edukacija lekara na specijalizaciji",
        "Bliska saradnja sa medicinskim sestrama i tehničarima i drugim specijalnostima",
      ],
      LOA: [
        "Rukovodeća odgovornost starijeg lekara {area} i zamena šefa odeljenja (Chefarzt)",
        "Vođenje i edukacija lekara na specijalizaciji",
        "Bliska saradnja sa medicinskim sestrama i tehničarima i drugim specijalnostima",
      ],
      FA: [
        "Specijalističko lečenje pacijenata {area}",
        "Vođenje lekara na specijalizaciji",
        "Bliska saradnja sa medicinskim sestrama i tehničarima i drugim specijalnostima",
      ],
      AA: [
        "Lečenje pacijenata {area} pod nadzorom specijaliste",
        "{req}",
        "Bliska saradnja sa medicinskim sestrama i tehničarima i drugim specijalnostima",
      ],
      PF: [
        "Negu pacijenata {area}",
        "Sprovođenje lekarskih naloga i savesno vođenje dokumentacije",
        "Blisku saradnju sa lekarskim timom i drugim stručnim profilima",
      ],
      HEB: [
        "Akušersku negu i podršku pacijentkinjama {area}",
        "Savetovanje i podršku u pripremi za porođaj i tokom babinja",
        "Blisku saradnju sa lekarskim timom i drugim stručnim profilima",
      ],
    },
    profile: {
      AA: ["Završen medicinski fakultet"],
      licence: {
        physician: "Aprobacija (Approbation) za rad kao lekar u Nemačkoj – ili spremnost da je steknete (u tome vas pratimo)",
        nurse: "Priznavanje kvalifikacije medicinske sestre/tehničara u Nemačkoj – ili spremnost da je steknete (u tome vas pratimo)",
        midwife: "Dozvola za rad kao babica u Nemačkoj – ili spremnost da je steknete (u tome vas pratimo)",
      },
      language: {
        physician: "Opšte znanje nemačkog jezika (obično B2) i stručni jezički ispit na nivou C1",
        nurse: "Znanje nemačkog jezika na nivou B2",
        midwife: "Znanje nemačkog jezika na nivou B2",
      },
      common: [
        "Timski duh, odgovornost i posvećenost",
      ],
    },
    support: {
      licence: {
        physician: "Savetovanje o aprobaciji (Approbation), stručnom jezičkom ispitu (Fachsprachprüfung) i ispitu znanja (Kenntnisprüfung)",
        nurse: "Savetovanje o priznavanju kvalifikacije medicinske sestre/tehničara i stručnom jezičkom ispitu (Fachsprachprüfung)",
        midwife: "Savetovanje o dozvoli za rad kao babica i stručnom jezičkom ispitu (Fachsprachprüfung)",
      },
      common: [
        "Podrška pri dobijanju vize i boravišne dozvole",
        "Pomoć pri preseljenju i snalaženju u regionu",
      ],
    },
    meta: {
      hospital: "{title}, {city}: direktno u klinici, bez agencije. Besplatna pomoć oko priznavanja kvalifikacije, vize i selidbe.",
      practice: "{title}, {city}: direktno u praksi, bez agencije. Besplatna pomoć oko priznavanja kvalifikacije, vize i selidbe.",
    },
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Hepenhajm",
      "Frankfurt am Main": "Frankfurt na Majni",
      Korbach: "Korbah",
    },
    titleWithCity: "{title}, {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
      Berlin: "Berlin",
      Heppenheim: "Hepenhajm",
      "Frankfurt am Main": "Frankfurt na Majni",
      Korbach: "Korbah",
    },
    region: {
      "Baden-Württemberg": "Baden-Virtemberg",
      "Berlin": "Berlin",
      "Brandenburg": "Brandenburg",
      "Hesse": "Hesen",
    },
  },
};
