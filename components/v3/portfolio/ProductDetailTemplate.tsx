"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  ImageCard,
  CardGrid,
  SpecTable,
  type SpecRow,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import type { ProductData, Product } from "@/lib/products";
import { genericProductFaq } from "@/lib/pageFaqData";

interface ProductDetailTemplateProps {
  product: ProductData;
  relatedProducts: Product[];
}

export default function ProductDetailTemplate({
  product,
  relatedProducts,
}: ProductDetailTemplateProps) {
  const faqs =
    product.faq && product.faq.length > 0
      ? product.faq
      : genericProductFaq(product.name, product.brand, product.category);

  // Build SpecTable rows from models or bullet sections
  const specRows: SpecRow[] = [];
  if (product.brand) {
    specRows.push({ parameter: "OEM Manufacturer", value: product.brand });
  }
  if (product.category) {
    specRows.push({ parameter: "Equipment Category", value: product.category });
  }
  if (product.models && product.models.length > 0) {
    specRows.push({ parameter: "Supported Series / Models", value: product.models.join(", ") });
  }
  if (product.tagline) {
    specRows.push({ parameter: "Engineering Scope", value: product.tagline });
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio/" },
          { name: product.name, href: `/portfolio/${product.slug}/` },
        ]}
      />
      <ProductJsonLd
        name={product.name}
        description={product.paragraphs?.[0] || product.name}
        brand={product.brand}
        category={product.category}
        image={product.heroImage}
        url={`/portfolio/${product.slug}/`}
      />
      {faqs.length > 0 && <FaqPageJsonLd items={faqs} />}

      {/* ── 1. Page Hero with Product Image & Key Specs ── */}
      <section className="relative bg-[#e8e8e6] pt-32 pb-16 lg:pb-24 border-b border-black/[0.06] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Product Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6b191b]/[0.08] text-[#6b191b] text-[12px] font-mono font-bold uppercase tracking-wider mb-4">
                <span>{product.brand}</span>
                <span>·</span>
                <span>{product.category}</span>
              </div>
              <h1 className="font-heading text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[#1a1c20] leading-[1.1] mb-5">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="text-[17px] sm:text-[19px] text-[#4b5563] font-medium leading-relaxed mb-6">
                  {product.tagline}
                </p>
              )}
              {product.paragraphs?.[0] && (
                <p className="text-[14.5px] text-[#4b5563] leading-relaxed mb-8">
                  {product.paragraphs[0]}
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contacts/"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {product.downloadHref && (
                  <a
                    href={product.downloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#ece9e6] text-[#1a1c20] border border-black/[0.08] text-[14px] font-semibold transition-all duration-300"
                  >
                    <Download className="w-4 h-4 text-[#6b191b]" />
                    <span>Download Datasheet</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Product Image in Frosted Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-[36px] bg-white p-8 sm:p-10 border border-black/[0.06] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] relative overflow-hidden flex items-center justify-center aspect-square">
                {product.heroImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#9ca3af]">
                    <Layers className="w-16 h-16 stroke-[1.2] mb-3 text-[#6b191b]" />
                    <span className="text-[13px] font-mono uppercase tracking-wider font-semibold">
                      {product.brand} Hardware
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Detailed Technical Features (Glass Cards) ── */}
      {(product.bulletSections || product.subBlocks || (product.paragraphs && product.paragraphs.length > 1)) && (
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Technical Capabilities"
              title="System Architecture & Operating Features"
              description="Engineered for high-duty continuous operation, rigorous safety compliance, and seamless plant network telemetry."
            />

            {/* Secondary paragraphs if present */}
            {product.paragraphs && product.paragraphs.length > 1 && (
              <div className="max-w-4xl mx-auto mb-12 space-y-4 text-[15px] text-[#4b5563] leading-relaxed">
                {product.paragraphs.slice(1).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}

            {/* Feature Blocks / Bullet Sections */}
            {product.bulletSections && product.bulletSections.length > 0 && (
              <CardGrid max={3} className="mt-8">
                {product.bulletSections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="rounded-[28px] bg-white p-7 border border-black/[0.06] shadow-[0_15px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full flex-1"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-[12px] bg-[#6b191b]/[0.08] text-[#6b191b] flex items-center justify-center mb-4 font-bold text-[13px] font-mono">
                        0{idx + 1}
                      </div>
                      <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-4 line-clamp-2 sm:min-h-[calc(2*1.3em)]">
                        {sec.heading}
                      </h3>
                      <ul className="space-y-2.5">
                        {sec.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-2.5 text-[13.5px] text-[#4b5563] leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#6b191b] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardGrid>
            )}

            {/* Sub-Blocks with Images if present */}
            {product.subBlocks && product.subBlocks.length > 0 && (
              <div className="space-y-8 mt-12">
                {product.subBlocks.map((block) => (
                  <div
                    key={block.id}
                    className="rounded-[30px] bg-[#f8f7f5] p-6 sm:p-8 lg:p-10 border border-black/[0.06] flex flex-col lg:flex-row gap-8 items-center"
                  >
                    {block.image && (
                      <div className="w-full lg:w-1/3 aspect-[4/3] relative rounded-[20px] overflow-hidden bg-white p-4 border border-black/[0.04] shrink-0">
                        <Image
                          src={block.image}
                          alt={block.imageAlt || block.heading}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b191b] font-bold">
                        {block.tagline || "Hardware Sub-System"}
                      </span>
                      <h4 className="font-heading text-[20px] sm:text-[22px] font-bold text-[#1a1c20] mt-1 mb-3">
                        {block.heading}
                      </h4>
                      {block.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-[14px] text-[#4b5563] leading-relaxed mb-3"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* ── 3. Specifications Table ── */}
      {specRows.length > 0 && (
        <Section tone="grey">
          <Container size="narrow">
            <SectionHeading
              eyebrow="Key Parameters"
              title="Technical Specifications & Models"
              description="Summary specifications for tender evaluation, mechanical integration, and plant engineering."
            />
            <div className="mt-8">
              <SpecTable rows={specRows} />
            </div>
          </Container>
        </Section>
      )}

      {/* ── 4. Related Products in Portfolio ── */}
      {relatedProducts.length > 0 && (
        <Section tone="light">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold block mb-1">
                  Connected Systems
                </span>
                <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#1a1c20] leading-tight">
                  Related Equipment
                </h2>
              </div>
              <Link
                href="/portfolio/"
                className="text-[13px] font-mono font-semibold text-[#6b191b] hover:underline"
              >
                View Full Portfolio →
              </Link>
            </div>

            <CardGrid max={3}>
              {relatedProducts.map((p) => (
                <ImageCard
                  key={p.slug}
                  variant="product"
                  tone="light"
                  href={`/portfolio/${p.slug}/`}
                  imageSrc={p.image}
                  title={p.name}
                  subtitle={p.description}
                  meta={p.tag || p.category}
                  tag={p.tag || p.category || "View Specs"}
                  fit={p.fit}
                />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 5. Product FAQ ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={`Questions About ${product.name}`}
            description="Find rapid answers regarding factory acceptance testing, delivery lead times, and on-site commissioning support."
          />
          <ServiceFaqAccordion items={faqs} />
        </Container>
      </Section>

      {/* ── 6. CTA Section ── */}
      <CTASection
        title={`Ready to Integrate the ${product.name}?`}
        subtitle="Our engineering office in Kuwait and Dubai provides complete sizing, electrical interconnection drawings, and factory direct pricing."
        primaryCta={{ label: "Request Formal Quotation", href: "/contacts/" }}
        secondaryCta={{ label: "Explore Services", href: "/services/" }}
      />
    </>
  );
}
