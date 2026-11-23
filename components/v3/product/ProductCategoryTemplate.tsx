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
import ProductStackShowcase from "./ProductStackShowcase";
import LiquidFlowMetersCatalog from "./LiquidFlowMetersCatalog";
import ProductCatalogShowcase from "./ProductCatalogShowcase";
import {
  FLOW_METERS_SHOWCASE_CONFIG,
  ANALYZERS_SHOWCASE_CONFIG,
} from "./showcase-configs";

interface ProductCategoryTemplateProps {
  data: ProductCategoryData;
  products: Product[];
}

export default function ProductCategoryTemplate({
  data,
  products,
}: ProductCategoryTemplateProps) {
  const hasSubcategories = Boolean(data.subcategories && data.subcategories.length > 0);
  const isFlowMetersRoot = data.key === "flow-meters" || data.path === "/products/flow-meters/";
  const isAnalyzersRoot = data.key === "analyzers" || data.path === "/products/analyzers/";
  const isStackShowcase = isFlowMetersRoot || isAnalyzersRoot;
  const isLiquidFlowMeters =
    data.key === "flow-meters/liquid-flow-meters" ||
    data.path === "/products/flow-meters/liquid-flow-meters/";
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
        flatBg={true}
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
        isStackShowcase ? (
          <ProductStackShowcase
            config={isAnalyzersRoot ? ANALYZERS_SHOWCASE_CONFIG : FLOW_METERS_SHOWCASE_CONFIG}
          />
        ) : (
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
        )
      )}

      {/* ── 3. Product Catalog Grid (Safeguard: rendered only on leaf pages as the sole main content) ── */}
      {showProductGrid && (
        isLiquidFlowMeters ? (
          <LiquidFlowMetersCatalog
            heroTitle={data.heroTitle}
            products={products}
          />
        ) : (
          <ProductCatalogShowcase
            heroTitle={data.heroTitle}
            products={products}
          />
        )
      )}

      {/* ── 4. Frequently Asked Questions ── */}
      <Section
        tone="grey"
        className="!bg-[#ece9e5] !mt-0 !pt-8"
      >
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
