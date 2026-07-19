import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../data";
import ProductGallery from "../ProductGallery";

const BRAND = "Tirupati Hinges & Hardware Exports";
const SITE_URL = "https://www.tirupatihinges.com";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return {};

  const title = `${product.name} Manufacturer & Exporter in Aligarh, India`;
  const description = `${product.desc} Export-ready ${product.name.toLowerCase()} manufactured in Aligarh, India by ${BRAND} — supplying UAE, South Africa, Vietnam & 40+ countries.`;
  const url = `/products/${product.id}`;
  const image = product.images?.[0] ?? "/img/hinge-pile.jpg";

  return {
    title,
    description,
    keywords: `${product.name} manufacturer India, ${product.name} exporter Aligarh, buy ${product.name} wholesale, ${product.name} supplier India`,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url,
      siteName: BRAND,
      images: [{ url: image, width: 1200, height: 630, alt: product.name }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    image: product.images?.map((img) => `${SITE_URL}${img}`),
    brand: { "@type": "Brand", name: BRAND },
    manufacturer: { "@type": "Organization", name: BRAND },
    additionalProperty: product.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/products/${product.id}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* BREADCRUMB */}
      <div style={{ background:"#f7f6f3", borderBottom:"1px solid #e5e2db", paddingTop:"72px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"18px 40px", fontSize:"12px", color:"#888", display:"flex", gap:"8px", alignItems:"center" }}>
          <Link href="/" style={{ color:"#888", textDecoration:"none" }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color:"#888", textDecoration:"none" }}>Products</Link>
          <span>/</span>
          <span style={{ color:"#1a1a1a", fontWeight:600 }}>{product.name}</span>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <section style={{ background:"#ffffff", padding:"64px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start" }} className="product-detail-row">
          <div>
            <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.15em", color:"#e8a020", textTransform:"uppercase", marginBottom:"8px" }}>{product.num} · Product Catalog</div>
            <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.05, marginBottom:"10px" }}>{product.name}</h1>
            <div style={{ fontSize:"15px", color:"#e8a020", letterSpacing:"0.04em", marginBottom:"20px" }}>{product.tagline}</div>
            <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"12px" }}>{product.desc}</p>
            <p style={{ fontSize:"15px", color:"#777", lineHeight:"1.8", marginBottom:"28px" }}>
              Manufactured in-house at the {BRAND} facility in Aligarh, India, and export-ready for shipment to UAE, South Africa, Vietnam, Kenya and 40+ countries worldwide.
            </p>
            <div style={{ marginBottom:"28px" }}>
              <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#999", textTransform:"uppercase", marginBottom:"10px" }}>Available Variants</div>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                {product.variants.map((v)=>(
                  <span key={v} style={{ padding:"4px 12px", background:"rgba(232,160,32,0.07)", border:"1px solid rgba(232,160,32,0.18)", fontSize:"12px", color:"#c8880a", letterSpacing:"0.04em", borderRadius:"2px" }}>{v}</span>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              <Link href="/contact" style={{ background:"#e8a020", color:"#fff", padding:"14px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", borderRadius:"2px", boxShadow:"0 4px 12px rgba(232,160,32,0.25)" }}>Request Quote for {product.name}</Link>
              <Link href="/products" style={{ background:"transparent", color:"#1a1a1a", border:"1.5px solid #e5e2db", padding:"14px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", borderRadius:"2px" }}>← All Products</Link>
            </div>
          </div>

          <div>
            {product.images ? (
              <ProductGallery images={product.images} alt={product.name} />
            ) : (
              <div style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"8px", padding:"32px", marginBottom:"24px", height:"220px", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                {product.svg}
              </div>
            )}
            <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#999", textTransform:"uppercase", marginBottom:"12px" }}>Technical Specifications</div>
            <div style={{ border:"1px solid #e5e2db", borderRadius:"4px", overflow:"hidden" }}>
              {product.specs.map((s, si)=>(
                <div key={s.label} style={{ display:"flex", borderBottom: si < product.specs.length - 1 ? "1px solid #e5e2db" : "none" }}>
                  <div style={{ width:"40%", padding:"12px 16px", background:"#f7f6f3", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", color:"#777", textTransform:"uppercase", flexShrink:0 }}>{s.label}</div>
                  <div style={{ padding:"12px 16px", fontSize:"13px", color:"#1a1a1a", borderLeft:"1px solid #e5e2db", lineHeight:"1.4" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section style={{ background:"#f7f6f3", padding:"64px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"22px", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"28px" }}>More From Our Range</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }} className="related-grid">
            {products.filter((p)=>p.id !== product.id).slice(0,3).map((p)=>(
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration:"none", display:"block", background:"#ffffff", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2", padding:"22px" }}>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"8px" }}>{p.name}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.6" }}>{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"64px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>NEED A CUSTOM {product.name.toUpperCase()} SPEC?</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>We manufacture to your drawings or samples. Send us your requirements.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Request Custom Quote ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .product-detail-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .related-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
