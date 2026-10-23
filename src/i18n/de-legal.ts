/**
 * German Datenschutzhinweise and Impressum. Follows the structure of en-legal.ts exactly; reuses the
 * established wording of the old German texts (src/content/legal-data.ts) where a passage matches.
 *
 * Text in [square brackets] is a placeholder: the page highlights it, and it must be filled in
 * (and the whole text reviewed by a lawyer or the data protection contact) before going live.
 * Blocks: { p } paragraph · { h } sub-heading · { ul } list.
 */
export const deLegal = {
  legal: {
    privacy: {
      meta: { title: "Datenschutz", description: "Wie SBP Management personenbezogene Daten auf dieser Website verarbeitet." },
      eyebrow: "Rechtliches",
      title: "Datenschutzhinweise",
      updated: "Stand: [Datum der Veröffentlichung]",
      note: "",
      sections: [
        {
          heading: "1. Datenschutz auf einen Blick",
          blocks: [
            { h: "Allgemeine Hinweise" },
            {
              p: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
            },
            { h: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?" },
            {
              p: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Verantwortliche Stelle“ weiter unten sowie dem Impressum dieser Website entnehmen.",
            },
            { h: "Wie erfassen wir Ihre Daten?" },
            {
              p: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
            },
            {
              p: "Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
            },
            { h: "Wofür nutzen wir Ihre Daten?" },
            {
              p: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Daten, die Sie uns über das Kontaktformular oder per E-Mail übermitteln, verwenden wir zur Beantwortung Ihrer Anfrage.",
            },
            { h: "Analyse und Tracking" },
            { p: "Diese Website verwendet keine Analyse-, Tracking- oder Werbetools." },
            { h: "Welche Rechte haben Sie bezüglich Ihrer Daten?" },
            {
              p: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
            },
            {
              p: "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter den unten angegebenen Kontaktdaten an uns wenden.",
            },
          ],
        },
        {
          heading: "2. Hosting und Dienstleister",
          blocks: [
            { p: "Für den Betrieb dieser Website und die Kommunikation mit Ihnen setzen wir die folgenden externen Dienstleister ein. Sie werden nachfolgend jeweils näher beschrieben:" },
            {
              ul: [
                "Netlify, Inc. (USA) – Hosting dieser Website",
                "One.com Group AB (Schweden) – Domainregistrierung und Nameserver (DNS)",
                "Google Ireland Limited (Irland) – E-Mail für unsere @sbp-management.com-Adressen (Google Workspace)",
                "Plus Five Five, Inc., handelnd als Resend (USA) – Zustellung der über das Kontaktformular gesendeten Nachrichten (siehe Abschnitt 4)",
              ],
            },
            { h: "Hosting der Website: Netlify" },
            { p: "Diese Website wird bei Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA (Netlify) gehostet. Netlify stellt die Seiten dieser Website über sein weltweites Content Delivery Network bereit." },
            {
              p: "Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters verarbeitet. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
            },
            {
              p: "Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).",
            },
            {
              p: "Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist, und unsere Weisungen in Bezug auf diese Daten befolgen. Wir haben mit Netlify einen Vertrag über Auftragsverarbeitung (Art. 28 DSGVO) geschlossen. Netlify, Inc. ist nach dem EU-US Data Privacy Framework zertifiziert; ergänzend gelten die EU-Standardvertragsklauseln. Details: https://www.netlify.com/privacy/",
            },
            { h: "Domain und Nameserver: one.com" },
            {
              p: "Unsere Domain sbp-management.com ist bei der One.com Group AB, Carlsgatan 3, 211 20 Malmö, Schweden (one.com) registriert, die auch die Nameserver (DNS) der Domain betreibt. Wenn Ihr Browser oder E-Mail-Programm unsere Domain abfragt, wird die Anfrage von den Nameservern von one.com beantwortet. one.com verarbeitet dabei nur die hierfür erforderlichen technischen Daten (insbesondere die IP-Adresse des anfragenden Servers). one.com hat seinen Sitz in der EU; soweit one.com Dienstleister außerhalb der EU/des EWR einsetzt, stützt es sich auf die EU-Standardvertragsklauseln. Rechtsgrundlage ist unser berechtigtes Interesse an einem zuverlässigen Betrieb unserer Domain (Art. 6 Abs. 1 lit. f DSGVO). Details: https://www.one.com/en-gb/legal/privacy/",
            },
            { h: "E-Mail" },
            {
              p: "Unsere E-Mail wird über Google Workspace bereitgestellt, das für Kunden in der EU von der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Google) betrieben wird. E-Mails, die Sie an eine @sbp-management.com-Adresse senden, sowie die Nachrichten aus dem Kontaktformular werden in unseren Google-Workspace-Postfächern empfangen und gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Nachricht einen Vertrag oder vorvertragliche Maßnahmen betrifft, im Übrigen unser berechtigtes Interesse an einer effizienten Kommunikation (Art. 6 Abs. 1 lit. f DSGVO). Wir haben mit Google einen Vertrag über Auftragsverarbeitung (Art. 28 DSGVO) geschlossen. Daten können auch durch die Google LLC in den USA verarbeitet werden; die Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert, ergänzend gelten die EU-Standardvertragsklauseln. Details: https://policies.google.com/privacy",
            },
          ],
        },
        {
          heading: "3. Allgemeine Hinweise und Pflichtinformationen",
          blocks: [
            { h: "Datenschutz" },
            {
              p: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
            },
            {
              p: "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
            },
            {
              p: "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
            },
            { h: "Verantwortliche Stelle" },
            { p: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:" },
            {
              ul: [
                "SBP-Management",
                "Grußdorfstraße 3a, 13507 Berlin, Deutschland",
                "Geschäftsführung: Sabina Banda",
                "Telefon: +49 (0)30 437 46 351",
                "E-Mail: info@sbp-management.com",
              ],
            },
            {
              p: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
            },
            { h: "Datenschutzbeauftragter" },
            { p: "datenschutz@sbp-management.com" },
            { h: "Datenübermittlung in Drittstaaten" },
            {
              p: "Wir nutzen Dienste von Unternehmen mit Sitz in den USA bzw. mit dortiger Muttergesellschaft: unseren Hoster Netlify und unseren E-Mail-Anbieter Google (siehe Abschnitt 2) sowie den E-Mail-Zustelldienst Resend (siehe Abschnitt 4). Daten können daher in die USA übermittelt werden. Übermittlungen an Netlify und Google erfolgen auf Grundlage des EU-US Data Privacy Framework (Angemessenheitsbeschluss der Europäischen Kommission, Art. 45 DSGVO) und der EU-Standardvertragsklauseln (Art. 46 DSGVO). Gleiches gilt für Resend; Resend ist ebenfalls nach dem EU-US Data Privacy Framework zertifiziert und hat den EU-Standardvertragsklauseln zugestimmt.",
            },
            { h: "Widerruf Ihrer Einwilligung zur Datenverarbeitung" },
            {
              p: "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
            },
            { h: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)" },
            {
              p: "Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).",
            },
            {
              p: "Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).",
            },
            { h: "Beschwerderecht bei der zuständigen Aufsichtsbehörde" },
            {
              p: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
            },
            { h: "Recht auf Datenübertragbarkeit" },
            {
              p: "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
            },
            { h: "Auskunft, Löschung und Berichtigung" },
            {
              p: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
            },
            { h: "Recht auf Einschränkung der Verarbeitung" },
            {
              p: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:",
            },
            {
              ul: [
                "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
                "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
                "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
                "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
              ],
            },
            {
              p: "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.",
            },
          ],
        },
        {
          heading: "4. Datenerfassung auf dieser Website",
          blocks: [
            { h: "Cookies" },
            {
              p: "Diese Website setzt keine Cookies und verwendet keine Cookies zu Analyse- oder Werbezwecken. Auch unser Hosting-Anbieter Netlify setzt auf dieser Website keine Cookies.",
            },
            {
              p: "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.",
            },
            { h: "Schriftarten" },
            {
              p: "Die auf dieser Website verwendeten Schriftarten werden vom eigenen Server der Website ausgeliefert. Beim Laden der Seiten wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.",
            },
            { h: "Kontaktformular" },
            {
              p: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            },
            {
              p: "Für die Zustellung der Nachrichten aus dem Kontaktformular in unser Postfach nutzen wir den E-Mail-Zustelldienst Resend, betrieben von Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA (Resend), unter Nutzung der EU-Region. Resend verarbeitet den Inhalt des Formulars ausschließlich zur Zustellung der Nachricht. Wir haben mit Resend einen Vertrag über Auftragsverarbeitung (Art. 28 DSGVO) geschlossen, der die EU-Standardvertragsklauseln enthält; Resend ist zudem nach dem EU-US Data Privacy Framework zertifiziert. Details: https://resend.com/legal/dpa",
            },
            {
              p: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.",
            },
            {
              p: "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
            },
            { h: "Anfrage per E-Mail, Telefon oder Telefax" },
            {
              p: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            },
            {
              p: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.",
            },
            {
              p: "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.",
            },
          ],
        },
      ],
    },

    imprint: {
      meta: { title: "Impressum", description: "Rechtliche Angaben zu SBP Management (Impressum)." },
      eyebrow: "Rechtliches",
      title: "Impressum",
      updated: "",
      note: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",
      sections: [
        {
          heading: "SBP-Management",
          blocks: [
            { ul: ["Geschäftsführung: Frau Sabina Banda", "Adresse: Grußdorfstraße 3a, 13507 Berlin, Deutschland"] },
            { h: "Kontakt" },
            { ul: ["Tel.: +49 (0)30 437 46 351", "Fax: +49 (0)30 437 46 565", "E-Mail: info@sbp-management.com"] },
            { h: "Umsatzsteuer-ID" },
            { p: "Umsatzsteuer-Identifikationsnummer: DE275333280" },
          ],
        },
      ],
    },
  },
} as const;
