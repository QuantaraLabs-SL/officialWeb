"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  LineChart,
  Code2,
  Sparkles,
  Headphones,
  Share2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── Nav Types ─── */
interface NavSubItem {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  badge?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Business Optimization",
        href: "/solutions/business-optimization",
        description: "Diagnose bottlenecks, eliminate waste, and streamline lean operations.",
        icon: LineChart,
      },
      {
        label: "Software Development",
        href: "/solutions/software-development",
        description: "Bespoke ERPs, client portals, and mission-critical cloud software.",
        icon: Code2,
        badge: "Core Engine",
      },
      {
        label: "AI & Automation",
        href: "/solutions/ai-automation",
        description: "Intelligent document parsing, zero-delay lead routing, and autonomous agents.",
        icon: Sparkles,
      },
      {
        label: "IT Support",
        href: "/solutions/it-support",
        description: "Proactive 24/7 technical monitoring, security, and rapid cloud helpdesk.",
        icon: Headphones,
      },
      {
        label: "Quantara Social",
        href: "/social",
        description: "High-converting creative engines, distribution, and performance acquisition.",
        icon: Share2,
      },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

/* ─── Desktop Solutions Dropdown ─── */
function SolutionsDropdown({
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
  const isActive =
    pathname === "/solutions" ||
    item.children.some((c) => pathname.startsWith(c.href));

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
    <div
      ref={containerRef}
      className="relative flex items-center h-full"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        id="nav-solutions-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Solutions menu"
        onFocus={onOpen}
        onKeyDown={handleKeyDown}
        className={`group relative inline-flex items-center gap-1.5 py-1 text-[13.5px] lg:text-[15px] font-medium whitespace-nowrap transition-colors duration-150 outline-none ${isActive
          ? "text-[#0090E8] font-semibold"
          : "text-[#334155] hover:text-[#0090E8]"
          }`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.2}
          className={`transition-transform duration-200 ${isOpen
            ? "rotate-180 text-[#0090E8]"
            : isActive
              ? "text-[#0090E8]"
              : "text-[#64748B] group-hover:text-[#0090E8]"
            }`}
          aria-hidden="true"
        />

        {/* Active Indicator Underline */}
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 left-0 right-0 h-[2.5px] rounded-full bg-[#0090E8]"
          />
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Solutions menu"
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
          style={{ width: "23rem" }}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-[#E2E8F0] rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.12)] p-2.5 space-y-1">
            {item.children.map((child) => {
              const Icon = child.icon;
              const childActive = pathname === child.href;

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  onClick={onClose}
                  className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${childActive
                    ? "bg-[#F2F8FF] text-[#0084D1]"
                    : "hover:bg-[#F8FAFC] text-[#0F172A]"
                    }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${childActive
                      ? "bg-[#0084D1] text-white"
                      : "bg-[#F0FDF4] text-[#00B894] group-hover:bg-[#0084D1] group-hover:text-white"
                      }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[14px] font-semibold text-[#0F172A] group-hover:text-[#0084D1] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {child.label}
                      </span>
                      {child.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#0084D1]/10 text-[#0084D1] rounded-full">
                          {child.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                      {child.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Header Component ─── */
export default function Header() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = useCallback(() => setDesktopDropdownOpen(true), []);
  const closeDropdown = useCallback(() => setDesktopDropdownOpen(false), []);

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#0084D1] focus:shadow-md focus:rounded-md font-medium"
      >
        Skip to content
      </a>

      {/* Main Header Bar */}
      <header
        id="site-header"
        role="banner"
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled
          ? "bg-[#FAF9FE]/98 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06),0_1px_2px_rgba(15,23,42,0.04)]"
          : "bg-[#FAF9FE]/95"
          } backdrop-blur-md border-b border-[#E2E8F0]/80`}
        style={{ height: "var(--header-height, 5rem)" }}
      >
        <div className="max-w-7xl h-full mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">

          {/* ── Brand Logo Lockup (Matches UI Screenshot) ── */}
          <Link
            href="/"
            id="site-logo"
            aria-label="Quantara Labs — home"
            className="flex items-center gap-2.5 text-decoration-none group shrink-0"
          >
            {/* 40x40 Rounded Squircle Emblem Badge */}
            <motion.div
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0"
              initial={shouldReduceMotion ? false : { rotate: -360, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: 6 }}
            >
              <img
                src="/images/quantara-emblem.png"
                alt="Quantara Labs Emblem"
                className="w-full h-full object-contain drop-shadow-xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/android-chrome-192x192.png";
                }}
              />
            </motion.div>

            {/* Wordmark: QuantaraLabs with reveal animation from left to right */}
            <div className="overflow-hidden flex items-baseline tracking-tight py-0.5">
              <motion.div
                className="flex items-baseline tracking-tight whitespace-nowrap"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        x: -30,
                        opacity: 0,
                        clipPath: "inset(0 100% 0 0)",
                      }
                }
                animate={{
                  x: 0,
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span
                  className="text-[19px] lg:text-[22px] font-bold text-[#0F172A] tracking-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Quantara
                </span>
                <span
                  className="text-[19px] lg:text-[22px] font-bold text-[#0090E8] tracking-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Labs
                </span>
              </motion.div>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav
            id="desktop-nav"
            aria-label="Primary navigation"
            className="hidden md:flex flex-1 min-w-0 items-center justify-center gap-3 lg:gap-8 xl:gap-10 h-full"
          >
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <SolutionsDropdown
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

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex items-center py-1 text-[13.5px] lg:text-[15px] font-medium whitespace-nowrap transition-colors duration-150 ${isActive
                    ? "text-[#0090E8] font-semibold"
                    : "text-[#334155] hover:text-[#0090E8]"
                    }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span>{item.label}</span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2.5 left-0 right-0 h-[2.5px] rounded-full bg-[#0090E8]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Trailing Action Cluster (WhatsApp + CTA) ── */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 shrink-0">
            {/* WhatsApp Quick Action Button */}
            <a
              href="https://wa.me/94742198574"
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              aria-label="Chat with Quantara Labs on WhatsApp"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 hover:scale-105 active:scale-95 shadow-[0_2px_8px_rgba(37,211,102,0.25)] hover:shadow-[0_4px_12px_rgba(37,211,102,0.35)] overflow-hidden"
              title="Chat with us on WhatsApp (+94 742198574)"
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-full h-full object-cover"
              />
            </a>

            {/* "Book a Diagnostic" Pill CTA Button */}
            <Link
              href="/contact?service=diagnostic"
              id="header-book-diagnostic-cta"
              className="group inline-flex items-center gap-1.5 lg:gap-2 px-3.5 lg:px-6 py-2 lg:py-2.5 rounded-full text-white font-semibold text-[13px] lg:text-[14.5px] whitespace-nowrap bg-[linear-gradient(90deg,#0084D1_0%,#00B894_100%)] hover:bg-[linear-gradient(90deg,#0069A8_0%,#009B7C_100%)] shadow-[0_2px_10px_rgba(0,184,148,0.25)] hover:shadow-[0_6px_20px_rgba(0,132,209,0.45)] active:scale-[0.98] transition-all duration-150"
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Book a Diagnostic</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* ── Mobile Hamburger Toggle ── */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Mobile WhatsApp Quick Action */}
            <a
              href="https://wa.me/94742198574"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden shadow-xs"
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-full h-full object-cover"
              />
            </a>

            <button
              id="mobile-menu-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#E2E8F0] bg-white text-[#131B2E] shadow-sm hover:bg-[#F8FAFC] transition-colors"
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Sheet ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-x-0 bottom-0 z-40 bg-[#FAF8FF]/98 backdrop-blur-2xl border-t border-[#E2E8F0] overflow-y-auto px-5 py-6 flex flex-col justify-between md:hidden"
          style={{ top: "var(--header-height, 5rem)" }}
        >
          <nav aria-label="Mobile navigation" className="space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="py-1">
                    <button
                      aria-expanded={mobileDropdownOpen}
                      aria-controls="mobile-solutions-submenu"
                      onClick={() => setMobileDropdownOpen((v) => !v)}
                      className="w-full flex items-center justify-between p-3 rounded-xl text-[16px] font-semibold text-[#131B2E] hover:bg-white/80 transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#64748B] transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180 text-[#0084D1]" : ""
                          }`}
                        aria-hidden="true"
                      />
                    </button>

                    {mobileDropdownOpen && (
                      <div
                        id="mobile-solutions-submenu"
                        className="mt-1 ml-2 pl-3 border-l-2 border-[#E2E8F0] space-y-1"
                      >
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          const childActive = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-start gap-2.5 p-2.5 rounded-lg transition-colors ${childActive ? "bg-white text-[#0084D1]" : "text-[#1E293B] hover:bg-white/60"
                                }`}
                            >
                              <div className="w-7 h-7 rounded-md bg-[#F0FDF4] text-[#00B894] flex items-center justify-center shrink-0 mt-0.5">
                                <Icon size={15} />
                              </div>
                              <div>
                                <div className="text-[14px] font-semibold flex items-center gap-1.5">
                                  <span>{child.label}</span>
                                  {child.badge && (
                                    <span className="text-[9px] px-1 py-0.2 bg-[#0084D1]/10 text-[#0084D1] rounded font-medium">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : !!item.href && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  onClick={() => setMobileOpen(false)}
                  className={`block p-3 rounded-xl text-[16px] font-semibold transition-colors ${isActive
                    ? "bg-white text-[#0084D1] shadow-xs"
                    : "text-[#131B2E] hover:bg-white/80"
                    }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 mt-6 border-t border-[#E2E8F0] space-y-3">
            {/* WhatsApp Contact Bar */}
            <a
              href="https://wa.me/94742198574"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl bg-white border border-[#E2E8F0] text-[#1E293B] font-medium text-[14px] shadow-xs hover:bg-[#F8FAFC]"
            >
              <img src="/images/whatsapp.png" alt="" className="w-5 h-5" />
              <span>Direct WhatsApp: +94 742198574</span>
            </a>

            {/* Book a Diagnostic CTA */}
            <Link
              href="/contact?service=diagnostic"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full text-white font-semibold text-[15px] shadow-md active:scale-98 transition-all"
              style={{
                background: "linear-gradient(168deg, #0084D1 0%, #00B894 100%)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Book a Diagnostic</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
