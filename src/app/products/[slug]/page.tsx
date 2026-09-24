import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allItems, findItem } from "../catalog";

const BRAND = "Tirupati Associates";
const SITE_URL = "https://www.tirupatiassociates.com";

export async function generateStaticParams() {
  return allItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findItem(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.category.name} Manufacturer in Aligarh, India`;
  const description = `${product.name} in ${product.material}${product.size ? `, ${product.size} mm` : ""}. ${product.category.tagline} Manufactured and exported by ${BRAND}, Aligarh, India.`;
  const url = `/products/${product.slug}`;

  return {
    title,
    description,
    keywords: `${product.name} manufacturer India, ${product.category.name} exporter Aligarh, ${product.category.name} supplier India`,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url,
      siteName: BRAND,
      images: [{ url: product.image, alt: product.name }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findItem(slug);
  if (!product) notFound();

  const { category } = product;
  const specs = [
    { label: "Material", value: product.material },
    { label: "Finishes", value: product.finish || "—" },
    { label: "Size (mm)", value: product.size || "—" },
  ];
  const categoryHref = `/products?cat=${category.slug}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: category.name,
    description: product.desc,
    image: `${SITE_URL}${product.image}`,
    brand: { "@type": "Brand", name: BRAND },
    manufacturer: { "@type": "Organization", name: BRAND },
    additionalProperty: specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}${categoryHref}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
    ],
  };

  // Other items from the same category, continuing in catalogue sequence
  const idx = category.items.findIndex((i) => i.slug === product.slug);
  const related = [...category.items.slice(idx + 1), ...category.items.slice(0, idx)].slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* BREADCRUMB */}
      <div style={{ background:"#f7f6f3", borderBottom:"1px solid #e5e2db", paddingTop:"var(--nav-h)" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"18px 40px", fontSize:"12px", color:"#888", display:"flex", gap:"8px", alignItems:"center", flexWrap:"wrap" }}>
          <Link href="/" style={{ color:"#888", textDecoration:"none" }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color:"#888", textDecoration:"none" }}>Products</Link>
          <span>/</span>
          <Link href={categoryHref} style={{ color:"#888", textDecoration:"none" }}>{category.name}</Link>
          <span>/</span>
          <span style={{ color:"#1a1a1a", fontWeight:600 }}>{product.name}</span>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <section style={{ background:"#ffffff", padding:"64px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start" }} className="product-detail-row">
          <div>
            <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.15em", color:"#e8a020", textTransform:"uppercase", marginBottom:"8px" }}>{category.num} · {category.name}</div>
            <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.05, marginBottom:"10px" }}>{product.name}</h1>
            <div style={{ fontSize:"15px", color:"#e8a020", letterSpacing:"0.04em", marginBottom:"20px" }}>{category.tagline}</div>
            <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"12px" }}>{product.desc}</p>
            <p style={{ fontSize:"15px", color:"#777", lineHeight:"1.8", marginBottom:"28px" }}>
              Manufactured in-house at the {BRAND} facility in Aligarh, India, and export-ready for shipment to UAE, South Africa, Vietnam, Kenya and 40+ countries worldwide.
            </p>
            <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
              <Link href="/contact" style={{ background:"#e8a020", color:"#fff", padding:"14px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", borderRadius:"2px", boxShadow:"0 4px 12px rgba(232,160,32,0.25)" }}>Request Quote for {product.name}</Link>
              <Link href={categoryHref} style={{ background:"transparent", color:"#1a1a1a", border:"1.5px solid #e5e2db", padding:"14px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", borderRadius:"2px" }}>← All {category.name}</Link>
            </div>
          </div>

          <div>
            {/* Single product image */}
            <div style={{ position:"relative", width:"100%", aspectRatio:"4 / 3", borderRadius:"8px", overflow:"hidden", border:"1px solid #e5e2db", background:"#ffffff", marginBottom:"24px" }}>
              <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit:"contain", objectPosition:"center", padding:"20px" }} />
            </div>
            <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#999", textTransform:"uppercase", marginBottom:"12px" }}>Technical Specifications</div>
            <div style={{ border:"1px solid #e5e2db", borderRadius:"4px", overflow:"hidden" }}>
              {specs.map((s, si)=>(
                <div key={s.label} style={{ display:"flex", borderBottom: si < specs.length - 1 ? "1px solid #e5e2db" : "none" }}>
                  <div style={{ width:"40%", padding:"12px 16px", background:"#f7f6f3", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", color:"#777", textTransform:"uppercase", flexShrink:0 }}>{s.label}</div>
                  <div style={{ padding:"12px 16px", fontSize:"13px", color:"#1a1a1a", borderLeft:"1px solid #e5e2db", lineHeight:"1.4" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section style={{ background:"#f7f6f3", padding:"64px 0", borderTop:"1px solid #e5e2db" }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
            <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"22px", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"28px" }}>More {category.name}</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }} className="related-grid">
              {related.map((p)=>(
                <Link key={p.slug} href={`/products/${p.slug}`} style={{ textDecoration:"none", display:"block", background:"#ffffff", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2" }} className="related-card">
                  <div style={{ position:"relative", width:"100%", aspectRatio:"1 / 1", background:"#ffffff" }}>
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit:"contain", padding:"12px" }} />
                  </div>
                  <div style={{ padding:"16px 18px 20px", borderTop:"1px solid #ece9e2" }}>
                    <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", color:"#bbb", textTransform:"uppercase", marginBottom:"6px" }}>{p.num}</div>
                    <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase" }}>{p.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"64px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>NEED A CUSTOM {category.single.toUpperCase()} SPEC?</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>We manufacture to your drawings or samples. Send us your requirements.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Request Custom Quote ›</Link>
        </div>
      </section>

      <style>{`
        .related-card:hover { border-color: #e8a020 !important; box-shadow: 0 6px 24px rgba(0,0,0,0.08); transition: all 0.2s; }
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
