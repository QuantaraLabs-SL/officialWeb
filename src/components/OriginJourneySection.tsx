"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface JourneyPillar {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
}

const PILLARS: JourneyPillar[] = [
  {
    tag: "ORIGIN",
    title: "The Starting Point",
    description:
      "Three people, one shared observation: too many good businesses are held back by operational friction that nobody has the time or engineering leverage to fix.",
  },
  {
    tag: "VISION",
    title: "The Idea & The Team",
    description:
      "Technology & strategy, growth & marketing, and financial backing unified under one roof as Quantara Labs and Quantara Social.",
  },
  {
    tag: "EXECUTION",
    title: "The Working Philosophy",
    description:
      "Understand. Optimize. Automate. Build. Scale. became our core delivery standard, powering companies across Asia and global hubs.",
  },
];

export default function OriginJourneySection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="journey"
      aria-label="Our Journey & Origin"
      className="relative w-full border-t border-[#E2E8F0] bg-white overflow-hidden py-24"
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
            OUR JOURNEY
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            How Quantara Labs came to be
          </h2>

          <p
            className="text-[17px] sm:text-[18px] text-[#404751] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Instead of another dev shop or another marketing agency, we built an engineering company that diagnoses the real operational problem first.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((item, index) => (
            <motion.div
              key={item.tag}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-start bg-[#FAF8FF] rounded-2xl p-8 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Pillar Tag */}
              <span
                className="text-[12px] font-bold tracking-[0.14em] text-[#00609A] uppercase mb-4 inline-block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.tag}
              </span>

              {/* Title */}
              <h3
                className="text-[20px] font-semibold text-[#131B2E] tracking-tight mb-3"
                style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] text-[#404751] leading-relaxed font-normal"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
