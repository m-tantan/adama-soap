import { MetadataRoute } from "next";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adamasoaps.com";
  const locales = ["en", "de"];
  
  const staticPages: MetadataRoute.Sitemap = [];
  
  // Add static pages for each locale
  locales.forEach((locale) => {
    staticPages.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/shop`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      }
    );
  });

  // Add product pages for each locale
  const productPages: MetadataRoute.Sitemap = [];
  locales.forEach((locale) => {
    products.forEach((product) => {
      productPages.push({
        url: `${baseUrl}/${locale}/shop/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...productPages];
}
