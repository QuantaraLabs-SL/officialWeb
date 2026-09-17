"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function BlogCtaSection() {
  return (
    <section className="py-12 pb-20 bg-[#FAF8FF]">
      <div className="page-wrapper max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-12 lg:p-12 bg-[#F2F8FF] border border-[#E2E8F0] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs"
        >
          <div className="max-w-2xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00609A]" />
              <span
                className="text-[12px] font-semibold text-[#00609A] tracking-wider uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                ENGINEERING CONSULTANCY & ARCHITECTURE AUDITS
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#131B2E] tracking-tight leading-tight mb-3"
              style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Have a legacy operational bottleneck slowing your team down?
            </h3>

            {/* Subtitle */}
            <p
              className="text-[15px] text-[#404751] leading-relaxed font-normal"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Book a 14-day diagnostic audit with the Quantara Labs engineering team in Malabe. We identify root
              infrastructural friction and model your migration path.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact?service=diagnostic"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[14px] shadow-sm hover:opacity-90 active:scale-95 transition-all"
              style={{
                background: "linear-gradient(168deg, #0084D1 0%, #00B894 100%)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Book a Diagnostic</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="tel:+94742198574"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E2E8F0] text-[#131B2E] font-semibold text-[14px] hover:bg-slate-50 active:scale-95 transition-all shadow-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <Phone size={14} className="text-[#00609A]" />
              <span>+94 742198574</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
