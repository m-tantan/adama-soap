import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://adamasoaps.com"),
  title: "Adama Soaps - Natural Handcrafted Soaps from Coffee Grounds",
  description:
    "Eco-friendly handcrafted soaps made from used coffee grounds. Natural, sustainable, and good for your skin.",
  icons: {
    icon: "/images/logo-black.png",
    apple: "/images/logo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
