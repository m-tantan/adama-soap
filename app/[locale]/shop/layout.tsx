import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Natural Coffee Soaps | Adama Soaps Munich",
  description:
    "Browse our collection of handcrafted eco-friendly soaps made from recycled coffee grounds. Natural, vegan, and sustainable soaps made in Munich, Germany. Free shipping available.",
  keywords: [
    "buy coffee soap",
    "shop natural soap",
    "handmade soap online",
    "eco-friendly soap shop",
    "organic soap Munich",
    "vegan soap Germany",
    "coffee ground soap buy",
    "sustainable soap store",
    "natural skincare shop",
    "zero waste soap",
  ],
  openGraph: {
    title: "Shop Natural Coffee Soaps | Adama Soaps",
    description:
      "Browse our collection of handcrafted eco-friendly soaps made from recycled coffee grounds.",
    type: "website",
    url: "https://adamasoaps.com/shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Natural Coffee Soaps | Adama Soaps",
    description:
      "Browse our collection of handcrafted eco-friendly soaps made from recycled coffee grounds.",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add ItemList structured data for the shop page
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Adama Soaps Products",
    description: "Collection of handcrafted eco-friendly coffee soaps",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}
