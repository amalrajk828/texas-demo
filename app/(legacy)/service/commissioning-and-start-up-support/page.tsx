import type { Metadata } from "next";
import CommissioningHero from "@/components/service/commissioning-and-start-up-support/CommissioningHero";
import CommissioningContent from "@/components/service/commissioning-and-start-up-support/CommissioningContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";
import { HowToJsonLd } from "@/components/schema/HowToJsonLd";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";

export const metadata: Metadata = {
  title: "Commissioning and Start-up Support",
  description:
    "Industrial automation commissioning and start-up support for PLCs, DCS, SCADA, and safety systems from pre-commissioning to handover in Kuwait and Dubai.",
  alternates: { canonical: "/service/commissioning-and-start-up-support/" },
  openGraph: {
    title: "Commissioning and Start-up Support",
    description: "Automation commissioning, start-up, and maintenance for oil & gas, chemical, and manufacturing. Kuwait & Dubai.",
    url: "/service/commissioning-and-start-up-support/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Commissioning and Start-up Support — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commissioning and Start-up Support",
    description: "Automation commissioning and start-up. Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: ["commissioning Kuwait", "automation commissioning Kuwait", "start-up support Kuwait", "PLC commissioning Kuwait", "SCADA commissioning Kuwait", "industrial commissioning Kuwait", "Texas Technical Services commissioning"],
};

export default function CommissioningPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commissioning and Start-up Support", href: "/service/commissioning-and-start-up-support/" },
]} />
<ServiceJsonLd
  name="Commissioning and Start-up Support"
  description="Industrial process automation commissioning and start-up support — validation and fine-tuning of PLCs, DCS, SCADA, sensors, and safety systems from pre-commissioning through hot start-up and post-commissioning handover in Kuwait and Dubai."
  url="/service/commissioning-and-start-up-support/"
  serviceType="Commissioning"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <CommissioningHero />
      <CommissioningContent />

      <HowToJsonLd
        name="Our Commissioning & Start-up Process"
        description="A step-by-step process for industrial commissioning and start-up support, from factory acceptance testing through operational handover."
        steps={[
          { name: "Factory Acceptance Testing (FAT)", text: "Verify equipment and systems meet design specifications at the manufacturer facility before shipping." },
          { name: "Site Acceptance Testing (SAT)", text: "Confirm installed systems perform correctly on-site under actual operating conditions." },
          { name: "Instrument Loop Checking", text: "Test each instrument signal loop from sensor to control system to verify correct wiring, calibration, and configuration." },
          { name: "Integrated System Testing", text: "Validate that all subsystems work together correctly under simulated process conditions." },
          { name: "Handover and Documentation", text: "Compile as-built drawings, test records, operator manuals, and maintenance schedules for operational handover." },
        ]}
      />

      <ServiceProcessSteps
        title="How We Commission & Start Up Your Systems"
        steps={[
          { name: "Factory Acceptance Testing (FAT)", description: "We verify that all equipment and systems meet design specifications at the manufacturer's facility before shipping, ensuring everything is ready for deployment on-site." },
          { name: "Site Acceptance Testing (SAT)", description: "We confirm that installed systems perform correctly on-site under actual operating conditions, validating real-world functionality." },
          { name: "Instrument Loop Checking", description: "We test each instrument signal loop from sensor to control system to verify correct wiring, calibration, and configuration across the entire loop." },
          { name: "Integrated System Testing", description: "We validate that all subsystems work together correctly under simulated process conditions, ensuring seamless integration." },
          { name: "Handover and Documentation", description: "We compile as-built drawings, test records, operator manuals, and maintenance schedules for a complete operational handover." },
        ]}
      />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["commissioning-and-start-up-support"] && serviceCrossLinks["commissioning-and-start-up-support"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Explore{" "}
              <em className="not-italic text-current">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["commissioning-and-start-up-support"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["commissioning-and-start-up-support"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Commissioning & Start-up Support</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["commissioning-and-start-up-support"]?.map((item) => (
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
</>
  );
}
