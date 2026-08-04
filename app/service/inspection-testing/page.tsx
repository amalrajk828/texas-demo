import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { ChevronRight } from "lucide-react";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspection & Testing — NDT, Mechanical & Specialized",
  description:
    "Industrial inspection and testing in Kuwait — NDT, mechanical testing, and QA consultancy compliant with ISO 9001, ISO 14001, and ISO 45001 across the GCC.",
  alternates: {
    canonical: "/service/inspection-testing/",
  },
  openGraph: {
    title: "Inspection & Testing — NDT, Mechanical & Specialized",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, QA consultancy, and ISO-certified quality management across the GCC.",
    url: "/service/inspection-testing/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Inspection & Testing Services — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing — NDT, Mechanical & Specialized",
    description: "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, ISO 9001/14001/45001 certified.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: [
    "industrial inspection and testing companies Kuwait",
    "inspection testing services Kuwait",
    "NDT services Kuwait Dubai",
    "non destructive testing Kuwait",
    "phased array ultrasonic testing",
    "mechanical testing Kuwait",
    "third party inspection Kuwait",
    "ISO 9001 inspection company Kuwait",
    "Texas Technical Services inspection",
    "QA consultancy Kuwait",
    "3rd party inspection GCC",
    "quality inspection service Dubai",
    "3rd party inspection company Kuwait",
  ],
};

const faqItems = [
  {
    q: "What are the different types of NDT?",
    a: "Non-Destructive Testing (NDT) includes several methods: Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws; Radiographic Testing (RT) uses X-rays or gamma rays to examine internal structure; Magnetic Particle Inspection (MT) detects surface and near-surface defects in ferromagnetic materials; Liquid/Dye Penetrant Testing (PT) reveals surface defects through capillary action; and Visual Inspection (VI) is the systematic visual examination of surfaces and components. Each method has specific applications and advantages depending on the material type, defect orientation, and inspection requirements.",
  },
  {
    q: "What is the difference between UT and RT in NDT?",
    a: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal discontinuities and measure material thickness. It is highly effective for detecting planar defects like cracks and lack of fusion in welds, and provides immediate results with digital thickness readings. Radiographic Testing (RT) uses ionizing radiation (X-rays or gamma rays) to create a radiograph that reveals internal features, voids, porosity, and inclusions. RT is better for detecting volumetric defects and provides a permanent image record, but requires strict safety protocols and longer setup times. Both methods are complementary and often used together for comprehensive weld inspection.",
  },
  {
    q: "What is phased array ultrasonic testing?",
    a: "Phased Array Ultrasonic Testing (PAUT) is an advanced NDT method that uses multiple ultrasonic elements arranged in an array, electronically controlled to steer and focus the sound beam. This enables rapid scanning of complex geometries, improved defect detection and sizing, and real-time imaging of inspection results. PAUT is particularly valuable for weld inspection, corrosion mapping, and critical component examination in oil and gas, power generation, and aerospace industries.",
  },
  {
    q: "What ISO certifications does Texas Technical Services hold?",
    a: "Texas Technical Services Co. is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health and Safety). These certifications demonstrate our commitment to quality, environmental responsibility, and workplace safety across all our inspection and testing operations in Kuwait and the GCC.",
  },
  {
    q: "What inspection services do you offer in Kuwait and the GCC?",
    a: "We offer a full range of inspection and testing services in Kuwait and across the GCC including NDT (UT, MT, PT, RT, VI), phased array ultrasonic testing, mechanical testing (tensile, hardness, impact, bend, fracture, macro/micro), third-party inspection services, QA consultancy, specialized inspection services (lifting equipment, hose testing, air permeability, water penetration), and corrosion control services — all compliant with ISO standards and industry best practices.",
  },
];

export default function InspectionTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/service/inspection-testing/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services"
        description="Industrial inspection and testing company in Kuwait — NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC."
        url="/service/inspection-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <InspectionHero />
      <InspectionOverview hideHeading={true} />
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
            What are the most common questions about{" "}
            <em className="not-italic text-[#e7212b]">inspection and testing?</em>
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

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["inspection-testing"] && serviceCrossLinks["inspection-testing"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Which services complement{" "}
              <em className="not-italic text-[#e7212b]">inspection and testing?</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["inspection-testing"]?.map((link) => (
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
      <ItemListJsonLd
        name="Inspection and Testing Services"
        items={[
          { name: "Non-Destructive Testing (NDT)", url: "/service/non-destructive-testing-ndt/", description: "Comprehensive NDT methods including UT, RT, MT, PT, ECT, PAUT, TOFD, and visual inspection." },
          { name: "Mechanical Testing", url: "/service/mechanical-testing/", description: "Tensile, bend, impact, hardness, fracture, and macro/micro testing for materials and welds." },
          { name: "Specialized Inspection Services", url: "/service/specialized-inspection-service/", description: "Corrosion control, metallurgical analysis, and specialized engineering inspection." },
          { name: "Lifting Equipment Inspection", url: "/service/lifting-equipment-inspection/", description: "LOLER and ASME compliance inspection for cranes, hoists, and lifting accessories." },
          { name: "Exterior Windows, Doors and Curtain Wall Testing", url: "/service/exterior-windows-doors-curtain-wall-testing/", description: "Air permeability, water penetration, and structural performance testing for building envelopes." },
        ]}
      />
    </>
  );
}
