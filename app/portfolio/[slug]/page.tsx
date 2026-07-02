import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, Download, ExternalLink, ArrowRight } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";

type Props = {
  params: Promise<{ slug: string }>;
};

type BulletSection = {
  heading: string;
  items: string[];
};

type SubBlock = {
  id: string;
  heading: string;
  tagline?: string;
  paragraphs: string[];
  subHeading?: string;
  subParagraphs?: string[];
  bulletSections?: BulletSection[];
  image?: string;
  imageAlt?: string;
  downloadHref?: string;
};

function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

function getProduct(slug: string) {
  return getProductBySlug(slug);
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} - Texas Technical Services`,
    description: product.paragraphs?.[0] ?? `${product.name} - Texas Technical Services`,
    alternates: { canonical: `https://texastechserv.com/portfolio/${slug}/` },
    openGraph: {
      title: `${product.name} - Texas Technical Services`,
      description: product.paragraphs?.[0] ?? `${product.name} - Texas Technical Services`,
      url: `https://texastechserv.com/portfolio/${slug}/`,
    },
  };
}
{/*test */ }
const categoryColors: Record<string, string> = {
  "CEMS": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Metering Skid": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Flow Meter": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Flow Metering": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Flow Computer": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Gas Analyzer": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "Industrial Sensors": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "PLC": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "ICONICS": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "GOT": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Frequency Inverters (VFD)": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "AC Servos": "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

function BulletList({ section }: { section: BulletSection }) {
  return (
    <div>
      <p className="text-[10px] font-medium text-[#e7212b] tracking-[2px] uppercase mb-4">
        {section.heading}
      </p>
      <ul className="space-y-2.5">
        {section.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-[#e7212b]" strokeWidth={2.5} />
            </span>
            <span className="text-[13px] text-gray-600 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubBlockSection({ block, index }: { block: SubBlock; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div className={`py-16 lg:py-20 ${isEven ? "bg-white" : "bg-[#f4f5f8]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Text */}
          <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                {block.id.replace("-", " ").toUpperCase()}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0B0D26] leading-snug mb-3">
              {block.heading}
            </h2>
            {block.tagline && (
              <p className="text-[#e7212b] text-sm font-medium mb-5 leading-snug">
                {block.tagline}
              </p>
            )}
            {block.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-500 text-[14px] leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {block.subHeading && (
              <h3 className="text-[15px] font-semibold text-[#0B0D26] mt-6 mb-3">
                {block.subHeading}
              </h3>
            )}
            {block.subParagraphs?.map((p, i) => (
              <p key={i} className="text-gray-500 text-[14px] leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {block.bulletSections && block.bulletSections.length > 0 && (
              <div className="mt-7 space-y-7">
                {block.bulletSections.map((sec) => (
                  <BulletList key={sec.heading} section={sec} />
                ))}
              </div>
            )}
            {block.downloadHref && (
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#f0f0f0]">
                <a
                  href={block.downloadHref}
                  {...(block.downloadHref !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white text-[12px] font-medium px-5 py-2.5 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Product Information
                </a>
              </div>
            )}
          </div>

          {/* Image */}
          {block.image && (
            <div className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}>
              <div className="rounded-2xl border border-[#e8eaf0] bg-[#f8f9fb] p-6 shadow-sm">
                <div className="relative h-72 sm:h-80">
                  <Image
                    src={block.image}
                    alt={block.imageAlt ?? block.heading}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage || product.image || "/images/placeholder.png"}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B0D26]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/50 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-14 pt-28">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href="/products/" className="hover:text-white/70 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href={product.parentPath.endsWith("/") ? product.parentPath : `${product.parentPath}/`} className="hover:text-white/70 transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">{product.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className={`text-[9px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border ${categoryColors[product.category] ?? "bg-white/10 text-white/60 border-white/15"
                  }`}
              >
                {product.category}
              </span>
              <span className="text-[9px] text-white/40 tracking-[1.5px] uppercase border border-white/10 px-2.5 py-1 rounded-full">
                {product.brand}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.15] mb-4">
              {product.name}
            </h1>

            {product.tagline && (
              <p className="text-[#e7212b] text-sm sm:text-base font-medium tracking-wide uppercase mt-2">
                {product.tagline}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW — image + description ════════════════════════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Product image — uncropped, full visibility */}
            <div className="rounded-2xl border border-[#e8eaf0] bg-[#f8f9fb] p-8 shadow-sm">
              <div className="relative h-72 sm:h-96">
                <Image
                  src={product.heroImage || product.image || "/images/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              {product.intro && (
                <blockquote className="border-l-2 border-[#e7212b] pl-5 mb-6">
                  <p className="text-gray-700 text-base italic leading-relaxed">{product.intro}</p>
                </blockquote>
              )}
              {product.paragraphs && product.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {/* Quick-access actions */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#f0f0f0]">
                <a
                  href={product.externalLink || `https://texastechserv.com/portfolio/${product.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#e7212b] text-[#e7212b] hover:bg-[#e7212b] hover:text-white font-medium text-[13px] px-5 py-2.5 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  For More Detail
                </a>
                {product.downloadLink && (
                  <a
                    href={product.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium text-[13px] px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bullet sections — below the image+text on wider cards */}
          {product.bulletSections && product.bulletSections.length > 0 && (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {product.bulletSections.map((sec) => (
                <div
                  key={sec.heading}
                  className="bg-[#f9fafb] border border-[#e8eaf0] rounded-2xl p-6"
                >
                  <BulletList section={sec} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══ GALLERY — additional product images ════════════════════ */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="bg-[#f4f5f8] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Product Gallery
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.gallery.map((img) => (
                <div
                  key={img.src}
                  className="bg-white border border-[#e8eaf0] rounded-2xl p-6 shadow-sm"
                >
                  <div className="relative h-60 sm:h-72">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-4 text-center leading-tight">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ SUB-BLOCKS — e.g. OMNI + Flow-X ══════════════════════ */}
      {product.subBlocks && product.subBlocks.length > 0 && (
        <div>
          {product.subBlocks.map((block, i) => (
            <SubBlockSection key={block.id} block={block} index={i} />
          ))}
        </div>
      )}

      {/* ══ YOUTUBE VIDEO ════════════════════════════════════════ */}
      {product.youtubeUrl && (
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Product Video
              </span>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#e8eaf0]">
              <iframe
                src={`https://www.youtube.com/embed/${product.youtubeUrl.replace("https://youtu.be/", "")}`}
                className="w-full h-full"
                allowFullScreen
                title={`${product.name} — Product Video`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ══ MODELS ════════════════════════════════════════════════ */}
      {product.models && product.models.length > 0 && (
        <section className="bg-[#f4f5f8] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Available Models
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.models.map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#e8eaf0] text-[#0B0D26] text-[12px] font-medium px-4 py-2 rounded-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0" />
                  {model}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ PAGE-LEVEL ACTIONS — for sub-block products ═══════════ */}
      {product.downloadLink && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Resources
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={product.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium text-[13px] px-6 py-3 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ══ PRODUCT INQUIRY FORM ═════════════════════════════════ */}
      <ProductInquiryForm productName={product.name} category={product.category} />

      {/* ══ RELATED PRODUCTS ════════════════════════════════════ */}
      <RelatedProducts
        currentSlug={product.slug}
        products={products.filter((p) => p.category === product.category && p.slug !== product.slug)}
        category={product.category}
        title="Related Products"
      />

      {/* ══ CTA BANNER ════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Interested in {product.name}?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our specialists about your requirements. Kuwait and Dubai offices ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
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
