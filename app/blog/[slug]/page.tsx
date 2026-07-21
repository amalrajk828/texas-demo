import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogArticles } from "@/lib/blogArticles";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { BlogPostingJsonLd } from "@/components/schema/BlogPostingJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import FaqAccordion from "@/components/FaqAccordion";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `https://texastechserv.com/blog/${slug}/` },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `https://texastechserv.com/blog/${slug}/`,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Texas Technical Services"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@texastechserv",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.image],
    }
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  const faqItems: { q: string; a: string }[] = [];
  const faqMatch = article.content.match(/<h2>Frequently Asked Questions[\s\S]*$/i);
  if (faqMatch) {
    const qaPattern = /<p><strong>Q:\s*(.*?)<\/strong><br\s*\/?>\s*<strong>A:<\/strong>\s*(.*?)<\/p>/gi;
    let m;
    while ((m = qaPattern.exec(faqMatch[0])) !== null) {
      faqItems.push({ q: m[1].trim(), a: m[2].trim() });
    }
  }

  // Calculate wordCount from content (strip HTML tags)
  const contentWithoutFaq = article.content.split(/<h2>Frequently Asked Questions[\s\S]*$/i)[0];
  const textOnly = contentWithoutFaq.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = textOnly.split(/\s+/).length;

  // Extract first paragraph for SpeakableSchema
  const firstParagraphMatch = article.content.match(/<p[^>]*>(.*?)<\/p>/i);
  const firstParagraph = firstParagraphMatch
    ? firstParagraphMatch[1].replace(/<[^>]+>/g, '').trim()
    : article.description;

  return (
    <div className="min-h-screen bg-white text-[#333]">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: article.category, href: `/blog/${slug}/` }]} />
      <BlogPostingJsonLd headline={article.title} description={article.description} image={article.image} url={`/blog/${slug}/`} datePublished={article.date} dateModified={article.date} wordCount={wordCount} />
      {faqItems.length > 0 && <FaqPageJsonLd items={faqItems} />}
      <SpeakableJsonLd headline={article.title} />
      {/* Hero */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(231,33,43,0.12) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[14px] text-white/50 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/70">{article.category}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[12px] font-semibold tracking-[3px] uppercase">{article.category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white leading-tight mb-5">{article.title}</h1>
          <div className="flex items-center gap-4 text-[14px] text-white/40">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        {/* Featured Hero Image */}
        <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-sm border border-slate-200">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-w-4xl) 100vw, 1200px"
          />
        </div>
        
        {/* Photographer Attribution */}
        {article.imageCredit && (
          <div className="text-[12px] text-gray-400 mb-10 text-right italic flex items-center justify-end gap-1">
            <span>Photo by</span>
            <a
              href={article.imageCredit.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#e7212b] transition-colors font-medium"
            >
              {article.imageCredit.name}
            </a>
            <span>on</span>
            <a
              href={article.imageCredit.photoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#e7212b] transition-colors font-medium"
            >
              Unsplash
            </a>
          </div>
        )}

        <div className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content.split(/<h2>Frequently Asked Questions[\s\S]*$/i)[0] }}
        />

        {faqItems.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[12px] font-semibold tracking-[3px] uppercase">FAQ</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0B0D26] mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </section>
        )}

        {(() => {
          const related = Object.entries(blogArticles)
            .filter(([s, a]) => a.category === article.category && s !== slug)
            .slice(0, 3);
          if (related.length === 0) return null;
          return (
            <section className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[12px] font-semibold tracking-[3px] uppercase">Related</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0B0D26] mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(([s, a]) => (
                  <Link key={s} href={`/blog/${s}/`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-[#e7212b]/30 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-40 bg-gray-100 overflow-hidden">
                      <Image src={a.image} alt={a.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-[#e7212b] tracking-[2px] uppercase">{a.category}</span>
                      <h3 className="text-[16px] font-semibold text-[#0B0D26] mt-2 mb-2 group-hover:text-[#e7212b] transition-colors line-clamp-2">{a.title}</h3>
                      <div className="flex items-center gap-2 text-[13px] text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{a.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <Clock className="w-3 h-3" />
                        <span>{a.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="inline-flex items-center gap-2.5 text-[16px] font-semibold text-[#0B0D26] hover:text-[#e7212b] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Hub
          </Link>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[#e7212b] text-[11px] font-bold tracking-[3px] uppercase block mb-2">ENGINEERING SERVICES</span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Discuss Your Requirements with TTS Engineers</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">Our certified instrumentation engineers are available to review your facility metering, SCADA upgrades, environmental analyzers, and inspection testing needs.</p>
              </div>
              <div className="shrink-0">
                <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-semibold text-[14px] px-8 py-3.5 rounded-lg transition-colors">Contact Our Engineers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
