import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial automation company in Kuwait, UAE, and Saudi Arabia — providing industrial automation & control systems, control and automation engineering, PLC and SCADA system integrator services, process control automation solutions, plant automation, automation in manufacturing industry, and control systems and automation for oil & gas, power, and industrial sectors across the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "Industrial automation & control systems, control and automation engineering, and plant and process automation — PLC and SCADA system integrators in Kuwait, UAE, and Saudi Arabia serving manufacturing, power plant, and oil & gas sectors.",
    url: "https://texastechserv.com/service/industrial-automation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "Industrial automation & control systems, control and automation engineering, plant and process automation, and automation in power plant — serving Kuwait, UAE, Dubai, and Saudi Arabia.",
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "PLC and SCADA system integrators in Kuwait",
    "process control automation solutions Kuwait",
    "automation and engineering services Fahaheel",
    "industrial automation companies in UAE",
    "automation companies in Dubai",
    "automation companies in Saudi Arabia",
    "industrial automation & control systems",
    "industrial automation control system",
    "control and automation engineering",
    "automation in manufacturing industry",
    "automation in the manufacturing industry",
    "control systems and automation",
    "plant and process automation",
    "automation in power plant",
    "PLC SCADA",
    "process & control",
    "automation company",
    "SCADA system",
    "industrial automation Kuwait",
    "PLC programming Kuwait Dubai",
    "SCADA integration Kuwait",
    "HMI development Kuwait",
    "plant automation solutions",
    "control system integration Kuwait",
    "CEMS solutions Kuwait",
  ],
};

const faqItems = [
  {
    q: "What is industrial automation?",
    a: "Industrial automation is the use of control systems such as PLCs, SCADA, HMIs, robots, and computer software to operate industrial machinery and processes with minimal human intervention. It improves efficiency, consistency, safety, and productivity in manufacturing, oil and gas, power generation, and other industrial sectors. At Texas Technical Services, we design, integrate, and support automation solutions tailored to your specific operational requirements.",
  },
  {
    q: "What is the difference between industrial automation and control systems?",
    a: "Industrial automation refers to the overall strategy of using technology to automate industrial processes, while control systems are the specific hardware and software components that execute that automation — including PLCs, DCS, SCADA, sensors, actuators, and communication networks. Control systems are the building blocks that enable automation. We provide both the automation strategy and the control system implementation.",
  },
  {
    q: "What are the benefits of automation in manufacturing industry?",
    a: "Automation in the manufacturing industry delivers higher production throughput, consistent product quality, reduced operating costs, improved worker safety, real-time data visibility, and greater production flexibility. Manufacturers can respond faster to market changes, reduce waste, and optimize energy consumption — delivering measurable ROI through increased efficiency and reduced downtime.",
  },
  {
    q: "What industries use industrial automation?",
    a: "Industrial automation is used across virtually every industrial sector including oil and gas (upstream, midstream, downstream), refinery and petrochemicals, power generation (gas, steam, combined cycle), water and wastewater treatment, cement and metals production, food and beverage processing, pharmaceutical manufacturing, and discrete manufacturing — essentially any industry that requires precise process control and operational efficiency.",
  },
  {
    q: "What PLC SCADA services do you offer in Kuwait and the GCC?",
    a: "We offer comprehensive PLC and SCADA services across Kuwait, UAE, Saudi Arabia, and the GCC including multi-brand PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi), SCADA system development and integration (ICONICS, WinCC, iFIX), HMI design and development, legacy system migration, control panel design and fabrication, system commissioning, and 24/7 after-sales support from our offices in Fahaheel, Kuwait and Dubai, UAE.",
  },
];

export default function IndustrialAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Industrial Automation", href: "/service/industrial-automation/" }]} />
      <ServiceJsonLd
        name="Industrial Automation, PLC SCADA & Process Control Solutions"
        description="Industrial automation & control systems, control and automation engineering, PLC and SCADA system integrator, and process control automation solutions for oil & gas, power, and manufacturing in Kuwait, UAE, Saudi Arabia, and the GCC."
        url="/service/industrial-automation/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <AutomationHero />
      <AutomationSubServices />
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
            <em className="not-italic text-[#e7212b]">Industrial Automation</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
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
