'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from "next-intl";
import { Product } from "@/types";

interface BestSellersCarouselProps {
  products: Product[];
}

export default function BestSellersCarousel({
  products,
}: BestSellersCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const locale = useLocale();
  const t = useTranslations();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Show 2 products at a time
  const visibleProducts = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          marginLeft: "-24px",
        }}
      >
        <span
          style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: "bold" }}
        >
          ‹
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          marginRight: "-24px",
        }}
      >
        <span
          style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: "bold" }}
        >
          ›
        </span>
      </button>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12">
        {visibleProducts.map((product, index) => (
          <Link
            key={product.id + "-" + index}
            href={`/${locale}/shop/${product.slug}`}
            className="group block transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square bg-white">
                {product.ribbon && (
                  <div
                    className="absolute top-4 right-4 z-10 text-white font-heading px-3 py-1 rounded-full"
                    style={{
                      backgroundColor:
                        product.ribbon === "New"
                          ? "rgb(128, 21, 232)"
                          : "rgb(64, 124, 81)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {product.ribbon === "Sale"
                      ? t("ribbons.sale")
                      : product.ribbon === "New"
                        ? t("ribbons.new")
                        : t("ribbons.bestSeller")}
                  </div>
                )}
                <Image
                  src={product.images[0]}
                  alt={`${product.name} - handmade vegan coffee soap with recycled coffee grounds from Munich`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3
                  className="font-heading mb-2"
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  {product.name}
                </h3>
                <div
                  className="font-body"
                  style={{
                    fontSize: "17px",
                    color: "#F5F5DC",
                  }}
                >
                  {product.salePrice ? (
                    <div className="flex items-center justify-center gap-2">
                      <span
                        style={{ textDecoration: "line-through", opacity: 0.7 }}
                      >
                        €{product.price.toFixed(2)}
                      </span>
                      <span style={{ fontWeight: "600" }}>
                        €{product.salePrice.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span style={{ opacity: 0.7, fontSize: "14px" }}>
                        {t("shop.price")}
                      </span>
                      <div style={{ fontWeight: "600" }}>
                        €{product.price.toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
