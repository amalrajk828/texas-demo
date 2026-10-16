import type { Metadata } from "next";
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
import { industriesListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Industries We Serve — Oil & Gas, Power & Petrochemicals",
  description:
    "Flow measurement, automation, and inspection for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
  alternates: { canonical: "/industries/" },
  openGraph: {
    title: "Industries We Serve",
    description:
      "Flow measurement, automation, and inspection solutions for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
    url: "/industries/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve",
    description:
      "Flow measurement, automation, and inspection solutions for oil & gas, refinery, power plant, LNG, petrochemicals, water treatment, cement, and metal & steel.",
    images: ["/og-default.png"],
  },
  keywords: [
    "oil and gas industry solutions Kuwait",
    "refinery automation and metering",
    "power plant instrumentation Kuwait",
    "LNG metering solutions GCC",
    "petrochemical automation solutions",
    "water treatment flow measurement",
    "cement industry automation",
    "metal and steel inspection services",
    "industrial automation for oil and gas",
    "flow measurement for refineries",
  ],
};

const INDUSTRIES = [
  {
    name: "Oil & Gas",
    slug: "oil-gas",
    sub: "Upstream · Midstream · Downstream",
    image: "/oil_and_gas.jpg",
    desc: "Comprehensive solutions tailored to the unique needs of oil and gas operations — from advanced flow metering solutions to precision flow meters, flow computers, and analyzers optimizing operations.",
  },
  {
    name: "Refinery",
    slug: "refinery",
    sub: "Process Control · CEMS",
    image: "/refinery.webp",
    desc: "Cutting-edge offerings for refinery operations including precision flow meters, flow computers, CEMS, and analyzers providing downstream facilities with essential industrial automation.",
  },
  {
    name: "Petrochemicals",
    slug: "petrochemicals",
    sub: "Process Automation · Flow Solutions",
    image: "/petrochemical.webp",
    desc: "State-of-the-art flow metering solutions, precise flow meters, flow computers, and analytical instrumentation catering to complex chemical and polymer production environments.",
  },
  {
    name: "LNG",
    slug: "lng",
    sub: "Custody Transfer · Metering · Safety",
    image: "/lng.jpg",
    desc: "Products designed to enhance LNG plant operations, providing cutting-edge cryogenic flow metering solutions, precision meters, flow computers, and analyzers ensuring safety and measurement accuracy.",
  },
  {
    name: "Power Plant",
    slug: "power-plant",
    sub: "Generation · Emissions · Grid",
    image: "/power_plant.jpg",
    desc: "OEM products tailored for power generation, including CEMS, flow meters, flow computers, analyzers, and industrial process automation systems optimizing performance and emissions.",
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    sub: "Municipal · Industrial",
    image: "/water_treatment.webp",
    desc: "Advanced solutions designed for municipal and industrial water treatment facilities, including CEMS, analyzers, and process automation delivering accurate monitoring and operational efficiency.",
  },
  {
    name: "Cement",
    slug: "cement",
    sub: "Production · Quality · CEMS",
    image: "/cement_industry.jpg",
    desc: "OEM products tailored for the cement industry, encompassing CEMS, analyzers, and process automation systems optimizing emissions monitoring and continuous batch production.",
  },
  {
    name: "Metal & Steel",
    slug: "metal-steel",
    sub: "Monitoring · Safety · Efficiency",
    image: "/metal_and_steel.jpg",
    desc: "Engineered solutions for metal and steel fabrication featuring CEMS, metallurgical testing, and industrial process automation enhancing quality control and safety.",
  },
];

const STATS = [
  { value: "8", label: "Specialized Sectors" },
  { value: "18+", label: "Years in GCC" },
  { value: "200+", label: "Completed Projects" },
  { value: "100%", label: "API / ISO Standards" },
];

export default function IndustriesPage() {
  const faqItems = industriesListingFaq;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries/" },
        ]}
      />
      <SpeakableJsonLd headline="Industries We Serve — Oil & Gas, Power & Petrochemicals" />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Industry Sectors We Serve"
        subtitle="Mission-critical flow measurement, fiscal custody transfer, non-destructive testing, and turnkey industrial automation tailored for heavy processing environments across Kuwait, UAE, and the GCC."
        badge="Sector Expertise"
        stats={STATS}
      />

      {/* ── 2. Industries ImageCard Grid ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Specialized Domains"
            title="Engineered Solutions Across 8 Core Sectors"
            description="Explore our specialized automation, fiscal custody transfer, and quality inspection capabilities built to international industry standards."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <CardGrid max={4}>
            {INDUSTRIES.map((ind) => (
              <ImageCard
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                imageSrc={ind.image}
                imageAlt={ind.name}
                title={ind.name}
                subtitle={ind.desc}
                meta={ind.sub}
                tag="Explore Sector"
                tone="grey"
                elevation="flat"
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 3. Frequently Asked Questions ── */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Sector FAQ"
            title="Questions About Our Industry Solutions"
            description="Direct technical answers regarding regulatory compliance, field deployment, and integration for our focus sectors."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <FaqPageJsonLd items={industriesListingFaq} />

      {/* ── 4. CTA Section ── */}
      <CTASection
        variant="white"
        eyebrow="Sector Engineering Consultation"
        title="Need Technical Sizing for Your Facility?"
        description="Connect with our sector engineering leads to discuss compliance requirements, skid specifications, and custom automation architectures."
        primaryCta={{ label: "Contact Engineering Team", href: "/contacts/" }}
        secondaryCta={{ label: "Request RFQ Quote", href: "/contacts/" }}
      />
    </>
  );
}
