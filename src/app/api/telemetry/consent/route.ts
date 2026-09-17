import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { ConsentRecord } from "@/types/cookies";

export async function POST(req: NextRequest) {
  try {
    const record: ConsentRecord = await req.json();

    // Basic structure validation
    if (!record || !record.consentId || !record.preferences) {
      return NextResponse.json(
        { error: "Invalid consent record payload" },
        { status: 400 }
      );
    }

    // Extract client IP and geo headers if behind proxy/Vercel/Cloudflare
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";
    const country = req.headers.get("x-vercel-ip-country") || "unknown";

    // Structured audit log format ready for log aggregation or database insertion
    const ingestedLog = {
      event: "COOKIE_CONSENT_REGISTERED",
      consentId: record.consentId,
      timestamp: record.timestamp || new Date().toISOString(),
      policyVersion: record.policyVersion,
      preferences: record.preferences,
      meta: {
        country,
        ipHash: hashString(clientIp), // Anonymize IP before storing
        userAgent: record.userAgent || req.headers.get("user-agent"),
        referrer: record.referrer || req.headers.get("referer"),
      },
    };

    // Print to server console (or connect to Supabase/Postgres/BigQuery in portal phase)
    if (process.env.NODE_ENV === "development") {
      console.log("[Portal Ingestion] Consent Log Recorded:", JSON.stringify(ingestedLog));
    }

    /*
     * FUTURE PORTAL INTEGRATION POINT:
     * e.g.,
     * await db.consentAudits.insert(ingestedLog);
     * or:
     * await fetch(process.env.PORTAL_WEBHOOK_URL, { method: "POST", body: JSON.stringify(ingestedLog) });
     */

    return NextResponse.json(
      {
        status: "success",
        consentId: record.consentId,
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Portal Ingestion Error] Failed to process consent telemetry:", err);
    return NextResponse.json(
      { error: "Failed to record consent record" },
      { status: 500 }
    );
  }
}

/** Simple hashing function to anonymize IP address for privacy compliance */
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return "hash_" + Math.abs(hash).toString(16);
}
