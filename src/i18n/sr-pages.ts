/**
 * Serbian (Latin) copy for the inner pages, from "SBP Website SR.docx" sections 6–16.
 * Merged into the dictionary in sr.ts; keeps exactly the shape of en-pages.ts.
 * `link` values are page keys from config.ts; `href` values are plain URLs.
 */
export const srPages = {
  about: {
    meta: {
      title: "O nama",
      description:
        "SBP Management je kompanija sa sedištem u Berlinu za razvoj, vođenje i realizaciju projekata u zdravstvu, koja od 2011. godine sarađuje sa klinikama, institucijama i međunarodnim partnerima.",
    },
    eyebrow: "O nama",
    title: "Međunarodni projekti za jače zdravstvo",
    lead: "SBP Management je kompanija sa sedištem u Berlinu za razvoj, vođenje i realizaciju projekata u zdravstvu. Od 2011. godine sarađujemo sa klinikama, zdravstvenim organizacijama, obrazovnim ustanovama, institucijama i međunarodnim partnerima.",
    body: [
      "Naši projekti povezuju oblasti koje se u zdravstvu često posmatraju odvojeno: organizaciju, kadrove, stručno obrazovanje, medicinsku tehniku, snabdevanje sterilnim materijalom i međunarodnu saradnju.",
      "Naš cilj nije stvaranje kratkoročnih pojedinačnih rešenja. Razvijamo strukture koje grade znanje, unapređuju procese i mogu dugoročno da se dalje razvijaju na licu mesta.",
    ],
    facts: [
      { value: "2011", label: "Osnovana u Berlinu" },
      { value: "3", label: "Ključna projektna regiona" },
    ],
    international: {
      eyebrow: "Od Nemačke do međunarodnih projekata",
      title: "Iskustvo iz nemačkih klinika kao osnova",
      body: [
        "Iskustva iz saradnje sa nemačkim klinikama predstavljaju važnu osnovu za naše međunarodne projekte.",
        "U Srbiji SBP Management sa Akademijom MASOK razvija modele za stručnu kvalifikaciju u zdravstvu i medicinskoj tehnici. Ta iskustva istovremeno predstavljaju referencu za razvoj Nemačko-kazahstanske zdravstvene inicijative i planiranog centra kompetencija u Kazahstanu sa perspektivom za Centralnu Aziju.",
      ],
    },
    team: {
      eyebrow: "Tim",
      title: "Upoznajte tim",
      body: "Stručnost u zdravstvu, obrazovanju i međunarodnom upravljanju projektima – tim koji postiže trajne rezultate.",
      photoAlt: "Portret:",
      /** Shown in the circle while a team member's photo is still missing. */
      photoSoon: "Fotografija uskoro",
      /** In order: row 1 CEO, Junior Consultant; row 2 Team Management/HR ×2, International Project Manager; row 3 Real Estate, Accounting, IT. Empty name = not known yet. */
      members: [
        { name: "Sabina Banda", role: "Direktorka" },
        { name: "Nikola Banda", role: "Mlađi konsultant" },
        { name: "Ana Zakarashvili", role: "Upravljanje timom / HR" },
        { name: "Josephine Heinrich", role: "Upravljanje timom / HR" },
        { name: "Milica Golubović", role: "Menadžerka međunarodnih projekata" },
        { name: "Esra Simsek", role: "Nekretnine" },
        { name: "Adriel Mangiring", role: "Računovodstvo" },
        { name: "Stephen Ntah", role: "IT administracija" },
      ],
    },
    work: {
      eyebrow: "Naš način rada",
      title: "Analiziramo. Razvijamo. Povezujemo. Implementiramo.",
      body: [
        "Identifikujemo konkretne potrebe, razvijamo projektne i kompetencijske modele, okupljamo relevantne partnere i pratimo praktičnu realizaciju.",
        "Pri tome radimo na preseku između klinika, obrazovanja, industrije, institucija i međunarodnih partnera.",
      ],
      steps: [
        { title: "Analiziramo", body: "Identifikujemo konkretne potrebe." },
        { title: "Razvijamo", body: "Razvijamo projektne i kompetencijske modele." },
        { title: "Povezujemo", body: "Okupljamo relevantne partnere." },
        { title: "Implementiramo", body: "Pratimo praktičnu realizaciju." },
      ],
    },
  },

  services: {
    meta: {
      title: "Oblasti usluga",
      description:
        "Upravljanje projektima u zdravstvu, optimizacija klinika i procesa, snabdevanje sterilnim materijalom, medicinska tehnika i hirurški instrumenti, obrazovanje i obuka, kao i kadrovska rešenja.",
    },
    eyebrow: "Oblasti usluga",
    title: "Kompetencije za zdravstvo, obrazovanje i tehnologiju",
    lead: "Zdravstveni sistemi funkcionišu održivo onda kada se procesi, kvalifikacije, tehnologija i ljudi posmatraju zajedno. SBP Management prati klinike, institucije i međunarodne partnere od analize i razvoja projekta do praktične implementacije.",
    more: "Saznajte više",
    items: [
      {
        id: "healthcare-project-management",
        title: "Upravljanje projektima u zdravstvu",
        body: "Strateška koncepcija, upravljanje stejkholderima, vođenje projekata, međunarodna koordinacija i podrška implementaciji.",
        link: "svcProject",
      },
      {
        id: "hospital-process-optimization",
        title: "Optimizacija klinika i procesa",
        body: "Unapređenje organizacije, procesa, međusobnih veza, resursa, kadrovskih procesa i operativnih struktura.",
        link: "svcProcess",
      },
      {
        id: "sterile-supply",
        title: "Snabdevanje sterilnim materijalom",
        body: "Razvoj procesa u AEMP/CSSD, kvalitet, dokumentacija, izgradnja kompetencija, sledljivost i usklađivanje sa međunarodnim standardima.",
        link: "svcSterile",
      },
      {
        id: "medical-technology",
        title: "Medicinska tehnika i hirurški instrumenti",
        body: "Kvalifikacija, održavanje, popravka, upravljanje životnim ciklusom i povezivanje zdravstva sa tehničkom industrijom.",
        link: "svcMedtech",
      },
      {
        id: "education-training",
        title: "Obrazovanje i obuka",
        body: "Razvoj kurikuluma, stručna kvalifikacija, train-the-trainer, modeli akademija, praktična obuka i partnerstva sa praksom.",
        link: "svcEducation",
      },
      {
        id: "workforce-solutions",
        title: "Kadrovska rešenja",
        body: "Planiranje kadrova, međunarodni stručnjaci, priznavanje kvalifikacija, jezik, onbording i održiva integracija u klinike i zdravstvene ustanove.",
        link: "workforce",
      },
    ],
  },

  projectsPage: {
    meta: {
      title: "Projekti",
      description:
        "MASOK Akademija u Srbiji, Zdravstvena akademija Kazahstan, klinički i procesni projekti u Nemačkoj i međunarodni programi razmene.",
    },
    eyebrow: "Projekti",
    title: "Projekti koji povezuju strukture",
    lead: "SBP Management razvija projekte tamo gde se susreću zdravstvena zaštita, kvalifikacija, tehnologija i organizacija. Naš rad se proteže od lokalnih kliničkih procesa do međunarodnih modela kompetencija i obrazovanja.",
    items: [
      {
        region: "Srbija",
        code: "RS",
        name: "MASOK Akademija",
        title: "Stručno obrazovanje, medicinska tehnika i snabdevanje sterilnim materijalom",
        body: "Izgradnja praktično orijentisanog modela kompetencija u Leskovcu, povezanog sa razvojem kvalifikacija, praktičnom obukom, medicinskom tehnikom i zdravstvenom privredom.",
        focus: ["Hirurški instrumenti", "Medicinski asistenti (MFA)", "Snabdevanje sterilnim materijalom"],
        status: "Realizacija / izgradnja",
        tone: "active",
        link: "masok",
      },
      {
        region: "Kazahstan & Centralna Azija",
        code: "KZ",
        name: "Zdravstvena akademija Kazahstan",
        title: "Modernizacija zdravstva i razvoj kompetencija",
        body: "Nemačko-kazahstanska inicijativa saradnje za razvoj kadrova, upravljanje bolnicama, snabdevanje sterilnim materijalom, medicinsku tehniku, digitalizaciju i kvalitet.",
        focus: ["Zdravstvena akademija", "Obuka trenera", "Upravljanje kvalitetom"],
        status: "Faza iniciranja",
        tone: "planned",
        link: "kazakhstan",
      },
      {
        region: "Nemačka",
        code: "DE",
        name: "Klinički, procesni i kadrovski projekti",
        title: "Organizacija, procesi i kadrovi",
        body: "Saradnja sa klinikama, kliničkim grupama, udruženjima i zdravstvenim organizacijama sa fokusom na organizaciju, procese, kadrove i održive strukture zdravstvene zaštite.",
        focus: ["Optimizacija procesa", "Organizacioni razvoj", "Planiranje kadrova"],
        status: "U toku",
        tone: "ongoing",
        link: "germany",
      },
      {
        region: "Međunarodno",
        code: "INT",
        name: "Međunarodni programi razmene",
        title: "Praksa, obuka i transfer znanja",
        body: "Programi razmene i stručnih poseta kao praktični most između obrazovnih ustanova i partnera u Nemačkoj i drugim zemljama.",
        focus: ["Stručne posete", "Programi prakse", "Transfer znanja"],
        status: "U toku",
        tone: "ongoing",
        link: "exchange",
      },
    ],
  },

  /** Labels shared by the four project pages. */
  project: {
    facts: "Činjenice o projektu",
    region: "Region",
    location: "Lokacija",
    focus: "Težište",
    status: "Status",
    related: "Drugi projekti",
    back: "Svi projekti",
  },

  masok: {
    meta: {
      title: "MASOK Akademija | Srbija",
      description:
        "MASOK Akademija u Leskovcu: stručno obrazovanje susreće zdravstvo i medicinsku tehniku. Kvalifikacija u oblasti hirurških instrumenata, medicinskih asistenata i snabdevanja sterilnim materijalom.",
    },
    code: "RS",
    region: "Srbija",
    location: "Leskovac",
    status: "Realizacija / izgradnja",
    tone: "active",
    focus: "Hirurški instrumenti, medicinski asistenti (MFA), snabdevanje sterilnim materijalom",
    eyebrow: "Projekat · Srbija",
    title: "MASOK Akademija",
    subtitle: "Stručno obrazovanje susreće zdravstvo i medicinsku tehniku",
    lead: "Međunarodna akademija za stručno obrazovanje kadrova – MASOK u Leskovcu je obrazovni i kompetencijski centar za praktično orijentisane programe kvalifikacije prema evropskim i međunarodnim zahtevima kvaliteta.",
    body: "Akademija čini institucionalno jezgro modela koji povezuje razvoj kvalifikacija, obuku, praktične kompetencije, međunarodnu saradnju i privredni razvoj.",
    standard: {
      title: "Od standarda kvalifikacije do praktične kompetencije",
      body: [
        "Polazna tačka projekta bio je razvoj novog standarda kvalifikacije za izradu i popravku hirurških instrumenata.",
        "Projekat odgovara na konkretnu potrebu: bolnicama i kompanijama su potrebni kvalifikovani stručnjaci za održavanje, popravku i upravljanje životnim ciklusom medicinskih instrumenata. Istovremeno, profesionalna popravka instrumenata stvara održiv pristup – instrumenti mogu duže da se koriste, resursi se štede, a medicinski otpad smanjuje.",
      ],
    },
    fields: {
      title: "Oblasti obrazovanja i kompetencija",
      items: [
        {
          title: "Mehaničar za izradu i popravku hirurških instrumenata",
          subtitle: "Tehnička kompetencija za zdravstveni sektor",
          body: "Teorijska i praktična kvalifikacija u oblasti hirurških instrumenata, orijentisana na nemačke standarde kvaliteta i tehničke standarde. Razvijeni standard kvalifikacije čini osnovu za strukturisanu obuku i razvoj praktičnih kompetencija.",
          status: "",
        },
        {
          title: "Medicinski asistenti (MFA)",
          subtitle: "Praktično orijentisan model po nemačkom uzoru",
          body: "Razvoj modela obuke za medicinsku asistenciju koji povezuje administrativne, organizacione i odabrane medicinske zadatke i može da rastereti kliničke i ambulantne strukture.",
          status: "Program u razvoju",
        },
        {
          title: "Tehničar za sterilizaciju",
          subtitle: "AEMP/CSSD, kvalitet procesa i dokumentacija",
          body: "Kvalifikacija za reprocesiranje medicinskih sredstava i snabdevanje sterilnim materijalom sa fokusom na tok procesa, dokumentaciju, osiguranje kvaliteta i bezbedne standarde rada.",
          status: "Program u razvoju",
        },
      ],
    },
    practice: {
      title: "Praksa, obuka i transfer znanja",
      body: "Praktična orijentacija je centralni deo modela. Saradnja sa Tehničkom školom u Vlasotincu i tamošnjim trening centrom stvara osnovu za praktičnu obuku. Nastavnici i stručni partneri uključuju se u transfer znanja kroz međunarodne formate razmene i kvalifikacije.",
    },
    international: {
      title: "Iz Srbije na međunarodna tržišta",
      body: "Model razvijen u Srbiji povezuje obrazovanje, kvalitet, vođenje projekata i međunarodnu saradnju. Ova struktura služi kao referenca za dalji razvoj modela kompetencija u drugim zemljama – posebno za Nemačko-kazahstansku zdravstvenu inicijativu i planiranu Zdravstvenu akademiju Kazahstan.",
    },
    external: {
      title: "Programi, upis i prijem",
      body: "Detaljne informacije o nastavi, upisu, trajanju programa i prijemu kandidata MASOK Akademija objavljuje na sopstvenom sajtu.",
      label: "Posetite masok.eu",
      href: "https://masok.eu",
    },
    cta: "Zatražite saradnju",
  },

  kazakhstan: {
    meta: {
      title: "Zdravstvena akademija Kazahstan | Kazahstan & Centralna Azija",
      description:
        "Nemačko-kazahstanska zdravstvena inicijativa: planirani centar kompetencija za savremeno zdravstvo u Kazahstanu sa perspektivom za Centralnu Aziju.",
    },
    code: "KZ",
    region: "Kazahstan & Centralna Azija",
    location: "Kazahstan",
    status: "Faza iniciranja",
    tone: "planned",
    focus: "Kvalifikacija kadrova, upravljanje bolnicama, snabdevanje sterilnim materijalom, medicinska tehnika, digitalizacija, kvalitet",
    eyebrow: "Projekat · Kazahstan & Centralna Azija",
    title: "Nemačko-kazahstanska zdravstvena inicijativa",
    subtitle: "Centar kompetencija za budućnost zdravstva",
    lead: "SBP Management razvija dugoročnu nemačko-kazahstansku inicijativu saradnje za modernizaciju zdravstva, razvoj medicinskih stručnih kompetencija i unapređenje zdravstvenog menadžmenta.",
    body: "Cilj je izgradnja održivih struktura koje prenose nemačka i evropska iskustva na uslove Kazahstana i koje se dugoročno mogu dalje razvijati lokalno.",
    approach: {
      title: "Integrisani pristup",
      body: "Inicijativa nije zamišljena kao izolovan pojedinačni projekat. Ona povezuje razvoj kadrova, stručno obrazovanje, medicinsku tehniku, snabdevanje sterilnim materijalom, digitalizaciju, upravljanje kvalitetom i organizacioni razvoj u modularnu celovitu strukturu.",
    },
    academy: {
      title: "Zdravstvena akademija Kazahstan",
      body: [
        "Kao institucionalno jezgro predviđena je izgradnja Zdravstvene akademije Kazahstan. Akademija treba da objedini kvalifikaciju, train-the-trainer programe, osiguranje kvaliteta, transfer znanja i koordinaciju međunarodnih partnerstava pod jednim krovom.",
        "Dugoročno, iz toga treba da nastane centar kompetencija koji može biti relevantan ne samo za Kazahstan, već u perspektivi i za druge zemlje Centralne Azije.",
      ],
    },
    modules: {
      title: "Projektni moduli",
      items: [
        { title: "Medicinski asistenti (MFA)", body: "Razvoj praktične MFA kvalifikacije po nemačkom uzoru." },
        {
          title: "Operacioni instrumenti i medicinska tehnika",
          body: "Kvalifikacija za tehničke procese u vezi sa hirurškim instrumentima, održavanjem i medicinskom tehnikom.",
        },
        {
          title: "Snabdevanje sterilnim materijalom – AEMP/CSSD",
          body: "Izgradnja stručnih kompetencija i procesnih standarda za profesionalno snabdevanje sterilnim materijalom.",
        },
        { title: "Digitalizacija i upravljanje kvalitetom", body: "Digitalna dokumentacija, sledljivost, kvalitet procesa i osiguranje kvaliteta." },
        { title: "Menadžment nege i bolnica", body: "Organizacioni razvoj, upravljanje resursima i savremene strukture menadžmenta." },
        { title: "Zdravstvena akademija Kazahstan", body: "Izgradnja održive strukture obuke i kompetencija." },
        { title: "Klinička partnerstva", body: "Stručna razmena, stručne posete i transfer znanja sa nemačkim kliničkim partnerima." },
        { title: "Međunarodna mreža", body: "Saradnja sa institucijama, komorama, obrazovnim i industrijskim partnerima." },
      ],
    },
    stages: {
      title: "Perspektiva: Centralna Azija",
      body: "Razvoj je zamišljen u više faza: od identifikacije partnera i planiranja pilota, preko izgradnje akademije i prvih programa kvalifikacije, do skaliranja i razvoja regionalnog centra kompetencija sa uticajem na Centralnu Aziju.",
      items: [
        "Identifikacija partnera i planiranje pilota",
        "Izgradnja akademije i prvi programi kvalifikacije",
        "Skaliranje i regionalni centar kompetencija za Centralnu Aziju",
      ],
    },
    reference: {
      title: "Referentni model: Srbija",
      body: "Posebna snaga projekta je u tome što SBP Management ne počinje od nule. Iskustva iz modela razvijenog u Srbiji – kurikulumi, praktična obuka, osiguranje kvaliteta, train-the-trainer i međunarodna partnerstva – predstavljaju referencu za prilagođavanje novim tržištima.",
    },
    cta: "Zatražite saradnju",
  },

  germanyPage: {
    meta: {
      title: "Klinički i procesni projekti | Nemačka",
      description:
        "SBP Management podržava klinike u Nemačkoj u analizi struktura, poboljšanju međusobnih veza i razvoju održivih rešenja za organizaciju, kadrove i operativne procese.",
    },
    code: "DE",
    region: "Nemačka",
    location: "Berlin · od 2011.",
    status: "U toku",
    tone: "ongoing",
    focus: "Optimizacija procesa, organizacioni razvoj, planiranje kadrova",
    eyebrow: "Projekat · Nemačka",
    title: "Klinički i procesni projekti",
    subtitle: "Kliničke procese, organizaciju i kadrove promišljati zajedno",
    lead: "SBP Management već dugi niz godina sarađuje sa klinikama, kliničkim grupama, zdravstvenim udruženjima i drugim zdravstvenim organizacijama u Nemačkoj.",
    body: "Iz dugogodišnjeg iskustva u međunarodnom pridobijanju stručnjaka razvio se širi savetodavni i projektni pristup: kadrove ne posmatramo izolovano, već kao deo kliničkih procesa, organizacionih struktura i kvaliteta zdravstvene zaštite. SBP Management podržava klinike u analizi struktura, poboljšanju međusobnih veza i razvoju održivih rešenja za organizaciju, kadrove i operativne procese.",
    imageAlt: "Dve osobe se rukuju preko stola tokom sastanka",
    modules: {
      title: "Moduli usluga",
      items: [
        "Analiza kliničkih i administrativnih procesa",
        "Optimizacija međusobnih veza, uloga i odgovornosti",
        "Razvoj organizacije i resursa",
        "Procesi onbordinga i integracije",
        "Planiranje potreba za kadrovima i workforce planiranje",
        "Procesi kvaliteta i dokumentacije",
        "Procesi u snabdevanju sterilnim materijalom i AEMP/CSSD",
        "Međunarodna partnerstva u znanju, obrazovanju i projektima",
      ],
    },
    cooperation: {
      title: "Saradnja u zdravstvu",
      body: "SBP Management sarađuje sa klinikama, kliničkim grupama, zdravstvenim udruženjima, stručnim organizacijama i drugim partnerima u zdravstvu. Pri tome povezujemo operativno iskustvo sa nemačkog zdravstvenog tržišta sa međunarodnim upravljanjem projektima i izgradnjom kompetencija.",
    },
    workforce: {
      title: "Kadrovska rešenja",
      body: "Međunarodno pridobijanje stručnjaka ostaje važan deo – ugrađen u pitanje kako klinike mogu dugoročno stabilno da organizuju procese, timove i resurse.",
      label: "Kadrovska rešenja",
    },
    cta: "Kontaktirajte nas",
  },

  exchange: {
    meta: {
      title: "Međunarodni programi razmene",
      description:
        "Međunarodni programi razmene, stručnih poseta i prakse za učenike, polaznike stručnog obrazovanja, stručnjake i obrazovne ustanove.",
    },
    code: "INT",
    region: "Međunarodno",
    location: "Nemačka ⇄ partnerske zemlje",
    status: "U toku",
    tone: "ongoing",
    focus: "Programi razmene, stručnih poseta i prakse",
    eyebrow: "Projekat · Međunarodno",
    title: "Međunarodni programi razmene",
    subtitle: "Deliti znanje. Širiti perspektive. Povezivati strukture.",
    lead: "Međunarodna kvalifikacija ne funkcioniše isključivo u učionici. Direktna stručna razmena omogućava mladima i stručnjacima da neposredno upoznaju radne procese, standarde kvaliteta i profesionalne kulture.",
    body: "SBP Management osmišljava i organizuje međunarodne programe razmene, stručnih poseta i prakse zajedno sa obrazovnim ustanovama i partnerima iz prakse.",
    programs: {
      title: "Programi",
      items: [
        {
          title: "Projekat razmene u farmaciji",
          status: "Završeno",
          tone: "ongoing",
          body: [
            "U okviru već sprovedenog projekta razmene u farmaceutskoj oblasti, učenici su mogli da steknu praktičan uvid u međunarodno profesionalno okruženje.",
            "U središtu su bili stručna razmena, praktična iskustva i upoznavanje različitih struktura obrazovanja i rada.",
          ],
        },
        {
          title: "Schwanen Apotheke Frankfurt – septembar 2026.",
          status: "U pripremi",
          tone: "planned",
          body: [
            "Za septembar 2026. planiran je novi projekat razmene sa apotekom Schwanen Apotheke u Frankfurtu.",
            "Program treba mladim učesnicima da omogući uvid u svakodnevni rad apoteke i farmaceutske radne procese u Nemačkoj i da podstakne stručnu i interkulturalnu razmenu.",
          ],
        },
      ],
    },
    format: {
      title: "Razmena kao poseban projektni format",
      body: "Za SBP Management, programi razmene su više od studijskih putovanja. Oni su samostalan projektni format za transfer znanja, razvoj kompetencija i izgradnju održivih partnerstava između obrazovanja i prakse.",
    },
    cta: "Kontaktirajte nas",
  },

  workforcePage: {
    meta: {
      title: "Kadrovska rešenja",
      description:
        "Međunarodni stručnjaci i kadrovska rešenja: održiv razvoj kadrova za klinike, od prvog kontakta, preko priznavanja kvalifikacija i vize, do integracije u klinički svakodnevni rad.",
    },
    eyebrow: "Oblast usluga · Nemačka",
    title: "Međunarodni stručnjaci i kadrovska rešenja",
    subtitle: "Održiv razvoj kadrova za klinike",
    lead: "Međunarodno pridobijanje stručnjaka je već dugi niz godina oblast kompetencija SBP Management-a. Pratimo klinike i kvalifikovane stručnjake od prvog kontakta, preko postupaka priznavanja kvalifikacija i viza, do integracije u klinički svakodnevni rad.",
    body: "Regrutaciju ne posmatramo kao izolovanu uslugu posredovanja. Presudno je da kvalifikacija, oblast rada, organizacija, uvođenje u posao i dugoročna integracija budu usklađeni.",
    hospitals: {
      title: "Za klinike",
      items: [
        "Identifikacija odgovarajućih međunarodnih stručnjaka",
        "Podrška u postupcima priznavanja kvalifikacija i viza",
        "Organizacija odnosno koordinacija jezičkih kvalifikacija",
        "Praćenje mera prilagođavanja i provera znanja",
        "Onbording i integracija",
        "Podrška u organizacionim pitanjima",
        "Strateško planiranje kadrova i kapaciteta",
      ],
    },
    candidates: {
      title: "Da li ste zdravstveni stručnjak?",
      body: "Aktuelne oglase i ličnu podršku pronaći ćete na našoj stranici „Poslovi“.",
      label: "Na stranicu „Poslovi“",
    },
    related: {
      title: "Povezano sa razvojem klinika i procesa",
      body: "Uspešna integracija stručnjaka zahteva funkcionalne procese, jasne odgovornosti, dobar onbording i stabilne organizacione strukture.",
      label: "Klinički i procesni projekti",
    },
    cta: "Kontaktirajte nas",
  },

  hospitals: {
    meta: {
      title: "Za klinike i institucije",
      description:
        "Razvoj projekata, optimizacija procesa, saradnje i kadrovska rešenja za klinike, kliničke grupe i zdravstvene ustanove.",
    },
    eyebrow: "Za klinike i institucije",
    title: "Razgovarajte sa nama o svom projektu.",
    lead: "Planirate projekat u zdravstvu, želite da unapredite kliničke procese, izgradite kompetencije ili uključite međunarodne partnere? Radujemo se razgovoru sa vama.",
    paths: {
      title: "Kako radimo sa klinikama i institucijama",
      items: [
        {
          title: "Razvoj projekata",
          body: "Koncepcija, koordinacija i realizacija kompleksnih zdravstvenih projekata sa nacionalnim i međunarodnim partnerima.",
          link: "projects",
        },
        {
          title: "Optimizacija procesa",
          body: "Analiza i unapređenje kliničkih procesa, organizacionih struktura, međusobnih veza, kadrovskih procesa i standarda kvaliteta.",
          link: "germany",
        },
        {
          title: "Saradnje",
          body: "Povezujemo operativno iskustvo sa nemačkog zdravstvenog tržišta sa međunarodnim upravljanjem projektima i izgradnjom kompetencija.",
          link: "about",
        },
        {
          title: "Kadrovska rešenja",
          body: "Strateško planiranje kadrova, međunarodno pridobijanje stručnjaka, priznavanje kvalifikacija, integracija i održiv onbording.",
          link: "workforce",
        },
      ],
    },
    modules: {
      title: "Moduli usluga za klinike",
      items: [
        "Analiza kliničkih i administrativnih procesa",
        "Optimizacija međusobnih veza, uloga i odgovornosti",
        "Razvoj organizacije i resursa",
        "Procesi onbordinga i integracije",
        "Planiranje potreba za kadrovima i workforce planiranje",
        "Procesi kvaliteta i dokumentacije",
        "Procesi u snabdevanju sterilnim materijalom i AEMP/CSSD",
        "Međunarodna partnerstva u znanju, obrazovanju i projektima",
      ],
    },
    cta: "Pošaljite upit za projekat",
  },

  contactPage: {
    meta: {
      title: "Kontakt",
      description:
        "Razgovarajte sa SBP Management-om o svom zdravstvenom projektu, saradnji, kadrovskim rešenjima ili svojoj karijeri u Nemačkoj.",
    },
    eyebrow: "Kontakt",
    title: "Razgovarajte sa nama o svom projektu.",
    lead: "Planirate projekat u zdravstvu, želite da unapredite kliničke procese, izgradite kompetencije ili uključite međunarodne partnere? Radujemo se razgovoru sa vama.",
    details: { heading: "Kontaktirajte nas direktno", address: "Adresa", phone: "Telefon", email: "E-pošta" },
    form: {
      heading: "Pošaljite nam poruku",
      reason: "Razlog upita",
      reasons: [
        "Upit za projekat / Upravljanje projektima u zdravstvu",
        "Optimizacija klinika i procesa",
        "Snabdevanje sterilnim materijalom / medicinska tehnika",
        "Obrazovanje / akademija / kvalifikacija",
        "Međunarodna saradnja",
        "Kadrovska rešenja za klinike",
        "Prijava / savetovanje kandidata",
        "Ostalo",
      ],
      firstName: "Ime",
      lastName: "Prezime",
      email: "E-pošta",
      phone: "Telefon (opciono)",
      organization: "Organizacija (opciono)",
      message: "Vaša poruka",
      required: "Polja bez oznake „opciono“ su obavezna.",
      consent: "Slanjem ovog formulara saglasni ste da vaše podatke koristimo za odgovor na vaš upit.",
      submit: "Pošaljite poruku",
      sending: "Slanje…",
      success: "Hvala vam. Vaša poruka je poslata – uskoro ćemo vam se javiti.",
      error: "Molimo vas da unesete ime, prezime i ispravnu adresu e-pošte.",
      failed: "Vašu poruku nije bilo moguće poslati. Pišite nam direktno:",
    },
  },

  /** Closing call to action used at the end of the inner pages. */
  closing: {
    eyebrow: "Kontakt",
    title: "Razgovarajte sa nama o svom projektu.",
    body: "Bilo da je reč o optimizaciji klinike, kvalifikaciji, snabdevanju sterilnim materijalom, medicinskoj tehnici, međunarodnoj saradnji ili razvoju kadrova – zajedno sa vama razvijamo rešenje koje odgovara vašoj organizaciji i vašem tržištu.",
    or: "ili nas kontaktirajte direktno",
  },

  /** Client photos: alt texts and the headings of the photo sections. */
  photos: {
    alt: {
      aboutMinistryGroup: "SBP Management sa projektnim partnerima u jednom ministarstvu u Srbiji",
      aboutMinistryMeeting: "Radni sastanak sa projektnim partnerima u jednom ministarstvu u Srbiji",
      hospitalsBuergerhospital: "Zajednička fotografija tima ispred Bürgerhospital-a u Frankfurtu",
      projectsSigning: "Potpisivanje sporazuma sa projektnim partnerima u Srbiji",
      masokLeskovacCity: "Sastanak u Gradu Leskovcu",
      masokMeeting: "Projektni sastanak sa partnerima u Srbiji",
      masokWorkshop: "Poseta radionici za obuku sa alatnim mašinama",
      masokWorkshop2: "Alatne mašine u radionici za obuku",
      masokMechatronicsLab: "Laboratorija za obuku sa opremom za automatizaciju i robotiku",
      masokComputerLab: "Poseta računarskoj učionici",
      masokTrainingHall: "Poseta hali za obuku u izgradnji",
      masokSchoolVisit: "Projektni partneri u školskom kompleksu u Srbiji",
      servicesSterileSupply: "Poseta odeljenju za snabdevanje sterilnim materijalom (AEMP/CSSD)",
      masokMfaBuergerhospitalMeeting: "Sastanak o MFA programu sa Bürgerhospital-om u konferencijskoj sali",
      masokPartnerMeeting: "Radni sastanak sa partnerima MASOK-a za konferencijskim stolom",
      instrumentsTrainingSet: "Hirurški instrumenti pripremljeni za obuku",
      sbpMinistryMeeting: "SBP Management na sastanku u jednom ministarstvu u Srbiji",
      sbpLeskovacCityMeeting: "Sastanak sa predstavnicima Grada Leskovca",
      educationSterileSupplyVisit: "Edukativna poseta odeljenju za sterilizaciju",
      masokAgreementDocuments: "Partnerke predstavljaju potpisan sporazum o saradnji",
      sbpPartnerDinner: "Večera sa projektnim partnerima",
      masokPartnerGroup: "Grupna fotografija sa partnerima MASOK-a u kancelariji",
      masokSigning: "Potpisivanje sporazuma o saradnji",
      masokHandshake: "Rukovanje nakon potpisivanja sporazuma o saradnji",
      masokMeetingOffice: "Sastanak sa partnerima u kancelariji u Leskovcu",
      masokMeetingTeam: "Razgovor sa partnerima za konferencijskim stolom",
      sbpMinistryEconomy: "Poseta Ministarstvu privrede Srbije",
      masokCampusVisit: "Posetioci ispred hale za obuku MASOK-a",
      sbpLeskovacCityTalks: "Razgovori sa Gradom Leskovcem",
      masokCampusGroup: "Grupna fotografija ispred zgrade MASOK Akademije",
      projectWorkshopHall: "Radionica za obuku sa mašinama",
      masokPartnersSelfie: "Projektni partneri tokom posete",
      sbpMinistryVisit: "SBP Management u Ministarstvu privrede Srbije",
      sbpMinistryTeam: "Tim SBP Management-a u jednom ministarstvu u Srbiji",
      sbpMinistryDelegation: "Delegacija u Ministarstvu privrede Srbije",
      masokSterileSupplyVisit: "Poseta odeljenju za sterilizaciju sa partnerima MASOK-a",
      projectSterileSupplyVisit: "Projektna poseta odeljenju za sterilizaciju",
      sbpAsanusVisit: "Tabla dobrodošlice za posetu SBP Management-a partnerskoj kompaniji",
      germanyHandshake: "Dve osobe se rukuju preko stola tokom sastanka",
      childrenCareOutdoors: "Malo dete trči ka ženi u parku",
      ecgGraphic: "EKG kriva na mreži monitora",
      nursePatientMonitor: "Medicinska sestra proverava monitor pacijenta u bolničkoj sobi",
      microscopeLab: "Ruke u rukavicama podešavaju laboratorijski mikroskop",
      childExamination: "Lekar osluškuje leđa devojčice stetoskopom",
      childTeddyStethoscope: "Dete prislanja stetoskop na plišanog medu",
      elderlyCareWalker: "Negovatelj prati stariju ženu sa hodalicom",
      elderlyCareHands: "Ruke starije osobe crtaju olovkom za stolom",
      elderlyCareBedside: "Negovatelj drži za ruku starijeg pacijenta u krevetu",
      labTechnicianInstruments: "Tehničarka sa kapom radi sa instrumentima u laboratoriji",
      nurseTablet: "Medicinska sestra čita sa tableta na bolničkom prijemu",
      doctorStethoscope: "Lekar u plavoj uniformi sa stetoskopom",
      doctorNotes: "Lekar pravi beleške za stolom",
      anesthesiaWorkstation: "Anesteziolog kod aparata za ventilaciju i monitoring",
      ecgElectrodes: "Postavljanje EKG elektroda pacijentu",
      surgicalInstrumentsGloves: "Ruke u rukavicama drže hirurške instrumente",
      stethoscopeExamination: "Ruka u rukavici postavlja stetoskop na ruku pacijenta",
      nurseInstrumentPreparation: "Medicinska sestra u sterilnoj odeći priprema hirurške instrumente",
      stethoscopeHands: "Zdravstveni radnik drži stetoskop iza leđa",
      clinicalDocumentation: "Stručnjak beleži na podlozi pored pacijenta",
      nursePatientCare: "Medicinska sestra neguje pacijentkinju u bolničkom krevetu",
      infusionCare: "Medicinska sestra podešava infuziju u bolničkoj sobi",
      clinicItTeam: "Dve zaposlene u klinici rade zajedno za računarom",
      precisionMachining: "Precizna obrada metalnog dela",
      laboratoryTeam: "Laboratorijsko osoblje radi na savremenoj opremi",
      surgicalInstruments: "Hirurške klešte i makaze na sterilnoj kompresi",
      surgeryInstrumentsHands: "Hirurški tim dodaje instrumente tokom operacije",
      operatingTeam: "Operacioni tim na radu u operacionoj sali",
      icuMonitor: "Monitor za ventilaciju pored pacijenta na intenzivnoj nezi",
      keyboardDocumentation: "Ruke kucaju na tastaturi",
      xRay: "Rendgenski snimak dve šake",
      medicalTeamCorridor: "Medicinski tim hoda bolničkim hodnikom",
      newbornCare: "Ruke u rukavicama drže stopala novorođenčeta",
      maternityCare: "Ruke na stomaku trudnice",
      physiotherapyKnee: "Fizioterapeut tretira koleno pacijenta",
      physiotherapyBand: "Vežba stopala sa trakom za vežbanje u fizioterapiji",
    },
    masok: { eyebrow: "Posete projektu", title: "Utisci iz Srbije" },
    projects: { eyebrow: "Na licu mesta", title: "Utisci iz naših projekata" },
  },

  /** The three region job pages the Jobs cards lead to. */
  /** Pojedinačni oglas za posao (sam tekst oglasa je na nemačkom). */
  jobListing: {
    eyebrow: "Oglas za posao",
    published: "Objavljeno",
    contact: "Vaša kontakt osoba",
    back: "Svi oglasi u Nemačkoj",
    note: "Oglas je na nemačkom jeziku.",
    applyTitle: "Prijavite se za ovo radno mesto",
    applyBody: "Pošaljite nam svoje podatke i kratku poruku o sebi. Javićemo vam se lično.",
    jobError: "Molimo unesite ime, prezime, važeću adresu e-pošte i kratku poruku.",
  },

  jobRegions: {
    back: "Svi oglasi za posao",
    germany: {
      meta: {
        title: "Poslovi u Nemačkoj",
        description:
          "Karijera u Nemačkoj: aktuelni oglasi za posao u nemačkim klinikama i lična podrška od prijave, priznavanja kvalifikacija i vize do uspešnog početka rada.",
      },
      openings: {
        eyebrow: "Aktuelni oglasi",
        title: "Oglasi za posao u Nemačkoj",
        note: "Oglasi na nemačkom jeziku",
        ref: "Br.",
        view: "Pogledajte oglas",
        all: "Svi oglasi",
      },
    },
    serbia: {
      meta: { title: "Poslovi u Srbiji", description: "Oglasi za posao povezani sa projektima SBP Management-a u Srbiji." },
      eyebrow: "Poslovi · Srbija",
      title: "Poslovi u Srbiji",
      lead: "Oglasi povezani sa našim projektima u Srbiji.",
      project: { label: "MASOK Akademija | Srbija", link: "masok" },
    },
    kazakhstan: {
      meta: {
        title: "Poslovi u Kazahstanu i Centralnoj Aziji",
        description: "Oglasi za posao povezani sa Nemačko-kazahstanskom zdravstvenom inicijativom.",
      },
      eyebrow: "Poslovi · Kazahstan & Centralna Azija",
      title: "Poslovi u Kazahstanu i Centralnoj Aziji",
      lead: "Oglasi povezani sa Nemačko-kazahstanskom zdravstvenom inicijativom.",
      project: { label: "Zdravstvena akademija Kazahstan", link: "kazakhstan" },
    },
    empty: {
      title: "Trenutno nema objavljenih oglasa",
      body: "Za ovaj region trenutno nema objavljenih oglasa. Kontaktirajte nas da biste poslali otvorenu prijavu ili se raspitali o predstojećim prilikama.",
      contact: "Kontaktirajte nas",
      project: "O projektu",
    },
  },

  /** Candidate support on the Jobs page (brief section 13). */
  candidateSupport: {
    eyebrow: "Vaša karijera u Nemačkoj",
    title: "Lična podrška od prijave do uspešnog početka rada",
    body: "Radite u medicinskoj struci i želite da gradite svoju profesionalnu budućnost u Nemačkoj? SBP Management individualno i transparentno vodi međunarodne stručnjake kroz neophodne korake.",
    listTitle: "Podržavamo vas u sledećem",
    items: [
      "Kursevima nemačkog jezika i jezičkoj pripremi",
      "Vizi i ulasku u zemlju",
      "Priznavanju stranih stručnih kvalifikacija",
      "Priznavanju dodatnih kvalifikacija i usavršavanja",
      "Spajanju porodice",
      "Traženju stana i prvim administrativnim koracima",
      "Tarifnom razvrstavanju odnosno uvažavanju radnog iskustva, gde je primenljivo",
      "Pripremi, onbordingu i integraciji u nemačkim klinikama",
    ],
    apply: "Prijavite se sada",
  },
} as const;
