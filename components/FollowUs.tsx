"use client";

import { useTranslations } from "next-intl";
import InstagramFeed from "@/components/InstagramFeed";

export default function FollowUs() {
  const t = useTranslations();

  return (
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
        <InstagramFeed />
      </div>
    </section>
  );
}
