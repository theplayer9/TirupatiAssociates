"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
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
    <div style={{ background:"#f7f6f3", border:"1px solid #e5e2db", borderRadius:"6px", padding:"48px", boxShadow:"var(--shadow)" }}>
      {sent ? (
        <div style={{ textAlign:"center", padding:"48px 0" }}>
          <CheckCircle2 size={56} color="#e8a020" strokeWidth={1.75} style={{ marginBottom:"24px" }} />
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
      <style>{`
        input:focus, textarea:focus, select:focus { border-color: #e8a020 !important; box-shadow: 0 0 0 3px rgba(232,160,32,0.1) !important; }
        @media (max-width: 640px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
