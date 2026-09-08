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

  const inputStyles = {
    fontFamily: "var(--font-sans)",
    fontSize: "1rem",
    backgroundColor: "var(--color-paper)",
    color: "var(--color-ink)",
    padding: "0.75rem 1rem",
    borderRadius: "0",
    border: "1px solid var(--color-line)",
    width: "100%",
    boxSizing: "border-box" as const,
    outline: "none"
  };

  if (status === "success") {
    return (
      <div 
        style={{ 
          padding: "clamp(3rem, 5vw, 4rem)", 
          minHeight: "400px", 
          borderLeft: "4px solid var(--color-teal)",
          borderTop: "1px solid var(--color-line)",
          borderRight: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
          borderRadius: "1rem",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div style={{ width: "4rem", height: "4rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", backgroundColor: "rgba(18, 167, 131, 0.1)", color: "var(--color-teal)" }}>
          <CheckCircle2 style={{ width: "2rem", height: "2rem" }} />
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
      style={{ 
        borderTop: "4px solid var(--color-teal)",
        borderLeft: "1px solid var(--color-line)",
        borderRight: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
        borderRadius: "1rem",
        backgroundColor: "white",
        overflow: "hidden"
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", minHeight: "100%" }}>
        {/* Form Side */}
        <div style={{ flex: "1 1 60%", minWidth: "300px", padding: "clamp(2.5rem, 5vw, 4rem)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>
            Start your growth journey
          </h3>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", marginBottom: "3rem" }}>
            Tell us where you are today, and we'll show you the path forward.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            
            {/* Section 1: Business Information */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid var(--color-line)", paddingBottom: "0.75rem" }}>
                <Briefcase style={{ width: "1.25rem", height: "1.25rem", color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)", margin: 0 }}>
                  Business Information
                </h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Business Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="E.g., Nexus Retail Group"
                    style={inputStyles}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Industry <span style={{ color: "red" }}>*</span>
                  </label>
                  <select 
                    required
                    defaultValue=""
                    style={inputStyles}
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-slate)", margin: 0 }}>
                    Helps us understand your market context.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Website URL
                  </label>
                  <input 
                    type="url" 
                    placeholder="https://yourwebsite.com"
                    style={inputStyles}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                    Budget Range
                  </label>
                  <select 
                    defaultValue=""
                    style={inputStyles}
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
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid var(--color-line)", paddingBottom: "0.75rem" }}>
                <BarChart style={{ width: "1.25rem", height: "1.25rem", color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)", margin: 0 }}>
                  Marketing & Goals
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Current marketing channels
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                  {['Social Media', 'Search Engine Optimization (SEO)', 'Paid Advertising', 'Content Marketing', 'None yet'].map(channel => (
                    <label key={channel} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--color-line)", backgroundColor: "var(--color-paper)", cursor: "pointer" }}>
                      <input type="checkbox" style={{ width: "1.25rem", height: "1.25rem", cursor: "pointer", accentColor: "var(--color-teal)" }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-ink)" }}>
                        {channel}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Main growth goal <span style={{ color: "red" }}>*</span>
                </label>
                <select 
                  required
                  defaultValue=""
                  style={inputStyles}
                >
                  <option value="" disabled>What is the primary objective of this engagement?</option>
                  <option value="Brand Awareness">Increase Brand Awareness</option>
                  <option value="Lead Generation">Drive Qualified Leads</option>
                  <option value="Sales">Boost Direct Sales</option>
                  <option value="Customer Retention">Improve Customer Retention</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-ink)" }}>
                  Message or specific challenge <span style={{ color: "red" }}>*</span>
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Where are you currently stuck? What does success look like for you?"
                  style={{ ...inputStyles, resize: "none" }}
                />
              </div>
            </div>

            {/* Section 3: Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "1px solid var(--color-line)", paddingBottom: "0.75rem" }}>
                <Phone style={{ width: "1.25rem", height: "1.25rem", color: "var(--color-teal)" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-ink)", margin: 0 }}>
                  Contact Preference
                </h4>
              </div>

              <div style={{ display: "flex", gap: "2rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                  <input required type="radio" name="contact" value="Email" style={{ width: "1.25rem", height: "1.25rem", cursor: "pointer", accentColor: "var(--color-teal)" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-ink)" }}>
                    Email
                  </span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                  <input required type="radio" name="contact" value="WhatsApp" style={{ width: "1.25rem", height: "1.25rem", cursor: "pointer", accentColor: "var(--color-teal)" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-ink)" }}>
                    WhatsApp
                  </span>
                </label>
              </div>
            </div>

            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--color-line)" }}>
              <Button 
                type="submit" 
                size="lg" 
                disabled={status === "submitting"}
                style={{ 
                  backgroundColor: "var(--color-teal)", 
                  color: "white",
                  opacity: status === "submitting" ? 0.7 : 1,
                  padding: "1rem 2rem",
                  width: "100%",
                  maxWidth: "300px",
                  fontSize: "1.125rem",
                  borderRadius: "0",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s ease",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                {status === "submitting" ? "Submitting..." : "Start growing"}
                {status !== "submitting" && <ArrowRight style={{ marginLeft: "0.5rem", width: "1.25rem", height: "1.25rem" }} />}
              </Button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)", marginTop: "1rem", margin: 0, paddingTop: "1rem" }}>
                We'll never share your data. Your growth starts here.
              </p>
            </div>
          </form>
        </div>

        {/* Value Prop / Info Side */}
        <div 
          style={{ 
            flex: "1 1 35%",
            minWidth: "300px",
            padding: "clamp(2.5rem, 5vw, 4rem)", 
            backgroundColor: "rgba(18, 167, 131, 0.05)",
            borderLeft: "1px solid var(--color-line)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ position: "sticky", top: "8rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", backgroundColor: "var(--color-paper)", border: "1px solid var(--color-line)", color: "var(--color-teal)" }}>
              <TrendingUp style={{ width: "1.5rem", height: "1.5rem" }} />
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "1rem", lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0, paddingBottom: "1rem" }}>
              Why start with a growth inquiry?
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "2.5rem", margin: 0, paddingBottom: "2.5rem" }}>
              Every business is unique. By understanding your current channels, goals, and operational foundation, we can build a highly targeted growth strategy rather than a one-size-fits-all package.
            </p>
            
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: 0, margin: 0, listStyle: "none" }}>
              {[
                "Custom strategy outline within 48 hours",
                "Deep-dive into your analytics & existing channels",
                "No pressure, no aggressive sales tactics",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.125rem", backgroundColor: "var(--color-teal)" }}>
                    <CheckCircle2 style={{ width: "1rem", height: "1rem", color: "white" }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem", color: "var(--color-ink)", lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-line)" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-slate)", lineHeight: 1.6, margin: 0 }}>
                Already a <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>Quantara Labs</span> client? Mention it in your message to fast-track your growth integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
