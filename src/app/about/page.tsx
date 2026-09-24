import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Settings, Wrench, Sparkles, Microscope, Package, Ship } from "lucide-react";

const BRAND = "Tirupati Associates";

export const metadata: Metadata = {
  title: "About Us — Architectural Hardware Manufacturer Since 2013",
  description:
    "Tirupati Associates has manufactured premium architectural hardware in Aligarh, India since 2013 — supplying hinges, locks, handles, bolts and fittings to exporters, distributors and wholesalers.",
  keywords: "about Tirupati Associates, hinge manufacturer Aligarh, hardware factory India, architectural hardware manufacturer India",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us — Architectural Hardware Manufacturer Since 2013 | ${BRAND}`,
    description: "13+ years of precision hardware manufacturing from Aligarh, India — trusted by exporters and distributors.",
    url: "/about",
    images: [{ url: "/img/door-lifestyle.jpg", width: 1200, height: 630, alt: "Tirupati Associates facility" }],
  },
};

const timeline = [
  { year: "2013", event: "Tirupati Associates is established in Aligarh, manufacturing butt hinges and essential door fittings for the hardware trade." },
  { year: "2015", event: "Hinge range grows to include bearing, flush and specialist hinges, alongside tower bolts and pad bolts." },
  { year: "2017", event: "Locks and tubular latches join the line-up, backed by stronger in-house quality checks at every stage." },
  { year: "2019", event: "Begins supplying exporters and distributors, taking Tirupati hardware to overseas markets through trusted trade partners." },
  { year: "2021", event: "Adds door handles, cabinet hardware and decorative hooks in brass, zinc, stainless steel and cast iron." },
  { year: "2023", event: "Scales up production and finishing capacity to handle larger bulk orders for exporters and distributors." },
  { year: "2026", event: "Presents a complete 10-category catalogue of architectural hardware, from hinges and locks to gate latches." },
];

const team = [
  { name: "Sanjeev Sharma", role: "Managing Director", desc: "25+ years of manufacturing experience. Leads the company's direction, product development and long-term partnerships with exporters and distributors." },
  { name: "Om Sharma", role: "Director – Operations", desc: "Oversees production, quality control and supply chain across all product lines, ensuring every order is delivered on time and to specification." },
];

const manufacturing = [
  { icon: Settings, title: "CNC Machining", desc: "High-precision CNC turning and milling for consistent hinge dimensions across all production runs." },
  { icon: Wrench, title: "Press & Stamping", desc: "100-ton to 400-ton hydraulic presses for sheet metal hinge leaves with tight tolerances." },
  { icon: Sparkles, title: "Surface Treatment", desc: "In-house electroplating, powder coating, and PVD finishing. SS passivation for marine-grade products." },
  { icon: Microscope, title: "Quality Lab", desc: "Salt spray test chamber (1000hr), load cycle tester, hardness tester, and CMM for dimensional checks." },
  { icon: Package, title: "Packaging", desc: "Auto-packing lines for retail, bulk, and OEM packaging. Custom branded boxes and cartons available." },
  { icon: Ship, title: "Partner Supply", desc: "Export-ready packing, bulk dispatch and consistent lead times for exporters and distributors, with support for their documentation needs." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO — lifestyle door photo */}
      <section style={{ position:"relative", paddingTop:"calc(var(--nav-h) + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/door-lifestyle.jpg" alt="Elegant wooden door with premium brass hinge" fill priority style={{ objectFit:"cover", objectPosition:"center 30%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.87) 0%, rgba(10,8,6,0.6) 60%, rgba(10,8,6,0.35) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Story
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>About Tirupati<br/><span style={{ color:"#e8a020" }}>Associates</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>13+ years of precision hardware manufacturing from the hardware capital of India — Aligarh, Uttar Pradesh.</p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="story-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Est. 2013
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"24px" }}>
                13+ YEARS OF <span style={{ color:"#e8a020" }}>CRAFTSMANSHIP</span>
              </h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                {BRAND} was established in 2013 in Aligarh — India&apos;s best-known centre for hardware manufacturing. What began as a focused hinge manufacturing unit has grown into a complete architectural hardware maker, trusted by exporters and distributors who take our products to markets across India and overseas.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Our manufacturing philosophy has always been simple: build every hinge as if our reputation depends on it — because it does. Every product that leaves our factory carries the legacy of Aligarh&apos;s craftsmanship and the trust of the partners who sell it.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                Today, {BRAND} manufactures hinges, locks, door handles, brackets, hooks, cabinet hardware, pad and tower bolts, cabin hooks and gate latches. We work as the manufacturing partner behind exporters, distributors, wholesalers and hardware dealers — handling production, finishing and packing so they can serve builders, contractors and furniture makers with confidence.
              </p>
            </div>
            <div>
              <div style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"6px", padding:"48px", position:"relative", overflow:"hidden", boxShadow:"var(--shadow)" }}>
                <div style={{ position:"absolute", top:"20px", right:"20px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"120px", fontWeight:800, color:"rgba(232,160,32,0.06)", lineHeight:1, pointerEvents:"none" }}>13</div>
                <div style={{ position:"relative", zIndex:1 }}>
                  {[
                    { n:"2013", l:"Established" },
                    { n:"13+", l:"Years of Manufacturing" },
                    { n:"10", l:"Product Categories" },
                    { n:"110+", l:"Catalogue Products" },
                  ].map((s)=>(
                    <div key={s.l} style={{ display:"flex", alignItems:"center", gap:"20px", padding:"20px 0", borderBottom:"1px solid #e5e2db" }}>
                      <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"40px", fontWeight:800, color:"#e8a020", lineHeight:1, minWidth:"100px" }}>{s.n}</div>
                      <div style={{ fontSize:"13px", letterSpacing:"0.08em", color:"#777", textTransform:"uppercase" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background:"#f7f6f3", padding:"96px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Journey
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>Our Growth Since 2013</h2>
          <div style={{ position:"relative", paddingLeft:"40px", borderLeft:"2px solid #e5e2db" }}>
            {timeline.map((t, i)=>(
              <div key={t.year} style={{ position:"relative", marginBottom: i < timeline.length - 1 ? "40px" : "0" }}>
                <div style={{ position:"absolute", left:"-49px", top:"4px", width:"16px", height:"16px", background: i === timeline.length - 1 ? "#e8a020" : "#fff", border:"2px solid #e8a020", borderRadius:"50%" }}/>
                <div style={{ display:"flex", gap:"24px", alignItems:"flex-start" }} className="timeline-row">
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"22px", fontWeight:800, color:"#e8a020", minWidth:"64px", lineHeight:1.2 }}>{t.year}</div>
                  <p style={{ fontSize:"15px", color:"#555", lineHeight:"1.7", paddingTop:"2px" }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="manufacturing" style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Facility
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>Manufacturing Capabilities</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px" }} className="mfg-grid">
            {manufacturing.map((m)=>(
              <div key={m.title} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"0 4px 4px 0", padding:"32px 28px", borderLeft:"3px solid #e8a020", boxShadow:"var(--shadow-sm)" }}>
                <m.icon size={26} color="#e8a020" strokeWidth={1.75} style={{ marginBottom:"14px" }} />
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"18px", fontWeight:700, letterSpacing:"0.04em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>{m.title}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.7" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY TEASER — full detail lives on the standalone /quality page */}
      <section style={{ background:"#f7f6f3", padding:"96px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"48px", flexWrap:"wrap" }}>
          <div style={{ maxWidth:"640px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
              <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Quality Assurance
            </div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(30px, 3.5vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>QUALITY IN EVERY PIECE</h2>
            <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
              Quality is engineered into every step of our process — from incoming raw material inspection to salt spray testing, load cycle testing, and final pre-shipment checks.
            </p>
          </div>
          <Link href="/quality" style={{ background:"#1a1a1a", color:"#fff", padding:"16px 34px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", whiteSpace:"nowrap" }}>See Our Full Quality Process ›</Link>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Leadership
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>The Team Behind the Product</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"20px", maxWidth:"760px" }} className="team-grid">
            {team.map((t)=>(
              <div key={t.name} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"4px", padding:"28px", boxShadow:"var(--shadow-sm)" }}>
                <div style={{ width:"56px", height:"56px", background:"rgba(232,160,32,0.1)", border:"2px solid rgba(232,160,32,0.3)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"22px", fontWeight:800, color:"#e8a020", marginBottom:"16px" }}>
                  {t.name.charAt(0)}
                </div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"17px", fontWeight:700, color:"#1a1a1a", textTransform:"uppercase", marginBottom:"4px" }}>{t.name}</div>
                <div style={{ fontSize:"11px", letterSpacing:"0.1em", color:"#e8a020", textTransform:"uppercase", marginBottom:"12px" }}>{t.role}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.6" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>LET&apos;S WORK TOGETHER</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>Start with a sample order. No minimum quantity for first-time buyers.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Get in Touch ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .mfg-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .mfg-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .timeline-row { flex-direction: column; gap: 8px !important; }
        }
      `}</style>
    </>
  );
}
