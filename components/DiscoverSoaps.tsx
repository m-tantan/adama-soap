"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import BestSellersCarousel from "@/components/BestSellersCarousel";
import { products } from "@/data/products";

export default function DiscoverSoaps() {
  const t = useTranslations();
  const locale = useLocale();

  const bestSellers = products.filter(
    (p) => p.slug === "calm" || p.slug === "sunny-sage",
  );

  return (
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
  );
}
