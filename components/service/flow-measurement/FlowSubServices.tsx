"use client";
import Link from "next/link";
import NeumorphicServiceCard from "@/components/service/common/NeumorphicServiceCard";

/* ─── Fade-up helper ─────────────────────────────────────────── */

const RELATED_SERVICES = [
  {
    title: "Metering Control System Integration",
    category: "Flow Measurement Solutions",
    description:
      "Welcome to TTS, where we specialize in Custody Transfer Flow Metering Control System Development and Integration. With an unwavering commitment to precision, accuracy, and compliance, we are your trusted partner…",
    href: "/service/metering-control-system-integration/",
  },
  {
    title: "Upgrade of Metering Control System",
    category: "Flow Measurement Solutions",
    description:
      "Elevate your industrial operations with our expert Metering Control System Upgradation service. At TTS, we specialize in optimizing your existing control systems, ensuring they meet the latest industry standards and…",
    href: "/service/upgrade-of-metering-control-system/",
  },
  {
    title: "Flow Computer Configuration",
    category: "Flow Measurement Solutions",
    description:
      "Our dedicated team customizes solutions to your specific flow computational and configuration needs in compliance to global standards (API MPMS, AGA, ISO, NTEP & OIML), guaranteeing seamless integration into your existing systems.",
    href: "/service/flow-computer-configuration/",
  },
  {
    title: "Flow Meter Calibration",
    category: "Flow Measurement Solutions",
    description:
      "Faure Herman offers calibration services in our world class ILAC/COFRAC ISO 17025 accredited facility located in France to handle your range of flowmeters, provide service available to other brands and…",
    href: "/service/flow-meter-calibration/",
  },
  {
    title: "Repair & Upgrades for Helical Flow Meters",
    category: "Flow Measurement Solutions",
    description:
      "We offer flow meters preventive and corrective maintenance services, performance and failure analysis and provide suitable solutions.",
    href: "/service/repair-upgrades-for-helical-flow-meters/",
  },
  {
    title: "Audits and Specialized Consultancy",
    category: "Flow Measurement Solutions",
    description:
      "We offer comprehensive audits to ensure compliance with industry regulations and standards, minimizing risks and ensuring precise measurements within your custody metering skid system. Our team of expert consultants provides…",
    href: "/service/audits-and-specialized-consultancy/",
  },
  {
    title: "Validation and Uncertainty Calculations",
    category: "Flow Measurement Solutions",
    description:
      "Our team of skilled experts employs advanced techniques and calculations to assess and minimize uncertainties, giving you confidence in the reliability of your measurement data. Whether you need validation services,…",
    href: "/service/validation-and-uncertainty-calculations/",
  },
  {
    title: "Commissioning and After Sales Support",
    category: "Flow Measurement Solutions",
    description:
      "Elevate your industrial processes with our Commissioning and After Sales Support services. At TTS, we specialize in ensuring the seamless integration and performance of critical equipment, including flow meters, metering…",
    href: "/service/commissioning-and-after-sales-support/",
  },
  {
    title: "Genuine Spare Parts",
    category: "Flow Measurement Solutions",
    description:
      "Being an Authorized OEM's Representative, discover top-quality genuine spare parts for flow metering, flow meters, control systems, analyzers, CEMS, and industrial sensors at TTS. With a commitment to excellence, we…",
    href: "/service/genuine-spare-parts/",
  },
  {
    title: "Metering Expert Services",
    category: "Flow Measurement Solutions",
    description:
      "We take pride in offering an elite team of flow metering specialists, exclusively dedicated to enhancing your custody metering solutions. Our certified experts possess a profound understanding of custody metering…",
    href: "/service/metering-expert-services/",
  },
];

export default function FlowSubServices() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-12" suppressHydrationWarning>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Flow Measurement Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937]">
            Related Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {RELATED_SERVICES.map((card, i) => (
            <div key={card.title || i} className="fade-up" suppressHydrationWarning>
              <NeumorphicServiceCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

