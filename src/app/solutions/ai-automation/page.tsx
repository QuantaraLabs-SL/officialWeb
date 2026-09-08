import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI & Automation",
  description: "Automate manual tasks and empower your team with intelligent systems that drive growth.",
};

export default function AIAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-6 text-[var(--color-teal)] hover:opacity-80 transition-opacity">
            <ArrowRight size={16} className="rotate-180" /> Back to Solutions
          </Link>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
            AI & Automation
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
            Manual reporting, document processing, lead follow-up – we automate the repetitive so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Problem Statement & Approach */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">The Problem</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              Your highest-paid employees are spending 30% of their day on administrative copy-pasting. Customer inquiries sit in an inbox for 12 hours before someone has the bandwidth to reply. Important documents are manually parsed, filed, and forwarded, creating severe operational drag.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Our Approach</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              We deploy intelligent automation exactly where it has the highest ROI. We don&apos;t build AI for the sake of AI. We build specific, narrow agents and automation pipelines that take over high-volume, low-complexity tasks, freeing your team to do the creative, high-value work they were actually hired to do.
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
              "Intelligent Document Processing",
              "Automated Customer Support Agents",
              "Workflow & Task Automation",
              "Sales Pipeline Automation",
              "Custom LLM Integrations",
              "Data Scraping & Structuring"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-paper)] border border-[var(--color-line)]">
                <Bot className="text-[var(--color-teal)] shrink-0 mt-0.5" size={20} />
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
            <h3 className="font-bold text-xl mb-3 text-[var(--color-ink)]">Automated Vendor Onboarding</h3>
            <p className="text-[var(--color-slate)] leading-relaxed mb-4">
              <strong>Scenario:</strong> A supply chain company spent an average of 3 hours manually processing PDF contracts, insurance certificates, and tax forms for every new vendor, causing onboarding delays of up to a week.
            </p>
            <p className="text-[var(--color-slate)] leading-relaxed">
              <strong>Result:</strong> We implemented an automated document processing pipeline. When a vendor emails their documents, an AI extracts the required data, verifies the insurance expiration dates, and populates the ERP automatically. Human involvement was reduced to a 2-minute final approval click.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Stop doing robot work.
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
