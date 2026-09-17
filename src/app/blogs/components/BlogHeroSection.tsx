"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, FEATURED_POST, BLOG_POSTS } from "../config/posts";
import {
  ArrowRight,
  Terminal,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

// Curated dispatches for the ambient background slideshow
interface BackgroundSlide extends BlogPost {
  tickerTag: string;
  accentGradient: string;
  glowColor: string;
  icon: typeof Terminal;
  statBadge: string;
  bgImage?: string;
}

const BACKGROUND_NEWS_SLIDES: BackgroundSlide[] = [
  {
    ...FEATURED_POST,
    tickerTag: "FEATURED ARCHITECTURAL ESSAY",
    accentGradient: "from-[#00A3E0]/20 via-[#00CBA8]/10 to-transparent",
    glowColor: "rgba(0, 163, 224, 0.35)",
    icon: Terminal,
    statBadge: "62% SPEND REDUCTION",
    bgImage: "/images/blog-hero-erp.jpg",
  },
  {
    ...BLOG_POSTS[0],
    tickerTag: "REAL-TIME LOGISTICS & TELEMETRY",
    accentGradient: "from-[#00CBA8]/20 via-[#0084D1]/10 to-transparent",
    glowColor: "rgba(0, 203, 168, 0.35)",
    icon: Zap,
    statBadge: "42ms LATENCY",
    bgImage: "/images/blog-hero-logistics.jpg",
  },
  {
    ...BLOG_POSTS[1],
    tickerTag: "FINTECH & IDENTITY ARCHITECTURE",
    accentGradient: "from-[#0084D1]/20 via-[#00609A]/10 to-transparent",
    glowColor: "rgba(0, 132, 209, 0.35)",
    icon: ShieldCheck,
    statBadge: "AES-GCM-256",
    bgImage: "/images/blog-hero-fintech.jpg",
  },
  {
    ...BLOG_POSTS[2],
    tickerTag: "AUTONOMOUS AGENTS & LANGGRAPH",
    accentGradient: "from-[#4BDDB7]/20 via-[#00A3E0]/10 to-transparent",
    glowColor: "rgba(75, 221, 183, 0.35)",
    icon: Cpu,
    statBadge: "60.4% AUTO-RESOLVE",
    bgImage: "/images/blog-hero-erp.jpg",
  },
  {
    ...BLOG_POSTS[3],
    tickerTag: "CTO DECISION MATRIX // BUILD VS BUY",
    accentGradient: "from-[#F59E0B]/15 via-[#00CBA8]/10 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.25)",
    icon: TrendingUp,
    statBadge: "+74% NET MARGIN",
    bgImage: "/images/blog-hero-logistics.jpg",
  },
];

export default function BlogHeroSection({
  categories,
  selectedCategory,
  onSelectCategory,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % BACKGROUND_NEWS_SLIDES.length);
  }, []);

  // Cycle background slide every 6.5 seconds automatically
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion, nextSlide]);

  const activeSlide = BACKGROUND_NEWS_SLIDES[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <section className="relative pt-12 pb-10 border-b border-[#E2E8F0] overflow-hidden bg-[#FAF8FF]">
      {/* ══════════════════════════════════════════════════════════
          1. DYNAMIC BACKGROUND SLIDESHOW LAYER
      ══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-40 z-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px), linear-gradient(180deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient Full-bleed Background Hero Image for Active Article */}
        <AnimatePresence mode="wait">
          {activeSlide.bgImage && (
            <motion.div
              key={`bg-img-${activeSlide.slug}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.14, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <Image
                src={activeSlide.bgImage}
                alt={activeSlide.title}
                fill
                priority
                className="object-cover object-center filter saturate-125"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8FF] via-[#FAF8FF]/85 to-[#FAF8FF]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8FF] via-transparent to-[#FAF8FF]/70" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient Animated Color Orbs shifting per article */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`orb-${activeSlide.slug}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.22, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-32 right-[-10%] w-[750px] h-[750px] rounded-full pointer-events-none transform-gpu will-change-transform"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${activeSlide.glowColor} 0%, transparent 68%)`,
              filter: "blur(60px)",
            }}
          />
        </AnimatePresence>

        {/* Background Ghost Watermark of Active Article Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`watermark-${activeSlide.slug}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.032, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className="absolute right-6 top-8 hidden xl:block font-black tracking-tighter text-[130px] leading-none text-[#0F172A] z-0"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            {activeSlide.badgeCategory.split(" ")[0].toUpperCase()}
          </motion.div>
        </AnimatePresence>

        {/* Background Editorial Blueprint Cards Silhouette */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`blueprint-card-${activeSlide.slug}`}
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 -translate-y-1/2 right-12 hidden lg:flex flex-col w-[380px] xl:w-[420px] rounded-2xl p-5 bg-white/[0.8] border border-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md z-0"
          >
            {/* Visual Thumbnail Banner */}
            {activeSlide.bgImage && (
              <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3.5 border border-[#E2E8F0]/70 group">
                <Image
                  src={activeSlide.bgImage}
                  alt={activeSlide.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out"
                  sizes="(max-width: 1280px) 380px, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/80 via-[#060D17]/25 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[10.5px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs border border-white/20">
                    {activeSlide.badgeCategory}
                  </span>
                  <span className="text-[#00CBA8] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CBA8] animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E8F0]/70 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00CBA8] animate-pulse" />
                <span className="text-[10.5px] font-mono font-semibold tracking-wider text-[#00609A] uppercase">
                  DISPATCH // {currentSlide + 1} OF {BACKGROUND_NEWS_SLIDES.length}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00609A]/10 text-[#00609A] font-semibold">
                {activeSlide.statBadge}
              </span>
            </div>

            <span className="text-[11px] font-mono text-[#707882] mb-1">
              {activeSlide.tickerTag}
            </span>
            <div
              className="text-[15px] font-bold text-[#131B2E] leading-snug line-clamp-2 mb-1.5"
              style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              {activeSlide.title}
            </div>
            <p className="text-[12px] text-[#404751] line-clamp-2 leading-relaxed mb-2.5">
              {activeSlide.excerpt}
            </p>

            <div className="pt-2 border-t border-[#E2E8F0]/60 flex items-center justify-between text-[11px] font-mono text-[#707882]">
              <span>By {activeSlide.author.name}</span>
              <span className="text-[#00A3E0] font-semibold">{activeSlide.readTime}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══════════════════════════════════════════════════════════
          2. FOREGROUND CONTENT & CONTROLS
      ══════════════════════════════════════════════════════════ */}
      <div className="page-wrapper max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Wire: Orientation Eyebrow */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8FF]/95 border border-[#E2E8F0] shadow-xs backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#00CBA8] animate-pulse" />
            <span
              className="text-[11px] font-semibold text-[#00609A] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              QUANTARA INSIGHTS // ENGINEERING, AUTOMATION & OPERATIONAL EXCELLENCE
            </span>
          </motion.div>
        </div>

        {/* Dynamic Background Slideshow Headline Ticker Strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`ticker-strip-${activeSlide.slug}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="mb-6 flex items-center gap-2 text-[12.5px] font-mono text-[#00609A]"
          >
            <div className="flex items-center gap-1.5 bg-[#00609A]/10 border border-[#00609A]/20 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase">
              <ActiveIcon size={12} className="text-[#00A3E0]" />
              <span>{activeSlide.tickerTag}</span>
            </div>
            <span className="text-[#707882] hidden sm:inline">•</span>
            <Link
              href={`/blogs/${activeSlide.slug}`}
              className="text-[#131B2E] font-medium hover:text-[#00609A] transition-colors line-clamp-1 inline-flex items-center gap-1 group"
            >
              <span>{activeSlide.title}</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5 text-[#00A3E0]" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Primary Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#131B2E] leading-[1.14] tracking-tight mb-5 max-w-3xl"
          style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Architectural Thinking for <br className="hidden sm:inline" />
          Modern Operations.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg sm:text-[18px] text-[#404751] leading-[1.65] max-w-2xl mb-9 font-normal"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Deep dives, post-mortems, and technical blueprints on dismantling legacy drag,
          engineering bespoke enterprise software, and orchestrating pragmatic AI systems.
        </motion.p>

        {/* Topic Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap gap-2.5 items-center pt-1"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#060D17] text-white shadow-sm ring-1 ring-[#060D17]"
                    : "bg-white text-[#404751] border border-[#E2E8F0] hover:bg-slate-50 hover:text-[#131B2E]"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {category}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
