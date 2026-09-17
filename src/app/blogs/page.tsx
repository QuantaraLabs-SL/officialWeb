import type { Metadata } from "next";
import BlogsPageClient from "./BlogsPageClient";

export const metadata: Metadata = {
  title: "Blogs & Engineering Insights | Quantara Labs",
  description:
    "Architectural thinking for modern operations. Deep dives, post-mortems, and technical blueprints on enterprise software, automation, and AI systems.",
  openGraph: {
    title: "Blogs & Engineering Insights | Quantara Labs",
    description:
      "Deep dives, post-mortems, and technical blueprints on dismantling legacy drag, engineering bespoke enterprise software, and orchestrating pragmatic AI systems.",
    type: "website",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient />;
}
