import { CookiePreferences, ConsentRecord } from "@/types/cookies";

export const CONSENT_STORAGE_KEY = "quantara_cookie_consent_v1";
export const CURRENT_POLICY_VERSION = "2026.1";
export const COOKIE_PREFERENCES_EVENT = "quantara-open-cookie-preferences";
export const CONSENT_UPDATED_EVENT = "quantara-consent-updated";

/** Default fallback: only essential cookies enabled */
export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  functional: false,
  marketing: false,
};

/** All approved: maximum analytical & functional capabilities */
export const ALL_APPROVED_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  functional: true,
  marketing: true,
};

/** Generate random cryptographically random UUID or fallback */
export function generateConsentId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "c-" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

/** Retrieve stored consent record from localStorage */
export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    // Validate shape
    if (parsed && parsed.preferences && typeof parsed.preferences.essential === "boolean") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

/** Save consent locally and emit events */
export function saveConsent(preferences: CookiePreferences): ConsentRecord {
  const existing = getStoredConsent();
  const consentRecord: ConsentRecord = {
    consentId: existing?.consentId || generateConsentId(),
    timestamp: new Date().toISOString(),
    policyVersion: CURRENT_POLICY_VERSION,
    preferences: {
      ...preferences,
      essential: true, // Always enforce true
    },
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    language: typeof navigator !== "undefined" ? navigator.language : undefined,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentRecord));
      // Also write lightweight cookie for server middleware detection (expires in 180 days)
      const encoded = encodeURIComponent(JSON.stringify(consentRecord.preferences));
      document.cookie = `quantara_consent=${encoded}; path=/; max-age=${180 * 24 * 60 * 60}; SameSite=Lax`;
    } catch (e) {
      console.warn("Unable to persist cookie consent to localStorage/cookie:", e);
    }

    // Trigger window event so downstream scripts/GTM can listen
    window.dispatchEvent(
      new CustomEvent(CONSENT_UPDATED_EVENT, { detail: consentRecord })
    );

    // Send async telemetry to portal ingestion endpoint
    sendConsentToIngestionPortal(consentRecord);
  }

  return consentRecord;
}

/** Non-blocking transmission to portal ingestion endpoint */
export function sendConsentToIngestionPortal(record: ConsentRecord): void {
  if (typeof window === "undefined") return;

  const endpoint = "/api/telemetry/consent";
  const payload = JSON.stringify(record);

  // Use sendBeacon if available for guaranteed background delivery without blocking navigation
  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([payload], { type: "application/json" });
    const success = navigator.sendBeacon(endpoint, blob);
    if (success) return;
  }

  // Fallback to fetch with keepalive
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Fail silently so user experience is never degraded
  });
}

/** Helper to open cookie preferences modal from anywhere (e.g. Footer) */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COOKIE_PREFERENCES_EVENT));
  }
}
