"use client";
/* Kit D — Grey: Services — home-v2 layout with V3 Industrial Teal theme */
import Link from "next/link";
import dynamic from "next/dynamic";
import { Gauge, FlaskConical, Cpu, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const PixelSnow = dynamic(() => import("@/components/PixelSnow"), { ssr: false });

const SERVICES = [
  {
    prefix: "/01",
    Icon: Gauge,
    title: "Flow Measurement & Control System Solutions",
    body: "Metering control system upgrades, maintenance, and validation for custody metering systems. Ensuring your metering operates accurately to API, AGA, and ISO standards.",
    href: "/service/flow-measurement-solutions/",
    tag: "METERING",
  },
  {
    prefix: "/02",
    Icon: FlaskConical,
    title: "Inspection & Testing",
    body: "Comprehensive inspection, non-destructive testing, functional testing and certification across all industrial sectors. Full ISO 9001, ISO 14001, ISO 45001, UASL and Accurate compliance.",
    href: "/service/inspection-testing/",
    tag: "NDT & QA",
  },
  {
    prefix: "/03",
    Icon: Cpu,
    title: "Industrial Process Automation Solutions",
    body: "Control system design, PLC programming, SCADA integration, and HMI development — optimising operations across oil & gas, power, and manufacturing plants.",
    href: "/service/industrial-automation/",
    tag: "AUTOMATION",
  },
];

export default function GreyServices() {
  const isMobile = useIsMobile();
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden blueprint-grid blueprint-dot-grid"
      style={{ backgroundColor: "var(--g-section-b, #141A22)" }}
    >
      {/* Animated pixel field reused from the main homepage Services section */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
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

      {/* Hairline borders */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--g-border, rgba(255,255,255,0.10))" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "var(--g-border, rgba(255,255,255,0.10))" }} />

      {/* Ambient teal glow */}
      <div
        className="absolute top-1/4 left-10 w-[500px] h-[500px] pointer-events-none opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(23,112,126,0.30) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] rounded-full" style={{ background: "var(--primary, #17707E)" }} />
              <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--primary, #17707E)" }}>
                OUR SERVICES
              </span>
            </div>
            <h2
              className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.05] tracking-tight max-w-3xl mb-3"
              style={{ color: "var(--g-heading, #F4F9F9)" }}
            >
              What services do we offer for industrial automation and flow measurement?
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.8] max-w-2xl" style={{ color: "var(--g-muted, #B9C4C9)" }}>
              Extensive expertise in custody metering, industrial automation, and inspection & testing — since 2008.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all duration-200 shrink-0 mb-1"
            style={{ color: "var(--primary, #17707E)" }}
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s) => {
            const { Icon } = s;
            return (
              <div key={s.title} className="flex flex-col h-full">
                <Link
                  href={s.href}
                  className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-[24px] overflow-hidden transition-all duration-500 h-full block"
                  style={{
                    background: "rgba(29, 37, 49, 0.58)",
                    backdropFilter: isMobile ? "none" : "blur(20px)",
                    WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(23,112,126,0.28) 0%, rgba(23,112,126,0.09) 55%, transparent 75%)",
                    }}
                  />

                  <div>
                    {/* Top bar: Icon, prefix & tag */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: "var(--primary, #17707E)" }} strokeWidth={1.75} />
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] font-bold" style={{ color: "var(--primary, #17707E)" }}>
                          {s.prefix}
                        </span>
                        <span
                          className="text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full backdrop-blur-md"
                          style={{
                            color: "var(--primary, #17707E)",
                            background: "rgba(23, 112, 126, 0.10)",
                            border: "1px solid rgba(23, 112, 126, 0.20)",
                          }}
                        >
                          {s.tag}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-[1.25rem] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--g-heading, #F4F9F9)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--g-muted, #B9C4C9)" }}>
                      {s.body}
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 text-[14px] font-bold mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                    style={{
                      color: "var(--primary, #17707E)",
                      borderColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-semibold text-[15px] px-8 py-4 rounded-full border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: "rgba(255, 255, 255, 0.15)",
              color: "var(--g-heading, #F4F9F9)",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
