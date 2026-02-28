"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cartPaypal?: {
      AddToCart: (config: { id: string }) => void;
      Cart: (config: { id: string }) => void;
    };
  }
}

interface PayPalAddToCartButtonProps {
  buttonId: string;
}

function applyQuantitySelectStyles() {
  const select = document.getElementById("quantity") as HTMLSelectElement | null;
  if (select) {
    select.style.cssText = `
      background-color: rgb(41, 41, 31) !important;
      color: #D7D5AC !important;
      border: 1px solid rgba(215, 213, 172, 0.3) !important;
      border-radius: 5px !important;
      padding: 10px 36px 10px 12px !important;
      font-size: 15px !important;
      line-height: 24px !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      cursor: pointer !important;
      width: 100% !important;
    `;
  }
  const label = document.querySelector("label[for='quantity']") as HTMLElement | null;
  if (label) {
    label.style.cssText = `color: #D7D5AC !important; font-size: 14px !important; font-weight: 500 !important;`;
  }
  const itemTitle = document.querySelector(".item-title") as HTMLElement | null;
  if (itemTitle) {
    itemTitle.style.display = "none";
  }
  const priceText = document.getElementById("price-text") as HTMLElement | null;
  if (priceText) {
    priceText.style.cssText = `color: #D7D5AC !important; font-size: 16px !important; font-weight: 600 !important;`;
  }
}

export default function PayPalAddToCartButton({ buttonId }: PayPalAddToCartButtonProps) {
  useEffect(() => {
    const initialize = () => {
      if (window.cartPaypal) {
        window.cartPaypal.AddToCart({ id: buttonId });
      }
      // PayPal renders the form asynchronously; observe DOM until the select appears
      const observer = new MutationObserver(() => {
        const select = document.getElementById("quantity");
        if (select) {
          applyQuantitySelectStyles();
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      // Also try immediately in case it's already rendered
      applyQuantitySelectStyles();
      return () => observer.disconnect();
    };

    if (window.cartPaypal) {
      initialize();
    } else {
      const script = document.querySelector(
        'script[src*="cart.js"]'
      ) as HTMLScriptElement | null;
      if (script) {
        script.addEventListener("load", initialize);
        return () => script.removeEventListener("load", initialize);
      }
    }
  }, [buttonId]);

  // paypal-add-to-cart-button is a PayPal web component registered by cart.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AddToCartButton = "paypal-add-to-cart-button" as any;
  return <AddToCartButton data-id={buttonId} />;
}
