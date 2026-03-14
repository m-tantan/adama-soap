"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { useTranslations, useLocale } from "next-intl";

const CONSENT_KEY = "adama-cookie-consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslations("cookieConsent");
  const locale = useLocale();

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      setConsent("accepted");
    } else if (stored === "rejected") {
      setConsent("rejected");
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  return (
    <>
      {consent === "accepted" && (
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "va7zyitnz5");`}
        </Script>
      )}

      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 48px)",
            maxWidth: "680px",
            backgroundColor: "rgb(41, 41, 31)",
            border: "1px solid rgba(207, 203, 192, 0.2)",
            borderRadius: "8px",
            padding: "20px 24px",
            zIndex: 9999,
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          <p
            className="font-body"
            style={{ fontSize: "14px", color: "rgb(207, 203, 192)", marginBottom: "16px", lineHeight: "1.6" }}
          >
            {t("description")}{" "}
            <Link
              href={`/${locale}/datenschutz`}
              style={{ color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              {t("learnMore")}
            </Link>
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={accept}
              className="font-button"
              style={{
                padding: "10px 24px",
                backgroundColor: "rgb(207, 203, 192)",
                color: "rgb(41, 41, 31)",
                border: "none",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {t("accept")}
            </button>
            <button
              onClick={reject}
              className="font-button"
              style={{
                padding: "10px 24px",
                backgroundColor: "transparent",
                color: "rgb(207, 203, 192)",
                border: "1px solid rgba(207, 203, 192, 0.4)",
                borderRadius: "5px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {t("reject")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
