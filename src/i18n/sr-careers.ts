/**
 * Serbian (Latin) copy of the profession pages under Jobs in Germany (/jobs/deutschland/...).
 * Translated from de-careers.ts (German master); keeps exactly the shape of de-careers.ts.
 * German official terms (Approbation, Fachsprachprüfung, Kenntnisprüfung, Anpassungslehrgang,
 * Anerkennungspartnerschaft) are kept with a Serbian explanation. Needs the client's approval.
 */
export const srCareers = {
  careerPage: {
    eyebrow: "Rad u Nemačkoj",
    requirements: "Šta vam je potrebno",
    steps: "Vaš put do Nemačke",
    faq: "Česta pitanja",
    openings: {
      title: "Otvorena radna mesta",
      none: "Trenutno u ovoj oblasti nema objavljenih oglasa. Ipak nam se prijavite – javićemo vam se čim se otvori odgovarajuće radno mesto.",
      view: "Pogledajte oglas",
    },
    others: "Ostala zanimanja",
    more: "Saznajte više",
    apply: "Prijavite se sada",
    /** Shown under the requirements: the rules are set by the federal states. */
    note: "Za priznavanje je nadležan organ savezne pokrajine u kojoj ćete raditi; detalji se mogu razlikovati od pokrajine do pokrajine. Obavezujuću odluku donosi nadležni organ.",
    /** Breadcrumb trail (structured data for search engines). */
    crumbs: { home: "Početna", jobs: "Poslovi", germany: "Poslovi u Nemačkoj" },
    /** Section on the Jobs in Germany page that links to the profession pages. */
    overview: {
      eyebrow: "Zanimanja",
      title: "Vaše zanimanje – vaš put do Nemačke",
      body: "Priznavanje diplome, jezik i viza razlikuju se u zavisnosti od zanimanja. Ovde ćete pronaći šta važi za vaše zanimanje.",
    },
  },

  careerNursesPage: {
    meta: {
      title: "Posao medicinska sestra u Nemačkoj: priznavanje, viza",
      description:
        "Rad u Nemačkoj za medicinske sestre i tehničare: priznavanje diplome, nemački B2, viza i otvorena radna mesta u klinikama – uz ličnu podršku SBP Management-a.",
    },
    card: {
      title: "Medicinske sestre i tehničari",
      body: "Priznavanje diplome medicinske sestre, nemački na nivou B2 i put do nemačke klinike.",
    },
    title: "Posao za medicinske sestre i tehničare u Nemačkoj",
    lead: "Nemačke klinike traže medicinske sestre i tehničare iz inostranstva. Pratimo vas od priznavanja vaše diplome preko jezika i vize do prvog radnog dana.",
    body: [
      "Intenzivna nega, pedijatrija, neonatologija ili opšte odeljenje: sa priznatim obrazovanjem medicinske sestre imate veoma dobre šanse u Nemačkoj. Povezujemo vas sa klinikama koje odgovaraju vašem iskustvu.",
    ],
    requirements: [
      "Završena škola ili studije za medicinsku sestru / tehničara",
      "Nemački na nivou B2 za priznavanje – za početak kroz partnerstvo za priznavanje (Anerkennungspartnerschaft) najpre je dovoljan A2",
      "Zdravstvena sposobnost i uverenje o nekažnjavanju",
      "Spremnost da nadoknadite sadržaje koji nedostaju kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung)",
    ],
    steps: [
      {
        title: "Upoznavanje",
        body: "Razgovaramo o vašem obrazovanju, iskustvu i ciljevima i proveravamo vaša dokumenta.",
      },
      {
        title: "Priznavanje i jezik",
        body: "Zajedno sa vama pripremamo zahtev za priznavanje i posredujemo kurseve nemačkog do nivoa B2.",
      },
      {
        title: "Klinika i viza",
        body: "Pronalazimo odgovarajuću kliniku i pratimo vas kroz ugovor o radu i zahtev za vizu.",
      },
      {
        title: "Dolazak",
        body: "Kurs prilagođavanja ili ispit znanja, stan, nadležni organi, uvođenje u posao – ostajemo uz vas.",
      },
    ],
    sections: [
      {
        title: "Priznavanje diplome medicinske sestre u Nemačkoj",
        body: [
          "Medicinska sestra / tehničar (Pflegefachfrau i Pflegefachmann) u Nemačkoj je zaštićeno zanimanje: kao medicinska sestra radite nakon državnog priznavanja. Nadležna je služba za priznavanje savezne pokrajine u kojoj ćete raditi. Ona proverava da li je vaše obrazovanje jednako vrednom nemačkom.",
          "Ako organ utvrdi bitne razlike, nadoknađujete ih kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung). U tom periodu već možete da radite u nezi, na primer kao pomoćni negovatelj.",
        ],
      },
      {
        title: "Viza i boravak",
        body: [
          "Sa priznatom diplomom i ugovorom o radu medicinske sestre i tehničari iz zemalja van EU dobijaju boravišnu dozvolu kao stručni kadrovi. Ako priznavanje još nije završeno, možete doći u Nemačku radi mera prilagođavanja.",
          "Od marta 2024. postoji i partnerstvo za priznavanje (Anerkennungspartnerschaft): već radite kod svog poslodavca, a priznavanje teče paralelno. Za početak je tada dovoljno znanje nemačkog na nivou A2. Državljanima EU nije potrebna viza.",
        ],
      },
      {
        title: "Rad i zarada",
        body: [
          "Medicinske sestre i tehničari rade u klinikama na opštim odeljenjima i na intenzivnoj nezi, u specijalizovanim oblastima kao što su pedijatrija ili neonatologija i u dugotrajnoj nezi. Plata se uglavnom isplaćuje prema kolektivnom ugovoru, na primer prema TVöD-P (kolektivni ugovor za javnu službu u oblasti nege).",
          "Vaša plata zavisi od kvalifikacije, radnog iskustva, poslodavca i regiona. Konkretne iznose za određeno radno mesto saopštićemo vam u ličnom razgovoru.",
        ],
      },
    ],
    faq: [
      {
        q: "Koje znanje nemačkog mi je potrebno kao medicinskoj sestri?",
        a: "Za priznavanje diplome medicinske sestre po pravilu se traži nemački na nivou B2. Ko dolazi u Nemačku kroz partnerstvo za priznavanje, počinje sa A2 i nastavlja da uči. Posredujemo odgovarajuće kurseve, uključujući i stručni jezik nege.",
      },
      {
        q: "Koliko traje priznavanje?",
        a: "To zavisi od savezne pokrajine, vaših dokumenata i od toga da li je potreban kurs prilagođavanja ili ispit znanja. Računajte sa nekoliko meseci. Nakon provere vaših dokumenata reći ćemo vam sa čim možete da računate.",
      },
      {
        q: "Da li me podrška SBP Management-a nešto košta?",
        a: "Ne. Za kandidatkinje i kandidate naša podrška je besplatna; troškove snosi poslodavac.",
      },
      {
        q: "Može li moja porodica da dođe sa mnom?",
        a: "Stručni kadrovi po pravilu mogu da dovedu bračnog ili životnog partnera i maloletnu decu. Objasnićemo vam uslove i zajedno sa vama isplanirati spajanje porodice.",
      },
    ],
  },

  careerDoctorsPage: {
    meta: {
      title: "Lekar u Nemačkoj: aprobacija, Fachsprachprüfung, posao",
      description:
        "Lekar u Nemačkoj: aprobacija, stručni ispit iz nemačkog na nivou C1, ispit znanja, viza i posao lekara na specijalizaciji ili specijaliste – uz SBP Management.",
    },
    card: {
      title: "Lekarke i lekari",
      body: "Aprobacija, ispit iz stručnog nemačkog jezika i posao lekara na specijalizaciji ili specijaliste.",
    },
    title: "Posao lekara u Nemačkoj",
    lead: "Bilo da ste lekarka na specijalizaciji ili iskusni specijalista: nemačke klinike traže lekarke i lekare. Pratimo vas kroz aprobaciju (Approbation), jezički ispit i vizu sve do vašeg novog odeljenja.",
    body: [
      "Poznajemo procedure u nemačkim klinikama i kod nadležnih organa – i povezujemo vas sa odeljenjima koja odgovaraju vašoj specijalnosti i vašim planovima.",
    ],
    requirements: [
      "Završene studije medicine",
      "Opšte znanje nemačkog (po pravilu B2) i ispit iz stručnog nemačkog jezika (Fachsprachprüfung) na nivou C1",
      "Dokazi o studijama, praktičnoj obuci i radnom iskustvu",
      "Zdravstvena sposobnost i uverenje o nekažnjavanju",
    ],
    steps: [
      {
        title: "Upoznavanje",
        body: "Razgovaramo o specijalnosti, iskustvu i ciljevima i proveravamo vaša dokumenta.",
      },
      {
        title: "Zahtev za aprobaciju",
        body: "Zajedno sa vama pripremamo zahtev i posredujemo kurseve za Fachsprachprüfung i ispit znanja (Kenntnisprüfung).",
      },
      {
        title: "Klinika i viza",
        body: "Pronalazimo odgovarajuće odeljenje i pratimo vas kroz ugovor o radu i zahtev za vizu.",
      },
      {
        title: "Dolazak",
        body: "Uvođenje u posao, specijalizacija, stan i nadležni organi – ostajemo uz vas.",
      },
    ],
    sections: [
      {
        title: "Aprobacija i privremena dozvola za rad",
        body: [
          "Da biste trajno radili kao lekarka ili lekar, potrebna vam je aprobacija (Approbation), odnosno trajna dozvola za obavljanje lekarske delatnosti. Diplome iz EU po pravilu se priznaju automatski. Kod diploma iz drugih zemalja nadležni organ savezne pokrajine proverava jednaku vrednost vaših studija.",
          "Ako postoje bitne razlike, polažete ispit znanja (Kenntnisprüfung). Do aprobacije može se izdati privremena dozvola za rad (Berufserlaubnis), sa kojom već radite kao lekar.",
        ],
      },
      {
        title: "Ispit iz stručnog nemačkog jezika (Fachsprachprüfung)",
        body: [
          "Pre aprobacije ili privremene dozvole za rad dokazujete znanje medicinskog stručnog jezika na nivou C1 – na ispitu iz stručnog nemačkog jezika (Fachsprachprüfung), najčešće pri lekarskoj komori savezne pokrajine (Landesärztekammer). Proveravaju se razgovor sa pacijentkinjama i pacijentima, dokumentacija i sporazumevanje u timu.",
          "Posredujemo pripremne kurseve i sa vama vežbamo tipične ispitne situacije.",
        ],
      },
      {
        title: "Viza, specijalizacija i zarada",
        body: [
          "Sa aprobacijom ili privremenom dozvolom za rad i ugovorom o radu lekarke i lekari iz zemalja van EU dobijaju boravišnu dozvolu kao stručni kadrovi, često Plavu kartu EU. Za pripremu za ispit znanja postoje posebne boravišne dozvole.",
          "U klinici radite kao lekarka ili lekar na specijalizaciji ili kao specijalista. Plata se uglavnom isplaćuje prema kolektivnom ugovoru, na primer prema TV-Ärzte (kolektivni ugovor za lekare).",
        ],
      },
    ],
    faq: [
      {
        q: "Da li moram da imam aprobaciju pre nego što dođem u Nemačku?",
        a: "Ne. Možete doći u Nemačku radi pripreme za ispit znanja ili početi sa privremenom dozvolom za rad. Koji put vam odgovara, razjasnićemo nakon provere vaših dokumenata.",
      },
      {
        q: "Mogu li da završim specijalizaciju u Nemačkoj?",
        a: "Da. Specijalizacija se obavlja u klinici i reguliše je lekarska komora savezne pokrajine. Zvanje specijaliste stečeno u inostranstvu može se posebno priznati.",
      },
      {
        q: "Kako da se pripremim za Fachsprachprüfung i ispit znanja?",
        a: "Postoje specijalizovani kursevi uživo i onlajn. Preporučićemo vam odgovarajuće ponude i sa vama isplanirati ispite tako da što pre počnete da radite u klinici.",
      },
      {
        q: "Da li me podrška SBP Management-a nešto košta?",
        a: "Ne. Za kandidatkinje i kandidate naša podrška je besplatna; troškove snosi poslodavac.",
      },
    ],
  },

  careerMidwivesPage: {
    meta: {
      title: "Babica posao u Nemačkoj: priznavanje diplome, jezik",
      description:
        "Babica u Nemačkoj: priznavanje diplome, nemački B2, kurs prilagođavanja ili ispit znanja i radna mesta u porodilištu – uz podršku SBP Management-a.",
    },
    card: {
      title: "Babice",
      body: "Priznavanje diplome babice i put do porođajne sale nemačke klinike.",
    },
    title: "Posao babice u Nemačkoj",
    lead: "Porodilišta u Nemačkoj traže babice. Pratimo vas kroz priznavanje vaše diplome i dovodimo vas u tim koji vam odgovara.",
    body: [
      "Babice u Nemačkoj rade u porođajnoj sali, na odeljenju za babinje i – nakon određenog iskustva – i samostalno, u pripremi za porođaj i nezi posle porođaja.",
    ],
    requirements: [
      "Završena škola ili studije za babicu",
      "Nemački na nivou B2",
      "Zdravstvena sposobnost i uverenje o nekažnjavanju",
      "Spremnost da nadoknadite sadržaje koji nedostaju kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung)",
    ],
    steps: [
      {
        title: "Upoznavanje",
        body: "Razgovaramo o vašem obrazovanju i iskustvu i proveravamo vaša dokumenta.",
      },
      {
        title: "Priznavanje i jezik",
        body: "Zajedno sa vama pripremamo zahtev za priznavanje i posredujemo kurseve nemačkog do nivoa B2.",
      },
      {
        title: "Klinika i viza",
        body: "Pronalazimo odgovarajuće porodilište i pratimo vas kroz ugovor o radu i zahtev za vizu.",
      },
      {
        title: "Dolazak",
        body: "Mera izjednačavanja, uvođenje u rad u porođajnoj sali, stan i nadležni organi – ostajemo uz vas.",
      },
    ],
    sections: [
      {
        title: "Priznavanje diplome babice",
        body: [
          "Babica (Hebamme) je u Nemačkoj zaštićeno zanimanje: to zvanje smete da koristite nakon državnog priznavanja. Od 2020. godine ovo zanimanje se u Nemačkoj stiče kroz studije; strane diplome se proveravaju na jednaku vrednost.",
          "Ako postoje bitne razlike, nadoknađujete ih kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung) sa usmenim i praktičnim delom. Za diplome iz EU delimično važe drugačiji postupci.",
        ],
      },
      {
        title: "Viza i boravak",
        body: [
          "Sa priznatom diplomom i ugovorom o radu babice iz zemalja van EU dobijaju boravišnu dozvolu kao stručni kadrovi. Ako priznavanje još nije završeno, možete doći u Nemačku radi mera prilagođavanja ili kroz partnerstvo za priznavanje (Anerkennungspartnerschaft) sa svojim poslodavcem.",
        ],
      },
      {
        title: "Rad i zarada",
        body: [
          "U klinici babice rade u smenama u porođajnoj sali i na odeljenju za babinje, u tesnoj saradnji sa lekarkama, lekarima i medicinskim sestrama. Plata se uglavnom isplaćuje prema kolektivnom ugovoru; vaša plata zavisi od iskustva, poslodavca i regiona.",
        ],
      },
    ],
    faq: [
      {
        q: "Koje znanje nemačkog mi je potrebno kao babici?",
        a: "Za priznavanje se po pravilu traži nemački na nivou B2. U porođajnoj sali je sigurna komunikacija posebno važna – posredujemo kurseve koji obuhvataju i stručni jezik.",
      },
      {
        q: "Koja je razlika između kursa prilagođavanja i ispita znanja?",
        a: "Na kursu prilagođavanja određeno vreme radite i učite pod nadzorom i završavate ga razgovorom. Ispit znanja proverava vaše znanje u usmenom i praktičnom delu. U zavisnosti od rešenja često možete da birate.",
      },
      {
        q: "Da li me podrška SBP Management-a nešto košta?",
        a: "Ne. Za kandidatkinje i kandidate naša podrška je besplatna; troškove snosi poslodavac.",
      },
    ],
  },

  careerMedtechPage: {
    meta: {
      title: "OTA, ATA, MTR, MTL: posao i rad u Nemačkoj",
      description:
        "Rad u Nemačkoj kao OTA, ATA, MTR ili MTL: priznavanje diplome, nemački B2, viza i posao u OP sali, anesteziji, radiologiji i laboratoriji – uz SBP Management.",
    },
    card: {
      title: "Operaciona sala, anestezija, radiologija, laboratorija",
      body: "Operacioni i anesteziološki tehničari, radiologija i laboratorija (OTA, ATA, MTR, MTL).",
    },
    title: "Medicinsko-tehnička zanimanja u Nemačkoj: OTA, ATA, MTR i MTL",
    lead: "U operacionoj sali, anesteziji, radiologiji i laboratoriji potrebni su stručnjaci iz inostranstva. Pokazujemo vam koji put odgovara vašoj diplomi i pratimo vas sve do vašeg novog tima.",
    body: [
      "U Nemačkoj se ova zanimanja zovu: operacioni tehničar (Operationstechnische Assistenz, OTA), anesteziološki tehničar (Anästhesietechnische Assistenz, ATA), medicinski tehnolog za radiologiju (MTR, ranije MTRA) i za laboratorijsku dijagnostiku (MTL).",
    ],
    requirements: [
      "Završena škola ili studije u oblasti operacione sale, anestezije, radiologije ili laboratorije",
      "Nemački na nivou B2",
      "Zdravstvena sposobnost i uverenje o nekažnjavanju",
      "Spremnost da nadoknadite sadržaje koji nedostaju kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung)",
    ],
    steps: [
      {
        title: "Upoznavanje",
        body: "Proveravamo vašu diplomu i utvrđujemo kom nemačkom zanimanju odgovara.",
      },
      {
        title: "Priznavanje i jezik",
        body: "Zajedno sa vama pripremamo zahtev za priznavanje i posredujemo kurseve nemačkog do nivoa B2.",
      },
      {
        title: "Klinika i viza",
        body: "Pronalazimo odgovarajuću kliniku i pratimo vas kroz ugovor o radu i zahtev za vizu.",
      },
      {
        title: "Dolazak",
        body: "Mera izjednačavanja, uvođenje u posao, stan i nadležni organi – ostajemo uz vas.",
      },
    ],
    sections: [
      {
        title: "Priznavanje vaše diplome",
        body: [
          "OTA, ATA, MTR i MTL su u Nemačkoj zakonski regulisana zanimanja: u njima radite nakon državnog priznavanja. Nadležni organ proverava da li je vaše obrazovanje jednake vrednosti; razlike nadoknađujete kroz kurs prilagođavanja (Anpassungslehrgang) ili ispit znanja (Kenntnisprüfung).",
          "Mnogi stručnjaci iz inostranstva radili su kao medicinske sestre ili tehničari u operacionoj sali ili anesteziji. Za njih i priznavanje kao medicinska sestra / tehničar sa naknadnom stručnom specijalizacijom može biti pravi put – savetujemo vas o tome.",
        ],
      },
      {
        title: "Viza i boravak",
        body: [
          "Sa priznatom diplomom i ugovorom o radu stručnjaci iz zemalja van EU dobijaju boravišnu dozvolu kao stručni kadrovi. Ako priznavanje još nije završeno, možete doći u Nemačku radi mera prilagođavanja ili kroz partnerstvo za priznavanje (Anerkennungspartnerschaft) sa svojim poslodavcem.",
        ],
      },
      {
        title: "Rad i zarada",
        body: [
          "Radite u operacionom timu, u anesteziji, u radiološkoj dijagnostici ili u kliničkoj laboratoriji. Plata se uglavnom isplaćuje prema kolektivnom ugovoru; vaša plata zavisi od kvalifikacije, iskustva i regiona.",
        ],
      },
    ],
    faq: [
      {
        q: "Moje zanimanje se u mojoj zemlji drugačije zove. Koje nemačko zanimanje mu odgovara?",
        a: "To utvrđujemo na osnovu sadržaja vašeg obrazovanja. Često je moguće više puteva – na primer OTA ili medicinska sestra / tehničar sa specijalizacijom za operacionu salu. Preporučujemo put sa najboljim izgledima za brzo priznavanje.",
      },
      {
        q: "Koje znanje nemačkog mi je potrebno?",
        a: "Za priznavanje se po pravilu traži nemački na nivou B2. Posredujemo odgovarajuće kurseve.",
      },
      {
        q: "Da li me podrška SBP Management-a nešto košta?",
        a: "Ne. Za kandidatkinje i kandidate naša podrška je besplatna; troškove snosi poslodavac.",
      },
    ],
  },

  careerSterilePage: {
    meta: {
      title: "Sterilizacija – posao u Nemačkoj (AEMP/ZSVA)",
      description:
        "Posao u sterilizaciji (AEMP/ZSVA) i sa hirurškim instrumentima u Nemačkoj: kvalifikacija, Fachkunde kursevi, viza i radna mesta – uz podršku SBP Management-a.",
    },
    card: {
      title: "Sterilizacija i instrumenti",
      body: "Obrada medicinskih proizvoda (AEMP/ZSVA), poznavanje instrumenata i rukovodeće funkcije.",
    },
    title: "Sterilizacija i hirurški instrumenti: posao u Nemačkoj",
    lead: "Bez pravilno obrađenih instrumenata nema operacije. Klinike u Nemačkoj traže stručnjake za obradu medicinskih proizvoda – od zaposlenih u sterilizaciji (AEMP) do rukovodilaca.",
    body: [
      "Snabdevanje sterilnim materijalom i medicinska tehnika su među ključnim temama SBP Management-a: u toj oblasti razvijamo procese i kvalifikacije u nemačkim klinikama i sa MASOK Akademijom u Srbiji.",
    ],
    requirements: [
      "Iskustvo u obradi medicinskih proizvoda, u operacionoj sali ili u radu sa hirurškim instrumentima",
      "Za stručna radna mesta po pravilu kurs Fachkunde I (Sachkunde) prema DGSV – za rukovodeća mesta Fachkunde II ili III",
      "Znanje nemačkog, u zavisnosti od radnog mesta najmanje B1",
      "Pažljivost, razumevanje higijene i radost u preciznom radu",
    ],
    steps: [
      {
        title: "Upoznavanje",
        body: "Razgovaramo o vašem iskustvu i proveravamo koje kvalifikacije već imate.",
      },
      {
        title: "Kvalifikacija",
        body: "Posredujemo Fachkunde kurseve i kurseve nemačkog – i preko naših partnera u Srbiji.",
      },
      {
        title: "Klinika i viza",
        body: "Pronalazimo odgovarajuću sterilizaciju (AEMP) i pratimo vas kroz ugovor o radu i zahtev za vizu.",
      },
      {
        title: "Dolazak",
        body: "Uvođenje u posao, stan i nadležni organi – ostajemo uz vas.",
      },
    ],
    sections: [
      {
        title: "Zadaci u sterilizaciji (AEMP)",
        body: [
          "U jedinici za obradu medicinskih proizvoda (Aufbereitungseinheit für Medizinprodukte, AEMP, poznata i kao ZSVA – centralna sterilizacija) hirurški instrumenti se čiste, dezinfikuju, proveravaju, održavaju, pakuju i sterilišu – prema utvrđenim postupcima i uz potpunu dokumentaciju. Greške ugrožavaju pacijentkinje i pacijente; zato su potrebni stručno znanje i pažljivost.",
        ],
      },
      {
        title: "Kvalifikacija i priznavanje",
        body: [
          "Za razliku od nege, rad u sterilizaciji (AEMP) u Nemačkoj nije zanimanje sa državnom dozvolom. Poslodavci ipak po pravilu očekuju Fachkunde kurseve prema smernicama Nemačkog društva za snabdevanje sterilnim materijalom (Deutsche Gesellschaft für Sterilgutversorgung, DGSV): Fachkunde I za stručne radnike, Fachkunde II i III za rukovodioce smena i odeljenja.",
          "Koja boravišna dozvola dolazi u obzir za vas, zavisi od vaše diplome i radnog iskustva. Proveravamo vaš slučaj i pokazujemo vam odgovarajući put.",
        ],
      },
      {
        title: "Hirurški instrumenti i medicinska tehnika",
        body: [
          "Nemačka je jedna od najvažnijih lokacija za hirurške instrumente. Pored obrade u klinikama postoje radna mesta u održavanju, popravci i proizvodnji. Sa MASOK Akademijom u Leskovcu praktično pripremamo stručnjake za rad sa hirurškim instrumentima i u snabdevanju sterilnim materijalom.",
        ],
      },
    ],
    faq: [
      {
        q: "Da li mi je potrebno priznavanje diplome da bih radio u sterilizaciji (AEMP)?",
        a: "Državna dozvola za obavljanje zanimanja kao u nezi nije potrebna. Za vizu, međutim, može biti potrebno priznavanje vaše diplome ili dokaz o radnom iskustvu. Proveravamo šta važi u vašem slučaju.",
      },
      {
        q: "Šta je Fachkunde I?",
        a: "Kurs prema smernicama DGSV koji pruža osnove obrade medicinskih proizvoda: higijenu, čišćenje i dezinfekciju, sterilizaciju, poznavanje instrumenata i dokumentaciju. Mnogi poslodavci ga zahtevaju ili ga omogućavaju nakon početka rada.",
      },
      {
        q: "Da li me podrška SBP Management-a nešto košta?",
        a: "Ne. Za kandidatkinje i kandidate naša podrška je besplatna; troškove snosi poslodavac.",
      },
    ],
  },
} as const;
