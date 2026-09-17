"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface CaseStudyItem {
  id: string;
  categoryTag: string;
  industryTag: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  highlight: string;
  categories: string[];
  isEnterpriseTier?: boolean;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "supply-chain",
    categoryTag: "Automation",
    industryTag: "Logistics & APAC Telemetry",
    title: "Automated Supply Chain & Logistics Engine",
    description:
      "Eliminated manual WhatsApp and spreadsheet tracking by building a unified logistics broker with OCR manifest parsing and live route optimization.",
    stats: [
      { value: "84%", label: "Latency Cut" },
      { value: "0", label: "Entry Errors" },
      { value: "3.2x", label: "Dispatch Vel." },
    ],
    highlight: "Full IP Transferred",
    categories: ["all", "automation", "optimization"],
  },
  {
    id: "financial-portal",
    categoryTag: "Software Dev",
    industryTag: "FinTech & Wealth Management",
    title: "Omnichannel Financial Portal & KYC Engine",
    description:
      "Scaled client onboarding for an institutional advisory firm via biometric verification, custom encrypted AES-256 document vaults, and automated compliance routing.",
    stats: [
      { value: "50%", label: "Intake Time" },
      { value: "99.9%", label: "Audit Compl." },
      { value: "15+ hrs", label: "Saved / Adv." },
    ],
    highlight: "Bank-Grade AES",
    categories: ["all", "software", "optimization"],
  },
  {
    id: "commerce-erp",
    categoryTag: "Systems Architecture",
    industryTag: "Retail & D2C",
    title: "Multi-Vendor Commerce & ERP Sync Engine",
    isEnterpriseTier: true,
    description:
      "Engineered sub-100ms multi-warehouse inventory synchronization linking Shopify, custom ERP nodes, and automated supplier replenishment workflows.",
    stats: [
      { value: "99.8%", label: "Accuracy" },
      { value: "-42%", label: "Stockouts" },
      { value: "$180k", label: "Cap. Unlocked" },
    ],
    highlight: "Real-time Telemetry",
    categories: ["all", "software", "optimization"],
  },
  {
    id: "ai-support",
    categoryTag: "Agentic Workflows",
    industryTag: "AI & Automation",
    title: "Autonomous AI Support & Carrier Triage Agent",
    description:
      "Deployed autonomous multi-agent pipeline connected to carrier APIs and warehouse nodes, deflecting tier-1 tickets and auto-resolving order status inquiries.",
    stats: [
      { value: "60%", label: "Auto-Deflect" },
      { value: "<1.5s", label: "Response" },
      { value: "35+ hrs", label: "Saved / Week" },
    ],
    highlight: "Autonomous Node",
    categories: ["all", "automation"],
  },
];

const TABS = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "AI & Automation" },
  { id: "software", label: "Software Development" },
  { id: "optimization", label: "Operational Optimization" },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const prefersReduced = useReducedMotion();

  const filteredStudies = CASE_STUDIES.filter((study) =>
    study.categories.includes(activeTab)
  );

  return (
    <section
      id="work"
      aria-label="Proven Impact: Case Studies & Client Work"
      className="relative w-full border-t border-[#E2E8F0] bg-white overflow-hidden py-24"
    >
      <div className="page-wrapper max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-12"
        >
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#00609A]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            PROVEN IMPACT // CASE STUDIES &amp; CLIENT WORK
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Engineering Tangible Business Results
          </h2>

          <p
            className="text-[17px] sm:text-[18px] text-[#404751] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Explore how we diagnosed operational bottlenecks, engineered custom software, and automated core workflows for industry leaders.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-2 border-b border-slate-100">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-[13px] sm:text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#00609A] text-white shadow-sm"
                    : "bg-slate-100 text-[#404751] hover:bg-slate-200/80 hover:text-[#131B2E]"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2x2 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
                animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
                exit={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col justify-between bg-[#FAF8FF] rounded-2xl p-7 sm:p-8 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 group"
              >
                {/* Enterprise Tier Badge if present */}
                {study.isEnterpriseTier && (
                  <div
                    className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-white text-[11.5px] font-semibold tracking-wider shadow-sm flex items-center gap-1.5"
                    style={{
                      background: "linear-gradient(90deg, #0084D1 0%, #00B894 100%)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <Sparkles size={13} className="text-white" />
                    <span>Enterprise Tier</span>
                  </div>
                )}

                <div>
                  {/* Category & Industry Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-semibold tracking-wide uppercase bg-white border border-[#E2E8F0] text-[#00609A]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {study.categoryTag}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span
                      className="text-[12.5px] font-medium text-[#707882]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {study.industryTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[21px] sm:text-[23px] font-bold text-[#131B2E] tracking-tight leading-[1.25] mb-3 group-hover:text-[#00609A] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                  >
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[14px] sm:text-[14.5px] text-[#404751] leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {study.description}
                  </p>

                  {/* 3 Metric Stat Highlights */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] mb-6">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col text-center">
                        <span
                          className="text-[20px] sm:text-[22px] font-black text-[#131B2E] leading-none mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#00609A] to-[#00CBA8]"
                          style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                        >
                          {stat.value}
                        </span>
                        <span
                          className="text-[11.5px] text-[#707882] font-medium leading-tight"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link & Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 mt-auto">
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#006B55]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <CheckCircle2 size={14} className="text-[#00CBA8]" />
                    {study.highlight}
                  </span>

                  <Link
                    href={`/work?study=${study.id}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#00609A] hover:text-[#00A3E0] transition-colors group/link"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-2xl bg-[#FAF8FF] border border-[#E2E8F0] shadow-xs text-left"
        >
          <div className="max-w-2xl">
            <h4
              className="text-[20px] sm:text-[22px] font-bold text-[#131B2E] tracking-tight mb-2"
              style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Have a complex workflow or legacy bottleneck?
            </h4>
            <p
              className="text-[14px] sm:text-[14.5px] text-[#404751] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              We can diagnose your systems and deliver an architecture specification in under 5 business days.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact?service=diagnostic"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-[13.5px] font-semibold shadow-[0_4px_16px_rgba(0,96,154,0.25)] hover:brightness-105 active:scale-95 transition-all"
              style={{
                background: "linear-gradient(90deg, #00609A 0%, #00A3E0 100%)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Start Diagnostic Audit
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-[#E2E8F0] text-[#131B2E] text-[13.5px] font-semibold hover:bg-slate-50 active:scale-95 transition-all"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
