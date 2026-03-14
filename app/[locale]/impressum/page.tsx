export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Impressum | Adama Soaps", description: "Impressum – Adama GbR" }
    : { title: "Legal Notice | Adama Soaps", description: "Legal Notice – Adama GbR" };
}

const linkStyle = {
  color: "#FFFFFF",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
};

const content = {
  de: {
    eyebrow: "Legal",
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 DDG",
        body: (
          <>
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München<br />
            Deutschland
          </>
        ),
      },
      {
        heading: "Kontakt",
        body: (
          <>
            E-Mail:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "Umsatzsteuer",
        body: "Adama GbR ist als Kleinunternehmen gemäß § 19 UStG von der Umsatzsteuer befreit. Es wird daher keine Umsatzsteuer ausgewiesen.",
      },
      {
        heading: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
        body: (
          <>
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München
          </>
        ),
      },
      {
        heading: "Online-Streitbeilegung (§ 36 VSBG)",
        body: (
          <>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              https://ec.europa.eu/consumers/odr
            </a>
            .<br /><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </>
        ),
      },
      {
        heading: "Haftung für Inhalte",
        body: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Legal Notice",
    sections: [
      {
        heading: "Information pursuant to § 5 DDG",
        body: (
          <>
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 Munich<br />
            Germany
          </>
        ),
      },
      {
        heading: "Contact",
        body: (
          <>
            Email:{" "}
            <a href="mailto:adamasoaps@gmail.com" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              adamasoaps@gmail.com
            </a>
          </>
        ),
      },
      {
        heading: "VAT",
        body: "Adama GbR is exempt from VAT as a small business pursuant to § 19 UStG. No VAT is charged.",
      },
      {
        heading: "Responsible for content (§ 18 para. 2 MStV)",
        body: (
          <>
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 Munich
          </>
        ),
      },
      {
        heading: "Online dispute resolution (§ 36 VSBG)",
        body: (
          <>
            The European Commission provides a platform for online dispute resolution (ODR):{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-70" style={linkStyle}>
              https://ec.europa.eu/consumers/odr
            </a>
            .<br /><br />
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </>
        ),
      },
      {
        heading: "Liability for content",
        body: "As a service provider, we are responsible for our own content on these pages pursuant to § 7 para. 1 DDG. However, pursuant to §§ 8 to 10 DDG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
      },
    ],
  },
};

export default async function ImpressumPage({
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
