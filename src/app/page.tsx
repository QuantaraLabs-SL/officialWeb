"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroCanvas from "@/components/HeroCanvas";
import ProcessSection from "@/components/ProcessSection";
import JourneySection from "@/components/JourneySection";

/* ══════════════════════════════════════
   Framer Motion variants
══════════════════════════════════════ */

/** Tagline: fades in from below, slightly */
const taglineVariant: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

/** Headline: slides up from 40px */
const headlineVariant: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

/** Sub-line: fades in */
const sublineVariant: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: 0.52, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

/** CTAs: fade + slight scale */
const ctaVariant: Variants = {
  hidden:  { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: 0.72, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

/** Scroll cue: bounces */
const scrollCueVariant: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 1.2 },
  },
};

/* ══════════════════════════════════════
   Feature section variants (scroll)
══════════════════════════════════════ */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.11,
      ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
    },
  }),
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ══════════════════════════════════════
   Feature cards
══════════════════════════════════════ */
const solutions = [
  {
    title: "Business Optimization",
    href: "/solutions/business-optimization",
    body: "Is your operations process holding you back? We find and remove bottlenecks, then build a roadmap to leaner, more profitable workflows.",
    gradient: "from-[var(--color-blue)] to-[var(--color-teal)]",
  },
  {
    title: "Software Development",
    href: "/solutions/software-development",
    body: "Off-the-shelf software never quite fits. We build systems, websites, and apps tailored to your actual business workflows.",
    gradient: "from-[var(--color-teal)] to-[var(--color-blue)]",
  },
  {
    title: "AI & Automation",
    href: "/solutions/ai-automation",
    body: "Manual reporting, document processing, lead follow-up – we automate the repetitive so you can focus on growth.",
    gradient: "from-[var(--color-blue)] via-[var(--color-teal)] to-[var(--color-blue)]",
  },
];


/* ══════════════════════════════════════
   Scroll-to-process helper
══════════════════════════════════════ */
function scrollToProcess(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = document.getElementById("process");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ══════════════════════════════════════
   Page component
══════════════════════════════════════ */
export default function Home() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Hero"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight: "100svh",
          overflow: "hidden",
          /* Dark navy base with radial blue-teal glow */
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(27,75,143,0.55) 0%, rgba(18,167,131,0.18) 55%, transparent 80%), #0B1525",
        }}
      >
        {/* Three.js particle network */}
        <HeroCanvas />

        {/* Subtle bottom vignette to blend into page */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            height: "12rem",
            background:
              "linear-gradient(to bottom, transparent, var(--color-mist))",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* ── Content column ── */}
        <div
          className="page-wrapper"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "calc(var(--header-height) + 5rem)",
            paddingBottom: "8rem",
          }}
        >
          {/* Max-width cap for the copy block */}
          <div style={{ maxWidth: "44rem" }}>

            {/* Tagline */}
            <motion.p
              variants={prefersReduced ? {} : taglineVariant}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    500,
                fontSize:      "0.9375rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color:         "rgba(18,167,131,0.9)",   /* teal */
                marginBottom:  "1.25rem",
              }}
            >
              Business, optimized.
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={prefersReduced ? {} : headlineVariant}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily:   "var(--font-display)",
                fontSize:     "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight:   700,
                lineHeight:   1.1,
                letterSpacing: "-0.03em",
                color:        "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              We find what&apos;s slowing{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7ab4ff 0%, #12A783 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your business
              </span>{" "}
              down, then build the technology that fixes it.
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              variants={prefersReduced ? {} : sublineVariant}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily:   "var(--font-sans)",
                fontSize:     "clamp(1rem, 2.2vw, 1.2rem)",
                fontWeight:   400,
                lineHeight:   1.65,
                color:        "rgba(255,255,255,0.55)",
                marginBottom: "2.5rem",
                letterSpacing: "0.01em",
              }}
            >
              Build smarter.&ensp;Operate better.&ensp;Grow faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={prefersReduced ? {} : ctaVariant}
              initial="hidden"
              animate="visible"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}
            >
              {/* Primary CTA */}
              <Link href="/contact" id="hero-cta-primary" aria-label="Start with a Business Diagnostic">
                <Button
                  asChild={false}
                  variant="gradient"
                  size="lg"
                  style={{
                    paddingLeft:  "1.5rem",
                    paddingRight: "1.5rem",
                    boxShadow:    "0 4px 24px rgba(27,75,143,0.4)",
                  }}
                >
                  Start with a Business Diagnostic
                  <ArrowRight size={16} style={{ marginLeft: "0.375rem" }} aria-hidden="true" />
                </Button>
              </Link>

              {/* Secondary CTA — scrolls to #process */}
              <a
                href="#process"
                id="hero-cta-secondary"
                aria-label="See how we work — scroll to Process section"
                onClick={scrollToProcess}
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "0.375rem",
                  padding:        "0.75rem 1.5rem",
                  borderRadius:   "0.625rem",
                  fontFamily:     "var(--font-display)",
                  fontWeight:     600,
                  fontSize:       "1rem",
                  color:          "rgba(255,255,255,0.82)",
                  background:     "rgba(255,255,255,0.07)",
                  border:         "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  letterSpacing:  "-0.01em",
                  transition:     "background 0.2s ease, color 0.2s ease",
                }}
                className="hero-secondary-btn"
              >
                See how we work
                <ChevronDown size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            variants={prefersReduced ? {} : scrollCueVariant}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
            style={{
              position:     "absolute",
              bottom:       "2.5rem",
              left:         "50%",
              transform:    "translateX(-50%)",
              display:      "flex",
              flexDirection: "column",
              alignItems:   "center",
              gap:          "0.375rem",
            }}
          >
            <span
              style={{
                fontFamily:    "var(--font-sans)",
                fontSize:      "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.35)",
              }}
            >
              scroll
            </span>
            <motion.div
              animate={prefersReduced ? {} : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              style={{
                width:        1,
                height:       "2.5rem",
                background:   "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
                borderRadius: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Hover style for secondary CTA */}
        <style>{`
          .hero-secondary-btn:hover {
            background: rgba(255,255,255,0.13) !important;
            color: #fff !important;
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════ */}
      <section
        id="problem"
        className="border-t border-[var(--color-line)]"
        style={{
          background: "var(--color-blue-light)",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="page-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ maxWidth: "44rem" }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-teal)",
                marginBottom: "0.75rem",
              }}
            >
              Sound familiar?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Running a business is hard enough without fighting your own systems.
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--color-slate)",
                fontSize: "1.125rem",
                lineHeight: 1.6,
              }}
            >
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ArrowRight size={20} style={{ color: "var(--color-blue)", marginTop: "0.25rem", flexShrink: 0 }} aria-hidden="true" />
                <span>Tracking orders and operations manually across WhatsApp, Excel, and paper.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ArrowRight size={20} style={{ color: "var(--color-blue)", marginTop: "0.25rem", flexShrink: 0 }} aria-hidden="true" />
                <span>Losing track of leads and inquiries because they slip through the cracks.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ArrowRight size={20} style={{ color: "var(--color-blue)", marginTop: "0.25rem", flexShrink: 0 }} aria-hidden="true" />
                <span>No real-time visibility into what your team is doing or how the business is performing.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ArrowRight size={20} style={{ color: "var(--color-blue)", marginTop: "0.25rem", flexShrink: 0 }} aria-hidden="true" />
                <span>Outdated, legacy software that slows everyone down instead of speeding them up.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOLUTIONS
      ══════════════════════════════════════ */}
      <section id="solutions" className="border-t border-[var(--color-line)]" style={{ background: "var(--color-paper)", padding: "6rem 1.5rem" }}>
        <div className="page-wrapper max-w-6xl mx-auto">
          {/* Section header – fixed heading hierarchy */}
          <motion.div
            className="mb-12 md:mb-16"
            style={{ marginTop: "4rem", marginBottom: "4rem" }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="uppercase" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", color: "var(--color-teal)" }}>What we do</motion.span>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: 700, color: "var(--color-ink)", marginTop: "0.5rem" }}>Our Solutions</motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", marginTop: "0.75rem", maxWidth: "42rem", lineHeight: 1.6 }}>
              We diagnose your business problems first, then build the technology to solve them.
            </motion.p>
          </motion.div>

          {/* Cards grid – fully styled with accent bars, hover effects, and animated arrows */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                title: "Business Optimization",
                href: "/solutions/business-optimization",
                desc: "Is your operations process holding you back? We find and remove bottlenecks, then build a roadmap to leaner, more profitable workflows.",
                gradient: "from-blue to-teal",
              },
              {
                title: "Software Development",
                href: "/solutions/software-development",
                desc: "Off-the-shelf software never quite fits. We build systems, websites, and apps tailored to your actual business workflows.",
                gradient: "from-teal to-blue",
              },
              {
                title: "AI & Automation",
                href: "/solutions/ai-automation",
                desc: "Manual reporting, document processing, lead follow-up – we automate the repetitive so you can focus on growth.",
                gradient: "from-blue via-teal to-blue",
              },
            ].map((sol, i) => (
              <motion.div key={sol.title} variants={fadeUp} custom={i}>
                <div
                  className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ 
                    background: "rgba(232, 240, 254, 0.5)", 
                    borderRadius: "0.75rem",
                    border: "1px solid var(--color-line)",
                    minHeight: "340px"
                  }}
                >
                  {/* Colored top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${sol.gradient}`} />
                  
                  <div className="flex flex-1 flex-col transition-colors duration-300 group-hover:bg-[#E8F0FE]/80" style={{ padding: "2.5rem 2rem" }}>
                    <h3 className="transition-colors group-hover:text-blue" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-ink)", letterSpacing: "-0.01em" }}>
                      {sol.title}
                    </h3>
                    <p className="flex-1 leading-relaxed" style={{ color: "var(--color-slate)", marginTop: "1rem", fontSize: "1rem" }}>
                      {sol.desc}
                    </p>
                    <Link
                      href={sol.href}
                      className="inline-flex items-center text-sm font-semibold transition-colors hover:text-teal"
                      style={{ color: "var(--color-blue)", marginTop: "1.5rem" }}
                    >
                      Learn more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <ProcessSection />

      {/* ══════════════════════════════════════
          JOURNEY
      ══════════════════════════════════════ */}
      <JourneySection />

      {/* ══════════════════════════════════════
          QUANTARA SOCIAL CTA
      ══════════════════════════════════════ */}
      <section
        id="social-cta"
        className="px-6 text-center border-t border-[var(--color-line)]"
        style={{
          background: "var(--color-blue-light)",
          color: "var(--color-ink)",
          paddingTop: "8rem",
          paddingBottom: "8rem"
        }}
      >
        <div className="page-wrapper max-w-4xl mx-auto">
          <motion.h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "2.5rem", lineHeight: 1.2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Once we&apos;ve optimized how your business runs, Quantara Social grows what you built.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/social">
                Learn about Quantara Social
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR WORK (PLACEHOLDER)
      ══════════════════════════════════════ */}
      <section id="work" className="border-t border-[var(--color-line)]" style={{ background: "var(--color-paper)", padding: "6rem 1.5rem" }}>
        <div className="page-wrapper max-w-6xl mx-auto">
          <div className="text-center mb-16" style={{ marginTop: "4rem", marginBottom: "6rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1rem" }}>
              Our Work
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              Case studies and partner success stories are currently in development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="flex flex-col h-full rounded-xl border border-[var(--color-line)] bg-[var(--color-mist)] opacity-60"
                style={{ padding: "2rem" }}
              >
                <div className="w-full h-40 bg-[var(--color-paper)] rounded-lg mb-6 flex items-center justify-center border border-[var(--color-line)] border-dashed">
                  <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--color-slate)" }}>Partner {item}</span>
                </div>
                <div className="w-3/4 h-6 bg-[var(--color-paper)] rounded mb-4"></div>
                <div className="w-full h-4 bg-[var(--color-paper)] rounded mb-2"></div>
                <div className="w-5/6 h-4 bg-[var(--color-paper)] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        id="final-cta"
        className="px-6 text-center border-t border-[var(--color-line)]"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-paper)",
          paddingTop: "10rem",
          paddingBottom: "10rem"
        }}
      >
        <div className="page-wrapper max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-paper)", lineHeight: 1.2, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tell us how your business runs today. We&apos;ll tell you what to fix first.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Start with a Diagnostic
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </>
  );
}
