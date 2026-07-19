import Link from "next/link";
import Image from "next/image";
import { Factory, BadgeCheck, Ship, Zap, ShieldCheck, Settings, Palette, IndianRupee, Globe2, Check } from "lucide-react";
import HeroSlider from "./HeroSlider";

const stats = [
  { number: "16+", label: "Years of Experience" },
  { number: "40+", label: "Countries Served" },
  { number: "500+", label: "Hinge Variants" },
  { number: "10K+", label: "Global Partners" },
];

const products = [
  { id: "butt-hinges",             num: "01", name: "Butt Hinges",            desc: "Classic mortised hinges for residential and commercial doors. SS, brass & zinc alloy finishes.",        specs: ["SS 304", "SS 316", "Brass", "Zinc Alloy"] },
  { id: "heavy-duty-hinges",       num: "02", name: "Heavy Duty Hinges",       desc: "Industrial-grade weld-on & strap hinges for gates, warehouses and heavy doors. Rated to 500 kg.",       specs: ["500kg Rated", "Industrial", "Weld-On"] },
  { id: "concealed-cabinet-hinges",num: "03", name: "Concealed Hinges",        desc: "Hidden cup hinges for modern cabinets. Three-way adjustable with soft-close damper options.",           specs: ["35mm Cup", "Soft-Close", "Overlay"] },
  { id: "piano-continuous-hinges", num: "04", name: "Piano / Continuous",      desc: "Full-length continuous hinges that distribute load evenly. Available up to 1800 mm custom lengths.",    specs: ["1800mm", "Aluminum", "SS"] },
  { id: "spring-hinges",           num: "05", name: "Spring Hinges",           desc: "Self-closing spring hinges for fire-rated doors. Adjustable tension, single & double action.",          specs: ["Self-Closing", "Fire-Rated", "Adj. Tension"] },
  { id: "tubular-latches",         num: "06", name: "Tubular Latches",         desc: "Precision stainless steel spring-bolt latches. 60 mm and 76 mm backsets, multiple finishes.",           specs: ["SS 304", "60/76mm", "BS EN 12459"] },
  { id: "ball-bearing-hinges",     num: "07", name: "Ball Bearing Hinges",     desc: "ABEC-5 stainless steel ball bearings — whisper-quiet, 200,000+ cycle life without lubrication.",       specs: ["ABEC-5", "200k Cycles", "ANSI"] },
  { id: "cupboard-hinges",         num: "08", name: "Cupboard Hinges",         desc: "Overlay, half-overlay, and inset European cup hinges for kitchens and wardrobes. Push-to-open ready.",  specs: ["3-Way Adj.", "Soft-Close", "EN 15443"] },
  { id: "custom-oem-hinges",       num: "09", name: "Custom / OEM",            desc: "Fully bespoke hinge manufacturing to your drawings or samples. MOQ from 500 pcs. Private-label ready.", specs: ["OEM", "Custom Size", "Private Label"] },
];

const whyPoints = [
  { icon: Factory, title: "In-House Manufacturing", desc: "Full control from raw material to finished product. Direct factory pricing for bulk orders." },
  { icon: BadgeCheck, title: "ISO 9001 Certified",      desc: "Rigorous QC at every stage. Products meet BS, DIN, and ANSI international standards." },
  { icon: Ship, title: "Export-Ready Packaging", desc: "Carton, bulk, and branded packaging. We handle customs documentation for smooth clearance." },
  { icon: Zap, title: "Fast Turnaround",         desc: "Standard orders: 15–20 days. Repeat orders: 7–10 days. Air freight for urgent needs." },
];

const certs = [
  { title: "ISO 9001:2015", sub: "Quality Management" },
  { title: "BIS Certified",  sub: "Bureau of Indian Standards" },
  { title: "BS EN 1935",     sub: "European Hinge Standard" },
  { title: "DGFT Registered",sub: "Export License, India" },
];

const tickerItems = ["Butt Hinges","Ball Bearing Hinges","Concealed Hinges","Heavy Duty Hinges","Tubular Latches","Cupboard Hinges","Spring Hinges","Continuous Hinges","Custom OEM Hinges","Stainless Steel Hardware","Export Grade Quality"];

const benefits = [
  { icon: ShieldCheck, title: "Premium-Grade Materials", desc: "SS 304, SS 316, brass, and zinc alloy that resist corrosion and hold up for decades, whatever the climate." },
  { icon: Settings, title: "Precision Engineering & Finish", desc: "Tight manufacturing tolerances for a smooth, silent swing and a flawless finish on every hinge." },
  { icon: Palette, title: "Customization to Your Needs", desc: "Size, thickness, finish, and branded packaging — manufactured to your exact drawings or samples." },
  { icon: Factory, title: "In-House Manufacturing", desc: "Every stage of production under one roof in Aligarh, for consistent quality and fast lead times." },
  { icon: IndianRupee, title: "Factory-Direct Pricing", desc: "No middlemen. Direct-from-factory pricing means better margins for distributors and contractors." },
  { icon: Globe2, title: "Export-Ready, Global Standards", desc: "Secure packaging, bulk capacity, and compliance with international norms for buyers importing at scale." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* ── STATS BAR ── */}
      <div style={{ background:"#e8a020" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:"1280px", margin:"0 auto" }} className="stats-grid">
          {stats.map((s,i)=>(
            <div key={s.label} style={{ padding:"30px 32px", textAlign:"center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.25)" : "none" }}>
              <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"52px", fontWeight:800, color:"#fff", lineHeight:1 }}>{s.number}</div>
              <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)", marginTop:"6px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TICKER ── */}
      <div style={{ background:"#1a1a1a", padding:"13px 0", overflow:"hidden", whiteSpace:"nowrap" }}>
        <div className="animate-ticker" style={{ display:"inline-flex" }}>
          {[...tickerItems,...tickerItems].map((item,i)=>(
            <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:"16px", padding:"0 28px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"12px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
              {item}<span style={{ width:"4px", height:"4px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }}/>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURE IMAGE STRIP ── "See the range" */}
      <section style={{ background:"#ffffff", padding:"80px 0 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", alignItems:"stretch" }} className="feature-split">
            {/* Left: text */}
            <div style={{ background:"#1a1a1a", padding:"64px 56px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>500+ Variants
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:1, marginBottom:"20px" }}>
                EVERY FINISH.<br/><span style={{ color:"#e8a020" }}>EVERY SIZE.</span><br/>EVERY APPLICATION.
              </h2>
              <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.55)", lineHeight:"1.8", marginBottom:"32px" }}>
                Polished gold, brushed nickel, matte black — pick from 12+ finishes across every industry-standard size. One trusted source for your entire hardware order, no chasing multiple vendors.
              </p>
              <Link href="/products" style={{ background:"#e8a020", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", alignSelf:"flex-start", boxShadow:"0 4px 20px rgba(232,160,32,0.35)" }}>
                Browse The Catalogue ›
              </Link>
            </div>
            {/* Right: hinge finishes photo */}
            <div style={{ position:"relative", minHeight:"420px" }}>
              <Image
                src="/img/hinge-finishes.jpg"
                alt="Butt hinges in multiple finishes — gold, silver, bronze, chrome, copper"
                fill
                style={{ objectFit:"cover", objectPosition:"center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MUST-HAVE BENEFITS ── */}
      <section style={{ background:"#f7f6f3", padding:"88px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Why Buyers Choose Us
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1, marginBottom:"16px", maxWidth:"760px" }}>Must-Have Benefits for You</h2>
          <p style={{ fontSize:"16px", color:"#666", lineHeight:"1.8", maxWidth:"700px", marginBottom:"48px" }}>
            We don&apos;t just manufacture hinges — we deliver value, durability, and trust with every piece. Here are six reasons builders, distributors, and exporters keep coming back to Tirupati Hinges &amp; Hardware Exports.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }} className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} style={{ background:"#ffffff", border:"1px solid #e5e2db", borderRadius:"0 4px 4px 0", padding:"32px 28px", borderLeft:"3px solid #e8a020", boxShadow:"var(--shadow-sm)" }}>
                <b.icon size={28} color="#e8a020" strokeWidth={1.75} style={{ marginBottom:"14px" }} />
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"17px", fontWeight:700, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>{b.title}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.7" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section style={{ background:"#ffffff", padding:"88px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"52px", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>The Complete Range
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1 }}>A Hinge for<br/><span style={{ color:"#e8a020" }}>Every Door</span></h2>
            </div>
            <Link href="/products" style={{ color:"#e8a020", border:"2px solid #e8a020", padding:"11px 26px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>See Full Range</Link>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }} className="products-grid">
            {products.map((p)=>(
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration:"none", display:"block", position:"relative", background:"#f7f6f3", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2" }} className="product-card">
                <div style={{ padding:"28px 28px 24px" }}>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", color:"#bbb", textTransform:"uppercase", marginBottom:"8px" }}>{p.num}</div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"19px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px", lineHeight:1.1 }}>{p.name}</div>
                  <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.65", marginBottom:"18px" }}>{p.desc}</p>
                  <div style={{ display:"flex", gap:"5px", flexWrap:"wrap" }}>
                    {p.specs.map((s)=>(
                      <span key={s} style={{ padding:"3px 9px", background:"rgba(232,160,32,0.09)", border:"1px solid rgba(232,160,32,0.22)", fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", color:"#c8880a", textTransform:"uppercase", borderRadius:"2px" }}>{s}</span>
                    ))}
                  </div>
                </div>
                {/* Bottom accent bar */}
                <div style={{ height:"3px", background:"linear-gradient(90deg, #e8a020, transparent)", opacity:0 }} className="card-accent" />
                <div style={{ position:"absolute", bottom:"20px", right:"20px", width:"28px", height:"28px", borderRadius:"50%", background:"#e8a020", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:"14px", fontWeight:700 }}>›</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE BANNER — hinge pile ── */}
      <section style={{ position:"relative", height:"500px", overflow:"hidden", display:"flex", alignItems:"center" }}>
        <Image
          src="/img/hinge-pile.jpg"
          alt="Batch of precision-manufactured brass door hinges"
          fill
          style={{ objectFit:"cover", objectPosition:"center 40%" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.5) 60%, transparent 100%)" }} />
        <div style={{ position:"relative", zIndex:2, maxWidth:"1280px", margin:"0 auto", padding:"0 40px", width:"100%" }}>
          <div style={{ maxWidth:"520px" }}>
            <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>Manufactured in Aligarh</div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 5vw, 64px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:0.95, marginBottom:"20px" }}>
              PRECISION FIRST.<br/><span style={{ color:"#e8a020" }}>ZERO SHORTCUTS.</span>
            </h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.65)", lineHeight:"1.7", marginBottom:"32px" }}>
              Every hinge that leaves our Aligarh facility clears a 12-point quality check — salt-spray tested, load-cycle tested, and verified to the micron on CMM equipment.
            </p>
            <Link href="/quality#manufacturing" style={{ background:"#e8a020", color:"#fff", padding:"13px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", display:"inline-block" }}>
              See Our Process ›
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US + INSTALLED IMAGE ── */}
      <section style={{ background:"#f7f6f3", padding:"0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", alignItems:"stretch" }} className="why-split">
            {/* Left: installed hinge photo */}
            <div style={{ position:"relative", minHeight:"560px" }}>
              <Image
                src="/img/hinge-installed.jpg"
                alt="Chrome butt hinge installed on a white door frame"
                fill
                style={{ objectFit:"cover", objectPosition:"center" }}
              />
              {/* Label overlay */}
              <div style={{ position:"absolute", bottom:"28px", left:"28px", background:"rgba(10,8,6,0.75)", backdropFilter:"blur(8px)", border:"1px solid rgba(232,160,32,0.3)", padding:"12px 20px", borderRadius:"3px" }}>
                <div style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"3px" }}>Shown</div>
                <div style={{ fontSize:"13px", fontWeight:600, color:"#fff" }}>SS 304 Butt Hinge · Chrome Plated</div>
              </div>
            </div>
            {/* Right: why points */}
            <div style={{ padding:"72px 56px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Why Choose Us
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(30px, 3.5vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.05, marginBottom:"32px" }}>
                BUILT DIFFERENT.<br/><span style={{ color:"#e8a020" }}>PROVEN GLOBALLY.</span>
              </h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {whyPoints.map((wp, i)=>(
                  <div key={wp.title} style={{ display:"flex", gap:"18px", padding:"20px 0", borderBottom: i < whyPoints.length - 1 ? "1px solid #e5e2db" : "none" }}>
                    <div style={{ width:"42px", height:"42px", background:"#e8a020", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <wp.icon size={20} color="#fff" strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.06em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"5px" }}>{wp.title}</div>
                      <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.65" }}>{wp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", alignSelf:"flex-start", marginTop:"32px", borderRadius:"2px" }}>Our Story ›</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SUPPLY ── */}
      <section style={{ background:"#1a1a1a", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Industries We Supply
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1, marginBottom:"24px" }}>Every Industry.<br/><span style={{ color:"#e8a020" }}>One Reliable Source.</span></h2>
          <p style={{ fontSize:"15px", color:"rgba(255,255,255,0.55)", maxWidth:"640px", lineHeight:"1.75", marginBottom:"40px" }}>
            Tirupati Hinges &amp; Hardware Exports&apos; hinges and hardware are trusted across a wide spectrum of industries for their strength, reliability, and corrosion resistance — from heavy industrial use to precision-based furniture applications.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
            {["Construction & Building Materials","Furniture Manufacturing","Automotive Industry","Marine Industry","Hospitality & Hotels","Industrial Equipment & Enclosures","Real Estate Development","Government & PWD Projects","Home Appliances","Retail & Interior Fit-Out"].map((ind)=>(
              <div key={ind} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"10px 16px", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"3px" }}>
                <span style={{ width:"6px", height:"6px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }}/>
                <span style={{ fontSize:"13px", letterSpacing:"0.03em", color:"rgba(255,255,255,0.7)" }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT MARKETS ── */}
      <section style={{ background:"#ffffff", padding:"88px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"52px", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Global Reach
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1 }}>Shipping to<br/><span style={{ color:"#e8a020" }}>Nearly Every Continent</span></h2>
              <p style={{ fontSize:"15px", color:"#666", maxWidth:"480px", lineHeight:"1.7", marginTop:"16px" }}>From the Gulf to the Americas, Southeast Asia to Southern Africa — if there&apos;s a door, we can probably ship a hinge for it.</p>
            </div>
            <Link href="/export-markets" style={{ color:"#e8a020", border:"2px solid #e8a020", padding:"11px 26px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>See Full Export Map</Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }} className="markets-grid">
            {[
              { id:"uae",     flag:"🇦🇪", name:"UAE & Middle East", region:"Dubai · Riyadh · Abu Dhabi",       points:["SS 316 anti-corrosion hinges","Jebel Ali port shipments","UAE building code compliant"] },
              { id:"sa",      flag:"🇿🇦", name:"South Africa",       region:"Johannesburg · Cape Town · Durban", points:["SABS-compatible specs","All major metros served","Container loads via Durban"] },
              { id:"vietnam", flag:"🇻🇳", name:"Vietnam & SE Asia",  region:"HCMC · Hanoi · Bangkok",           points:["OEM for furniture makers","Competitive vs. China","Via Singapore hub"] },
              { id:"kenya",   flag:"🇰🇪", name:"Kenya & East Africa",region:"Nairobi · Mombasa · Dar es Salaam",points:["Residential & commercial","Corrosion-resistant lines","Port of Mombasa"] },
            ].map((m)=>(
              <Link key={m.id} href={`/export-markets#${m.id}`} style={{ background:"#f7f6f3", border:"1px solid #ece9e2", padding:"28px 24px", textDecoration:"none", display:"block", borderRadius:"4px" }} className="market-card">
                <span style={{ fontSize:"36px", display:"block", marginBottom:"14px" }}>{m.flag}</span>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"4px", lineHeight:1.1 }}>{m.name}</div>
                <div style={{ fontSize:"11px", letterSpacing:"0.1em", color:"#e8a020", textTransform:"uppercase", marginBottom:"16px" }}>{m.region}</div>
                <ul style={{ listStyle:"none" }}>
                  {m.points.map((pt)=>(
                    <li key={pt} style={{ fontSize:"12px", color:"#666", padding:"5px 0", borderBottom:"1px solid #ece9e2", display:"flex", alignItems:"flex-start", gap:"7px" }}>
                      <span style={{ color:"#e8a020", flexShrink:0, fontWeight:700 }}>→</span>{pt}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBALLY SHIPPED dark band ── */}
      <section style={{ background:"#1a1a1a", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"48px", flexWrap:"wrap" }}>
            <div style={{ flex:"1", minWidth:"280px" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", border:"1px solid rgba(232,160,32,0.4)", padding:"5px 14px", marginBottom:"20px", borderRadius:"2px" }}>
                <span style={{ width:"7px", height:"7px", background:"#e8a020", borderRadius:"50%" }}/>
                <span style={{ fontSize:"10px", letterSpacing:"0.18em", color:"#e8a020", textTransform:"uppercase", fontWeight:700 }}>Aligarh, India</span>
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 56px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1, marginBottom:"16px" }}>
                STAMPED IN ALIGARH.<br/><span style={{ color:"#e8a020" }}>SHIPPED EVERYWHERE.</span>
              </h2>
              <p style={{ fontSize:"15px", color:"rgba(255,255,255,0.5)", maxWidth:"480px", lineHeight:"1.75" }}>
                Aligarh accounts for 80% of India&apos;s hardware manufacturing. Our location gives access to the finest raw materials, skilled craftsmen, and competitive pricing — passed directly to our international buyers.
              </p>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", maxWidth:"360px" }}>
              {["Dubai, UAE","Johannesburg, SA","Ho Chi Minh City","Nairobi, Kenya","Riyadh, KSA","Singapore","Bangkok, Thailand","Lagos, Nigeria"].map((city)=>(
                <div key={city} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"8px 14px", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"3px" }}>
                  <span style={{ width:"7px", height:"7px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }} className="animate-pulse-dot"/>
                  <span style={{ fontSize:"12px", letterSpacing:"0.06em", color:"rgba(255,255,255,0.45)", textTransform:"uppercase" }}>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <div style={{ background:"#f7f6f3", padding:"44px 0", borderTop:"1px solid #e5e2db", borderBottom:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"28px", flexWrap:"wrap" }}>
          <span style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"12px", fontWeight:700, letterSpacing:"0.18em", color:"#aaa", textTransform:"uppercase", whiteSpace:"nowrap" }}>Certifications & Standards</span>
          <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
            {certs.map((c)=>(
              <div key={c.title} style={{ padding:"12px 18px", border:"1px solid #e5e2db", borderRadius:"4px", display:"flex", alignItems:"center", gap:"10px", background:"#fff", boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ width:"26px", height:"26px", background:"#e8a020", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Check size={14} color="#fff" strokeWidth={3} />
                </div>
                <div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.04em", color:"#1a1a1a", textTransform:"uppercase" }}>{c.title}</div>
                  <div style={{ fontSize:"10px", color:"#999" }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section style={{ background:"#e8a020", padding:"88px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 5vw, 64px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:0.95, marginBottom:"10px" }}>YOUR NEXT<br/>SHIPMENT STARTS HERE</h2>
            <p style={{ fontSize:"17px", color:"rgba(255,255,255,0.8)" }}>Get our product catalogue and pricing for your market. Our export team replies within 24 hours.</p>
          </div>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
            <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"16px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Request a Quote ›</Link>
            <Link href="/products" style={{ background:"transparent", color:"#fff", border:"2px solid rgba(255,255,255,0.55)", padding:"16px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Download Catalogue</Link>
          </div>
        </div>
      </section>

      <style>{`
        .product-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; border-color: #e8a020 !important; transform: translateY(-2px); transition: all 0.2s; }
        .product-card:hover .card-accent { opacity: 1 !important; }
        .market-card:hover { border-color: #e8a020 !important; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: all 0.2s; }
        @media (max-width: 1024px) {
          .feature-split { grid-template-columns: 1fr !important; }
          .why-split { grid-template-columns: 1fr !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .markets-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .markets-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
