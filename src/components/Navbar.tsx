"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/img/Logo.png";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageCircle, Globe2, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/export-markets", label: "Export" },
  { href: "/quality", label: "Quality" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PHONE_DISPLAY = "+91 7310572361";
const PHONE_LINK = "tel:+917310572361";
const WHATSAPP_LINK = "https://wa.me/917310572361";
const EMAIL = "Tirupatiassociates07@gmail.com";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? path === "/" : path?.startsWith(href));

  return (
    <header className={`ta-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      {/* Top utility bar (desktop) */}
      <div className="ta-topbar">
        <div className="ta-container ta-topbar-inner">
          <span className="ta-topbar-note">
            <Globe2 size={13} strokeWidth={2} />
            Manufacturer &amp; Exporter · India
          </span>
          <div className="ta-topbar-links">
            <a href={PHONE_LINK}>
              <Phone size={13} strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={13} strokeWidth={2} />
              {EMAIL}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ta-topbar-wa">
              <MessageCircle size={13} strokeWidth={2} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="ta-mainbar" aria-label="Main navigation">
        <div className="ta-container ta-mainbar-inner">
          <Link href="/" className="ta-logo" aria-label="Tirupati Associates — Home">
            <Image
              src={logo}
              alt="Tirupati Associates logo"
              priority
              className="ta-logo-img"
            />
          </Link>

          <ul className="ta-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`ta-link${isActive(l.href) ? " is-active" : ""}`}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ta-actions">
            <Link href="/contact" className="ta-cta">
              Request Quote
              <ArrowRight size={16} strokeWidth={2.4} />
            </Link>
          </div>

          <button
            type="button"
            className="ta-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="ta-mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="ta-mobile-menu" className="ta-mobile" aria-hidden={!open}>
        <ul>
          {links.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={isActive(l.href) ? "is-active" : undefined}
                tabIndex={open ? 0 : -1}
              >
                <span className="ta-mobile-num">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
                <ArrowRight size={20} className="ta-mobile-arrow" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="ta-mobile-footer">
          <Link href="/contact" onClick={() => setOpen(false)} className="ta-cta ta-cta-block" tabIndex={open ? 0 : -1}>
            Request a Quote
            <ArrowRight size={18} strokeWidth={2.4} />
          </Link>
          <div className="ta-mobile-contact">
            <a href={PHONE_LINK} tabIndex={open ? 0 : -1}>
              <Phone size={16} /> Call
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ta-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: var(--font-barlow), 'Arial Narrow', Arial, sans-serif;
        }
        .ta-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        /* ---------- Top bar ---------- */
        .ta-topbar {
          background: #1a1a1a;
          color: #bdb8b0;
          font-family: var(--font-inter), Arial, sans-serif;
          font-size: 12px;
          height: 36px;
          overflow: hidden;
          transition: height 0.3s ease, opacity 0.3s ease;
          border-bottom: 2px solid #e8a020;
        }
        .ta-header.is-scrolled .ta-topbar {
          height: 0;
          opacity: 0;
          border-bottom-width: 0;
        }
        .ta-topbar-inner {
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .ta-topbar-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .ta-topbar-note svg { color: #e8a020; }
        .ta-topbar-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .ta-topbar-links a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #bdb8b0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .ta-topbar-links a svg { color: #e8a020; }
        .ta-topbar-links a:hover { color: #ffffff; }

        /* ---------- Main bar ---------- */
        .ta-mainbar {
          background: #ffffff;
          border-bottom: 1px solid #eeebe4;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ta-header.is-scrolled .ta-mainbar {
          box-shadow: 0 6px 24px rgba(26, 26, 26, 0.08);
          border-bottom-color: transparent;
        }
        .ta-mainbar-inner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: height 0.3s ease;
        }
        .ta-header.is-scrolled .ta-mainbar-inner { height: 64px; }

        .ta-logo { display: flex; align-items: center; flex-shrink: 0; overflow: hidden; }
        /* Logo.png has transparent space around the artwork; negative margins
           (as fractions of the image height) trim it so the logo fills the bar. */
        .ta-logo-img {
          --logo-h: 109px;
          height: var(--logo-h);
          width: auto;
          display: block;
          margin: calc(var(--logo-h) * -0.207) 0 calc(var(--logo-h) * -0.224) calc(var(--logo-h) * -0.127);
          transition: height 0.3s ease, margin 0.3s ease;
        }
        .ta-header.is-scrolled .ta-logo-img { --logo-h: 95px; }

        .ta-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ta-link {
          position: relative;
          display: block;
          padding: 10px 14px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ta-link::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 4px;
          height: 2px;
          background: #e8a020;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        .ta-link:hover { color: #1a1a1a; }
        .ta-link:hover::after { transform: scaleX(1); }
        .ta-link.is-active { color: #1a1a1a; }
        .ta-link.is-active::after { transform: scaleX(1); }

        .ta-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }
        .ta-call {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #1a1a1a;
        }
        .ta-call-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #e8a020;
          color: #e8a020;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .ta-call:hover .ta-call-icon { background: #e8a020; color: #ffffff; }
        .ta-call-text {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }
        .ta-call-text small {
          font-family: var(--font-inter), Arial, sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 2px;
        }

        .ta-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e8a020;
          color: #ffffff;
          padding: 12px 22px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          box-shadow: 0 4px 14px rgba(232, 160, 32, 0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .ta-cta svg { transition: transform 0.2s; }
        .ta-cta:hover {
          background: #c8881a;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(232, 160, 32, 0.45);
        }
        .ta-cta:hover svg { transform: translateX(3px); }

        .ta-link:focus-visible,
        .ta-cta:focus-visible,
        .ta-call:focus-visible,
        .ta-burger:focus-visible,
        .ta-logo:focus-visible {
          outline: 2px solid #e8a020;
          outline-offset: 3px;
        }

        /* ---------- Hamburger ---------- */
        .ta-burger {
          display: none;
          position: relative;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-right: -8px;
        }
        .ta-burger span {
          position: absolute;
          left: 10px;
          width: 24px;
          height: 2px;
          background: #1a1a1a;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.2s ease, top 0.3s ease;
        }
        .ta-burger span:nth-child(1) { top: 14px; }
        .ta-burger span:nth-child(2) { top: 21px; width: 16px; }
        .ta-burger span:nth-child(3) { top: 28px; }
        .ta-header.is-open .ta-burger span:nth-child(1) { top: 21px; transform: rotate(45deg); }
        .ta-header.is-open .ta-burger span:nth-child(2) { opacity: 0; }
        .ta-header.is-open .ta-burger span:nth-child(3) { top: 21px; transform: rotate(-45deg); }

        /* ---------- Mobile menu ---------- */
        .ta-mobile {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          padding: 16px 24px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0.25s;
          border-top: 2px solid #e8a020;
        }
        .ta-header.is-scrolled .ta-mobile { top: 64px; }
        .ta-header.is-open .ta-mobile {
          opacity: 1;
          visibility: visible;
          transform: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .ta-mobile ul { list-style: none; margin: 0; padding: 0; }
        .ta-mobile li {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .ta-header.is-open .ta-mobile li { opacity: 1; transform: none; }
        .ta-mobile li a {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          border-bottom: 1px solid #eeebe4;
        }
        .ta-mobile li a.is-active { color: #e8a020; }
        .ta-mobile-num {
          font-family: var(--font-inter), Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #e8a020;
          letter-spacing: 0.1em;
          width: 22px;
        }
        .ta-mobile-arrow {
          margin-left: auto;
          color: #c9c4bb;
          transition: transform 0.2s, color 0.2s;
        }
        .ta-mobile li a:hover .ta-mobile-arrow,
        .ta-mobile li a.is-active .ta-mobile-arrow { color: #e8a020; transform: translateX(4px); }
        .ta-mobile-footer { margin-top: 28px; }
        .ta-cta-block {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 16px 24px;
          font-size: 16px;
        }
        .ta-mobile-contact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 12px;
        }
        .ta-mobile-contact a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 8px;
          border: 1px solid #e5e2db;
          border-radius: 4px;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
        }
        .ta-mobile-contact a svg { color: #e8a020; }

        /* ---------- Responsive ---------- */
        @media (max-width: 1280px) {
          .ta-call { display: none; }
        }
        @media (max-width: 1200px) {
          .ta-topbar-note { display: none; }
          .ta-topbar-inner { justify-content: flex-end; }
          .ta-link { padding: 10px 10px; font-size: 13px; letter-spacing: 0.08em; }
          .ta-link::after { left: 10px; right: 10px; }
          .ta-cta { padding: 11px 18px; font-size: 13px; }
        }
        @media (max-width: 1080px) {
          .ta-topbar { display: none; }
          .ta-links, .ta-actions { display: none; }
          .ta-burger { display: block; }
          .ta-container { padding: 0 20px; }
          .ta-logo-img { --logo-h: 91px; }
          .ta-header.is-scrolled .ta-logo-img { --logo-h: 81px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ta-header *, .ta-header *::after { transition: none !important; }
        }
      `}</style>
    </header>
  );
}
