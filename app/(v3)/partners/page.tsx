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
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { partnersFaq } from "@/lib/pageFaqData";
import { ALL_PARTNERS } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Global Partner Network — Authorized OEM Alliances",
  description:
    "Texas Technical Services Co. is the authorized partner and distributor for 15+ world-class OEMs in Kuwait, UAE, and the GCC — covering flow measurement, industrial automation, analyzers, sensors, and SCADA.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Global Partner Network | Texas Technical Services",
    description:
      "15+ authorized partnerships and dealerships — Endress+Hauser, SICK, Faure Herman, KEM Küppers, HMS Networks, NOVUS, OMNI, and more.",
    url: "/partners/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Partner Network | Texas Technical Services",
    description:
      "15+ authorized partnerships — Endress+Hauser, SICK, Faure Herman, KEM Küppers, HMS Networks, NOVUS, OMNI, and more OEMs across Kuwait and the GCC.",
    images: ["/og-default.png"],
  },
  keywords: [
    "authorized partners Kuwait",
    "industrial OEM distributor Kuwait",
    "Endress Hauser distributor Kuwait",
    "Faure Herman distributor Kuwait",
    "KEM Kuppers distributor",
    "HMS Networks Kuwait",
    "SICK sensors Kuwait",
    "OMNI flow computer Kuwait",
    "global network industrial automation",
    "Texas Technical Services partners",
  ],
};

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Global Network", href: "/partners/" },
        ]}
      />
      <SpeakableJsonLd headline="Global Partner Network | 15+ Authorized Partners & Vendors" />
      <ServiceJsonLd
        name="Global Network — Authorized Partnerships & Distribution"
        description="Texas Technical Services is the authorized partner and distributor for 15+ world-class OEMs across Kuwait, UAE, and the GCC."
        url="/partners/"
        serviceType="OEM Partnership & Distribution"
        areaServed={[
          "Kuwait",
          "United Arab Emirates",
          "Saudi Arabia",
          "Bahrain",
          "Qatar",
          "Oman",
        ]}
      />
      <FaqPageJsonLd items={partnersFaq} />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Global OEM Partner Network"
        subtitle="Direct authorized integration and distribution agreements with tier-1 instrumentation manufacturers from Switzerland, Germany, Japan, France, and the United States."
        category="Alliances & Distribution"
        badgeText={`${ALL_PARTNERS.length} Global Technology Partners`}
        primaryCta={{ label: "Explore Partners", href: "#partner-grid" }}
        secondaryCta={{ label: "Contact Engineering Team", href: "/contacts/" }}
      />

      {/* ── 2. Partners Logo Grid (ImageCard variant="logo") ── */}
      <Section id="partner-grid" tone="grey">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[12px] font-mono uppercase tracking-wider text-[#6b191b] font-bold block mb-1">
                Authorized Manufacturers
              </span>
              <h2 className="font-heading text-[28px] sm:text-[34px] font-bold text-[#1a1c20] leading-tight">
                World-Class Engineering Alliances
              </h2>
            </div>
            <span className="text-[#6b7280] text-[13px] font-mono font-medium">
              Certified Systems Integration
            </span>
          </div>

          <CardGrid max={4}>
            {ALL_PARTNERS.map((partner) => (
              <ImageCard
                key={partner.slug}
                variant="logo"
                tone="grey"
                href={`/partners/${partner.slug}/`}
                imageSrc={partner.logo}
                title={partner.name}
                subtitle={partner.description}
                meta={`${partner.country} · ${partner.relationship}`}
                tag={partner.product}
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 3. Frequently Asked Questions ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Partnership FAQ"
            title="Questions About OEM Distribution & Warranties"
            description="Details on factory warranty coverage, original manufacturer certificates of origin, and certified technical support."
          />
          <ServiceFaqAccordion items={partnersFaq} />
        </Container>
      </Section>

      {/* ── 4. CTA Section ── */}
      <CTASection
        title="Looking for Factory Direct Pricing & Support?"
        subtitle="As authorized regional representatives, Texas Technical Services offers direct factory warranty protection, spare parts, and certified commissioning."
        primaryCta={{ label: "Request Partnership Quote", href: "/contacts/" }}
        secondaryCta={{ label: "View Services", href: "/services/" }}
      />
    </>
  );
}
