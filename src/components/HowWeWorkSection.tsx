"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface StepData {
  number: number;
  numberColor: string;
  title: string;
  desc: string;
  tag: string;
}

const STEPS: StepData[] = [
  {
    number: 1,
    numberColor: "#00609A",
    title: "Understand",
    desc: "We map your current operations, identify bottlenecks, and quantify the real cost of inefficiency.",
    tag: "Diagnostic Blueprint",
  },
  {
    number: 2,
    numberColor: "#00A3E0",
    title: "Optimize",
    desc: "We design a leaner workflow, stripping away waste without cutting what works.",
    tag: "Lean Flow Schema",
  },
  {
    number: 3,
    numberColor: "#00CBA8",
    title: "Automate",
    desc: "We build the automation that handles repetitive tasks, freeing your team for higher-value work.",
    tag: "Pipeline Integration",
  },
  {
    number: 4,
    numberColor: "#00609A",
    title: "Build",
    desc: "We develop custom software that fits your business, not the other way around.",
    tag: "Production Release",
  },
  {
    number: 5,
    numberColor: "#006B55",
    title: "Scale",
    desc: "We put systems in place that grow with you, so you never outgrow your tools.",
    tag: "Resilience Support",
  },
];

export default function HowWeWorkSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="process"
      aria-label="How We Work: The 5-Step Method"
      className="relative w-full border-t border-[#E2E8F0] overflow-hidden py-24"
      style={{ backgroundColor: "#FAF8FF" }}
    >
      <div className="page-wrapper max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-left max-w-3xl mb-14 sm:mb-16"
        >
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#00609A]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            OUR PROCESS
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            How We Work
          </h2>

          <p
            className="text-[15px] sm:text-[16px] text-[#404751] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            A predictable, transparent engineering framework designed to deliver concrete ROI without disruption to daily business.
          </p>
        </motion.div>

        {/* 5-Step Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Step Number Badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[18px] mb-6 border border-slate-100"
                  style={{
                    backgroundColor: "#F2F8FF",
                    color: step.numberColor,
                    fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                  }}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3
                  className="text-[20px] font-semibold text-[#131B2E] tracking-tight mb-3 group-hover:text-[#00609A] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className="text-[13px] text-[#404751] leading-relaxed font-normal mb-6"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-3.5 border-t border-[#E2E8F0]">
                <span
                  className="text-[12px] font-medium text-[#707882]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
