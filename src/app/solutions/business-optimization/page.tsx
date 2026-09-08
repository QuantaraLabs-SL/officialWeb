import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Optimization | Quantara Labs",
  description: "Find and fix what's holding your operations back.",
};

export default function BusinessOptimizationPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(27, 75, 143, 0.15) 0%, rgba(27, 75, 143, 0.02) 100%)",
        }}
      >
        <div className="page-wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text */}
          <div className="flex-1 z-10">
            <span
              className="uppercase"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-blue)", display: "block", marginBottom: "1rem" }}
            >
              Solution
            </span>
            <h1
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
            >
              Business Optimization
            </h1>
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "32rem" }}
            >
              Find and fix what&apos;s holding your operations back. We identify operational waste and streamline your workflows to restore lost time and revenue.
            </p>
          </div>

          {/* Right Decoration (Watermark/Graphic) */}
          <div className="hidden md:flex flex-1 justify-end items-center relative opacity-20 pointer-events-none select-none">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "20rem", color: "var(--color-blue)", lineHeight: 1 }}>
              01
            </span>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-mist)" }}
      >
        <div className="page-wrapper max-w-4xl mx-auto text-center">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--color-ink)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            The Reality of Scaling
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            As businesses grow, so does the complexity of their internal processes. Teams end up duct-taping software together, doing manual data entry, and losing hours to repetitive administrative tasks. You don&apos;t just need software; you need a system that works.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE QUANTARA APPROACH
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Our Approach
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              We fix how the business runs, using technology as the tool. Here is how we optimize your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-blue)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                1
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                Process Mapping
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                We document every step of your current workflows, identifying bottlenecks, redundancies, and silent costs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-blue)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                2
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                System Design
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                We architect a leaner, faster alternative. If an off-the-shelf integration works best, we use it. We only build custom if it provides a distinct advantage.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-blue)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                3
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                Deployment & Training
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                We roll out the new workflows to your team, ensuring high adoption and immediate return on efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "rgba(27, 75, 143, 0.06)" }}
      >
        <div className="page-wrapper max-w-5xl mx-auto">
          <h2 className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            Capabilities & Deliverables
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Workflow Audits", desc: "Comprehensive mapping of your existing processes." },
              { title: "Cost Analysis", desc: "Quantifying exactly how much inefficient systems cost your business." },
              { title: "Tool Stack Consolidation", desc: "Eliminating redundant subscriptions and centralizing your data." },
              { title: "Standard Operating Procedures", desc: "Clear, documented guidelines for the newly optimized workflows." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-[var(--color-line)]" style={{ padding: "1.5rem" }}>
                <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1.125rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-slate)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXAMPLE USE CASE
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-3xl mx-auto rounded-2xl border border-dashed border-[var(--color-slate)] opacity-80" style={{ padding: "3rem", background: "var(--color-mist)" }}>
          <span style={{ display: "inline-block", background: "var(--color-ink)", color: "white", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Placeholder - Case Study Coming Soon
          </span>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "1rem" }}>
            The Logistics Bottleneck
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            For example, we helped a mid-market logistics firm that was relying on manual spreadsheet updates for freight tracking. By mapping their workflow and implementing an automated central dashboard, they reclaimed 40 hours a week in administrative time and reduced reporting errors to zero.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        style={{ padding: "8rem 1.5rem", background: "var(--color-ink)", color: "white" }}
      >
        <div className="page-wrapper max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ background: "var(--color-blue)" }}></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Ready to find your hidden efficiencies?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", maxWidth: "32rem", margin: "0 auto 3rem auto" }}>
            Book a business diagnostic today. We&apos;ll help you uncover the silent costs in your operations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all"
              style={{
                background: "var(--color-blue)",
                color: "white",
                padding: "0.875rem 2rem",
                fontSize: "1.125rem",
              }}
            >
              Book a Diagnostic
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
