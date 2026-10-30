/**
 * Profession pages under Jobs in Deutschland (/jobs/deutschland/...): one page per profession, written
 * for people abroad who search for work in German healthcare. Facts (recognition, language levels, visa
 * routes) checked against state authority guidance in October 2026; they are kept general where the
 * rules differ by federal state. Needs the client's approval.
 */
export const deCareers = {
  careerPage: {
    eyebrow: "Arbeiten in Deutschland",
    requirements: "Das brauchen Sie",
    steps: "Ihr Weg nach Deutschland",
    faq: "Häufige Fragen",
    openings: {
      title: "Offene Stellen",
      none: "Gerade ist in diesem Bereich keine Stelle ausgeschrieben. Bewerben Sie sich trotzdem – wir melden uns, sobald eine passende Stelle frei wird.",
      view: "Stelle ansehen",
    },
    others: "Weitere Berufe",
    more: "Mehr erfahren",
    apply: "Jetzt bewerben",
    /** Shown under the requirements: the rules are set by the federal states. */
    note: "Zuständig für die Anerkennung ist die Behörde des Bundeslandes, in dem Sie arbeiten werden; Details können je nach Bundesland abweichen. Verbindlich entscheidet die zuständige Stelle.",
    /** Breadcrumb trail (structured data for search engines). */
    crumbs: {
      home: "Startseite",
      jobs: "Jobs",
      germany: "Jobs in Deutschland",
    },
    /** Section on the Jobs in Deutschland page that links to the profession pages. */
    overview: {
      eyebrow: "Berufe",
      title: "Ihr Beruf – Ihr Weg nach Deutschland",
      body: "Anerkennung, Sprache und Visum unterscheiden sich je nach Beruf. Hier finden Sie, was für Ihren Beruf gilt.",
    },
  },

  careerNursesPage: {
    meta: {
      title: "Pflegefachkraft in Deutschland: Anerkennung, Visum, Jobs",
      description:
        "Als Pflegefachkraft in Deutschland arbeiten: Anerkennung Ihrer Pflegeausbildung, Deutsch auf B2, Visum und offene Stellen in Kliniken – persönlich begleitet von SBP Management.",
    },
    card: {
      title: "Pflegefachkräfte",
      body: "Anerkennung Ihrer Pflegeausbildung, Deutsch auf B2 und der Weg in eine deutsche Klinik.",
    },
    title: "Als Pflegefachkraft in Deutschland arbeiten",
    lead: "Deutsche Kliniken suchen Pflegefachkräfte aus dem Ausland. Wir begleiten Sie von der Anerkennung Ihrer Ausbildung über Sprache und Visum bis zum ersten Arbeitstag.",
    body: [
      "Ob Intensivstation, Pädiatrie, Neonatologie oder Normalstation: Mit einer anerkannten Pflegeausbildung haben Sie in Deutschland sehr gute Chancen. Wir bringen Sie mit Kliniken zusammen, die zu Ihrer Erfahrung passen.",
    ],
    requirements: [
      "Abgeschlossene Pflegeausbildung oder ein Pflegestudium",
      "Deutsch auf Niveau B2 für die Anerkennung – zum Start über eine Anerkennungspartnerschaft genügt zunächst A2",
      "Gesundheitliche Eignung und ein Führungszeugnis",
      "Bereitschaft, fehlende Inhalte über einen Anpassungslehrgang oder eine Kenntnisprüfung auszugleichen",
    ],
    steps: [
      {
        title: "Kennenlernen",
        body: "Wir sprechen über Ihre Ausbildung, Erfahrung und Ziele und prüfen Ihre Unterlagen.",
      },
      {
        title: "Anerkennung und Sprache",
        body: "Wir bereiten den Anerkennungsantrag mit Ihnen vor und vermitteln Deutschkurse bis B2.",
      },
      {
        title: "Klinik und Visum",
        body: "Wir finden eine passende Klinik und begleiten Arbeitsvertrag und Visumsantrag.",
      },
      {
        title: "Ankommen",
        body: "Anpassungslehrgang oder Kenntnisprüfung, Wohnung, Behörden, Einarbeitung – wir bleiben an Ihrer Seite.",
      },
    ],
    sections: [
      {
        title: "Anerkennung Ihrer Pflegeausbildung",
        body: [
          "Pflegefachfrau und Pflegefachmann sind in Deutschland geschützte Berufe: Als Pflegefachkraft arbeiten Sie nach der staatlichen Anerkennung. Zuständig ist die Anerkennungsstelle des Bundeslandes, in dem Sie arbeiten werden. Sie prüft, ob Ihre Ausbildung der deutschen gleichwertig ist.",
          "Stellt die Behörde wesentliche Unterschiede fest, gleichen Sie diese über einen Anpassungslehrgang oder eine Kenntnisprüfung aus. In dieser Zeit können Sie bereits in der Pflege mitarbeiten, zum Beispiel als Pflegehilfskraft.",
        ],
      },
      {
        title: "Visum und Aufenthalt",
        body: [
          "Mit anerkannter Ausbildung und Arbeitsvertrag erhalten Pflegefachkräfte aus Ländern außerhalb der EU einen Aufenthaltstitel als Fachkraft. Ist die Anerkennung noch nicht abgeschlossen, können Sie für Anpassungsmaßnahmen nach Deutschland kommen.",
          "Seit März 2024 gibt es außerdem die Anerkennungspartnerschaft: Sie arbeiten bereits bei Ihrem Arbeitgeber, und die Anerkennung läuft parallel. Zum Start genügen dann Deutschkenntnisse auf Niveau A2. Staatsangehörige der EU brauchen kein Visum.",
        ],
      },
      {
        title: "Arbeiten und Verdienen",
        body: [
          "Pflegefachkräfte arbeiten in Kliniken auf Normal- und Intensivstationen, in Fachbereichen wie Pädiatrie oder Neonatologie und in der Langzeitpflege. Bezahlt wird meist nach Tarifvertrag, zum Beispiel nach TVöD-P.",
          "Ihr Gehalt hängt von Qualifikation, Berufserfahrung, Arbeitgeber und Region ab. Konkrete Zahlen nennen wir Ihnen im persönlichen Gespräch für die jeweilige Stelle.",
        ],
      },
    ],
    faq: [
      {
        q: "Welche Deutschkenntnisse brauche ich als Pflegefachkraft?",
        a: "Für die Anerkennung als Pflegefachkraft wird in der Regel Deutsch auf Niveau B2 verlangt. Wer über eine Anerkennungspartnerschaft nach Deutschland kommt, startet mit A2 und lernt weiter. Wir vermitteln passende Kurse, auch mit Fachsprache Pflege.",
      },
      {
        q: "Wie lange dauert die Anerkennung?",
        a: "Das hängt vom Bundesland, von Ihren Unterlagen und davon ab, ob ein Anpassungslehrgang oder eine Kenntnisprüfung nötig ist. Rechnen Sie mit mehreren Monaten. Nach der Prüfung Ihrer Unterlagen sagen wir Ihnen, womit Sie rechnen können.",
      },
      {
        q: "Kostet mich die Begleitung durch SBP Management etwas?",
        a: "Nein. Für Bewerberinnen und Bewerber ist unsere Begleitung kostenfrei; die Kosten trägt der Arbeitgeber.",
      },
      {
        q: "Kann meine Familie mitkommen?",
        a: "Fachkräfte können ihre Ehe- oder Lebenspartner und minderjährigen Kinder in der Regel nachholen. Wir erklären Ihnen die Voraussetzungen und planen den Familiennachzug mit Ihnen.",
      },
    ],
  },

  careerDoctorsPage: {
    meta: {
      title: "Arzt in Deutschland: Approbation, Fachsprachprüfung, Jobs",
      description:
        "Als Ärztin oder Arzt in Deutschland arbeiten: Approbation, Fachsprachprüfung auf C1, Kenntnisprüfung, Visum und Stellen als Assistenz- oder Facharzt – begleitet von SBP Management.",
    },
    card: {
      title: "Ärztinnen und Ärzte",
      body: "Approbation, Fachsprachprüfung und Stellen als Assistenz- oder Facharzt.",
    },
    title: "Als Ärztin oder Arzt in Deutschland arbeiten",
    lead: "Ob Assistenzärztin in der Weiterbildung oder erfahrener Facharzt: Deutsche Kliniken suchen Ärztinnen und Ärzte. Wir begleiten Sie durch Approbation, Sprachprüfung und Visum bis in Ihre neue Abteilung.",
    body: [
      "Wir kennen die Abläufe in deutschen Kliniken und bei den Behörden – und bringen Sie mit Abteilungen zusammen, die zu Ihrer Fachrichtung und Ihren Plänen passen.",
    ],
    requirements: [
      "Abgeschlossenes Medizinstudium",
      "Allgemeine Deutschkenntnisse (in der Regel B2) und die Fachsprachprüfung auf Niveau C1",
      "Nachweise über Studium, praktische Ausbildung und Berufserfahrung",
      "Gesundheitliche Eignung und ein Führungszeugnis",
    ],
    steps: [
      {
        title: "Kennenlernen",
        body: "Wir besprechen Fachrichtung, Erfahrung und Ziele und prüfen Ihre Unterlagen.",
      },
      {
        title: "Approbation beantragen",
        body: "Wir bereiten den Antrag mit Ihnen vor und vermitteln Kurse für Fachsprach- und Kenntnisprüfung.",
      },
      {
        title: "Klinik und Visum",
        body: "Wir finden eine passende Abteilung und begleiten Arbeitsvertrag und Visumsantrag.",
      },
      {
        title: "Ankommen",
        body: "Einarbeitung, Weiterbildung, Wohnung und Behörden – wir bleiben an Ihrer Seite.",
      },
    ],
    sections: [
      {
        title: "Approbation und Berufserlaubnis",
        body: [
          "Um dauerhaft als Ärztin oder Arzt zu arbeiten, brauchen Sie die Approbation. Abschlüsse aus der EU werden in der Regel automatisch anerkannt. Bei Abschlüssen aus anderen Ländern prüft die zuständige Landesbehörde die Gleichwertigkeit Ihres Studiums.",
          "Bestehen wesentliche Unterschiede, legen Sie eine Kenntnisprüfung ab. Bis zur Approbation kann eine befristete Berufserlaubnis erteilt werden, mit der Sie bereits ärztlich arbeiten.",
        ],
      },
      {
        title: "Fachsprachprüfung",
        body: [
          "Vor Approbation oder Berufserlaubnis weisen Sie medizinische Fachsprachkenntnisse auf Niveau C1 nach – in der Fachsprachprüfung, meist bei der Landesärztekammer. Geprüft werden das Gespräch mit Patientinnen und Patienten, die Dokumentation und die Verständigung im Team.",
          "Wir vermitteln Vorbereitungskurse und üben die typischen Prüfungssituationen mit Ihnen.",
        ],
      },
      {
        title: "Visum, Weiterbildung und Verdienst",
        body: [
          "Mit Approbation oder Berufserlaubnis und Arbeitsvertrag erhalten Ärztinnen und Ärzte aus Ländern außerhalb der EU einen Aufenthaltstitel als Fachkraft, häufig die Blaue Karte EU. Für die Vorbereitung auf die Kenntnisprüfung gibt es eigene Aufenthaltstitel.",
          "In der Klinik arbeiten Sie als Assistenzärztin oder -arzt in der Facharztweiterbildung oder als Fachärztin oder -arzt. Bezahlt wird meist nach Tarifvertrag, zum Beispiel nach TV-Ärzte.",
        ],
      },
    ],
    faq: [
      {
        q: "Muss ich die Approbation haben, bevor ich nach Deutschland komme?",
        a: "Nein. Sie können zur Vorbereitung auf die Kenntnisprüfung nach Deutschland kommen oder mit einer befristeten Berufserlaubnis beginnen. Welcher Weg für Sie passt, klären wir nach Prüfung Ihrer Unterlagen.",
      },
      {
        q: "Kann ich in Deutschland meinen Facharzt machen?",
        a: "Ja. Die Facharztweiterbildung findet in der Klinik statt und wird von der Landesärztekammer geregelt. Eine im Ausland erworbene Facharztbezeichnung kann gesondert anerkannt werden.",
      },
      {
        q: "Wie bereite ich mich auf Fachsprach- und Kenntnisprüfung vor?",
        a: "Es gibt spezialisierte Kurse in Präsenz und online. Wir empfehlen Ihnen passende Angebote und planen die Prüfungen mit Ihnen so, dass Sie zügig in der Klinik starten können.",
      },
      {
        q: "Kostet mich die Begleitung durch SBP Management etwas?",
        a: "Nein. Für Bewerberinnen und Bewerber ist unsere Begleitung kostenfrei; die Kosten trägt der Arbeitgeber.",
      },
    ],
  },

  careerMidwivesPage: {
    meta: {
      title: "Hebamme in Deutschland: Anerkennung, Sprache, Jobs",
      description:
        "Als Hebamme in Deutschland arbeiten: Anerkennung Ihrer Ausbildung, Deutsch auf B2, Anpassungslehrgang oder Kenntnisprüfung und Stellen im Kreißsaal – begleitet von SBP Management.",
    },
    card: {
      title: "Hebammen",
      body: "Anerkennung als Hebamme und der Weg in den Kreißsaal einer deutschen Klinik.",
    },
    title: "Als Hebamme in Deutschland arbeiten",
    lead: "Geburtskliniken in Deutschland suchen Hebammen. Wir begleiten Sie durch die Anerkennung Ihrer Ausbildung und bringen Sie in ein Team, das zu Ihnen passt.",
    body: [
      "Hebammen arbeiten in Deutschland im Kreißsaal, auf der Wochenbettstation und – nach einiger Erfahrung – auch freiberuflich in der Vor- und Nachsorge.",
    ],
    requirements: [
      "Abgeschlossene Ausbildung oder abgeschlossenes Studium als Hebamme",
      "Deutsch auf Niveau B2",
      "Gesundheitliche Eignung und ein Führungszeugnis",
      "Bereitschaft, fehlende Inhalte über einen Anpassungslehrgang oder eine Kenntnisprüfung auszugleichen",
    ],
    steps: [
      {
        title: "Kennenlernen",
        body: "Wir sprechen über Ihre Ausbildung und Erfahrung und prüfen Ihre Unterlagen.",
      },
      {
        title: "Anerkennung und Sprache",
        body: "Wir bereiten den Anerkennungsantrag mit Ihnen vor und vermitteln Deutschkurse bis B2.",
      },
      {
        title: "Klinik und Visum",
        body: "Wir finden eine passende Geburtsklinik und begleiten Arbeitsvertrag und Visumsantrag.",
      },
      {
        title: "Ankommen",
        body: "Ausgleichsmaßnahme, Einarbeitung im Kreißsaal, Wohnung und Behörden – wir bleiben an Ihrer Seite.",
      },
    ],
    sections: [
      {
        title: "Anerkennung als Hebamme",
        body: [
          "Hebamme ist in Deutschland ein geschützter Beruf: Die Berufsbezeichnung dürfen Sie nach der staatlichen Anerkennung führen. Seit 2020 wird der Beruf in Deutschland über ein Studium erlernt; ausländische Ausbildungen werden auf Gleichwertigkeit geprüft.",
          "Bestehen wesentliche Unterschiede, gleichen Sie diese über einen Anpassungslehrgang oder eine Kenntnisprüfung mit mündlichem und praktischem Teil aus. Bei Abschlüssen aus der EU gelten zum Teil andere Verfahren.",
        ],
      },
      {
        title: "Visum und Aufenthalt",
        body: [
          "Mit anerkannter Ausbildung und Arbeitsvertrag erhalten Hebammen aus Ländern außerhalb der EU einen Aufenthaltstitel als Fachkraft. Ist die Anerkennung noch nicht abgeschlossen, können Sie für Anpassungsmaßnahmen oder über eine Anerkennungspartnerschaft mit Ihrem Arbeitgeber nach Deutschland kommen.",
        ],
      },
      {
        title: "Arbeiten und Verdienen",
        body: [
          "In der Klinik arbeiten Hebammen im Schichtdienst im Kreißsaal und auf der Wochenbettstation, eng mit Ärztinnen, Ärzten und Pflege. Bezahlt wird meist nach Tarifvertrag; Ihr Gehalt hängt von Erfahrung, Arbeitgeber und Region ab.",
        ],
      },
    ],
    faq: [
      {
        q: "Welche Deutschkenntnisse brauche ich als Hebamme?",
        a: "Für die Anerkennung wird in der Regel Deutsch auf Niveau B2 verlangt. Im Kreißsaal ist sichere Kommunikation besonders wichtig – wir vermitteln Kurse, die auch die Fachsprache abdecken.",
      },
      {
        q: "Was ist der Unterschied zwischen Anpassungslehrgang und Kenntnisprüfung?",
        a: "Im Anpassungslehrgang arbeiten und lernen Sie eine festgelegte Zeit unter Anleitung und schließen mit einem Gespräch ab. Die Kenntnisprüfung prüft Ihr Wissen in einem mündlichen und einem praktischen Teil. Je nach Bescheid können Sie oft wählen.",
      },
      {
        q: "Kostet mich die Begleitung durch SBP Management etwas?",
        a: "Nein. Für Bewerberinnen und Bewerber ist unsere Begleitung kostenfrei; die Kosten trägt der Arbeitgeber.",
      },
    ],
  },

  careerMedtechPage: {
    meta: {
      title: "OTA, ATA, MTR, MTL: Arbeiten in Deutschland",
      description:
        "Als OTA, ATA, MTR oder MTL in Deutschland arbeiten: Anerkennung Ihrer Ausbildung, Deutsch auf B2, Visum und Stellen in OP, Anästhesie, Radiologie und Labor – begleitet von SBP Management.",
    },
    card: {
      title: "OP, Anästhesie, Radiologie, Labor",
      body: "Operationstechnische und anästhesietechnische Assistenz, Radiologie und Labor (OTA, ATA, MTR, MTL).",
    },
    title:
      "Medizinisch-technische Berufe in Deutschland: OTA, ATA, MTR und MTL",
    lead: "Im OP, in der Anästhesie, in der Radiologie und im Labor werden Fachkräfte aus dem Ausland gebraucht. Wir zeigen Ihnen, welcher Weg für Ihren Abschluss passt, und begleiten Sie bis in Ihr neues Team.",
    body: [
      "Die Berufe heißen in Deutschland: Operationstechnische Assistenz (OTA), Anästhesietechnische Assistenz (ATA), Medizinische Technologin oder Technologe für Radiologie (MTR, früher MTRA) und für Laboratoriumsanalytik (MTL).",
    ],
    requirements: [
      "Abgeschlossene Ausbildung oder abgeschlossenes Studium in OP, Anästhesie, Radiologie oder Labor",
      "Deutsch auf Niveau B2",
      "Gesundheitliche Eignung und ein Führungszeugnis",
      "Bereitschaft, fehlende Inhalte über einen Anpassungslehrgang oder eine Kenntnisprüfung auszugleichen",
    ],
    steps: [
      {
        title: "Kennenlernen",
        body: "Wir prüfen Ihren Abschluss und klären, welchem deutschen Beruf er entspricht.",
      },
      {
        title: "Anerkennung und Sprache",
        body: "Wir bereiten den Anerkennungsantrag mit Ihnen vor und vermitteln Deutschkurse bis B2.",
      },
      {
        title: "Klinik und Visum",
        body: "Wir finden eine passende Klinik und begleiten Arbeitsvertrag und Visumsantrag.",
      },
      {
        title: "Ankommen",
        body: "Ausgleichsmaßnahme, Einarbeitung, Wohnung und Behörden – wir bleiben an Ihrer Seite.",
      },
    ],
    sections: [
      {
        title: "Anerkennung Ihres Abschlusses",
        body: [
          "OTA, ATA, MTR und MTL sind in Deutschland gesetzlich geregelte Berufe: Sie arbeiten darin nach der staatlichen Anerkennung. Die zuständige Behörde prüft, ob Ihre Ausbildung gleichwertig ist; Unterschiede gleichen Sie über einen Anpassungslehrgang oder eine Kenntnisprüfung aus.",
          "Viele Fachkräfte aus dem Ausland haben als Pflegekraft im OP oder in der Anästhesie gearbeitet. Für sie kann auch die Anerkennung als Pflegefachkraft mit anschließender Fachweiterbildung der passende Weg sein – wir beraten Sie dazu.",
        ],
      },
      {
        title: "Visum und Aufenthalt",
        body: [
          "Mit anerkannter Ausbildung und Arbeitsvertrag erhalten Fachkräfte aus Ländern außerhalb der EU einen Aufenthaltstitel als Fachkraft. Ist die Anerkennung noch nicht abgeschlossen, können Sie für Anpassungsmaßnahmen oder über eine Anerkennungspartnerschaft mit Ihrem Arbeitgeber nach Deutschland kommen.",
        ],
      },
      {
        title: "Arbeiten und Verdienen",
        body: [
          "Sie arbeiten im OP-Team, in der Anästhesie, in der radiologischen Diagnostik oder im Kliniklabor. Bezahlt wird meist nach Tarifvertrag; Ihr Gehalt hängt von Qualifikation, Erfahrung und Region ab.",
        ],
      },
    ],
    faq: [
      {
        q: "Mein Beruf heißt in meinem Land anders. Welcher deutsche Beruf passt?",
        a: "Das klären wir anhand Ihrer Ausbildungsinhalte. Oft passen mehrere Wege – zum Beispiel OTA oder Pflegefachkraft mit OP-Weiterbildung. Wir empfehlen den Weg mit den besten Aussichten auf eine zügige Anerkennung.",
      },
      {
        q: "Welche Deutschkenntnisse brauche ich?",
        a: "Für die Anerkennung wird in der Regel Deutsch auf Niveau B2 verlangt. Wir vermitteln passende Kurse.",
      },
      {
        q: "Kostet mich die Begleitung durch SBP Management etwas?",
        a: "Nein. Für Bewerberinnen und Bewerber ist unsere Begleitung kostenfrei; die Kosten trägt der Arbeitgeber.",
      },
    ],
  },

  careerSterilePage: {
    meta: {
      title: "Jobs in der Sterilgutversorgung (AEMP) in Deutschland",
      description:
        "Arbeiten in der Sterilgutversorgung (AEMP/ZSVA) und rund um chirurgische Instrumente in Deutschland: Qualifikation, Fachkunde, Visum und Stellen – begleitet von SBP Management.",
    },
    card: {
      title: "Sterilgutversorgung und Instrumente",
      body: "Aufbereitung von Medizinprodukten (AEMP/ZSVA), Instrumentenkunde und Leitungsfunktionen.",
    },
    title:
      "Sterilgutversorgung und chirurgische Instrumente: Arbeiten in Deutschland",
    lead: "Ohne sauber aufbereitete Instrumente keine Operation. Kliniken in Deutschland suchen Fachkräfte für die Aufbereitung von Medizinprodukten – vom Mitarbeiter in der AEMP bis zur Leitung.",
    body: [
      "Sterilgutversorgung und Medizintechnik gehören zu den Kernthemen von SBP Management: Wir entwickeln dazu Prozesse und Qualifizierungen in deutschen Kliniken und mit der MASOK Akademija in Serbien.",
    ],
    requirements: [
      "Erfahrung in der Aufbereitung von Medizinprodukten, im OP oder im Umgang mit chirurgischen Instrumenten",
      "Für Fachkraftstellen in der Regel die Fachkunde I (Sachkunde) nach DGSV – für Leitungsstellen Fachkunde II oder III",
      "Deutschkenntnisse, je nach Stelle mindestens B1",
      "Sorgfalt, Verständnis für Hygiene und Freude an präziser Arbeit",
    ],
    steps: [
      {
        title: "Kennenlernen",
        body: "Wir sprechen über Ihre Erfahrung und prüfen, welche Qualifikationen schon vorhanden sind.",
      },
      {
        title: "Qualifikation",
        body: "Wir vermitteln Fachkundelehrgänge und Deutschkurse – auch über unsere Partner in Serbien.",
      },
      {
        title: "Klinik und Visum",
        body: "Wir finden eine passende AEMP und begleiten Arbeitsvertrag und Visumsantrag.",
      },
      {
        title: "Ankommen",
        body: "Einarbeitung, Wohnung und Behörden – wir bleiben an Ihrer Seite.",
      },
    ],
    sections: [
      {
        title: "Aufgaben in der AEMP",
        body: [
          "In der Aufbereitungseinheit für Medizinprodukte (AEMP, auch ZSVA) werden chirurgische Instrumente gereinigt, desinfiziert, geprüft, gepflegt, verpackt und sterilisiert – nach festen Verfahren und lückenlos dokumentiert. Fehler gefährden Patientinnen und Patienten; deshalb sind Fachwissen und Sorgfalt gefragt.",
        ],
      },
      {
        title: "Qualifikation und Anerkennung",
        body: [
          "Anders als die Pflege ist die Arbeit in der AEMP in Deutschland kein Beruf mit staatlicher Zulassung. Arbeitgeber erwarten aber in der Regel die Fachkundelehrgänge nach den Richtlinien der Deutschen Gesellschaft für Sterilgutversorgung (DGSV): Fachkunde I für Fachkräfte, Fachkunde II und III für Schicht- und Abteilungsleitungen.",
          "Welcher Aufenthaltstitel für Sie in Frage kommt, hängt von Ihrem Abschluss und Ihrer Berufserfahrung ab. Wir prüfen Ihren Fall und zeigen Ihnen den passenden Weg.",
        ],
      },
      {
        title: "Chirurgische Instrumente und Medizintechnik",
        body: [
          "Deutschland ist einer der wichtigsten Standorte für chirurgische Instrumente. Neben der Aufbereitung in Kliniken gibt es Stellen in Instandhaltung, Reparatur und Herstellung. Mit der MASOK Akademija in Leskovac bereiten wir Fachkräfte praxisnah auf die Arbeit mit chirurgischen Instrumenten und in der Sterilgutversorgung vor.",
        ],
      },
    ],
    faq: [
      {
        q: "Brauche ich eine Anerkennung, um in der AEMP zu arbeiten?",
        a: "Eine staatliche Berufszulassung wie in der Pflege ist nicht nötig. Für das Visum kann aber eine Anerkennung Ihres Abschlusses oder ein Nachweis Ihrer Berufserfahrung erforderlich sein. Wir prüfen, was in Ihrem Fall gilt.",
      },
      {
        q: "Was ist die Fachkunde I?",
        a: "Ein Lehrgang nach den Richtlinien der DGSV, der die Grundlagen der Medizinprodukteaufbereitung vermittelt: Hygiene, Reinigung und Desinfektion, Sterilisation, Instrumentenkunde und Dokumentation. Viele Arbeitgeber setzen ihn voraus oder ermöglichen ihn nach dem Start.",
      },
      {
        q: "Kostet mich die Begleitung durch SBP Management etwas?",
        a: "Nein. Für Bewerberinnen und Bewerber ist unsere Begleitung kostenfrei; die Kosten trägt der Arbeitgeber.",
      },
    ],
  },
} as const;
