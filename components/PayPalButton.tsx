"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (config: { hostedButtonId: string }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}

interface PayPalButtonProps {
  buttonId: string;
}

export default function PayPalButton({ buttonId }: PayPalButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const containerId = `paypal-container-${buttonId}`;
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      setError("PayPal client ID not configured");
      return;
    }

    // Check if script already exists❯ Let's change the style of the open number of products picker? it looks horrendous, use playwright mcp to check it out
    
    const existingScript = document.querySelector(
      'script[src*="paypal.com/sdk/js"]'
    );

    if (existingScript) {
      // SDK already loaded, render button
      if (window.paypal) {
        renderButton();
      } else {
        existingScript.addEventListener("load", renderButton);
      }
      return;
    }

    // Load PayPal SDK
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=hosted-buttons&disable-funding=venmo&currency=EUR`;
    script.async = true;

    script.onload = renderButton;
    script.onerror = () => setError("Failed to load PayPal SDK");

    document.body.appendChild(script);

    function renderButton() {
      if (window.paypal) {
        setIsLoaded(true);
        window.paypal
          .HostedButtons({ hostedButtonId: buttonId })
          .render(`#${containerId}`)
          .catch(() => setError("Failed to render PayPal button"));
      }
    }

    // Cleanup not needed - PayPal SDK should persist
  }, [buttonId, clientId, containerId]);

  if (error) {
    return (
      <div
        className="p-4 text-center"
        style={{
          backgroundColor: "rgba(237, 28, 36, 0.1)",
          borderRadius: "5px",
          color: "rgb(237, 28, 36)",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div>
      {!isLoaded && (
        <div
          className="p-4 text-center"
          style={{
            backgroundColor: "rgba(215, 213, 172, 0.1)",
            borderRadius: "5px",
            color: "#D7D5AC",
          }}
        >
          Loading PayPal...
        </div>
      )}
      <div id={containerId} />
    </div>
  );
}
