import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "@/components/blog/BlogGrid";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { 
  BookOpen, 
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Hub",
  description: "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
  keywords: [
    "industrial engineering blog",
    "flow measurement",
    "SCADA",
    "CEMS",
    "NDT",
    "automation",
    "Kuwait",
    "UAE",
    "oil and gas",
  ],
  alternates: {
    canonical: "/blog/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Industrial Engineering Knowledge Hub",
    description: "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    url: "/blog/",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Texas Technical Services Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@texastechserv",
    title: "Industrial Engineering Knowledge Hub",
    description: "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    images: ["/og-default.png"],
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
  icon: string;
  image: string;
  imageAlt: string;
  imageCredit?: {
    name: string;
    profileUrl: string;
    photoUrl: string;
  };
}

const blogPosts: BlogPost[] = Object.entries(blogArticles)
  .map(([slug, article]) => {
    let icon = "Activity";
    if (article.category === "Flow Measurement") {
      icon = "Gauge";
    } else if (article.category === "Industrial Automation") {
      icon = "Cpu";
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
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#333333]">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <SpeakableJsonLd headline="Industrial Engineering Knowledge Hub" />
      <ItemListJsonLd
        name="Texas Technical Services Knowledge Hub"
        items={blogPosts.map((post) => ({
          name: post.title,
          url: `/blog/${post.slug}/`,
          description: post.description,
        }))}
      />
      
      {/* ═══ HERO SECTION ═══════════════════════════════════════════ */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-24 border-b border-white/10">
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
          <nav className="flex items-center gap-2 text-[13px] text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Blog</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
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
        <section id="blog-section" className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-10">
            <div>
              <h2 className="text-[#0B0D26] text-xl font-bold">Featured Publications</h2>
              <p className="text-gray-500 text-xs mt-1">Providing actionable data and risk-mitigation solutions</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[12px] text-gray-400">
              <BookOpen className="w-4 h-4 text-[#e7212b]" />
              <span>{blogPosts.length} Technical Articles</span>
            </div>
          </div>

          {/* Cards Grid */}
          <BlogGrid posts={blogPosts} />

        </section>
      </main>

      {/* ═══ CALL TO ACTION ═══════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid border border-white/10 p-8 sm:p-10 text-white relative overflow-hidden">
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
