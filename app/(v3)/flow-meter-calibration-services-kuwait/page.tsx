import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Gauge, ShieldCheck, Award } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import CardGrid from "@/components/v3/CardGrid";

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
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Flow Meter Calibration Kuwait", href: "/flow-meter-calibration-services-kuwait/" },
        ]}
      />
      <ServiceJsonLd
        name="Flow Meter Calibration Services Kuwait"
        description="ISO 17025 accredited flow meter calibration services in Kuwait and the GCC — Coriolis, ultrasonic, turbine, and PD meter calibration to OIML R117, API MPMS, and MID standards."
        url="/flow-meter-calibration-services-kuwait/"
        serviceType="Flow Meter Calibration"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Flow Meter Calibration Kuwait & GCC — ISO 17025 Accredited" />

      {/* ══ HERO (V3 style, no breadcrumb in hero) ══════════════ */}
      <section className="relative bg-[#0b0f19] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(107,26,31,0.25),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-6 backdrop-blur-sm">
            <Gauge className="w-4 h-4 text-[#0891b2]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase">
              ISO 17025 Accredited Metrology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mb-6">
            Flow Meter Calibration{" "}
            <span className="text-[#0891b2]">Kuwait &amp; GCC</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Certified calibration of Coriolis, ultrasonic, turbine, and positive displacement meters compliant with OIML R117, API MPMS Chapter 21, and AGA Report 11 across Kuwait and the Arabian Gulf.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors shadow-lg shadow-[#6b1a1f]/20"
            >
              <span>Book Calibration Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/flow-measurement-solutions/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.1] transition-colors"
            >
              <span>Flow Measurement Hub</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/[0.1]">
            {[
              { num: "ISO 17025", label: "Traceable Calibration" },
              { num: "OIML R117", label: "Class 0.3 / 0.5 Custody" },
              { num: "Mobile Rigs", label: "On-Site Prover Fleets" },
              { num: "2-Week", label: "Emergency Turnaround" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-2xl font-bold text-white leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/50 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1 (White): 3 Calibration Services ═════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Precision Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight">
                Metrology &amp; Calibration Disciplines
              </h2>
            </div>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6b1a1f] hover:underline"
            >
              <span>Request calibration quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CardGrid max={3}>
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-[#f8fafc] p-8 hover:bg-white hover:border-[#6b1a1f]/30 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-[#6b1a1f] shadow-sm group-hover:scale-105 transition-transform">
                      <svc.Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[12px] font-bold text-[#94a3b8] tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#6b1a1f] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {svc.body}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center gap-2 text-[#6b1a1f] text-[13px] font-semibold">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* ══ SECTION 2 (Grey): Capabilities List ═══════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Laboratory &amp; Field
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                Calibration Scope &amp; Accreditations
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-6">
                Complete traceability back to international physical standards (NIST, BIPM), providing fully auditable custody transfer documentation for oil, gas, and chemical terminals.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="text-[13px] font-bold text-[#0f172a] mb-1">Applicable Norms</div>
                <p className="text-[13px] text-[#64748b]">API MPMS Ch. 4/5/21, OIML R117, AGA Report 9/11, ISO 17025.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/[0.04] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#6b1a1f] mt-1.5 shrink-0" />
                    <span className="text-[13.5px] font-medium text-[#334155] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 (White): FAQ ═════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PageFaqSection
            items={faqItems}
            title="Questions About"
            highlight="Flow Meter Calibration"
          />
        </div>
      </section>

      {/* ══ SECTION 4: CTA ════════════════════════════════════════ */}
      <section className="py-20 bg-[#0b0f19] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Schedule Flow Meter Calibration in Kuwait or GCC
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Speak with our metrology laboratory engineers to arrange on-site prover mobilization or laboratory calibration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors"
            >
              <span>Contact Metrology Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/flow-measurement-solutions/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.08] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.12] transition-colors"
            >
              <span>Flow Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
