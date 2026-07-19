import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "./data";

const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  title: "Door Hinges & Hardware Manufacturer — Full Product Range",
  description:
    "Browse the full Tirupati Hinges & Hardware Exports product range: butt hinges, heavy duty hinges, concealed cabinet hinges, piano hinges, spring hinges, tubular latches, ball bearing hinges, cupboard hinges and custom OEM manufacturing. Manufactured in Aligarh, India and export-ready worldwide.",
  keywords:
    "door hinge manufacturer India, butt hinges, ball bearing hinges, concealed hinges, heavy duty hinges, piano hinges, tubular latches, cupboard hinges, custom OEM hinges Aligarh",
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Door Hinges & Hardware Manufacturer — Full Product Range | ${BRAND}`,
    description:
      "500+ hinge variants across 9 product families. Manufactured in-house in Aligarh, India to international quality standards.",
    url: "/products",
    images: [{ url: "/img/hinge-pile.jpg", width: 1200, height: 630, alt: "Precision-manufactured door hinges" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tirupatihinges.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.tirupatihinges.com/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* PAGE HERO */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/hinge-pile.jpg" alt="Precision-manufactured door hinges by Tirupati Hinges & Hardware Exports" fill priority style={{ objectFit:"cover", objectPosition:"center 60%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Product Catalog
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>Our Hinge<br/><span style={{ color:"#e8a020" }}>Range</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>500+ variants across 9 product families, manufactured in-house at our Aligarh facility by {BRAND} to international quality standards.</p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ background:"#ffffff", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }} className="products-grid">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                style={{ textDecoration:"none", display:"block", background:"#f7f6f3", borderRadius:"6px", overflow:"hidden", border:"1px solid #ece9e2" }}
                className="product-card"
              >
                <div style={{ height:"180px", background:"#ffffff", borderBottom:"1px solid #ece9e2", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
                  {p.svg}
                </div>
                <div style={{ padding:"24px 24px 28px" }}>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", color:"#bbb", textTransform:"uppercase", marginBottom:"8px" }}>{p.num}</div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"20px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px", lineHeight:1.1 }}>{p.name}</div>
                  <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.65", marginBottom:"16px" }}>{p.tagline}</p>
                  <div style={{ display:"flex", gap:"5px", flexWrap:"wrap" }}>
                    {p.variants.slice(0,3).map((v)=>(
                      <span key={v} style={{ padding:"3px 9px", background:"rgba(232,160,32,0.09)", border:"1px solid rgba(232,160,32,0.22)", fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", color:"#c8880a", textTransform:"uppercase", borderRadius:"2px" }}>{v}</span>
                    ))}
                  </div>
                  <div style={{ marginTop:"18px", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em", color:"#e8a020", textTransform:"uppercase" }}>View Specifications →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <style>{`
        .product-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); border-color: #e8a020; transform: translateY(-2px); transition: all 0.2s; }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
