'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/types';
import PayPalButton from './PayPalButton';
import { getPayPalButtonId } from '@/data/paypal-buttons';

type Tab = "story" | "ingredients";

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("story");

  const paypalButtonId = getPayPalButtonId(product.slug);

  return (
    <div
      className="max-w-[980px] mx-auto px-6 lg:px-8"
      style={{ paddingTop: "48px", paddingBottom: "64px" }}
    >
      <div className="grid md:grid-cols-2" style={{ gap: "64px" }}>
        {/* Images */}
        <div>
          <div
            className="relative bg-neutral-white overflow-hidden mb-4"
            style={{
              aspectRatio: "1",
              borderRadius: "5px",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {product.ribbon && (
              <div
                className="absolute z-10 font-button"
                style={{
                  top: "16px",
                  left: "16px",
                  backgroundColor:
                    product.ribbon === "Sale"
                      ? "rgb(237, 28, 36)"
                      : product.ribbon === "New"
                        ? "rgb(128, 21, 232)"
                        : "rgb(0, 0, 0)",
                  color: "rgb(255, 255, 255)",
                  padding: "8px 16px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  borderRadius: "300px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {product.ribbon}
              </div>
            )}
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnail images */}
          {product.images.length > 1 && (
            <div className="flex" style={{ gap: "12px" }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="relative overflow-hidden transition-opacity duration-300 hover:opacity-80"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "5px",
                    border:
                      selectedImage === idx
                        ? "2px solid rgb(64, 63, 43)"
                        : "2px solid transparent",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1
            className="font-title font-bold mb-6"
            style={{
              fontSize: "55px",
              lineHeight: "1.2em",
              color: "#D7D5AC",
              letterSpacing: "-0.02em",
            }}
          >
            {product.name}
          </h1>

          <div className="mb-8">
            {product.salePrice ? (
              <div className="flex items-center" style={{ gap: "12px" }}>
                <span
                  className="line-through font-heading"
                  style={{
                    fontSize: "25px",
                    color: "rgb(95, 95, 95)",
                  }}
                >
                  €{product.price.toFixed(2)}
                </span>
                <span
                  className="font-title font-bold"
                  style={{
                    fontSize: "37px",
                    lineHeight: "1.2em",
                    color: "rgb(237, 28, 36)",
                  }}
                >
                  €{product.salePrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span
                className="font-title font-bold"
                style={{
                  fontSize: "37px",
                  lineHeight: "1.2em",
                  color: "#D7D5AC",
                }}
              >
                €{product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div
              className="flex"
              style={{
                gap: "16px",
                borderBottom: "2px solid rgba(215, 213, 172, 0.2)",
              }}
            >
              <button
                onClick={() => setActiveTab("story")}
                className="font-heading transition-all duration-300"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5em",
                  fontWeight: "600",
                  color:
                    activeTab === "story"
                      ? "#D7D5AC"
                      : "rgba(215, 213, 172, 0.5)",
                  padding: "12px 24px",
                  borderBottom:
                    activeTab === "story"
                      ? "2px solid #D7D5AC"
                      : "2px solid transparent",
                  marginBottom: "-2px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("ingredients")}
                className="font-heading transition-all duration-300"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.5em",
                  fontWeight: "600",
                  color:
                    activeTab === "ingredients"
                      ? "#D7D5AC"
                      : "rgba(215, 213, 172, 0.5)",
                  padding: "12px 24px",
                  borderBottom:
                    activeTab === "ingredients"
                      ? "2px solid #D7D5AC"
                      : "2px solid transparent",
                  marginBottom: "-2px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Ingredients
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === "story" && (
              <div
                className="font-body"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7em",
                  color: "#D7D5AC",
                  whiteSpace: "pre-line",
                }}
              >
                {product.description}
              </div>
            )}

            {activeTab === "ingredients" && product.ingredients && (
              <div>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, i) => (
                    <li
                      key={i}
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "24px",
                        color: "#D7D5AC",
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: "0" }}>•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* PayPal Button */}
          {paypalButtonId && (
            <div className="mb-6">
              <PayPalButton buttonId={paypalButtonId} />
            </div>
          )}

          <div
            className="mt-6 p-6"
            style={{
              backgroundColor: "rgb(254, 250, 241)",
              borderRadius: "5px",
            }}
          >
            <p
              className="font-body mb-2"
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgb(64, 63, 43)",
              }}
            >
              🌱 Made from recycled coffee grounds
            </p>
            <p
              className="font-body mb-2"
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgb(64, 63, 43)",
              }}
            >
              ♻️ Eco-friendly and sustainable
            </p>
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgb(64, 63, 43)",
              }}
            >
              🇩🇪 Handcrafted in Germany
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
