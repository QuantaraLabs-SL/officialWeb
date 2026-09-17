export type CookieCategory = "essential" | "analytics" | "functional" | "marketing";

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export interface ConsentRecord {
  consentId: string;
  timestamp: string; // ISO string
  policyVersion: string;
  preferences: CookiePreferences;
  userAgent?: string;
  language?: string;
  referrer?: string;
}

export interface CookieCategoryDetail {
  id: CookieCategory;
  name: string;
  description: string;
  required: boolean;
  examples: string[];
}

export const COOKIE_CATEGORIES: CookieCategoryDetail[] = [
  {
    id: "essential",
    name: "Essential & Security",
    description:
      "Strictly necessary for system security, CSRF protection, session integrity, and remembering your privacy settings. Cannot be disabled.",
    required: true,
    examples: ["Session token", "CSRF guard", "Consent state"],
  },
  {
    id: "analytics",
    name: "Telemetry & Performance",
    description:
      "Helps us measure site traffic, diagnose performance regressions, and understand how architectural dispatches are read.",
    required: false,
    examples: ["Page latency", "Scroll depth", "Aggregated view counts"],
  },
  {
    id: "functional",
    name: "Functional & Preferences",
    description:
      "Enables advanced interactive features, code playground settings, and tailored UI layouts across visits.",
    required: false,
    examples: ["Filter selections", "Saved layout state"],
  },
  {
    id: "marketing",
    name: "Targeting & External Networks",
    description:
      "Used by trusted professional networks to measure conversion performance of our technical case studies and announcements.",
    required: false,
    examples: ["LinkedIn Insight Tag", "Conversion trackers"],
  },
];
