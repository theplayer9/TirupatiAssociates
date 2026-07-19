"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/img/door-lifestyle.jpg",
    alt: "Premium door hinge installed on elegant wooden door",
    heading: "Built for Every Door, Every Climate",
    text: "From residential butt hinges to industrial-grade gate hardware — precision-engineered for decades of smooth, silent operation.",
  },
  {
    image: "/img/hinge-finishes.jpg",
    alt: "Butt hinges in multiple finishes — gold, silver, bronze, chrome, copper",
    heading: "500+ Variants, Every Finish You Need",
    text: "Polished gold to brushed stainless steel — one trusted source for your entire hardware range, manufactured to ISO 9001 standards.",
  },
  {
    image: "/img/hinge-installed.jpg",
    alt: "Chrome butt hinge installed on a white door frame",
    heading: "Proudly Manufactured in Uttar Pradesh, India",
    text: "Precision hardware exported from one of India's premier hinge-manufacturing regions to builders and distributors in 40+ countries.",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
      {/* Background slides — crossfade */}
      <div style={{ position:"absolute", inset:0, zIndex:0 }}>
        {slides.map((s, i) => (
          <div
            key={s.image}
            style={{ position:"absolute", inset:0, opacity: i === active ? 1 : 0, transition:"opacity 1.2s ease" }}
            aria-hidden={i !== active}
          >
            <Image src={s.image} alt={s.alt} fill priority={i === 0} style={{ objectFit:"cover", objectPosition:"center" }} />
          </div>
        ))}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.72) 50%, rgba(10,8,6,0.35) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position:"relative", zIndex:2, maxWidth:"1280px", margin:"0 auto", padding:"120px 40px 80px", width:"100%" }}>
        <div style={{ maxWidth:"640px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(232,160,32,0.15)", border:"1px solid rgba(232,160,32,0.5)", padding:"6px 18px", marginBottom:"32px", fontSize:"11px", fontWeight:700, letterSpacing:"0.25em", color:"#e8a020", textTransform:"uppercase" }}>
            <span style={{ width:"6px", height:"6px", background:"#e8a020", borderRadius:"50%", flexShrink:0 }} className="animate-pulse-dot" />
            16+ Years of Manufacturing Excellence
          </div>

          <h1 style={{ fontFamily:"var(--font-barlow), 'Arial Narrow', Arial, sans-serif", fontSize:"clamp(44px, 7vw, 84px)", fontWeight:800, letterSpacing:"-0.01em", textTransform:"uppercase", color:"#ffffff", lineHeight:0.98, marginBottom:"24px" }}>
            PREMIUM HINGES<br/>
            <span style={{ color:"#e8a020" }}>&amp; HARDWARE EXPORTER</span><br/>
            <span style={{ fontSize:"clamp(24px, 3.5vw, 44px)", fontWeight:700, color:"rgba(255,255,255,0.55)", letterSpacing:"0.04em" }}>IN INDIA</span>
          </h1>

          {/* Rotating slide content */}
          <div key={active} style={{ minHeight:"104px", marginBottom:"20px" }} className="slide-fade">
            <div style={{ fontSize:"clamp(18px, 2.2vw, 24px)", fontWeight:700, color:"#e8a020", marginBottom:"10px", lineHeight:1.25 }}>
              {slides[active].heading}
            </div>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.75)", lineHeight:"1.7", maxWidth:"480px" }}>
              {slides[active].text}
            </p>
          </div>

          {/* Slide indicators */}
          <div style={{ display:"flex", gap:"8px", marginBottom:"36px" }}>
            {slides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === active}
                style={{
                  width: i === active ? "28px" : "8px",
                  height:"8px",
                  borderRadius:"4px",
                  border:"none",
                  padding:0,
                  cursor:"pointer",
                  background: i === active ? "#e8a020" : "rgba(255,255,255,0.3)",
                  transition:"all 0.3s ease",
                }}
              />
            ))}
          </div>

          <div style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"52px" }}>
            <Link href="/products" style={{ background:"#e8a020", color:"#fff", padding:"15px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", boxShadow:"0 6px 24px rgba(232,160,32,0.4)" }}>
              See The Range ›
            </Link>
            <Link href="/contact" style={{ background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,0.5)", padding:"15px 36px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px", backdropFilter:"blur(4px)" }}>
              Request Export Quote
            </Link>
          </div>

          {/* Export flags */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap" }}>
            <span style={{ fontSize:"11px", letterSpacing:"0.15em", color:"rgba(255,255,255,0.4)", textTransform:"uppercase" }}>Now shipping to</span>
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

      <style>{`
        @keyframes slideFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .slide-fade { animation: slideFadeIn 0.6s ease; }
      `}</style>
    </section>
  );
}
