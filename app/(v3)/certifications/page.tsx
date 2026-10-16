import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  CardGrid,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import { certificationsFaq } from "@/lib/pageFaqData";
import { ShieldCheck, Award, CheckCircle2, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications — ISO 9001, 14001, 45001, Accurate Accredited",
  description:
    "Texas Technical Services holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications — demonstrating our commitment to quality, environmental responsibility, and workplace safety across Kuwait and the GCC.",
  alternates: { canonical: "/certifications/" },
  keywords: [
    "ISO 9001 certified company Kuwait",
    "ISO 14001 environmental management Dubai",
    "ISO 45001 occupational safety UAE",
    "certified automation company Kuwait",
    "quality management system ISO certification",
    "Texas Technical Services certifications",
    "UASL accredited certification Kuwait",
    "ISO certified industrial company GCC",
    "International Accurate certification",
  ],
  openGraph: {
    title: "Certifications | ISO 9001, ISO 14001, ISO 45001, Accurate | TTS",
    description:
      "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and International Accurate certifications — quality, environmental, safety, and precision management systems.",
    url: "/certifications/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | ISO 9001, ISO 14001, ISO 45001, Accurate | TTS",
    description:
      "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and International Accurate certifications — quality, environmental, safety, and precision management systems.",
    images: ["/og-default.png"],
  },
};

const certifications = [
  {
    src: "/about/cert-iso9001.png",
    alt: "ISO 9001:2015 Quality Management System Certification",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Ensures consistent quality in products and engineering services through systematic process control, continuous improvement, and customer satisfaction focus.",
  },
  {
    src: "/about/cert-iso14001.png",
    alt: "ISO 14001:2015 Environmental Management System Certification",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    description:
      "Demonstrates our commitment to minimizing environmental impact through responsible waste management, resource efficiency, and full regulatory compliance.",
  },
  {
    src: "/about/cert-iso45001.png",
    alt: "ISO 45001:2018 Occupational Health & Safety Certification",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    description:
      "Protects workforce wellbeing through hazard identification, proactive risk assessment, and systematic safety management across hazardous operational sites.",
  },
  {
    src: "/about/cert-uasl.png",
    alt: "UASL Accredited Certification Body",
    title: "UASL Accredited",
    subtitle: "Independent Verification",
    description:
      "All certifications independently audited and verified by a UASL-accredited certification body, ensuring globally recognized accreditation validity.",
  },
  {
    src: "/about/cert-accurate.png",
    alt: "International Accurate Certification",
    title: "Accurate Certified",
    subtitle: "International Accreditation",
    description:
      "Internationally recognized accreditation validating our adherence to global standards in technical calibration, inspection repeatability, and measurement precision.",
  },
];

const pillars = [
  {
    icon: Award,
    title: "Rigorous QA/QC Procedures",
    description:
      "Every skid fabrication, calibration loop, and software deployment undergoes formal factory acceptance testing (FAT) and site verification.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Compromise HSE",
    description:
      "Integrated health, safety, and environmental protocols designed for high-risk offshore platforms, toxic sour gas zones, and live petrochemical plants.",
  },
  {
    icon: FileCheck,
    title: "Vendor Prequalification",
    description:
      "Audited credentials recognized by Kuwait Oil Company (KOC), KNPC, Chevron, ADNOC, and international tier-1 EPC contractors.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Certifications", href: "/certifications/" },
        ]}
      />
      <SpeakableJsonLd headline="Certifications — ISO 9001, ISO 14001, ISO 45001, Accurate | Texas Technical Services" />
      <FaqPageJsonLd items={certificationsFaq} />

      {/* ── 1. Hero ── */}
      <PageHero
        title="Quality & Compliance Certifications"
        subtitle="Triple ISO-accredited management systems certifying our rigorous standards in fiscal flow measurement, industrial automation, and NDT inspection across the Arabian Gulf."
        category="Accreditations"
        badgeText="ISO 9001 · 14001 · 45001"
        primaryCta={{ label: "View Certificates", href: "#credentials" }}
        secondaryCta={{ label: "Contact Quality Team", href: "/contacts/" }}
      />

      {/* ── 2. Certificates Grid ── */}
      <Section id="credentials" tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Accredited Standards"
            title="Recognized International Credentials"
            description="Inspect our active certifications, audited regularly by accredited independent bodies to guarantee compliance with international engineering benchmarks."
          />
          <CertificationsGrid items={certifications} />
        </Container>
      </Section>

      {/* ── 3. Quality Pillars ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Engineering Integrity"
            title="How We Maintain Compliance on Every Project"
            description="Our integrated management system governs every phase of engineering design, procurement, assembly, and field commissioning."
          />
          <CardGrid max={3} className="mt-10">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-white p-7 sm:p-8 border border-black/[0.06] shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-[#6b191b]/[0.08] text-[#6b191b] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-[#1a1c20] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] text-[#4b5563] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 4. FAQ ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Certification FAQ"
            title="Frequently Asked Questions"
            description="Learn how our certifications ensure regulatory compliance and risk mitigation for your plant operations."
          />
          <ServiceFaqAccordion items={certificationsFaq} />
        </Container>
      </Section>

      {/* ── 5. CTA ── */}
      <CTASection
        title="Require Tender Pre-Qualification Documents?"
        subtitle="Our quality compliance department provides certified copies of our ISO credentials, auditor reports, and safety manuals upon request."
        primaryCta={{ label: "Request Quality Package", href: "/contacts/" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services/" }}
      />
    </>
  );
}
