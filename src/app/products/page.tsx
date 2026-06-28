import Link from "next/link";

const products = [
  {
    id: "butt",
    name: "Butt Hinges",
    tagline: "The universal standard for door hanging",
    desc: "Our butt hinges are manufactured from premium grade stainless steel, brass, and zinc alloy. Used in residential doors, commercial buildings, hotels, and offices worldwide. Available in a wide range of sizes and finishes to meet any specification.",
    specs: [
      { label: "Materials", value: "SS 304, SS 316, Brass, Zinc Alloy, MS" },
      { label: "Sizes", value: "2\" – 6\" (50mm – 150mm)" },
      { label: "Finish", value: "SSS, Antique Brass, CP, PVD Gold, Black" },
      { label: "Thickness", value: "1.5mm – 3mm" },
      { label: "Load Capacity", value: "Up to 80kg per pair" },
      { label: "Standard", value: "BS EN 1935 Grade 11" },
    ],
    variants: ["Plain Bearing", "Ball Bearing", "Spring Loaded", "Anti-Lift", "Concealed Bearing"],
  },
  {
    id: "heavy",
    name: "Heavy Duty Hinges",
    tagline: "Built for industrial & commercial applications",
    desc: "Engineered for gates, warehouse doors, industrial machinery, and heavy commercial applications. Our heavy-duty hinges withstand repeated high-load cycling and harsh environmental conditions.",
    specs: [
      { label: "Materials", value: "Mild Steel, SS 316, Cast Iron" },
      { label: "Sizes", value: "4\" – 12\" (100mm – 300mm)" },
      { label: "Load Capacity", value: "100kg – 500kg per pair" },
      { label: "Finish", value: "Hot-Dip Galvanized, Powder Coat, Raw" },
      { label: "Type", value: "Weld-On, Bolt-On, Strap" },
      { label: "Standard", value: "IS 1341, DIN 18273" },
    ],
    variants: ["Weld-On Strap Hinge", "T-Hinge", "Parliament Hinge", "Band & Hook", "Pin Hinge"],
  },
  {
    id: "concealed",
    name: "Concealed / Cabinet Hinges",
    tagline: "Invisible hinge, visible quality",
    desc: "Concealed cup hinges for modern kitchen and furniture cabinets. Fully adjustable in three axes with integrated or separate soft-close damper options.",
    specs: [
      { label: "Cup Diameter", value: "26mm, 35mm" },
      { label: "Opening Angle", value: "95°, 110°, 165°, 175°" },
      { label: "Overlay", value: "Full, Half, Inset" },
      { label: "Closing", value: "Standard, Soft-Close, Push-to-Open" },
      { label: "Material", value: "Cold Rolled Steel, Zinc Die-Cast" },
      { label: "Standard", value: "EN 15443" },
    ],
    variants: ["Standard Clip-On", "Soft-Close", "Push-to-Open", "Thick Door", "Glass Door"],
  },
  {
    id: "piano",
    name: "Piano / Continuous Hinges",
    tagline: "Full-length support for long or heavy doors",
    desc: "Continuous piano hinges distribute weight and stress evenly across the full door length. Ideal for chest lids, piano keys, tool boxes, and access panels.",
    specs: [
      { label: "Materials", value: "Aluminum, SS 304, MS Zinc Plated" },
      { label: "Length", value: "900mm – 1800mm (custom lengths)" },
      { label: "Width (open)", value: "25mm – 75mm" },
      { label: "Pin Diameter", value: "3mm – 5mm" },
      { label: "Finish", value: "Satin Aluminum, SS Brushed, Zinc Plated" },
      { label: "Gauge", value: "14GA – 11GA" },
    ],
    variants: ["Standard Piano", "Heavy Piano", "Stainless Piano", "Aluminum Piano", "Custom Cut"],
  },
  {
    id: "spring",
    name: "Spring Hinges",
    tagline: "Self-closing for safety & security",
    desc: "Spring-loaded hinges for fire-rated doors, toilet cubicles, and security gates. Adjustable closing tension to meet door weight requirements.",
    specs: [
      { label: "Material", value: "SS 304, Zinc Die-Cast" },
      { label: "Action", value: "Single & Double Action" },
      { label: "Tension", value: "Adjustable (1–3 settings)" },
      { label: "Fire Rating", value: "Suitable for 30/60/90-min fire doors" },
      { label: "Sizes", value: "3\" – 5\"" },
      { label: "Standard", value: "BS EN 1154" },
    ],
    variants: ["Single Action", "Double Action", "Heavy Duty Spring", "Adjustable Spring", "Gravity Pivot"],
  },
  {
    id: "custom",
    name: "Custom / OEM Hinges",
    tagline: "Your specifications, our precision",
    desc: "We manufacture fully custom hinges to your drawings or samples. Ideal for OEM buyers, importers, and private-label distributors. MOQ starts from 500 pieces per variant.",
    specs: [
      { label: "MOQ", value: "500 pcs per SKU" },
      { label: "Lead Time", value: "15–25 days (new tooling)" },
      { label: "Materials", value: "Any — SS, Brass, Aluminum, MS, Zinc" },
      { label: "Finish", value: "Any plating, powder coat, PVD" },
      { label: "Packaging", value: "Custom branded boxes available" },
      { label: "Certifications", value: "Test reports provided" },
    ],
    variants: ["Drawn to Sample", "Drawn to Spec", "Private Label", "White Label", "Tooling Owned by Buyer"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ paddingTop:"calc(72px + 80px)", paddingBottom:"80px", background:"#1c1c1c", borderBottom:"1px solid #2e2e2e", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(232,160,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.03) 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Product Catalog
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(42px, 7vw, 80px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1, marginBottom:"16px" }}>Our Hinge Range</h1>
          <p style={{ fontSize:"18px", color:"#888", maxWidth:"560px" }}>500+ variants across 6 product families. All manufactured in-house at our Aligarh facility to international quality standards.</p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section style={{ background:"#111", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", flexDirection:"column", gap:"2px" }}>
          {products.map((p, i) => (
            <div key={p.id} id={p.id} style={{ background: i % 2 === 0 ? "#1c1c1c" : "#111", border:"1px solid #2e2e2e", padding:"56px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"64px", alignItems:"start" }} className="product-row">
              {/* Left */}
              <div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.15em", color:"#e8a020", textTransform:"uppercase", marginBottom:"8px" }}>0{i+1}</div>
                <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 3vw, 44px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1.05, marginBottom:"10px" }}>{p.name}</h2>
                <div style={{ fontSize:"14px", color:"#e8a020", letterSpacing:"0.05em", marginBottom:"20px" }}>{p.tagline}</div>
                <p style={{ fontSize:"15px", color:"#888", lineHeight:"1.8", marginBottom:"28px" }}>{p.desc}</p>
                {/* Variants */}
                <div style={{ marginBottom:"28px" }}>
                  <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", marginBottom:"10px" }}>Available Variants</div>
                  <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                    {p.variants.map((v)=>(
                      <span key={v} style={{ padding:"4px 12px", background:"rgba(232,160,32,0.06)", border:"1px solid rgba(232,160,32,0.15)", fontSize:"12px", color:"#e8a020", letterSpacing:"0.06em" }}>{v}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" style={{ background:"#e8a020", color:"#111", padding:"12px 28px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block" }}>Request Quote for {p.name}</Link>
              </div>
              {/* Right: Specs */}
              <div>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", marginBottom:"16px" }}>Technical Specifications</div>
                <div style={{ border:"1px solid #2e2e2e" }}>
                  {p.specs.map((s, si)=>(
                    <div key={s.label} style={{ display:"flex", borderBottom: si < p.specs.length - 1 ? "1px solid #2e2e2e" : "none" }}>
                      <div style={{ width:"40%", padding:"14px 20px", background:"rgba(232,160,32,0.03)", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"12px", fontWeight:700, letterSpacing:"0.08em", color:"#888", textTransform:"uppercase", flexShrink:0 }}>{s.label}</div>
                      <div style={{ padding:"14px 20px", fontSize:"14px", color:"#f2f0eb", borderLeft:"1px solid #2e2e2e" }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"80px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 48px)", fontWeight:800, textTransform:"uppercase", color:"#111", marginBottom:"8px" }}>CAN'T FIND WHAT YOU NEED?</h2>
            <p style={{ fontSize:"16px", color:"rgba(0,0,0,0.6)" }}>We manufacture custom hinges to your drawings or samples. Send us your specs.</p>
          </div>
          <Link href="/contact" style={{ background:"#111", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>Request Custom Quote ›</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .product-row { grid-template-columns: 1fr !important; gap: 40px !important; padding: 40px 24px !important; }
        }
      `}</style>
    </>
  );
}
