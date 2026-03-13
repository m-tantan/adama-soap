export const metadata = {
  title: "Datenschutz | Adama",
  description: "Datenschutzerklärung – Adama GbR",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
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
            1. Verantwortliche Stelle
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Adama GbR<br />
            Denise Peter &amp; Yoav Manor<br />
            Holzstr. 11, 2.A<br />
            80469 München<br />
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
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Diese Website erhebt und speichert keine personenbezogenen Daten über Formulare,
            Newsletter oder Nutzerkonten. Es werden keine Cookies gesetzt, die personenbezogene
            Daten speichern.
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
            3. Server-Logfiles
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
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
            4. Hosting durch Vercel
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Diese Website wird bei Vercel Inc. gehostet. Vercel verarbeitet technische Daten
            im Rahmen des Betriebs der Infrastruktur. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Vercel:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              vercel.com/legal/privacy-policy
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
            5. Keine Tracking- oder Analysetools
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Diese Website verwendet keine Analyse- oder Trackingdienste wie Google Analytics,
            Meta Pixel oder ähnliche Tools. Es werden keine Nutzungsprofile erstellt.
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
            6. Kontakt per E-Mail
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
            angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
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
            7. Ihre Rechte
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Sie haben jederzeit das Recht auf:<br /><br />
            – Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)<br />
            – Berichtigung unrichtiger Daten (Art. 16 DSGVO)<br />
            – Löschung Ihrer Daten (Art. 17 DSGVO)<br />
            – Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
            – Datenübertragbarkeit (Art. 20 DSGVO)<br />
            – Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)<br /><br />
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
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
            <br /><br />
            Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
            In Bayern ist dies das Bayerische Landesamt für Datenschutzaufsicht (BayLDA),
            Promenade 27, 91522 Ansbach.
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
            8. Aktualität dieser Erklärung
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "15px", color: "rgb(207, 203, 192)" }}
          >
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
            Durch die Weiterentwicklung unserer Website kann eine Anpassung notwendig werden.
          </p>
        </section>
      </div>
    </main>
  );
}
