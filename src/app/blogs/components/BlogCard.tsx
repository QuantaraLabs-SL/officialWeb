"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Activity, ShieldCheck, Database, GitFork, ArrowDownRight } from "lucide-react";
import { BlogPost } from "../config/posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  // Render technical preview visualization based on cardType
  const renderVisual = () => {
    switch (post.cardType) {
      case "telemetry":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00CBA8]/10 rounded-full blur-2xl" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00CBA8] animate-pulse" />
                <span className="text-[11px] font-mono text-[#00CBA8] uppercase">TELEMETRY FEED</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/90">
                {post.heroVisualTag || "LOGISTICS_MESH"}
              </span>
            </div>

            {/* Metrics Triplet */}
            <div className="grid grid-cols-3 gap-2 relative z-10">
              <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                <span className="block text-[9px] font-mono text-[#BFC7D3]">CYCLE TIME</span>
                <span className="text-[13px] font-mono font-bold text-white">4h 12m</span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                <span className="block text-[9px] font-mono text-[#BFC7D3]">BOTTLENECK</span>
                <span className="text-[13px] font-mono font-bold text-[#BA1A1A]">+30%</span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                <span className="block text-[9px] font-mono text-[#BFC7D3]">SCORE</span>
                <span className="text-[13px] font-mono font-bold text-[#00CBA8]">78%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#BFC7D3] relative z-10">
              <span>DISPATCH PIPELINE</span>
              <span className="text-[#00A3E0]">LATENCY: 42ms</span>
            </div>
          </div>
        );

      case "fintech":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00609A]/20 to-transparent" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#00A3E0]" />
                <span className="text-[11px] font-mono text-white/80">SECURE VAULT</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00609A]/20 border border-[#00A3E0]/30 text-[#00A3E0]">
                {post.heroVisualTag || "FINTECH_CORE"}
              </span>
            </div>

            {/* Visual KYC Graphic */}
            <div className="my-auto space-y-2 relative z-10 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded bg-white/[0.04] border border-white/10">
                <span className="text-[#BFC7D3]">EDGE BIOMETRIC HASH</span>
                <span className="text-[#00CBA8] font-bold">MATCH (0.998)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/[0.04] border border-white/10">
                <span className="text-[#BFC7D3]">LEDGER INTEGRATION</span>
                <span className="text-[#00A3E0]">BLOCK #884,912</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 relative z-10">
              <span>ENCRYPTION: AES-GCM-256</span>
              <span className="text-[#00CBA8]">SOC-2 COMPLIANT</span>
            </div>
          </div>
        );

      case "agentic":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00CBA8]/15 via-transparent to-transparent" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <GitFork size={14} className="text-[#4BDDB7]" />
                <span className="text-[11px] font-mono text-[#4BDDB7]">EVALUATOR CHAIN</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00CBA8]/10 border border-[#00CBA8]/30 text-[#4BDDB7]">
                {post.heroVisualTag || "AGENTIC_MESH"}
              </span>
            </div>

            {/* Agent pipeline graph */}
            <div className="my-auto relative z-10 flex items-center justify-center gap-3">
              <div className="p-2 rounded bg-white/[0.05] border border-white/15 text-center">
                <span className="block text-[9px] font-mono text-[#BFC7D3]">INGEST</span>
                <span className="text-[11px] font-mono text-white">40k ops/d</span>
              </div>
              <span className="text-[#00CBA8]">→</span>
              <div className="p-2 rounded bg-[#00609A]/30 border border-[#00A3E0]/40 text-center">
                <span className="block text-[9px] font-mono text-[#00A3E0]">TRIAGE</span>
                <span className="text-[11px] font-mono text-white">LangGraph</span>
              </div>
              <span className="text-[#00CBA8]">→</span>
              <div className="p-2 rounded bg-white/[0.05] border border-white/15 text-center">
                <span className="block text-[9px] font-mono text-[#4BDDB7]">RESOLVED</span>
                <span className="text-[11px] font-mono text-[#4BDDB7] font-bold">60.4%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 relative z-10">
              <span>AUTONOMOUS RESOLUTION</span>
              <span className="text-[#4BDDB7] font-bold">60.4%</span>
            </div>
          </div>
        );

      case "saas-cost":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0]">
                {post.heroVisualTag || "DECISION_MATRIX"}
              </span>
              <span className="text-[11px] font-mono text-[#BFC7D3]">CTO_PERSPECTIVE</span>
            </div>

            {/* SaaS Cost Bars */}
            <div className="space-y-3 relative z-10">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-[#BFC7D3] mb-1">
                  <span>SaaS Seat Tax (3-Yr Compounded)</span>
                  <span className="text-[#BA1A1A] font-semibold">$340,000/yr</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#BA1A1A] h-full rounded-full w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono text-[#BFC7D3] mb-1">
                  <span>Bespoke Micro-Core (CapEx + Maint)</span>
                  <span className="text-[#00CBA8] font-semibold">$88,000/yr</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#00CBA8] h-full rounded-full w-[26%]" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 relative z-10">
              <span>NET MARGIN RECAPTURE</span>
              <span className="text-[#00CBA8] font-bold">+74% OVER TIME</span>
            </div>
          </div>
        );

      case "inventory-sync":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-radial at-center from-[#0084D1]/15 to-transparent" />
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <Database size={14} className="text-[#00CBA8]" />
                <span className="text-[11px] font-mono text-white/80">REDIS STREAMS</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00CBA8]/10 border border-[#00CBA8]/30 text-[#00CBA8]">
                {post.heroVisualTag || "DATABASE_SYNC"}
              </span>
            </div>

            <div className="my-auto space-y-2 relative z-10 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded bg-white/[0.04] border border-white/10">
                <span className="text-[#BFC7D3]">BURST ORDER QUEUE</span>
                <span className="text-white font-medium">1,420 events/sec</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/[0.04] border border-white/10">
                <span className="text-[#BFC7D3]">CRDT RECONCILIATION</span>
                <span className="text-[#00A3E0]">NO CONFLICTS</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-white/70 relative z-10">
              <span>LATENCY: &lt; 92ms</span>
              <span className="text-[#00A3E0]">STOCK RECONCILED: 99.98%</span>
            </div>
          </div>
        );

      case "friction-ebitda":
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00CBA8]/10 border border-[#00CBA8]/30 text-[#00CBA8]">
                {post.heroVisualTag || "CFO_DEBRIEF"}
              </span>
              <span className="text-[11px] font-mono text-[#BFC7D3]">ORGANIZATIONAL_PHYSICS</span>
            </div>

            {/* Friction graphic */}
            <div className="p-3 rounded bg-white/[0.05] border border-white/10 space-y-1 relative z-10">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-white font-medium">Silent WhatsApp & Email Hand-offs</span>
                <span className="text-[#BA1A1A] font-bold">-18.4% EBITDA</span>
              </div>
              <p className="text-[10px] text-[#BFC7D3] leading-relaxed">
                Context switching cost: 23 mins per interruption across 140 knowledge workers.
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-[#00A3E0] relative z-10">
              <ArrowDownRight size={13} />
              <span>FINANCIAL POST-MORTEM</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-[208px] bg-[#060D17] p-5 flex items-center justify-center border-b border-white/10">
            <span className="text-[12px] font-mono text-[#BFC7D3]">SYSTEM_BLUEPRINT</span>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-2xl border border-[#E2E8F0] bg-white flex flex-col justify-between overflow-hidden shadow-[0_2px_6px_-1px_rgba(10,25,47,0.02),0_4px_20px_-2px_rgba(10,25,47,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
    >
      <div>
        {/* Technical Preview Window */}
        {renderVisual()}

        {/* Content Container */}
        <div className="p-6">
          {/* Eyebrow / Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00609A]" />
            <span
              className="text-[12px] font-semibold text-[#00609A] tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {post.badgeCategory} • {post.readTime}
            </span>
          </div>

          {/* Heading */}
          <h3
            className="text-[20px] font-bold text-[#131B2E] tracking-tight leading-snug mb-3 group-hover:text-[#00609A] transition-colors"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p
            className="text-[13.5px] text-[#404751] leading-relaxed line-clamp-3 font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer / Read Article */}
      <div className="px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between bg-slate-50/50">
        <span className="text-[13px] text-[#707882] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
          {post.publishDate}
        </span>

        <Link
          href={`/blogs/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#00609A] hover:text-[#0084D1] transition-colors group/link"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <span>Read Article</span>
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
