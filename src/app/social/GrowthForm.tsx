"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, TrendingUp, Briefcase, BarChart, Phone } from "lucide-react";

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
        style={{ padding: "clamp(3rem, 5vw, 4rem)", minHeight: "400px", borderLeft: "4px solid var(--color-teal)" }}
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
      style={{ borderTop: "4px solid var(--color-teal)" }}
    >
      <div className="grid lg:grid-cols-[1.5fr_1fr] h-full">
        {/* Form Side */}
        <div style={{ padding: "clamp(2.5rem, 5vw, 4rem)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
            Start your growth journey
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", marginBottom: "3rem" }}>
            Tell us where you are today, and we'll show you the path forward.
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Section 1: Business Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--color-line)] pb-3">
                <Briefcase className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  Business Information
                </h4>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors"
                    placeholder="E.g., Nexus Retail Group"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select 
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-slate)", marginTop: "0.25rem" }}>
                    Helps us understand your market context.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Website URL
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors"
                    placeholder="https://yourwebsite.com"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Budget Range
                  </label>
                  <select 
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                  >
                    <option value="" disabled>Estimated monthly budget</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $2,000">$500 – $2,000</option>
                    <option value="$2,000 - $5,000">$2,000 – $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Marketing & Goals */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--color-line)] pb-3">
                <BarChart className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  Marketing & Goals
                </h4>
              </div>

              <div className="space-y-3">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Current marketing channels
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Social Media', 'Search Engine Optimization (SEO)', 'Paid Advertising', 'Content Marketing', 'None yet'].map(channel => (
                    <label key={channel} className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg border border-[var(--color-line)] hover:border-[var(--color-teal)] transition-colors bg-[var(--color-paper)]">
                      <input type="checkbox" className="w-5 h-5 rounded-sm border border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)] cursor-pointer" />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-ink)" }}>
                        {channel}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Main growth goal <span className="text-red-500">*</span>
                </label>
                <select 
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                >
                  <option value="" disabled>What is the primary objective of this engagement?</option>
                  <option value="Brand Awareness">Increase Brand Awareness</option>
                  <option value="Lead Generation">Drive Qualified Leads</option>
                  <option value="Sales">Boost Direct Sales</option>
                  <option value="Customer Retention">Improve Customer Retention</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Message or specific challenge <span className="text-red-500">*</span>
                </label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-none border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors resize-none"
                  placeholder="Where are you currently stuck? What does success look like for you?"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", backgroundColor: "var(--color-paper)", color: "var(--color-ink)" }}
                />
              </div>
            </div>

            {/* Section 3: Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--color-line)] pb-3">
                <Phone className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  Contact Preference
                </h4>
              </div>

              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input required type="radio" name="contact" value="Email" className="w-5 h-5 border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)] bg-[var(--color-paper)] cursor-pointer" />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-ink)" }}>
                    Email
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input required type="radio" name="contact" value="WhatsApp" className="w-5 h-5 border-[var(--color-line)] text-[var(--color-teal)] focus:ring-[var(--color-teal)] bg-[var(--color-paper)] cursor-pointer" />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-ink)" }}>
                    WhatsApp
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--color-line)]">
              <Button 
                type="submit" 
                size="lg" 
                disabled={status === "submitting"}
                className="group"
                style={{ 
                  backgroundColor: "var(--color-teal)", 
                  color: "white",
                  opacity: status === "submitting" ? 0.7 : 1,
                  padding: "1rem 2rem",
                  width: "100%",
                  maxWidth: "300px",
                  fontSize: "1.125rem",
                  borderRadius: "0", // the prompt requested "rounded-none"
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s ease"
                }}
              >
                {status === "submitting" ? "Submitting..." : "Start growing"}
                {status !== "submitting" && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </Button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)", marginTop: "1rem" }}>
                We'll never share your data. Your growth starts here.
              </p>
            </div>
          </form>
        </div>

        {/* Value Prop / Info Side */}
        <div 
          className="hidden lg:flex flex-col"
          style={{ 
            padding: "clamp(2.5rem, 5vw, 4rem)", 
            backgroundColor: "rgba(18, 167, 131, 0.05)",
            borderLeft: "1px solid var(--color-line)"
          }}
        >
          <div className="sticky top-32">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "var(--color-paper)", border: "1px solid var(--color-line)", color: "var(--color-teal)" }}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "1rem", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
              Why start with a growth inquiry?
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "2.5rem" }}>
              Every business is unique. By understanding your current channels, goals, and operational foundation, we can build a highly targeted growth strategy rather than a one-size-fits-all package.
            </p>
            
            <ul className="space-y-6">
              {[
                "Custom strategy outline within 48 hours",
                "Deep-dive into your analytics & existing channels",
                "No pressure, no aggressive sales tactics",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "var(--color-teal)" }}>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem", color: "var(--color-ink)", lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-[var(--color-line)]">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6 }}>
                Already a <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>Quantara Labs</span> client? Mention it in your message to fast-track your growth integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
