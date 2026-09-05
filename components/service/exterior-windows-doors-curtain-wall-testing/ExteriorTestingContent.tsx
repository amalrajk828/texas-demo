"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const CAPABILITIES = [
  "Water penetration testing to ASTM E1105 and AAMA 501.2",
  "Air permeability testing to ASTM E783 and EN 12153",
  "Structural performance testing under positive and negative wind pressures",
  "Field hose testing for installed curtain wall and fenestration systems",
  "Leakage path identification and diagnostic reporting",
  "Pre-completion and post-completion envelope testing",
];

export default function ExteriorTestingContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Comprehensive Building Envelope Performance Testing</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Exterior windows, doors, and curtain wall systems are the primary barrier between the building interior and the external environment. Their performance directly impacts energy efficiency, occupant comfort, acoustic insulation, and long-term durability. TTS provides independent, accredited testing services that verify your building envelope meets the performance requirements specified in project documents and international standards.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our field testing capabilities cover water penetration resistance, air permeability, and structural performance — performed on-site using calibrated equipment and systematic test protocols. Whether you require pre-completion quality assurance testing, post-installation verification, or forensic investigation of reported leaks, our experienced test engineers deliver documented results that support contractor quality programmes, design validation, and regulatory compliance across Kuwait and the GCC.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Each test programme is tailored to the project specifications, facade type, and performance criteria. Our test reports include detailed observations, photographic evidence, pass/fail determinations against the applicable standard, and recommendations for remedial actions where deficiencies are identified — providing actionable information for contractors, facade consultants, and building owners.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our testing team coordinates with facade contractors, project managers, and third-party inspectors to integrate envelope testing into the construction programme efficiently. We maintain calibrated test equipment traceable to national standards and operate in accordance with ISO 17025 testing laboratory requirements — ensuring test results are credible, repeatable, and accepted by authorities having jurisdiction.</p>
          </div>
        </div>
        <div className="fade-up mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#555] text-[13.5px] leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up d1">
          <div className="rounded-2xl bg-[#0B0D26] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Standards &amp; Codes</p>
              <p className="text-white font-semibold text-lg">ASTM E1105 · ASTM E783 · AAMA 501 · EN 12208</p>
              <p className="text-white/70 text-sm mt-1">Building envelope testing — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Envelope Testing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
