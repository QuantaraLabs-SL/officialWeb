"use client";

import { useState, useMemo } from "react";
import {
  BlogHeroSection,
  FeaturedArticleSection,
  BlogCard,
  BlogNewsletterSection,
  BlogCtaSection,
} from "./components";
import { BLOG_POSTS, FEATURED_POST, BLOG_CATEGORIES, BlogCategory } from "./config/posts";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [sortOption, setSortOption] = useState<string>("Most Technical");

  // Filter posts based on selected category pill
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Posts") {
      return BLOG_POSTS;
    }
    return BLOG_POSTS.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF8FF]">
      {/* 1. Hero Header & Editorial Orientation */}
      <BlogHeroSection
        categories={BLOG_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Featured Lead Architectural Essay */}
      {selectedCategory === "All Posts" || selectedCategory === FEATURED_POST.category ? (
        <FeaturedArticleSection post={FEATURED_POST} />
      ) : null}

      {/* 3. 6-Article Systematic Blueprint Grid */}
      <section className="py-12 bg-[#FAF8FF]">
        <div className="page-wrapper max-w-7xl mx-auto px-6">
          {/* Section Sub-bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#E2E8F0] gap-4">
            <div>
              <h2
                className="text-2xl sm:text-[24px] font-bold text-[#131B2E] tracking-tight mb-1"
                style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                Recent Architectural Dispatches
              </h2>
              <p
                className="text-[14px] text-[#404751] font-normal"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Validated system models, telemetry architectures, and production case studies.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[14px]">
              <span className="text-[#707882] font-semibold">Sort by:</span>
              <button
                type="button"
                onClick={() =>
                  setSortOption((prev) =>
                    prev === "Most Technical" ? "Latest" : "Most Technical"
                  )
                }
                className="font-semibold text-[#131B2E] hover:text-[#00609A] transition-colors cursor-pointer"
              >
                {sortOption}
              </button>
            </div>
          </div>

          {/* Grid of Cards */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-[#707882] text-[15px]">
                No dispatches published in this category yet. Select another category above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Architecture Briefing / Newsletter Subscription Card */}
      <BlogNewsletterSection />

      {/* 5. Pre-Footer Call to Action Banner */}
      <BlogCtaSection />
    </div>
  );
}
