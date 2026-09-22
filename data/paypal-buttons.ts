// PayPal Add-to-Cart Button IDs for each product
// These are configured in the PayPal Business dashboard (Shopping Cart Buttons)

export const paypalAddToCartButtons: Record<string, string> = {
  calm: "SCTN97A48MV5L",
  "sunny-sage": "997RRPSCH8KG4",
  "adama-bundle": "N7YLSV2NMZ3D8",
  // TODO: "vibrant-lemon-grass" needs a PayPal Shopping Cart Button created in
  // the PayPal Business dashboard, then its ID added here. Until then the
  // Add to Cart button is hidden on this product's page (safe no-op).
};

export function getPayPalAddToCartButtonId(
  productSlug: string,
): string | undefined {
  return paypalAddToCartButtons[productSlug];
}
