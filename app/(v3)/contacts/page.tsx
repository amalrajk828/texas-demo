import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ContactPageJsonLd } from "@/components/schema/ContactPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import V3ContactPage from "@/components/contacts/V3ContactPage";
import { contactsFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Contact Us — Kuwait & Dubai Engineering Offices",
  description:
    "Contact Texas Technical Services in Kuwait and Dubai for flow measurement, industrial automation, and inspection services across the GCC.",
  alternates: { canonical: "/contacts/" },
  openGraph: {
    title: "Contact Us | Texas Technical Services",
    description:
      "Reach out to Texas Technical Services in Kuwait and Dubai. Flow measurement, industrial automation, and inspection solutions for the GCC.",
    url: "/contacts/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Texas Technical Services",
    description:
      "Contact Texas Technical Services in Kuwait and Dubai for industrial solutions across the GCC.",
    images: ["/og-default.png"],
  },
  keywords: [
    "contact Texas Technical Services",
    "industrial automation company Kuwait contact",
    "flow measurement company Kuwait phone number",
    "PLC SCADA integrator Dubai contact",
    "inspection testing company Kuwait contact",
    "TTS Kuwait phone email",
    "industrial services Fahaheel Kuwait",
    "automation company Deira Dubai",
    "oil and gas service company contact GCC",
  ],
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contacts/" },
        ]}
      />
      <ContactPageJsonLd
        url="/contacts/"
        telephone={["+96566347267", "+971569553747", "+971567793973"]}
        email="sales@texastechserv.com"
        addresses={[
          {
            streetAddress:
              "Munira Tower Office No. 30, 9th Floor, Building No.6702, Block 7, Makkah Street",
            addressLocality: "Fahaheel",
            addressCountry: "KW",
          },
          {
            streetAddress: "Deira",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        ]}
      />
      <SpeakableJsonLd headline="Contact Texas Technical Services — Kuwait & Dubai" />
      <FaqPageJsonLd items={contactsFaq} />

      {/* ── 1. Hero ── */}
      <PageHero
        title="Contact Our Engineering Teams"
        subtitle="Direct technical access to our custody transfer metering, PLC SCADA integration, and non-destructive testing specialists in Kuwait and Dubai."
        category="Get in Touch"
        badgeText="24/7 Support Available"
        primaryCta={{ label: "Send Message", href: "#inquiry-form" }}
        secondaryCta={{ label: "View Office Locations", href: "#offices" }}
      />

      {/* ── 2. Contact Form & Office Locations ── */}
      <Section id="inquiry-form" tone="light">
        <Container>
          <V3ContactPage />
        </Container>
      </Section>

      {/* ── 3. Frequently Asked Questions ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Inquiry FAQ"
            title="Common Questions About Contacting Us"
            description="Find rapid answers regarding consultation schedules, emergency calibration support, and regional project tenders."
          />
          <ServiceFaqAccordion items={contactsFaq} />
        </Container>
      </Section>

      {/* ── 4. CTA Banner ── */}
      <CTASection
        title="Need Immediate Field Assistance?"
        subtitle="Our on-call instrumentation and NDT technicians are ready for urgent deployments across Kuwait and UAE industrial sites."
        primaryCta={{ label: "Call Kuwait Office", href: "tel:+96566347267" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services/" }}
      />
    </>
  );
}
