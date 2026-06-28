import Link from "next/link";
import Image from "next/image";

const timeline = [
  { year: "1990", event: "Founded in Aligarh by the Gupta family. Started with butt hinge production for the domestic market." },
  { year: "1998", event: "Expanded facility to 15,000 sq ft. Added heavy-duty and piano hinge production lines." },
  { year: "2004", event: "First international export to UAE. Established relationships with Dubai hardware distributors." },
  { year: "2010", event: "ISO 9001 certification achieved. Entered South African and East African markets." },
  { year: "2016", event: "Launched OEM / private-label division. Started supplying to Vietnam furniture manufacturers." },
  { year: "2022", event: "Expanded to 40,000 sq ft modern plant with advanced CNC and surface treatment lines." },
  { year: "2024", event: "Exporting to 40+ countries across Middle East, Africa, Southeast Asia, and Europe." },
];

const team = [
  { name: "Rajesh Gupta", role: "Managing Director", desc: "30+ years in hardware manufacturing. Leads business development and international partnerships." },
  { name: "Priya Gupta", role: "Director – Operations", desc: "Oversees production, quality control, and supply chain management across all product lines." },
  { name: "Amit Sharma", role: "Export Manager", desc: "Manages international accounts across UAE, South Africa, Vietnam, and 40+ export markets." },
  { name: "Vikram Singh", role: "Quality Head", desc: "ISO 9001 lead auditor. Ensures every batch meets international standards before dispatch." },
];

const manufacturing = [
  { icon: "⚙️", title: "CNC Machining", desc: "High-precision CNC turning and milling for consistent hinge dimensions across all production runs." },
  { icon: "🔩", title: "Press & Stamping", desc: "100-ton to 400-ton hydraulic presses for sheet metal hinge leaves with tight tolerances." },
  { icon: "✨", title: "Surface Treatment", desc: "In-house electroplating, powder coating, and PVD finishing. SS passivation for marine-grade products." },
  { icon: "🔬", title: "Quality Lab", desc: "Salt spray test chamber (1000hr), load cycle tester, hardness tester, and CMM for dimensional checks." },
  { icon: "📦", title: "Packaging", desc: "Auto-packing lines for retail, bulk, and OEM packaging. Custom branded boxes and cartons available." },
  { icon: "🚢", title: "Export Logistics", desc: "In-house export documentation. Tie-up with top freight forwarders for FCL/LCL from JNPT & Mundra." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO — lifestyle door photo */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 96px)", paddingBottom:"96px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/door-lifestyle.jpg" alt="Elegant wooden door with premium brass hinge" fill priority style={{ objectFit:"cover", objectPosition:"center 30%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.87) 0%, rgba(10,8,6,0.6) 60%, rgba(10,8,6,0.35) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Story
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>About<br/><span style={{ color:"#e8a020" }}>Tirupati</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>35 years of precision hinge manufacturing from the hardware capital of India — Aligarh, Uttar Pradesh.</p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="story-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Est. 1990
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"24px" }}>
                THREE DECADES OF <span style={{ color:"#e8a020" }}>CRAFTSMANSHIP</span>
              </h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Tirupati Associates was founded in 1990 in Aligarh — a city that accounts for over 80% of India&apos;s hardware manufacturing output. What started as a small family business supplying hinges to local markets has grown into a leading export house serving 40+ countries.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Our manufacturing philosophy has always been simple: build every hinge as if our reputation depends on it — because it does. Every product that leaves our factory carries the legacy of Aligarh&apos;s craftsmanship and the trust of our global customers.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                Today, Tirupati Associates operates a 40,000 sq ft state-of-the-art facility with 150+ skilled employees, serving builders, contractors, furniture manufacturers, and hardware distributors across the Middle East, Africa, and Southeast Asia.
              </p>
            </div>
            <div>
              <div style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"6px", padding:"48px", position:"relative", overflow:"hidden", boxShadow:"var(--shadow)" }}>
                <div style={{ position:"absolute", top:"20px", right:"20px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"120px", fontWeight:800, color:"rgba(232,160,32,0.06)", lineHeight:1, pointerEvents:"none" }}>35</div>
                <div style={{ position:"relative", zIndex:1 }}>
                  {[
                    { n:"40,000", l:"Sq Ft Factory" },
                    { n:"150+", l:"Employees" },
                    { n:"500+", l:"Product SKUs" },
                    { n:"40+", l:"Export Countries" },
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
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>35 Years of Growth</h2>
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
                <div style={{ fontSize:"28px", marginBottom:"14px" }}>{m.icon}</div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"18px", fontWeight:700, letterSpacing:"0.04em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>{m.title}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.7" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" style={{ background:"#f7f6f3", padding:"96px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="quality-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Quality Assurance
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(30px, 3.5vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>ISO 9001:2015 CERTIFIED</h2>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8", marginBottom:"20px" }}>
                Quality is not an afterthought at Tirupati Associates — it&apos;s engineered into every step of our process. From incoming raw material inspection to final pre-shipment checks, we operate a rigorous quality management system certified to ISO 9001:2015.
              </p>
              <p style={{ fontSize:"16px", color:"#555", lineHeight:"1.8" }}>
                Our products undergo salt spray testing (1000 hours), load cycle testing (200,000+ cycles), and dimensional verification using CMM before leaving our facility.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {[
                { cert:"ISO 9001:2015", body:"Bureau Veritas", scope:"Design & Manufacture of Door Hinges" },
                { cert:"BIS Certified", body:"Bureau of Indian Standards", scope:"IS 1341 — Steel Butt Hinges" },
                { cert:"BS EN 1935", body:"FIRA International", scope:"Grade 11 — Building Hardware" },
                { cert:"DGFT IEC", body:"Directorate General of Foreign Trade", scope:"Export Import Code, India" },
              ].map((c)=>(
                <div key={c.cert} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"4px", padding:"18px 20px", display:"flex", gap:"16px", alignItems:"center", boxShadow:"var(--shadow-sm)" }}>
                  <div style={{ width:"44px", height:"44px", background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.25)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#e8a020", fontSize:"18px", flexShrink:0 }}>✓</div>
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

      {/* TEAM */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Leadership
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"56px" }}>The Team Behind the Product</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px" }} className="team-grid">
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
          .quality-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
