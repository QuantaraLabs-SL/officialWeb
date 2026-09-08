import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone, Search, PenTool, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quantara Social",
  description: "Grow what you've built with strategic social media, content, paid ads, SEO, and branding.",
};

export default function SocialPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[var(--color-teal)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-90">
            Quantara Social
          </p>
          <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}>
            Grow what you built.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Operations make you profitable. Marketing makes you known. We combine data-driven strategy with compelling creative to scale your reach.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>
              The Growth Engine
            </h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We don&apos;t just post for the sake of posting. Every campaign is designed to drive qualified traffic, build authority, and generate revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Megaphone className="text-[var(--color-teal)] mb-4" size={32} />,
                title: "Social Media Strategy",
                desc: "Platform-specific strategies that build engaged communities, not just vanity metrics."
              },
              {
                icon: <PenTool className="text-[var(--color-teal)] mb-4" size={32} />,
                title: "Content & Branding",
                desc: "High-impact visual identity and storytelling that positions you as the definitive leader in your space."
              },
              {
                icon: <BarChart3 className="text-[var(--color-teal)] mb-4" size={32} />,
                title: "Paid Advertising",
                desc: "Data-driven Meta and Google Ads campaigns optimized ruthlessly for Return on Ad Spend (ROAS)."
              },
              {
                icon: <Search className="text-[var(--color-teal)] mb-4" size={32} />,
                title: "SEO & Content Marketing",
                desc: "Technical SEO and targeted content that captures high-intent organic search traffic."
              },
              {
                icon: <Users className="text-[var(--color-teal)] mb-4" size={32} />,
                title: "Lead Generation",
                desc: "Automated funnels designed to capture, nurture, and convert your ideal customer profile."
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                {service.icon}
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="opacity-70 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-[var(--color-teal)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Ready to reach the right audience?
          </h2>
          <Button variant="paper" size="lg" asChild>
            <Link href="/contact">
              Let&apos;s talk growth
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
