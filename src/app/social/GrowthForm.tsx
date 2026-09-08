"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

export function GrowthForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Fake submission delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div 
        className="rounded-2xl border border-[var(--color-line)] bg-white shadow-sm flex flex-col items-center justify-center text-center"
        style={{ padding: "clamp(3rem, 5vw, 4rem)", minHeight: "400px" }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(18, 167, 131, 0.1)", color: "var(--color-teal)" }}>
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "1rem" }}>
          Growth journey initiated.
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", maxWidth: "28rem" }}>
          Thanks for reaching out! We've received your details and our growth team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="rounded-2xl border border-[var(--color-line)] bg-white shadow-sm overflow-hidden"
    >
      <div className="grid md:grid-cols-[1.5fr_1fr] h-full">
        {/* Form Side */}
        <div style={{ padding: "clamp(2rem, 5vw, 4rem)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.5rem" }}>
            Start your growth journey
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", marginBottom: "2rem" }}>
            Tell us where you are today, and we'll show you the path forward.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Business Name *
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                  placeholder="Acme Corp"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                />
              </div>

              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Industry *
                </label>
                <select 
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                >
                  <option value="" disabled>Select industry</option>
                  <option value="Retail">Retail</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Services">Services</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                Current marketing channels (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Social Media', 'SEO', 'Paid Ads', 'Content', 'None yet'].map(channel => (
                  <label key={channel} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)]" />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)" }} className="group-hover:text-[var(--color-ink)] transition-colors">
                      {channel}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Main growth goal *
                </label>
                <select 
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                >
                  <option value="" disabled>What's the primary objective?</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Sales">Sales</option>
                  <option value="Customer Retention">Customer Retention</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Budget Range (Optional)
                </label>
                <select 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                >
                  <option value="" disabled>Monthly budget</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $2,000">$500 – $2,000</option>
                  <option value="$2,000 - $5,000">$2,000 – $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                Website URL (Optional)
              </label>
              <input 
                type="url" 
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                placeholder="https://yourwebsite.com"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
              />
            </div>

            <div className="space-y-2">
              <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                Message or specific challenge *
              </label>
              <textarea 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] transition-colors resize-none"
                placeholder="Where are you stuck? What do you want to achieve?"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
              />
            </div>

            <div className="space-y-3 pb-2">
              <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-ink)" }}>
                Preferred Contact Method *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input required type="radio" name="contact" value="Email" className="w-4 h-4 border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)] bg-[var(--color-paper)]" />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)" }} className="group-hover:text-[var(--color-ink)] transition-colors">
                    Email
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input required type="radio" name="contact" value="WhatsApp" className="w-4 h-4 border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)] bg-[var(--color-paper)]" />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)" }} className="group-hover:text-[var(--color-ink)] transition-colors">
                    WhatsApp
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[var(--color-line)]">
              <Button 
                type="submit" 
                size="lg" 
                disabled={status === "submitting"}
                style={{ 
                  backgroundColor: "var(--color-teal)", 
                  color: "white",
                  opacity: status === "submitting" ? 0.7 : 1,
                  minWidth: "160px"
                }}
              >
                {status === "submitting" ? "Submitting..." : "Start growing"}
                {status !== "submitting" && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-slate)" }}>
                We'll never share your data. Your growth starts here.
              </p>
            </div>
          </form>
        </div>

        {/* Value Prop / Info Side */}
        <div 
          className="hidden md:flex flex-col justify-between"
          style={{ 
            padding: "clamp(2rem, 5vw, 4rem)", 
            backgroundColor: "rgba(18, 167, 131, 0.05)",
            borderLeft: "1px solid var(--color-line)"
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "var(--color-paper)", border: "1px solid var(--color-line)", color: "var(--color-teal)" }}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "1rem", lineHeight: 1.3 }}>
              Why start with a growth inquiry?
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "2rem" }}>
              Every business is unique. By understanding your current channels, goals, and operational foundation, we can build a highly targeted growth strategy rather than a one-size-fits-all package.
            </p>
            
            <ul className="space-y-4">
              {[
                "Custom strategy outline within 48 hours",
                "Deep-dive into your analytics & existing channels",
                "No pressure, no aggressive sales tactics",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--color-teal)" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-ink)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-line)]">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)", fontStyle: "italic" }}>
              Already a Labs client? Mention it in your message to fast-track your growth integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
