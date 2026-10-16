import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { servicesListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Industrial Services in Kuwait & UAE",
  description:
    "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC. ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
    url: "/services/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
    images: ["/og-default.png"],
  },
  keywords: [
    "industrial automation services Kuwait",
    "PLC SCADA integration Kuwait",
    "flow measurement services Kuwait",
    "inspection and testing Kuwait",
    "automation company Kuwait",
    "process control solutions GCC",
    "oil and gas service company Kuwait",
    "industrial service provider Ahmadi",
    "metering and automation Kuwait",
    "engineering services Kuwait",
    "industrial automation companies GCC",
    "metering skids",
    "flow meter calibration",
    "Allen Bradley system integrators",
    "NDT inspection",
    "predictive maintenance",
    "gas detection system",
    "condition monitoring",
  ],
};

const STATS = [
  { value: "60+", label: "Engineering Services" },
  { value: "18+", label: "Years Experience" },
  { value: "200+", label: "Completed Skids" },
  { value: "ISO", label: "Certified Operations" },
];

const CERTS = [
  { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
  { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
  { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
  { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
  { src: "/about/cert-accurate.png", alt: "Accurate Certified" },
];

export default function ServicesPage() {
  const faqItems = servicesListingFaq;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
        ]}
      />
      <SpeakableJsonLd headline="Our Services — PLC SCADA, Flow Measurement & Inspection" />
      <ServiceJsonLd
        name="Flow Measurement & Control System Solutions"
        description="Metering control system upgrades, maintenance, and validation for custody metering systems — precision and compliance."
        url="/service/flow-measurement-solutions/"
        serviceType="Flow Measurement Solutions"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ServiceJsonLd
        name="Inspection & Testing"
        description="Comprehensive inspection and testing — equipment inspections, NDT, functional testing, and certification to industry standards."
        url="/service/inspection-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ServiceJsonLd
        name="Industrial Process Automation Solutions"
        description="Total industrial automation — PLC, SCADA, HMI, custom software for oil & gas and industrial sectors."
        url="/service/industrial-automation/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Industrial Engineering Services in Kuwait & UAE"
        subtitle="Turnkey flow measurement skids, certified NDT inspections, and advanced PLC/SCADA industrial process automation for energy and heavy manufacturing sectors across the GCC."
        badge="Full Engineering Spectrum"
        stats={STATS}
      />

      {/* ── 2. ISO Certification Trust Strip ── */}
      <div className="py-6 border-y border-black/[0.06] bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 overflow-x-auto py-1">
              {CERTS.map((cert) => (
                <Link
                  key={cert.src}
                  href="/certifications/"
                  className="relative w-14 h-14 shrink-0 transition-transform duration-200 hover:scale-105"
                  aria-label={cert.alt}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </Link>
              ))}
            </div>
            <div className="text-center sm:text-right">
              <p className="text-[13px] font-bold text-[#1a1c20]">
                ISO 9001 · ISO 14001 · ISO 45001 Certified
              </p>
              <p className="text-[12px] text-[#6b7280]">
                UASL Accredited & International Accurate Standards
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── 3. Services Catalog Grid ── */}
      <ServicesAllGrid />

      {/* ── 4. Frequently Asked Questions ── */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Technical FAQ"
            title="Questions About Our Engineering Services"
            description="Find direct answers from our engineering leads on compliance, deployment timelines, and project integration."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <FaqPageJsonLd items={servicesListingFaq} />

      {/* ── 5. CTA Section ── */}
      <CTASection
        variant="white"
        eyebrow="Tender & Proposal Inquiries"
        title="Ready to Discuss Your Project Specifications?"
        description="Speak directly with our engineering department in Kuwait and Dubai for technical sizing, commercial proposals, and tender specifications."
        primaryCta={{ label: "Contact Engineering Team", href: "/contacts/" }}
        secondaryCta={{ label: "Request RFQ Quote", href: "/contacts/" }}
      />
    </>
  );
}
