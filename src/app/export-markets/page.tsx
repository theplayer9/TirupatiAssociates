import Link from "next/link";

const markets = [
  {
    id: "uae",
    flag: "🇦🇪",
    name: "UAE & Middle East",
    region: "United Arab Emirates · Saudi Arabia · Qatar · Kuwait · Oman · Bahrain",
    hero: "The Middle East's construction megaprojects demand hardware at scale — and at quality.",
    desc: "The UAE and broader GCC region is one of the world's most active construction markets. From Dubai's luxury towers to Saudi Arabia's Vision 2030 projects, the demand for high-quality door hardware is immense and growing. Tirupati Associates has been supplying to UAE-based importers and distributors since 2004.",
    climate: "Coastal and desert climates demand corrosion-resistant SS 316 and marine-grade finishes. All our Middle East shipments default to passivated stainless steel.",
    port: "Jebel Ali (JAFZA), Dubai",
    products: ["SS 316 Butt Hinges", "Heavy Duty Gate Hinges", "Anti-Corrosion Finishes", "Stainless Piano Hinges"],
    buyers: ["Hardware Importers", "Construction Contractors", "Interior Fit-Out Companies", "Hotel & Hospitality Projects"],
  },
  {
    id: "sa",
    flag: "🇿🇦",
    name: "South Africa",
    region: "Johannesburg · Cape Town · Durban · Pretoria · Port Elizabeth",
    hero: "Africa's most developed economy, with one of the continent's fastest-growing construction sectors.",
    desc: "South Africa is Tirupati's largest African market. We supply to hardware distributors, builders merchants, and construction companies across all major metros. Our products comply with SABS standards and are priced competitively for the South African market.",
    climate: "Varied climates from coastal Cape Town to inland Gauteng. We supply both standard and corrosion-resistant product lines for different regions.",
    port: "Durban (Port of Durban)",
    products: ["Butt Hinges (SS & Zinc)", "Heavy Duty & Gate Hinges", "Spring Hinges", "Commercial Door Hardware"],
    buyers: ["Hardware Wholesalers", "Builders Merchants", "Retail DIY Chains", "Construction Companies"],
  },
  {
    id: "vietnam",
    flag: "🇻🇳",
    name: "Vietnam",
    region: "Ho Chi Minh City · Hanoi · Da Nang · Binh Duong",
    hero: "Vietnam's furniture manufacturing boom creates massive demand for quality hardware components.",
    desc: "Vietnam has become one of the world's leading furniture export hubs. Its manufacturers need reliable, cost-competitive hardware components. Tirupati Associates provides OEM-ready hinges that match and often exceed the quality of local Chinese-sourced alternatives at competitive prices.",
    climate: "Tropical and humid. All products for Vietnam are tested for humidity resistance and supplied with anti-rust packaging.",
    port: "Ho Chi Minh City (Cat Lai Port) via Singapore",
    products: ["Concealed / Cabinet Hinges", "Piano Hinges", "Custom OEM Hinges", "Furniture Hinges"],
    buyers: ["Furniture Manufacturers", "OEM Buyers", "Hardware Distributors", "Kitchen Cabinet Makers"],
  },
  {
    id: "kenya",
    flag: "🇰🇪",
    name: "Kenya & East Africa",
    region: "Nairobi · Mombasa · Dar es Salaam · Kampala",
    hero: "East Africa's fastest-growing construction markets, driven by urbanisation and infrastructure investment.",
    desc: "Kenya and East Africa represent a significant growth market for Tirupati Associates. Nairobi's rapid urban development and a growing middle class are fueling demand for quality building materials, including premium door hardware.",
    climate: "Tropical highland climate in Nairobi. Coastal humidity in Mombasa. We supply corrosion-resistant products for coastal regions.",
    port: "Mombasa (Port of Mombasa)",
    products: ["Butt Hinges", "Gate & Garden Hinges", "Spring Hinges", "Heavy Duty Hinges"],
    buyers: ["Building Material Suppliers", "Hardware Retail Chains", "Real Estate Developers", "Government Projects"],
  },
];

const process = [
  { step:"01", title:"Inquiry", desc:"Send us your requirements by email or WhatsApp. We respond within 24 hours with pricing." },
  { step:"02", title:"Samples", desc:"We dispatch product samples (free of cost) so you can verify quality before committing to an order." },
  { step:"03", title:"Proforma Invoice", desc:"Once samples are approved, we issue a formal PI with pricing, lead time, and payment terms." },
  { step:"04", title:"Production", desc:"Upon advance payment, production begins. Standard lead time: 15–20 working days." },
  { step:"05", title:"QC & Packing", desc:"Pre-shipment inspection with photos/videos provided. Export packaging with carton markings." },
  { step:"06", title:"Shipment", desc:"Goods dispatched via FCL or LCL. Bill of Lading, COO, and all export docs provided." },
];

export default function ExportMarketsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop:"calc(72px + 80px)", paddingBottom:"80px", background:"#1c1c1c", borderBottom:"1px solid #2e2e2e", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(232,160,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.03) 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Global Reach
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(42px, 7vw, 80px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1, marginBottom:"16px" }}>Export Markets</h1>
          <p style={{ fontSize:"18px", color:"#888", maxWidth:"600px" }}>Shipping to 40+ countries. Focused partnerships with importers and distributors in the Middle East, Africa, and Southeast Asia.</p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:"#e8a020" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:"1280px", margin:"0 auto" }} className="stats-grid">
          {[{n:"40+",l:"Export Countries"},{n:"18+",l:"Years Exporting"},{n:"500+",l:"International Clients"},{n:"2",l:"Shipments / Month"}].map((s)=>(
            <div key={s.l} style={{ padding:"28px 32px", textAlign:"center", borderRight:"1px solid rgba(0,0,0,0.12)" }}>
              <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"48px", fontWeight:800, color:"#111", lineHeight:1 }}>{s.n}</div>
              <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(0,0,0,0.55)", marginTop:"6px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MARKET CARDS */}
      <section style={{ background:"#111", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", flexDirection:"column", gap:"2px" }}>
          {markets.map((m, i)=>(
            <div key={m.id} id={m.id} style={{ background: i % 2 === 0 ? "#1c1c1c" : "#111", border:"1px solid #2e2e2e", padding:"56px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start" }} className="market-row">
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
                    <span style={{ fontSize:"56px" }}>{m.flag}</span>
                    <div>
                      <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(26px, 3vw, 40px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1 }}>{m.name}</h2>
                      <div style={{ fontSize:"12px", letterSpacing:"0.1em", color:"#e8a020", textTransform:"uppercase", marginTop:"4px" }}>{m.region}</div>
                    </div>
                  </div>
                  <p style={{ fontSize:"16px", color:"#e8a020", fontStyle:"italic", lineHeight:"1.6", marginBottom:"16px" }}>&ldquo;{m.hero}&rdquo;</p>
                  <p style={{ fontSize:"15px", color:"#888", lineHeight:"1.8", marginBottom:"20px" }}>{m.desc}</p>
                  <div style={{ background:"rgba(232,160,32,0.06)", border:"1px solid rgba(232,160,32,0.15)", padding:"16px 20px", marginBottom:"24px" }}>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", color:"#e8a020", textTransform:"uppercase", marginBottom:"6px" }}>Climate Consideration</div>
                    <p style={{ fontSize:"13px", color:"#888" }}>{m.climate}</p>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ fontSize:"12px", color:"#888", textTransform:"uppercase", letterSpacing:"0.08em" }}>Main Port:</span>
                    <span style={{ fontSize:"13px", color:"#f2f0eb", fontWeight:600 }}>{m.port}</span>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", marginBottom:"12px" }}>Popular Products for This Market</div>
                    <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                      {m.products.map((p)=>(
                        <span key={p} style={{ padding:"6px 14px", background:"rgba(232,160,32,0.08)", border:"1px solid rgba(232,160,32,0.2)", fontSize:"12px", color:"#e8a020", letterSpacing:"0.06em" }}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", marginBottom:"12px" }}>Who We Sell To</div>
                    <ul style={{ listStyle:"none" }}>
                      {m.buyers.map((b)=>(
                        <li key={b} style={{ fontSize:"14px", color:"#888", padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,0.04)", display:"flex", alignItems:"center", gap:"10px" }}>
                          <span style={{ color:"#e8a020" }}>→</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" style={{ background:"#e8a020", color:"#111", padding:"12px 24px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", alignSelf:"flex-start" }}>
                    Enquire for {m.name} ›
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section style={{ background:"#1c1c1c", padding:"96px 0", borderTop:"1px solid #2e2e2e" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>How It Works
          </div>
          <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"56px" }}>Our Export Process</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"2px" }} className="process-grid">
            {process.map((p)=>(
              <div key={p.step} style={{ background:"#111", border:"1px solid #2e2e2e", padding:"36px 32px" }}>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"52px", fontWeight:800, color:"rgba(232,160,32,0.15)", lineHeight:1, marginBottom:"16px" }}>{p.step}</div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"20px", fontWeight:700, letterSpacing:"0.04em", color:"#fff", textTransform:"uppercase", marginBottom:"12px" }}>{p.title}</div>
                <p style={{ fontSize:"14px", color:"#888", lineHeight:"1.7" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#111", marginBottom:"8px" }}>START YOUR IMPORT TODAY</h2>
            <p style={{ fontSize:"16px", color:"rgba(0,0,0,0.6)" }}>WhatsApp us your requirements and get pricing within 24 hours.</p>
          </div>
          <Link href="/contact" style={{ background:"#111", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>Contact Us ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .market-row { grid-template-columns: 1fr !important; gap: 40px !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
