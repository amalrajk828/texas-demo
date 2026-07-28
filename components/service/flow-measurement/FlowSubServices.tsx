"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

/* ─── Fade-up helper ─────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
    <section className="bg-[#f8f9fa] py-20 border-t border-[#e8eaf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Flow Measurement Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26]">
            Related Services
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RELATED_SERVICES.map((card, i) => (
            <FadeUp key={card.title} delay={0.04 + i * 0.03}>
              <div className="bg-white border border-[#e8eaf0] rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full hover:border-[#e7212b]/30 hover:shadow-md transition-all duration-200 group">
                <div>
                  <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                    {card.category}
                  </p>
                  <h3 className="text-[#0B0D26] text-[19px] font-bold leading-snug mb-3 group-hover:text-[#e7212b] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed mb-6 line-clamp-3">
                    {card.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={card.href}
                    aria-label={`Read more about ${card.title}`}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#e7212b] hover:border-[#e7212b] hover:text-white transition-all duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
