import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adamasoaps.com";
  const locales = ["en", "de"];
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Static pages per locale
  const staticPages = ["", "/shop", "/about"];
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}/`,
        lastModified: now,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }
  }

  // Product pages per locale
  for (const locale of locales) {
    for (const product of products) {
      entries.push({
        url: `${baseUrl}/${locale}/shop/${product.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
