export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Datenschutz | Adama", description: "Datenschutzerklärung – Adama GbR" }
    : { title: "Privacy Policy | Adama", description: "Privacy Policy – Adama GbR" };
}

const content = {
  de: {
    eyebrow: "Legal",
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "1. Verantwortliche Stelle",
        body: (
          <>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München<br />
            E-Mail:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "2. Erhebung und Speicherung personenbezogener Daten",
        body: "Diese Website erhebt und speichert keine personenbezogenen Daten über Formulare, Newsletter oder Nutzerkonten. Es werden keine Cookies gesetzt, die personenbezogene Daten speichern.",
      },
      {
        heading: "3. Server-Logfiles",
        body: (
          <>
            Beim Besuch dieser Website werden automatisch technische Zugriffsdaten vom Hosting-Anbieter
            (Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA) erfasst.
            Diese sogenannten Server-Logfiles enthalten u.a.:<br /><br />
            – Browsertyp und Browserversion<br />
            – verwendetes Betriebssystem<br />
            – Referrer URL<br />
            – Hostname des zugreifenden Rechners<br />
            – Uhrzeit der Serveranfrage<br />
            – IP-Adresse<br /><br />
            Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen
            Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am sicheren Betrieb der Website).
          </>
        ),
      },
      {
        heading: "4. Hosting durch Vercel",
        body: (
          <>
            Diese Website wird bei Vercel Inc. gehostet. Vercel verarbeitet technische Daten
            im Rahmen des Betriebs der Infrastruktur. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              vercel.com/legal/privacy-policy
            </a>
          </>
        ),
      },
      {
        heading: "5. Keine Tracking- oder Analysetools",
        body: "Diese Website verwendet keine Analyse- oder Trackingdienste wie Google Analytics, Meta Pixel oder ähnliche Tools. Es werden keine Nutzungsprofile erstellt.",
      },
      {
        heading: "6. Kontakt per E-Mail",
        body: "Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
      },
      {
        heading: "7. Ihre Rechte",
        body: (
          <>
            Sie haben jederzeit das Recht auf:<br /><br />
            – Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)<br />
            – Berichtigung unrichtiger Daten (Art. 16 DSGVO)<br />
            – Löschung Ihrer Daten (Art. 17 DSGVO)<br />
            – Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
            – Datenübertragbarkeit (Art. 20 DSGVO)<br />
            – Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)<br /><br />
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              adamasoaps@gmail.com
            </a>
            <br /><br />
            Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
            In Bayern ist dies das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
            Promenade 27, 91522 Ansbach.
          </>
        ),
      },
      {
        heading: "8. Aktualität dieser Erklärung",
        body: "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website kann eine Anpassung notwendig werden.",
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
            The controller responsible for data processing on this website is:<br /><br />
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 Munich, Germany<br />
            Email:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "2. Collection and storage of personal data",
        body: "This website does not collect or store personal data via forms, newsletters or user accounts. No cookies are set that store personal data.",
      },
      {
        heading: "3. Server log files",
        body: (
          <>
            When you visit this website, technical access data is automatically recorded by our hosting provider
            (Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA).
            These server log files contain, among other things:<br /><br />
            – Browser type and version<br />
            – Operating system used<br />
            – Referrer URL<br />
            – Hostname of the accessing device<br />
            – Time of the server request<br />
            – IP address<br /><br />
            This data cannot be attributed to specific individuals and is not merged with other data sources.
            The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest in the secure operation of the website).
          </>
        ),
      },
      {
        heading: "4. Hosting by Vercel",
        body: (
          <>
            This website is hosted by Vercel Inc. Vercel processes technical data as part of infrastructure operations.
            For more information, please refer to Vercel&apos;s privacy policy:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              vercel.com/legal/privacy-policy
            </a>
          </>
        ),
      },
      {
        heading: "5. No tracking or analytics tools",
        body: "This website does not use any analytics or tracking services such as Google Analytics, Meta Pixel or similar tools. No user profiles are created.",
      },
      {
        heading: "6. Contact by email",
        body: "If you contact us by email, your details including the contact information you provide will be stored for the purpose of processing your enquiry. We will not pass this data on without your consent. The legal basis is Art. 6 para. 1 lit. f GDPR.",
      },
      {
        heading: "7. Your rights",
        body: (
          <>
            You have the right at any time to:<br /><br />
            – Access your stored data (Art. 15 GDPR)<br />
            – Rectification of inaccurate data (Art. 16 GDPR)<br />
            – Erasure of your data (Art. 17 GDPR)<br />
            – Restriction of processing (Art. 18 GDPR)<br />
            – Data portability (Art. 20 GDPR)<br />
            – Object to processing (Art. 21 GDPR)<br /><br />
            To exercise your rights, please contact:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              adamasoaps@gmail.com
            </a>
            <br /><br />
            You also have the right to lodge a complaint with the competent supervisory authority.
            In Bavaria, this is the Bavarian State Office for Data Protection Supervision (BayLDA),
            Promenade 27, 91522 Ansbach, Germany.
          </>
        ),
      },
      {
        heading: "8. Currency of this policy",
        body: "This privacy policy is currently valid and was last updated in March 2026. Updates may be necessary as our website evolves.",
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
        <p
          className="font-body mb-4"
          style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgb(207, 203, 192)" }}
        >
          {c.eyebrow}
        </p>
        <h1
          className="font-title font-bold mb-12"
          style={{ fontSize: "37px", lineHeight: "1.2em", color: "#FFFFFF" }}
        >
          {c.title}
        </h1>

        {c.sections.map((section, i) => (
          <section key={i} className={i < c.sections.length - 1 ? "mb-10" : ""}>
            <h2
              className="font-body mb-3"
              style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgb(207, 203, 192)" }}
            >
              {section.heading}
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
            >
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
