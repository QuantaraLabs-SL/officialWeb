"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Layers, Cpu, Share2 } from "lucide-react";

export default function EcosystemSynergySection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="ecosystem"
      aria-label="Ecosystem Synergy: Quantara Labs and Quantara Social"
      className="relative w-full overflow-hidden py-24 text-white"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 72% 18%, rgba(0,163,224,0.18) 0%, transparent 58%), " +
          "radial-gradient(ellipse 70% 55% at 18% 82%, rgba(0,203,168,0.16) 0%, transparent 55%), " +
          "linear-gradient(160deg, #060D17 0%, #081525 50%, #060F1A 100%)",
      }}
    >
      {/* Animated ambient glow orbs — hardware-accelerated, optimized blur & composite */}

      {/* Teal orb — top-right */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -right-56 w-[550px] h-[550px] rounded-full pointer-events-none transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,203,168,0.45) 0%, rgba(0,203,168,0.2) 35%, rgba(0,203,168,0.05) 60%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={
          prefersReduced
            ? {}
            : {
                x: [0, -180, 0],
                y: [0, 90, 0],
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.9, 0.6],
              }
        }
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Blue orb — bottom-left */}
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -left-56 w-[550px] h-[550px] rounded-full pointer-events-none transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,132,209,0.45) 0%, rgba(0,132,209,0.2) 35%, rgba(0,132,209,0.05) 60%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={
          prefersReduced
            ? {}
            : {
                x: [0, 180, 0],
                y: [0, -90, 0],
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.9, 0.6],
              }
        }
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="page-wrapper max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Heading, Subtitle & Dual Actions) */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit mb-6">
              <Layers size={14} className="text-[#00A3E0]" />
              <span
                className="text-[12px] font-semibold text-[#00A3E0] tracking-[0.14em] uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Ecosystem Synergy
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] mb-6"
              style={{
                fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                color: "#FFFFFF",
              }}
            >
              Once we&apos;ve optimized how your business runs,{" "}
              <span className="bg-gradient-to-r from-[#00CBA8] to-[#00A3E0] bg-clip-text text-transparent">
                Quantara Social
              </span>{" "}
              accelerates your market reach.
            </h2>

            {/* Subtitle */}
            <p
              className="text-[16px] sm:text-[18px] text-[#E2E8F0] leading-relaxed mb-10 max-w-2xl font-normal"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Software fixes internal friction. Strategic distribution drives explosive acquisition. Together,{" "}
              <strong className="text-[#00A3E0] font-semibold">Quantara Labs</strong> and{" "}
              <strong className="text-[#00CBA8] font-semibold">Quantara Social</strong> build an unstoppable growth flywheel for your company.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/social"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#060D17] font-semibold text-[14px] shadow-sm hover:bg-slate-100 active:scale-95 transition-all group"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span>Explore Quantara Social</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact?service=diagnostic"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-[14px] hover:bg-white/10 active:scale-95 transition-all"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Full Operational Audit
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Glassmorphic Comparison / Synergy Card) */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            {/* Quantara Labs Node */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00609A]/30 border border-[#00A3E0]/40 flex items-center justify-center shrink-0">
                <Cpu size={22} className="text-[#00A3E0]" />
              </div>
              <div>
                <h3
                  className="text-[20px] font-bold tracking-tight mb-2"
                  style={{
                    fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                    color: "#FFFFFF",
                  }}
                >
                  Quantara Labs
                </h3>
                <p
                  className="text-[13.5px] text-[#CBD5E1] leading-relaxed font-normal"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Operational diagnostics, custom internal software, cloud databases, and automation infrastructure.
                </p>
              </div>
            </div>

            {/* Inter-node divider */}
            <div className="my-7 border-t border-white/[0.1]" />

            {/* Quantara Social Node */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00CBA8]/20 border border-[#00CBA8]/40 flex items-center justify-center shrink-0">
                <Share2 size={22} className="text-[#00CBA8]" />
              </div>
              <div>
                <h3
                  className="text-[20px] font-bold tracking-tight mb-2"
                  style={{
                    fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                    color: "#FFFFFF",
                  }}
                >
                  Quantara Social
                </h3>
                <p
                  className="text-[13.5px] text-[#CBD5E1] leading-relaxed font-normal"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Performance acquisition campaigns, social architecture, high-converting creative engines, and conversion rate optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
