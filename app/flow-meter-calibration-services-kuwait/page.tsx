import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Gauge, ShieldCheck, Award } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";

export const metadata: Metadata = {
  title: "Flow Meter Calibration Kuwait & GCC",
  description:
    "ISO 17025 accredited flow meter calibration in Kuwait — Coriolis, ultrasonic, turbine, and PD meter calibration to OIML and API standards.",
  alternates: {
    canonical: "/flow-meter-calibration-services-kuwait/",
  },
  openGraph: {
    title: "Flow Meter Calibration Kuwait & GCC | Texas Technical Services",
    description:
      "ISO 17025 accredited flow meter calibration in Kuwait — Coriolis, ultrasonic, turbine, PD meters. OIML, API compliance. Fahaheel.",
    url: "/flow-meter-calibration-services-kuwait/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meter Calibration Kuwait & GCC | Texas Technical Services",
    description:
      "ISO 17025 accredited flow meter calibration in Kuwait and the GCC — OIML, API compliance. Texas Technical Services.",
    images: ["/og-default.png"],
  },
  keywords: [
    "flow meter calibration Kuwait",
    "Coriolis flow meter calibration Kuwait",
    "endress hauser calibration",
    "OIML calibration Kuwait",
    "API MPMS calibration Kuwait",
    "ISO 17025 calibration Kuwait",
    "micro motion flow meter calibration",
    "custody transfer meter calibration",
    "flow meter calibration Dubai",
    "ultrasonic flow meter calibration",
  ],
};

const services = [
  {
    Icon: Gauge,
    title: "Coriolis Flow Meter Calibration",
    body: "ISO 17025 accredited calibration for Micro Motion, Endress+Hauser, KROHNE, and other Coriolis meters. Multi-point calibration with as-found and as-left data, uncertainty calculations, and OIML R117 compliance verification for custody transfer applications.",
    href: "/service/flow-meter-calibration/",
  },
  {
    Icon: ShieldCheck,
    title: "Ultrasonic & Turbine Meter Calibration",
    body: "Calibration services for ultrasonic, turbine, positive displacement, and vortex flow meters. On-site and laboratory calibration using reference standards traceable to national metrological institutes. Full compliance with API MPMS and AGA report requirements.",
    href: "/service/flow-meter-calibration/",
  },
  {
    Icon: Award,
    title: "Meter Proving & Validation",
    body: "Field proving and laboratory validation of custody transfer metering systems. Pipe prover and small volume prover services to verify meter accuracy under actual operating conditions. Meter factor calculation and documentation for fiscal measurement compliance.",
    href: "/service/flow-meter-calibration/",
  },
];

const capabilities = [
  "ISO 17025 accredited laboratory calibration",
  "On-site mobile calibration rigs and portable provers",
  "OIML R117 Class 0.3 and 0.5 compliance verification",
  "API MPMS Chapter 21 flow computer calibration",
  "As-found and as-left calibration with uncertainty documentation",
  "Multi-brand capability — Micro Motion, E+H, KROHNE, Faure Herman",
  "Emergency 2-week turnaround for critical applications",
  "Calibration certificates with full traceability records",
  "Coriolis, ultrasonic, turbine, PD, and vortex meter types",
  "Custody transfer and process measurement applications",
];

const faqItems = [
  {
    q: "What types of flow meters can TTS calibrate?",
    a: "TTS calibrates all major flow meter types including Coriolis, ultrasonic (clamp-on and inline), turbine, positive displacement, vortex, thermal mass, and magnetic flow meters. We support all major brands including Micro Motion, Endress+Hauser, KROHNE, Faure Herman, SICK, and Tek-Trol.",
  },
  {
    q: "Is your calibration laboratory ISO 17025 accredited?",
    a: "Yes. Our calibration laboratory holds ISO 17025:2017 accreditation through ILAC/COFRAC, ensuring measurement traceability to national and international metrological institutes. All calibration certificates include uncertainty calculations and traceability information required for fiscal custody transfer compliance.",
  },
  {
    q: "What calibration standards do you comply with?",
    a: "Our calibration services comply with OIML R117 (legal metrology for liquids), API MPMS Chapter 21 (electronic flow measurement), AGA Report No. 11 (Coriolis and ultrasonic meters), MID (Measuring Instruments Directive), and ISO 17025 (laboratory accreditation). We also support facility-specific standards from major oil companies.",
  },
  {
    q: "Can you perform on-site calibration in Kuwait?",
    a: "Yes. TTS provides on-site calibration services throughout Kuwait and the GCC using mobile calibration rigs and portable reference provers. On-site calibration eliminates the need to remove meters from the process, reducing downtime and maintaining operational continuity. We serve facilities in Ahmadi, Fahaheel, Shuaiba, Mina Al-Ahmadi, and across the region.",
  },
  {
    q: "How often should flow meters be calibrated?",
    a: "For custody transfer applications, annual calibration is typically required by regulatory authorities and fiscal measurement standards. Process control meters may be calibrated every 2-3 years. Meters in harsh service conditions or those that have undergone maintenance should be recalibrated more frequently. TTS can help establish a calibration schedule tailored to your specific requirements.",
  },
];

export default function FlowMeterCalibrationKuwaitPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Flow Meter Calibration Kuwait", href: "/flow-meter-calibration-services-kuwait/" }]} />
      <ServiceJsonLd
        name="Flow Meter Calibration Services Kuwait"
        description="ISO 17025 accredited flow meter calibration services in Kuwait and the GCC — Coriolis, ultrasonic, turbine, and PD meter calibration to OIML R117, API MPMS, and MID standards."
        url="/flow-meter-calibration-services-kuwait/"
        serviceType="Flow Meter Calibration"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Flow Meter Calibration Kuwait</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
                Fahaheel — Kuwait
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              ISO 17025 Accredited{" "}
              <em className="not-italic text-[#e7212b]">Flow Meter Calibration</em>{" "}
              in Kuwait &amp; the GCC
            </h1>

            <p className="text-white/50 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              Texas Technical Services provides professional flow meter calibration services
              across Kuwait and the GCC. From Coriolis and ultrasonic meters to turbine and PD
              technologies, our ISO 17025 accredited laboratory delivers calibration to OIML R117,
              API MPMS, and MID standards for custody transfer and process measurement applications.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Request Calibration Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/service/flow-meter-calibration/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                All Calibration Services →
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "ISO", label: "17025 Accredited" },
              { num: "OIML", label: "R117 Compliant" },
              { num: "18+", label: "Years Experience" },
              { num: "2 Week", label: "Emergency Service" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═══════════════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Calibration Services
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                Flow Meter Calibration{" "}
                <em className="not-italic text-[#e7212b]">Services in Kuwait</em>
              </h2>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <svc.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
                    {svc.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ═══════════════════════════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
            <div className="relative z-10 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#e7212b]" />
                    <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      Capabilities
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] leading-snug mb-3">
                    Calibration Capabilities in Kuwait
                  </h3>
                  <p className="text-white/40 text-[14px] leading-[1.8]">
                    From ISO 17025 accredited laboratory calibration to on-site mobile rigs,
                    our Fahaheel-based team delivers comprehensive flow meter calibration
                    across Kuwait and the wider GCC region.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/55 text-[13px] leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About Flow Meter Calibration{" "}
            <em className="not-italic text-[#e7212b]">in Kuwait</em>
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

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Need flow meter calibration in Kuwait?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our Fahaheel-based team about your calibration requirements.
            We serve clients across Kuwait and the GCC with ISO 17025 accredited services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/flow-meter-calibration/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Calibration Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
