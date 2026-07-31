import type { Metadata } from "next";
import NDTHero from "@/components/service/non-destructive-testing-ndt/NDTHero";
import NDTSubServices from "@/components/service/non-destructive-testing-ndt/NDTSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";

export const metadata: Metadata = {
  title: "Non-Destructive Testing (NDT) — UT, RT, MT, PT, ET",
  description:
    "Full-range NDT inspection services — VI, PT, MT, RT, and UT with qualified technicians and modern equipment in Kuwait and Dubai.",
  alternates: { canonical: "/service/non-destructive-testing-ndt/" },
  openGraph: {
    title: "Non-Destructive Testing (NDT) — UT, RT, MT, PT, ET",
    description: "VI, PT, MT, RT, and UT non-destructive testing services with qualified technicians. Kuwait & Dubai.",
    url: "/service/non-destructive-testing-ndt/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Non Destructive Testing — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Destructive Testing (NDT) — UT, RT, MT, PT, ET",
    description: "VI, PT, MT, RT, UT NDT services. Qualified technicians. Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: ["NDT Kuwait", "non destructive testing Kuwait", "ultrasonic testing Kuwait", "radiographic testing Kuwait", "magnetic particle inspection Kuwait", "dye penetrant testing Kuwait", "visual inspection Kuwait", "Texas Technical Services NDT", "3rd party inspection Kuwait", "quality inspection service", "phased array ultrasonic testing GCC"],
};

export default function NDTPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Non Destructive Testing (NDT)", href: "/service/non-destructive-testing-ndt/" },
]} />
<ServiceJsonLd
  name="Non Destructive Testing (NDT)"
  description="Full range of NDT inspection services with qualified technicians and modern equipment — Visual Inspection (VI), Liquid/Dye Penetrant (PT), Magnetic Particle (MT), Radiographic Testing (RT), and Ultrasonic Testing (UT) in Kuwait and Dubai."
  url="/service/non-destructive-testing-ndt/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <NDTHero />
      <NDTSubServices />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["non-destructive-testing-ndt"] && serviceCrossLinks["non-destructive-testing-ndt"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Explore{" "}
              <em className="not-italic text-[#e7212b]">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["non-destructive-testing-ndt"]?.map((link) => (
                <Link
                  key={link.slug}
                  href={`/service/${link.slug}/`}
                  className="group block bg-[#f4f5f8] rounded-2xl p-6 border border-[#e8eaf0] hover:border-[#e7212b]/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors mb-2">
                    {link.label}
                  </h3>
                  <span className="text-[#e7212b] text-sm font-semibold flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Contact section — to be added */}
    
      <FaqPageJsonLd items={serviceFaqData["non-destructive-testing-ndt"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-[#e7212b]">Non Destructive Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["non-destructive-testing-ndt"]?.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg"
              >
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[14px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ItemListJsonLd
        name="NDT Methods"
        items={[
          { name: "Visual Inspection (VI)", url: "/service/visual-inspection-vi/", description: "Surface examination using naked eye or magnifying aids to detect visible defects." },
          { name: "Liquid Penetrant Testing (PT)", url: "/service/liquid-penetrant-dye-penetrant-examination-pt/", description: "Surface crack detection using capillary action of liquid penetrants." },
          { name: "Magnetic Particle Inspection (MT)", url: "/service/magnetic-particle-inspection-mt/", description: "Surface and near-surface defect detection in ferromagnetic materials." },
          { name: "Radiographic Testing (RT)", url: "/service/radiographic-testing-rt/", description: "Internal defect detection using X-rays or gamma rays." },
          { name: "Ultrasonic Testing (UT)", url: "/service/ultrasonic-testing-ut/", description: "Internal defect detection and thickness measurement using high-frequency sound waves." },
          { name: "Eddy Current Testing (ECT)", url: "/service/eddy-current-testing/", description: "Surface and near-surface defect detection using electromagnetic induction." },
          { name: "Phased Array Ultrasonic Testing (PAUT)", url: "/service/phased-array-ultrasonic-testing/", description: "Advanced ultrasonic testing with multi-element probes for improved defect characterization." },
          { name: "Time of Flight Diffraction (TOFD)", url: "/service/time-of-flight-diffraction/", description: "Precise defect sizing using diffraction signals from crack tips." },
        ]}
      />
</>
  );
}
