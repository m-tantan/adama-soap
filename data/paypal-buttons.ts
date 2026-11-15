// PayPal Add-to-Cart Button IDs for each product
// These are configured in the PayPal Business dashboard (Shopping Cart Buttons)

export const paypalAddToCartButtons: Record<string, string> = {
  calm: "SCTN97A48MV5L",
  "sunny-sage": "997RRPSCH8KG4",
  "adama-bundle": "N7YLSV2NMZ3D8",
  "vibrant-lemon-grass": "8ZCCDKKWYVHNQ",
};

export function getPayPalAddToCartButtonId(
  productSlug: string,
): string | undefined {
  return paypalAddToCartButtons[productSlug];
}

// Adama Christmas Duo: one Shopping Cart button per scent pair, so the chosen
// scents appear in the PayPal cart, checkout and order emails via the item
// name (e.g. "Adama Christmas Duo: Calm + Forest").
// Keys are the two soap slugs sorted alphabetically and joined with "+".
export const christmasDuoButtons: Record<string, string> = {
  // "calm+calm": "",
  // "calm+forest": "",
  // "calm+sunny-sage": "",
  // "calm+vibrant-lemon-grass": "",
  // "forest+forest": "",
  // "forest+sunny-sage": "",
  // "forest+vibrant-lemon-grass": "",
  // "sunny-sage+sunny-sage": "",
  // "sunny-sage+vibrant-lemon-grass": "",
  // "vibrant-lemon-grass+vibrant-lemon-grass": "",
};

export function getDuoButtonId(
  soap1: string,
  soap2: string,
): string | undefined {
  return christmasDuoButtons[[soap1, soap2].sort().join("+")];
}
