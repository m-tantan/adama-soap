export const metadata = {
  title: "Impressum | Adama",
  description: "Impressum – Adama GbR",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 py-20" style={{ backgroundColor: "#29291F" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="font-body mb-4"
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgb(207, 203, 192)",
          }}
        >
          Legal
        </p>
        <h1
          className="font-title font-bold mb-12"
          style={{ fontSize: "37px", lineHeight: "1.2em", color: "#FFFFFF" }}
        >
          Impressum
        </h1>

        <section className="mb-10">
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Angaben gemäß § 5 TMG
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München<br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Kontakt
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            E-Mail:{" "}
            <a
              href="mailto:adamasoaps@gmail.com"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              adamasoaps@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Umsatzsteuer
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Adama GbR ist als Kleinunternehmen gemäß § 19 UStG von der Umsatzsteuer befreit.
            Es wird daher keine Umsatzsteuer-Identifikationsnummer benötigt.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Streitschlichtung
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br /><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2
            className="font-body mb-3"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgb(207, 203, 192)",
            }}
          >
            Haftung für Inhalte
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </section>
      </div>
    </main>
  );
}
