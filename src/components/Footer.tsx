import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1c1c1c",
        borderTop: "1px solid #2e2e2e",
        padding: "64px 0 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              TIRUPATI <span style={{ color: "#e8a020" }}>ASSOCIATES</span>
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#888",
                textTransform: "uppercase",
                marginBottom: "20px",
                marginTop: "4px",
              }}
            >
              Hinge Manufacturer & Exporter · Since 1990
            </div>
            <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.7", marginBottom: "20px" }}>
              Premium door hinge manufacturer based in Aligarh, India — the hardware capital of the world. Exporting to 40+ countries with quality you can trust.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["in", "f", "✉"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid #2e2e2e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "13px",
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
                ["Butt Hinges", "/products#butt"],
                ["Heavy Duty Hinges", "/products#heavy"],
                ["Concealed Hinges", "/products#concealed"],
                ["Piano Hinges", "/products#piano"],
                ["Spring Hinges", "/products#spring"],
                ["Custom / OEM", "/products#custom"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "10px" }}>
                  <Link href={href} style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#e8a020",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["About Us", "/about"],
                ["Manufacturing", "/about#manufacturing"],
                ["Quality", "/about#quality"],
                ["Export Markets", "/export-markets"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: "10px" }}>
                  <Link href={href} style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>
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
                fontSize: "13px",
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
              { label: "Address", value: "Hardware Colony, Aligarh — 202001, Uttar Pradesh, India" },
              { label: "Email", value: "info@tirupatiassociates.com" },
              { label: "Phone / WhatsApp", value: "+91 98765 43210" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#f2f0eb",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: "13px", color: "#888" }}>{value}</div>
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
            paddingTop: "28px",
            borderTop: "1px solid #2e2e2e",
            fontSize: "12px",
            color: "#444",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span>© {new Date().getFullYear()} Tirupati Associates. All rights reserved.</span>
          <div style={{ display: "flex", gap: "10px" }}>
            {["ISO 9001", "DGFT", "Made in India 🇮🇳"].map((b) => (
              <span
                key={b}
                style={{
                  padding: "3px 10px",
                  border: "1px solid #2e2e2e",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#888",
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
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
