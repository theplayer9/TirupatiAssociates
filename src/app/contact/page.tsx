"use client";
import { useState } from "react";

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
    background:"#1c1c1c",
    border:"1px solid #2e2e2e",
    color:"#f2f0eb",
    padding:"14px 16px",
    fontSize:"15px",
    outline:"none",
    fontFamily:"var(--font-inter), sans-serif",
  };

  const labelStyle = {
    display:"block" as const,
    fontSize:"11px",
    fontWeight:600,
    letterSpacing:"0.15em",
    textTransform:"uppercase" as const,
    color:"#888",
    marginBottom:"8px",
  };

  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop:"calc(72px + 80px)", paddingBottom:"80px", background:"#1c1c1c", borderBottom:"1px solid #2e2e2e", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(232,160,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.03) 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px", position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", fontSize:"12px", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#e8a020", marginBottom:"16px" }}>
            <span style={{ display:"block", width:"32px", height:"2px", background:"#e8a020" }}/>Get in Touch
          </div>
          <h1 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(42px, 7vw, 80px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1, marginBottom:"16px" }}>Request a Quote</h1>
          <p style={{ fontSize:"18px", color:"#888", maxWidth:"560px" }}>Fill out the form below and our export team will respond within 24 hours with pricing and product catalogue.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background:"#111", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 40px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"80px", alignItems:"start" }} className="contact-grid">

            {/* Left: Info */}
            <div>
              <h2 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"clamp(28px, 3vw, 44px)", fontWeight:800, textTransform:"uppercase", color:"#fff", lineHeight:1.1, marginBottom:"24px" }}>
                WE RESPOND IN <span style={{ color:"#e8a020" }}>24 HOURS</span>
              </h2>
              <p style={{ fontSize:"15px", color:"#888", lineHeight:"1.8", marginBottom:"40px" }}>
                Whether you&apos;re an importer, distributor, contractor, or builder — we&apos;re happy to discuss your requirements and provide a competitive quote. Samples available before bulk ordering.
              </p>

              {/* Contact Details */}
              {[
                { icon:"📍", label:"Factory Address", value:"Tirupati Associates, Hardware Colony, Aligarh — 202001, Uttar Pradesh, India" },
                { icon:"📧", label:"Email", value:"info@tirupatiassociates.com" },
                { icon:"📱", label:"Phone / WhatsApp", value:"+91 98765 43210" },
                { icon:"🕐", label:"Business Hours", value:"Mon–Sat: 9:00 AM – 6:30 PM IST" },
              ].map((c)=>(
                <div key={c.label} style={{ display:"flex", gap:"16px", padding:"20px 0", borderBottom:"1px solid #2e2e2e" }}>
                  <span style={{ fontSize:"24px", flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", color:"#888", textTransform:"uppercase", marginBottom:"4px" }}>{c.label}</div>
                    <div style={{ fontSize:"14px", color:"#f2f0eb", lineHeight:"1.5" }}>{c.value}</div>
                  </div>
                </div>
              ))}

              {/* Quick connects */}
              <div style={{ marginTop:"32px" }}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.15em", color:"#888", textTransform:"uppercase", marginBottom:"12px" }}>Quick Connect</div>
                <a href="https://wa.me/919876543210" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"12px 24px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", marginRight:"12px" }}>
                  WhatsApp Us
                </a>
                <a href="mailto:info@tirupatiassociates.com" style={{ display:"inline-flex", alignItems:"center", gap:"10px", background:"transparent", color:"#e8a020", border:"1.5px solid #e8a020", padding:"12px 24px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
                  Send Email
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background:"#1c1c1c", border:"1px solid #2e2e2e", padding:"48px" }}>
              {sent ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ fontSize:"64px", marginBottom:"24px" }}>✅</div>
                  <h3 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"32px", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"12px" }}>ENQUIRY RECEIVED!</h3>
                  <p style={{ fontSize:"16px", color:"#888" }}>Our export team will contact you within 24 hours with pricing and catalogue.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"24px", fontWeight:800, textTransform:"uppercase", color:"#fff", marginBottom:"32px", letterSpacing:"0.04em" }}>
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
                        {["Butt Hinges","Heavy Duty Hinges","Concealed / Cabinet Hinges","Piano Hinges","Spring Hinges","Custom / OEM Hinges","Mixed / Multiple Types"].map(p=>(
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

                  <button type="submit" style={{ width:"100%", background:"#e8a020", color:"#111", padding:"16px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"16px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:"none", cursor:"pointer" }}>
                    Submit Enquiry →
                  </button>

                  <p style={{ fontSize:"12px", color:"#888", textAlign:"center", marginTop:"16px" }}>
                    We respond within 24 hours · Samples available · No obligation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input:focus, textarea:focus, select:focus { border-color: #e8a020 !important; }
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
