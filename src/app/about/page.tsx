import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Quantara Labs, our mission, vision, and how we build intelligent software for modern organisations.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 text-[var(--color-teal)]">
            Our Story
          </p>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
            We diagnose before we build.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-slate)] max-w-2xl leading-relaxed">
            Quantara Labs was founded on a simple observation: too many businesses buy software before they understand the real problem holding them back.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Our Mission</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              To strip away operational waste and empower businesses with technology that actually works for them. We want to be the last agency you ever need to hire to fix your workflows.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Our Vision</h2>
            <p className="text-[var(--color-slate)] leading-relaxed">
              A business landscape where manual reporting, siloed tools, and repetitive tasks are a thing of the past—where human capital is spent entirely on growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-[var(--color-ink)] text-3xl">
            The Founders&apos; Observation
          </h2>
          <div className="space-y-6 text-[var(--color-slate)] leading-relaxed text-lg">
            <p>
              It started with three people looking at how modern businesses operate. We saw companies spending thousands on off-the-shelf software, only to track their actual metrics in messy Excel sheets and WhatsApp groups.
            </p>
            <p>
              We realized that most dev shops and marketing agencies don&apos;t care about your underlying operational friction—they just want to sell you an app or a campaign. We wanted to build something different: a technology partner that acts like an operations consultant first.
            </p>
            <p>
              By combining technology strategy, operational optimization, and growth marketing, we formed Quantara Labs and Quantara Social.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work With Clients */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-12 text-[var(--color-ink)] text-3xl">
            How we partner with you
          </h2>
          
          <div className="grid gap-12">
            <div className="flex gap-6">
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-[var(--color-line)] bg-[var(--color-mist)] items-center justify-center font-bold text-[var(--color-teal)] shrink-0">
                1
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-[var(--color-ink)]">No assumptions.</h3>
                <p className="text-[var(--color-slate)] leading-relaxed">
                  We don&apos;t start by writing code. We start by mapping your existing workflows, finding where time is lost, and quantifying the cost of your current inefficiency.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-[var(--color-line)] bg-[var(--color-mist)] items-center justify-center font-bold text-[var(--color-teal)] shrink-0">
                2
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-[var(--color-ink)]">Honest architecture.</h3>
                <p className="text-[var(--color-slate)] leading-relaxed">
                  If you don&apos;t need a custom app, we won&apos;t build you one. Sometimes the answer is an integration or a workflow automation. We prescribe what you actually need.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-[var(--color-line)] bg-[var(--color-mist)] items-center justify-center font-bold text-[var(--color-teal)] shrink-0">
                3
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-[var(--color-ink)]">Built to scale.</h3>
                <p className="text-[var(--color-slate)] leading-relaxed">
                  When we do build, we use modern, resilient stacks. Our software isn&apos;t just meant to solve today&apos;s problem; it&apos;s meant to be the foundation for your next five years of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Ready to fix your operations?
          </h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              Start with a Diagnostic
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
