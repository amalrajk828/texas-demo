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
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { industryFaqData } from "@/lib/industryFaqData";
import type { IndustryDetailData } from "@/lib/industries/industries-data";

interface IndustryDetailPageProps {
  data: IndustryDetailData;
}

export default function IndustryDetailPage({ data }: IndustryDetailPageProps) {
  const faqs = industryFaqData[data.slug] || [];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries/" },
          { name: data.name, href: `/industries/${data.slug}/` },
        ]}
      />
      <SpeakableJsonLd
        headline={`${data.name} Industry Solutions — Texas Technical Services`}
        cssSelector={["h1", "h2", "p"]}
      />
      {faqs.length > 0 && <FaqPageJsonLd items={faqs} />}

      {/* ── 1. Page Hero ── */}
      <PageHero
        title={`${data.name} Engineering Solutions`}
        subtitle={data.heroDesc}
        category="Industry Solutions"
        badgeText={`${data.products.length} Validated Systems · 18+ Years GCC`}
        primaryCta={{ label: "View Equipment Solutions", href: "#products" }}
        secondaryCta={{ label: "Request Technical Consultation", href: "/contacts/" }}
      />

      {/* ── 2. Tailored Equipment & Product Systems (ImageCards) ── */}
      <Section id="products" tone="white">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold block mb-1">
                Equipment Portfolio
              </span>
              <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#1a1c20] leading-tight">
                {`Engineered Solutions for ${data.name}`}
              </h2>
            </div>
            <span className="text-[#6b7280] text-[13px] font-mono font-medium">
              {data.products.length} Verified Systems Available
            </span>
          </div>

          <CardGrid max={4}>
            {data.products.map((product) => (
              <ImageCard
                key={product.slug}
                variant="product"
                tone="light"
                elevation="flat"
                href={`/portfolio/${product.slug}/`}
                imageSrc={product.image}
                title={product.name}
                subtitle={product.desc}
                meta={product.brand}
                tag={product.category}
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 3. Connected Engineering Services ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Full Lifecycle Support"
            title={`Connected Services for ${data.name} Facilities`}
            description="From initial feasibility studies and skid fabrication to in-situ recalibration and SIL-3 safety audits across Kuwait and GCC installations."
          />

          <CardGrid max={4} className="mt-10">
            {data.services.map((service, idx) => (
              <ImageCard
                key={idx}
                variant="default"
                tone="grey"
                elevation="flat"
                href={`/service/${service.slug}/`}
                imageSrc={service.image}
                title={service.title}
                subtitle={service.desc}
                meta="Engineering Service"
                tag="Explore Service"
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 4. Industry FAQ ── */}
      {faqs.length > 0 && (
        <Section tone="white">
          <Container>
            <SectionHeading
              eyebrow="Technical FAQ"
              title={`Frequently Asked Questions: ${data.name}`}
              description="Detailed engineering insights regarding metering tolerances, environmental compliance standards, and turnkey skid delivery."
            />
            <ServiceFaqAccordion items={faqs} />
          </Container>
        </Section>
      )}

      {/* ── 5. CTA Section ── */}
      <CTASection
        title={`Plan Your ${data.name} Project With Texas Technical Services`}
        subtitle="Speak directly with our senior instrumentation engineers in Kuwait and Dubai for technical specifications, sizing, and quotation packages."
        primaryCta={{ label: "Request Technical Consultation", href: "/contacts/" }}
        secondaryCta={{ label: "View All Industries", href: "/industries/" }}
      />
    </>
  );
}
