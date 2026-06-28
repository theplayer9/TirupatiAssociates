import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "35+", label: "Years in Business" },
  { number: "40+", label: "Export Countries" },
  { number: "500+", label: "Product Variants" },
  { number: "10K+", label: "Happy Clients" },
];

const products = [
  { id: "butt",       num: "01", name: "Butt Hinges",            desc: "Classic mortised hinges for residential and commercial doors. SS, brass & zinc alloy finishes.",        specs: ["SS 304", "SS 316", "Brass", "Zinc Alloy"] },
  { id: "heavy",      num: "02", name: "Heavy Duty Hinges",       desc: "Industrial-grade weld-on & strap hinges for gates, warehouses and heavy doors. Rated to 500 kg.",       specs: ["500kg Rated", "Industrial", "Weld-On"] },
  { id: "concealed",  num: "03", name: "Concealed Hinges",        desc: "Hidden cup hinges for modern cabinets. Three-way adjustable with soft-close damper options.",           specs: ["35mm Cup", "Soft-Close", "Overlay"] },
  { id: "piano",      num: "04", name: "Piano / Continuous",      desc: "Full-length continuous hinges that distribute load evenly. Available up to 1800 mm custom lengths.",    specs: ["1800mm", "Aluminum", "SS"] },
  { id: "spring",     num: "05", name: "Spring Hinges",           desc: "Self-closing spring hinges for fire-rated doors. Adjustable tension, single & double action.",          specs: ["Self-Closing", "Fire-Rated", "Adj. Tension"] },
  { id: "tubular",    num: "06", name: "Tubular Latches",         desc: "Precision stainless steel spring-bolt latches. 60 mm and 76 mm backsets, multiple finishes.",           specs: ["SS 304", "60/76mm", "BS EN 12459"] },
  { id: "ballbearing",num: "07", name: "Ball Bearing Hinges",     desc: "ABEC-5 stainless steel ball bearings — whisper-quiet, 200,000+ cycle life without lubrication.",       specs: ["ABEC-5", "200k Cycles", "ANSI"] },
  { id: "cupboard",   num: "08", name: "Cupboard Hinges",         desc: "Overlay, half-overlay, and inset European cup hinges for kitchens and wardrobes. Push-to-open ready.",  specs: ["3-Way Adj.", "Soft-Close", "EN 15443"] },
  { id: "custom",     num: "09", name: "Custom / OEM",            desc: "Fully bespoke hinge manufacturing to your drawings or samples. MOQ from 500 pcs. Private-label ready.", specs: ["OEM", "Custom Size", "Private Label"] },
];

const whyPoints = [
  { icon: "🏭", title: "In-House Manufacturing", desc: "Full control from raw material to finished product. Direct factory pricing for bulk orders." },
  { icon: "✅", title: "ISO 9001 Certified",      desc: "Rigorous QC at every stage. Products meet BS, DIN, and ANSI international standards." },
  { icon: "🚢", title: "Export-Ready Packaging", desc: "Carton, bulk, and branded packaging. We handle customs documentation for smooth clearance." },
  { icon: "⚡", title: "Fast Turnaround",         desc: "Standard orders: 15–20 days. Repeat orders: 7–10 days. Air freight for urgent needs." },
];

const certs = [
  { title: "ISO 9001:2015", sub: "Quality Management" },
  { title: "BIS Certified",  sub: "Bureau of Indian Standards" },
  { title: "BS EN 1935",     sub: "European Hinge Standard" },
  { title: "DGFT Registered",sub: "Export License, India" },
];

const tickerItems = ["Butt Hinges","Ball Bearing Hinges","Concealed Hinges","Heavy Duty Hinges","Tubular Latches","Cupboard Hinges","Spring Hinges","Continuous Hinges","Custom OEM Hinges","Stainless Steel Hardware","Export Grade Quality"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── Full-bleed lifestyle image */}
      <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
        {/* Background image */}
        <div style={{ position:"absolute", inset:0, zIndex:0 }}>
          <Image
            src="/img/door-lifestyle.jpg"
            alt="Premium door hinge installed on elegant wooden door"
            fill
            priority
            style={{ objectFit:"cover", objectPosition:"center" }}
          />
          {/* Dark gradient overlay — left side darker for text, right lighter */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.72) 50%, rgba(10,8,6,0.35) 100%)" }} />
        </div>

        {/* Content */}
        <div style={{ position:"relative", zIndex:2, maxWidth:"1280px", margin:"0 auto", padding:"120px 40px 80px", width:"100%" }}>
          <div style={{ maxWidth:"640px" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(232,160,32,0.15)", border:"1px solid rgba(232,160,32,0.5)", padding:"6px 18px", marginBottom:"32px", fontSize:"11px", fontWeight:700, letterSpacing:"0.25em", color:"#e8a020", textTransform:"uppercase" }}>
              <span style={{ width:"6px", height:"6px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }} className="animate-pulse-dot" />
              Premium Export Grade · Est. 1990
            </div>

            <h1 style={{ fontFamily:"var(--font-barlow), 'Arial Narrow', Arial, sans-serif", fontSize:"clamp(56px, 9vw, 108px)", fontWeight:800, letterSpacing:"-0.01em", textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"28px" }}>
              PRECISION<br/>
              <span style={{ color:"#e8a020", WebkitTextStroke:"0px" }}>HINGES</span><br/>
              <span style={{ fontSize:"clamp(28px, 4vw, 52px)", fontWeight:700, color:"rgba(255,255,255,0.55)", letterSpacing:"0.04em" }}>BUILT FOR THE WORLD</span>
            </h1>

            <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.75)", lineHeight:"1.75", maxWidth:"480px", marginBottom:"44px" }}>
              Aligarh&apos;s leading hinge manufacturer. Supplying builders, contractors and distributors across UAE, South Africa, Vietnam &amp; 40+ countries since 1990.
            </p>

            <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"52px" }}>
              <Link href="/products" style={{ background:"#e8a020", color:"#fff", padding:"15px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", boxShadow:"0 6px 24px rgba(232,160,32,0.4)" }}>
                Explore Products ›
              </Link>
              <Link href="/contact" style={{ background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,0.5)", padding:"15px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", backdropFilter:"blur(4px)" }}>
                Get Export Quote
              </Link>
            </div>

            {/* Export flags */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap" }}>
              <span style={{ fontSize:"11px", letterSpacing:"0.15em", color:"rgba(255,255,255,0.4)", textTransform:"uppercase" }}>Exporting to</span>
              {[{flag:"🇦🇪",label:"UAE"},{flag:"🇿🇦",label:"S. Africa"},{flag:"🇻🇳",label:"Vietnam"},{flag:"🇰🇪",label:"Kenya"}].map(({flag,label})=>(
                <span key={label} style={{ display:"flex", alignItems:"center", gap:"5px", padding:"4px 12px", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"2px", fontSize:"11px", letterSpacing:"0.08em", color:"rgba(255,255,255,0.6)", textTransform:"uppercase", backdropFilter:"blur(4px)" }}>
                  <span style={{ fontSize:"15px" }}>{flag}</span>{label}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{ position:"absolute", bottom:"36px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" }}>
            <span style={{ fontSize:"10px", letterSpacing:"0.2em", color:"rgba(255,255,255,0.35)", textTransform:"uppercase" }}>Scroll</span>
            <div style={{ width:"1px", height:"40px", background:"linear-gradient(to bottom, rgba(232,160,32,0.6), transparent)" }} />
          </div>
        </div>
      </section>

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
                From polished gold to brushed stainless — our hinges are available in 12+ finishes across all industry-standard sizes. One supplier for your entire hardware range.
              </p>
              <Link href="/products" style={{ background:"#e8a020", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", alignSelf:"flex-start", boxShadow:"0 4px 20px rgba(232,160,32,0.35)" }}>
                View Full Catalogue ›
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

      {/* ── PRODUCTS GRID ── */}
      <section style={{ background:"#ffffff", padding:"88px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"52px", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Our Product Range
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1 }}>Built for Every<br/>Application</h2>
            </div>
            <Link href="/products" style={{ color:"#e8a020", border:"2px solid #e8a020", padding:"11px 26px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>View All Products</Link>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }} className="products-grid">
            {products.map((p)=>(
              <Link key={p.id} href={`/products#${p.id}`} style={{ textDecoration:"none", display:"block", position:"relative", background:"#f7f6f3", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2" }} className="product-card">
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
              THOUSANDS OF<br/><span style={{ color:"#e8a020" }}>HINGES.</span><br/>ONE STANDARD.
            </h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.65)", lineHeight:"1.7", marginBottom:"32px" }}>
              Every hinge that leaves our Aligarh facility passes a 12-point quality check. Salt-spray tested. Load-cycle tested. Dimension-verified by CMM.
            </p>
            <Link href="/about#manufacturing" style={{ background:"#e8a020", color:"#fff", padding:"13px 30px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", display:"inline-block" }}>
              Our Manufacturing ›
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
                ALIGARH&apos;S<br/>EXPORT-GRADE<br/><span style={{ color:"#e8a020" }}>PRECISION</span>
              </h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {whyPoints.map((wp, i)=>(
                  <div key={wp.title} style={{ display:"flex", gap:"18px", padding:"20px 0", borderBottom: i < whyPoints.length - 1 ? "1px solid #e5e2db" : "none" }}>
                    <div style={{ width:"42px", height:"42px", background:"#e8a020", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0 }}>{wp.icon}</div>
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

      {/* ── EXPORT MARKETS ── */}
      <section style={{ background:"#ffffff", padding:"88px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"52px", flexWrap:"wrap", gap:"20px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
                <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Global Reach
              </div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(36px, 4vw, 58px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1 }}>Serving<br/>Global Markets</h2>
            </div>
            <Link href="/export-markets" style={{ color:"#e8a020", border:"2px solid #e8a020", padding:"11px 26px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>All Markets</Link>
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
                GLOBALLY SHIPPED.<br/><span style={{ color:"#e8a020" }}>MADE IN INDIA.</span>
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
                <div style={{ width:"26px", height:"26px", background:"#e8a020", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:"12px", fontWeight:700, flexShrink:0 }}>✓</div>
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
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 5vw, 64px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:0.95, marginBottom:"10px" }}>READY TO<br/>START IMPORTING?</h2>
            <p style={{ fontSize:"17px", color:"rgba(255,255,255,0.8)" }}>Get our product catalogue + pricing for your market. Response within 24 hours.</p>
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
