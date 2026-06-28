"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/export-markets", label: "Export Markets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "72px",
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #e5e2db" : "1px solid #eeebe4",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "none",
          display: "flex",
          alignItems: "center",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 40px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                fontFamily: "var(--font-barlow), 'Arial Narrow', Arial, sans-serif",
                fontSize: "21px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#1a1a1a",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              TIRUPATI{" "}
              <span style={{ color: "#e8a020" }}>ASSOCIATES</span>
            </div>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "0.25em",
                color: "#999",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              Hardware Manufacturers
            </div>
          </Link>

          {/* Desktop links */}
          <ul
            style={{
              display: "flex",
              gap: "32px",
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-barlow), Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: path === l.href ? "#1a1a1a" : "#777",
                    textDecoration: "none",
                    borderBottom: path === l.href ? "2px solid #e8a020" : "2px solid transparent",
                    paddingBottom: "2px",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }} className="hidden-mobile">
            <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#999", textTransform: "uppercase" }}>
              Made in India
            </span>
            <Link
              href="/contact"
              style={{
                background: "#e8a020",
                color: "#fff",
                padding: "11px 24px",
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "2px",
                transition: "background 0.2s",
              }}
            >
              Request Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#1a1a1a",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#ffffff",
            zIndex: 999,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderTop: "1px solid #e5e2db",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-barlow), Arial, sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: path === l.href ? "#e8a020" : "#1a1a1a",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #e5e2db",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "24px",
              background: "#e8a020",
              color: "#fff",
              padding: "16px 24px",
              fontFamily: "var(--font-barlow), Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              borderRadius: "2px",
            }}
          >
            Request a Quote →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
