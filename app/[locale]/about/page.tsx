"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/utils";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div
      className="max-w-[980px] mx-auto px-6 lg:px-8"
      style={{
        paddingTop: "48px",
        paddingBottom: "64px",
        backgroundColor: "#29291F",
      }}
    >
      <h1
        className="font-title font-bold text-center mb-12"
        style={{
          fontSize: "55px",
          lineHeight: "1.2em",
          color: "#FFFFFF",
          letterSpacing: "-0.02em",
        }}
      >
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div
          className="relative bg-neutral-white overflow-hidden"
          style={{
            aspectRatio: "4/3",
            borderRadius: "5px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image
            src={withBasePath("/images/about/yoav-denis.jpg")}
            alt="Denis and Yoav making handmade vegan coffee soap from recycled coffee grounds in Munich"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p
            className="font-body mb-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.6em",
              color: "rgb(255, 255, 255)",
            }}
          >
            {t("paragraph1")}
          </p>

          <p
            className="font-body mb-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.6em",
              color: "rgb(255, 255, 255)",
            }}
            dangerouslySetInnerHTML={{ __html: t.raw("paragraph2") }}
          />

          <p
            className="font-body mb-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.6em",
              color: "rgb(255, 255, 255)",
            }}
            dangerouslySetInnerHTML={{ __html: t.raw("paragraph3") }}
          />

          <p
            className="font-body mb-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.6em",
              color: "rgb(255, 255, 255)",
            }}
          >
            {t("paragraph4")}
          </p>

          <p
            className="font-body"
            style={{
              fontSize: "17px",
              lineHeight: "1.6em",
              color: "rgb(255, 255, 255)",
              fontStyle: "italic",
            }}
          >
            {t("paragraph5")}
          </p>
        </div>
      </div>

      <div
        className="p-8 text-center"
        style={{
          backgroundColor: "rgb(254, 250, 241)",
          borderRadius: "5px",
        }}
      >
        <h2
          className="font-heading font-bold mb-4"
          style={{
            fontSize: "28px",
            lineHeight: "1.3em",
            color: "rgb(64, 63, 43)",
          }}
        >
          {t("whyCoffeeGrounds")}
        </h2>
        <p
          className="font-body"
          style={{
            fontSize: "17px",
            lineHeight: "1.6em",
            color: "rgb(64, 63, 43)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {t("whyCoffeeGroundsText")}
        </p>
      </div>
    </div>
  );
}
