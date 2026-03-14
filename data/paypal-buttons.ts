// PayPal Add-to-Cart Button IDs for each product
// These are configured in the PayPal Business dashboard (Shopping Cart Buttons)

export const paypalAddToCartButtons: Record<string, string> = {
  calm: "SCTN97A48MV5L",
  "sunny-sage": "997RRPSCH8KG4",
  "adama-easter-set": "N7YLSV2NMZ3D8",
};

export function getPayPalAddToCartButtonId(
  productSlug: string,
): string | undefined {
  return paypalAddToCartButtons[productSlug];
}
