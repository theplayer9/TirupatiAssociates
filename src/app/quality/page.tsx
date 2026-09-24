import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Beaker, RotateCw, Ruler, FlaskConical, Search, PackageCheck } from "lucide-react";

const BRAND = "Tirupati Associates";

export const metadata: Metadata = {
  title: "Quality Control — Precision Hardware Manufacturing",
  description:
    "Tirupati Associates operates a rigorous in-house quality control process — salt spray testing, load cycle testing, and CMM dimensional verification on every batch of door hinges manufactured in Aligarh, India.",
  keywords:
    "quality hardware manufacturer India, salt spray tested hinges, quality tested door hardware, hinge quality control India, hinge testing standards",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: `Quality Control — Precision Hardware Manufacturing | ${BRAND}`,
    description:
      "Rigorous quality control at every stage — from raw material inspection to pre-shipment checks.",
    url: "/quality",
    images: [{ url: "/img/img4.jpg", width: 1200, height: 630, alt: "Tirupati Associates quality-tested brass hinge" }],
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

export default function QualityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tirupatiassociates.com" },
      { "@type": "ListItem", position: 2, name: "Quality", item: "https://www.tirupatiassociates.com/quality" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"calc(var(--nav-h) + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/img4.jpg" alt="Tirupati Associates brass hinge and lever handle installed on a wooden door" fill priority style={{ objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Quality Assurance
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>Built on<br/><span style={{ color:"#e8a020" }}>Quality</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>Every product that leaves our Aligarh facility passes a rigorous, documented quality control process.</p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ maxWidth:"820px" }} className="intro-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Standard
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(30px, 3.5vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>QUALITY IN<br/>EVERY PIECE</h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Quality is not an afterthought at {BRAND} — it&apos;s engineered into every step of our process. From incoming raw material inspection to final pre-shipment checks, we follow a rigorous, documented quality control process.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                Whether it&apos;s SS 304, SS 316, brass, or zinc alloy hinges, we guarantee consistent quality and flawless performance in every piece. Defective or subpar products never leave our facility — ensuring our clients receive only the best.
              </p>
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
              <Image src="/img/img2.jpg" alt="Tirupati Associates handles and cabinet hardware in premium finishes" fill style={{ objectFit:"cover" }} />
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
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>REQUEST QUALITY DETAILS</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>Ask for our quality check and inspection details with your next quote.</p>
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
