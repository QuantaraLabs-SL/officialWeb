"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, CheckCircle2, Server, ArrowUpRight, Cpu, Layers } from "lucide-react";
import { BlogPost } from "../config/posts";

interface FeaturedArticleSectionProps {
  post: BlogPost;
}

export default function FeaturedArticleSection({ post }: FeaturedArticleSectionProps) {
  return (
    <section className="py-12 bg-[#FAF8FF]">
      <div className="page-wrapper max-w-7xl mx-auto px-6">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_-2px_rgba(10,25,47,0.04),0_2px_6px_-1px_rgba(10,25,47,0.02)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            {/* Left Graphic Banner: Enterprise Blueprint Style Backdrop */}
            <div className="lg:col-span-7 bg-[#060D17] relative p-8 sm:p-10 flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2E8F0]/10">
              {/* Radial Cyan Glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(0, 163, 224, 0.4) 0%, transparent 65%)",
                }}
              />

              {/* Top Meta Tag in Blueprint */}
              <div className="flex items-center justify-between relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 backdrop-blur-md">
                  <Terminal size={12} className="text-[#00CBA8]" />
                  <span
                    className="text-[11px] font-mono text-white tracking-widest uppercase"
                    style={{ fontFamily: "monospace" }}
                  >
                    {post.systemBlueprintIssue || "SYSTEM BLUEPRINT // ISSUE 41"}
                  </span>
                </div>

                <div className="px-2.5 py-1 rounded bg-[#00609A]/30 border border-[#00A3E0]/40 text-[#00A3E0] text-[11px] font-mono">
                  CUTOVER: VERIFIED
                </div>
              </div>

              {/* Interactive Diagram / Blueprint Visual Element in Graphic */}
              <div className="my-8 relative z-10 w-full max-w-lg mx-auto rounded-xl bg-[#060D17]/85 border border-white/15 backdrop-blur-md p-6 shadow-2xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00CBA8]" />
                    <span className="text-[11px] text-[#BFC7D3] font-mono ml-2">
                      microservice_orchestration.v3.ts
                    </span>
                  </div>
                  <span className="text-[10px] text-[#00A3E0] font-mono uppercase bg-[#00609A]/20 px-2 py-0.5 rounded">
                    PROD PIPELINE
                  </span>
                </div>

                {/* Architecture Steps */}
                <div className="space-y-3 font-mono text-[12px]">
                  {/* Step 1 */}
                  <div className="flex items-center justify-between p-3 rounded bg-white/[0.04] border border-white/10">
                    <div className="flex items-center gap-2.5 text-white">
                      <span className="text-[#BA1A1A]">✕</span>
                      <span>Spreadsheet Data Layer</span>
                    </div>
                    <span className="text-[#BA1A1A] line-through text-[11px]">
                      PARALYZED (40h/wk)
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-white/20 to-[#00A3E0]" />
                  </div>

                  {/* Step 2 - Highlighted Webhook Mesh */}
                  <div className="flex items-center justify-between p-3 rounded bg-[#00609A]/25 border border-[#00A3E0]/50 shadow-sm">
                    <div className="flex items-center gap-2.5 text-white font-semibold">
                      <Cpu size={14} className="text-[#00A3E0]" />
                      <span>Event-Driven Webhook Mesh</span>
                    </div>
                    <span className="text-[#00CBA8] font-bold text-[11px] tracking-wide">
                      100% IDEMPOTENT
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-[#00A3E0] to-[#00CBA8]" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center justify-between p-3 rounded bg-white/[0.04] border border-white/10">
                    <div className="flex items-center gap-2.5 text-white">
                      <Server size={14} className="text-[#99CBFF]" />
                      <span>Target ERP Core</span>
                    </div>
                    <span className="text-[#00CBA8] font-bold text-[11px]">
                      0 DOWNTIME
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Blueprint Tag */}
              <div className="text-[12px] font-mono text-[#707882] relative z-10 flex items-center justify-between">
                <span>EVENT_BUS: NATS / KAFKA</span>
                <span className="text-[#00CBA8]">STATUS: 99.999% SLA</span>
              </div>
            </div>

            {/* Right Editorial Lead Content */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 text-[#00609A] font-semibold text-[12px] tracking-widest uppercase mb-3">
                  <Layers size={14} />
                  <span>{post.badgeCategory}</span>
                </div>

                {/* Meta details */}
                <p className="text-[13px] text-[#404751] mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                  {post.readTime} • {post.publishDate} • By{" "}
                  <strong className="text-[#131B2E] font-medium">{post.author.name}</strong>,{" "}
                  {post.author.role}
                </p>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#131B2E] leading-tight tracking-tight mb-4 hover:text-[#00609A] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p
                  className="text-[15px] text-[#404751] leading-relaxed mb-6 font-normal"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {post.excerpt}
                </p>

                {/* Stat Chips */}
                {post.chips && (
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {post.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-md text-[12px] font-medium bg-[#F2F8FF] border border-[#E2E8F0] text-[#00609A]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#00609A] hover:text-[#0084D1] group transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span>Read Full Blueprint</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-[12px] font-medium text-[#707882]">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
