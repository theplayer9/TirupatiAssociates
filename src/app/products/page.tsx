import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import ProductCatalog from "./ProductCatalog";

const BRAND = "Tirupati Associates";

export const metadata: Metadata = {
  title: "Architectural Hardware Manufacturer — Full Product Range",
  description:
    "Browse the full Tirupati Associates catalogue: hinges, locks, door handles, brackets, hooks, cabinet hardware, pad / brenton bolts, tower bolts, cabin hooks and gate latches. Manufactured in Aligarh, India and export-ready worldwide.",
  keywords:
    "architectural hardware manufacturer India, door hinges, mortise locks, tubular latches, door handles, brackets, hooks, cabinet hardware, pad bolts, tower bolts, cabin hooks, gate latches Aligarh",
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Architectural Hardware Manufacturer — Full Product Range | ${BRAND}`,
    description:
      "10 product categories of architectural hardware. Manufactured in-house in Aligarh, India to international quality standards.",
    url: "/products",
    images: [{ url: "/img/img3.jpg", width: 1200, height: 630, alt: "Tirupati Associates architectural hardware range" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tirupatiassociates.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.tirupatiassociates.com/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* PAGE HERO */}
      <section style={{ position:"relative", paddingTop:"calc(var(--nav-h) + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/img3.jpg" alt="Tirupati Associates hinges, handles, bolts and latches in use" fill priority style={{ objectFit:"cover", objectPosition:"center 60%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Product Catalog
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>Our Product<br/><span style={{ color:"#e8a020" }}>Range</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>Product categories of architectural hardware, manufactured in-house at our Aligarh facility by {BRAND} to international quality standards.</p>
        </div>
      </section>

      {/* CATEGORY TABS + ITEM CARDS */}
      <Suspense fallback={null}>
        <ProductCatalog />
      </Suspense>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>CAN&apos;T FIND WHAT YOU NEED?</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>We manufacture custom hinges to your drawings or samples. Send us your specs.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Request Custom Quote ›</Link>
        </div>
      </section>

    </>
  );
}
