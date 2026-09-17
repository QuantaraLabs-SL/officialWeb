export interface BlogPost {
  slug: string;
  category: "Operational Architecture" | "AI & Agents" | "Software Engineering" | "Case Studies" | "ERP Modernization";
  badgeCategory: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  title: string;
  excerpt: string;
  cardType: "telemetry" | "fintech" | "agentic" | "saas-cost" | "inventory-sync" | "friction-ebitda";
  stats?: {
    label: string;
    value: string;
    color?: string;
  }[];
  heroVisualTag?: string;
  metricBadge?: {
    label: string;
    value: string;
  };
  chips?: string[];
  featured?: boolean;
  systemBlueprintIssue?: string;
}

export const BLOG_CATEGORIES = [
  "All Posts",
  "Operational Architecture",
  "AI & Agents",
  "Software Engineering",
  "Case Studies",
  "ERP Modernization",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const FEATURED_POST: BlogPost = {
  slug: "why-mid-market-erp-migrations-fail",
  category: "ERP Modernization",
  badgeCategory: "FEATURED ARCHITECTURAL ESSAY",
  readTime: "8 min read",
  publishDate: "Oct 24, 2025",
  author: {
    name: "Duranka Thilakarathna",
    role: "Co-Founder & CEO",
  },
  title: "Why Mid-Market ERP Migrations Fail (And the Micro-Service Orchestration Alternative)",
  excerpt:
    "A clinical analysis of the 6 core failure points when transitioning from fragmented spreadsheets and WhatsApp ops to enterprise ERP, and how event-driven webhooks prevent operational paralysis.",
  cardType: "telemetry",
  chips: ["62% Spend Reduction", "0 Downtime Cutover", "Event-driven Architecture"],
  featured: true,
  systemBlueprintIssue: "SYSTEM BLUEPRINT // ISSUE 41",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "eliminating-the-40-hour-spreadsheet-tax",
    category: "AI & Agents",
    badgeCategory: "AI & Automation",
    readTime: "5 min read",
    publishDate: "Oct 18, 2025",
    author: {
      name: "Quantara Engineering",
      role: "Logistics Systems Team",
    },
    title: "Eliminating the 40-Hour Spreadsheet Tax: Anatomy of an Asynchronous Event Broker",
    excerpt:
      "How our engineers replaced manual dispatch coordinating via chat threads with an asynchronous event broker and reactive live tracking map.",
    cardType: "telemetry",
    heroVisualTag: "LOGISTICS_MESH",
    metricBadge: {
      label: "LATENCY",
      value: "42ms",
    },
  },
  {
    slug: "designing-resilient-kyc-wealth-portals",
    category: "Software Engineering",
    badgeCategory: "Software Engineering",
    readTime: "6 min read",
    publishDate: "Oct 12, 2025",
    author: {
      name: "Quantara Security Team",
      role: "Fintech Architecture",
    },
    title: "Designing Resilient KYC & Wealth Management Portals with Zero Edge Vulnerability",
    excerpt:
      "Architecture breakdown for real-time document verification pipelines, edge biometric hashing, and immutable transaction ledger integration.",
    cardType: "fintech",
    heroVisualTag: "FINTECH_CORE",
    metricBadge: {
      label: "SOC-2 COMPLIANT",
      value: "ENCRYPTION: AES-GCM-256",
    },
  },
  {
    slug: "the-multi-agent-triage-pipeline",
    category: "AI & Agents",
    badgeCategory: "AI & Automation",
    readTime: "7 min read",
    publishDate: "Oct 07, 2025",
    author: {
      name: "Quantara AI Labs",
      role: "Applied Intelligence Group",
    },
    title: "The Multi-Agent Triage Pipeline: Automating 60% of Tier-1 Support",
    excerpt:
      "Deploying stateful LangGraph evaluators with deterministic fallback thresholds for enterprise operations handling 40,000 queries a day.",
    cardType: "agentic",
    heroVisualTag: "AGENTIC_MESH",
    metricBadge: {
      label: "AUTONOMOUS RESOLUTION",
      value: "60.4%",
    },
  },
  {
    slug: "pragmatic-architecture-build-vs-buy",
    category: "Operational Architecture",
    badgeCategory: "Operational Architecture",
    readTime: "4 min read",
    publishDate: "Sep 29, 2025",
    author: {
      name: "Dinuka Prathiraja",
      role: "CTO",
    },
    title: "Pragmatic Architecture: When to Build Custom vs. When to Integrate SaaS",
    excerpt:
      "Dinuka Prathiraja, CTO, provides an unvarnished audit framework on avoiding premature bespoke software while curbing catastrophic SaaS sprawl.",
    cardType: "saas-cost",
    heroVisualTag: "DECISION_MATRIX",
    metricBadge: {
      label: "NET MARGIN RECAPTURE",
      value: "+74% OVER TIME",
    },
  },
  {
    slug: "real-time-omnichannel-inventory-syncing",
    category: "Software Engineering",
    badgeCategory: "Systems & Databases",
    readTime: "6 min read",
    publishDate: "Sep 21, 2025",
    author: {
      name: "Quantara Core Systems",
      role: "Distributed Systems Team",
    },
    title: "Real-Time Omnichannel Inventory Syncing for Enterprise Commerce Hubs",
    excerpt:
      "Handling sudden order bursts across multi-storefront channels using Redis Streams, optimistic locking, and conflict-free replicated data types.",
    cardType: "inventory-sync",
    heroVisualTag: "DATABASE_SYNC",
    metricBadge: {
      label: "STOCK RECONCILED",
      value: "99.98%",
    },
  },
  {
    slug: "silent-coordination-friction-gross-margin",
    category: "Operational Architecture",
    badgeCategory: "Leadership & Operations",
    readTime: "5 min read",
    publishDate: "Sep 15, 2025",
    author: {
      name: "Pasindu Boyagoda",
      role: "CFO",
    },
    title: "The Reality of Scaling: How Silent Coordination Friction Devours EBITDA",
    excerpt:
      "Pasindu Boyagoda, CFO, charts the stealth decline of gross margins caused by disconnected departmental tooling and uncodified team protocols.",
    cardType: "friction-ebitda",
    heroVisualTag: "CFO_DEBRIEF",
    metricBadge: {
      label: "IMPACT",
      value: "-18.4% EBITDA",
    },
  },
];
