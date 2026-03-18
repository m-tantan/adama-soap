import { getMessages } from "next-intl/server";
import { products } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as any;

  return {
    title: messages.metadata?.shopTitle || "Shop - Adama Soaps",
    description:
      messages.metadata?.shopDescription ||
      "Browse our collection of handmade vegan coffee soaps.",
  };
}

function getShopSchema(locale: string) {
  const baseUrl = "https://adamasoaps.com";
  const isDE = locale === "de";
  const shopUrl = `${baseUrl}/${locale}/shop/`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${shopUrl}#page`,
    name: isDE
      ? "Handgemachte Vegane Kaffeeseifen"
      : "Handmade Vegan Coffee Soaps",
    description: isDE
      ? "Entdecke unsere Kollektion handgemachter veganer Kaffeeseifen aus recyceltem Kaffeesatz von Münchner Cafés."
      : "Browse our collection of handmade vegan coffee soaps made with recycled coffee grounds from Munich cafés.",
    url: shopUrl,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isDE ? "Startseite" : "Home",
          item: `${baseUrl}/${locale}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shop",
          item: shopUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: isDE
        ? "Handgemachte Vegane Kaffeeseifen"
        : "Handmade Vegan Coffee Soaps",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/${locale}/shop/${product.slug}/`,
        name: product.name,
      })),
    },
  };
}

export default async function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const schema = getShopSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
