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

function getProductJsonLd(product: (typeof products)[number], locale: string) {
  const baseUrl = "https://adama-soaps.com";
  const productUrl = `${baseUrl}/${locale}/shop/${product.slug}/`;
  const isDE = locale === "de";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.split("\n")[0],
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${baseUrl}${img}`,
    ),
    brand: {
      "@type": "Brand",
      name: "Adama Soaps",
    },
    url: productUrl,
    sku: product.id,
    category: isDE ? "Handgemachte Seife" : "Handmade Soap",
    material: isDE ? "Natürliche Inhaltsstoffe" : "Natural Ingredients",
    ...(product.ingredients && {
      additionalProperty: {
        "@type": "PropertyValue",
        name: "Ingredients",
        value: product.ingredients.join(", "),
      },
    }),
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

  const jsonLd = getProductJsonLd(product, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetails product={product} />
    </>
  );
}
