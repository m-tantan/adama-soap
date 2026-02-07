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
    metadataBase: new URL("https://adamasoaps.com"),
    applicationName: "Adama Soaps",
    title:
      messages.metadata?.title ||
      "Adama Soaps - Handmade Vegan Coffee Soap from Munich",
    description:
      messages.metadata?.description ||
      "Handmade cold-process soap made with recycled coffee grounds from Munich cafés. Vegan, sustainable, plastic-free.",
    openGraph: {
      title:
        messages.metadata?.title ||
        "Adama Soaps - Handmade Vegan Coffee Soap from Munich",
      description:
        messages.metadata?.description ||
        "Handmade cold-process soap made with recycled coffee grounds from Munich cafés. Vegan, sustainable, plastic-free.",
      siteName: "Adama Soaps",
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        en: "/en/",
        de: "/de/",
      },
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
