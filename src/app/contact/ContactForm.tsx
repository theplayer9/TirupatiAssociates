"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { categories } from "../products/catalog";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", country:"", product:"", quantity:"", message:"" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Sends the enquiry to /api/contact, which saves it to Google Sheets and emails it to us
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
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
          <p style={{ fontSize:"16px", color:"#666" }}>Thank you for contacting Tirupati Associates. Our team will get back to you within 24 hours with pricing and catalogue details.</p>
        </div>
      ) : (
        <form onSubmit={submit} style={{ position:"relative" }}>
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
              {["Australia","Austria","Bahrain","Bangladesh","Brazil","Bulgaria","Canada","Chile","Colombia","Egypt","France","Germany","Ghana","India","Indonesia","Italy","Japan","Kenya","Kuwait","Malaysia","Mexico","Nepal","Netherlands","New Zealand","Nigeria","Oman","Philippines","Poland","Qatar","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Sri Lanka","Tanzania","Thailand","Turkey","UAE","United Kingdom","USA","Vietnam","Other"].map(c=>(
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }} className="form-2col">
            <div>
              <label style={labelStyle}>Product Category</label>
              <select name="product" value={form.product} onChange={handle} style={inputStyle}>
                <option value="">Select product type</option>
                {categories.map((c)=>c.name).map(p=>(
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

          {/* Honeypot: hidden from people, filled by spam bots */}
          <div aria-hidden="true" style={{ position:"absolute", left:"-10000px", width:"1px", height:"1px", overflow:"hidden" }}>
            <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e)=>setHoneypot(e.target.value)} /></label>
          </div>

          {error && (
            <div role="alert" style={{ background:"#fdecea", border:"1px solid #f5c2bd", color:"#a1291c", padding:"12px 16px", borderRadius:"3px", fontSize:"14px", marginBottom:"16px" }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={sending} style={{ opacity: sending ? 0.7 : 1, width:"100%", background:"#e8a020", color:"#fff", padding:"15px", fontFamily:"var(--font-barlow), Arial, sans-serif", fontSize:"15px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:"none", cursor: sending ? "wait" : "pointer", borderRadius:"3px", boxShadow:"0 4px 12px rgba(232,160,32,0.3)" }}>
            {sending ? "Sending…" : "Submit Enquiry →"}
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
