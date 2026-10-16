"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  Globe2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Layers,
} from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  CardGrid,
} from "@/components/v3";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import type { Partner } from "@/lib/partners";

interface PartnerDetailTemplateProps {
  partner: Partner;
}

export default function PartnerDetailTemplate({ partner }: PartnerDetailTemplateProps) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Partners", href: "/partners/" },
          { name: partner.name, href: `/partners/${partner.slug}/` },
        ]}
      />

      {/* ── 1. Page Hero with Partner Logo ── */}
      <section className="relative bg-[#e8e8e6] pt-32 pb-16 lg:pb-24 border-b border-black/[0.06] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6b191b]/[0.08] text-[#6b191b] text-[12px] font-mono font-bold uppercase tracking-wider mb-4">
                <span>{partner.country}</span>
                <span>·</span>
                <span>{partner.relationship}</span>
              </div>
              <h1 className="font-heading text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-[#1a1c20] leading-[1.1] mb-5">
                {partner.name}
              </h1>
              <p className="text-[17px] sm:text-[19px] text-[#4b5563] font-medium leading-relaxed mb-6">
                {partner.product}
              </p>
              <p className="text-[14.5px] text-[#4b5563] leading-relaxed mb-8">
                {partner.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#6b191b] hover:bg-[#8a2527] text-white text-[14px] font-semibold transition-all duration-300 shadow-md shadow-[#6b191b]/20 hover:-translate-y-0.5"
                >
                  <span>Inquire About {partner.name} Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {partner.href && (
                  <Link
                    href={partner.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#ece9e6] text-[#1a1c20] border border-black/[0.08] text-[14px] font-semibold transition-all duration-300"
                  >
                    <span>View Equipment Lineup</span>
                    <ExternalLink className="w-4 h-4 text-[#6b191b]" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Partner Logo Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[36px] bg-white p-8 sm:p-12 border border-black/[0.06] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] relative overflow-hidden flex items-center justify-center aspect-square">
                {partner.logo ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      priority
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#9ca3af]">
                    <Building2 className="w-16 h-16 stroke-[1.2] mb-3 text-[#6b191b]" />
                    <span className="text-[13px] font-mono uppercase tracking-wider font-semibold">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Key Capabilities & Features ── */}
      {partner.features && partner.features.length > 0 && (
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Key Offerings"
              title={`Advanced Technology from ${partner.name}`}
              description="Certified hardware architectures engineered for extreme environments across Kuwait and the Arabian Gulf."
            />

            <CardGrid max={3} className="mt-10">
              {partner.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-[#f8f7f5] p-6 border border-black/[0.06] flex items-start gap-4 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-[#6b191b]/[0.08] text-[#6b191b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-[#1a1c20] font-medium leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 3. Target Applications & Industries ── */}
      {partner.applications && partner.applications.length > 0 && (
        <Section tone="grey">
          <Container>
            <SectionHeading
              eyebrow="Proven Deployments"
              title="Target Industry Applications"
              description="Where these systems deliver measurable measurement fidelity and operational safety in the GCC."
            />

            <CardGrid max={3} className="mt-10">
              {partner.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white p-6 border border-black/[0.06] shadow-[0_10px_20px_rgba(0,0,0,0.04)] flex items-center gap-3.5"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6b191b] shrink-0" />
                  <span className="text-[14px] text-[#1a1c20] font-semibold">
                    {app}
                  </span>
                </div>
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {/* ── 4. CTA Section ── */}
      <CTASection
        title={`Procure ${partner.name} Equipment with Local Kuwait & UAE Support`}
        subtitle="Direct OEM warranties, local field commissioning, spare parts inventory, and engineering service agreements."
        primaryCta={{ label: "Request Technical Assistance", href: "/contacts/" }}
        secondaryCta={{ label: "View All Partners", href: "/partners/" }}
      />
    </>
  );
}
