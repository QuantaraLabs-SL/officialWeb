import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development | Quantara Labs",
  description: "Custom software built for scale and speed.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(27, 75, 143, 0.05) 0%, rgba(100, 116, 139, 0.08) 100%)",
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
              Software Development
            </h1>
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "32rem" }}
            >
              We don&apos;t just write code; we build the engine your business needs to scale. From internal tools to customer-facing platforms, we deliver clean, performant software.
            </p>
          </div>

          {/* Right Decoration (Watermark/Graphic) */}
          <div className="hidden md:flex flex-1 justify-end items-center relative opacity-20 pointer-events-none select-none">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "20rem", color: "var(--color-slate)", lineHeight: 1 }}>
              02
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
            The Off-The-Shelf Limit
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            Eventually, every ambitious company outgrows their generic software stack. You start compromising your process to fit the tool, rather than the tool fitting your process. That&apos;s when you need custom architecture.
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
              Our Engineering Approach
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              We build systems that are easy to maintain, scalable, and directly tied to your business objectives.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-[var(--color-line)] shadow-sm flex flex-col md:flex-row items-center gap-6" style={{ padding: "2rem" }}>
              <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                1
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                  Scope & Architecture
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  We define the exact requirements and choose the right tech stack. No over-engineering, just pragmatic choices built for speed and longevity.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-[var(--color-line)] shadow-sm flex flex-col md:flex-row items-center gap-6" style={{ padding: "2rem" }}>
              <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                2
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                  Iterative Build
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  We develop in short sprints. You see working software early and often, ensuring the final product perfectly aligns with your expectations.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-[var(--color-line)] shadow-sm flex flex-col md:flex-row items-center gap-6" style={{ padding: "2rem" }}>
              <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ background: "var(--color-blue)", fontFamily: "var(--font-display)" }}>
                3
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>
                  Handoff & Maintenance
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                  We don&apos;t hold your code hostage. We provide clean documentation, train your team, and offer ongoing support to keep your engine running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "var(--color-mist)" }}
      >
        <div className="page-wrapper max-w-5xl mx-auto">
          <h2 className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            Capabilities & Deliverables
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Web Applications", desc: "Full-stack platforms built with modern frameworks like React and Node.js." },
              { title: "Internal Tooling", desc: "Custom dashboards and admin panels that speed up your team's workflow." },
              { title: "API Development", desc: "Robust, secure APIs to connect your disconnected systems." },
              { title: "Legacy Modernization", desc: "Refactoring and migrating outdated systems to cloud-native architecture." },
              { title: "Database Architecture", desc: "Designing scalable schemas for growing data needs." },
              { title: "Cloud Deployment", desc: "Secure, highly-available hosting setups on AWS or Google Cloud." },
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
            The Custom Client Portal
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
            For example, we worked with a financial services firm whose clients were frustrated by email-heavy onboarding. We built a secure, custom web portal where clients could securely upload documents, track their application status, and message their advisors—cutting onboarding time in half.
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
            Ready to build something that lasts?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", maxWidth: "32rem", margin: "0 auto 3rem auto" }}>
            Tell us about your project. We&apos;ll tell you if it needs custom code, or if there&apos;s a faster way to solve it.
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
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
