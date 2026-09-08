"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    title: "The starting point",
    desc: "Three people, one shared observation: too many good businesses are held back by operations nobody has time to fix.",
  },
  {
    title: "The idea",
    desc: "Instead of another dev shop or another marketing agency, build a company that diagnoses the real problem first.",
  },
  {
    title: "The team forms",
    desc: "Technology & strategy, growth & marketing, and financial backing come together as Quantara Labs and Quantara Social.",
  },
  {
    title: "The philosophy",
    desc: "Understand. Optimize. Automate. Build. Scale. becomes the working method, not just a slogan.",
  },
  {
    title: "Today",
    desc: "Quantara Labs opens its doors to the first businesses ready to fix how they operate.",
  },
];

export default function JourneySection() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(".journey-node");
      const contents = gsap.utils.toArray<HTMLElement>(".journey-content");
      const mm = gsap.matchMedia();

      // Desktop: Horizontal animation
      mm.add("(min-width: 768px)", () => {
        const line = document.querySelector(".journey-line-fill-desktop");
        
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

        nodes.forEach((node, i) => {
          const progress = i / (nodes.length - 1);
          
          tl.to(
            node,
            {
              backgroundColor: "var(--color-blue)",
              borderColor: "var(--color-blue)",
              ease: "power1.inOut",
              duration: 0.05,
            },
            progress
          );
          
          tl.fromTo(
            contents[i],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.1 },
            progress
          );
        });
      });

      // Mobile: Vertical animation
      mm.add("(max-width: 767px)", () => {
        const line = document.querySelector(".journey-line-fill-mobile");
        
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
           gsap.to(node, {
             backgroundColor: "var(--color-blue)",
             borderColor: "var(--color-blue)",
             scrollTrigger: {
               trigger: node,
               start: "top center+=30%",
               toggleActions: "play none none reverse",
             },
           });
           
           gsap.fromTo(
             contents[i],
             { opacity: 0, x: -20 },
             {
               opacity: 1,
               x: 0,
               scrollTrigger: {
                 trigger: node,
                 start: "top center+=30%",
                 toggleActions: "play none none reverse",
               }
             }
           );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[var(--color-line)]"
      style={{
        background: "var(--color-paper)",
        padding: "6rem 1.5rem",
      }}
    >
      <style>{`
        @keyframes panTechGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 48px 48px; }
        }
      `}</style>

      {/* Animated Techy Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(27,75,143,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27,75,143,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          animation: "panTechGrid 20s linear infinite",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      <div className="page-wrapper max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24" style={{ marginTop: "4rem", marginBottom: "8rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Our Journey
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
            How Quantara Labs came to be
          </p>
        </div>

        <div className="relative">
          {/* ─── DESKTOP LINE ─── */}
          <div className="hidden md:block absolute top-[9px] left-[2%] right-[2%] h-[2px] -z-10" style={{ background: "var(--color-line)" }} />
          <div className="journey-line-fill-desktop hidden md:block absolute top-[9px] left-[2%] right-[2%] h-[2px] -z-10" style={{ background: "var(--color-blue)" }} />

          {/* ─── MOBILE LINE ─── */}
          <div className="md:hidden absolute top-0 bottom-0 left-[9px] w-[2px] -z-10" style={{ background: "var(--color-line)" }} />
          <div className="journey-line-fill-mobile md:hidden absolute top-0 bottom-0 left-[9px] w-[2px] -z-10" style={{ background: "var(--color-blue)" }} />

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 px-0 md:px-[2%]">
            {MILESTONES.map((ms, i) => (
              <div
                key={i}
                className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 relative w-full md:w-[18%]"
              >
                {/* Node */}
                <div
                  className="journey-node flex items-center justify-center w-5 h-5 rounded-full border-[3px] bg-white flex-shrink-0 z-10 transition-colors duration-300"
                  style={{
                    borderColor: "var(--color-line)",
                  }}
                />

                {/* Content */}
                <div 
                  className="journey-content flex-1 md:text-center mt-[-4px] md:mt-4 p-5 rounded-xl border-l-4 md:border-l-0 md:border-t-4 transition-colors"
                  style={{ 
                    backgroundColor: "rgba(232, 240, 254, 0.3)", 
                    borderColor: "var(--color-blue)" 
                  }}
                >
                  <h3
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}
                  >
                    {ms.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-slate)" }}
                  >
                    {ms.desc}
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
