import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, Terminal } from "lucide-react";
import { BLOG_POSTS, FEATURED_POST, BlogPost } from "../config/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

const ALL_POSTS = [FEATURED_POST, ...BLOG_POSTS];

export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Quantara Labs",
    };
  }

  return {
    title: `${post.title} | Quantara Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#FAF8FF] py-16">
      <div className="page-wrapper max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#00609A] hover:text-[#0084D1] mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Dispatches</span>
        </Link>

        {/* Header Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-[#F2F8FF] border border-[#E2E8F0] text-[#00609A]">
            {post.badgeCategory}
          </span>
          <span className="text-[13px] text-[#707882] flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
          <span className="text-[13px] text-[#707882] flex items-center gap-1.5">
            <Calendar size={14} />
            {post.publishDate}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131B2E] tracking-tight leading-[1.2] mb-6"
          style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
        >
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[#E2E8F0]">
          <div className="w-10 h-10 rounded-full bg-[#00609A]/10 border border-[#00609A]/20 flex items-center justify-center text-[#00609A] font-bold text-[14px]">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-[#131B2E] text-[15px]">{post.author.name}</div>
            <div className="text-[13px] text-[#707882]">{post.author.role}</div>
          </div>
        </div>

        {/* Lead Excerpt Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs text-lg sm:text-[18px] text-[#131B2E] leading-relaxed mb-10">
          <p className="font-medium">{post.excerpt}</p>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-[#404751] leading-relaxed space-y-6 text-[16px]">
          <h2
            className="text-2xl font-bold text-[#131B2E] tracking-tight pt-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            1. The Core Architectural Dilemma
          </h2>
          <p>
            When mid-market enterprises outgrow unstructured workflows like WhatsApp message hand-offs and sprawling Excel spreadsheets, the initial impulse is often a monolithic ERP migration. Yet industry analysis indicates an alarming rate of operational stagnation during cutovers.
          </p>
          <p>
            The breakdown occurs because departmental business logic is rarely linear. Imposing strict schemas without decoupled asynchronous integration layers creates human friction that bottlenecks daily execution.
          </p>

          {/* Technical callout */}
          <div className="my-8 rounded-xl bg-[#060D17] border border-white/10 p-6 text-white font-mono text-[13px]">
            <div className="flex items-center gap-2 text-[#00CBA8] mb-3">
              <Terminal size={16} />
              <span>ARCHITECTURAL SPECIFICATION</span>
            </div>
            <p className="text-[#BFC7D3]">
              // Decoupled ingestion webhook mesh with idempotent retry semantics:
            </p>
            <pre className="mt-2 text-[#99CBFF] overflow-x-auto">
{`async function handleOrderWebhook(event: IngestEvent): Promise<SyncResult> {
  const idempotentKey = generateHash(event.tenantId, event.orderId);
  const lockAcquired = await redis.set(idempotentKey, "LOCK", "NX", "EX", 60);
  if (!lockAcquired) return { status: "DEDUPED" };
  
  await natsBroker.publish("orders.sync.v1", event);
  return { status: "DISPATCHED", latencyMs: 38 };
}`}
            </pre>
          </div>

          <h2
            className="text-2xl font-bold text-[#131B2E] tracking-tight pt-4"
            style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            2. The Micro-Service Orchestration Alternative
          </h2>
          <p>
            Instead of executing a risky single-day monolithic cutover, modern operations benefit from incremental micro-service strangling. By routing critical transactions through lightweight webhook meshes and event buses, operations continue without zero-day outage risks.
          </p>
          <p>
            Teams maintain the agility of bespoke interfaces tailored to their exact floor protocols while synchronizing ledger-accurate state back to central databases.
          </p>
        </div>

        {/* CTA Footer for article */}
        <div className="mt-14 p-8 rounded-2xl bg-[#F2F8FF] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-[#131B2E] text-[18px] mb-1">
              Want our team to evaluate your operational architecture?
            </h4>
            <p className="text-[14px] text-[#404751]">
              Schedule an engineering diagnostic audit with Quantara Labs in Malabe.
            </p>
          </div>
          <Link
            href="/contact?service=diagnostic"
            className="px-6 py-3 rounded-full text-white font-semibold text-[14px] hover:opacity-95 transition-opacity shrink-0"
            style={{ background: "linear-gradient(168deg, #0084D1 0%, #00B894 100%)" }}
          >
            Book a Diagnostic
          </Link>
        </div>
      </div>
    </article>
  );
}
