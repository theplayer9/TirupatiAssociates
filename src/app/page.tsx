import Link from "next/link";

const products = [
  { id: "butt", num: "01", name: "Butt Hinges", desc: "Classic mortised hinges for residential and commercial doors. Available in SS, brass, and zinc alloy finishes.", specs: ["SS 304", "SS 316", "Brass", "Zinc Alloy"] },
  { id: "heavy", num: "02", name: "Heavy Duty Hinges", desc: "Industrial-grade hinges for warehouses, gates, and heavy commercial doors. Load capacity up to 200kg.", specs: ["200kg Rated", "Industrial", "Weld-On"] },
  { id: "concealed", num: "03", name: "Concealed Hinges", desc: "Hidden hinges for modern cabinet doors. Clean aesthetics with adjustable soft-close mechanism.", specs: ["35mm Cup", "Soft-Close", "Overlay"] },
  { id: "piano", num: "04", name: "Piano / Continuous Hinges", desc: "Full-length continuous hinges distributing load evenly. Ideal for pianos, tool boxes, and long doors.", specs: ["1800mm", "Aluminum", "SS"] },
  { id: "spring", num: "05", name: "Spring Hinges", desc: "Self-closing spring hinges for fire-rated and security doors. Single and double action variants available.", specs: ["Self-Closing", "Fire-Rated", "Adj. Tension"] },
  { id: "custom", num: "06", name: "Custom / OEM Hinges", desc: "Bespoke hinge manufacturing to your specifications. MOQ-friendly for importers and distributors.", specs: ["OEM", "Custom Size", "Private Label"] },
];

const markets = [
  { id: "uae", flag: "🇦🇪", name: "UAE & Middle East", region: "Dubai · Abu Dhabi · Sharjah · Riyadh", desc: "The Gulf's construction boom demands high-quality hardware at scale. We supply to Dubai's leading importers.", points: ["Stainless steel & anti-corrosion hinges for coastal climates", "Compliant with UAE building codes", "Regular shipments via Jebel Ali Port"] },
  { id: "sa", flag: "🇿🇦", name: "South Africa", region: "Johannesburg · Cape Town · Durban", desc: "South Africa's residential construction sector is one of Africa's largest. We supply to all major metros.", points: ["SABS-compatible product specifications", "Competitive pricing for African distributors", "Container loads via Durban Port"] },
  { id: "vietnam", flag: "🇻🇳", name: "Vietnam & SE Asia", region: "Ho Chi Minh City · Hanoi · Bangkok", desc: "Vietnam's booming furniture manufacturing and construction sectors are growing fast. We serve OEM buyers.", points: ["OEM-ready products for furniture manufacturers", "Competitive against Chinese suppliers on quality", "FCL & LCL shipments via Singapore hub"] },
];

const stats = [
  { number: "35+", label: "Years in Business" },
  { number: "40+", label: "Export Countries" },
  { number: "500+", label: "Product Variants" },
  { number: "10K+", label: "Happy Clients" },
];

const whyPoints = [
  { icon: "🏭", title: "In-House Manufacturing", desc: "Full control from raw material to finished product. No middlemen — direct factory pricing for bulk orders." },
  { icon: "✅", title: "ISO 9001 Certified", desc: "Rigorous quality checks at every stage. Products meet BS, DIN, and ANSI international standards." },
  { icon: "🚢", title: "Export-Ready Packaging", desc: "Carton, bulk, and branded packaging available. We handle customs documentation for smooth import clearance." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Standard orders: 15–20 days. Repeat orders: 7–10 days. Air freight available for urgent requirements." },
];

const certs = [
  { title: "ISO 9001:2015", sub: "Quality Management" },
  { title: "BIS Certified", sub: "Bureau of Indian Standards" },
  { title: "BS EN 1935", sub: "European Hinge Standard" },
  { title: "DGFT Registered", sub: "Export License, India" },
];

const tickerItems = ["Butt Hinges","Piano Hinges","Concealed Hinges","Heavy Duty Hinges","Stainless Steel Hinges","Weld-On Hinges","Spring Hinges","Continuous Hinges","Custom Hinges"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"#111", display:"flex", alignItems:"center", paddingTop:"72px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 65% 50%, rgba(232,160,32,0.07) 0%, transparent 60%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(232,160,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.04) 1px, transparent 1px)", backgroundSize:"80px 80px", pointerEvents:"none" }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"80px 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.3)", padding:"6px 16px", marginBottom:"28px", fontSize:"11px", fontWeight:600, letterSpacing:"0.2em", color:"#e8a020", textTransform:"uppercase" }}>
            <span style={{ width:"6px", height:"6px", background:"#e8a020", borderRadius:"50%" }} className="animate-pulse-dot" />
            Premium Export Grade · Est. 1990
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), 'Arial Narrow', Arial, sans-serif", fontSize:"clamp(52px, 9vw, 100px)", fontWeight:800, letterSpacing:"0.02em", textTransform:"uppercase", color:"#fff", lineHeight:0.95, marginBottom:"24px" }}>
            PRECISION<br/>ENGINEERED<br/><span style={{ color:"#e8a020" }}>HINGES</span>
          </h1>
          <p style={{ fontSize:"18px", color:"rgba(242,240,235,0.7)", lineHeight:"1.7", maxWidth:"480px", marginBottom:"40px" }}>
            Aligarh&apos;s trusted hinge manufacturer supplying world-class door hardware to builders, contractors, and distributors across UAE, South Africa, Vietnam &amp; 40+ countries.
          </p>
          <div style={{ display:"flex", gap:"16px", flexWrap:"wrap", marginBottom:"56px" }}>
            <Link href="/products" style={{ background:"#e8a020", color:"#111", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>Explore Products ›</Link>
            <Link href="/contact" style={{ background:"transparent", color:"#f2f0eb", border:"1.5px solid #f2f0eb", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>Get Export Quote</Link>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
            <span style={{ fontSize:"11px", letterSpacing:"0.15em", color:"#888", textTransform:"uppercase" }}>Exporting to</span>
            {[{flag:"🇦🇪",label:"UAE"},{flag:"🇿🇦",label:"S. Africa"},{flag:"🇻🇳",label:"Vietnam"}].map(({flag,label})=>(
              <span key={label} style={{ display:"flex", alignItems:"center", gap:"6px", padding:"4px 12px", border:"1px solid #2e2e2e", fontSize:"11px", letterSpacing:"0.08em", color:"#888", textTransform:"uppercase" }}>
                <span style={{ fontSize:"16px" }}>{flag}</span>{label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:"#e8a020" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:"1280px", margin:"0 auto" }} className="stats-grid">
          {stats.map((s)=>(
            <div key={s.label} style={{ padding:"28px 32px", textAlign:"center", borderRight:"1px solid rgba(0,0,0,0.12)" }}>
              <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"48px", fontWeight:800, color:"#111", lineHeight:1 }}>{s.number}</div>
              <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(0,0,0,0.55)", marginTop:"6px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TICKER */}
      <div style={{ background:"#1c1c1c", padding:"14px 0", overflow:"hidden", whiteSpace:"nowrap", borderBottom:"1px solid #2e2e2e" }}>
        <div className="animate-ticker" style={{ display:"inline-flex" }}>
          {[...tickerItems,...tickerItems].map((item,i)=>(
            <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:"16px", padding:"0 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#888" }}>
              {item}<span style={{ width:"4px", height:"4px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }}/>
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section style={{ background:"#1c1c1c", padding:"96px 0", borderBottom:"1px solid #2e2e2e" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"56px", flexWrap:"wrap", gap:"24px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Product Range
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 56px)", fontWeight:800, textTransform:"uppercase", color:"#fff" }}>Built for Every Application</h2>
            </div>
            <Link href="/products" style={{ background:"transparent", color:"#e8a020", border:"1.5px solid #e8a020", padding:"10px 24px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>View All Products</Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2px" }} className="products-grid">
            {products.map((p)=>(
              <Link key={p.id} href={`/products#${p.id}`} style={{ background:"#2a2a2a", border:"1px solid #2e2e2e", padding:"40px 32px", textDecoration:"none", display:"block", position:"relative" }} className="product-card">
                <div style={{ position:"absolute", top:"20px", right:"20px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"56px", fontWeight:800, color:"rgba(255,255,255,0.03)", lineHeight:1, pointerEvents:"none" }}>{p.num}</div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"22px", fontWeight:700, letterSpacing:"0.04em", color:"#fff", textTransform:"uppercase", marginBottom:"12px" }}>{p.name}</div>
                <p style={{ fontSize:"14px", color:"#888", lineHeight:"1.6", marginBottom:"24px" }}>{p.desc}</p>
                <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                  {p.specs.map((s)=>(
                    <span key={s} style={{ padding:"3px 10px", background:"rgba(232,160,32,0.08)", border:"1px solid rgba(232,160,32,0.2)", fontSize:"10px", fontWeight:600, letterSpacing:"0.1em", color:"#e8a020", textTransform:"uppercase" }}>{s}</span>
                  ))}
                </div>
                <div style={{ position:"absolute", bottom:"20px", right:"20px", width:"32px", height:"32px", border:"1px solid #2e2e2e", display:"flex", alignItems:"center", justifyContent:"center", color:"#888", fontSize:"18px" }}>›</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background:"#111", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"start" }} className="why-grid">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Why Choose Us
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"20px", lineHeight:1.1 }}>ALIGARH&apos;S EXPORT-GRADE PRECISION</h2>
              <p style={{ fontSize:"16px", color:"#888", lineHeight:"1.8", marginBottom:"32px" }}>Since 1990, Tirupati Associates has been at the heart of Aligarh&apos;s world-famous hardware manufacturing hub — supplying premium hinges that meet international quality standards demanded by builders and contractors across the Middle East, Africa, and Southeast Asia.</p>
              <Link href="/about" style={{ background:"#e8a020", color:"#111", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>Our Story ›</Link>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
              {whyPoints.map((wp)=>(
                <div key={wp.title} style={{ display:"flex", gap:"20px", padding:"24px", background:"#1c1c1c", border:"1px solid #2e2e2e", borderLeft:"3px solid #e8a020" }}>
                  <div style={{ width:"44px", height:"44px", background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", flexShrink:0 }}>{wp.icon}</div>
                  <div>
                    <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:700, letterSpacing:"0.06em", color:"#fff", textTransform:"uppercase", marginBottom:"6px" }}>{wp.title}</div>
                    <p style={{ fontSize:"14px", color:"#888", lineHeight:"1.6" }}>{wp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBALLY SHIPPED */}
      <section style={{ background:"#111", paddingBottom:"96px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ background:"#1c1c1c", border:"1px solid #2e2e2e", padding:"56px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"160px", fontWeight:800, color:"rgba(255,255,255,0.015)", whiteSpace:"nowrap", pointerEvents:"none", userSelect:"none" }}>EST. 1990</div>
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(232,160,32,0.1)", border:"1px solid rgba(232,160,32,0.3)", padding:"6px 14px", marginBottom:"20px" }}>
                <span style={{ width:"7px", height:"7px", background:"#e8a020", borderRadius:"50%" }}/>
                <span style={{ fontSize:"11px", letterSpacing:"0.15em", color:"#e8a020", textTransform:"uppercase", fontWeight:600 }}>Aligarh, Uttar Pradesh, India</span>
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1.1, marginBottom:"20px" }}>
                GLOBALLY SHIPPED. <span style={{ color:"#e8a020" }}>MADE IN INDIA.</span>
              </h2>
              <p style={{ fontSize:"15px", color:"#888", maxWidth:"560px", lineHeight:"1.7", marginBottom:"32px" }}>Aligarh accounts for 80% of India&apos;s hardware manufacturing. Our location gives us access to the finest raw materials, skilled craftsmen, and competitive pricing — passing the advantage directly to our international buyers.</p>
              <div style={{ display:"flex", gap:"24px", flexWrap:"wrap" }}>
                {["Dubai, UAE","Johannesburg, SA","Ho Chi Minh City","Nairobi, Kenya","Riyadh, KSA"].map((city)=>(
                  <div key={city} style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ width:"8px", height:"8px", background:"#e8a020", borderRadius:"50%" }} className="animate-pulse-dot"/>
                    <span style={{ fontSize:"12px", letterSpacing:"0.08em", color:"#888", textTransform:"uppercase" }}>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT MARKETS */}
      <section style={{ background:"#1c1c1c", padding:"96px 0", borderTop:"1px solid #2e2e2e" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"56px", flexWrap:"wrap", gap:"24px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Export Markets
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 56px)", fontWeight:800, textTransform:"uppercase", color:"#fff" }}>Serving Global Markets</h2>
            </div>
            <Link href="/export-markets" style={{ background:"transparent", color:"#e8a020", border:"1.5px solid #e8a020", padding:"10px 24px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>All Markets</Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2px" }} className="markets-grid">
            {markets.map((m)=>(
              <Link key={m.id} href={`/export-markets#${m.id}`} style={{ background:"#2a2a2a", border:"1px solid #2e2e2e", padding:"40px 32px", textDecoration:"none", display:"block" }}>
                <span style={{ fontSize:"48px", display:"block", marginBottom:"16px" }}>{m.flag}</span>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"26px", fontWeight:700, letterSpacing:"0.03em", color:"#fff", textTransform:"uppercase", marginBottom:"4px" }}>{m.name}</div>
                <div style={{ fontSize:"12px", letterSpacing:"0.12em", color:"#e8a020", textTransform:"uppercase", marginBottom:"16px" }}>{m.region}</div>
                <p style={{ fontSize:"14px", color:"#888", lineHeight:"1.7", marginBottom:"20px" }}>{m.desc}</p>
                <ul style={{ listStyle:"none" }}>
                  {m.points.map((pt)=>(
                    <li key={pt} style={{ fontSize:"13px", color:"#888", padding:"6px 0", borderBottom:"1px solid rgba(255,255,255,0.04)", display:"flex", alignItems:"flex-start", gap:"8px" }}>
                      <span style={{ color:"#e8a020", flexShrink:0 }}>→</span>{pt}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <div style={{ background:"#111", padding:"56px 0", borderBottom:"1px solid #2e2e2e" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"32px", flexWrap:"wrap" }}>
          <span style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", whiteSpace:"nowrap" }}>Certifications & Standards</span>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
            {certs.map((c)=>(
              <div key={c.title} style={{ padding:"12px 20px", border:"1px solid #2e2e2e", display:"flex", alignItems:"center", gap:"10px" }}>
                <div style={{ width:"28px", height:"28px", background:"rgba(232,160,32,0.1)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#e8a020", fontSize:"13px", flexShrink:0 }}>✓</div>
                <div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.04em", color:"#fff", textTransform:"uppercase" }}>{c.title}</div>
                  <div style={{ fontSize:"11px", color:"#888" }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#111", marginBottom:"8px" }}>READY TO START IMPORTING?</h2>
            <p style={{ fontSize:"16px", color:"rgba(0,0,0,0.6)" }}>Get product catalogue + pricing for your market. Response within 24 hours.</p>
          </div>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
            <Link href="/contact" style={{ background:"#111", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>Request a Quote ›</Link>
            <Link href="/products" style={{ background:"transparent", color:"#111", border:"2px solid #111", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>Download Catalogue</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .markets-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .markets-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
