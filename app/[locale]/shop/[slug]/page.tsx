import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

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
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Adama Soaps",
    };
  }

  const price = product.salePrice || product.price;
  const description = product.description
    .split("\n\n")[0]
    .substring(0, 160)
    .replace(/\n/g, " ");

  return {
    title: `${product.name} - Natural Coffee Soap | Adama Soaps Munich`,
    description: `${description}... €${price.toFixed(2)} - Handcrafted eco-friendly soap made from recycled coffee grounds in Munich, Germany.`,
    keywords: [
      product.name.toLowerCase(),
      "coffee soap",
      "coffee ground soap",
      "natural soap",
      "handmade soap",
      "eco-friendly soap",
      "sustainable soap",
      "Munich soap",
      "German handcrafted soap",
      "organic soap",
      "vegan soap",
      "zero waste soap",
      "recycled coffee soap",
    ],
    openGraph: {
      title: `${product.name} - Natural Coffee Soap`,
      description: description,
      type: "website",
      url: `https://adamasoaps.com/shop/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: `${product.name} - Handcrafted Coffee Ground Soap`,
        },
      ],
      siteName: "Adama Soaps",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Natural Coffee Soap`,
      description: description,
      images: [product.images[0]],
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

  // Generate JSON-LD structured data for the product
  const price = product.salePrice || product.price;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Adama Soaps",
    },
    offers: {
      "@type": "Offer",
      url: `https://adamasoaps.com/shop/${product.slug}`,
      priceCurrency: "EUR",
      price: price.toFixed(2),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Adama Soaps",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetails product={product} />
    </>
  );
}
