"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Layers,
  Zap,
  Activity,
  Cpu,
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  Section,
  Container,
  SectionHeading,
  CTASection,
  SpecTable,
  type SpecRow,
} from "@/components/v3";
import LiquidProductCard from "@/components/v3/product/LiquidProductCard";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import type { Product } from "@/lib/products";

export interface DetailGalleryImage {
  src: string;
  alt: string;
}

export interface DetailFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface DetailQuickFact {
  label: string;
  value: string;
}

export interface DetailDownloadItem {
  title: string;
  url: string;
  fileType?: string;
  description?: string;
}

export interface RedesignedProductData {
  slug: string;
  name: string;
  brand: string;
  category: string;
  badge?: string;
  parentPath?: string;
  shortDescription: string;
  longDescription?: string;
  highlightChips?: string[];
  heroImage: string;
  tint?: string;
  galleryImages?: DetailGalleryImage[];
  quickFacts?: DetailQuickFact[];
  keyFeatures?: DetailFeature[];
  specifications?: SpecRow[];
  applications?: string[];
  industries?: string[];
  downloads?: DetailDownloadItem[];
}

interface RedesignedProductDetailTemplateProps {
  product: RedesignedProductData;
  relatedProducts: Product[];
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge,
  Layers,
  Zap,
  ShieldCheck,
  Activity,
  Cpu,
  FileText,
  Sparkles,
};

export default function RedesignedProductDetailTemplate({
  product,
  relatedProducts,
}: RedesignedProductDetailTemplateProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [{ src: product.heroImage, alt: product.name }];

  const currentImage = images[activeImageIndex] || images[0];

  const tintColor = product.tint || "#f3f3f3";
  const radialBg = `radial-gradient(circle at 50% 40%, ${tintColor} 0%, rgba(200, 210, 220, 0.35) 100%), linear-gradient(160deg, #b4bfca, #e4e9ee)`;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio/" },
    ...(product.category
      ? [{ name: product.category, href: product.parentPath || "/portfolio/" }]
      : []),
    { name: product.name, href: `/portfolio/${product.slug}/` },
  ];

  const primaryDownload = product.downloads?.[0];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ProductJsonLd
        name={product.name}
        description={product.shortDescription || product.name}
        brand={product.brand}
        category={product.category}
        image={currentImage.src}
        url={`/portfolio/${product.slug}/`}
      />

      {/* ── 1. Hero (Two Columns, Compact Height, No Placeholder) ── */}
      <section className="relative bg-[#ffffff] pt-28 pb-12 sm:pt-32 sm:pb-16 border-b border-black/[0.06] overflow-hidden">
        <Container>
          {/* Breadcrumb row */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-mono text-[#6b7280]">
              {breadcrumbs.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#9ca3af] shrink-0" />}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="font-semibold text-[#8a302f] truncate max-w-[200px] sm:max-w-none">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-[#1a1c20] transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Info & Actions */}
            <div className="lg:col-span-7">
              {product.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8a302f]/[0.08] text-[#8a302f] text-[12px] font-mono font-bold uppercase tracking-wider mb-3">
                  <span>{product.badge}</span>
                </div>
              )}

              <h1 className="font-heading text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-[#1a1c20] leading-[1.08] tracking-tight mb-4">
                {product.name}
              </h1>

              {product.shortDescription && (
                <p className="text-[15.5px] sm:text-[17px] text-[#4b5563] leading-relaxed mb-6 max-w-2xl">
                  {product.shortDescription}
                </p>
              )}

              {/* Highlight Chips */}
              {product.highlightChips && product.highlightChips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.highlightChips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-black/[0.06] text-[12.5px] text-[#374151] font-medium shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#8a302f]" />
                      <span>{chip}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                  style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {primaryDownload && (
                  <a
                    href={primaryDownload.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#ece9e6] text-[#1a1c20] border border-black/[0.08] text-[14px] font-semibold transition-all duration-300 shadow-xs hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4 text-[#8a302f]" />
                    <span>Download Datasheet</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Cutout Product Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="w-full rounded-[40px] bg-[#f4f4f4] p-5 sm:p-7 border-[6px] border-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.14)] relative overflow-hidden"
              >
                {/* Visual Frame */}
                <div
                  className="w-full aspect-[4/3] rounded-[30px] p-6 sm:p-8 relative flex items-center justify-center overflow-hidden transition-all duration-500"
                  style={{ background: radialBg }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt || product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                      style={{
                        filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.25))",
                      }}
                    />
                  </div>
                </div>

                {/* Thumbnail Strip (if multi-image) */}
                {images.length > 1 && (
                  <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center gap-2.5 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-12 rounded-[12px] bg-white border p-1 shrink-0 overflow-hidden transition-all duration-200 cursor-pointer ${activeImageIndex === idx
                          ? "border-[#8a302f] ring-2 ring-[#8a302f]/30 scale-105"
                          : "border-black/[0.08] opacity-70 hover:opacity-100"
                          }`}
                        title={img.alt}
                        aria-label={`View image ${idx + 1}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Overview (Long Description + Quick Facts Card) ── */}
      {product.longDescription && (
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left: Detailed Overview */}
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Equipment Overview"
                  title="Engineered for Precision & Operational Longevity"
                  description="Complete product architecture details, fluid compatibility profiles, and plant integration overview."
                  className="!mb-6 text-left"
                />
                <div className="space-y-4 text-[15px] sm:text-[16px] text-[#4b5563] leading-relaxed">
                  {product.longDescription.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right: Quick Facts Card */}
              {product.quickFacts && product.quickFacts.length > 0 && (
                <div className="lg:col-span-5">
                  <div className="rounded-[30px] bg-white p-7 border border-black/[0.08] shadow-[0_16px_32px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-black/[0.06]">
                      <div className="w-8 h-8 rounded-[10px] bg-[#8a302f]/[0.08] flex items-center justify-center text-[#8a302f]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-[17px] font-bold text-[#1a1c20]">
                        Quick Specifications
                      </h3>
                    </div>

                    <dl className="space-y-3.5 text-[14px]">
                      {product.quickFacts.map((fact, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1 border-b border-black/[0.03]">
                          <dt className="text-[#6b7280] font-mono text-[12.5px] uppercase tracking-wider">
                            {fact.label}
                          </dt>
                          <dd className="font-semibold text-[#1a1c20] text-right">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 3. Key Features ── */}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <Section tone="grey">
          <Container>
            <SectionHeading
              eyebrow="Key Features"
              title="Advanced Technological Capabilities"
              description="Proprietary design features engineered to optimize flow metrology, minimize maintenance, and secure continuous plant uptime."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {product.keyFeatures.map((feat, idx) => {
                const IconComponent = (feat.iconName && ICON_MAP[feat.iconName]) || Gauge;
                return (
                  <div
                    key={idx}
                    className="rounded-[28px] bg-white p-7 border border-black/[0.06] shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-[16px] bg-[#8a302f]/[0.08] text-[#8a302f] flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-3 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[13.5px] text-[#4b5563] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 4. Technical Specifications & Models (Red Header SpecTable) ── */}
      {product.specifications && product.specifications.length > 0 && (
        <Section tone="light">
          <Container size="narrow">
            <SectionHeading
              eyebrow="Key Parameters"
              title="Technical Specifications & Models"
              description="Summary specifications for mechanical layout, process compatibility, and tender evaluation."
            />
            <div className="mt-8">
              <SpecTable rows={product.specifications} />
            </div>
          </Container>
        </Section>
      )}

      {/* ── 5. Applications & Industries ── */}
      {((product.applications && product.applications.length > 0) ||
        (product.industries && product.industries.length > 0)) && (
          <Section tone="grey">
            <Container>
              <SectionHeading
                eyebrow="Operating Domains"
                title="Applications & Industries Served"
                description="Field-proven performance across critical petrochemical installations, loading terminals, and pipeline corridors."
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {/* Process Applications */}
                {product.applications && product.applications.length > 0 && (
                  <div className="rounded-[30px] bg-white p-7 sm:p-8 border border-black/[0.06] shadow-xs">
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-black/[0.06]">
                      <span className="text-[12px] font-mono uppercase tracking-wider text-[#8a302f] font-bold">
                        Process Applications
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-[#374151]">
                          <CheckCircle2 className="w-4 h-4 text-[#8a302f] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Target Industries */}
                {product.industries && product.industries.length > 0 && (
                  <div className="rounded-[30px] bg-white p-7 sm:p-8 border border-black/[0.06] shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-black/[0.06]">
                        <span className="text-[12px] font-mono uppercase tracking-wider text-[#8a302f] font-bold">
                          Target Industries
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5 mt-2">
                        {product.industries.map((ind, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full bg-[#f3f4f6] text-[#1f2937] text-[13px] font-medium border border-black/[0.04]"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/[0.05] text-[13px] text-[#6b7280]">
                      Certified for deployment across Kuwait, UAE, Saudi Arabia, and regional GCC facilities.
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </Section>
        )}

      {/* ── 6. Downloads ── */}
      {product.downloads && product.downloads.length > 0 && (
        <Section tone="light">
          <Container size="narrow">
            <SectionHeading
              eyebrow="Documentation"
              title="Technical Datasheets & Documentation"
              description="Download verified manufacturer documentation, technical manuals, and dimensional drawings."
            />

            <div className="space-y-4 mt-8">
              {product.downloads.map((dl, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white p-6 border border-black/[0.08] shadow-[0_12px_24px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:border-[#8a302f]/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[14px] bg-[#8a302f]/[0.08] text-[#8a302f] flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-[16px] font-bold text-[#1a1c20]">
                          {dl.title}
                        </span>
                        {dl.fileType && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#8a302f]/[0.1] text-[#8a302f]">
                            {dl.fileType}
                          </span>
                        )}
                      </div>
                      {dl.description && (
                        <p className="text-[13px] text-[#6b7280]">
                          {dl.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-[13px] font-semibold transition-all duration-200 hover:opacity-90 shrink-0"
                    style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download File</span>
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 7. Related Equipment (NEW Card Component with Tint & Cutout) ── */}
      {relatedProducts && relatedProducts.length > 0 && (
        <Section tone="grey">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#8a302f] font-bold block mb-1">
                  Connected Systems
                </span>
                <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#1a1c20] leading-tight">
                  Related Equipment
                </h2>
              </div>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-1.5 text-[13px] font-mono font-semibold text-[#8a302f] hover:underline"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((p, idx) => (
                <div key={p.slug} className="mountain-card-wrap">
                  <LiquidProductCard
                    product={p}
                    index={idx}
                    isVisible={true}
                    variant="cutout"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── 8. Final CTA Band ── */}
      <CTASection
        title={`Need Help Selecting the Right ${product.name} Configuration?`}
        subtitle={`Our application engineers and technical specialists assist with sizing, system integration, and field deployment for ${product.category || "industrial automation"} systems across Kuwait and the GCC.`}
        primaryCta={{ label: "Request Engineering Quote", href: "/contacts/" }}
        secondaryCta={{ label: `Explore ${product.category || "Portfolio"}`, href: product.parentPath || "/portfolio/" }}
      />
    </>
  );
}
