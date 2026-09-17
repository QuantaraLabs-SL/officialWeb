"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight, SlidersHorizontal, LayoutGrid } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import MetricsBanner from "@/components/MetricsBanner";
import PainPointGridSection from "@/components/PainPointGridSection";
import SolutionsArchitectureSection from "@/components/SolutionsArchitectureSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import OriginJourneySection from "@/components/OriginJourneySection";
import EcosystemSynergySection from "@/components/EcosystemSynergySection";
import FaqSection from "@/components/FaqSection";

/* ══════════════════════════════════════
   Bottleneck Options (Hero Interactive)
══════════════════════════════════════ */
const BOTTLENECK_OPTIONS = [
  {
    icon: "⚠️",
    label: "Tracking orders across WhatsApp & Excel",
    href: "/contact?service=diagnostic&bottleneck=Tracking+orders+across+WhatsApp+%26+Excel",
  },
  {
    icon: "📉",
    label: "Losing leads and inquiries between teams",
    href: "/contact?service=diagnostic&bottleneck=Losing+leads+and+inquiries+between+teams",
  },
  {
    icon: "⏳",
    label: "Drowning in manual reporting & paperwork",
    href: "/contact?service=diagnostic&bottleneck=Drowning+in+manual+reporting+%26+paperwork",
  },
  {
    icon: "⚡",
    label: "Need custom software tailored to our exact workflow",
    href: "/contact?service=diagnostic&bottleneck=Need+custom+software+tailored+to+our+exact+workflow",
  },
];

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
        className="relative flex flex-col items-center justify-center min-h-[92svh] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 85% 35%, rgba(0, 184, 148, 0.26) 0%, rgba(0, 132, 209, 0.15) 45%, transparent 70%), radial-gradient(circle at 10% 25%, rgba(0, 132, 209, 0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 50% 95%, rgba(240, 244, 255, 0.85) 0%, #FFFFFF 100%), #F4F7FB",
        }}
      >
        {/* Top-left subtle ambient ring from reference UI */}
        <div
          aria-hidden="true"
          className="absolute top-12 left-10 w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-slate-300/40 pointer-events-none z-0"
        />

        {/* Three.js particle network clustered on the right half */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          style={{
            maskImage: "radial-gradient(ellipse 70% 80% at 85% 45%, black 25%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 85% 45%, black 25%, transparent 80%)",
          }}
        >
          <HeroCanvas />
        </div>

        {/* ── Main Centered Hero Content ── */}
        <div
          className="page-wrapper relative z-10 text-center flex flex-col items-center"
          style={{
            paddingTop: "calc(var(--header-height) + 0rem)",
            paddingBottom: "5.5rem",
          }}
        >
          {/* Eyebrow Pill Badge */}
          <motion.div
            variants={prefersReduced ? {} : taglineVariant}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-slate-200/90 shadow-xs backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
            <span
              className="text-[12px] sm:text-[12.5px] font-semibold text-[#0084D1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Business, Optimized
            </span>
            <span className="text-slate-300 text-xs">|</span>
            <span className="text-[12px] sm:text-[12.5px] font-medium text-slate-600">
              Operational Diagnostics &amp; Software Engineering
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={prefersReduced ? {} : headlineVariant}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0F172A] leading-[1.16] tracking-tight max-w-4xl mx-auto mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We find what&apos;s slowing your business down, then{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B6] to-[#00C29A]">
              build the
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0084D1] to-[#00A3E0]">
              technology
            </span>{" "}
            that fixes it.
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            variants={prefersReduced ? {} : sublineVariant}
            initial="hidden"
            animate="visible"
            className="text-[15px] sm:text-[17px] text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Build smarter. Operate better. Grow faster. We replace messy manual tracking,
            fragmented tools, and slow legacy software with bespoke systems and
            intelligent automation.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            variants={prefersReduced ? {} : ctaVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-11"
          >
            {/* Primary CTA */}
            <Link
              href="/contact?service=diagnostic"
              id="hero-cta-diagnostic"
              aria-label="Start Business Diagnostic"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[14.5px] shadow-[0_4px_18px_rgba(0,184,148,0.32)] hover:shadow-[0_6px_24px_rgba(0,184,148,0.42)] hover:brightness-105 active:scale-[0.98] transition-all"
              style={{
                background: "linear-gradient(90deg, #0084D1 0%, #00B894 100%)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Start Business Diagnostic</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA */}
            <a
              href="#process"
              id="hero-cta-process"
              aria-label="See how we work — scroll to Process section"
              onClick={scrollToProcess}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/95 border border-slate-200/90 text-[#0F172A] font-semibold text-[14.5px] shadow-xs hover:bg-white hover:border-slate-300 active:scale-[0.98] transition-all"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <span>See How We Work</span>
              <SlidersHorizontal size={15} className="text-slate-500" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Interactive Bottleneck Selector Card (Floating at bottom of hero) */}
          <motion.div
            variants={prefersReduced ? {} : ctaVariant}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-[0_12px_36px_rgba(15,23,42,0.06)] p-4 sm:p-5 text-left"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <LayoutGrid size={15} className="text-[#0084D1]" aria-hidden="true" />
                <span
                  className="text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase text-[#475569]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Select Your Primary Bottleneck:
                </span>
              </div>
              <span className="text-[12px] font-medium text-[#0084D1]">
                Instant diagnosis
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BOTTLENECK_OPTIONS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-[#F2F8FF] hover:border-[#0084D1]/40 transition-all text-left group"
                >
                  <span className="text-base shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] font-medium text-[#1E293B] group-hover:text-[#0084D1] transition-colors leading-snug">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          METRICS BANNER (COUNTDOWN / STATS)
      ══════════════════════════════════════ */}
      <MetricsBanner />

      {/* ══════════════════════════════════════
          THE PROBLEM / SOUND FAMILIAR? (FIGMA)
      ══════════════════════════════════════ */}
      <PainPointGridSection />

      {/* ══════════════════════════════════════
          SOLUTIONS ARCHITECTURE (FIGMA)
      ══════════════════════════════════════ */}
      <SolutionsArchitectureSection />

      {/* ══════════════════════════════════════
          HOW WE WORK: THE 5-STEP METHOD (FIGMA)
      ══════════════════════════════════════ */}
      <HowWeWorkSection />

      {/* ══════════════════════════════════════
          CASE STUDIES & CLIENT WORK (FIGMA)
      ══════════════════════════════════════ */}
      <CaseStudiesSection />

      {/* ══════════════════════════════════════
          OUR JOURNEY & STORY (FIGMA)
      ══════════════════════════════════════ */}
      <OriginJourneySection />

      {/* ══════════════════════════════════════
          ECOSYSTEM SYNERGY: LABS + SOCIAL (FIGMA)
      ══════════════════════════════════════ */}
      <EcosystemSynergySection />

      {/* ══════════════════════════════════════
          FAQ SECTION (FIGMA)
      ══════════════════════════════════════ */}
      <FaqSection />

    </>
  );
}
