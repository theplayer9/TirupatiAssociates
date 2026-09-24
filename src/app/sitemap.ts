import type { MetadataRoute } from "next";
import { allItems } from "./products/catalog";
import { posts } from "./blog/data";

const BASE_URL = "https://www.tirupatiassociates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/export-markets", "/quality", "/blog", "/about", "/contact"];
  const productRoutes = allItems.map((p) => `/products/${p.slug}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...productRoutes, ...blogRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
