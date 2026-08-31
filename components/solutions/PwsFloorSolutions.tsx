"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Server,
  Factory,
  Building2,
  ShieldCheck,
  Award,
  Wind,
  Cable,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    Icon: Server,
    title: "Data Center Solutions",
    sectors: ["Server Rooms", "NOCs"],
    features: [
      "High Load Capacity: Supports heavy server racks",
      "Airflow Efficiency: Optimized cooling panels",
      "Anti-Static: Electrostatic discharge protection",
    ],
  },
  {
    Icon: Factory,
    title: "Control Room Systems",
    sectors: ["Oil & Gas", "Industrial"],
    features: [
      "Vibration Control: Stable platform for consoles",
      "Cable Management: Organized underfloor routing",
      "Fire Resistance: High safety standards",
    ],
  },
  {
    Icon: Building2,
    title: "Office & Technical Areas",
    sectors: ["Labs", "Clean Rooms"],
    features: [
      "Flexible Layouts: Easy reconfiguration",
      "Hygienic Finish: Dust-free & easy maintenance",
      "Aesthetic Options: Premium finish varieties",
    ],
  },
];

const certifications = [
  { name: "GREENGUARD", detail: "Gold Standard" },
  { name: "RoHS Compliant", detail: "EN 12825" },
  { name: "CISCA", detail: "ISO Certified" },
  { name: "ASTM Stds", detail: "IGBC Member" },
];

const qualitySpecs = [
  { label: "Core", value: "High-density Calcium Sulphate" },
  { label: "Encapsulation", value: "Steel / Aluminum" },
  { label: "Durability", value: "15-25+ Years Lifespan" },
  { label: "Stability", value: "Reinforced Pedestals" },
];

const faqItems = [
  {
    q: "What is a raised access floor and where is it used?",
    a: "A raised access floor is a modular flooring system installed over a structural slab, creating a hidden plenum for cables, HVAC, and services. It is widely used in data centers, network operations centers (NOCs), control rooms, clean rooms, and modern offices where frequent reconfiguration, cable management, and underfloor cooling are required.",
  },
  {
    q: "What certifications does PWS Floor Solutions hold?",
    a: "PWS Floor Solutions panels are GREENGUARD Gold certified (low chemical emissions), RoHS compliant, manufactured to EN 12825 (European performance standard for raised floors), CISCA-recommended construction standards, and ASTM tested. PWS is also an IGBC member for green-building compliance.",
  },
  {
    q: "What is the load capacity of PWS raised floor panels?",
    a: "PWS panels are built around a high-density calcium sulphate core with steel or aluminum encapsulation, providing excellent load-bearing capacity for heavy server racks, control consoles, and industrial equipment. Standard panels are designed for typical data center loads, with reinforced variants available for ultra-heavy applications.",
  },
  {
    q: "Can raised flooring be installed in existing operational facilities?",
    a: "Yes. PWS raised access flooring is modular, allowing phased installation in live data centers and control rooms with minimal disruption. Panels can be individually lifted for cable changes, equipment moves, or maintenance — making it ideal for facilities that need to evolve over time.",
  },
  {
    q: "Do you supply and install PWS flooring in Kuwait and the GCC?",
    a: "Yes. As the authorized dealer for PWS Floor Solutions, Texas Technical Services supplies, installs, and supports raised access flooring projects across Kuwait, the UAE, Saudi Arabia, and the wider GCC. We also integrate flooring with our control room console and cable management offerings for a complete turnkey package.",
  },
];

export default function PwsFloorSolutions() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20 lg:pb-28">
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
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.16) 0%, transparent 65%)",
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
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/solutions/" className="hover:text-white/70 transition-colors">
              Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white/60">PWS Floor Solutions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[3px] uppercase">
                Authorized Dealer · PWS Floor Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Raised Access{" "}
              <em className="not-italic text-current">Flooring Systems</em>{" "}
              for Critical Environments
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              PWS Floor Solutions is India&apos;s most trusted raised access floor
              manufacturer. Calcium sulphate panels with steel or aluminum
              encapsulation — purpose-built for data centers, control rooms,
              NOCs, and clean rooms across Kuwait, the UAE, and the GCC.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/control-room-interior-and-console/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                Control Room Consoles →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "18+", label: "Years Experience" },
              { num: "250+", label: "Projects Delivered" },
              { num: "1M+", label: "Sq. Ft. Installed" },
              { num: "GREENGUARD", label: "Gold Certified" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">
                  {stat.num}
                </p>
                <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES ═══════════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                PWS Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-3xl">
              Engineered for{" "}
              <em className="not-italic text-current">every critical space</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-5 group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                    <cat.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0B0D26] leading-snug mb-3">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.sectors.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold tracking-wide uppercase text-[#0891B2] bg-[#e7212b]/8 px-2 py-1 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2.5 mt-2">
                    {cat.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[13px] text-gray-700 leading-snug"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONSTRUCTION QUALITY & CERTIFICATIONS ════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Construction Quality
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B0D26] leading-[1.15] mb-5">
                Built to last{" "}
                <em className="not-italic text-current">15-25+ years</em>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-7 max-w-xl">
                PWS panels are built around a high-density calcium sulphate
                core with steel or aluminum encapsulation, supported by
                reinforced pedestals — delivering long-term stability for
                mission-critical environments.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {qualitySpecs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-100 bg-[#f8f9fa] p-4"
                  >
                    <p className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#0891B2]">
                      {s.label}
                    </p>
                    <p className="text-[14px] font-semibold text-[#0B0D26] mt-1.5">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8eaf0] bg-[#f8f9fa] p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <Award className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Certifications
                </span>
              </div>
              <h3 className="text-[#0B0D26] text-xl font-bold mb-5">
                Internationally Certified
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-lg border border-gray-200 bg-white p-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[12px] font-bold text-[#0B0D26]">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {c.detail}
                      </p>
                    </div>
                    <ShieldCheck
                      className="w-4 h-4 text-[#e7212b]"
                      strokeWidth={1.8}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-200 grid grid-cols-3 gap-2 text-center">
                <div>
                  <Wind className="w-4 h-4 text-[#e7212b] mx-auto" strokeWidth={1.8} />
                  <p className="text-[10px] text-gray-500 mt-1.5">Cooling</p>
                </div>
                <div>
                  <Cable className="w-4 h-4 text-[#e7212b] mx-auto" strokeWidth={1.8} />
                  <p className="text-[10px] text-gray-500 mt-1.5">Cable Mgmt</p>
                </div>
                <div>
                  <ShieldCheck
                    className="w-4 h-4 text-[#e7212b] mx-auto"
                    strokeWidth={1.8}
                  />
                  <p className="text-[10px] text-gray-500 mt-1.5">Anti-Static</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════ */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid border-t-4 border-[#e7212b] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Building a data center or control room?
              </p>
              <p className="text-gray-400 text-sm">
                Get a turnkey PWS raised flooring package — including panels,
                pedestals, and ramp/step systems — designed for your load and
                airflow requirements.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
