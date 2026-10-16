import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import PortfolioListingClient from "@/components/v3/portfolio/PortfolioListingClient";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Product Portfolio — Flow Meters, Analyzers & Automation",
  description:
    "Explore our complete lineup of industrial automation hardware, software, and sensors from SICK, Mitsubishi Electric, Faure Herman, and ICONICS.",
  keywords: [
    "industrial products",
    "automation hardware",
    "PLC",
    "sensors",
    "flow meters",
    "frequency inverters",
    "AC servos",
    "HMI",
    "SCADA",
  ],
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    title: "Product Portfolio | Texas Technical Services",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
    url: "/portfolio/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Portfolio | Texas Technical Services",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
    images: ["/og-default.png"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio/" },
        ]}
      />
      <FaqPageJsonLd items={productsListingFaq} />
      <SpeakableJsonLd headline="Product Portfolio — Industrial Automation Hardware & Sensors" />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Comprehensive Equipment Portfolio"
        subtitle="Explore our certified lineup of fiscal custody flow meters, continuous emissions monitoring systems, Mitsubishi PLCs, and intelligent industrial sensors."
        category="Hardware & Instrumentation"
        badgeText="Authorized OEM Integration"
        primaryCta={{ label: "Browse Catalog", href: "#catalog" }}
        secondaryCta={{ label: "Contact Engineering Team", href: "/contacts/" }}
      />

      {/* ── 2. Filterable Portfolio Catalog ── */}
      <Section id="catalog" tone="grey">
        <Container>
          <PortfolioListingClient />
        </Container>
      </Section>

      {/* ── 3. Technical FAQ ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Portfolio FAQ"
            title="Procurement & Technical Support"
            description="Frequently asked questions concerning hardware warranties, spare parts availability, and calibration certificates."
          />
          <ServiceFaqAccordion items={productsListingFaq} />
        </Container>
      </Section>

      {/* ── 4. CTA Section ── */}
      <CTASection
        title="Need Engineering Support for Sizing or Selection?"
        subtitle="Our technical sales engineers provide comprehensive sizing calculations, flow rangeability curves, and formal commercial quotes."
        primaryCta={{ label: "Request Technical Assistance", href: "/contacts/" }}
        secondaryCta={{ label: "View Industries", href: "/industries/" }}
      />
    </>
  );
}
