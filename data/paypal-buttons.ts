// PayPal Hosted Button IDs for each product
// These are configured in the PayPal Business dashboard
// Each button has its own price, description, and settings

export const paypalButtons: Record<string, string> = {
  calm: "LZ9PU87PH84G6",
  "sunny-sage": "5UMAKGJHZHBEU",
};

export function getPayPalButtonId(productSlug: string): string | undefined {
  return paypalButtons[productSlug];
}
