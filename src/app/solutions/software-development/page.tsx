import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Software Development",
  description: "Custom platforms, internal tools, and integrations engineered to your exact constraints.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-6 text-[var(--color-teal)] hover:opacity-80 transition-opacity">
            <ArrowRight size={16} className="rotate-180" /> Back to Solutions
          </Link>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
            Software Development
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
            Off-the-shelf software never quite fits. We build systems, websites, and apps tailored to your actual business workflows.
          </p>
        </div>
      </section>

      {/* Problem Statement & Approach */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">The Problem</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              You are paying monthly subscriptions for three different platforms that don&apos;t talk to each other. Your team spends hours manually copying data from your CRM to your ERP. Off-the-shelf software forces your business to change how it works, rather than working how your business needs it to.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Our Approach</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              We don&apos;t write a single line of code until we understand the operational bottleneck we are trying to solve. When we do build, we create lightweight, highly specific internal tools and integrations that bridge the gaps in your operations, built on modern web technologies designed to scale.
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
              "Custom Web Applications",
              "Internal Dashboard & Portals",
              "API Integrations & Middleware",
              "Legacy System Modernization",
              "Corporate Websites & CMS",
              "Technical Architecture Consulting"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-paper)] border border-[var(--color-line)]">
                <Code2 className="text-[var(--color-teal)] shrink-0 mt-0.5" size={20} />
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
            <h3 className="font-bold text-xl mb-3 text-[var(--color-ink)]">Custom Inventory Middleware</h3>
            <p className="text-[var(--color-slate)] leading-relaxed mb-4">
              <strong>Scenario:</strong> A regional retailer was using a legacy point-of-sale system in-store and Shopify online. Stock levels were updated manually at the end of each day, leading to overselling online and angry customers.
            </p>
            <p className="text-[var(--color-slate)] leading-relaxed">
              <strong>Result:</strong> We built a custom middleware application that polled the legacy POS database every 5 minutes and synced the inventory directly to Shopify via their API, eliminating manual data entry and ending online stockouts completely.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Need software that actually fits?
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
