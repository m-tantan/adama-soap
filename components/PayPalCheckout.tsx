"use client";

import Image from "next/image";
import { Product } from "@/types";
import PayPalButton from "./PayPalButton";

interface PayPalCheckoutProps {
  product: Product;
  buttonId: string;
}

export default function PayPalCheckout({
  product,
  buttonId,
}: PayPalCheckoutProps) {
  return (
    <div
      className="max-w-[600px] mx-auto px-6 lg:px-8"
      style={{ paddingTop: "48px", paddingBottom: "64px" }}
    >
      {/* Test Page Warning */}
      <div
        className="mb-8 p-4 text-center"
        style={{
          backgroundColor: "rgba(255, 203, 5, 0.2)",
          borderRadius: "5px",
          border: "1px solid rgb(255, 203, 5)",
        }}
      >
        <p
          className="font-body"
          style={{ fontSize: "14px", color: "#D7D5AC", margin: 0 }}
        >
          ⚠️ This is a test checkout page - not linked from the main site
        </p>
      </div>

      {/* Product Summary */}
      <div
        className="mb-8 p-6"
        style={{
          backgroundColor: "rgba(254, 250, 241, 0.05)",
          borderRadius: "5px",
          border: "1px solid rgba(215, 213, 172, 0.2)",
        }}
      >
        <div className="flex" style={{ gap: "24px" }}>
          {/* Product Image */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "5px",
            }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1
              className="font-title font-bold mb-2"
              style={{
                fontSize: "32px",
                lineHeight: "1.2em",
                color: "#D7D5AC",
              }}
            >
              {product.name}
            </h1>
            <p
              className="font-body mb-4"
              style={{
                fontSize: "15px",
                lineHeight: "1.5em",
                color: "rgba(215, 213, 172, 0.7)",
              }}
            >
              Handcrafted natural soap with recycled coffee grounds
            </p>
            <div
              className="font-title font-bold"
              style={{
                fontSize: "28px",
                color: "#D7D5AC",
              }}
            >
              €{product.salePrice?.toFixed(2) ?? product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* PayPal Button Section */}
      <div
        className="p-6"
        style={{
          backgroundColor: "rgba(254, 250, 241, 0.03)",
          borderRadius: "5px",
          border: "1px solid rgba(215, 213, 172, 0.2)",
        }}
      >
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: "17px",
            fontWeight: "600",
            color: "#D7D5AC",
          }}
        >
          Complete your purchase
        </h2>

        <PayPalButton buttonId={buttonId} />

        <p
          className="mt-4 text-center font-body"
          style={{
            fontSize: "13px",
            color: "rgba(215, 213, 172, 0.5)",
          }}
        >
          Secure payment powered by PayPal
        </p>
      </div>

      {/* Shipping Info */}
      <div
        className="mt-6 p-4"
        style={{
          backgroundColor: "rgb(254, 250, 241)",
          borderRadius: "5px",
        }}
      >
        <p
          className="font-body mb-2"
          style={{
            fontSize: "14px",
            lineHeight: "1.5em",
            color: "rgb(64, 63, 43)",
          }}
        >
          📦 Free shipping within Germany
        </p>
        <p
          className="font-body"
          style={{
            fontSize: "14px",
            lineHeight: "1.5em",
            color: "rgb(64, 63, 43)",
          }}
        >
          🌱 Eco-friendly packaging
        </p>
      </div>
    </div>
  );
}
