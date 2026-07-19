import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Beaker, RotateCw, Ruler, FlaskConical, Search, PackageCheck, Check } from "lucide-react";

const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  title: "Quality Control — ISO 9001 Certified Hinge Manufacturing",
  description:
    "Tirupati Hinges & Hardware Exports operates a rigorous ISO 9001:2015 quality management system — salt spray testing, load cycle testing, and CMM dimensional verification on every batch of door hinges manufactured in Aligarh, India.",
  keywords:
    "ISO 9001 hinge manufacturer, salt spray tested hinges, BIS certified hinges, hinge quality control India, hinge testing standards",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: `Quality Control — ISO 9001 Certified Hinge Manufacturing | ${BRAND}`,
    description:
      "Rigorous quality control at every stage — from raw material inspection to pre-shipment checks. ISO 9001:2015 certified.",
    url: "/quality",
    images: [{ url: "/img/hinge-installed.jpg", width: 1200, height: 630, alt: "Quality-tested stainless steel hinge" }],
  },
};

const testing = [
  { icon: Beaker, title: "Salt Spray Testing", desc: "Every batch is tested in a salt spray chamber for up to 1,000 hours to verify corrosion resistance in coastal and humid export markets." },
  { icon: RotateCw, title: "Load Cycle Testing", desc: "Hinges are cycled 200,000+ times under load to simulate years of real-world door use before a design is approved for production." },
  { icon: Ruler, title: "CMM Dimensional Verification", desc: "Coordinate Measuring Machine checks confirm every hinge meets exact tolerances — critical for consistent fit across bulk orders." },
  { icon: FlaskConical, title: "Hardness & Material Testing", desc: "Incoming raw material (SS 304, SS 316, brass, zinc alloy) is verified for grade and hardness before it enters production." },
  { icon: Search, title: "Visual & Finish Inspection", desc: "Every finish — polished, brushed, PVD, powder-coated — is inspected for consistency, scratches, and plating adhesion." },
  { icon: PackageCheck, title: "Pre-Shipment Inspection", desc: "Before any export order is packed, a final QC pass checks quantity, labeling, and packaging integrity — with photo/video proof provided to the buyer." },
];

const certifications = [
  { cert: "ISO 9001:2015", body: "Bureau Veritas", scope: "Design & Manufacture of Door Hinges" },
  { cert: "BIS Certified", body: "Bureau of Indian Standards", scope: "IS 1341 — Steel Butt Hinges" },
  { cert: "BS EN 1935", body: "FIRA International", scope: "Grade 11 — Building Hardware" },
  { cert: "DGFT IEC", body: "Directorate General of Foreign Trade", scope: "Export Import Code, India" },
];

export default function QualityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tirupatihinges.com" },
      { "@type": "ListItem", position: 2, name: "Quality", item: "https://www.tirupatihinges.com/quality" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/hinge-installed.jpg" alt="Quality-tested stainless steel hinge installed on a door" fill priority style={{ objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Quality Assurance
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>Built on<br/><span style={{ color:"#e8a020" }}>Quality</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>ISO 9001:2015 certified. Every hinge that leaves our Aligarh facility passes a rigorous, documented quality control process.</p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="intro-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Standard
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(30px, 3.5vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>ISO 9001:2015<br/>CERTIFIED</h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Quality is not an afterthought at {BRAND} — it&apos;s engineered into every step of our process. From incoming raw material inspection to final pre-shipment checks, we operate a rigorous quality management system certified to ISO 9001:2015.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                Whether it&apos;s SS 304, SS 316, brass, or zinc alloy hinges, we guarantee consistent quality and flawless performance in every piece. Defective or subpar products never leave our facility — ensuring our clients receive only the best.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }} id="certifications">
              {certifications.map((c)=>(
                <div key={c.cert} style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"4px", padding:"18px 20px", display:"flex", gap:"16px", alignItems:"center", boxShadow:"var(--shadow-sm)" }}>
                  <div style={{ width:"44px", height:"44px", background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.25)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Check size={18} color="#e8a020" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"15px", fontWeight:700, color:"#1a1a1a", textTransform:"uppercase", letterSpacing:"0.04em" }}>{c.cert}</div>
                    <div style={{ fontSize:"12px", color:"#e8a020", marginBottom:"2px" }}>{c.body}</div>
                    <div style={{ fontSize:"12px", color:"#777" }}>{c.scope}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section id="testing" style={{ background:"#f7f6f3", padding:"96px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>How We Test
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>Testing &amp; Quality Control</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px" }} className="testing-grid">
            {testing.map((t)=>(
              <div key={t.title} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"0 4px 4px 0", padding:"32px 28px", borderLeft:"3px solid #e8a020", boxShadow:"var(--shadow-sm)" }}>
                <t.icon size={26} color="#e8a020" strokeWidth={1.75} style={{ marginBottom:"14px" }} />
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"17px", fontWeight:700, letterSpacing:"0.04em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>{t.title}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.7" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="manufacturing" style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="mfg-grid">
            <div style={{ position:"relative", minHeight:"400px", borderRadius:"6px", overflow:"hidden" }}>
              <Image src="/img/hinge-finishes.jpg" alt="Hinges in multiple finishes undergoing quality inspection" fill style={{ objectFit:"cover" }} />
            </div>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Manufacturing Discipline
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 3.5vw, 44px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>Quality Built In, Not Inspected In</h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"16px" }}>
                Our in-house QC team is equipped with advanced testing tools and follows documented procedures aligned with international standards at every stage of production — not just at final inspection.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                With {BRAND}, you&apos;re not just getting hinges — you&apos;re getting assurance of long-term reliability, safety, and value on every export shipment.
              </p>
              <Link href="/products" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", marginTop:"28px", borderRadius:"2px" }}>See Our Products ›</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>REQUEST TEST REPORTS</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>Ask for salt spray and load cycle test certificates with your next quote.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Get in Touch ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .mfg-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .testing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .testing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
