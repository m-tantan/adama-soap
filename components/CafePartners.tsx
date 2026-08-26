"use client";

import { useTranslations } from "next-intl";

interface Partner {
  name: string;
  address: string | string[];
  href: string;
  linkLabel: string;
}

const cafePartners: Partner[] = [
  {
    name: "Cafe Faber",
    address: "Zeppelinstraße 5, 81541 München",
    href: "https://www.instagram.com/cafefaber_/",
    linkLabel: "@cafefaber_",
  },
  {
    name: "Poppi Farmer",
    address: "St.-Bonifatius-Str. 1, 81541 München",
    href: "https://www.poppifarmer.de/",
    linkLabel: "poppifarmer.de",
  },
  {
    name: "Café Blá",
    address: "Lilienstraße 34, 81669 München",
    href: "https://www.cafebla.de/",
    linkLabel: "cafebla.de",
  },
  {
    name: "MARI",
    address: "Adlzreiterstraße 36, 80337 München",
    href: "https://www.instagram.com/marigoldmarie2024/",
    linkLabel: "@marigoldmarie2024",
  },
  {
    name: "Pâtisserie | Café Dukatz",
    address: [
      "Klenzestraße 69, 80469 München",
      "St.-Anna-Straße 11, 80538 München",
    ],
    href: "https://www.dukatz.de/",
    linkLabel: "dukatz.de",
  },
];

const sustainabilityPartners: Partner[] = [
  {
    name: "abgefüllt & unverpackt",
    address: "Fraunhoferstraße 23, 80469 München",
    href: "https://www.aundu.net/",
    linkLabel: "aundu.net",
  },
  {
    name: "Buch & Bohne",
    address: "Kapuzinerpl. 4, 80337 München-Ludwigsvorstadt-Isarvorstadt",
    href: "http://www.buchbohne.de/",
    linkLabel: "buchbohne.de",
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-5 flex flex-col h-full">
        <h3
          className="font-heading mb-2"
          style={{ fontSize: "17px", color: "#FFFFFF", fontWeight: "600" }}
        >
          {partner.name}
        </h3>
        {Array.isArray(partner.address) ? (
          <div style={{ fontSize: "13px", color: "rgb(207, 203, 192)", lineHeight: "1.5" }}>
            {partner.address.map((addr) => (
              <p key={addr}>📍 {addr}</p>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "13px", color: "rgb(207, 203, 192)", lineHeight: "1.5" }}>
            📍 {partner.address}
          </p>
        )}
        <div
          className="mt-auto pt-3 flex items-center gap-1 font-heading transition-colors duration-300"
          style={{ fontSize: "13px", color: "rgb(191, 192, 126)" }}
        >
          <span>{partner.linkLabel}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

export default function CafePartners() {
  const t = useTranslations();

  return (
    <section
      style={{
        paddingTop: "72px",
        paddingBottom: "72px",
        backgroundColor: "#29291F",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <p
          className="font-heading text-center mb-3"
          style={{
            fontSize: "14px",
            color: "rgb(207, 203, 192)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          ☕ {t("cafePartners.ourPartners")}
        </p>
        <h2
          className="font-title font-bold text-center mb-14"
          style={{
            fontSize: "36px",
            lineHeight: "1.3em",
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
          }}
        >
          {t("cafePartners.title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {cafePartners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}

          {/* Join Us CTA */}
          <a
            href="https://docs.google.com/forms/d/1U8a2jbLYp4Rx-kO04PvKSqe6hvEqEA05pNa6qL37wIQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 block col-start-2"
            style={{
              background: "linear-gradient(145deg, rgba(191,192,126,0.15), rgba(191,192,126,0.05))",
              border: "1px dashed rgba(191,192,126,0.4)",
            }}
          >
            <div className="p-5 flex flex-col h-full">
              <div
                className="flex items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-105"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "linear-gradient(135deg, rgba(191,192,126,0.4), rgba(191,192,126,0.2))",
                  border: "1px dashed rgba(191,192,126,0.5)",
                }}
              >
                <span style={{ fontSize: "17px" }}>+</span>
              </div>
              <h3
                className="font-heading mb-2"
                style={{ fontSize: "15px", color: "rgb(191,192,126)", fontWeight: "600" }}
              >
                {t("cafePartners.joinTitle")}
              </h3>
              <p style={{ fontSize: "12px", color: "rgb(207, 203, 192)", lineHeight: "1.5" }}>
                {t("cafePartners.joinText")}
              </p>

            </div>
          </a>
        </div>

        {/* Sustainability Partners Section */}
        <div style={{ marginTop: "64px" }}>
          <p
            className="font-heading text-center mb-3"
            style={{
              fontSize: "14px",
              color: "rgb(207, 203, 192)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ♻️ {t("cafePartners.sustainabilityPartners")}
          </p>
          <h2
            className="font-heading text-center mb-10"
            style={{
              fontSize: "24px",
              lineHeight: "1.4em",
              color: "rgb(207, 203, 192)",
              letterSpacing: "0",
            }}
          >
            {t("cafePartners.sustainabilityTitle")}
          </h2>

          <div className="flex justify-center gap-5">
            {sustainabilityPartners.map((partner) => (
              <div key={partner.name} style={{ maxWidth: "280px", width: "100%" }}>
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
