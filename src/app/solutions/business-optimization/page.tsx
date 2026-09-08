import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Business Optimization",
  description: "Identify bottlenecks, map operations, and streamline workflows for leaner, more profitable business operations.",
};

export default function BusinessOptimizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-6 text-[var(--color-teal)] hover:opacity-80 transition-opacity">
            <ArrowRight size={16} className="rotate-180" /> Back to Solutions
          </Link>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
            Business Optimization
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
            Is your operations process holding you back? We find and remove bottlenecks, then build a roadmap to leaner, more profitable workflows.
          </p>
        </div>
      </section>

      {/* Problem Statement & Approach */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">The Problem</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              As businesses grow, processes break. Teams end up tracking core operations in disjointed Excel sheets, information gets siloed in WhatsApp chats, and leaders lose visibility into real-time performance. What used to take hours now takes days, and manual errors eat directly into profit margins.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Our Approach</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              We act as an objective lens. We don&apos;t just look at what software you use; we look at how data moves through your organization. We map the entire workflow from end to end, identify exactly where time and money are leaking, and design a standardized process that is ready to be automated or codified.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-10 text-[var(--color-ink)] text-3xl">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "End-to-end operational mapping",
              "Bottleneck & friction analysis",
              "Technology stack audit",
              "SOP (Standard Operating Procedure) redesign",
              "Automation readiness assessment",
              "Clear implementation roadmap"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-paper)] border border-[var(--color-line)]">
                <CheckCircle2 className="text-[var(--color-teal)] shrink-0 mt-0.5" size={20} />
                <span className="text-[var(--color-ink)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Use Case (Placeholder) */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-6 text-[var(--color-ink)] text-3xl">
            Example Use Case
          </h2>
          <div className="p-8 rounded-xl border border-[var(--color-line)] bg-[var(--color-mist)] opacity-80">
            <h3 className="font-bold text-xl mb-3 text-[var(--color-ink)]">Logistics Company Turnaround</h3>
            <p className="text-[var(--color-slate)] leading-relaxed mb-4">
              <strong>Scenario:</strong> A mid-sized logistics provider was dispatching drivers using group chats and tracking delivery confirmations via paper dockets. Invoice generation took 14 days on average due to missing paperwork.
            </p>
            <p className="text-[var(--color-slate)] leading-relaxed">
              <strong>Result:</strong> We mapped the entire dispatch-to-invoice lifecycle, identifying three major bottlenecks. By restructuring the reporting flow and preparing the operations for a custom dispatch portal, the theoretical invoice cycle was reduced to 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Stop guessing where the leaks are.
          </h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              Start your Business Diagnostic
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
