"use client";
/* Theme V5: GreyServices styled to Home V2 design system
   Tokens: --bg-alt (#141820), --border-default, --border-active (#E53935), --accent (#E53935)
*/
import Link from "next/link";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  { 
    prefix: "/01",
    Icon: Gauge,        
    title: "Flow Measurement & Control System Solutions", 
    body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.", 
    href: "/service/flow-measurement-solutions/", 
    tag: "METERING" 
  },
  { 
    prefix: "/02",
    Icon: FlaskConical, 
    title: "Inspection & Testing",                        
    body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 9001, ISO 14001, ISO 45001, UASL and Accurate compliance.", 
    href: "/service/inspection-testing/",          
    tag: "NDT & QA" 
  },
  { 
    prefix: "/03",
    Icon: Cpu,          
    title: "Industrial Process Automation Solutions",     
    body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.", 
    href: "/service/industrial-automation/",        
    tag: "AUTOMATION" 
  },
];

export default function GreyServices() {
  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden v5-grid-bg" 
      style={{ backgroundColor: "var(--bg-alt, #141820)" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--border-default, rgba(255, 255, 255, 0.08))" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "var(--border-default, rgba(255, 255, 255, 0.08))" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
                OUR SERVICES
              </span>
            </div>
            <h2 
              className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.08] tracking-tight max-w-3xl mb-3" 
              style={{ color: "var(--text-heading, #ffffff)" }}
            >
              What services do we offer for industrial automation and flow measurement?
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#9CA3AF] max-w-2xl">
              Extensive expertise in custody metering, industrial automation, and inspection &amp; testing — since 2008.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] hover:gap-3 transition-all duration-200 shrink-0 mb-1"
            style={{ color: "var(--accent, #E53935)" }}
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s) => {
            const { Icon } = s;
            return (
              <div key={s.title} className="flex flex-col h-full">
                <Link
                  href={s.href}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[6px] overflow-hidden transition-all duration-200 h-full block border"
                  style={{
                    backgroundColor: "var(--card, #1E2330)",
                    borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
                  }}
                >
                  {/* Corner square red indicator */}
                  <span className="v5-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

                  <div>
                    {/* Top bar: Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-[5px] flex items-center justify-center transition-all duration-200"
                        style={{
                          background: "rgba(229, 57, 53, 0.12)",
                          border: "1px solid rgba(229, 57, 53, 0.35)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-[var(--accent)]" strokeWidth={1.8} />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] font-bold text-[var(--accent)]">
                          {s.prefix}
                        </span>
                        <span
                          className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-[4px]"
                          style={{
                            color: "var(--text-muted, #9CA3AF)",
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))",
                          }}
                        >
                          {s.tag}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-[1.25rem] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--text-heading, #ffffff)" }}
                    >
                      {s.title}
                    </h3>
                    <p 
                      className="text-[15px] leading-relaxed font-normal" 
                      style={{ color: "var(--text-body, #F9FAFB)" }}
                    >
                      {s.body}
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                    style={{
                      color: "var(--accent, #E53935)",
                      borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/"
            className="v5-btn-secondary"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          border-color: var(--border-active, #E53935) !important;
        }
      `}</style>
    </section>
  );
}
