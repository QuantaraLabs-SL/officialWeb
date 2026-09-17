"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "duration",
    question: "How long does a Business Diagnostic take?",
    answer:
      "Our end-to-end diagnostic audit typically completes within 5 business days. During this window, we map your current operating workflows, interview key team stakeholders, inspect existing data silos, and deliver an actionable architecture blueprint detailing your highest-leverage optimization roadmap.",
  },
  {
    id: "integration",
    question: "Can you integrate with our current Excel, WhatsApp, or accounting software?",
    answer:
      "Absolutely. We build flexible sync engines and automated middleware that connect directly into WhatsApp Business API, Excel/Google Sheets, legacy SQL databases, ERP systems, and cloud CRMs so your team doesn't have to discard familiar tools overnight.",
  },
  {
    id: "ip-ownership",
    question: "Who owns the intellectual property (IP) of the software you build?",
    answer:
      "You do, 100%. All custom code, database architectures, deployment configurations, and system IP engineered by Quantara Labs are fully transferred to your company upon completion with zero recurring vendor lock-in or per-seat license taxes.",
  },
  {
    id: "location",
    question: "Where is the Quantara Labs engineering team based?",
    answer:
      "Our core technical engineering hub is headquartered in Malabe, Western Province, Sri Lanka, operating in close coordination with global technology partners and distributed client teams across Singapore, Dubai, and the Asia-Pacific region.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("duration");
  const prefersReduced = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full border-t border-[#E2E8F0] bg-white overflow-hidden py-24"
    >
      <div className="page-wrapper max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-12 sm:mb-14"
        >
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.14em] uppercase mb-3 text-[#00609A]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            CLARITY FIRST
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-3"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Frequently Asked Questions
          </h2>

          <p
            className="text-[15px] sm:text-[16px] text-[#404751] leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Everything you need to know about partnering with Quantara Labs.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-[#FAF8FF] border border-[#E2E8F0] overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                >
                  <span
                    className="text-[17px] sm:text-[19px] font-semibold text-[#131B2E] tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-[#E2E8F0] text-[#00609A] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
                      animate={prefersReduced ? {} : { height: "auto", opacity: 1 }}
                      exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[14.5px] sm:text-[15px] text-[#404751] leading-relaxed border-t border-slate-200/50 mt-1 pt-4 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
