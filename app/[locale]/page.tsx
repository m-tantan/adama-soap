"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useTranslations, useLocale } from "next-intl";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import { products } from "@/data/products";
import { withBasePath } from "@/lib/utils";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  // Get Calm and Sunny Sage for Best Sellers carousel
  const bestSellers = products.filter(
    (p) => p.slug === "calm" || p.slug === "sunny-sage"
  );

  return (
    <>
      {/* Discover Our Soaps */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          backgroundColor: "#4D4B36",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2
              className="font-title font-bold"
              style={{
                fontSize: "55px",
                lineHeight: "1.2em",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {t("shop.title")}
            </h2>
            <Link
              href={`/${locale}/shop`}
              className="font-heading transition-opacity duration-300 hover:opacity-70"
              style={{
                fontSize: "17px",
                color: "#FFFFFF",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              {t("shop.exploreShop")}
            </Link>
          </div>
          <BestSellersCarousel products={bestSellers} />
        </div>
      </section>

      {/* Hero */}
      <section
        className="text-neutral-white relative overflow-hidden"
        style={{
          backgroundColor: "#4D4B36",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={withBasePath("/images/hero-soaps.jpg")}
            alt="Handmade vegan coffee soap with recycled coffee grounds from Munich"
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
            priority
          />
        </div>
        <div className="max-w-[980px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1
            className="font-title font-bold mb-6"
            style={{
              fontSize: "55px",
              lineHeight: "1.2em",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="font-heading max-w-[700px] mx-auto"
            style={{
              fontSize: "20px",
              lineHeight: "1.5em",
              fontWeight: "400",
              color: "rgb(255, 255, 255)",
              whiteSpace: "pre-line",
            }}
          >
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        style={{
          backgroundColor: "#29291F",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <div
            className="grid md:grid-cols-2 items-center"
            style={{ gap: "48px" }}
          >
            <div className="relative" style={{ aspectRatio: "3/4" }}>
              <Image
                src={withBasePath("/images/about/yoav-denis.jpg")}
                alt="Denis and Yoav, founders of Adama Soaps - handmade vegan coffee soap from Munich"
                fill
                className="object-cover"
                style={{
                  borderRadius: "5px",
                  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2
                className="font-title font-bold mb-8"
                style={{
                  fontSize: "55px",
                  lineHeight: "1.2em",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("ourStory.title")}
              </h2>
              <h3
                className="font-heading font-normal mb-4"
                style={{
                  fontSize: "25px",
                  lineHeight: "1.4em",
                  color: "#F5F5DC",
                  fontWeight: "600",
                }}
              >
                {t("ourStory.whoWeAre")}
              </h3>
              <p
                className="font-body mb-6"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5em",
                  color: "rgb(255, 255, 255)",
                }}
              >
                {t("ourStory.whoWeAreText")}
              </p>
              <h3
                className="font-heading font-normal mb-4"
                style={{
                  fontSize: "25px",
                  lineHeight: "1.4em",
                  color: "rgb(255, 255, 255)",
                  fontWeight: "600",
                }}
              >
                {t("ourStory.ourMission")}
              </h3>
              <p
                className="font-body mb-6"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5em",
                  color: "rgb(255, 255, 255)",
                }}
              >
                {t("ourStory.ourMissionText")}
              </p>
              {t("ourStory.why") && (
                <>
                  <h3
                    className="font-heading font-normal mb-4"
                    style={{
                      fontSize: "25px",
                      lineHeight: "1.4em",
                      color: "rgb(255, 255, 255)",
                      fontWeight: "600",
                    }}
                  >
                    {t("ourStory.why")}
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.5em",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    {t("ourStory.whyText")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Partners Section */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          backgroundColor: "#29291F",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 lg:px-8">
          <h2
            className="font-title font-bold text-center mb-12"
            style={{
              fontSize: "40px",
              lineHeight: "1.3em",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            {t("cafePartners.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Online Shop */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3
                className="font-heading mb-4"
                style={{
                  fontSize: "22px",
                  color: "#FFFFFF",
                  fontWeight: "600",
                }}
              >
                {t("cafePartners.onlineShop")}
              </h3>
              <p
                className="mb-2"
                style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}
              >
                📍 Holzstraße 11, 80469 München, Germany
              </p>
              <p
                className="mb-2"
                style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}
              >
                📞 +4915730104878
              </p>
              <p style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}>
                🌐
                <a
                  href="https://adamasoaps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70"
                >
                  Adama-soaps.com
                </a>
              </p>
            </div>

            {/* Cafe Faber */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3
                className="font-heading mb-4"
                style={{
                  fontSize: "22px",
                  color: "#FFFFFF",
                  fontWeight: "600",
                }}
              >
                Cafe Faber
              </h3>
              <p
                className="mb-3"
                style={{
                  fontSize: "14px",
                  color: "rgb(255, 255, 255)",
                  fontStyle: "italic",
                  opacity: 0.9,
                }}
              >
                {t("cafePartners.cooperationText")}
              </p>
              <p
                className="mb-2"
                style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}
              >
                📍 Zeppelinstraße 5, 81541 München, Germany
              </p>
            </div>

            {/* Poppy Jones */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3
                className="font-heading mb-4"
                style={{
                  fontSize: "22px",
                  color: "#FFFFFF",
                  fontWeight: "600",
                }}
              >
                Poppi Farmer
              </h3>
              <p
                className="mb-3"
                style={{
                  fontSize: "14px",
                  color: "rgb(255, 255, 255)",
                  fontStyle: "italic",
                  opacity: 0.9,
                }}
              >
                {t("cafePartners.cooperationText")}
              </p>
              <p
                className="mb-2"
                style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}
              >
                📍 St.-Bonifatius-Straße 1, 81541 München, Germany
              </p>
              <p
                className="mb-2"
                style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}
              >
                📞 +49 175 164 3686
              </p>
              <p style={{ fontSize: "15px", color: "rgb(255, 255, 255)" }}>
                🌐{" "}
                <a
                  href="https://www.poppifarmer.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70"
                >
                  poppifarmer.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          backgroundColor: "#29291F",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-title font-bold mb-12"
            style={{
              fontSize: "55px",
              lineHeight: "1.2em",
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            {t("followUs.title")}
          </h2>
          {/* Behold Widget */}
          <div
            className="max-w-[900px] mx-auto mb-8"
            dangerouslySetInnerHTML={{
              __html:
                '<behold-widget feed-id="pZFcMAVkXGWFGApu2F2C"></behold-widget>',
            }}
          />
          <Script
            src="https://w.behold.so/widget.js"
            type="module"
            strategy="lazyOnload"
          />
          <a
            href="https://instagram.com/adamasoaps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 font-heading transition-opacity duration-300 hover:opacity-70"
            style={{
              fontSize: "17px",
              color: "#FFFFFF",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            @adamasoaps
          </a>
        </div>
      </section>
    </>
  );
}
