"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { categories } from "./catalog";

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const fromUrl = searchParams.get("cat");
  const initial = categories.some((c) => c.slug === fromUrl) ? (fromUrl as string) : categories[0].slug;
  const [activeSlug, setActiveSlug] = useState(initial);

  // Keep in sync when the ?cat= param changes (e.g. arriving from a home-page card)
  useEffect(() => {
    if (fromUrl && categories.some((c) => c.slug === fromUrl)) setActiveSlug(fromUrl);
  }, [fromUrl]);

  const selectCategory = (slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/products?cat=${slug}`);
  };

  const active = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  return (
    <section style={{ background:"#ffffff", padding:"56px 0 80px" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }} className="catalog-wrap">
        {/* Category tabs */}
        <div role="tablist" aria-label="Product categories" className="catalog-tabs">
          {categories.map((c) => {
            const isActive = c.slug === active.slug;
            return (
              <button
                key={c.slug}
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(c.slug)}
                className={`catalog-tab${isActive ? " is-active" : ""}`}
              >
                <span className="catalog-tab-num">{c.num}</span>
                {c.name}
              </button>
            );
          })}
        </div>

        {/* Category header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:"24px", flexWrap:"wrap", margin:"44px 0 32px" }}>
          <div style={{ maxWidth:"720px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"12px" }}>
              <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>{active.num} · Category
            </div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(32px, 4vw, 52px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1, marginBottom:"12px" }}>{active.name}</h2>
            <p style={{ fontSize:"15px", color:"#666", lineHeight:1.7 }}>{active.desc}</p>
          </div>
          <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#999" }}>
            {active.items.length} {active.items.length === 1 ? "Product" : "Products"}
          </div>
        </div>

        {/* Item cards — same structure as the home-page category cards */}
        <div role="tabpanel" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }} className="catalog-grid">
          {active.items.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} style={{ textDecoration:"none", display:"block", position:"relative", background:"#f7f6f3", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2" }} className="product-card">
              <div style={{ position:"relative", width:"100%", aspectRatio:"1 / 1", overflow:"hidden", background:"#ffffff" }}>
                <Image
                  src={p.image}
                  alt={`${p.name} — Tirupati Associates`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit:"contain", objectPosition:"center", padding:"12px" }}
                  className="product-card-img"
                />
              </div>
              <div style={{ padding:"22px 22px 24px" }}>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"11px", fontWeight:700, letterSpacing:"0.15em", color:"#bbb", textTransform:"uppercase", marginBottom:"8px" }}>{p.num}</div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"19px", fontWeight:800, letterSpacing:"0.03em", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px", lineHeight:1.1 }}>{p.name}</div>
                <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.65", marginBottom:"32px" }}>
                  {p.material}{p.size ? ` · ${p.size} mm` : ""}
                </p>
              </div>
              <div style={{ height:"3px", background:"linear-gradient(90deg, #e8a020, transparent)", opacity:0 }} className="card-accent" />
              <div style={{ position:"absolute", bottom:"20px", right:"20px", width:"28px", height:"28px", borderRadius:"50%", background:"#e8a020", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:"14px", fontWeight:700 }}>›</div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .catalog-tabs { display: flex; flex-wrap: wrap; gap: 8px; padding-bottom: 16px; border-bottom: 1px solid #ece9e2; scrollbar-width: thin; }
        .catalog-tab {
          flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 18px; background: #f7f6f3; border: 1px solid #ece9e2; border-radius: 2px; cursor: pointer;
          font-family: var(--font-barlow), Arial, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #1a1a1a; transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .catalog-tab:hover { border-color: #e8a020; }
        .catalog-tab.is-active { background: #e8a020; border-color: #e8a020; color: #ffffff; }
        .catalog-tab-num { font-size: 11px; color: #bbb; letter-spacing: 0.1em; }
        .catalog-tab.is-active .catalog-tab-num { color: rgba(255,255,255,0.75); }
        .catalog-tab:focus-visible { outline: 2px solid #e8a020; outline-offset: 2px; }
        .product-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; border-color: #e8a020 !important; transform: translateY(-2px); transition: all 0.2s; }
        .product-card:hover .card-accent { opacity: 1 !important; }
        .product-card-img { transition: transform 0.4s ease; }
        .product-card:hover .product-card-img { transform: scale(1.04); }
        @media (max-width: 1024px) {
          .catalog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .catalog-wrap { padding: 0 16px !important; }
          .catalog-tabs { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 6px; }
          .catalog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
