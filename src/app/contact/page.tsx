"use client";

import { useState } from "react";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="pt-32 pb-24 px-6 bg-[var(--color-mist)] min-h-screen">
      <div className="page-wrapper max-w-6xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16">
        
        {/* Form Column */}
        <div>
          <h1 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--color-ink)", lineHeight: 1.1 }}>
            Business Diagnostic
          </h1>
          <p className="text-lg text-[var(--color-slate)] mb-12 max-w-xl">
            Tell us how your business runs today. We&apos;ll help you map out the bottlenecks and show you what to fix first.
          </p>

          {isSuccess ? (
            <div className="bg-[var(--color-paper)] p-8 rounded-xl border border-[var(--color-line)] text-center py-16">
              <div className="w-16 h-16 bg-[rgba(18,167,131,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-[var(--color-teal)]" size={32} />
              </div>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-ink)]">Request Received</h2>
              <p className="text-[var(--color-slate)] mb-8">
                Thank you for reaching out. A Quantara strategist will review your submission and contact you shortly.
              </p>
              <Button variant="outline" onClick={() => setIsSuccess(false)}>
                Submit another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[var(--color-paper)] p-8 rounded-xl border border-[var(--color-line)] space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[var(--color-ink)]">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-[var(--color-line)] bg-[var(--color-mist)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-semibold text-[var(--color-ink)]">Business Name *</label>
                  <input 
                    type="text" 
                    id="businessName" 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-[var(--color-line)] bg-[var(--color-mist)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="businessType" className="text-sm font-semibold text-[var(--color-ink)]">Industry / Business Type</label>
                <select 
                  id="businessType" 
                  className="w-full px-4 py-3 rounded-md border border-[var(--color-line)] bg-[var(--color-mist)] focus:outline-none focus:border-[var(--color-teal)] transition-colors appearance-none"
                >
                  <option value="">Select an option...</option>
                  <option value="ecommerce">Retail & E-Commerce</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                  <option value="b2b">B2B Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="challenge" className="text-sm font-semibold text-[var(--color-ink)]">Main Challenge *</label>
                <textarea 
                  id="challenge" 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-[var(--color-line)] bg-[var(--color-mist)] focus:outline-none focus:border-[var(--color-teal)] transition-colors resize-none"
                  placeholder="Where are you losing the most time or money?"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-ink)]">Preferred Contact Method *</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="email" required className="accent-[var(--color-teal)]" defaultChecked />
                    <span className="text-[var(--color-slate)]">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value="whatsapp" className="accent-[var(--color-teal)]" />
                    <span className="text-[var(--color-slate)]">WhatsApp</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contactDetails" className="text-sm font-semibold text-[var(--color-ink)]">Email or Phone Number *</label>
                <input 
                  type="text" 
                  id="contactDetails" 
                  required 
                  className="w-full px-4 py-3 rounded-md border border-[var(--color-line)] bg-[var(--color-mist)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-6 text-lg mt-4" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Diagnostic Request"}
              </Button>
            </form>
          )}
        </div>

        {/* Direct Contact Column */}
        <div className="space-y-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-[var(--color-ink)]">Direct Contact</h3>
            <div className="space-y-6">
              
              <a href="mailto:hello@quantara.lk" className="flex items-start gap-4 p-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-teal)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-mist)] group-hover:bg-[rgba(18,167,131,0.1)] flex items-center justify-center transition-colors">
                  <Mail className="text-[var(--color-slate)] group-hover:text-[var(--color-teal)] transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-slate)] mb-1">Email</p>
                  <p className="text-[var(--color-ink)] font-medium">hello@quantara.lk</p>
                </div>
              </a>

              <a href="https://wa.me/94770000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-teal)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-mist)] group-hover:bg-[rgba(18,167,131,0.1)] flex items-center justify-center transition-colors">
                  <MessageCircle className="text-[var(--color-slate)] group-hover:text-[var(--color-teal)] transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase text-[var(--color-slate)] mb-1">WhatsApp</p>
                  <p className="text-[var(--color-ink)] font-medium">+94 77 000 0000</p>
                </div>
              </a>

            </div>
          </div>

          <div className="p-8 rounded-xl bg-[var(--color-ink)] text-[var(--color-paper)]">
            <h3 className="font-display font-bold text-xl mb-4">Response Time</h3>
            <p className="opacity-80 leading-relaxed text-sm">
              We typically review diagnostic requests within 24 hours. A member of our strategy team will reach out to schedule a brief introductory call.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
