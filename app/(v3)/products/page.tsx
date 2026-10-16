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
import { productsListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
  description:
    "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
  alternates: { canonical: "/products/" },
  openGraph: {
    title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
    description:
      "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
    url: "/products/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
    description:
      "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
    images: ["/og-default.png"],
  },
  keywords: [
    "flow meters Kuwait",
    "industrial analyzers Kuwait",
    "PLC and SCADA products",
    "VFD and AC servo drives Kuwait",
    "HMI panels Kuwait",
    "ICONICS SCADA Kuwait",
    "custody transfer metering skid",
    "industrial sensors and instrumentation",
    "process automation products GCC",
    "Mitsubishi electric products Kuwait",
  ],
};

const CATEGORIES = [
  {
    title: "Custody Metering Solutions",
    description: "High-accuracy fiscal metering packages for custody transfer of oil, gas, and LNG.",
    href: "/products/custody-metering-solutions/",
    image: "/flow_metering_skid.jpg",
    meta: "Fiscal Metering Skids",
    tag: "Custody Transfer",
  },
  {
    title: "Flow Meters",
    description: "Precision flow measurement instruments for liquids, gases, and flare applications.",
    href: "/products/flow-meters/",
    image: "/images/services/flow-measurement.jpg",
    meta: "Ultrasonic · Coriolis · Turbine",
    tag: "Flow Measurement",
  },
  {
    title: "Analyzers & CEMS",
    description: "Industrial process analyzers for continuous emissions monitoring, dust, and gas analysis.",
    href: "/products/analyzers/",
    image: "/cems.webp",
    meta: "CEMS · Gas · Dust",
    tag: "Environmental Compliance",
  },
  {
    title: "Control Room Interior & Console",
    description: "Ergonomic control room furniture and modular console systems for 24/7 mission-critical operations.",
    href: "/products/control-room-interior-and-console/",
    image: "/images/control_room_interior_and_console/xlat/2.jpg",
    meta: "ISO 11064 Ergonomics",
    tag: "Control Room",
  },
  {
    title: "Industrial Automation Systems",
    description: "End-to-end automation solutions, safety instrumented systems (SIS), and plant control cabinets.",
    href: "/products/industrial-automation/",
    image: "/images/services/automation.jpg",
    meta: "Turnkey DCS · SIS · Panels",
    tag: "Automation",
  },
  {
    title: "Field Instruments",
    description: "Pressure, differential pressure, temperature, level, and process transmitters for hazardous areas.",
    href: "/products/field-instruments/",
    image: "/images/field_instruments/pressure_sensors/1.png",
    meta: "Pressure · Temp · Level",
    tag: "Instrumentation",
  },
  {
    title: "Industrial Sensors",
    description: "SICK sensors for optical detection, safety light curtains, distance measurement, and identification.",
    href: "/products/sensors/",
    image: "/images/sensors/Photoelectric Sensors.png",
    meta: "SICK Authorized",
    tag: "Sensors",
  },
  {
    title: "PLC Systems (Mitsubishi & Rockwell)",
    description: "Mitsubishi MELSEC iQ-R & iQ-F programmable automation controllers for ultra-fast, reliable machine control.",
    href: "/products/plc/",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    meta: "PAC / PLC Controllers",
    tag: "Control Hardware",
  },
  {
    title: "ICONICS SCADA & IoT",
    description: "GENESIS64 next-generation supervisory control and telemetry software for industrial big data.",
    href: "/products/iconics/",
    image: "/images/control_room_interior_and_console/xlat_cyber/1.jpg",
    meta: "SCADA Software",
    tag: "Supervisory Control",
  },
  {
    title: "GOT (Graphic Operator Panels)",
    description: "Mitsubishi GOT2000 series high-visibility industrial touch screen operator interfaces.",
    href: "/products/got/",
    image: "/images/got/GOT2000-Series.png",
    meta: "Touch HMIs",
    tag: "HMI Interfaces",
  },
  {
    title: "Frequency Inverters (VFD)",
    description: "Variable frequency drives for energy-saving motor speed regulation and high torque control.",
    href: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-A800.webp",
    meta: "Motor Inverters",
    tag: "Drives & Motors",
  },
  {
    title: "AC Servos & Motion",
    description: "Mitsubishi MelSERVO AC servo amplifiers and rotary servomotors for ultra-precise motion control.",
    href: "/products/acservos/",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    meta: "Precision Motion",
    tag: "Motion Control",
  },
];

const STATS = [
  { value: "12", label: "Product Categories" },
  { value: "15+", label: "OEM Brands" },
  { value: "100%", label: "Genuine Hardware" },
  { value: "Full", label: "Warranty & Support" },
];

export default function ProductsPage() {
  const faqItems = productsListingFaq;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products/" },
        ]}
      />
      <SpeakableJsonLd headline="Flow Meters, Analyzers, PLCs & Industrial Automation Products" />

      {/* ── 1. Page Hero ── */}
      <PageHero
        title="Industrial Automation & Measurement Products"
        subtitle="Genuine OEM instrumentation, custody transfer flow meters, analytical CEMS systems, and Mitsubishi Electric control automation hardware for Middle East industrial plants."
        badge="Product Catalog"
        stats={STATS}
      />

      {/* ── 2. Product Categories Grid ── */}
      <Section tone="grey">
        <Container>
          <SectionHeading
            eyebrow="Equipment Spectrum"
            title="Explore 12 Specialized Product Lines"
            description="From high-accuracy fiscal flow skids to PLC racks, VFD inverters, and explosion-proof field instrumentation."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <CardGrid max={4}>
            {CATEGORIES.map((cat) => (
              <ImageCard
                key={cat.title}
                href={cat.href}
                imageSrc={cat.image}
                imageAlt={cat.title}
                title={cat.title}
                subtitle={cat.description}
                meta={cat.meta}
                tag={cat.tag}
                tone="grey"
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* ── 3. Technical FAQ ── */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Equipment FAQ"
            title="Frequently Asked Questions on Products"
            description="Direct answers regarding lead times, hazardous area certifications, and OEM warranty coverage."
            align="center"
          />
          <div className="max-w-[840px] mx-auto mt-10">
            <ServiceFaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <FaqPageJsonLd items={productsListingFaq} />

      {/* ── 4. CTA Section ── */}
      <CTASection
        variant="white"
        eyebrow="Catalog & Sizing Quotations"
        title="Request Official Datasheets & Commercial Pricing"
        description="Our product sales engineers provide competitive pricing, OEM certificates of conformity, and technical datasheets within 24 hours."
        primaryCta={{ label: "Request Product Quotation", href: "/contacts/" }}
        secondaryCta={{ label: "Contact Sales Desk", href: "/contacts/" }}
      />
    </>
  );
}
