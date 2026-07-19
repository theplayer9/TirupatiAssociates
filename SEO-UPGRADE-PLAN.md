# SEO & Visibility Upgrade Plan — Tirupati Hinges & Hardware Exports

**Benchmark site analyzed:** [verixhinges.com](https://www.verixhinges.com/) — a competing SS hinge manufacturer/exporter site used here as the "bare minimum" bar to clear.

**Brand update:** All references to the company across the site (navbar logo, footer, page titles, body copy, metadata, structured data, email addresses, social handles) should be updated to the new brand name:

> ## **Tirupati Hinges & Hardware Exports**

This document is a gap analysis + concrete implementation plan to bring `TirupatiAssociates` (Next.js App Router site) up to and beyond the Verix bar, with equal weight on **SEO**, **visual design**, and **product/company visibility**.

---

## 1. What Verix Does That We Don't (Gap Analysis)

| Area | Verix Hinges | Tirupati Hinges & Hardware Exports (current) | Verdict |
|---|---|---|---|
| Per-page `<title>` / meta description | Every page has a unique, keyword-rich title (e.g. *"SS Hinges Manufacturer in Ahmedabad, Stainless Steel Hinges Supplier in Ahmedabad \| Verix Hinges"*) | Only **one** global title/description in `layout.tsx`, reused on every route | ❌ Missing |
| Individual product pages | Every product size/variant gets its **own URL** (e.g. `/100-mm-stainless-steel-butt-hinges.html`, `/125-x-3-x-3-mm-304-grade-ss-bearing-hinges.html`) | All products live as `#anchor` sections inside one `/products` page — **no unique URLs, no unique metadata per product** | ❌ Missing (biggest gap) |
| Dedicated **Export** nav item | Top-level nav link: `/export.html` | Combined into `/export-markets`, not visually a distinct top-level "column" | ⚠️ Needs its own clear nav + footer column |
| Dedicated **Quality** nav item | Top-level nav link: `/our-quality.html` | Folded into `/about#quality` (anchor, not a real page/URL) | ❌ Missing as standalone section |
| Dedicated **Blog** nav item | Top-level nav link: `/blog/` | None | ❌ Missing |
| Structured data (JSON-LD) | None found | None | ⚠️ Both weak — opportunity to beat them here |
| Open Graph / Twitter Card meta | Has `og:title`, `og:description`, `og:image` | None found in `layout.tsx` | ❌ Missing |
| Location + city keyword targeting | Repeats "Ahmedabad", "Gujarat", "India" densely in H1/H2/body across every section | Mentions "Aligarh" mostly in about/footer, not repeated as a keyword pattern per page | ❌ Underused |
| Testimonials (with named reviewers) | Yes — 6 named client quotes, repeated in a loop | None | ❌ Missing |
| Industries served page/section | Explicit "Industries We Supply" section (11 named industries) | Not present | ❌ Missing |
| Company name repetition | "Verix Hinges" appears 20+ times across the homepage text alone | Old brand name rarely appeared in body copy | ❌ Underused — **fix while renaming brand (see §2 and §5)** |
| Enquiry CTAs | "Enquire Now", "Request a Quote", "Download Brochure" repeated per product | Request Quote CTAs exist, no brochure download | ⚠️ Partial |
| Sitemap / robots.txt | Unknown (not inspected) | **Confirmed absent** — no `sitemap.ts`, `robots.ts`, or static files | ❌ Missing |
| Favicon / app icons / manifest | Has a logo-based favicon | Default Next.js favicon only, no manifest | ❌ Missing |

---

## 2. Brand Rename — "Tirupati Hinges & Hardware Exports"

Every visible and machine-readable instance of the old name needs to change. Use a project-wide search for the old brand strings and replace with the new one, including these known locations:

| File | Current string(s) | Replace with |
|---|---|---|
| `src/app/layout.tsx` | `"Tirupati Associates — Premium Door Hinge Manufacturer \| Aligarh, India"` (metadata title) | `"Tirupati Hinges & Hardware Exports — Premium Door Hinge Manufacturer \| Aligarh, India"` |
| `src/components/Navbar.tsx` | `TIRUPATI` / `ASSOCIATES` split logo text | `TIRUPATI HINGES` / `& HARDWARE EXPORTS` (stack on two lines, see §4 design notes) |
| `src/components/Footer.tsx` | `TIRUPATI ASSOCIATES`, "Premium door hinge manufacturer...", copyright line | Update brand text + `© {year} Tirupati Hinges & Hardware Exports. All rights reserved.` |
| `src/app/about/page.tsx` | `"About Tirupati"` hero heading, "Tirupati Associates was founded in 1990..." | `"About Tirupati Hinges & Hardware Exports"`, update founding sentence |
| Contact details | `info@tirupatiassociates.com`, `Tirupatiassociates07@gmail.com` | Update to new domain/email once registered, e.g. `info@tirupatihinges.com` — confirm with the user before publishing any new contact detail |
| JSON-LD `Organization` schema (new) | — | `name: "Tirupati Hinges & Hardware Exports"` |
| Social handles / `sameAs` URLs (new) | — | Update once new social profiles exist under the new name |

**Body-copy reinforcement:** while renaming, also *increase* how often the brand name appears in on-page text (not just logo/footer) — mirror Verix's pattern of repeating the brand name inside H1s, opening paragraphs, and CTA microcopy on every page. Target 3–5 natural mentions of "Tirupati Hinges & Hardware Exports" per page.

---

## 3. Priority Fix List (ordered by SEO impact)

### 🔴 P0 — Structural (do these first, they unlock everything else)

1. **Per-page metadata** — every route needs its own unique `title`, `description`, `keywords`, canonical URL, Open Graph, and Twitter Card tags (see §5 for the full metadata checklist — this has been expanded significantly per the design brief).
2. **Give every product its own URL.** Convert `/products#butt`, `/products#heavy`, etc. into real routes:
   - `/products/butt-hinges`
   - `/products/heavy-duty-hinges`
   - `/products/concealed-cabinet-hinges`
   - `/products/piano-continuous-hinges`
   - `/products/spring-hinges`
   - `/products/tubular-latches`
   - `/products/ball-bearing-hinges`
   - `/products/cupboard-hinges`
   - `/products/custom-oem-hinges`

   Use a dynamic route `src/app/products/[slug]/page.tsx` driven by the existing `products` data array (extract to a shared `data.ts`, render each slug as its own page with its own metadata + `Product` JSON-LD).
3. **Add `sitemap.ts` and `robots.ts`** (Next.js App Router native support — no static XML needed). Include every static route + every generated product/blog route.
4. **Add JSON-LD structured data site-wide** (see §5) — `Organization`, `LocalBusiness`, `Product` (per product page), `BreadcrumbList`, `Article` (per blog post), `FAQPage` (where relevant), `AggregateRating`/`Review` (once testimonials exist).
5. **Restructure navigation into distinct columns/sections for Blog, Export, and Quality** — see §4 below. These currently either don't exist (Blog, standalone Quality) or are buried (Export folded generically). Each needs to be its own top-level nav item **and** its own footer column, matching how Verix treats them as first-class sections.

### 🟠 P1 — Content additions

6. **Add a `/blog` section** — `src/app/blog/page.tsx` (index) + `src/app/blog/[slug]/page.tsx` (post template). Suggested first 8 posts:
   - "How to Choose the Right Door Hinge Size for Your Project"
   - "SS 304 vs SS 316 Hinges: Which Grade Do You Need?"
   - "Door Hinge Manufacturer in Aligarh: Why India's Hardware Capital Leads Global Exports"
   - "Ball Bearing Hinges vs Plain Bearing Hinges: A Buyer's Guide"
   - "Exporting Hinges to UAE: Standards, Packaging & Documentation Explained"
   - "How Concealed Cabinet Hinges Are Made: A Manufacturing Walkthrough"
   - "5 Signs You Need Heavy-Duty Hinges (Not Standard Butt Hinges)"
   - "OEM & Private Label Hinge Manufacturing: What Importers Should Know"
7. **Promote `/export-markets` to a first-class top-level "Export" nav item and footer column** — keep the existing rich content (UAE, South Africa, Vietnam, Kenya, export process) but treat it in the nav/footer exactly like Verix treats `/export.html`, not nested under a generic label.
8. **Create a standalone `/quality` page** (currently just an anchor on `/about`). Give it its own URL, metadata, and footer/nav column so it can independently rank for "hinge quality control", "ISO 9001 hinge manufacturer", "salt spray tested hinges", etc.
9. **Add named client testimonials** to the homepage (collect real ones from existing export clients — don't fabricate names/quotes).
10. **Add an "Industries We Supply" section** — construction, furniture manufacturing, automotive, marine, hospitality, real estate, government/PWD projects, etc.
11. **Add a downloadable PDF brochure/catalogue**, linked from hero, products, quality, and CTA sections.

### 🟡 P2 — On-page keyword & copy tuning

12. **Keyword-first H1s**, matching the `[Product/Service] + [Manufacturer/Exporter/Supplier] + [Location]` formula:
    - Home: "Door Hinge Manufacturer in Aligarh, India | Tirupati Hinges & Hardware Exports"
    - Products: "Door Hinges & Hardware Manufacturer — Full Product Range"
    - Export: "Door Hinge Exporter from India — Serving 40+ Countries"
    - Quality: "Quality Control — ISO 9001 Certified Hinge Manufacturing"
    - Blog: "Hinge Buying Guides & Manufacturing Insights"
    - About: "About Tirupati Hinges & Hardware Exports — Manufacturing Since 1990"
13. **Audit every image `alt` attribute** across `products/page.tsx`, `ProductGallery.tsx`, and any new photography — descriptive, keyword-relevant, never empty.
14. **Internal linking** — blog posts → relevant product pages; product pages → relevant export market ("Popular in UAE" badge linking to `/export-markets#uae`); quality page → product pages ("tested to this standard").
15. **NAP consistency** (Name/Address/Phone) — the exact new brand name, address, and phone must match identically across the footer, contact page, JSON-LD, and the (external) Google Business Profile listing.

---

## 4. Design Note — Nav & Footer Restructure for Blog / Export / Quality

The brief asks for **Blog, Export, and Quality to each get their own distinct column** rather than being nested under About or Products. This affects both the primary navigation and the footer.

### Navbar (`src/components/Navbar.tsx`)

Current links array:
```tsx
const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/export-markets", label: "Export Markets" },
  { href: "/contact", label: "Contact" },
];
```

Updated links array (Blog and Quality promoted to top-level, Export shortened to match Verix's single-word nav label):
```tsx
const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/export-markets", label: "Export" },
  { href: "/quality", label: "Quality" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
```
With 7 items, tighten letter-spacing/gap slightly on desktop (≥1280px) and rely on the existing hamburger menu below `768px` — no functional change needed there, just add the two new entries to the same mobile list.

### Footer (`src/components/Footer.tsx`)

Current footer grid is 4 columns: **Brand | Products | Company | Contact**. Restructure to 5 columns so Export, Quality, and Blog each get dedicated space instead of being buried inside "Company":

```tsx
<div style={{ display:"grid", gridTemplateColumns:"1.6fr 1fr 1fr 1fr 1fr", gap:"40px" }} className="footer-grid">
  {/* 1. Brand */}
  {/* 2. Products — existing per-product #anchor links, update to real /products/[slug] URLs */}
  {/* 3. Export — NEW column */}
  {/* 4. Quality — NEW column */}
  {/* 5. Blog — NEW column, links to 4-5 most recent posts */}
</div>
```

Suggested column contents:
```tsx
// Export column
{ heading: "Export", links: [
  ["UAE & Middle East", "/export-markets#uae"],
  ["South Africa", "/export-markets#sa"],
  ["Vietnam & SE Asia", "/export-markets#vietnam"],
  ["Kenya & East Africa", "/export-markets#kenya"],
  ["Export Process", "/export-markets#process"],
]}

// Quality column
{ heading: "Quality", links: [
  ["ISO 9001:2015", "/quality#iso"],
  ["Testing & QC", "/quality#testing"],
  ["Certifications", "/quality#certifications"],
  ["Manufacturing", "/quality#manufacturing"],
]}

// Blog column
{ heading: "Blog", links: [
  ["Hinge Buying Guides", "/blog"],
  ["Latest Post 1", "/blog/[slug-1]"],
  ["Latest Post 2", "/blog/[slug-2]"],
  ["Latest Post 3", "/blog/[slug-3]"],
]}
```

At `≤1024px`, collapse to `repeat(3, 1fr)` (2 rows of 3 + Brand spanning); at `≤640px`, collapse to a single column — extend the existing `.footer-grid` media query breakpoints already in `Footer.tsx` rather than introducing new ones.

### Visual/design polish (SEO and design are linked — faster, cleaner pages rank better too)

- Keep the existing amber (`#e8a020`) / charcoal (`#1a1a1a`) brand palette and Barlow Condensed + Inter type pairing — it's already distinctive and on-brand; just extend it consistently onto the three new page types (Blog, Quality, individual product pages) so they don't feel bolted-on.
- Blog index: use a card grid (image, category tag, title, 1-line excerpt, read time) — keep consistent with the existing `.product-card` hover treatment already defined in `page.tsx`'s inline `<style>` block, don't invent a new card style.
- Quality page: reuse the existing certification-badge pattern already built in `about/page.tsx` (the `✓` circle + cert name + issuing body layout) rather than redesigning it — this page is really "the quality section from About, promoted to a full page with more depth."
- Individual product pages: reuse the existing two-column layout already in `products/page.tsx` (image/gallery left or right + spec table), just give each product its own route instead of sharing one long scrolling page.
- Run each new/changed page through Lighthouse (Performance, Accessibility, Best Practices, SEO tabs) before launch — Core Web Vitals (LCP, CLS, INP) are a direct Google ranking factor, so "design" and "SEO" are not separate workstreams here.

---

## 5. Metadata Checklist — Make Every Page Maximally Searchable

This expands well beyond a basic `title`/`description` pair. Apply this full checklist to **every** route (home, products index, each product page, export, quality, blog index, each blog post, about, contact):

### A. Core HTML metadata (`Metadata` object per page)
- `title` — unique, keyword-first, includes brand name, ≤60 characters where possible
- `description` — unique, ≤160 characters, includes primary keyword + call to action
- `keywords` — comma-separated, page-specific (secondary priority for modern SEO, but still worth setting)
- `authors` / `creator` / `publisher` — set to `"Tirupati Hinges & Hardware Exports"`
- `metadataBase` — set once in `layout.tsx` (e.g. `new URL("https://www.tirupatihinges.com")`) so all relative OG/canonical URLs resolve correctly
- `alternates.canonical` — explicit canonical URL per page (prevents duplicate-content issues once product pages exist)
- `robots` — `{ index: true, follow: true }` explicitly set (and `false` on any thank-you/internal-only pages)

### B. Open Graph (social + link-preview SEO)
- `openGraph.title`, `openGraph.description` — can mirror or slightly vary from the core title/description
- `openGraph.url` — canonical page URL
- `openGraph.siteName` — `"Tirupati Hinges & Hardware Exports"`
- `openGraph.images` — at least one 1200×630 image per page (product photo for product pages, hero shot for others)
- `openGraph.locale` — `"en_IN"`
- `openGraph.type` — `"website"` (pages), `"article"` (blog posts), `"product"` where supported

### C. Twitter Card
- `twitter.card` — `"summary_large_image"`
- `twitter.title`, `twitter.description`, `twitter.images` — same content as Open Graph for consistency

### D. Icons & manifest
- `icons.icon`, `icons.apple` — replace the default Next.js favicon with the new brand mark (favicon.ico, apple-touch-icon.png, 32×32 and 16×16 PNGs)
- `manifest.json` (`src/app/manifest.ts` in App Router) — name, short_name, theme_color (`#e8a020`), background_color, icons — improves "add to home screen" and is another minor searchability/trust signal

### E. Structured data (JSON-LD) — see §3 item 4 for placement
- `Organization` — sitewide, in `layout.tsx`
- `LocalBusiness` (or `Organization` + `address`/`geo` if a single manufacturing address applies) — helps local/Maps-adjacent search
- `Product` — one per product page (name, description, material, image, brand)
- `BreadcrumbList` — product pages, blog posts (Home › Products › [Product Name])
- `Article` — each blog post (headline, datePublished, author, image)
- `FAQPage` — if/when FAQ content is added to product or export pages
- `AggregateRating` / `Review` — once real testimonials with ratings exist

### F. Sitemap & crawl control
- `sitemap.ts` — every static + generated route, with `lastModified`
- `robots.ts` — allow all, point to sitemap
- Verify the final sitemap in Google Search Console and Bing Webmaster Tools after deploy (external step, not code — flag this as a launch-day TODO)

### G. Verification & analytics tags (external services, added as meta tags/env once accounts exist)
- `google-site-verification` meta tag (Google Search Console)
- Bing Webmaster Tools verification tag
- Google Analytics 4 / Search Console linkage
- Optional: `google-adsense-account` only if/when relevant — not needed for a B2B manufacturer site

---

## 6. Implementation Notes (Next.js App Router specifics)

```
src/app/
├── layout.tsx                      # sitewide metadataBase, Organization JSON-LD, manifest link
├── manifest.ts                     # NEW — web app manifest
├── sitemap.ts                      # NEW — generates sitemap.xml automatically
├── robots.ts                       # NEW — generates robots.txt automatically
├── page.tsx                        # add full metadata (title/desc/OG/Twitter/canonical)
├── products/
│   ├── page.tsx                    # add metadata; becomes the index/grid
│   ├── data.ts                     # NEW — extract the `products` array here, shared by index + [slug]
│   └── [slug]/
│       └── page.tsx                # NEW — one page per product, own metadata + Product + BreadcrumbList JSON-LD
├── about/
│   └── page.tsx                    # add metadata
├── quality/
│   └── page.tsx                    # NEW — standalone Quality page, own nav item + footer column
├── export-markets/
│   └── page.tsx                    # add metadata; promoted to top-level "Export" nav item + footer column
├── blog/
│   ├── page.tsx                    # NEW — blog index, own nav item + footer column
│   ├── data.ts                     # NEW — post list/content
│   └── [slug]/
│       └── page.tsx                # NEW — post template, own metadata + Article + BreadcrumbList JSON-LD
└── contact/
    └── page.tsx                    # add metadata
```

### Example: full per-page metadata pattern (product page)

```tsx
// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { products } from "../data";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.id === params.slug);
  if (!product) return {};

  const title = `${product.name} Manufacturer & Exporter in Aligarh, India | Tirupati Hinges & Hardware Exports`;
  const description = `${product.desc} Export-ready ${product.name.toLowerCase()} manufactured in Aligarh, India by Tirupati Hinges & Hardware Exports — supplying UAE, South Africa, Vietnam & 40+ countries.`;
  const url = `/products/${product.id}`;
  const image = product.images?.[0] ?? "/img/hinge-pile.jpg";

  return {
    title,
    description,
    keywords: `${product.name} manufacturer India, ${product.name} exporter Aligarh, buy ${product.name} wholesale`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Tirupati Hinges & Hardware Exports",
      images: [{ url: image, width: 1200, height: 630, alt: product.name }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
```

### Example: `sitemap.ts`

```tsx
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { products } from "./products/data";
import { posts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tirupatihinges.com"; // update to real domain once registered
  const staticRoutes = ["", "/products", "/export-markets", "/quality", "/blog", "/about", "/contact"];
  const productRoutes = products.map((p) => `/products/${p.id}`);
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...productRoutes, ...blogRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
```

### Example: `robots.ts`

```tsx
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.tirupatihinges.com/sitemap.xml",
  };
}
```

### Example: `manifest.ts`

```tsx
// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tirupati Hinges & Hardware Exports",
    short_name: "Tirupati Hinges",
    description: "Door hinge manufacturer and exporter based in Aligarh, India, serving 40+ countries.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e8a020",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

### Example: Organization JSON-LD (add to `layout.tsx`)

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tirupati Hinges & Hardware Exports",
      url: "https://www.tirupatihinges.com",
      logo: "https://www.tirupatihinges.com/img/logo.png",
      description: "Door hinge manufacturer and exporter based in Aligarh, India, serving 40+ countries.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 2, Talanagri",
        addressLocality: "Aligarh",
        addressRegion: "Uttar Pradesh",
        postalCode: "202001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7310572361",
        contactType: "sales",
      },
      sameAs: [
        // add real social profile URLs once created under the new brand name
      ],
    }),
  }}
/>
```

### Example: root `layout.tsx` metadata object (expanded)

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tirupatihinges.com"),
  title: {
    default: "Tirupati Hinges & Hardware Exports — Premium Door Hinge Manufacturer | Aligarh, India",
    template: "%s | Tirupati Hinges & Hardware Exports",
  },
  description:
    "Leading door hinge manufacturer from Aligarh, India. Supplying premium quality hinges to UAE, South Africa, Vietnam and 40+ global markets. ISO 9001 certified.",
  keywords:
    "door hinge manufacturer India, Aligarh hinge exporter, heavy duty hinges UAE, door hinges South Africa, hinge supplier Vietnam, Tirupati Hinges Hardware Exports",
  authors: [{ name: "Tirupati Hinges & Hardware Exports" }],
  creator: "Tirupati Hinges & Hardware Exports",
  publisher: "Tirupati Hinges & Hardware Exports",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Tirupati Hinges & Hardware Exports",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};
```
Using the `title.template` pattern above means every child page only needs to set `title: "Products"` and it automatically renders as `"Products | Tirupati Hinges & Hardware Exports"` — consistent branding with minimal repetition.

---

## 7. Quick Reference — Keyword Targets Per Page

| Page | Primary keyword phrase | Secondary phrases |
|---|---|---|
| `/` | Door Hinge Manufacturer in Aligarh, India | Tirupati Hinges & Hardware Exports, hinge exporter India |
| `/products` | Door Hinges Manufacturer — Full Product Range | butt hinges, ball bearing hinges, concealed hinges India |
| `/products/[each]` | `[Product Name]` Manufacturer & Exporter in Aligarh | `[Product Name]` wholesale, buy `[Product Name]` India |
| `/export-markets` (nav: **Export**) | Door Hinge Exporter from India | hinge supplier UAE, hinge exporter South Africa/Vietnam |
| `/quality` (nav: **Quality**, new) | Quality Control — ISO 9001 Hinge Manufacturing | salt spray tested hinges, BIS certified hinges |
| `/blog` (nav: **Blog**, new) | Hinge Buying Guides & Manufacturing Insights | (long-tail, one phrase per post — see §3.6) |
| `/about` | About Tirupati Hinges & Hardware Exports — Since 1990 | Aligarh hardware factory, ISO 9001 hinge manufacturer |
| `/contact` | Request a Quote — Tirupati Hinges & Hardware Exports | door hinge supplier contact, hinge export enquiry |

---

## 8. Summary

Fastest wins, in order: **(1)** rename the brand consistently everywhere (§2), **(2)** apply the full expanded metadata checklist to every page (§5) — this alone dramatically improves how the site appears in search results and social shares, **(3)** give Export, Quality, and Blog their own top-level nav items and footer columns (§4), **(4)** give every product its own URL, **(5)** build out the sitemap/robots/manifest/JSON-LD layer, **(6)** launch the Blog and standalone Quality page with real content. Testimonials, industries list, and brochure download compound on top of that foundation and are what let this site meaningfully exceed the Verix benchmark rather than just match it.
