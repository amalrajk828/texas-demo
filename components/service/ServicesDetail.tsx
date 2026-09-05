"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Gauge,
  FlaskConical,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ─── Fade-up helper ─────────────────────────────────────────── */

/* ─── Services data ──────────────────────────────────────────── */
const SERVICES = [
  {
    id: "flow-measurement",
    Icon: Gauge,
    eyebrow: "Main Services",
    title: "Flow Measurement & Control System Solutions",
    body: [
      "We provide metering control system upgrades, maintenance, and validation services for custody metering systems. Our experienced team ensures that your metering systems operate efficiently and accurately, meeting industry standards and compliance requirements.",
      "Additionally, we offer specialized consultancy services to optimize your custody metering processes and enhance productivity. Our comprehensive portfolio covers flow computers, metering skids, liquid and gas applications, and complete custody transfer solutions.",
    ],
    highlights: [
      "Custody transfer metering skids (liquid & gas)",
      "Flow computer supply, installation & commissioning",
      "Metering control system upgrades & migration",
      "Maintenance, calibration & validation services",
      "Specialized consultancy & process optimization",
      "Compliance with OIML, AGA, API, ISO standards",
    ],
    imageSrc: "/images/services/flow-measurement.jpg",
    imageAlt: "Flow measurement control system",
    href: "/service/flow-measurement-solutions/",
    imagePlaceholder: "/images/services/flow-measurement.jpg",
    reverse: false,
  },
  {
    id: "inspection-testing",
    Icon: FlaskConical,
    eyebrow: "Main Services",
    title: "Inspection & Testing",
    body: [
      "We provide comprehensive inspection and testing services across various industries. Our team of experts conducts thorough equipment inspections, non-destructive testing, functional testing, and certification to ensure compliance with industry standards and regulations.",
      "Our services help you maintain the integrity and safety of your assets, giving you peace of mind and mitigating risks. We deploy state-of-the-art inspection techniques and certified professionals to deliver reliable, traceable results.",
    ],
    highlights: [
      "Non-destructive testing (NDT) — UT, MT, PT, RT",
      "Equipment & pressure vessel inspections",
      "Functional testing & factory acceptance tests (FAT)",
      "Site acceptance tests (SAT) & commissioning support",
      "Metering system validation & performance audits",
      "Certification & compliance reporting",
    ],
    imageSrc: "/images/services/inspection-testing.jpg",
    imageAlt: "Inspection and testing equipment",
    href: "/service/inspection-testing/",
    imagePlaceholder: "/images/services/inspection-testing.jpg",
    reverse: true,
  },
  {
    id: "process-automation",
    Icon: Cpu,
    eyebrow: "Main Services",
    title: "Industrial Process Automation Solutions",
    body: [
      "Our Industrial Automation services focus on optimizing your industrial processes for improved efficiency and productivity. We specialize in control system design, implementation, and upgrades, offering expertise in PLC programming, SCADA integration, and HMI development.",
      "With our solutions, you can streamline your operations, reduce downtime, and achieve better control over your production processes. We work across oil & gas, power generation, manufacturing, and water treatment sectors delivering fully integrated automation packages.",
    ],
    highlights: [
      "PLC programming & control system design",
      "SCADA integration & HMI development",
      "Control panel design, engineering & fabrication",
      "Variable frequency drives (VFD) & servo systems",
      "CEMS — Continuous Emissions Monitoring Systems",
      "Plant-wide automation & DCS migration",
    ],
    imageSrc: "/images/services/automation.jpg",
    imageAlt: "Industrial automation control room",
    href: "/service/industrial-automation/",
    imagePlaceholder: "/images/services/automation.jpg",
    reverse: false,
  },
];

/* ─── Image placeholder card ─────────────────────────────────── */
function ServiceImage({
  src,
  alt,
  placeholder,
}: {
  src: string;
  alt: string;
  placeholder: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#12163A] shadow-2xl shadow-black/25">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
    </div>
  );
}

/* ─── Single service block ───────────────────────────────────── */
function ServiceBlock({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const isReverse = service.reverse;

  return (
    <div
      id={service.id}
      className="relative scroll-mt-28"
    >
      {/* Section divider line (not on first) */}
      {index > 0 && (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-24 lg:mb-32" />
      )}

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
          isReverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        {/* Image column */}
        <div className="fade-up relative">
          <ServiceImage
            src={service.imageSrc}
            alt={service.imageAlt}
            placeholder={service.imagePlaceholder}
          />
          {/* Number badge */}
          <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-[#e7212b] rounded-xl w-14 h-14 flex flex-col items-center justify-center shadow-lg shadow-[#e7212b]/30">
            <span className="text-[10px] text-white/70 leading-none font-semibold tracking-[1px]">No.</span>
            <span className="text-white text-xl font-bold leading-none">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Content column */}
        <div>
          <div className="fade-up d1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3px] uppercase">
                {service.eyebrow}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 mt-0.5">
                <service.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl sm:text-[1.85rem] font-bold text-[#0B0D26] leading-[1.2]">
                {service.title}
              </h2>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-4 mb-8">
              {service.body.map((para, i) => (
                <p key={i} className="text-[#4a4a4a] text-[15px] leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="fade-up d2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {service.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[#555] text-[13.5px] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="fade-up d2">
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export default function ServicesDetail() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Subtle ambient blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(231,33,43,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="fade-up text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Core Services
            </span>
            <span className="w-6 h-px bg-[#0891B2]" />
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-bold text-[#0B0D26] leading-[1.12] mb-4">
            What We Do Best
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            At Texas Technical Service Co., we have extensive expertise in a wide range of services
            related to Custody Metering systems, Industrial Automation, and Inspection &amp; Testing —
            trusted by leading operators across Kuwait, Dubai, and beyond.
          </p>
        </div>

        {/* ── Service blocks ── */}
        <div className="space-y-24 lg:space-y-32">
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
