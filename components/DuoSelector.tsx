'use client';

import { useState } from 'react';
import { useTranslations, useMessages } from "next-intl";
import { products } from "@/data/products";
import { getDuoButtonId } from "@/data/paypal-buttons";
import PayPalAddToCartButton from "./PayPalAddToCartButton";

export default function DuoSelector({ options }: { options: string[] }) {
  const t = useTranslations("product");
  const messages = useMessages() as any;
  const [soap1, setSoap1] = useState<string | null>(null);
  const [soap2, setSoap2] = useState<string | null>(null);

  const nameOf = (slug: string) =>
    messages?.products?.[slug]?.name ||
    products.find((p) => p.slug === slug)?.name ||
    slug;

  const buttonId = soap1 && soap2 ? getDuoButtonId(soap1, soap2) : undefined;

  const group = (
    label: string,
    selected: string | null,
    onSelect: (slug: string) => void,
  ) => (
    <div className="mb-5" role="radiogroup" aria-label={label}>
      <div
        className="font-body mb-2"
        style={{ color: "#D7D5AC", fontSize: "14px", fontWeight: 500 }}
      >
        {label}
      </div>
      <div className="flex flex-wrap" style={{ gap: "8px" }}>
        {options.map((slug) => {
          const active = selected === slug;
          return (
            <button
              key={slug}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(slug)}
              className="font-button transition-colors duration-200"
              style={{
                padding: "8px 16px",
                borderRadius: "300px",
                fontSize: "14px",
                fontWeight: 600,
                border: "1px solid rgba(215, 213, 172, 0.5)",
                backgroundColor: active ? "#D7D5AC" : "transparent",
                color: active ? "rgb(41, 41, 31)" : "#D7D5AC",
              }}
            >
              {nameOf(slug)}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="mb-6">
      {group(t("soap1"), soap1, setSoap1)}
      {group(t("soap2"), soap2, setSoap2)}

      {buttonId ? (
        // key remounts the PayPal button whenever the scent pair changes
        <PayPalAddToCartButton key={buttonId} buttonId={buttonId} />
      ) : (
        <>
          <button
            type="button"
            disabled
            className="font-button"
            style={{
              padding: "12px 24px",
              borderRadius: "300px",
              backgroundColor: "rgba(215, 213, 172, 0.15)",
              color: "rgba(215, 213, 172, 0.6)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              cursor: "not-allowed",
            }}
          >
            {t("addToCart")}
          </button>
          {!(soap1 && soap2) && (
            <p
              className="font-body"
              style={{
                fontSize: "13px",
                color: "rgb(191, 192, 126)",
                marginTop: "8px",
              }}
            >
              {t("chooseBoth")}
            </p>
          )}
        </>
      )}
    </div>
  );
}
