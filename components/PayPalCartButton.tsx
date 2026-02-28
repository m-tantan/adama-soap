"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cartPaypal?: {
      Cart: (config: { id: string }) => void;
      AddToCart: (config: { id: string }) => void;
    };
  }
}

export default function PayPalCartButton() {
  useEffect(() => {
    const initialize = () => {
      if (window.cartPaypal) {
        window.cartPaypal.Cart({ id: "pp-view-cart" });
      }
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
  }, []);

  // paypal-cart-button is a PayPal web component registered by cart.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CartButton = "paypal-cart-button" as any;
  return <CartButton data-id="pp-view-cart" />;
}
