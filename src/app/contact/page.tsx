"use client";

import { useState } from "react";
import { Mail, MessageCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { validateContactForm, type ContactFormData, type ContactFormErrors } from "./validation";
import { emailjsConfig } from "./config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    business: "",
    type: "",
    otherDetails: "",
    challenge: "",
    method: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    const nextData = { ...formData, [field]: value };
    setFormData(nextData);

    if (errors[field]) {
      const validationResult = validateContactForm(nextData);
      setErrors((prev) => ({
        ...prev,
        [field]: validationResult.errors[field],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = validateContactForm(formData);

    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          business: formData.business,
          type: formData.type,
          otherDetails: formData.otherDetails?.trim() || "N/A",
          challenge: formData.challenge,
          method: formData.method,
        },
        emailjsConfig.publicKey
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        business: "",
        type: "",
        otherDetails: "",
        challenge: "",
        method: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitError("Failed to send your inquiry. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get In Touch
          </span>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-ink)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            Let&apos;s talk about your business.
          </h1>
          <p
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", color: "var(--color-slate)", lineHeight: 1.6, maxWidth: "40rem", margin: "0 auto" }}
          >
            Fill in the form below, or reach out directly – we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION (TWO-COLUMN)
      ══════════════════════════════════════ */}
      <section
        className="border-b border-[var(--color-line)]"
        style={{ padding: "6rem 1.5rem", background: "var(--color-paper)" }}
      >
        <div className="page-wrapper max-w-6xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Form (Span 3) */}
          <div className="md:col-span-3">
            <div style={{ height: "4px", width: "48px", background: "linear-gradient(90deg, var(--color-blue), var(--color-teal))", borderRadius: "2px", marginBottom: "2rem" }}></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--color-ink)", marginBottom: "2rem" }}>
              Send an Inquiry
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-[var(--color-line)] flex flex-col items-center justify-center text-center" style={{ padding: "4rem 2rem", background: "var(--color-mist)" }}>
                <CheckCircle2 size={48} style={{ color: "var(--color-teal)", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                  Inquiry Sent Successfully!
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-slate)", fontSize: "1.125rem" }}>
                  Thank you for reaching out. A member of our team will review your details and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                      Full Name <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-transparent outline-none transition-colors"
                      style={{ 
                        border: errors.name ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                        borderRadius: "0.5rem", 
                        padding: "0.875rem 1rem", 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "1rem", 
                        color: "var(--color-ink)" 
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                      Email Address <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-transparent outline-none transition-colors"
                      style={{ 
                        border: errors.email ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                        borderRadius: "0.5rem", 
                        padding: "0.875rem 1rem", 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "1rem", 
                        color: "var(--color-ink)" 
                      }}
                    />
                    {errors.email && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="business" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                      Business Name <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="business" 
                      value={formData.business}
                      onChange={(e) => handleChange("business", e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-transparent outline-none transition-colors"
                      style={{ 
                        border: errors.business ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                        borderRadius: "0.5rem", 
                        padding: "0.875rem 1rem", 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "1rem", 
                        color: "var(--color-ink)" 
                      }}
                    />
                    {errors.business && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                        {errors.business}
                      </span>
                    )}
                  </div>

                  {/* Business Type */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="type" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                      Business Type <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <select 
                      id="type" 
                      value={formData.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className="w-full bg-transparent outline-none transition-colors appearance-none"
                      style={{ 
                        border: errors.type ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                        borderRadius: "0.5rem", 
                        padding: "0.875rem 1rem", 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "1rem", 
                        color: "var(--color-ink)" 
                      }}
                    >
                      <option value="" disabled>Select an industry...</option>
                      <option value="Retail">Retail & E-Commerce</option>
                      <option value="Logistics">Logistics & Supply Chain</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Services">Professional Services</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.type && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                        {errors.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conditional Textarea for 'Other' */}
                {formData.type === "Other" && (
                  <div className="flex flex-col gap-2">
                    <label htmlFor="otherDetails" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                      Please specify your business or industry <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <textarea 
                      id="otherDetails" 
                      rows={3}
                      value={formData.otherDetails || ""}
                      onChange={(e) => handleChange("otherDetails", e.target.value)}
                      placeholder="Tell us more about your industry or business model..."
                      className="w-full bg-transparent outline-none transition-colors resize-none"
                      style={{ 
                        border: errors.otherDetails ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                        borderRadius: "0.5rem", 
                        padding: "0.875rem 1rem", 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "1rem", 
                        color: "var(--color-ink)" 
                      }}
                    />
                    {errors.otherDetails && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                        {errors.otherDetails}
                      </span>
                    )}
                  </div>
                )}

                {/* Main Challenge */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="challenge" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                    Main Challenge <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-slate)", margin: "-0.25rem 0 0.25rem 0" }}>What&apos;s the biggest operational inefficiency you&apos;re facing?</p>
                  <textarea 
                    id="challenge" 
                    rows={4}
                    value={formData.challenge}
                    onChange={(e) => handleChange("challenge", e.target.value)}
                    placeholder="We spend too much time manually entering data..."
                    className="w-full bg-transparent outline-none transition-colors resize-none"
                    style={{ 
                      border: errors.challenge ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                      borderRadius: "0.5rem", 
                      padding: "0.875rem 1rem", 
                      fontFamily: "var(--font-sans)", 
                      fontSize: "1rem", 
                      color: "var(--color-ink)" 
                    }}
                  />
                  {errors.challenge && (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                      {errors.challenge}
                    </span>
                  )}
                </div>

                {/* Contact Method */}
                <div className="flex flex-col gap-2 mb-2">
                  <label htmlFor="method" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)" }}>
                    Preferred Contact Method <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select 
                    id="method" 
                    value={formData.method}
                    onChange={(e) => handleChange("method", e.target.value)}
                    className="w-full bg-transparent outline-none transition-colors appearance-none"
                    style={{ 
                      border: errors.method ? "1px solid #ef4444" : "1px solid var(--color-line)", 
                      borderRadius: "0.5rem", 
                      padding: "0.875rem 1rem", 
                      fontFamily: "var(--font-sans)", 
                      fontSize: "1rem", 
                      color: "var(--color-ink)" 
                    }}
                  >
                    <option value="" disabled>Select preferred method...</option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                  {errors.method && (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#ef4444" }}>
                      {errors.method}
                    </span>
                  )}
                </div>

                {/* Submit Error */}
                {submitError && (
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#ef4444",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all"
                  style={{
                    background: isSubmitting 
                      ? "var(--color-slate)" 
                      : isHovered 
                        ? "var(--color-teal)" 
                        : "var(--color-blue)",
                    color: "white",
                    padding: "1rem 2rem",
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.8 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Send an Inquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                
                {/* Trust Signal */}
                <p style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)", marginTop: "0.5rem" }}>
                  We&apos;ll never share your data. Your information is safe with us.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact (Span 2) */}
          <div className="md:col-span-2">
            <div 
              className="rounded-2xl flex flex-col h-full"
              style={{ 
                background: "var(--color-mist)", 
                padding: "3rem 2rem",
                borderLeft: "4px solid var(--color-teal)",
                borderTop: "1px solid var(--color-line)",
                borderRight: "1px solid var(--color-line)",
                borderBottom: "1px solid var(--color-line)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "2rem" }}>
                Direct Contact
              </h3>

              <div className="flex flex-col gap-8 flex-1">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1" style={{ color: "var(--color-teal)" }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>Email Us</h4>
                    <a href="mailto:hello@quantara.com" style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", textDecoration: "none" }} className="hover:text-[var(--color-blue)] transition-colors">
                      hello@quantara.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="mt-1" style={{ color: "var(--color-teal)" }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>WhatsApp</h4>
                    <a href="https://wa.me/94770000000" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", textDecoration: "none" }} className="hover:text-[var(--color-blue)] transition-colors">
                      +94 XX XXX XXXX
                    </a>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-slate)", marginTop: "0.5rem", padding: "0.25rem 0.5rem", background: "rgba(18, 167, 131, 0.1)", display: "inline-block", borderRadius: "4px" }}>
                      Prefer WhatsApp? We respond faster there.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 mt-auto pt-8 border-t border-[var(--color-line)]">
                  <div>
                    <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>Headquarters</h4>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", color: "var(--color-slate)", lineHeight: 1.5 }}>
                      Colombo,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", background: "var(--color-ink)", color: "white", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    We reply within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
