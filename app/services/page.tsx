import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { servicesListingFaq } from "@/lib/pageFaqData";
export const metadata: Metadata = {
  title: "Industrial Services in Kuwait & UAE",
  description: "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }]} />
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
      <ServicesHero />

      {/* Certification Trust Strip */}
      <section className="py-8 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-5">
              {[
                { src: "/about/cert-iso9001.png", alt: "ISO 9001:2015" },
                { src: "/about/cert-iso14001.png", alt: "ISO 14001:2015" },
                { src: "/about/cert-iso45001.png", alt: "ISO 45001:2018" },
                { src: "/about/cert-uasl.png", alt: "UASL Accredited" },
                { src: "/about/cert-accurate.png", alt: "Accurate Certified" },
              ].map((cert) => (
                <Link key={cert.src} href="/certifications/" className="relative w-16 h-16 block">
                  <Image src={cert.src} alt={cert.alt} fill className="object-contain" sizes="64px" />
                </Link>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[13px] font-semibold text-[#0B0D26]">ISO Certified Services</p>
              <p className="text-[12px] text-gray-400 mt-0.5">Quality · Environmental · Safety Management</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesAllGrid />
      <FaqPageJsonLd items={servicesListingFaq} />
      <PageFaqSection items={servicesListingFaq} title="Questions About" highlight="Our Services" />
      <ServicesCtaBanner />
    </>
  );
}
