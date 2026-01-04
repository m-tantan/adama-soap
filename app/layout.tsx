import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Adama Soaps - Natural Handcrafted Soaps from Coffee Grounds',
  description: 'Eco-friendly handcrafted soaps made from used coffee grounds. Natural, sustainable, and good for your skin.',
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
