import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adama Soaps - Natural Handcrafted Soaps from Coffee Grounds",
  description:
    "Eco-friendly handcrafted soaps made from used coffee grounds. Natural, sustainable, and good for your skin.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
