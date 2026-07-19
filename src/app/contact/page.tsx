import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const BRAND = "Tirupati Hinges & Hardware Exports";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Contact Tirupati Hinges & Hardware Exports for door hinge pricing, samples, and export documentation. We respond within 24 hours. Factory in Aligarh, Uttar Pradesh, India.",
  keywords: "door hinge supplier contact, hinge export enquiry, request hinge quote India, Tirupati Hinges contact",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Request a Quote — ${BRAND}`,
    description: "Fill in the form and our export team will respond within 24 hours with pricing and product catalogue.",
    url: "/contact",
    images: [{ url: "/img/hinge-finishes.jpg", width: 1200, height: 630, alt: "Contact Tirupati Hinges & Hardware Exports" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"calc(72px + 80px)", paddingBottom:"80px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src="/img/hinge-finishes.jpg" alt="Hinges in multiple finishes" fill priority style={{ objectFit:"cover", objectPosition:"center 40%" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(100deg, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.7) 55%, rgba(10,8,6,0.45) 100%)" }} />
        </div>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative", zIndex:2 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#e8a020", marginBottom:"20px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Get in Touch
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(52px, 8vw, 96px)", fontWeight:800, textTransform:"uppercase", color:"#ffffff", lineHeight:0.92, marginBottom:"20px" }}>Request<br/><span style={{ color:"#e8a020" }}>a Quote</span></h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"520px", lineHeight:"1.7" }}>Fill in the form below and the {BRAND} export team will respond within 24 hours with pricing and product catalogue.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background:"#ffffff", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"80px", alignItems:"start" }} className="contact-grid">

            {/* Left: Info */}
            <div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 3vw, 44px)", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", lineHeight:1.1, marginBottom:"20px" }}>
                WE RESPOND IN <span style={{ color:"#e8a020" }}>24 HOURS</span>
              </h2>
              <p style={{ fontSize:"15px", color:"#555", lineHeight:"1.8", marginBottom:"36px" }}>
                Whether you&apos;re an importer, distributor, contractor, or builder — {BRAND} is happy to discuss your requirements and provide a competitive quote. Samples available before bulk ordering.
              </p>

              {[
                { icon: MapPin, label:"Factory Address", value:"Sector 2, Talanagri, Aligarh — 202001, Uttar Pradesh, India" },
                { icon: Mail, label:"Email", value:"Tirupatiassociates07@gmail.com" },
                { icon: Phone, label:"Phone / WhatsApp", value:"+91 7310572361" },
                { icon: Clock, label:"Business Hours", value:"Mon–Sat: 9:00 AM – 6:30 PM IST" },
              ].map((c)=>(
                <div key={c.label} style={{ display:"flex", gap:"16px", padding:"18px 0", borderBottom:"1px solid #f0ede7" }}>
                  <c.icon size={22} color="#e8a020" strokeWidth={1.75} style={{ flexShrink:0, marginTop:"2px" }} />
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", color:"#999", textTransform:"uppercase", marginBottom:"4px" }}>{c.label}</div>
                    <div style={{ fontSize:"14px", color:"#1a1a1a", lineHeight:"1.5" }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop:"28px" }}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#999", textTransform:"uppercase", marginBottom:"12px" }}>Quick Connect</div>
                <a href="https://wa.me/917310572361" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"11px 22px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", marginRight:"12px", borderRadius:"2px" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:Tirupatiassociates07@gmail.com" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"transparent", color:"#e8a020", border:"1.5px solid #e8a020", padding:"11px 22px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>
                  Send Email
                </a>
              </div>
            </div>

            {/* Right: Form (client component) */}
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
