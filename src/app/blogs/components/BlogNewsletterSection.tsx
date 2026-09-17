"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BlogNewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-[#FAF8FF]">
      <div className="page-wrapper max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden text-white border border-white/10"
          style={{
            background:
              "linear-gradient(175deg, rgba(6, 13, 23, 1) 0%, rgba(11, 22, 44, 1) 50%, rgba(4, 8, 14, 1) 100%)",
          }}
        >
          {/* Glowing background auras from Figma: 48:33687, 48:33688 */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 96, 154, 0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 203, 168, 0.25) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="max-w-2xl relative z-10">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
              <Mail size={13} className="text-[#00A3E0]" />
              <span
                className="text-[12px] font-semibold text-[#00A3E0] tracking-wider uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                BI-WEEKLY ARCHITECTURE BRIEFING
              </span>
            </div>

            {/* Headline */}
            <h3
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white mb-3"
              style={{
                fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                color: "#FFFFFF",
              }}
            >
              The Quantara Systems Dispatch
            </h3>

            {/* Description */}
            <p
              className="text-[15px] text-[#BFC7D3] leading-relaxed mb-8 font-normal"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Bi-weekly architectural blueprints, benchmarks, and operational diagnostics delivered to
              4,200+ CTOs and Operations Directors. Zero buzzwords. Pure implementation physics.
            </p>

            {/* Subscribe Form */}
            {submitted ? (
              <div className="p-4 rounded-xl bg-white/10 border border-[#00CBA8]/40 flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#00CBA8]" size={20} />
                <span className="text-[14px]">
                  Thank you! You are confirmed for the next Systems Dispatch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="relative flex-1">
                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BFC7D3]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter enterprise or personal email address..."
                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-[#BFC7D3]/70 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] text-[14.5px] backdrop-blur-xs transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 px-6 rounded-xl font-semibold text-[14px] text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer shrink-0"
                  style={{
                    background: "linear-gradient(169deg, #0084D1 0%, #00B894 100%)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <span>Subscribe to Dispatch</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* Micro guarantees */}
            <div className="flex flex-wrap items-center gap-6 text-[12px] text-[#BFC7D3]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#00CBA8]" />
                <span>Curated by Quantara Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00CBA8]">✓</span>
                <span>Strict no-spam guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
