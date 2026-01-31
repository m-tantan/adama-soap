"use client";

import { useTranslations } from "next-intl";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  const t = useTranslations("shop");

  return (
    <div
      className="max-w-[980px] mx-auto px-6 lg:px-8"
      style={{
        paddingTop: "48px",
        paddingBottom: "64px",
        backgroundColor: "rgb(254, 250, 241)",
      }}
    >
      <h1
        className="font-title font-bold mb-12"
        style={{
          fontSize: "79px",
          lineHeight: "1em",
          color: "rgb(64, 63, 43)",
          letterSpacing: "-0.02em",
        }}
      >
        {t("pageTitle")}
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{ gap: "24px" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
