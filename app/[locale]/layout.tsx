import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as any;

  return {
    title: messages.metadata?.title || "Adama Soaps - Natural Handcrafted Coffee Soaps | Munich, Germany",
    description: messages.metadata?.description || "Eco-friendly handcrafted soaps made from recycled coffee grounds in Munich. Natural, sustainable, vegan, and good for your skin. Shop our collection of organic coffee soaps.",
    keywords: [
      "coffee soap",
      "coffee ground soap",
      "natural soap",
      "handmade soap Munich",
      "eco-friendly soap",
      "sustainable soap",
      "vegan soap",
      "organic soap",
      "zero waste soap",
      "recycled coffee soap",
      "German handcrafted soap",
      "natural skincare Munich",
      "eco soap Germany",
      "coffee soap Munich",
      "handcrafted natural soap",
      "upcycled coffee grounds",
    ],
    openGraph: {
      title: "Adama Soaps - Natural Handcrafted Coffee Soaps",
      description: "Eco-friendly handcrafted soaps made from recycled coffee grounds in Munich, Germany.",
      type: "website",
      url: "https://adamasoaps.com",
      siteName: "Adama Soaps",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Adama Soaps - Natural Handcrafted Coffee Soaps",
      description: "Eco-friendly handcrafted soaps made from recycled coffee grounds in Munich, Germany.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  // Organization and Website structured data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adama Soaps",
    url: "https://adamasoaps.com",
    logo: "https://adamasoaps.com/images/logo-black.png",
    description: "Handcrafted eco-friendly soaps made from recycled coffee grounds in Munich, Germany",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Holzstraße 11",
      addressLocality: "Munich",
      postalCode: "80469",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4915730104878",
      contactType: "Customer Service",
      areaServed: "DE",
      availableLanguage: ["English", "German"],
    },
    sameAs: [
      "https://instagram.com/adamasoaps",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adama Soaps",
    url: "https://adamasoaps.com",
    description: "Eco-friendly handcrafted soaps made from recycled coffee grounds",
    publisher: {
      "@type": "Organization",
      name: "Adama Soaps",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "va7zyitnz5");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
