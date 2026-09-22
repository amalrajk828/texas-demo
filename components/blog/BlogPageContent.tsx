"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  User,
  Search,
  X,
} from "lucide-react";
import BlogPagination from "./BlogPagination";

import MoltenHero from "@/components/common/MoltenHero";

/* ─── Types ─────────────────────────────────────────────────────────── */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  pillar: string;
  icon: string;
  image: string;
  imageAlt: string;
}

interface Props {
  allPosts: BlogPost[];
}

/* ─── Category badge style ─────────────────────────────────────────────────── */
function tagClass(_cat?: string) {
  return "bg-[#e7212b] text-white";
}

/* ─── Hero stats ─────────────────────────────────────────────────────── */
const HERO_STATS = [
  { value: "50+",  label: "Technical Articles" },
  { value: "3",    label: "Engineering Pillars" },
  { value: "2008", label: "Est. Year" },
  { value: "ISO",  label: "9001:2015 Certified" },
];

const ALL = "All";
const POSTS_PER_PAGE = 9;

/* ─── Main component ──────────────────────────────────────────────────── */
export default function BlogPageContent({ allPosts }: Props) {
  const articlesSectionRef = useRef<HTMLDivElement>(null);
  // Day-based deterministic rotation so it varies daily but stays consistent between server and client render
  const dayIndex = Math.floor(Date.now() / 86400000);
  const featured = allPosts.length > 0 ? allPosts[dayIndex % allPosts.length] : undefined;

  const gridPosts = (featured ? allPosts.filter((p) => p.slug !== featured.slug) : allPosts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [ALL, ...Array.from(new Set(gridPosts.map((p) => p.category)))];

  // Filter by category + search
  const filteredGrid = gridPosts.filter((p) => {
    const matchesCategory = activeFilter === ALL || p.category === activeFilter;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
  });

  // Pagination
  const totalPages = Math.ceil(filteredGrid.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredGrid.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  // Scroll to article grid on every page change
  useLayoutEffect(() => {
    if (articlesSectionRef.current) {
      const y = articlesSectionRef.current.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#0B0D26]">
      {/* ══════════════════════════════════════════════════════════════
          1. HERO SECTION — MoltenHero (shared WebGL canvas)
      ══════════════════════════════════════════════════════════════ */}
      <MoltenHero
        id="hero-blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        eyebrow="Technical Resource Hub"
        title="Engineering Insights Hub"
        subtitle="Technical guides, compliance references, and strategic engineering insights for plant managers and automation engineers across the GCC."
        accentColor="#e7212b"
      >
        {/* 4 stat boxes — passed as children so they render inside the content area */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-4 border flex flex-col gap-1 backdrop-blur-md"
              style={{
                background: "rgba(14, 14, 20, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              <span className="text-[#e7212b] text-2xl sm:text-3xl font-black leading-none">
                {s.value}
              </span>
              <span className="text-white/60 text-[11px] font-medium tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </MoltenHero>

      {/* ══════════════════════════════════════════════════════════════
          2. FEATURED ARTICLE
      ══════════════════════════════════════════════════════════════ */}
      {featured && (
        <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-4 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
                Featured Article
              </span>
            </div>

            <Link
              href={`/blog/${featured.slug}/`}
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-gray-100">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? featured.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1.5 rounded-full ${tagClass(featured.category)}`}>
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 sm:p-10 bg-white">
                  <div>
                    <h2 className="text-[#0B0D26] text-2xl sm:text-[1.85rem] font-black leading-tight mb-4 group-hover:text-[#e7212b] transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-[14.5px] leading-[1.8] line-clamp-4 mb-6">
                      {featured.description}
                    </p>
                    <hr className="border-gray-100 mb-5" />
                    <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1.5 text-[#0B0D26] font-bold uppercase tracking-wide text-[11px]">
                        <User className="w-3.5 h-3.5" />
                        TTS Editorial
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#e7212b]" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#e7212b]" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white text-[13px] font-bold px-6 py-3 rounded-full transition-colors duration-200">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          3. SEARCH + CATEGORY FILTER + ARTICLE GRID
      ══════════════════════════════════════════════════════════════ */}
      <section ref={articlesSectionRef} id="articles" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-4 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
              All Articles
            </span>
          </div>

          {/* Search input */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 bg-white text-[14px] text-[#0B0D26] placeholder:text-gray-500 focus:outline-none focus:border-[#e7212b]/50 focus:ring-1 focus:ring-[#e7212b]/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter pills */}
          <div className="hidden sm:flex flex-wrap gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-[#e7212b] text-white border-[#e7212b]"
                    : "bg-white text-[#0B0D26] border-gray-200 hover:border-[#e7212b] hover:text-[#e7212b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-gray-500 text-[13px] mb-6">
            Showing {paginatedPosts.length} of {filteredGrid.length} articles
          </p>

          {/* Grid */}
          {filteredGrid.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e7212b] mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B0D26]">No Articles Found</h3>
              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                No articles match your search. Try &quot;All&quot; or adjust your filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {paginatedPosts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Pagination */}
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

/* ─── Article Card ────────────────────────────────────────────────────── */
function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="group block h-full">
      <article className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.015] transition-all duration-300 h-full">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          <span className={`absolute top-3 left-3 z-10 text-[9.5px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full ${tagClass(post.category)}`}>
            {post.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-[#0B0D26] text-[15px] font-bold leading-snug line-clamp-2 mb-2 group-hover:text-[#e7212b] transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-gray-500 text-[12.5px] leading-[1.7] line-clamp-2 mb-4 flex-1">
            {post.description}
          </p>
          <div className="border-t border-gray-100 pt-3.5 flex items-center justify-between mt-auto">
            <span className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </span>
            <span className="text-[#e7212b] text-[11.5px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
