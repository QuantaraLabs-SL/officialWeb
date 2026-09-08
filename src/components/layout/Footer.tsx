import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

/* ─── Brand-safe icon stubs (lucide v1.42 removed social brand icons) ─── */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const SOLUTIONS_LINKS = [
  { label: "Business Optimization", href: "/solutions/business-optimization" },
  { label: "Software Development", href: "/solutions/software-development" },
  { label: "AI & Automation", href: "/solutions/ai-automation" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/quantara", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/company/quantara", icon: <LinkedInIcon /> },
  { label: "Twitter / X", href: "https://twitter.com/quantara", icon: <XIcon /> },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      style={{
        background: "var(--color-ink)",
        color: "var(--color-paper)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="page-wrapper">
        {/* ── Top grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 12rem), 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            {/* Wordmark */}
            <Link
              href="/"
              id="footer-logo"
              aria-label="Quantara — home"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1rem" }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  background: "var(--gradient-primary)",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                Q
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "var(--color-paper)",
                  letterSpacing: "-0.02em",
                }}
              >
                Quantara
              </span>
            </Link>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "18rem",
                marginBottom: "1.5rem",
              }}
            >
              Building intelligent software and digital experiences that drive
              measurable business results.
            </p>

            {/* Social links */}
            <div
              style={{ display: "flex", gap: "0.625rem" }}
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  id={`footer-social-${s.label.toLowerCase().split("/")[0].trim().replace(/\s+/g, "-")}`}
                  aria-label={`Follow Quantara on ${s.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                    transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                  className="footer-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Navigate
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`footer-nav-${link.label.toLowerCase()}`}
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions column */}
          <nav aria-label="Footer solutions navigation">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Solutions
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`footer-solution-${link.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + Quantara Social column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h3>
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href="mailto:hello@quantara.com"
                id="footer-email"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                className="footer-nav-link"
              >
                <Mail size={15} aria-hidden="true" />
                hello@quantara.com
              </a>
              <a
                href="tel:+15551234567"
                id="footer-phone"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                className="footer-nav-link"
              >
                <Phone size={15} aria-hidden="true" />
                +1 (555) 123-4567
              </a>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <MapPin size={15} aria-hidden="true" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                San Francisco, CA, USA
              </span>
            </address>

            {/* Quantara Social cross-link */}
            <a
              href="https://social.quantara.com"
              id="footer-quantara-social"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.625rem",
                background: "rgba(18, 167, 131, 0.12)",
                border: "1px solid rgba(18, 167, 131, 0.25)",
                color: "var(--color-teal)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              className="footer-social-chip"
            >
              <span
                aria-hidden="true"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "0.25rem",
                  background: "var(--gradient-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                }}
              >
                QS
              </span>
              Quantara Social ↗
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
            © {year} Quantara. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                className="footer-nav-link"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Inline hover styles */}
      <style>{`
        .footer-nav-link:hover  { color: var(--color-teal) !important; }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.14) !important;
          color: var(--color-paper) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }
        .footer-social-chip:hover {
          background: rgba(18, 167, 131, 0.2) !important;
          border-color: rgba(18, 167, 131, 0.4) !important;
        }
      `}</style>
    </footer>
  );
}
