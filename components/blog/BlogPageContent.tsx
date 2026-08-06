"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  User,
} from "lucide-react";

import BlogHeroLottie from "./BlogHeroLottie";

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

/* ─── Main component ──────────────────────────────────────────────────── */
export default function BlogPageContent({ allPosts }: Props) {
  // Day-based deterministic rotation so it varies daily but stays consistent between server and client render
  const dayIndex = Math.floor(Date.now() / 86400000);
  const featured = allPosts.length > 0 ? allPosts[dayIndex % allPosts.length] : undefined;

  const gridPosts = featured ? allPosts.filter((p) => p.slug !== featured.slug) : allPosts;

  const [activeFilter, setActiveFilter] = useState(ALL);
  const categories = [ALL, ...Array.from(new Set(gridPosts.map((p) => p.category)))];
  const filteredGrid = activeFilter === ALL ? gridPosts : gridPosts.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-[#0B0D26]">
      {/* ══════════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="hero-vanta"
        className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-24"
      >
        {/* Blog Hero Lottie animated background */}
        <BlogHeroLottie />
        {/* Red radial glow top-right */}
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(231,33,43,0.10) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-4 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
              Technical Resource Hub
            </span>
          </div>

          {/* Heading — "Engineering Insights Hub" */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.08] tracking-tight mb-5 text-white max-w-3xl">
            Engineering{" "}
            <em className="not-italic text-[#e7212b]">Insights</em>{" "}
            Hub
          </h1>

          {/* Sub-text */}
          <p className="text-white/50 text-[15.5px] leading-[1.85] max-w-2xl mb-12">
            Technical guides, compliance references, and strategic engineering insights for
            plant managers and automation engineers across the GCC.
          </p>

          {/* 4 stat boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {HERO_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-5 py-4 border flex flex-col gap-1"
                style={{
                  background: "rgba(14, 14, 18, 0.90)",
                  borderColor: "rgba(231,33,43,0.22)",
                }}
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
                    <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-400 font-medium">
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
          3. CATEGORY FILTER + ARTICLE GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-4 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
              — All Articles
            </span>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
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

          {/* Grid */}
          {filteredGrid.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e7212b] mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B0D26]">No Articles Found</h3>
              <p className="text-gray-500 text-sm mt-1 max-w-xs">
                No articles in this category yet. Try &quot;All&quot; to see everything.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredGrid.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
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
            <span className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
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
