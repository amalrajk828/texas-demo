import React, { useState } from "react";
import BlogList from "../components/blog/BlogList";
import BlogDetail from "../components/blog/BlogDetail";
import FeaturedArticle from "../components/blog/FeaturedArticle";
import CategoryFilter from "../components/blog/CategoryFilter";
import initialPosts from "../data/blogPosts.json";

/**
 * Container component for the Blog Section.
 * Handles state for list/detail navigation views, loading data,
 * managing in-memory comments, and category filtering.
 */
export default function BlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Find currently active post
  const activePost = posts.find((p) => p.id === selectedPostId);

  // Navigation handlers
  const handleViewPost = (id) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add Comment Handler (Container State Mutation)
  const handleAddComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...(post.comments || []), newComment]
          };
        }
        return post;
      })
    );
  };

  // Category-filtered posts for the grid
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased">
      {selectedPostId === null ? (
        /* ── LIST VIEW ─────────────────────────────────────────────── */
        <div className="animate-fade-in">

          {/* ── 1. HERO SECTION ──────────────────────────────────────── */}
          <section
            className="relative bg-[#000000] overflow-hidden pt-28 pb-14 lg:pt-32 lg:pb-18"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            {/* Subtle line-grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            {/* Red glow top-right */}
            <div
              className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(231,33,43,0.10) 0%, transparent 65%)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-4 h-px bg-[#e7212b]" />
                <span className="text-[#0891B2] text-[10.5px] font-bold tracking-[3.5px] uppercase">
                  Technical Resource Hub
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.08] tracking-tight mb-5 text-white max-w-3xl">
                Engineering{" "}
                <em className="not-italic text-current">Insights</em>{" "}
                Hub
              </h1>

              {/* Sub-text */}
              <p className="text-white/70 text-[15.5px] leading-[1.85] max-w-2xl mb-10">
                Technical guides, compliance references, and strategic engineering insights
                for plant managers and automation engineers across the GCC.
              </p>

              {/* 4 stat boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { value: `${posts.length}+`, label: "Technical Articles" },
                  { value: "3",               label: "Engineering Pillars" },
                  { value: "2008",             label: "Est. Year" },
                  { value: "ISO",              label: "9001:2015 Certified" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-5 py-4 border flex flex-col gap-1"
                    style={{ background: "#111111", borderColor: "rgba(231,33,43,0.18)" }}
                  >
                    <span className="text-[#e7212b] text-2xl sm:text-3xl font-black leading-none">
                      {s.value}
                    </span>
                    <span className="text-white/45 text-[11px] font-medium tracking-wide uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 2. FEATURED ARTICLE ──────────────────────────────────── */}
          <FeaturedArticle posts={posts} onReadMore={handleViewPost} />

          {/* ── 3. CATEGORY FILTER + ARTICLE GRID ───────────────────── */}
          <section className="py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Section eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-px bg-[#e7212b]" />
                <span className="text-[#0891B2] text-[10.5px] font-bold tracking-[3.5px] uppercase">
                  — All Articles
                </span>
              </div>

              {/* Category filter pills */}
              <CategoryFilter
                posts={posts}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />

              {/* Article grid */}
              <BlogList posts={filteredPosts} onReadMore={handleViewPost} />
            </div>
          </section>
        </div>
      ) : (
        /* ── DETAIL VIEW ────────────────────────────────────────────── */
        <div className="animate-fade-in">
          <BlogDetail
            post={activePost}
            onBack={handleBackToList}
            onAddComment={handleAddComment}
          />
        </div>
      )}
    </div>
  );
}
