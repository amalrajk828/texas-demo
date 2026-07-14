import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Gauge,
  Cpu,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Hub | Texas Technical Services",
  description: "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
  alternates: {
    canonical: "https://texastechserv.com/blog/",
  },
  openGraph: {
    title: "Industrial Engineering Knowledge Hub | Texas Technical Services",
    description: "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    url: "https://texastechserv.com/blog/",
    type: "website",
  },
};

import { blogArticles } from "@/lib/blogArticles";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  pillar: string;
  icon: React.ComponentType<any>;
  image: string;
  imageAlt: string;
  imageCredit?: {
    name: string;
    profileUrl: string;
    photoUrl: string;
  };
}

const blogPosts: BlogPost[] = Object.entries(blogArticles).map(([slug, article]) => {
  let icon = Activity;
  if (article.category === "Flow Measurement") {
    icon = Gauge;
  } else if (article.category === "Industrial Automation") {
    icon = Cpu;
  }

  return {
    slug,
    title: article.title,
    description: article.description,
    date: article.date,
    readTime: article.readTime,
    category: article.category,
    pillar: article.pillar,
    icon,
    image: article.image,
    imageAlt: article.imageAlt,
    imageCredit: article.imageCredit,
  };
});


export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#333333]">
      
      {/* ═══ HERO SECTION ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-16 lg:pb-24 border-b border-white/10">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        
        {/* Dynamic color spots */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(231,33,43,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[250px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Blog</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
              TECHNICAL RESOURCE HUB
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-white leading-tight mb-5 max-w-3xl">
            Texas Technical Services Knowledge Hub
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
            Technical guides, compliance standards, and strategic engineering insights for plant managers, compliance officers, and automation engineers in high-compliance sectors.
          </p>
        </div>
      </section>

      {/* ═══ BLOG ARCHIVE GRID ══════════════════════════════════════ */}
      <main className="bg-gray-50/50 py-16 lg:py-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-10">
            <div>
              <h2 className="text-[#0B0D26] text-xl font-bold">Featured Publications</h2>
              <p className="text-gray-500 text-xs mt-1">Providing actionable data and risk-mitigation solutions</p>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
              <BookOpen className="w-4 h-4 text-[#e7212b]" />
              <span>{blogPosts.length} Technical Articles</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article 
                  key={post.slug}
                  className="flex flex-col bg-white rounded-xl border border-gray-150 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group overflow-hidden"
                >
                  {/* Card Image Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100 shrink-0">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Category overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-white bg-[#e7212b] px-2.5 py-1 rounded shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-sm group-hover:bg-[#e7212b] group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4 text-[#0B0D26] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {post.pillar}
                      </p>

                      <h3 className="text-base sm:text-[17px] font-bold text-[#0B0D26] leading-snug mb-3 group-hover:text-[#e7212b] transition-colors">
                        <Link href={`/blog/${post.slug}/`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className="px-6 sm:px-7 py-4 border-t border-gray-100 bg-[#f8f9fb]/50 rounded-b-xl flex items-center justify-between text-[11.5px] text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0B0D26] hover:text-[#e7212b] transition-colors shrink-0 group/btn"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

        </section>
      </main>

      {/* ═══ CALL TO ACTION ═══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] border border-white/10 p-8 sm:p-10 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.01) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.01) 40px)",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[#e7212b] text-[10px] font-bold tracking-[3px] uppercase block mb-2">
                  ENGINEERING SERVICES
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Discuss Your System Specifications with TTS
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our certified instrumentation engineers are available to review your facility metering, SCADA upgrades, environmental analyzers, and inspection testing needs.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-[13.5px] px-8 py-3.5 rounded-lg transition-colors"
                >
                  Contact Our Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
