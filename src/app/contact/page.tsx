"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", country:"", product:"", quantity:"", message:"" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width:"100%",
    background:"#ffffff",
    border:"1px solid #e5e2db",
    color:"#1a1a1a",
    padding:"13px 16px",
    fontSize:"15px",
    outline:"none",
    fontFamily:"var(--font-inter), sans-serif",
    borderRadius:"3px",
  };

  const labelStyle = {
    display:"block" as const,
    fontSize:"11px",
    fontWeight:600,
    letterSpacing:"0.15em",
    textTransform:"uppercase" as const,
    color:"#777",
    marginBottom:"7px",
  };

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
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,0.65)", maxWidth:"520px", lineHeight:"1.7" }}>Fill in the form below and our export team will respond within 24 hours with pricing and product catalogue.</p>
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
                Whether you&apos;re an importer, distributor, contractor, or builder — we&apos;re happy to discuss your requirements and provide a competitive quote. Samples available before bulk ordering.
              </p>

              {[
                { icon:"📍", label:"Factory Address", value:"Tirupati Associates, Hardware Colony, Aligarh — 202001, Uttar Pradesh, India" },
                { icon:"📧", label:"Email", value:"info@tirupatiassociates.com" },
                { icon:"📱", label:"Phone / WhatsApp", value:"+91 98765 43210" },
                { icon:"🕐", label:"Business Hours", value:"Mon–Sat: 9:00 AM – 6:30 PM IST" },
              ].map((c)=>(
                <div key={c.label} style={{ display:"flex", gap:"16px", padding:"18px 0", borderBottom:"1px solid #f0ede7" }}>
                  <span style={{ fontSize:"24px", flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", color:"#999", textTransform:"uppercase", marginBottom:"4px" }}>{c.label}</div>
                    <div style={{ fontSize:"14px", color:"#1a1a1a", lineHeight:"1.5" }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop:"28px" }}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#999", textTransform:"uppercase", marginBottom:"12px" }}>Quick Connect</div>
                <a href="https://wa.me/919876543210" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"11px 22px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", marginRight:"12px", borderRadius:"2px" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:info@tirupatiassociates.com" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"transparent", color:"#e8a020", border:"1.5px solid #e8a020", padding:"11px 22px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", borderRadius:"2px" }}>
                  Send Email
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"6px", padding:"48px", boxShadow:"var(--shadow)" }}>
              {sent ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ fontSize:"64px", marginBottom:"24px" }}>✅</div>
                  <h3 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"32px", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"12px" }}>ENQUIRY RECEIVED!</h3>
                  <p style={{ fontSize:"16px", color:"#666" }}>Our export team will contact you within 24 hours with pricing and catalogue.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"24px", fontWeight:800, textTransform:"uppercase", color:"#1a1a1a", marginBottom:"32px", letterSpacing:"0.04em" }}>
                    Export Enquiry Form
                  </h3>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }} className="form-2col">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input required name="name" value={form.name} onChange={handle} placeholder="John Smith" style={inputStyle}/>
                    </div>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="ABC Hardware Ltd" style={inputStyle}/>
                    </div>
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }} className="form-2col">
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handle} placeholder="john@example.com" style={inputStyle}/>
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+971 50 123 4567" style={inputStyle}/>
                    </div>
                  </div>

                  <div style={{ marginBottom:"20px" }}>
                    <label style={labelStyle}>Country *</label>
                    <select required name="country" value={form.country} onChange={handle} style={inputStyle}>
                      <option value="">Select your country</option>
                      {["UAE","Saudi Arabia","Qatar","Kuwait","Oman","Bahrain","South Africa","Kenya","Nigeria","Ghana","Tanzania","Vietnam","Thailand","Indonesia","Malaysia","Singapore","Philippines","Other"].map(c=>(
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }} className="form-2col">
                    <div>
                      <label style={labelStyle}>Product Category</label>
                      <select name="product" value={form.product} onChange={handle} style={inputStyle}>
                        <option value="">Select product type</option>
                        {["Butt Hinges","Heavy Duty Hinges","Concealed / Cabinet Hinges","Piano Hinges","Spring Hinges","Tubular Latches","Ball Bearing Hinges","Cupboard Hinges","Custom / OEM Hinges","Mixed / Multiple Types"].map(p=>(
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Approximate Quantity</label>
                      <select name="quantity" value={form.quantity} onChange={handle} style={inputStyle}>
                        <option value="">Select quantity range</option>
                        {["500 – 2,000 pcs","2,000 – 10,000 pcs","10,000 – 50,000 pcs","50,000+ pcs","Not sure yet"].map(q=>(
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom:"28px" }}>
                    <label style={labelStyle}>Message / Specifications</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={4}
                      placeholder="Tell us about your requirements: sizes, materials, finishes, delivery port, any specific standards..."
                      style={{ ...inputStyle, resize:"vertical" as const }}
                    />
                  </div>

                  <button type="submit" style={{ width:"100%", background:"#e8a020", color:"#fff", padding:"15px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"15px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:"none", cursor:"pointer", borderRadius:"3px", boxShadow:"0 4px 12px rgba(232,160,32,0.3)" }}>
                    Submit Enquiry →
                  </button>

                  <p style={{ fontSize:"12px", color:"#999", textAlign:"center", marginTop:"16px" }}>
                    We respond within 24 hours · Samples available · No obligation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input:focus, textarea:focus, select:focus { border-color: #e8a020 !important; box-shadow: 0 0 0 3px rgba(232,160,32,0.1) !important; }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
