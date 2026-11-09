import type { Locale } from "@/i18n/config";
import type { JobLevel } from "./types";

/** Shared sentences of every job listing, per language; {placeholders} are filled in job-text.ts. */
export type JobTemplates = {
  /** Opening sentence: {city}, {role}, {area}. */
  intro: string;
  /** How the position is named in the opening sentence, per level. */
  role: Record<JobLevel, string>;
  /** Direct employment with the hospital, no agency. */
  direct: string;
  tasksTitle: string;
  profileTitle: string;
  supportTitle: string;
  ctaTitle: string;
  cta: string;
  /** Tasks per level: {area} and, for residents, {req} (the training goal). */
  tasks: Record<JobLevel, string[]>;
  /** Profile lines: AA = residents' first line; common = every job. */
  profile: { AA: string[]; common: string[] };
  support: string[];
  /** Search result description: {title}, {city}. */
  meta: string;
  /** Town as used in the opening sentence. */
  city: Record<string, string>;
  /** Town in titles and lists. */
  cityName: Record<string, string>;
  /** Title with town: {title}, {city}. */
  titleWithCity: string;
};

export const jobTemplates: Record<Locale, JobTemplates> = {
  de: {
    intro:
      "Für eine Klinik in {city} (Baden-Württemberg) suchen wir {role} {area}.",
    role: {
      OA: "eine Oberärztin oder einen Oberarzt (m/w/d)",
      LOA: "eine Leitende Oberärztin oder einen Leitenden Oberarzt (m/w/d)",
      FA: "eine Fachärztin oder einen Facharzt (m/w/d)",
      AA: "eine Assistenzärztin oder einen Assistenzarzt (m/w/d)",
    },
    direct:
      "Keine Zeitarbeits- oder Leasingfirma! Sie schließen den Arbeitsvertrag direkt mit der Klinik.",
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
    },
    profile: {
      AA: ["Abgeschlossenes Medizinstudium"],
      common: [
        "Approbation als Ärztin oder Arzt in Deutschland – oder die Bereitschaft, sie zu erwerben (wir begleiten Sie dabei)",
        "Sehr gute Deutschkenntnisse (C1)",
        "Teamfähigkeit, Verantwortungsbewusstsein und Engagement",
      ],
    },
    support: [
      "Beratung zu Approbation, Fachsprach- und Kenntnisprüfung",
      "Unterstützung bei Visum und Aufenthaltstitel",
      "Begleitung beim Umzug und Ankommen in der Region",
    ],
    meta: "{title} in {city}: Direktanstellung, keine Zeitarbeit. Kostenlose Begleitung bei Approbation, Visum und Umzug. Jetzt bewerben.",
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
    titleWithCity: "{title} in {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
  },
  en: {
    intro:
      "For a hospital in {city} (Baden-Württemberg), we are looking for {role} {area}.",
    role: {
      OA: "a senior physician (m/f/d)",
      LOA: "a senior consultant (m/f/d)",
      FA: "a specialist (m/f/d)",
      AA: "a resident physician (m/f/d)",
    },
    direct:
      "No temporary staffing or leasing agency! You sign your employment contract directly with the hospital.",
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
    },
    profile: {
      AA: ["Completed medical degree"],
      common: [
        "Medical licence (Approbation) in Germany – or the willingness to obtain it (we support you)",
        "Very good German (C1)",
        "Team spirit, sense of responsibility and commitment",
      ],
    },
    support: [
      "Advice on the medical licence (Approbation), medical language exam and knowledge test",
      "Support with visa and residence permit",
      "Help with relocation and settling into the region",
    ],
    meta: "{title} in {city}, Germany: hired directly by the hospital, no agency. Free help with medical licence, visa and relocation.",
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
    titleWithCity: "{title} in {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
  },
  ru: {
    intro:
      "Для клиники в городе {city} (земля Баден-Вюртемберг) мы ищем {role} для работы {area}.",
    role: {
      OA: "старшего врача (Oberarzt, м/ж/д)",
      LOA: "ведущего старшего врача (Leitender Oberarzt, м/ж/д)",
      FA: "врача-специалиста (Facharzt, м/ж/д)",
      AA: "врача-ассистента (Assistenzarzt, м/ж/д)",
    },
    direct:
      "Никакой временной занятости или лизинга персонала! Трудовой договор вы заключаете напрямую с клиникой.",
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
    },
    profile: {
      AA: ["Законченное высшее медицинское образование"],
      common: [
        "Апробация (Approbation) для работы врачом в Германии – или готовность ее получить (мы поможем вам в этом)",
        "Очень хорошее знание немецкого языка (C1)",
        "Умение работать в команде, ответственность и инициативность",
      ],
    },
    support: [
      "Консультации по апробации (Approbation), экзамену по профессиональному языку (Fachsprachprüfung) и экзамену на знание медицины (Kenntnisprüfung)",
      "Помощь с визой и видом на жительство",
      "Сопровождение при переезде и обустройстве в регионе",
    ],
    meta: "{title}, {city}: договор напрямую с клиникой. Бесплатная помощь с апробацией, визой и переездом.",
    city: {
      Balingen: "Балинген",
      Albstadt: "Альбштадт",
    },
    titleWithCity: "{title}, {city}",
    cityName: {
      Balingen: "Балинген",
      Albstadt: "Альбштадт",
    },
  },
  sr: {
    intro:
      "Za kliniku u gradu {city} (Baden-Virtemberg) tražimo {role} {area}.",
    role: {
      OA: "starijeg lekara (Oberarzt, m/ž/d)",
      LOA: "vodećeg starijeg lekara (Leitender Oberarzt, m/ž/d)",
      FA: "lekara specijalistu (Facharzt, m/ž/d)",
      AA: "lekara na specijalizaciji (Assistenzarzt, m/ž/d)",
    },
    direct:
      "Ne radi se o agenciji za privremeno zapošljavanje ili ustupanje radnika! Ugovor o radu potpisujete direktno sa klinikom.",
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
    },
    profile: {
      AA: ["Završen medicinski fakultet"],
      common: [
        "Aprobacija (Approbation) za rad kao lekar u Nemačkoj – ili spremnost da je steknete (u tome vas pratimo)",
        "Veoma dobro znanje nemačkog jezika (C1)",
        "Timski duh, odgovornost i posvećenost",
      ],
    },
    support: [
      "Savetovanje o aprobaciji (Approbation), stručnom jezičkom ispitu (Fachsprachprüfung) i ispitu znanja (Kenntnisprüfung)",
      "Podrška pri dobijanju vize i boravišne dozvole",
      "Pomoć pri preseljenju i snalaženju u regionu",
    ],
    meta: "{title}, {city}: direktno u klinici, bez agencije. Besplatna pomoć oko aprobacije, vize i selidbe.",
    city: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
    titleWithCity: "{title}, {city}",
    cityName: {
      Balingen: "Balingen",
      Albstadt: "Albstadt",
    },
  },
};
