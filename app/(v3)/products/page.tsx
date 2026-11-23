import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Container,
  SectionHeading,
  CTASection,
} from "@/components/v3";
import ServiceFaqAccordion from "@/components/v3/service/ServiceFaqAccordion";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";
import CategoryMountainGrid from "@/components/v3/product/CategoryMountainGrid";

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
    label: "Custody Transfer",
    statement: "High&#8209;accuracy <b>fiscal metering packages</b> for custody transfer of oil, gas, and LNG.",
    href: "/products/custody-metering-solutions/",
    image: "/flow_metering_skid.jpg",
    meta: "Fiscal Metering Skids",
  },
  {
    title: "Flow Meters",
    label: "Flow Measurement",
    statement: "<b>Precision flow measurement</b> instruments for liquids, gases, and flare applications.",
    href: "/products/flow-meters/",
    image: "/images/services/flow-measurement.jpg",
    meta: "Ultrasonic · Coriolis · Turbine",
  },
  {
    title: "Analyzers & CEMS",
    label: "Environmental Compliance",
    statement: "<b>Continuous emissions monitoring</b> systems, dust detection, and process gas analysis.",
    href: "/products/analyzers/",
    image: "/cems.webp",
    meta: "CEMS · Gas · Dust",
  },
  {
    title: "Control Room Interior & Console",
    label: "Control Room",
    statement: "<b>Ergonomic modular console</b> systems built for 24/7 mission&#8209;critical control centers.",
    href: "/products/control-room-interior-and-console/",
    image: "/images/control_room_interior_and_console/xlat/2.jpg",
    meta: "ISO 11064 Ergonomics",
  },
  {
    title: "Industrial Automation Systems",
    label: "Industrial Automation",
    statement: "<b>Turnkey DCS, safety instrumented</b> systems, and plant control cabinets.",
    href: "/products/industrial-automation/",
    image: "/images/services/automation.jpg",
    meta: "Turnkey DCS · SIS · Panels",
  },
  {
    title: "Field Instruments",
    label: "Field Instrumentation",
    statement: "<b>Pressure, temperature, and level</b> transmitters certified for hazardous environments.",
    href: "/products/field-instruments/",
    image: "/images/field_instruments/pressure_sensors/1.png",
    meta: "Pressure · Temp · Level",
  },
  {
    title: "Industrial Sensors",
    label: "Optical & Safety Sensors",
    statement: "<b>SICK optical detection</b>, safety light curtains, and industrial distance measurement.",
    href: "/products/sensors/",
    image: "/images/sensors/Photoelectric Sensors.png",
    meta: "SICK Authorized",
  },
  {
    title: "PLC Systems (Mitsubishi & Rockwell)",
    label: "PAC / PLC Controllers",
    statement: "<b>Mitsubishi MELSEC controllers</b> engineered for ultra&#8209;fast, reliable machine automation.",
    href: "/products/plc/",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    meta: "PAC / PLC Controllers",
  },
  {
    title: "ICONICS SCADA & IoT",
    label: "SCADA & Telemetry",
    statement: "<b>GENESIS64 supervisory software</b> for enterprise control and industrial big data.",
    href: "/products/iconics/",
    image: "/images/control_room_interior_and_console/xlat_cyber/1.jpg",
    meta: "SCADA Software",
  },
  {
    title: "GOT (Graphic Operator Panels)",
    label: "Industrial Touch HMIs",
    statement: "<b>Mitsubishi GOT2000 touch</b> screen interfaces with high&#8209;visibility operation.",
    href: "/products/got/",
    image: "/images/got/GOT2000-Series.png",
    meta: "Touch HMIs",
  },
  {
    title: "Frequency Inverters (VFD)",
    label: "Drives & Motor Control",
    statement: "<b>Variable frequency drives</b> for energy&#8209;saving speed regulation and torque control.",
    href: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-A800.webp",
    meta: "Motor Inverters",
  },
  {
    title: "AC Servos & Motion",
    label: "Precision Motion Control",
    statement: "<b>Mitsubishi MELSERVO drives</b> and servomotors for ultra&#8209;precise industrial positioning.",
    href: "/products/acservos/",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    meta: "Precision Motion",
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
        flatBg={true}
      />

      {/* ── 2. Product Categories Grid ── */}
      <Section tone="grey" className="!bg-[#ece9e5] !pt-8">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[12px] font-mono uppercase tracking-wider text-[#8b1e1e] font-bold block mb-1">
                Equipment Spectrum
              </span>
              <h2 className="font-heading text-[28px] sm:text-[40px] font-bold text-[#171717] leading-tight">
                Explore 12 Specialized Product Lines
              </h2>
            </div>
            <span className="text-[#7a7773] text-[13px] font-mono font-medium">
              12 Product Categories Cataloged
            </span>
          </div>

          <CategoryMountainGrid categories={CATEGORIES} />
        </Container>
      </Section>

      {/* ── 3. Technical FAQ ── */}
      <Section tone="grey" className="!bg-[#ece9e5] !mt-0 !pt-8">
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
