// PayPal Add-to-Cart Button IDs for each product
// These are configured in the PayPal Business dashboard (Shopping Cart Buttons)

export const paypalAddToCartButtons: Record<string, string> = {
  calm: "SCTN97A48MV5L",
  "sunny-sage": "997RRPSCH8KG4",
  "adama-bundle": "N7YLSV2NMZ3D8",
  "vibrant-lemon-grass": "8ZCCDKKWYVHNQ",
  forest: "KNXTPY2MQB77S",
  // Has a "Your Soaps" dropdown (10 scent pairs) configured in PayPal
  "adama-christmas-duo": "JH2XZA4LUCADL",
};

export function getPayPalAddToCartButtonId(
  productSlug: string,
): string | undefined {
  return paypalAddToCartButtons[productSlug];
}
