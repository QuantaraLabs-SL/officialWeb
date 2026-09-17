"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
  id: string;
  targetNumber: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  title: string;
  description: string;
  customDisplay?: (val: number) => string;
  /** If true, counts DOWN from startFrom → targetNumber */
  countDown?: boolean;
  startFrom?: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS_DATA: StatItem[] = [
  {
    id: "system-reliability",
    targetNumber: 99.8,
    decimals: 1,
    suffix: "%",
    title: "SYSTEM RELIABILITY",
    description: "Engineered for zero downtime",
  },
  {
    id: "faster-workflows",
    targetNumber: 5,
    customDisplay: (val: number) => {
      // Rotates range label as val climbs 0 → 5
      const lower = Math.max(1, Math.round(1 + (val / 5) * 2));
      const upper = Math.round(val);
      if (upper <= lower) return `${upper}`;
      return `${lower}–${upper}`;
    },
    title: "FASTER WORKFLOWS",
    description: "Repetitive admin tasks deleted",
  },
  {
    id: "tailored-code",
    targetNumber: 100,
    decimals: 0,
    suffix: "%",
    title: "TAILORED CODE",
    description: "Full proprietary IP ownership",
  },
  {
    id: "leads-inquiries",
    targetNumber: 0,
    suffix: " Lost",
    countDown: true,
    startFrom: 48,
    title: "LEADS & INQUIRIES",
    description: "Malabe Tech Hub & Global Ops",
  },
];

// ─── Easing ───────────────────────────────────────────────────────────────────
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  duration = 2400,
  triggerRef,
}: {
  stat: StatItem;
  duration?: number;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const prefersReduced = useReducedMotion();

  const isCountDown = stat.countDown === true;
  const startVal = isCountDown ? (stat.startFrom ?? 48) : 0;
  const endVal = stat.targetNumber;

  const [currentVal, setCurrentVal] = useState<number>(
    prefersReduced ? endVal : startVal
  );
  const [isComplete, setIsComplete] = useState(prefersReduced ?? false);
  const animatedRef = useRef(false);

  const runAnimation = useCallback(() => {
    if (prefersReduced || animatedRef.current) return;
    animatedRef.current = true;

    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      const valueNow = startVal + (endVal - startVal) * eased;
      setCurrentVal(valueNow);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCurrentVal(endVal);
        setIsComplete(true);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReduced, duration, startVal, endVal]);

  // ── Trigger once on scroll-into-view ────────────────────────────────────────
  useEffect(() => {
    if (prefersReduced) {
      setCurrentVal(endVal);
      setIsComplete(true);
      return;
    }

    const el = triggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef, runAnimation, prefersReduced, endVal]);

  // ── Format display value ─────────────────────────────────────────────────────
  const formatValue = () => {
    if (stat.customDisplay) return stat.customDisplay(currentVal);

    let numStr = "";
    if (stat.decimals !== undefined && stat.decimals > 0) {
      numStr = currentVal.toFixed(stat.decimals);
    } else {
      numStr = Math.round(currentVal).toString();
    }

    return `${stat.prefix ?? ""}${numStr}${stat.suffix ?? ""}`;
  };

  // ── Shared gradient style ─────────────────────────────────────────────────────
  const gradientStyle = {
    fontFamily: "var(--font-display)",
    backgroundImage: "linear-gradient(135deg, #0084D1 0%, #00B894 100%)",
  };

  // ── Faster-Workflows: render number + spinning "x" separately ────────────────
  if (stat.id === "faster-workflows") {
    const numPart = formatValue(); // e.g. "3–5" or "1"

    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-3 sm:px-6">
        <div
          className="flex items-baseline justify-center mb-3 select-none"
          style={{ minWidth: "8ch" }}
        >
          {/* Number range */}
          <span
            className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-none bg-clip-text text-transparent tabular-nums"
            style={gradientStyle}
          >
            {numPart}
          </span>

          {/* "x" — spins 360° once when counter completes */}
          <motion.span
            className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-none bg-clip-text text-transparent"
            style={gradientStyle}
            animate={
              prefersReduced
                ? {}
                : isComplete
                ? { rotate: [0, 360] }
                : { rotate: 0 }
            }
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
          >
            x
          </motion.span>
        </div>

        <h3
          className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#1E293B] mb-1.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {stat.title}
        </h3>

        <p
          className="text-[12px] sm:text-[13px] text-[#64748B] font-normal leading-snug"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {stat.description}
        </p>
      </div>
    );
  }

  // ── Default card ─────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-3 sm:px-6">
      <div
        className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-none mb-3 bg-clip-text text-transparent select-none tabular-nums"
        style={{
          ...gradientStyle,
          minWidth: "8ch",
        }}
      >
        {formatValue()}
      </div>

      <h3
        className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#1E293B] mb-1.5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {stat.title}
      </h3>

      <p
        className="text-[12px] sm:text-[13px] text-[#64748B] font-normal leading-snug"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {stat.description}
      </p>
    </div>
  );
}

// ─── MetricsBanner ────────────────────────────────────────────────────────────
export default function MetricsBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="metrics"
      ref={sectionRef}
      aria-label="Key Performance Metrics"
      className="relative w-full border-y border-[#E2E8F0] bg-white overflow-hidden py-2 sm:py-2"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 20px -2px rgba(15, 23, 42, 0.03)",
      }}
    >
      <div className="page-wrapper max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
          {STATS_DATA.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
              duration={2400}
              triggerRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
