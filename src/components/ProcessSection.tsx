"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    title: "Understand",
    desc: "We map your current operations, identify bottlenecks, and quantify the real cost of inefficiency.",
  },
  {
    title: "Optimize",
    desc: "We design a leaner workflow, stripping away waste without cutting what works.",
  },
  {
    title: "Automate",
    desc: "We build the automation that handles repetitive tasks, freeing your team for higher-value work.",
  },
  {
    title: "Build",
    desc: "We develop custom software that fits your business, not the other way around.",
  },
  {
    title: "Scale",
    desc: "We put systems in place that grow with you, so you never outgrow your tools.",
  },
];

export default function ProcessSection() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(".process-node");
      const mm = gsap.matchMedia();

      // Desktop: Horizontal animation
      mm.add("(min-width: 768px)", () => {
        const line = document.querySelector(".process-line-fill-desktop");
        
        // Calculate the total scroll distance for the line to fill
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, ease: "none" },
            0
          );
        }

        // Calculate staggered activation of nodes
        nodes.forEach((node, i) => {
          tl.to(
            node,
            {
              backgroundColor: "var(--color-blue)",
              color: "var(--color-paper)",
              borderColor: "var(--color-blue)",
              ease: "power1.inOut",
              duration: 0.1, // Quick color transition
            },
            i / (nodes.length - 1) // Distribute evenly across the scrub timeline
          );
        });
      });

      // Mobile: Vertical animation
      mm.add("(max-width: 767px)", () => {
        const line = document.querySelector(".process-line-fill-mobile");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        if (line) {
          tl.fromTo(
            line,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, ease: "none" },
            0
          );
        }

        nodes.forEach((node, i) => {
           // For mobile, it's better to trigger based on the node's position
           gsap.to(node, {
             backgroundColor: "var(--color-blue)",
             color: "var(--color-paper)",
             borderColor: "var(--color-blue)",
             scrollTrigger: {
               trigger: node,
               start: "top center+=20%",
               toggleActions: "play none none reverse",
             },
           });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="overflow-hidden border-t border-[var(--color-line)]"
      style={{ 
        background: "var(--color-blue-light)", 
        padding: "6rem 1.5rem" 
      }}
    >
      <div className="page-wrapper max-w-6xl mx-auto">
        <div className="text-center mb-20" style={{ marginTop: "4rem", marginBottom: "8rem" }}>
          <p
            className="uppercase"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-teal)", marginBottom: "0.75rem" }}
          >
            Our process
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", letterSpacing: "-0.02em" }}>
            How we work
          </h2>
        </div>

        <div className="relative">
          {/* ─── DESKTOP LINE ─── */}
          <div className="hidden md:block absolute top-[27px] left-[5%] right-[5%] h-[2px] -z-10" style={{ background: "var(--color-line)" }} />
          <div className="process-line-fill-desktop hidden md:block absolute top-[27px] left-[5%] right-[5%] h-[2px] -z-10" style={{ background: "var(--color-blue)" }} />

          {/* ─── MOBILE LINE ─── */}
          <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-[2px] -z-10" style={{ background: "var(--color-line)" }} />
          <div className="process-line-fill-mobile md:hidden absolute top-0 bottom-0 left-[27px] w-[2px] -z-10" style={{ background: "var(--color-blue)" }} />

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 px-0 md:px-[5%]">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 relative w-full md:w-[16%]"
              >
                {/* Node */}
                <div
                  className="process-node flex items-center justify-center w-14 h-14 rounded-full border-2 bg-white flex-shrink-0 z-10 transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    borderColor: "var(--color-line)",
                    color: "var(--color-slate)",
                  }}
                >
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1 md:text-center mt-2 md:mt-0">
                  <h3
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-slate)" }}
                  >
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
