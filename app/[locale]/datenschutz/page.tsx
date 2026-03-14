export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Datenschutz | Adama Soaps", description: "Datenschutzerklärung – Adama GbR" }
    : { title: "Privacy Policy | Adama Soaps", description: "Privacy Policy – Adama GbR" };
}

const linkStyle = {
  color: "#FFFFFF",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
};

const content = {
  de: {
    eyebrow: "Legal",
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "1. Verantwortliche Stelle",
        body: (
          <>
            Verantwortlich für die Datenverarbeitung auf dieser Website:<br /><br />
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A, 80469 München<br />
            E-Mail:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "2. Hosting – Vercel",
        body: (
          <>
            Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            Beim Aufruf unserer Website verarbeitet Vercel automatisch technische Zugriffsdaten (Server-Logfiles),
            darunter IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL sowie Datum und Uhrzeit des Zugriffs.<br /><br />
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
            Mit Vercel wurde ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.
            Die Datenübertragung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO).
            Weitere Informationen: {" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              vercel.com/legal/privacy-policy
            </a>
          </>
        ),
      },
      {
        heading: "3. Bestelldaten",
        body: (
          <>
            Bei einer Bestellung erheben wir folgende personenbezogene Daten: Name, Lieferanschrift, E-Mail-Adresse
            sowie Zahlungsdaten. Diese Daten werden ausschließlich zur Abwicklung des Kaufvertrags verarbeitet
            (Art. 6 Abs. 1 lit. b DSGVO).<br /><br />
            Steuer- und handelsrechtlich relevante Daten (z. B. Rechnungen) werden gemäß §§ 147 AO, 257 HGB
            für 10 Jahre aufbewahrt. Sonstige bestellbezogene Daten werden nach vollständiger Abwicklung gelöscht,
            sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </>
        ),
      },
      {
        heading: "4. Microsoft Clarity (Analyse)",
        body: (
          <>
            Mit Ihrer Einwilligung nutzen wir Microsoft Clarity, einen Analysedienst der Microsoft Corporation,
            One Microsoft Way, Redmond, WA 98052, USA. Clarity erfasst Mausbewegungen, Klicks, Scrollverhalten
            und erstellt Sitzungsaufzeichnungen sowie Heatmaps, um die Bedienbarkeit der Website zu verbessern.<br /><br />
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) in Verbindung mit § 25 Abs. 1 TDDDG.
            Clarity wird erst geladen, nachdem Sie Ihre Einwilligung über den Cookie-Banner erteilt haben.
            Ihre Einwilligung können Sie jederzeit widerrufen, indem Sie den Browserspeicher (localStorage) löschen.<br /><br />
            Mit Microsoft wurde ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.
            Die Datenübertragung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO).
            Weitere Informationen:{" "}
            <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              Microsoft Datenschutzerklärung
            </a>
          </>
        ),
      },
      {
        heading: "5. PayPal",
        body: (
          <>
            Für die Zahlungsabwicklung setzen wir PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
            L-2449 Luxemburg ein. Wenn Sie PayPal als Zahlungsmethode wählen, werden die zur Abwicklung notwendigen
            Daten (Name, Adresse, Bestelldaten) an PayPal übermittelt.<br /><br />
            PayPal verarbeitet diese Daten als eigenständig Verantwortlicher im Sinne der DSGVO.
            Rechtsgrundlage für die Übermittlung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            Weitere Informationen:{" "}
            <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              PayPal Datenschutzerklärung
            </a>
          </>
        ),
      },
      {
        heading: "6. Kontakt per E-Mail",
        body: "Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben und nach Abschluss der Anfrage gelöscht, sofern keine Aufbewahrungspflicht besteht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
      },
      {
        heading: "7. Ihre Rechte",
        body: (
          <>
            Sie haben das Recht auf:<br /><br />
            – Auskunft (Art. 15 DSGVO)<br />
            – Berichtigung (Art. 16 DSGVO)<br />
            – Löschung (Art. 17 DSGVO)<br />
            – Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
            – Datenübertragbarkeit (Art. 20 DSGVO)<br />
            – Widerspruch (Art. 21 DSGVO)<br />
            – Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)<br /><br />
            Wenden Sie sich dazu an:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
            <br /><br />
            Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:<br />
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 27, 91522 Ansbach,{" "}
            <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              www.lda.bayern.de
            </a>
          </>
        ),
      },
      {
        heading: "8. Aktualität",
        body: "Diese Datenschutzerklärung hat den Stand März 2026 und kann bei Änderungen unseres Angebots aktualisiert werden.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Data Controller",
        body: (
          <>
            The controller responsible for data processing on this website:<br /><br />
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A, 80469 Munich, Germany<br />
            Email:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "2. Hosting – Vercel",
        body: (
          <>
            This website is hosted by Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            When you visit our website, Vercel automatically processes technical access data (server log files),
            including IP address, browser type, operating system, referrer URL, and the date and time of access.<br /><br />
            The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure operation of the website).
            A data processing agreement pursuant to Art. 28 GDPR has been concluded with Vercel.
            Data transfer to the USA is based on the EU-US Data Privacy Framework (Art. 45 GDPR).
            More information:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              vercel.com/legal/privacy-policy
            </a>
          </>
        ),
      },
      {
        heading: "3. Order data",
        body: (
          <>
            When you place an order, we collect the following personal data: name, delivery address, email address,
            and payment details. This data is processed exclusively to fulfil the purchase contract
            (Art. 6(1)(b) GDPR).<br /><br />
            Data required by tax and commercial law (e.g. invoices) is retained for 10 years in accordance with
            §§ 147 AO, 257 HGB. Other order-related data is deleted after full completion of the transaction,
            unless a statutory retention obligation applies.
          </>
        ),
      },
      {
        heading: "4. Microsoft Clarity (Analytics)",
        body: (
          <>
            With your consent, we use Microsoft Clarity, an analytics service provided by Microsoft Corporation,
            One Microsoft Way, Redmond, WA 98052, USA. Clarity records mouse movements, clicks, scrolling behaviour,
            and creates session recordings and heatmaps to help us improve the usability of our website.<br /><br />
            The legal basis is Art. 6(1)(a) GDPR (consent) in conjunction with § 25(1) TDDDG.
            Clarity is only loaded after you have given your consent via the cookie banner.
            You may withdraw your consent at any time by clearing your browser&apos;s local storage.<br /><br />
            A data processing agreement pursuant to Art. 28 GDPR has been concluded with Microsoft.
            Data transfer to the USA is based on the EU-US Data Privacy Framework (Art. 45 GDPR).
            More information:{" "}
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              Microsoft Privacy Statement
            </a>
          </>
        ),
      },
      {
        heading: "5. PayPal",
        body: (
          <>
            We use PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg for payment
            processing. When you select PayPal as your payment method, the data required to process the transaction
            (name, address, order data) is transmitted to PayPal.<br /><br />
            PayPal processes this data as an independent controller under GDPR.
            The legal basis for the transfer is Art. 6(1)(b) GDPR (performance of a contract).
            More information:{" "}
            <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              PayPal Privacy Policy
            </a>
          </>
        ),
      },
      {
        heading: "6. Contact by email",
        body: "If you contact us by email, we store your details to process your enquiry. This data will not be passed on without your consent and will be deleted once the enquiry is resolved, unless a retention obligation applies. The legal basis is Art. 6(1)(f) GDPR.",
      },
      {
        heading: "7. Your rights",
        body: (
          <>
            You have the right to:<br /><br />
            – Access your data (Art. 15 GDPR)<br />
            – Rectification of inaccurate data (Art. 16 GDPR)<br />
            – Erasure of your data (Art. 17 GDPR)<br />
            – Restriction of processing (Art. 18 GDPR)<br />
            – Data portability (Art. 20 GDPR)<br />
            – Object to processing (Art. 21 GDPR)<br />
            – Withdraw consent at any time (Art. 7(3) GDPR)<br /><br />
            To exercise your rights, contact:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
            <br /><br />
            You also have the right to lodge a complaint with the competent supervisory authority:<br />
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 27, 91522 Ansbach, Germany,{" "}
            <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              www.lda.bayern.de
            </a>
          </>
        ),
      },
      {
        heading: "8. Last updated",
        body: "This privacy policy was last updated in March 2026 and may be revised as our services evolve.",
      },
    ],
  },
};

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = locale === "de" ? content.de : content.en;

  return (
    <main className="min-h-screen px-6 py-20" style={{ backgroundColor: "#29291F" }}>
      <div className="max-w-2xl mx-auto">
        <p className="font-body mb-4" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgb(207, 203, 192)" }}>
          {c.eyebrow}
        </p>
        <h1 className="font-title font-bold mb-12" style={{ fontSize: "37px", lineHeight: "1.2em", color: "#FFFFFF" }}>
          {c.title}
        </h1>
        {c.sections.map((section, i) => (
          <section key={i} className={i < c.sections.length - 1 ? "mb-10" : ""}>
            <h2 className="font-body mb-3" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgb(207, 203, 192)" }}>
              {section.heading}
            </h2>
            <p className="font-body leading-relaxed" style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}>
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
