import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies and partner success stories from Quantara.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-[var(--color-mist)]">
        <div className="page-wrapper max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display font-bold mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-slate)] max-w-2xl mx-auto leading-relaxed">
              Real business problems, quantified solutions. Detailed case studies and partner success stories are currently in development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="flex flex-col h-full rounded-xl p-8 border border-[var(--color-line)] bg-[var(--color-paper)] opacity-70"
              >
                <div className="w-full h-48 bg-[var(--color-mist)] rounded-lg mb-6 flex items-center justify-center border border-[var(--color-line)] border-dashed">
                  <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-slate)]">Partner {item}</span>
                </div>
                <div className="w-3/4 h-6 bg-[var(--color-mist)] rounded mb-4"></div>
                <div className="w-full h-4 bg-[var(--color-mist)] rounded mb-2"></div>
                <div className="w-5/6 h-4 bg-[var(--color-mist)] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="page-wrapper max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-8 text-3xl md:text-4xl">
            Want to see how this applies to you?
          </h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              Get in touch
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
