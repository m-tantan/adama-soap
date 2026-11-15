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

function injectPriceHideStyle() {
  if (document.getElementById("paypal-price-hide-style")) return;
  const style = document.createElement("style");
  style.id = "paypal-price-hide-style";
  style.textContent = `
    #price-text,
    paypal-add-to-cart-button #price-text,
    paypal-add-to-cart-button .price,
    paypal-add-to-cart-button [class*="price"] {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

const SELECT_STYLE = `
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
const LABEL_STYLE = `color: #D7D5AC !important; font-size: 14px !important; font-weight: 500 !important;`;

// Buttons with PayPal options (e.g. "Your Soaps" on the Christmas Duo) render
// one <select id="selector-variant-N"> per option, starting at "Select an option".
// PayPal doesn't block Add to Cart without a choice, so we disable it until
// every option has a value.
function setupVariantSelects() {
  document.querySelectorAll("paypal-add-to-cart-button").forEach((container) => {
    const selects = Array.from(
      container.querySelectorAll<HTMLSelectElement>("select[id^='selector-variant-']"),
    );
    if (selects.length === 0) return;
    const addButton = container.querySelector<HTMLButtonElement>("button.addToCartButtonContainer");
    const update = () => {
      if (!addButton) return;
      const ready = selects.every((s) => s.selectedIndex > 0);
      addButton.disabled = !ready;
      addButton.style.opacity = ready ? "" : "0.5";
      addButton.style.cursor = ready ? "" : "not-allowed";
    };
    selects.forEach((select) => {
      select.style.cssText = SELECT_STYLE;
      const label = container.querySelector(`label[for='${select.id}']`) as HTMLElement | null;
      if (label) label.style.cssText = LABEL_STYLE;
      if (!select.dataset.adamaGuard) {
        select.dataset.adamaGuard = "1";
        select.addEventListener("change", update);
      }
    });
    update();
  });
}

function applyQuantitySelectStyles() {
  const select = document.getElementById("quantity") as HTMLSelectElement | null;
  if (select) {
    select.style.cssText = SELECT_STYLE;
  }
  const label = document.querySelector("label[for='quantity']") as HTMLElement | null;
  if (label) {
    label.style.cssText = LABEL_STYLE;
  }
  setupVariantSelects();
  const itemTitle = document.querySelector(".item-title") as HTMLElement | null;
  if (itemTitle) {
    itemTitle.style.display = "none";
  }
  const priceText = document.getElementById("price-text") as HTMLElement | null;
  if (priceText) {
    priceText.style.display = "none";
  }
}

export default function PayPalAddToCartButton({ buttonId }: PayPalAddToCartButtonProps) {
  useEffect(() => {
    const initialize = () => {
      injectPriceHideStyle();
      if (window.cartPaypal) {
        window.cartPaypal.AddToCart({ id: buttonId });
      }
      // PayPal renders the form asynchronously; observe DOM until the select appears
      const observer = new MutationObserver(() => {
        const select =
          document.getElementById("quantity") ||
          document.querySelector("select[id^='selector-variant-']");
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
