"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface SolutionCardData {
  id: string;
  categoryNumber: string;
  categoryColor: string;
  title: string;
  body: string;
  bulletPoints: string[];
  linkText: string;
  href: string;
  isCoreEngine?: boolean;
  bgFill: string;
  borderColor?: string;
  iconSvg: React.ReactNode;
}

const SOLUTIONS_DATA: SolutionCardData[] = [
  {
    id: "business-optimization",
    categoryNumber: "CATEGORY 01",
    categoryColor: "#006B55", // Teal green accent
    title: "Business Optimization",
    body: "Is your operations process holding you back? We find and remove bottlenecks, then build a roadmap to leaner, more profitable workflows.",
    bulletPoints: [
      "Operational friction audits",
      "Lean workflow restructuring",
      "Unit economics & margin optimization",
    ],
    linkText: "Learn more about Optimization",
    href: "/solutions/business-optimization",
    bgFill: "#FAF8FF",
    borderColor: "#E2E8F0",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CBA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M12 18v4" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M18 12h4" />
        <path d="m16.24 7.76 2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "software-development",
    categoryNumber: "CATEGORY 02",
    categoryColor: "#00A3E0", // Light blue accent
    title: "Software Development",
    body: "Off-the-shelf software never quite fits. We build systems, websites, and apps tailored to your actual business workflows.",
    bulletPoints: [
      "Bespoke ERP & internal tooling",
      "Client & partner customer portals",
      "High-performance mobile & web apps",
    ],
    linkText: "Learn more about Software",
    href: "/solutions/software-development",
    isCoreEngine: true,
    bgFill: "#F2F8FF",
    borderColor: "#BAE6FD",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "ai-automation",
    categoryNumber: "CATEGORY 03",
    categoryColor: "#006B55",
    title: "AI & Automation",
    body: "Manual reporting, document processing, lead follow-up – we automate the repetitive so you can focus on growth.",
    bulletPoints: [
      "Automated document parsing & invoices",
      "Zero-delay lead routing & follow-up",
      "Autonomous multi-tool data syncing",
    ],
    linkText: "Learn more about Automation",
    href: "/solutions/ai-automation",
    bgFill: "#FAF8FF",
    borderColor: "#E2E8F0",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CBA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    id: "it-support",
    categoryNumber: "CATEGORY 04",
    categoryColor: "#00A3E0",
    title: "IT Support",
    body: "Proactive 24/7 technical operations, cloud infrastructure management, and rapid helpdesk support to keep your systems resilient.",
    bulletPoints: [
      "24/7 system monitoring & uptime SLA",
      "Cloud server, network & security management",
      "Rapid ticket resolution & staff helpdesk",
    ],
    linkText: "Learn more about IT Support",
    href: "/solutions/it-support",
    bgFill: "#FAF8FF",
    borderColor: "#E2E8F0",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function SolutionsArchitectureSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="solutions"
      aria-label="Our Solutions Architecture"
      className="relative w-full border-t border-[#E2E8F0] bg-white overflow-hidden py-24"
    >
      <div className="page-wrapper max-w-7xl mx-auto">
        {/* Section Header (Left-aligned to match design language) */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-14 sm:mb-16"
        >
          {/* Eyebrow */}
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#00609A]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            WHAT WE DO
          </span>

          {/* Heading 2 */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Our Solutions
          </h2>

          {/* Subtitle */}
          <p
            className="text-[17px] sm:text-[18px] text-[#404751] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            We diagnose your business problems first, then build the technology to solve them.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_DATA.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{
                backgroundColor: sol.bgFill,
                border: `1px solid ${sol.borderColor || "#E2E8F0"}`,
                boxShadow: sol.isCoreEngine
                  ? "0 10px 30px -4px rgba(0, 132, 209, 0.12)"
                  : "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
              }}
            >
              {/* "Core Engine" Floating Badge on Card 2 */}
              {sol.isCoreEngine && (
                <div
                  className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-white text-[12px] font-semibold tracking-wider shadow-sm flex items-center gap-1.5"
                  style={{
                    background: "linear-gradient(90deg, #00609A 0%, #00A3E0 100%)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Core Engine</span>
                </div>
              )}

              {/* Upper Portion */}
              <div>
                {/* Icon Container & Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-white border border-[#E2E8F0] shadow-xs shrink-0"
                  >
                    {sol.iconSvg}
                  </div>
                  <span
                    className="text-[11.5px] font-semibold tracking-[0.14em] uppercase"
                    style={{
                      color: sol.categoryColor,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {sol.categoryNumber}
                  </span>
                </div>

                {/* Card Title */}
                <h3
                  className="text-[24px] sm:text-[26px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4 group-hover:text-[#00609A] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {sol.title}
                </h3>

                {/* Body Paragraph */}
                <p
                  className="text-[14.5px] sm:text-[15px] text-[#404751] leading-relaxed mb-6 font-normal"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {sol.body}
                </p>

                {/* Bullet Points List */}
                <ul className="space-y-3 mb-8 pt-4 border-t border-slate-200/60">
                  {sol.bulletPoints.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 shrink-0 mt-0.5"
                      >
                        <path
                          d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                          fill="#00CBA8"
                        />
                      </svg>
                      <span
                        className="text-[13px] sm:text-[13.5px] text-[#131B2E] font-medium leading-tight"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-4 mt-auto border-t border-slate-200/60">
                <Link
                  href={sol.href}
                  className="inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[#00609A] hover:text-[#00A3E0] transition-colors group/link"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span>{sol.linkText}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
