import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./data";

const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  title: "Hinge Buying Guides & Manufacturing Insights",
  description:
    "Practical guides on hinge selection, materials, manufacturing, and exporting door hardware — written by Tirupati Hinges & Hardware Exports, a door hinge manufacturer and exporter based in Aligarh, India.",
  keywords:
    "hinge buying guide, door hinge blog, SS 304 vs SS 316, hinge manufacturing process, exporting hardware India",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Hinge Buying Guides & Manufacturing Insights | ${BRAND}`,
    description: "Practical guides on hinge selection, materials, manufacturing, and exporting door hardware.",
    url: "/blog",
    images: [{ url: "/img/hinge-pile.jpg", width: 1200, height: 630, alt: "Tirupati Hinges & Hardware Exports blog" }],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 96px)", paddingBottom:"80px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/hinge-pile.jpg" alt="Tirupati Hinges & Hardware Exports blog — hinge buying guides" fill priority style={{ objectFit:"cover", objectPosition:"center 60%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.65) 55%, rgba(10,8,6,0.4) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Resources
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(48px, 7vw, 84px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.95, marginBottom:"20px" }}>Hinge Buying<br/><span style={{ color:"#e8a020" }}>Guides</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"560px", lineHeight:"1.7" }}>Practical guides on hinge selection, materials, manufacturing, and exporting hardware — from {BRAND}.</p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ background:"#ffffff", padding:"72px 0 96px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="blog-grid">
            {posts.map((post)=>(
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none", display:"block", background:"#f7f6f3", borderRadius:"6px", overflow:"hidden", border:"1px solid #ece9e2" }} className="blog-card">
                <div style={{ position:"relative", height:"180px" }}>
                  <Image src={post.coverImage} alt={post.title} fill style={{ objectFit:"cover" }} />
                </div>
                <div style={{ padding:"24px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px" }}>
                    <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", color:"#c8880a", background:"rgba(232,160,32,0.09)", border:"1px solid rgba(232,160,32,0.22)", padding:"3px 9px", borderRadius:"2px", textTransform:"uppercase" }}>{post.category}</span>
                    <span style={{ fontSize:"11px", color:"#999" }}>{post.readTime}</span>
                  </div>
                  <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"18px", fontWeight:800, color:"#1a1a1a", lineHeight:1.25, marginBottom:"10px" }}>{post.title}</div>
                  <p style={{ fontSize:"13px", color:"#666", lineHeight:"1.65" }}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"#e8a020", padding:"72px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"40px", flexWrap:"wrap" }}>
          <div>
            <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"8px" }}>HAVE A HARDWARE QUESTION?</h2>
            <p style={{ fontSize:"16px", color:"rgba(255,255,255,0.8)" }}>Our export team answers technical and sourcing questions directly — no obligation.</p>
          </div>
          <Link href="/contact" style={{ background:"#1a1a1a", color:"#fff", padding:"14px 32px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"14px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>Ask Us ›</Link>
        </div>
      </section>

      <style>{`
        .blog-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); border-color: #e8a020; transform: translateY(-2px); transition: all 0.2s; }
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
