import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Package, FileText, Factory, IndianRupee, Ruler, Handshake, MessageSquare, PackageCheck, ClipboardCheck, Ship } from "lucide-react";
import WorldMapClient from "./WorldMapClient";

const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  title: "Door Hinge Exporter from India — Shipping to 40+ Countries Worldwide",
  description:
    "Tirupati Hinges & Hardware Exports is a leading door hinge exporter from Aligarh, India, shipping to the Middle East, Africa, Europe, the Americas, and Asia-Pacific. Free samples, in-house export documentation, and a 24-hour response time.",
  keywords:
    "door hinge exporter India, hinge supplier UAE, hinge exporter South Africa, hinge supplier Vietnam, hinge exporter Kenya, hardware export India, global hinge supplier",
  alternates: { canonical: "/export-markets" },
  openGraph: {
    title: `Door Hinge Exporter from India — Shipping to 40+ Countries Worldwide | ${BRAND}`,
    description: "From the Gulf to the Americas — wherever there's a door, we can probably ship a hinge for it.",
    url: "/export-markets",
    images: [{ url: "/img/hinge-installed.jpg", width: 1200, height: 630, alt: "Hinges ready for global export" }],
  },
};

const trustPoints = [
  { icon: Package, title: "Free Samples, No Obligation", desc: "Verify quality with your own hands before committing to a bulk order — we cover sample production and dispatch." },
  { icon: FileText, title: "Documentation Handled In-House", desc: "Commercial invoice, packing list, Certificate of Origin, Bill of Lading, and test reports — prepared before your goods ship, not after." },
  { icon: Factory, title: "Consistent Quality, Every Order", desc: "Every export order is manufactured in the same ISO 9001-certified Aligarh facility, so your third shipment matches your first." },
  { icon: IndianRupee, title: "Factory-Direct Pricing", desc: "No middlemen. Our export pricing reflects our own manufacturing cost — competitive against Chinese and domestic alternatives alike." },
  { icon: Ruler, title: "Flexible MOQs", desc: "From first-time importers testing a new market to distributors placing container loads — order sizes scale with you." },
  { icon: Handshake, title: "A Dedicated Export Desk", desc: "One team, one point of contact, from your first enquiry to the Bill of Lading in your inbox." },
];

const process = [
  { step:"01", title:"Inquiry", desc:"Send us your requirements by email or WhatsApp. We respond within 24 hours with pricing.", icon: MessageSquare },
  { step:"02", title:"Samples", desc:"We dispatch product samples (free of cost) so you can verify quality before committing to an order.", icon: PackageCheck },
  { step:"03", title:"Proforma Invoice", desc:"Once samples are approved, we issue a formal PI with pricing, lead time, and payment terms.", icon: FileText },
  { step:"04", title:"Production", desc:"Upon advance payment, production begins. Standard lead time: 15–20 working days.", icon: Factory },
  { step:"05", title:"QC & Packing", desc:"Pre-shipment inspection with photos/videos provided. Export packaging with carton markings.", icon: ClipboardCheck },
  { step:"06", title:"Shipment", desc:"Goods dispatched via FCL or LCL. Bill of Lading, COO, and all export docs provided.", icon: Ship },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tirupatihinges.com" },
    { "@type": "ListItem", position: 2, name: "Export", item: "https://www.tirupatihinges.com/export-markets" },
  ],
};

export default function ExportMarketsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/hinge-installed.jpg" alt="Premium hinge ready for global export" fill priority style={{ objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Global Reach
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(48px, 7.5vw, 92px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.95, marginBottom:"20px" }}>Trusted<br/><span style={{ color:"#e8a020" }}>Worldwide</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.7)", maxWidth:"680px", lineHeight:"1.75", marginBottom:"14px" }}>
            {BRAND} is one of India&apos;s leading door hinge exporters — shipping export-grade stainless steel and hardware from our Aligarh facility to builders, distributors, and importers across the Middle East, Africa, Europe, the Americas, and Asia-Pacific.
          </p>
          <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.55)", maxWidth:"640px", lineHeight:"1.7" }}>
            Wherever there&apos;s a door that needs to swing smoothly for the next twenty years, chances are we can ship the hinge for it. Almost every country you can name, we can quote for.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:"#e8a020" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:"1280px", margin:"0 auto" }} className="stats-grid">
          {[{n:"40+",l:"Countries Served"},{n:"16+",l:"Years Exporting"},{n:"500+",l:"International Clients"},{n:"2",l:"Shipments / Month"}].map((s)=>(
            <div key={s.l} style={{ padding:"28px 32px", textAlign:"center", borderRight:"1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"48px", fontWeight:800, color:"#fff", lineHeight:1 }}>{s.n}</div>
              <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)", marginTop:"6px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WORLD MAP */}
      <section id="map" style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Where We Ship
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"20px", maxWidth:"960px", marginLeft:"auto", marginRight:"auto", textAlign:"center" }}>
            Craftsmanship That Reaches Every Door.
          </h2>
          <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", maxWidth:"960px", marginLeft:"auto", marginRight:"auto", marginBottom:"18px", textAlign:"center" }}>
            Every hinge we manufacture starts in the same ISO 9001-certified Aligarh facility and ends up somewhere new — from Gulf megaprojects to Vietnamese furniture workshops, North American hardware distributors to East African construction sites.
          </p>
          <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", maxWidth:"960px", marginLeft:"auto", marginRight:"auto", marginBottom:"18px", textAlign:"center" }}>
            {BRAND} has spent 16+ years perfecting a single craft: manufacturing door hardware that performs the same way on day one as it does after a decade of daily use. Every batch is salt-spray tested, load-cycle tested, and dimensionally verified before it ever reaches a shipping container — because a hinge that fails halfway across the world isn&apos;t a hinge we&apos;re willing to put our name on.
          </p>
          <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", maxWidth:"960px", marginLeft:"auto", marginRight:"auto", marginBottom:"40px", textAlign:"center" }}>
            That discipline has earned the trust of importers, distributors, and contractors across five continents — many of whom have been reordering from us for years. Behind every shipment is an export desk that handles documentation, packaging, and logistics in-house, so orders move from factory floor to foreign port without the delays that come from juggling multiple vendors. The map below highlights a sample of the countries currently on our shipping manifest.
          </p>
          <WorldMapClient />
        </div>
      </section>

      {/* WHY BUYERS TRUST US GLOBALLY */}
      <section style={{ background:"#f7f6f3", padding:"96px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Why Buyers Trust Us
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>Global Trust, Built Order by Order</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px" }} className="trust-grid">
            {trustPoints.map((t) => (
              <div key={t.title} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"0 4px 4px 0", padding:"28px 26px", borderLeft:"3px solid #e8a020", boxShadow:"var(--shadow-sm)" }}>
                <t.icon size={28} color="#e8a020" strokeWidth={1.75} style={{ marginBottom:"14px" }} />
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:700, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>{t.title}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.7" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section id="process" style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>How It Works
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>From Enquiry to Your Port, In Six Steps</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:"40px", alignItems:"start" }} className="process-layout">
            <div style={{ position:"relative", minHeight:"460px", borderRadius:"8px", overflow:"hidden" }}>
              <Image src="/img/hinge-pile.jpg" alt="Export-ready hinges packed and prepared for shipment" fill style={{ objectFit:"cover", objectPosition:"center 40%" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(10,8,6,0) 40%, rgba(10,8,6,0.75) 100%)" }} />
              <div style={{ position:"absolute", bottom:"24px", left:"24px", right:"24px" }}>
                <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#e8a020", marginBottom:"6px" }}>Every Order, Documented</div>
                <div style={{ fontSize:"18px", fontWeight:700, color:"#fff", lineHeight:1.3 }}>From your first enquiry to a container leaving port — tracked at every step.</div>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"16px" }} className="process-grid">
              {process.map((p)=>(
                <div key={p.step} style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"4px", padding:"24px 22px", boxShadow:"var(--shadow-sm)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"14px" }}>
                    <div style={{ width:"38px", height:"38px", background:"#e8a020", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <p.icon size={19} color="#fff" strokeWidth={2} />
                    </div>
                    <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em", color:"#bbb" }}>{p.step}</div>
                  </div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:700, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"8px" }}>{p.title}</div>
                  <p style={{ fontSize:"12.5px", color:"#666", lineHeight:"1.6" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>WHEREVER YOU ARE, LET&apos;S TALK</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>WhatsApp us your requirements and get pricing within 24 hours — anywhere in the world.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Contact Us ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
