import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";
import { setRequestLocale, getMessages } from "next-intl/server";

export function generateStaticParams() {
  const locales = ["en", "de"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const product of products) {
      params.push({ locale, slug: product.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const isDE = locale === "de";
  const title = `${product.name} - ${isDE ? "Handgemachte Vegane Kaffeeseife" : "Handmade Vegan Coffee Soap"} | Adama`;
  const description = isDE
    ? `${product.name} - handgemachte kaltgerührte Kaffeeseife aus recyceltem Kaffeesatz. Vegan, nachhaltig und plastikfrei. Hergestellt in München.`
    : `${product.name} - handmade cold-process coffee soap made with recycled coffee grounds. Vegan, sustainable and plastic-free. Made in Munich.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

function getProductSchemas(product: (typeof products)[number], locale: string) {
  const baseUrl = "https://adamasoaps.com";
  const productUrl = `${baseUrl}/${locale}/shop/${product.slug}/`;
  const isDE = locale === "de";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description.replace(/\n+/g, " ").trim(),
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${baseUrl}${img}`,
    ),
    brand: {
      "@type": "Brand",
      name: "Adama Soaps",
      "@id": `${baseUrl}/#organization`,
    },
    url: productUrl,
    sku: product.id,
    category: isDE ? "Handgemachte Seife" : "Handmade Soap",
    material: isDE ? "Natürliche Inhaltsstoffe" : "Natural Ingredients",
    keywords: isDE
      ? `${product.name}, handgemachte Seife, Kaffeeseife, vegane Seife, München, nachhaltig, plastikfrei`
      : `${product.name}, handmade soap, coffee soap, vegan soap, Munich, sustainable, plastic-free`,
    ...(product.ingredients && {
      additionalProperty: product.ingredients.map((ingredient) => ({
        "@type": "PropertyValue",
        name: isDE ? "Zutat" : "Ingredient",
        value: ingredient,
      })),
    }),
    manufacturer: {
      "@type": "Organization",
      name: "Adama Soaps",
      "@id": `${baseUrl}/#organization`,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "EUR",
      price: product.salePrice ?? product.price,
      ...(product.salePrice && {
        priceSpecification: {
          "@type": "PriceSpecification",
          price: product.salePrice,
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
      }),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Adama Soaps",
        "@id": `${baseUrl}/#organization`,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "DE",
        },
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        item: `${baseUrl}/${locale}/shop/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return [productSchema, breadcrumbSchema];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const schemas = getProductSchemas(product, locale);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProductDetails product={product} />
    </>
  );
}
