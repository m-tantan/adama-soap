import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Eco-Friendly Soap Makers | Adama Soaps Munich",
  description:
    "Learn about Adama Soaps - handcrafting natural, eco-friendly soaps from recycled coffee grounds in Munich, Germany. Our story, mission, and commitment to sustainability.",
  keywords: [
    "about Adama Soaps",
    "eco-friendly soap makers",
    "sustainable soap Munich",
    "coffee soap story",
    "handmade soap artisans",
    "zero waste Munich",
    "natural soap makers Germany",
    "recycled coffee grounds",
    "green business Munich",
  ],
  openGraph: {
    title: "About Us - Eco-Friendly Soap Makers | Adama Soaps",
    description:
      "Learn about Adama Soaps - handcrafting natural soaps from recycled coffee grounds in Munich.",
    type: "website",
    url: "https://adamasoaps.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Eco-Friendly Soap Makers | Adama Soaps",
    description:
      "Learn about Adama Soaps - handcrafting natural soaps from recycled coffee grounds in Munich.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
