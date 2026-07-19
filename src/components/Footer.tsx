import Link from "next/link";
import { Globe2, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        borderTop: "3px solid #e8a020",
        padding: "64px 0 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr 1.2fr",
            gap: "32px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "0.05em",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: 1.15,
              }}
            >
              TIRUPATI HINGES <span style={{ color: "#e8a020" }}>&amp; HARDWARE EXPORTS</span>
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#888",
                textTransform: "uppercase",
                marginBottom: "20px",
                marginTop: "6px",
              }}
            >
              Hinge Manufacturer &amp; Exporter · 16+ Years of Experience
            </div>
            <p style={{ fontSize: "14px", color: "#777", lineHeight: "1.7", marginBottom: "20px" }}>
              Premium door hinge manufacturer based in Aligarh, India — the hardware capital of the world. Exporting to 40+ countries with quality you can trust.
            </p>
            <ul style={{ listStyle: "none", marginBottom: "20px" }}>
              <li style={{ marginBottom: "8px" }}>
                <Link href="/about" style={{ fontSize: "13px", color: "#999", textDecoration: "none" }}>About Us</Link>
              </li>
            </ul>
            <div style={{ display: "flex", gap: "10px" }}>
              {[Globe2, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#777",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Products
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["Butt Hinges", "/products/butt-hinges"],
                ["Heavy Duty Hinges", "/products/heavy-duty-hinges"],
                ["Concealed Hinges", "/products/concealed-cabinet-hinges"],
                ["Piano Hinges", "/products/piano-continuous-hinges"],
                ["Spring Hinges", "/products/spring-hinges"],
                ["Tubular Latches", "/products/tubular-latches"],
                ["Ball Bearing Hinges", "/products/ball-bearing-hinges"],
                ["Cupboard Hinges", "/products/cupboard-hinges"],
                ["Custom / OEM", "/products/custom-oem-hinges"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "8px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#777", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Export
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["UAE & Middle East", "/export-markets#uae"],
                ["South Africa", "/export-markets#sa"],
                ["Vietnam & SE Asia", "/export-markets#vietnam"],
                ["Kenya & East Africa", "/export-markets#kenya"],
                ["Export Process", "/export-markets#process"],
                ["All Export Markets", "/export-markets"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "8px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#777", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Quality
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["ISO 9001:2015", "/quality#certifications"],
                ["Testing & QC", "/quality#testing"],
                ["Certifications", "/quality#certifications"],
                ["Manufacturing", "/quality#manufacturing"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "8px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#777", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Blog
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["Hinge Buying Guides", "/blog"],
                ["SS 304 vs SS 316 Hinges", "/blog/ss-304-vs-ss-316-hinges"],
                ["Choosing the Right Hinge Size", "/blog/choosing-the-right-door-hinge-size"],
                ["Exporting Hinges to UAE", "/blog/exporting-hinges-to-uae-standards-documentation"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "8px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#777", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Contact
            </h4>
            {[
              { label: "Address", value: "Sector 2, Talanagri, Aligarh — 202001, Uttar Pradesh, India" },
              { label: "Email", value: "Tirupatiassociates07@gmail.com" },
              { label: "Phone / WhatsApp", value: "+91 7310572361" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#aaa",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: "13px", color: "#777" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid #2a2a2a",
            fontSize: "12px",
            color: "#555",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span>© {new Date().getFullYear()} Tirupati Hinges &amp; Hardware Exports. All rights reserved.</span>
          <div style={{ display: "flex", gap: "10px" }}>
            {["ISO 9001", "DGFT", "Made in India 🇮🇳"].map((b) => (
              <span
                key={b}
                style={{
                  padding: "3px 10px",
                  border: "1px solid #2a2a2a",
                  borderRadius: "2px",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#666",
                  textTransform: "uppercase",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
