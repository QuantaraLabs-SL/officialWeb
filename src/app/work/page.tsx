import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, BarChart, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Quantara Labs",
  description: "Real results for real businesses. See how we solve operational inefficiencies.",
};

export default function WorkPage() {
  const placeholders = [
    {
      title: "Retail Operations",
      desc: "Case study details coming soon.",
      icon: <Briefcase size={32} style={{ color: "var(--color-blue)" }} />,
    },
    {
      title: "Logistics Automation",
      desc: "Case study details coming soon.",
      icon: <BarChart size={32} style={{ color: "var(--color-teal)" }} />,
    },
    {
      title: "Custom Platform Migration",
      desc: "Case study details coming soon.",
      icon: <Code size={32} style={{ color: "var(--color-slate)" }} />,
    },
    {
      title: "Financial Services App",
      desc: "Case study details coming soon.",
      icon: <Briefcase size={32} style={{ color: "var(--color-teal)" }} />,
    },
    {
      title: "Healthcare Data System",
      desc: "Case study details coming soon.",
      icon: <BarChart size={32} style={{ color: "var(--color-slate)" }} />,
    },
    {
      title: "E-Commerce Pipeline",
      desc: "Case study details coming soon.",
      icon: <Code size={32} style={{ color: "var(--color-blue)" }} />,
    },
  ];

  return (
    <>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          padding: "8rem 1.5rem 6rem",
          background: "linear-gradient(135deg, rgba(27, 75, 143, 0.08) 0%, rgba(18, 167, 131, 0.05) 100%)",
        }}
      >
        <div className="page-wrapper max-w-4xl mx-auto text-center relative z-10">
          <span
            className="uppercase"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-teal)", display: "inline-block", marginBottom: "1rem" }}
          >
            Portfolio
          </span>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            Our Work
          </h1>
          <p
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "40rem", margin: "0 auto" }}
          >
            Real results for real businesses. Explore our latest partnerships and the systems we&apos;ve built. Case studies coming soon.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE STUDY GRID
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  border: "1px solid rgba(27, 75, 143, 0.2)",
                  boxShadow: "var(--shadow-sm)",
                  overflow: "hidden",
                }}
              >
                {/* Hover overlay that shifts border color implicitly via shadow since border transitions can be tricky */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: "2px solid var(--color-blue)", borderRadius: "inherit" }}
                ></div>

                {/* Placeholder Image Area */}
                <div
                  className="w-full flex items-center justify-center border-b border-[var(--color-line)]"
                  style={{ height: "14rem", background: "linear-gradient(135deg, rgba(27,75,143,0.03) 0%, rgba(18,167,131,0.03) 100%)" }}
                >
                  {item.icon}
                </div>

                {/* Content Area */}
                <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "inline-block", border: "1px dashed var(--color-slate)", color: "var(--color-slate)", padding: "0.25rem 0.5rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Coming Soon
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6, flex: 1 }}>
                    {item.desc}
                  </p>
                  
                  <div style={{ marginTop: "1.5rem" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-blue)", opacity: 0.5 }}>
                      Read Case Study <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════ */}
      <section
        style={{ padding: "6rem 1.5rem", background: "var(--color-mist)" }}
      >
        <div className="page-wrapper max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--color-ink)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Ready to start your own success story?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", marginBottom: "2.5rem" }}>
            Whether you need a custom platform or a complete workflow overhaul, we&apos;re ready to build it.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all"
              style={{
                background: "var(--color-blue)",
                color: "white",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
              }}
            >
              Let&apos;s talk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
