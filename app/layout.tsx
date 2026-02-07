import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Adama Soaps",
  title: "Adama Soaps - Handmade Vegan Coffee Soap from Munich",
  description:
    "Handmade cold-process soap made with recycled coffee grounds from Munich cafés. Vegan, sustainable, plastic-free.",
  icons: {
    icon: "/logo-black.svg",
    apple: "/logo-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
