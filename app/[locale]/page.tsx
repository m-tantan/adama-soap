import DiscoverSoaps from "@/components/DiscoverSoaps";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import CafePartners from "@/components/CafePartners";
import FollowUs from "@/components/FollowUs";

const BASE_URL = "https://adamasoaps.com";

function getHomepageSchemas(locale: string) {
  const isDE = locale === "de";
  const description = isDE
    ? "Handgemachte kaltgerührte Seife aus recyceltem Kaffeesatz von Münchner Cafés. Vegan, nachhaltig, plastikfrei."
    : "Handmade cold-process soap made with recycled coffee grounds from Munich cafés. Vegan, sustainable, plastic-free.";

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Brand"],
    "@id": `${BASE_URL}/#organization`,
    name: "Adama Soaps",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      url: `${BASE_URL}/logo-black.svg`,
      contentUrl: `${BASE_URL}/logo-black.svg`,
    },
    description,
    email: "Adamasoaps@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Holzstr. 11 2/a",
      addressLocality: "Munich",
      postalCode: "80469",
      addressCountry: "DE",
    },
    sameAs: ["https://instagram.com/adamasoaps"],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Adama Soaps",
    description,
    url: BASE_URL,
    email: "Adamasoaps@gmail.com",
    image: `${BASE_URL}/logo-black.svg`,
    logo: `${BASE_URL}/logo-black.svg`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "PayPal",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Holzstr. 11 2/a",
      addressLocality: "Munich",
      postalCode: "80469",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.132,
      longitude: 11.566,
    },
    areaServed: { "@type": "Country", name: "Germany" },
    sameAs: ["https://instagram.com/adamasoaps"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Adama Soaps",
    description,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: isDE ? "de-DE" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/${locale}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return [organization, localBusiness, website];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const schemas = getHomepageSchemas(locale);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <DiscoverSoaps />
      <HeroSection />
      <CafePartners />
      <OurStory />
      <FollowUs />
    </>
  );
}
