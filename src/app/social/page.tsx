import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Share2, PenTool, TrendingUp, Search, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quantara Social | Growth & Marketing",
  description: "Once we've optimized how your business runs, Quantara Social grows what you built.",
};

const SERVICES = [
  {
    title: "Social Media Management",
    desc: "Consistent, high-engagement content across your channels.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    desc: "Blogs, case studies, and thought leadership that build authority.",
    icon: PenTool,
  },
  {
    title: "Paid Advertising",
    desc: "Data-driven ad campaigns that deliver ROI, not just clicks.",
    icon: TrendingUp,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Get found by the right customers at the right time.",
    icon: Search,
  },
  {
    title: "Branding & Identity",
    desc: "A cohesive brand that stands out and builds trust.",
    icon: Layers,
  },
];

const DIFFERENCES = [
  "Data-backed decisions",
  "Built on operational understanding",
  "Sri Lankan market expertise",
  "Transparent reporting",
];

export default function SocialPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION (Teal Gradient)
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(18, 167, 131, 0.1) 0%, rgba(18, 167, 131, 0.05) 50%, var(--color-paper) 100%)",
        }}
      >
        <div className="page-wrapper max-w-4xl mx-auto z-10 relative">
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--color-teal)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            The Grow Phase
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "var(--color-ink)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Grow what you&apos;ve built.
            <span style={{ color: "var(--color-amber)" }}>.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.25rem",
              color: "var(--color-slate)",
              lineHeight: 1.6,
              maxWidth: "36rem",
              marginBottom: "2.5rem",
            }}
          >
            Quantara Social takes the operational efficiency we&apos;ve built together and turns it into market presence, customer growth, and brand authority.
          </p>
          <Button size="lg" asChild style={{ backgroundColor: "var(--color-teal)", color: "white" }}>
            <a href="https://social.quantara.com" target="_blank" rel="noopener noreferrer">
              Start growing <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BRIDGE SECTION (Mist)
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "5rem 1.5rem", background: "var(--color-mist)" }}
      >
        <div className="page-wrapper max-w-4xl mx-auto">
          <div
            className="rounded-2xl border border-[var(--color-line)] bg-white relative overflow-hidden shadow-sm"
            style={{ padding: "clamp(2rem, 5vw, 3rem)" }}
          >
            {/* Teal Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "var(--color-teal)" }} />
            
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                color: "var(--color-slate)",
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>Quantara Labs</strong> finds what&apos;s slowing you down and fixes it.{" "}
              <strong style={{ color: "var(--color-teal)", fontWeight: 600 }}>Quantara Social</strong> takes that foundation and builds your brand, audience, and revenue. Two phases, one mission: your success.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "8rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Our Growth Services
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
              Targeted strategies that turn efficient operations into market dominance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[var(--color-line)] transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md group relative overflow-hidden"
                  style={{ padding: "2rem" }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-teal)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: "rgba(18, 167, 131, 0.1)", color: "var(--color-teal)" }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE DIFFERENCE (Pale Teal)
      ══════════════════════════════════════ */}
      <section
        className="relative border-b border-[var(--color-line)] overflow-hidden"
        style={{ padding: "8rem 1.5rem", background: "rgba(18, 167, 131, 0.05)" }}
      >
        {/* Watermark shape */}
        <div 
          className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03]"
          style={{ 
            width: "50vw", 
            height: "50vw", 
            borderRadius: "100px", 
            background: "var(--color-teal)",
            transform: "translate(30%, 30%) rotate(45deg)"
          }} 
        />

        <div className="page-wrapper max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              We don&apos;t guess.<br />
              <span style={{ color: "var(--color-teal)" }}>We grow.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
              Most marketing agencies operate in a vacuum. We build on the solid operational foundation of Quantara Labs, meaning your growth scales flawlessly without breaking your business.
            </p>
          </div>

          <div className="space-y-4">
            {DIFFERENCES.map((diff, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[var(--color-line)] shadow-sm">
                <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: "var(--color-amber)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  {diff}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RESULTS / SOCIAL PROOF (Placeholder)
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(18, 167, 131, 0.1)", color: "var(--color-teal)", fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-sans)" }}>
            CASE STUDIES
          </div>
          <div 
            className="p-12 rounded-2xl border-2 border-dashed border-[var(--color-line)]"
            style={{ backgroundColor: "var(--color-mist)" }}
          >
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", fontStyle: "italic" }}>
              Client success stories coming soon – we&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA (Dark Teal)
      ══════════════════════════════════════ */}
      <section
        className="text-center"
        style={{
          padding: "8rem 1.5rem",
          background: "linear-gradient(135deg, var(--color-ink) 0%, #082a22 100%)", // Very dark ink/teal
        }}
      >
        <div className="page-wrapper max-w-3xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "white", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Ready to grow what you&apos;ve built?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6 }}>
            Let&apos;s take your business to the next phase with data-driven marketing and relentless focus on ROI.
          </p>
          <Button size="lg" asChild style={{ backgroundColor: "var(--color-teal)", color: "white", border: "none" }}>
            <a href="https://social.quantara.com" target="_blank" rel="noopener noreferrer">
              Go to Quantara Social
            </a>
          </Button>
          
          <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)]">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
              Built on the operational foundation of <Link href="/" className="hover:text-white transition-colors underline decoration-[rgba(255,255,255,0.3)] underline-offset-4">Quantara Labs</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
