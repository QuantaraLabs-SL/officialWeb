import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Automation | Quantara Labs",
  description: "Intelligent systems that work for you.",
};

export default function AiAutomationPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(18, 167, 131, 0.08) 0%, var(--color-paper) 100%)",
        }}
      >
        <div className="page-wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text */}
          <div className="flex-1 z-10">
            <span
              className="uppercase"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-teal)", display: "block", marginBottom: "1rem" }}
            >
              Solution
            </span>
            <h1
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
            >
              AI & Automation
            </h1>
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "32rem" }}
            >
              Stop paying smart people to do robotic work. We deploy intelligent agents and automated pipelines to handle your high-volume, low-leverage tasks.
            </p>
          </div>

          {/* Right Decoration (Watermark/Graphic) */}
          <div className="hidden md:flex flex-1 justify-end items-center relative opacity-20 pointer-events-none select-none">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "20rem", color: "var(--color-teal)", lineHeight: 1 }}>
              03
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
            The Human Bandwidth Trap
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            The biggest ceiling on your company&apos;s growth is human bandwidth. If your team is spending hours triaging emails, moving data between CRMs, or answering repetitive customer questions, they aren&apos;t growing the business.
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
              Our Automation Strategy
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              We don&apos;t automate for the sake of it. We look for high-volume bottlenecks and replace them with reliable, intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-teal)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-teal)", fontFamily: "var(--font-display)" }}>
                1
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                Identify Targets
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                We find the processes that consume the most time and require the least amount of human judgment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-teal)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-teal)", fontFamily: "var(--font-display)" }}>
                2
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                Connect & Automate
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                We integrate your existing tools—using standard APIs, webhooks, or RPA—to ensure data flows silently in the background.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border-t border-r border-b border-l-4 border-[var(--color-line)] shadow-sm flex flex-col" style={{ padding: "2rem", borderLeftColor: "var(--color-teal)" }}>
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-teal)", fontFamily: "var(--font-display)" }}>
                3
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                Augment with AI
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                Where logic rules fail, we apply AI. We implement language models to categorize data, summarize documents, or draft responses.
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
        style={{ padding: "8rem 1.5rem", background: "rgba(18, 167, 131, 0.03)" }}
      >
        <div className="page-wrapper max-w-5xl mx-auto">
          <h2 className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            Capabilities & Deliverables
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zapier / Make Workflows", desc: "Complex logic flows connecting hundreds of SaaS tools seamlessly." },
              { title: "Custom Agentic AI", desc: "Internal LLM agents that can query databases, read docs, and execute actions." },
              { title: "Customer Support Bots", desc: "AI-driven chatbots that resolve tier-1 tickets automatically." },
              { title: "Data Extraction", desc: "Automated OCR and parsing of invoices, receipts, and forms." },
              { title: "Sales Automation", desc: "Automated lead qualification, scoring, and CRM routing." },
              { title: "Reporting Pipelines", desc: "Automated aggregation of data into live BI dashboards." },
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
            The Support Triage Engine
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            For example, an e-commerce brand was drowning in "Where is my order?" tickets. We deployed an AI agent connected directly to their Shopify and shipping carrier APIs. The agent now handles 60% of inbound tickets instantly, freeing up the human team to handle complex claims.
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
          <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ background: "var(--color-teal)" }}></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Ready to multiply your bandwidth?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", maxWidth: "32rem", margin: "0 auto 3rem auto" }}>
            Let&apos;s map out which of your repetitive processes can be delegated to an automated system.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all"
              style={{
                background: "var(--color-teal)",
                color: "white",
                padding: "0.875rem 2rem",
                fontSize: "1.125rem",
              }}
            >
              Discuss Automation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
