"use client";
/* Kit D — Grey: light section-b, white cards with grey border, red accent */
import Link from "next/link";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useIsMobile";

const PixelSnow = dynamic(() => import("@/components/PixelSnow"), { ssr: false });

const SERVICES = [
  { Icon: Gauge,        title: "Flow Measurement & Control System Solutions", body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.", href: "/service/flow-measurement-solutions/", tag: "Metering" },
  { Icon: FlaskConical, title: "Inspection & Testing",                        body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 14001:2015 and 45001:2018 compliance.", href: "/service/inspection-testing/",          tag: "NDT & QA" },
  { Icon: Cpu,          title: "Industrial Process Automation Solutions",     body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.", href: "/service/industrial-automation/",        tag: "Automation" },
];

export default function GreyServices() {
  const isMobile = useIsMobile();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#000000] blueprint-grid blueprint-dot-grid">
      {/* PixelSnow Background Layer */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={150}
          speed={0.8}
          density={0.1}
          direction={125}
          brightness={0.8}
          variant="square"
        />
      </div>
      {/* Radial glows to give refractable light details to the glass cards */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(229,57,53,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(95,90,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up flex flex-col gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "#0891B2" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "#0891B2" }}>Our Services</span>
            </div>
            <h2 className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.05] tracking-tight" style={{ color: "var(--g-heading)" }}>
              What services do we offer for industrial automation and flow measurement?
            </h2>
          </div>
          <p className="text-[17px] leading-[1.85]" style={{ color: "var(--g-muted)" }}>
            Extensive expertise in custody metering, industrial automation, and inspection & testing — since 2008.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className="fade-up d1 w-full h-full">
              <div className="relative group h-full">
                {/* Soft ambient edge glow element positioned behind the card */}
                <div
                  className={`absolute -inset-[2px] rounded-[20px] pointer-events-none blur-[35px] transition-opacity duration-300 ease-out z-0 ${
                    i === 1 ? "opacity-30 group-hover:opacity-45" : "opacity-18 group-hover:opacity-30"
                  }`}
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255, 60, 60, 0.25) 0%, rgba(229, 57, 53, 0.08) 55%, transparent 75%)",
                  }}
                />

                {/* Single cohesive Glassmorphic Card Container */}
                <div 
                  className="relative w-full h-full min-h-[350px] p-6 flex flex-col rounded-[20px] cursor-pointer transition-all duration-300 overflow-hidden border border-white/[0.12] group-hover:border-white/[0.22] group-hover:bg-[#0E1117]/75 hover:-translate-y-1.5 hover:scale-[1.015]"
                  style={{
                    background: "rgba(14, 17, 23, 0.58)",
                    backdropFilter: isMobile ? "none" : "blur(18px)",
                    WebkitBackdropFilter: isMobile ? "none" : "blur(18px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {/* Faint top specular reflection sheen */}
                  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-t-[20px]" />

                  {/* Top Row: Category Pill + Number */}
                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#ff4d4d] border border-[#ff4d4d]/20 bg-[#ff4d4d]/5 rounded-full px-2.5 py-0.5 w-fit">
                      {svc.tag}
                    </span>
                     <span className="text-[11px] font-bold tracking-[3px] text-white/60 font-mono">0{i + 1}</span>
                  </div>

                  {/* Glassy Icon layer */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 relative z-10 shrink-0">
                    <svc.Icon className="w-5 h-5 text-white/90" strokeWidth={1.6} />
                  </div>

                  {/* Heading */}
                  <h3 className="text-[17px] sm:text-[19px] font-black leading-snug text-white mb-2.5 pr-4 tracking-tight relative z-10 break-words">
                    {svc.title}
                  </h3>

                  {/* Body paragraph */}
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-medium relative z-10">
                    {svc.body}
                  </p>

                  {/* Learn More link */}
                  <Link href={svc.href} className="inline-flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E53935] hover:gap-2.5 transition-all duration-200 mt-auto relative z-10">
                    Learn more about {svc.title} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center">
          <Link href="/services/" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-[15px] border hover:-translate-y-0.5 transition-all"
            style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)", boxShadow: "var(--g-card-shadow)" }}>
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
