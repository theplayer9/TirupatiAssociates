import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../data";

const BRAND = "Tirupati Hinges & Hardware Exports";
const SITE_URL = "https://www.tirupatihinges.com";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, hinge manufacturer India, ${post.title.toLowerCase()}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | ${BRAND}`,
      description: post.excerpt,
      url,
      siteName: BRAND,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${BRAND}`,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: BRAND },
    publisher: { "@type": "Organization", name: BRAND },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* BREADCRUMB */}
      <div style={{ background:"#f7f6f3", borderBottom:"1px solid #e5e2db", paddingTop:"72px" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"18px 40px", fontSize:"12px", color:"#888", display:"flex", gap:"8px", alignItems:"center" }}>
          <Link href="/" style={{ color:"#888", textDecoration:"none" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color:"#888", textDecoration:"none" }}>Blog</Link>
          <span>/</span>
          <span style={{ color:"#1a1a1a", fontWeight:600 }}>{post.title}</span>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div style={{ position:"relative", height:"360px" }}>
        <Image src={post.coverImage} alt={post.title} fill priority style={{ objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(10,8,6,0.1) 0%, rgba(10,8,6,0.75) 100%)" }} />
        <div style={{ position:"absolute", bottom:0, left:0, right:0, maxWidth:"860px", margin:"0 auto", padding:"0 40px 36px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"14px" }}>
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", color:"#1a1a1a", background:"#e8a020", padding:"4px 10px", borderRadius:"2px", textTransform:"uppercase" }}>{post.category}</span>
            <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>{post.readTime}</span>
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 4vw, 44px)", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{post.title}</h1>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article style={{ background:"#ffffff", padding:"56px 0 96px" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ fontSize:"13px", color:"#999", marginBottom:"32px", paddingBottom:"24px", borderBottom:"1px solid #e5e2db" }}>
            Published by {BRAND} · {new Date(post.date).toLocaleDateString("en-IN", { year:"numeric", month:"long", day:"numeric" })}
          </div>
          {post.content.map((para, i) => (
            <p key={i} style={{ fontSize:"16px", color:"#444", lineHeight:"1.85", marginBottom:"22px" }}>{para}</p>
          ))}

          <div style={{ marginTop:"40px", padding:"28px", background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"6px" }}>
            <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"18px", fontWeight:800, color:"#1a1a1a", textTransform:"uppercase", marginBottom:"10px" }}>Need Hinges for Your Project?</div>
            <p style={{ fontSize:"14px", color:"#666", lineHeight:"1.7", marginBottom:"18px" }}>Our export team responds within 24 hours with pricing, samples, and technical guidance.</p>
            <Link href="/contact" style={{ background:"#e8a020", color:"#fff", padding:"12px 26px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", display:"inline-block", borderRadius:"2px" }}>Request a Quote ›</Link>
          </div>
        </div>
      </article>

      {/* RELATED POSTS */}
      <section style={{ background:"#f7f6f3", padding:"64px 0", borderTop:"1px solid #e5e2db" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"20px", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"24px" }}>More Guides</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }} className="related-grid">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration:"none", display:"block", background:"#ffffff", borderRadius:"4px", overflow:"hidden", border:"1px solid #ece9e2", padding:"20px" }}>
                <div style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", color:"#c8880a", textTransform:"uppercase", marginBottom:"8px" }}>{p.category}</div>
                <div style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"15px", fontWeight:700, color:"#1a1a1a", lineHeight:1.3 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
