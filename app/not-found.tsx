import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogArticles } from "@/lib/blogArticles";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const POPULAR_SERVICES = [
  { title: "Flow Measurement & Control", href: "/service/flow-measurement-solutions/" },
  { title: "Inspection & Testing", href: "/service/inspection-testing/" },
  { title: "Industrial Automation", href: "/service/industrial-automation/" },
  { title: "Constructions", href: "/service/constructions/" },
];

const POPULAR_PRODUCTS = [
  { title: "Flow Meters", href: "/products/flow-meters/" },
  { title: "Analyzers", href: "/products/analyzers/" },
  { title: "PLC & SCADA", href: "/products/plc/" },
];

const POPULAR_INDUSTRIES = [
  { title: "Oil & Gas", href: "/industries/oil-gas/" },
  { title: "Refinery", href: "/industries/refinery/" },
  { title: "Petrochemicals", href: "/industries/petrochemicals/" },
];

const latestArticles = Object.entries(blogArticles)
  .slice(-2)
  .reverse()
  .map(([slug, article]) => ({
    slug,
    title: article.title,
    category: article.category,
  }));

export default function NotFound() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B0D26] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(231,33,43,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#e7212b] text-[11px] font-semibold tracking-[4px] uppercase mb-4">
            Page Not Found
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
            4<span className="text-[#e7212b]">0</span>4
          </h1>
          <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/25"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
            >
              ← Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="bg-[#f4f5f8] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Services */}
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Popular Services
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {POPULAR_SERVICES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-white border border-[#e8eaf0] rounded-xl p-5 hover:border-[#e7212b]/25 hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-[14px] font-semibold text-[#0B0D26] mb-1 group-hover:text-[#e7212b] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[12px] text-gray-400 group-hover:text-[#e7212b]/60 transition-colors">
                    View service →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products & Industries side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Products */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Products
                </span>
              </div>
              <div className="space-y-3">
                {POPULAR_PRODUCTS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between bg-white border border-[#e8eaf0] rounded-xl p-4 hover:border-[#e7212b]/25 hover:shadow-lg transition-all duration-200"
                  >
                    <span className="text-[14px] font-semibold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gray-300 group-hover:text-[#e7212b] transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Industries
                </span>
              </div>
              <div className="space-y-3">
                {POPULAR_INDUSTRIES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between bg-white border border-[#e8eaf0] rounded-xl p-4 hover:border-[#e7212b]/25 hover:shadow-lg transition-all duration-200"
                  >
                    <span className="text-[14px] font-semibold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gray-300 group-hover:text-[#e7212b] transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog */}
          {latestArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  From Our Blog
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {latestArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}/`}
                    className="group bg-white border border-[#e8eaf0] rounded-xl p-5 hover:border-[#e7212b]/25 hover:shadow-lg transition-all duration-200"
                  >
                    <span className="text-[10px] font-semibold text-[#e7212b] tracking-[2px] uppercase mb-2 block">
                      {article.category}
                    </span>
                    <h3 className="text-[14px] font-semibold text-[#0B0D26] leading-snug group-hover:text-[#e7212b] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
