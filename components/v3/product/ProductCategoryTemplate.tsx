"use client";

import React from "react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  ImageCard,
  CardGrid,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";
import type { ProductCategoryData } from "@/lib/product-categories";
import type { Product } from "@/lib/products";

interface ProductCategoryTemplateProps {
  data: ProductCategoryData;
  products: Product[];
}

export default function ProductCategoryTemplate({
  data,
  products,
}: ProductCategoryTemplateProps) {
  const hasSubcategories = Boolean(data.subcategories && data.subcategories.length > 0);
  const showProductGrid = !hasSubcategories; // Safeguard: keep product catalog only on leaf pages where it is the sole main content

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products/" },
    { name: data.heroTitle, href: data.path },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ItemListJsonLd
        name={data.heroTitle}
        items={products.map((p) => ({
          name: p.name,
          url: `/portfolio/${p.slug}/`,
          description: p.description || "",
        }))}
      />
      <FaqPageJsonLd items={productsListingFaq} />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title={data.heroTitle}
        subtitle={data.subtitle}
        category={data.eyebrow}
        badgeText={
          hasSubcategories
            ? `${data.subcategories.length} Specialized Branches Available`
            : `${products.length} Models & Configurations Available`
        }
        primaryCta={
          hasSubcategories
            ? { label: "Browse Categories", href: "#sub-categories" }
            : { label: "Browse Equipment", href: "#product-models" }
        }
        secondaryCta={{ label: "Request Technical Datasheet", href: "/contacts/" }}
      />

      {/* ── 2. Sub-Categories (if available) ── */}
      {hasSubcategories && (
        <Section id="sub-categories" tone="grey">
          <Container>
            <SectionHeading
              eyebrow="Specialized Branches"
              title="Select Measurement Technology"
              description="Explore dedicated equipment groupings engineered for specific fluid phases, operating envelopes, and regulatory standards."
            />
            <CardGrid max={3} className="mt-10">
              {data.subcategories.map((sub, idx) => (
                <ImageCard
                  key={idx}
                  variant="default"
                  tone="grey"
                  elevation="flat"
                  href={sub.href}
                  imageSrc={sub.image}
                  title={sub.title}
                  subtitle={sub.description}
                  tag="Explore Sub-Category"
                  fit={sub.fit}
                />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 3. Product Catalog Grid (Safeguard: rendered only on leaf pages as the sole main content) ── */}
      {showProductGrid && (
        <Section
          id="product-models"
          tone="grey"
        >
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold block mb-1">
                  Precision Hardware
                </span>
                <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#1a1c20] leading-tight">
                  {`Available ${data.heroTitle} Systems`}
                </h2>
              </div>
              <span className="text-[#6b7280] text-[13px] font-mono font-medium">
                {products.length} Products Cataloged
              </span>
            </div>

            <CardGrid max={3}>
              {products.map((product) => (
                <ImageCard
                  key={product.slug}
                  variant="product"
                  tone="grey"
                  elevation="flat"
                  href={`/portfolio/${product.slug}/`}
                  imageSrc={product.image}
                  title={product.name}
                  subtitle={product.description}
                  meta={product.tag || product.category}
                  tag={product.tag || product.category || "View Specs"}
                  fit={product.fit}
                />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 4. Frequently Asked Questions ── */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Procurement & Technical FAQ"
            title="Questions About Equipment Selection"
            description="Guidelines on custody certification, Hazardous Area Ex approvals, and warranty support across Kuwait and the GCC."
          />
          <ServiceFaqAccordion items={productsListingFaq} />
        </Container>
      </Section>

      {/* ── 5. CTA Section ── */}
      <CTASection
        title={`Looking for Custom Sizing or ${data.heroTitle} Quotation?`}
        subtitle="Our applications engineers analyze your process flow rates, fluid properties, and design pressures to configure the optimal instrumentation package."
        primaryCta={{ label: "Request Engineering Quote", href: "/contacts/" }}
        secondaryCta={{ label: "View All Products", href: "/products/" }}
      />
    </>
  );
}
