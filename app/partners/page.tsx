import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Global Network | 16+ Authorized Partners & Vendors",
  description:
    "Texas Technical Services Co. is the authorized partner and distributor for 16+ world-class OEMs in Kuwait, UAE, and the GCC — covering flow measurement, industrial automation, analyzers, sensors, and SCADA.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Global Network | Texas Technical Services",
    description:
      "16+ authorized partnerships and dealerships — Mitsubishi Electric, Endress+Hauser, SICK, Faure Herman, KEM Küppers, HMS Networks, NOVUS, OMNI, and more.",
    url: "/partners/",
  },
  keywords: [
    "authorized partners Kuwait",
    "industrial OEM distributor Kuwait",
    "Mitsubishi Electric distributor Kuwait",
    "Endress Hauser distributor Kuwait",
    "Faure Herman distributor Kuwait",
    "KEM Kuppers distributor",
    "HMS Networks Kuwait",
    "global network industrial automation",
    "Texas Technical Services partners",
  ],
};

const PARTNERS = [
  {
    logo: "/about/mitsubishi-electric.svg",
    name: "Mitsubishi Electric",
    country: "JPN",
    relationship: "System Integrator & Distributor",
    product: "Automation Solutions",
    description:
      "Authorized system integrator & distributor for the complete Mitsubishi automation portfolio — MELSEC PLCs, GOT HMIs, AC servos, ICONICS SCADA, and MELFA industrial robots.",
    href: "/mitsubishi-electric-factory-automation/",
  },
  {
    logo: "/about/endress-hauser.svg",
    name: "Endress+Hauser",
    country: "SUI",
    relationship: "Distributor & Service",
    product: "Process Instrumentation",
    description:
      "People for Process Automation — ultrasonic gas meters (FLOWSIC series), CEMS, gas & dust analyzers with QAL1 & MCERTS certified solutions for harsh environments.",
    href: "/products/analyzers/cems/",
  },
  {
    logo: "/about/sick.svg",
    name: "SICK AG",
    country: "GER",
    relationship: "Distributor",
    product: "Sensors",
    description:
      "One of the world's leading producers of sensors and sensor solutions for industrial automation — radar, photoelectric, safety, RFID, and encoder technology.",
    href: "/products/sensors/",
  },
  {
    logo: "/about/meter-engineers.svg",
    name: "Meter Engineers",
    country: "USA",
    relationship: "Distributor",
    product: "Provers & Accessories",
    description:
      "High-accuracy bidirectional & unidirectional sphere-type provers, small-volume piston provers (MagnaProve), mobile prover systems, and on-site calibration services.",
    href: "/service/flow-meter-calibration/",
  },
  {
    logo: "/about/faure-herman.svg",
    name: "Faure Herman",
    country: "FRA",
    relationship: "Distributor",
    product: "Helical Turbine, Ultrasonic & Clamp-On Flow Meters",
    description:
      "100+ years in flow measurement — Heliflu helical turbine series, FH SONIC ultrasonic flow meters, and FH Lab ISO 17025 accredited calibration services.",
    href: "/products/flow-meters/liquid-flow-meters/",
  },
  {
    logo: "/about/omni.png",
    name: "OMNI Flow Computer",
    country: "USA",
    relationship: "Distributor & Integrator",
    product: "Flow Computer",
    description:
      "Leading brand in oil and gas flow computers with proven reliability for custody transfer, allocation measurement, and complex fiscal metering applications.",
    href: "/products/custody-metering-solutions/",
  },
  {
    logo: "/about/kem-kuppers.svg",
    name: "KEM Küppers",
    country: "GER",
    relationship: "Distributor",
    product: "Precision Flow Measurement",
    description:
      "German precision engineering — TRICOR Coriolis, SRZ helical, ZHM gear, HM F turbine, variable area, and VFF chemical injection flow meters.",
    href: "/products/flow-meters/",
  },
  {
    logo: "/about/tek-trol.svg",
    name: "Tek-Trol",
    country: "USA",
    relationship: "Distributor",
    product: "Process Control Instruments",
    description:
      "Comprehensive process instrumentation & control solutions — Tek-Bar pressure/temperature/level transmitters, Tek-Vor vortex, Tek-Cor Coriolis, and MPFM multi-phase flow meters.",
    href: "/products/flow-meters/",
  },
  {
    logo: "/about/rockwin.svg",
    name: "Rockwin Flowmeter India",
    country: "IND",
    relationship: "Distribution & Service",
    product: "Metering Skid & Flow Meters",
    description:
      "ISO 9001:2015 certified engineered flow metering skid systems — custody transfer skids, truck loading skids, LPG bottling skids, and ASME-code fabrication.",
    href: "/products/custody-metering-solutions/",
  },
  {
    logo: "/about/kurz-instruments.svg",
    name: "Kurz Instruments",
    country: "USA",
    relationship: "Distributor",
    product: "Thermal Mass Flow Meters",
    description:
      "USA manufacturer of thermal mass flow meters for precise direct gas mass flow measurement without compensation — for process gas monitoring and emissions.",
    href: "/products/analyzers/gas-analyzers/",
  },
  {
    logo: "/about/hms-networks.svg",
    name: "HMS Networks",
    country: "SWE",
    relationship: "Distributor",
    product: "Industrial Comms & IIoT",
    description:
      "Hardware meets software — Anybus gateways, Ewon remote solutions (Talk2M, Cosy+ VPN), Intesis building automation, IXXAT CAN/safety, and Red Lion networking.",
    href: "/service/industrial-automation/",
  },
  {
    logo: "/about/pyrotech.svg",
    name: "Pyrotech Workspace",
    country: "IND",
    relationship: "Distributor & Integrator",
    product: "Operator Console & Turnkey Control Room",
    description:
      "Pioneer in turnkey control room solutions and ergonomic command centre consoles — complemented by PWS access flooring systems and PWS workstations.",
    href: "/products/control-room-interior-and-console/",
  },
  {
    logo: "/about/autocontrol.svg",
    name: "Autocontrol",
    country: "IND",
    relationship: "Distributor",
    product: "Instrumentation & Valves",
    description:
      "Indian instrumentation and valves specialist — sensing, measuring, controlling, and automation solutions for process industries.",
    href: "/service/industrial-automation/",
  },
  {
    logo: "/about/euromag.svg",
    name: "Euromag International",
    country: "ITA",
    relationship: "Distributor",
    product: "Electromagnetic Flow Meters",
    description:
      "Electromagnetic flow meters for conductive liquids — robust, accurate measurement for water, wastewater, and process industries with long-term stability.",
    href: "/products/flow-meters/liquid-flow-meters/",
  },
  {
    logo: "/about/texaflow.svg",
    name: "Texaflow",
    country: "UAE",
    relationship: "Proprietary Solution",
    product: "Integrated Custody Transfer Control System",
    description:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, and pipeline stations.",
    href: "/solutions/texaflow/",
  },
  {
    logo: "/about/novus-automation.svg",
    name: "NOVUS Automation",
    country: "BRA",
    relationship: "Distributor",
    product: "BMS & Industrial Automation",
    description:
      "We Measure, We Control, We Record — data loggers, smart PID controllers, wireless sensing (AirGate), IoT gateways, and BMS/HVAC solutions.",
    href: "/service/industrial-automation/",
  },
];

const STRATEGIC_TECHNOLOGY = [
  {
    logo: "/about/space-ai.svg",
    name: "Space AI",
    country: "UAE",
    relationship: "Strategic Partner",
    product: "Industrial AI & Machine Learning",
    description:
      "Next-generation artificial intelligence for industry — predictive maintenance, process optimization with virtual metrology, smart monitoring with ESG & carbon tracking.",
    href: "/solutions/space-ai/",
  },
  {
    logo: "/about/pws-floor.svg",
    name: "PWS Floor Solutions",
    country: "IND",
    relationship: "Authorized Dealer",
    product: "Raised Access Flooring",
    description:
      "India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, and clean rooms with GREENGUARD Gold certification.",
    href: "/products/access-flooring/",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Global Network", href: "/partners/" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white">Global Network</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
              Global Network
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4 max-w-3xl">
            Authorized Partnerships &amp; Dealerships
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            16+ approved global vendors delivering world-class flow
            measurement, industrial automation, and instrumentation solutions
            across Kuwait, UAE, and the GCC. From field devices to enterprise
            analytics — a complete integrated ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                16+
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Approved Vendors
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                9
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Countries Represented
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                100%
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Authorized Distribution
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-white text-[1.5rem] font-black leading-none">
                ISO
              </p>
              <p className="text-white/50 text-[10px] mt-1 font-semibold tracking-[1.5px] uppercase">
                Certified Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER GRID ──────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              Worldwide Partnerships
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our 16+ Authorized Partners
            </h2>
            <p className="mt-3 text-gray-500 text-[14px] max-w-2xl mx-auto">
              From precision flow meters to industrial AI — we connect the
              world&apos;s leading OEMs to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group relative flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#e7212b]/30 hover:shadow-xl hover:shadow-[#e7212b]/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="relative h-12 w-36 shrink-0">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain object-left"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="text-[9px] font-bold tracking-[1.5px] text-[#e7212b] bg-[#e7212b]/8 px-2 py-0.5 rounded">
                      {p.country}
                    </span>
                    <span className="text-[9px] font-medium tracking-[1px] uppercase text-gray-400 text-right leading-tight max-w-[120px]">
                      {p.relationship}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#181D4E] text-[16px] font-bold leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[11px] font-semibold tracking-wide text-[#e7212b] uppercase mt-1">
                    {p.product}
                  </p>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#e7212b] group-hover:gap-2.5 transition-all">
                  Explore{" "}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC TECHNOLOGY ──────────────────────────────── */}
      <section className="bg-[#F8F9FA] py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#e7212b]">
              Proprietary & Strategic
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#181D4E]">
              Our Proprietary &amp; Strategic Technology Solutions
            </h2>
            <p className="mt-3 text-gray-500 text-[14px] max-w-2xl mx-auto">
              Beyond distribution — our own branded solutions and strategic
              partnerships in AI and access flooring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {STRATEGIC_TECHNOLOGY.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group relative flex flex-col gap-4 rounded-xl border-2 border-[#e7212b]/20 bg-white p-7 transition-all duration-300 hover:border-[#e7212b]/50 hover:shadow-2xl hover:shadow-[#e7212b]/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="relative h-14 w-40 shrink-0">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain object-left"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="text-[9px] font-bold tracking-[1.5px] text-white bg-[#e7212b] px-2 py-0.5 rounded">
                      {p.country}
                    </span>
                    <span className="text-[9px] font-medium tracking-[1px] uppercase text-[#181D4E] text-right leading-tight max-w-[120px]">
                      {p.relationship}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#181D4E] text-[18px] font-bold leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[11px] font-semibold tracking-wide text-[#e7212b] uppercase mt-1">
                    {p.product}
                  </p>
                </div>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {p.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e7212b] group-hover:gap-2.5 transition-all">
                  Learn more{" "}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-[#0B0D26] border-t-4 border-[#e7212b] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Need a partner-led solution?
              </p>
              <p className="text-gray-400 text-sm">
                Our team will match the right OEM technology to your
                application — across flow, automation, and beyond.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
