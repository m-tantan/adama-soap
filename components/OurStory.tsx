"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/utils";

export default function OurStory() {
  const t = useTranslations();

  return (
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
          </div>
        </div>
      </div>
    </section>
  );
}
