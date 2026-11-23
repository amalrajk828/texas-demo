import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
  CardGrid,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import PartnersMarquee from "@/components/partners/PartnersMarquee";
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

const STATS = [
  { value: "15+", label: "Global OEM Partners" },
  { value: "5+", label: "Countries Represented" },
  { value: "100%", label: "Genuine OEM Factory Backed" },
  { value: "24/7", label: "Certified Field Support" },
];

export default function PartnersPage() {
  return (
    <div style={{ "--eyebrow-color": "#8a302f" } as React.CSSProperties}>
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

      {/* ── 1. Page Hero (matching /clients/) ── */}
      <PageHero
        title="Global OEM Partner Network"
        subtitle="Direct authorized integration and distribution agreements with tier-1 instrumentation manufacturers from Switzerland, Germany, Japan, France, and the United States."
        category="Alliances & Distribution"
        badge="Authorized Partnerships"
        stats={STATS}
      />

      {/* ── 2. Partners Marquee (matching /clients/ marquee bar) ── */}
      <div className="py-6 border-b border-black/[0.06] bg-white overflow-hidden">
        <PartnersMarquee partners={ALL_PARTNERS} />
      </div>

      {/* ── 3. Partner Card Grid (matching /clients/ 6-col grid) ── */}
      <Section id="partner-grid" tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Authorized Manufacturers"
            title="World-Class Engineering Alliances"
            description="We represent the world's leading flow measurement, process automation, and analytical instrumentation manufacturers across Kuwait, UAE, and the GCC."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <CardGrid max={6}>
            {ALL_PARTNERS.map((partner) => {
              const isExternal = partner.href?.startsWith("http");
              const partnerHref = partner.href || `/partners/${partner.slug}/`;

              const cardContent = (
                <div className="relative group rounded-[20px] bg-white p-5 sm:p-6 flex flex-col items-center justify-center text-center h-full min-h-[175px] flex-1 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full h-[60px] max-w-[140px] flex items-center justify-center mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                      unoptimized
                    />
                  </div>
                  <span className="font-heading text-[12px] sm:text-[12.5px] font-bold text-[#1a1a1a] line-clamp-2 leading-snug group-hover:text-[#8a302f] transition-colors mt-auto min-h-[calc(2*1.3em)] text-balance">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#6b191b] font-semibold mt-1 tracking-wider">
                    {partner.country} · {partner.product}
                  </span>
                  {isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5 text-black/30 group-hover:text-[#8a302f] absolute top-3 right-3 transition-colors" />
                  ) : null}
                </div>
              );

              return isExternal ? (
                <a
                  key={partner.slug}
                  href={partnerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] rounded-[20px]"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={partner.slug}
                  href={partnerHref}
                  className="flex flex-col h-full flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] rounded-[20px]"
                >
                  {cardContent}
                </Link>
              );
            })}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 4. Frequently Asked Questions (matching /clients/ FAQ) ── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Partnership FAQ"
            title="Questions About OEM Distribution & Warranties"
            description="Details on factory warranty coverage, original manufacturer certificates of origin, and certified technical support."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={partnersFaq} />
          </div>
        </Container>
      </Section>

      {/* ── 5. CTA Section (matching /clients/ CTA) ── */}
      <CTASection
        variant="white"
        eyebrow="Authorized Representation"
        title="Looking for Factory Direct Pricing & Support?"
        description="As authorized regional representatives, Texas Technical Services offers direct factory warranty protection, spare parts, and certified commissioning."
        primaryCta={{ label: "Request Partnership Quote", href: "/contacts/" }}
        secondaryCta={{ label: "View Services", href: "/services/" }}
      />
    </div>
  );
}
