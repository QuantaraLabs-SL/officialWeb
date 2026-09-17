"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Sliders, Check, X, ChevronRight, Lock } from "lucide-react";
import {
  CookiePreferences,
  COOKIE_CATEGORIES,
} from "@/types/cookies";
import {
  getStoredConsent,
  saveConsent,
  ALL_APPROVED_PREFERENCES,
  DEFAULT_PREFERENCES,
  COOKIE_PREFERENCES_EVENT,
} from "@/lib/cookies";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    setMounted(true);
    const existing = getStoredConsent();
    if (!existing) {
      // Natural delay before showing on initial arrival so hero animation completes
      const timer = setTimeout(() => setIsOpen(true), 900);
      return () => clearTimeout(timer);
    } else {
      setPreferences(existing.preferences);
    }

    // Listen to custom event to reopen preferences from anywhere (e.g. Footer)
    const handleReopen = () => {
      const current = getStoredConsent();
      if (current) {
        setPreferences(current.preferences);
      }
      setShowDetails(true);
      setIsOpen(true);
    };

    window.addEventListener(COOKIE_PREFERENCES_EVENT, handleReopen);
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, handleReopen);
  }, []);

  if (!mounted) return null;

  const handleAcceptAll = () => {
    saveConsent(ALL_APPROVED_PREFERENCES);
    setPreferences(ALL_APPROVED_PREFERENCES);
    setIsOpen(false);
    setShowDetails(false);
  };

  const handleRejectNonEssential = () => {
    saveConsent(DEFAULT_PREFERENCES);
    setPreferences(DEFAULT_PREFERENCES);
    setIsOpen(false);
    setShowDetails(false);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
    setIsOpen(false);
    setShowDetails(false);
  };

  const toggleCategory = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Cannot toggle essential
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-end p-4 sm:p-6 md:p-8">
          {/* Backdrop if details modal is expanded */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="fixed inset-0 bg-[#060D17]/50 backdrop-blur-xs pointer-events-auto z-40 transition-opacity"
            />
          )}

          {/* Modal / Toast Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto relative z-50 w-full bg-[#0E1726]/95 border border-white/15 text-white shadow-2xl backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
              showDetails ? "max-w-2xl mx-auto" : "max-w-xl ml-auto"
            }`}
          >
            {/* Top Cyan Accent Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#00A3E0] via-[#00CBA8] to-[#00609A]" />

            <div className="p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00609A]/25 border border-[#00A3E0]/30 flex items-center justify-center text-[#00CBA8] shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3
                      className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                    >
                      {showDetails ? "Privacy & Cookie Architecture" : "Enterprise Privacy & Cookie Notice"}
                    </h3>
                    <div className="text-[11.5px] font-mono text-[#78889B]">
                      POLICY // VER 2026.1
                    </div>
                  </div>
                </div>

                {showDetails && (
                  <button
                    type="button"
                    onClick={() => setShowDetails(false)}
                    className="text-[#78889B] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Body Text */}
              {!showDetails ? (
                <p className="text-[13.5px] text-[#A6B4C9] leading-relaxed mb-5 font-normal">
                  We use cookies and telemetry tokens to audit system performance, analyze architectural reading flows,
                  and guarantee operational security across enterprise workflows. Review our{" "}
                  <Link href="/privacy" className="text-[#00CBA8] hover:underline underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  for full technical disclosure.
                </p>
              ) : (
                <div className="mb-5 space-y-3 max-h-[380px] overflow-y-auto pr-1">
                  <p className="text-[13px] text-[#A6B4C9] leading-relaxed">
                    Configure granular cookie rules for this browser session. Essential security tokens remain active to prevent CSRF and session corruption.
                  </p>

                  {/* Categories Breakdown */}
                  <div className="space-y-2.5 pt-1">
                    {COOKIE_CATEGORIES.map((category) => {
                      const isChecked = preferences[category.id];
                      return (
                        <div
                          key={category.id}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start justify-between gap-3 transition-colors hover:bg-white/[0.06]"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[14px] font-semibold text-white">
                                {category.name}
                              </span>
                              {category.required ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#00609A]/40 text-[#00CBA8] border border-[#00CBA8]/30">
                                  <Lock size={10} /> REQUIRED
                                </span>
                              ) : (
                                <span className="text-[10.5px] font-mono text-[#78889B]">
                                  OPTIONAL
                                </span>
                              )}
                            </div>
                            <p className="text-[12px] text-[#8EA0B8] leading-relaxed">
                              {category.description}
                            </p>
                          </div>

                          {/* Switch Button */}
                          <button
                            type="button"
                            disabled={category.required}
                            onClick={() => toggleCategory(category.id)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                              category.required
                                ? "bg-[#00CBA8]/40 cursor-not-allowed"
                                : isChecked
                                ? "bg-[#00CBA8]"
                                : "bg-white/20"
                            }`}
                            aria-label={`Toggle ${category.name}`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                                isChecked ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-white/10">
                {!showDetails ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowDetails(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-[12.5px] font-mono text-[#00CBA8] hover:text-[#4BDDB7] transition-colors py-2 px-3 rounded-lg cursor-pointer"
                    >
                      <Sliders size={13} />
                      <span>CUSTOMIZE SETTINGS</span>
                    </button>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handleRejectNonEssential}
                        className="flex-1 sm:flex-initial px-3.5 py-2 text-[13px] font-medium text-[#C5D2E3] hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        Reject Non-Essential
                      </button>
                      <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="flex-1 sm:flex-initial px-4 py-2 text-[13px] font-semibold text-[#060D17] bg-[#00CBA8] hover:bg-[#4BDDB7] shadow-sm rounded-lg transition-colors cursor-pointer"
                      >
                        Accept All
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowDetails(false)}
                      className="w-full sm:w-auto px-4 py-2 text-[13px] font-medium text-[#8EA0B8] hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handleRejectNonEssential}
                        className="flex-1 sm:flex-initial px-3.5 py-2 text-[13px] font-medium text-[#C5D2E3] bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        Decline All
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveCustom}
                        className="flex-1 sm:flex-initial px-4 py-2 text-[13px] font-semibold text-[#060D17] bg-[#00CBA8] hover:bg-[#4BDDB7] shadow-sm rounded-lg transition-colors cursor-pointer"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
