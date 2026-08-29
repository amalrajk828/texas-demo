"use client";
import Link from "next/link";
import { ArrowRight, Building2, Gauge, ClipboardList, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: Building2, title: "Structural Anchor Verification", body: "Verification of anchor bolt installation in concrete foundations, base plates, and structural connections for compliance with design specifications." },
  { Icon: Gauge, title: "Bond Strength Measurement", body: "Direct measurement of the force required to pull out a cast-in steel insert, providing quantitative bond strength data between bolt and concrete substrate." },
  { Icon: ClipboardList, title: "Concrete Strength Assessment", body: "Indirect assessment of in-situ concrete compressive strength using pullout force correlations, useful for quality control on construction sites." },
  { Icon: ShieldCheck, title: "Anchorage Integrity Testing", body: "Testing of post-installed anchors, facade fixings, and equipment anchorages to confirm they can sustain the specified design loads with adequate safety margins." },
];

export default function PulloutContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Pullout Test Applications
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Anchor and Bolt Pullout Testing for Structural Verification</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Pullout testing is a direct method for verifying the load-bearing capacity of fixed anchors, bolts, and rebar embedded in concrete, masonry, and other substrates. The test applies a controlled tensile load to the anchor until the required proof load is achieved or failure occurs — providing definitive evidence of installation quality and design compliance.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS performs pullout tests in accordance with ETAG 001, ACI 318, and BS 8539 — covering post-installed mechanical anchors, chemical anchors, and cast-in-place fixings. Our calibrated hydraulic test equipment and certified technicians deliver load verification for structural steel connections, curtain wall brackets, safety-critical fall arrest systems, and heavy equipment foundations.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Each pullout test is performed with calibrated equipment traceable to national standards, and results are documented with load-displacement curves, failure modes, and pass/fail determinations against the specified acceptance criteria. We also provide anchor selection advice and installation supervision to ensure fixings achieve their design capacity in the actual site conditions.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div key={card.title || i} className="fade-up">
              <div className="group rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-4 group-hover:bg-[#e7212b]/15 transition-all duration-300">
                  <card.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[15px] font-bold text-[#0B0D26] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fade-up d1">
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Standards &amp; Codes</p>
              <p className="text-white font-semibold text-lg">ASTM C900 · EN 12504-3 · BS 1881-207 · ACI 318</p>
              <p className="text-white/70 text-sm mt-1">Certified testing engineers — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Pullout Testing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
