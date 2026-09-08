"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

/* ─── Nav Structure ─── */
interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    children: [
      {
        label: "Business Optimization",
        href: "/solutions/business-optimization",
        description: "Streamline operations and maximise efficiency.",
      },
      {
        label: "Software Development",
        href: "/solutions/software-development",
        description: "Custom software built for scale and speed.",
      },
      {
        label: "AI & Automation",
        href: "/solutions/ai-automation",
        description: "Intelligent systems that work for you.",
      },
    ],
  },
  { label: "Quantara Social", href: "https://social.quantara.com" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

/* ─── Dropdown component ─── */
function Dropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem & { children: NonNullable<NavItem["children"]> };
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isActive = item.children.some((c) => pathname.startsWith(c.href));

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isOpen ? onClose() : onOpen();
    }
    if (e.key === "Escape") onClose();
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <button
        id="nav-solutions-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Solutions menu"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onFocus={onOpen}
        onKeyDown={handleKeyDown}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.375rem 0",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          fontWeight: 500,
          color: isActive ? "var(--color-teal)" : "var(--color-ink)",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.15s ease",
          position: "relative",
        }}
        className="nav-link-btn"
      >
        {item.label}
        <ChevronDown
          size={15}
          style={{
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        />
        {/* Active underline */}
        {isActive && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -2,
              left: 0,
              right: 0,
              height: 2,
              background: "var(--gradient-primary)",
              borderRadius: 1,
            }}
          />
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Solutions sub-menu"
          className="dropdown-panel-wrapper"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "0.75rem", // bridges the gap so the mouse doesn't leave the hover area
            zIndex: 100,
          }}
        >
          <div
            className="dropdown-panel"
            style={{
              minWidth: "16rem",
              background: "var(--color-paper)",
              border: "1px solid var(--color-line)",
              borderRadius: "0.875rem",
              boxShadow: "var(--shadow-md)",
              padding: "0.5rem",
              position: "relative",
            }}
          >
          {/* Arrow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -6,
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: 12,
              height: 12,
              background: "var(--color-paper)",
              border: "1px solid var(--color-line)",
              borderBottom: "none",
              borderRight: "none",
              borderRadius: "2px 0 0 0",
            }}
          />
          {item.children.map((child) => {
            const childActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={onClose}
                style={{
                  display: "block",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "0.5rem",
                  background: childActive
                    ? "var(--color-mist)"
                    : "transparent",
                  transition: "background 0.15s ease",
                  color: "inherit",
                }}
                className="dropdown-item"
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: childActive
                      ? "var(--color-teal)"
                      : "var(--color-ink)",
                    marginBottom: "0.125rem",
                  }}
                >
                  {child.label}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    color: "var(--color-slate)",
                    lineHeight: 1.4,
                  }}
                >
                  {child.description}
                </span>
              </Link>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Header ─── */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for elevated shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Trap focus inside mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown = useCallback(() => setDesktopDropdownOpen(true), []);
  const closeDropdown = useCallback(() => setDesktopDropdownOpen(false), []);

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        id="site-header"
        role="banner"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: "var(--header-height)",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-line)",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
          transition: "box-shadow 0.25s ease",
        }}
      >
        <div
          className="page-wrapper"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Wordmark / Logo ── */}
          <Link
            href="/"
            id="site-logo"
            aria-label="Quantara — home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* Gradient icon mark */}
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
                lineHeight: 1,
                letterSpacing: "-0.03em",
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
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Quantara
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            id="desktop-nav"
            aria-label="Primary navigation"
            style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <Dropdown
                    key={item.label}
                    item={item as NavItem & { children: NonNullable<NavItem["children"]> }}
                    isOpen={desktopDropdownOpen}
                    onOpen={openDropdown}
                    onClose={closeDropdown}
                  />
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : !!item.href && pathname.startsWith(item.href);
              const isExternal = item.href?.startsWith("http");

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-current={isActive ? "page" : undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  style={{
                    position: "relative",
                    padding: "0.375rem 0.625rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: isActive ? "var(--color-teal)" : "var(--color-ink)",
                    textDecoration: "none",
                    borderRadius: "0.375rem",
                    transition: "color 0.15s ease, background 0.15s ease",
                  }}
                  className="nav-link"
                >
                  {item.label}
                  {/* Active underline */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "0.625rem",
                        right: "0.625rem",
                        height: 2,
                        background: "var(--gradient-primary)",
                        borderRadius: 1,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              id="nav-cta"
              aria-label="Get in touch"
              style={{
                marginLeft: "0.75rem",
                padding: "0.4375rem 1.125rem",
                background: "var(--gradient-primary)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "opacity 0.15s ease, transform 0.15s ease",
                letterSpacing: "-0.01em",
              }}
              className="nav-cta-btn"
            >
              Get in Touch
            </Link>
          </nav>

          {/* ── Hamburger (Mobile) ── */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "0.5rem",
              background: "transparent",
              border: "1px solid var(--color-line)",
              color: "var(--color-ink)",
              cursor: "pointer",
              transition: "background 0.15s ease",
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-menu show-mobile"
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: "var(--color-paper)",
            overflowY: "auto",
            borderTop: "1px solid var(--color-line)",
            padding: "1.25rem 1.5rem 2rem",
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.label}>
                      <button
                        aria-expanded={mobileDropdownOpen}
                        aria-controls="mobile-solutions-submenu"
                        onClick={() => setMobileDropdownOpen((v) => !v)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.875rem 1rem",
                          borderRadius: "0.625rem",
                          background: mobileDropdownOpen ? "var(--color-mist)" : "transparent",
                          border: "none",
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                          fontSize: "1.0625rem",
                          color: "var(--color-ink)",
                          cursor: "pointer",
                          transition: "background 0.15s ease",
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          style={{
                            transition: "transform 0.2s ease",
                            transform: mobileDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            color: "var(--color-slate)",
                          }}
                          aria-hidden="true"
                        />
                      </button>

                      {mobileDropdownOpen && (
                        <ul
                          id="mobile-solutions-submenu"
                          style={{
                            listStyle: "none",
                            margin: "0.25rem 0 0.25rem 0.75rem",
                            paddingLeft: "0.875rem",
                            borderLeft: "2px solid var(--color-line)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.125rem",
                          }}
                        >
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                  display: "block",
                                  padding: "0.625rem 0.75rem",
                                  borderRadius: "0.5rem",
                                  color: "var(--color-ink)",
                                  textDecoration: "none",
                                }}
                              >
                                <span style={{
                                  display: "block",
                                  fontFamily: "var(--font-display)",
                                  fontWeight: 600,
                                  fontSize: "0.9375rem",
                                  marginBottom: "0.125rem",
                                }}>
                                  {child.label}
                                </span>
                                <span style={{ fontSize: "0.8125rem", color: "var(--color-slate)" }}>
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                const isExternal = item.href?.startsWith("http");
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "/"}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.875rem 1rem",
                        borderRadius: "0.625rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "1.0625rem",
                        color: "var(--color-ink)",
                        textDecoration: "none",
                        transition: "background 0.15s ease",
                      }}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-line)" }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "0.875rem 1.5rem",
                  background: "var(--gradient-primary)",
                  color: "var(--color-paper)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Inline responsive styles */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none !important; }

        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }

        .nav-link:hover {
          color: var(--color-teal) !important;
          background: var(--color-mist);
        }
        .nav-link-btn:hover {
          color: var(--color-teal) !important;
        }
        .dropdown-item:hover {
          background: var(--color-mist) !important;
        }
        .nav-cta-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .mobile-nav-link:hover {
          background: var(--color-mist) !important;
        }
      `}</style>
    </>
  );
}
