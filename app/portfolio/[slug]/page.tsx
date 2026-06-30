import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, Download, ExternalLink, ArrowRight } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import YouTubeEmbed from "@/components/YouTubeEmbed";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} - Texas Technical Services`,
    description: product.description ?? `${product.name} - Texas Technical Services`,
    alternates: { canonical: `https://texastechserv.com/portfolio/${slug}/` },
    openGraph: {
      title: `${product.name} - Texas Technical Services`,
      description: product.description ?? `${product.name} - Texas Technical Services`,
      url: `https://texastechserv.com/portfolio/${slug}/`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // ── Adapt lib/products.ts fields to what the page needs ──
  const heroImage = product.image ?? "/images/placeholder.png";
  const description = product.description ?? "";
  const externalLink = product.externalLink ?? null;
  const downloadLink = product.downloadLink ?? null;
  const tag = product.tag ?? product.category;
  const variants = product.variants ?? [];
  const youtubeUrl = product.youtubeUrl ?? null;

  // Build bulletSections from keyApplications, keyBenefits, industries
  const bulletSections = [
    ...(product.keyApplications?.length
      ? [{ heading: "Key Applications", items: product.keyApplications }]
      : []),
    ...(product.keyBenefits?.length
      ? [{ heading: "Key Benefits / Features", items: product.keyBenefits }]
      : []),
    ...(product.industries?.length
      ? [{ heading: "Industries Served", items: product.industries }]
      : []),
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B0D26]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-14 pt-28">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href="/products/" className="hover:text-white/70 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link 
              href={product.parentPath + "/"} 
              className="hover:text-white/70 transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">{product.name}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[9px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border bg-white/10 text-white/60 border-white/15">
                {product.category}
              </span>
              <span className="text-[9px] text-white/40 tracking-[1.5px] uppercase border border-white/10 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-medium text-white leading-[1.15] mb-4">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Image */}
            <div className="rounded-2xl border border-[#e8eaf0] bg-[#f8f9fb] p-8 shadow-sm">
              <div className="relative h-72 sm:h-96">
                <Image
                  src={heroImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                {description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#f0f0f0]">
                {externalLink && (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#F5821F] text-[#F5821F] hover:bg-[#F5821F] hover:text-white font-medium text-[13px] px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    For More Detail
                  </a>
                )}
                {downloadLink && (
                  <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-medium text-[13px] px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Applications, Benefits, Industries — 3 columns */}
          {bulletSections.length > 0 && (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {bulletSections.map((sec) => (
                <div
                  key={sec.heading}
                  className="bg-[#f9fafb] border border-[#e8eaf0] rounded-2xl p-6"
                >
                  <p className="text-[10px] font-medium text-[#F5821F] tracking-[2px] uppercase mb-4">
                    {sec.heading}
                  </p>
                  <ul className="space-y-2.5">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#F5821F]/10 border border-[#F5821F]/25 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#F5821F]" strokeWidth={2.5} />
                        </span>
                        <span className="text-[13px] text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* YouTube embed — full width below columns */}
          {youtubeUrl && (
            <div className="mt-10 max-w-3xl mx-auto">
              <YouTubeEmbed url={youtubeUrl} />
            </div>
          )}
        </div>
      </section>

      {/* ── VARIANTS / MODELS ────────────────────────────── */}
      {variants.length > 0 && (
        <section className="bg-[#f4f5f8] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#F5821F]/40" />
              <span className="text-[#F5821F] text-[9px] font-medium tracking-[2.5px] uppercase">
                Available Models
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {variants.map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#e8eaf0] text-[#0B0D26] text-[12px] font-medium px-4 py-2 rounded-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5821F] shrink-0" />
                  {model}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Interested in {product.name}?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our specialists about your requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
