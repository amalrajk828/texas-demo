import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { blogArticles } from "@/lib/blogArticles";
import { SITE_URL } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { BlogPostingJsonLd } from "@/components/schema/BlogPostingJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import ImageCard from "@/components/v3/ImageCard";
import CTASection from "@/components/v3/CTASection";
import CardGrid from "@/components/v3/CardGrid";

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

  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${SITE_URL}${article.image}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${slug}/` },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `/blog/${slug}/`,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Texas Technical Services"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@texastechserv",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  const faqItems: { q: string; a: string }[] = [];
  const faqMatch = article.content.match(/<h2>Frequently Asked Questions[\s\S]*$/i);
  if (faqMatch) {
    const qaPattern =
      /<p><strong>Q:\s*(.*?)<\/strong><br\s*\/?>\s*<strong>A:<\/strong>\s*(.*?)<\/p>/gi;
    let m;
    while ((m = qaPattern.exec(faqMatch[0])) !== null) {
      faqItems.push({ q: m[1].trim(), a: m[2].trim() });
    }
  }

  // Calculate wordCount from content (strip HTML tags)
  const contentWithoutFaq = article.content.split(
    /<h2>Frequently Asked Questions[\s\S]*$/i
  )[0];
  const textOnly = contentWithoutFaq
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textOnly.split(/\s+/).length;

  // Related articles (up to 3)
  const related = Object.entries(blogArticles)
    .filter(([s, a]) => a.category === article.category && s !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: article.category, href: `/blog/${slug}/` },
        ]}
      />
      <BlogPostingJsonLd
        headline={article.title}
        description={article.description}
        image={article.image}
        url={`/blog/${slug}/`}
        datePublished={article.date}
        dateModified={article.date}
        wordCount={wordCount}
        category={article.category}
        keywords={article.keywords}
      />
      {faqItems.length > 0 && <FaqPageJsonLd items={faqItems} />}
      <SpeakableJsonLd headline={article.title} />

      {/* ══ ARTICLE HEADER / HERO (V3 style, no breadcrumb in hero) ══ */}
      <section className="relative bg-[#0b0f19] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(107,26,31,0.25),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#6b1a1f] text-white">
              {article.category}
            </span>
            <span className="text-white/40 text-[13px]">•</span>
            <div className="flex items-center gap-1.5 text-[13px] text-white/60">
              <Calendar className="w-3.5 h-3.5 text-[#0891b2]" />
              <span>{article.date}</span>
            </div>
            <span className="text-white/40 text-[13px]">•</span>
            <div className="flex items-center gap-1.5 text-[13px] text-white/60">
              <Clock className="w-3.5 h-3.5 text-[#0891b2]" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] mb-6">
            {article.title}
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
            {article.description}
          </p>

          <div className="mt-8 pt-8 border-t border-white/[0.1] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white font-bold text-sm">
                TTS
              </div>
              <div>
                <div className="text-[13px] font-bold text-white">Texas Technical Services</div>
                <div className="text-[11px] text-white/50">Engineering Knowledge Hub · Kuwait &amp; UAE</div>
              </div>
            </div>

            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ARTICLE MAIN BODY ═════════════════════════════════════ */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-8 border border-black/[0.06] shadow-sm bg-slate-100">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          {/* Photo Credit if present */}
          {article.imageCredit && (
            <div className="text-[12px] text-slate-400 mb-10 text-right italic flex items-center justify-end gap-1">
              <span>Photo by</span>
              <a
                href={article.imageCredit.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#6b1a1f] transition-colors font-medium"
              >
                {article.imageCredit.name}
              </a>
              <span>on</span>
              <a
                href={article.imageCredit.photoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#6b1a1f] transition-colors font-medium"
              >
                Unsplash
              </a>
            </div>
          )}

          {/* Prose Content */}
          <div
            className="prose prose-slate prose-lg max-w-none text-[#334155] leading-relaxed
              prose-headings:text-[#0f172a] prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-6 prose-h2:border-t prose-h2:border-slate-100
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:leading-[1.8] prose-p:mb-6
              prose-a:text-[#6b1a1f] prose-a:font-semibold prose-a:underline hover:prose-a:text-[#852127]
              prose-strong:text-[#0f172a] prose-strong:font-bold
              prose-ul:my-6 prose-li:my-2 prose-li:leading-relaxed
              prose-table:border-collapse prose-table:my-8 prose-th:bg-slate-50 prose-th:p-3.5 prose-th:border prose-th:border-slate-200 prose-td:p-3.5 prose-td:border prose-td:border-slate-200
              prose-blockquote:border-l-4 prose-blockquote:border-[#6b1a1f] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:rounded-r-xl"
            dangerouslySetInnerHTML={{ __html: contentWithoutFaq }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#6b1a1f] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </Link>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DCDCD9] border border-black/[0.08] text-[13px] font-bold text-[#0f172a] hover:bg-[#6b1a1f] hover:text-white transition-colors"
            >
              <span>Speak to an Engineer</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* ══ SECTION (Grey): FAQ if present ════════════════════════ */}
      {faqItems.length > 0 && (
        <section className="py-20 bg-white border-t border-black/[0.04]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <PageFaqSection
              items={faqItems}
              title="Frequently Asked Questions"
              highlight="Technical Reference"
            />
          </div>
        </section>
      )}

      {/* ══ SECTION (White): Related Articles ═════════════════════ */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-white border-t border-black/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-2">
                Continue Reading
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                Related Technical Guides &amp; Insights
              </h2>
            </div>

            <CardGrid max={3}>
              {related.map(([s, a]) => (
                <ImageCard
                  key={s}
                  variant="blog"
                  title={a.title}
                  description={a.description}
                  imageUrl={a.image}
                  imageAlt={a.imageAlt}
                  href={`/blog/${s}/`}
                  badge={a.category}
                  date={a.date}
                  readTime={a.readTime}
                />
              ))}
            </CardGrid>
          </div>
        </section>
      )}

      {/* ══ CTA SECTION ═══════════════════════════════════════════ */}
      <CTASection
        title="Need Technical Guidance on Your Facility Instrumentation?"
        subtitle="Our instrumentation and control engineers across Kuwait and Dubai are ready to review your custody transfer, SCADA, and compliance specifications."
        primaryAction={{
          label: "Consult an Engineer",
          href: "/contacts/",
        }}
        secondaryAction={{
          label: "Explore All Services",
          href: "/services/",
        }}
      />
    </div>
  );
}
