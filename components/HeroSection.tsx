"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/utils";

export default function HeroSection() {
  const t = useTranslations();

  return (
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
  );
}
