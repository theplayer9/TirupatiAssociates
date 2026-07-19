import type { MetadataRoute } from "next";
import { products } from "./products/data";
import { posts } from "./blog/data";

const BASE_URL = "https://www.tirupatihinges.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/export-markets", "/quality", "/blog", "/about", "/contact"];
  const productRoutes = products.map((p) => `/products/${p.id}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...productRoutes, ...blogRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
