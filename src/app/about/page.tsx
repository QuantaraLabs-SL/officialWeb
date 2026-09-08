import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AbstractNetworkCanvas from "@/components/AbstractNetworkCanvas";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Quantara Labs",
  description: "Building the future of business operations, from Sri Lanka to the world.",
};

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(27, 75, 143, 0.08) 0%, rgba(18, 167, 131, 0.12) 100%)"
        }}
      >
        <div className="page-wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Text */}
          <div className="flex-1 z-10">
            <span
              className="uppercase"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-teal)", display: "block", marginBottom: "1rem" }}
            >
              About Quantara Labs
            </span>
            <h1
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
            >
              Building the future of business operations.
            </h1>
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "32rem" }}
            >
              From Sri Lanka to the world, we design systems that strip away operational waste and empower your human capital.
            </p>
          </div>

          {/* Right Visual Image */}
          <div className="flex-1 w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden border border-[var(--color-line)] bg-white shadow-sm">
            <img src="/images/modern_software_crew.jpg" alt="Modern software crew collaborating" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Mission */}
          <div className="relative" style={{ paddingLeft: "2rem" }}>
            <div className="absolute left-0 top-0 bottom-0 w-2 rounded-full" style={{ background: "var(--color-blue)" }}></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--color-ink)", marginBottom: "1rem" }}>
              Our Mission
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
              Our mission is to fix how businesses operate – not just write code. We want to be the last agency you ever need to hire to untangle your workflows.
            </p>
          </div>

          {/* Vision */}
          <div className="relative" style={{ paddingLeft: "2rem" }}>
            <div className="absolute left-0 top-0 bottom-0 w-2 rounded-full" style={{ background: "var(--color-teal)" }}></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--color-ink)", marginBottom: "1rem" }}>
              Our Vision
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
              A business landscape where manual reporting, siloed tools, and repetitive tasks are a thing of the past—where human capital is spent entirely on growth and innovation.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          THE TEAM / FOUNDERS
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "var(--color-mist)" }}
      >
        <div className="page-wrapper max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              The Team
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              Technology strategy, operational optimization, and growth marketing united backed by a highly skilled and motivated team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Founder 1 */}
            <div className="bg-white rounded-2xl border-l-4 border-t border-r border-b border-[var(--color-line)] shadow-sm" style={{ borderLeftColor: "var(--color-teal)", padding: "2rem" }}>
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden relative" style={{ background: "var(--color-mist)" }}>
                <Image src="/images/duranka.jpg" alt="Duranka Thilakarathna" fill className="object-cover" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                Duranka Thilakarathna
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-teal)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Co-Founder and CTO
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                Current engineer bringing enterprise-grade architecture down to mid-market agile businesses.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl border-l-4 border-t border-r border-b border-[var(--color-line)] shadow-sm" style={{ borderLeftColor: "var(--color-blue)", padding: "2rem" }}>
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden relative" style={{ background: "var(--color-mist)" }}>
                <Image src="/images/pasindu.jpg" alt="Pasindu Boyagoda" fill className="object-cover" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                Pasindu Boyagoda
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-teal)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Co-Founder and CFO
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                Process mapping expert who translates messy human workflows into streamlined automated pipelines.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-2xl border-l-4 border-t border-r border-b border-[var(--color-line)] shadow-sm" style={{ borderLeftColor: "var(--color-teal)", padding: "2rem" }}>
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden relative" style={{ background: "var(--color-mist)" }}>
                <Image src="/images/janith.jpg" alt="Janith Wijesekara" fill className="object-cover" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                Janith Wijesekara
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-teal)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Co-Founder and CMO
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                Scaling operations needs scaled attention. Driving the Quantara Social branch to ensure built systems actually get used.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW WE WORK (Vertical Timeline)
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-4xl mx-auto">

          <h2 className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            How We Partner With You
          </h2>

          <div className="space-y-8 relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-[var(--color-line)] z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-2 bg-white" style={{ borderColor: "var(--color-blue)", color: "var(--color-blue)", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}>
                1
              </div>
              <div className="flex-1 rounded-2xl border border-[var(--color-line)]" style={{ background: "rgba(27, 75, 143, 0.03)", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                  No assumptions.
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  We don&apos;t start by writing code. We start by mapping your existing workflows, finding where time is lost, and quantifying the cost of your current inefficiency.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-2 bg-white" style={{ borderColor: "var(--color-teal)", color: "var(--color-teal)", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}>
                2
              </div>
              <div className="flex-1 rounded-2xl border border-[var(--color-line)]" style={{ background: "rgba(18, 167, 131, 0.03)", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                  Honest architecture.
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  If you don&apos;t need a custom app, we won&apos;t build you one. Sometimes the answer is an integration or a workflow automation. We prescribe what you actually need.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-2 bg-white" style={{ borderColor: "var(--color-blue)", color: "var(--color-blue)", fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}>
                3
              </div>
              <div className="flex-1 rounded-2xl border border-[var(--color-line)]" style={{ background: "rgba(27, 75, 143, 0.03)", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                  Built to scale.
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  When we do build, we use modern, resilient stacks. Our software isn&apos;t just meant to solve today&apos;s problem; it&apos;s meant to be the foundation for your next five years of growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS / CREDIBILITY
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "#F0F5FF" }} // bg-blue-light
      >
        <div className="page-wrapper max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3rem", color: "var(--color-blue)", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
              5+
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Years Combined
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3rem", color: "var(--color-teal)", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
              30+
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Projects Delivered
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3rem", color: "var(--color-blue)", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
              100%
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Client Satisfaction
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3rem", color: "var(--color-teal)", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
              24/7
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Support Available
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "var(--color-ink)",
          color: "white",
          padding: "8rem 1.5rem",
          textAlign: "center"
        }}
      >
        <div className="page-wrapper max-w-4xl mx-auto">
          {/* Teal Accent Line */}
          <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ background: "var(--color-teal)" }}></div>

          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Ready to stop working around your software?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "#9ca3af", maxWidth: "32rem", margin: "0 auto 3rem", lineHeight: 1.6 }}>
            Tell us how your business runs today. We&apos;ll tell you what to fix first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all"
              style={{
                background: "var(--color-blue)",
                color: "white",
                padding: "0.75rem 2rem",
                fontFamily: "var(--font-sans)"
              }}
            >
              Start the conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
