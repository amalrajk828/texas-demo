"use client";
/* Kit D — Grey: dark section with original PixelSnow & blueprint background, full orange heading */
import Link from "next/link";
import { Gauge, FlaskConical, Cpu, ArrowRight, Sparkles } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useIsMobile";
import "./hero-v4.css";

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
        <div className="fade-up flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-col max-w-3xl">
            {/* Eyebrow label ("OUR SERVICES"): peach/orange accent pill badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 w-fit"
              style={{
                background: "rgba(232, 147, 90, 0.12)",
                border: "1px solid rgba(232, 147, 90, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#E8935A" }} />
              <span
                className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#E8935A", fontFamily: "var(--font-mono, monospace)" }}
              >
                OUR SERVICES
              </span>
            </div>

            {/* Heading text: matching hero-v4-heading with gradient */}
            <h2
              className="heading-gradient-peach text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.05] tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              What services do we offer for industrial automation and flow measurement?
            </h2>
          </div>

          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all duration-200 shrink-0 mb-1 group"
            style={{ color: "#E8935A" }}
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" style={{ color: "#E8935A" }} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((s, i) => {
            const { Icon } = s;
            return (
              <div key={s.title} className={`fade-up d${i + 1} flex flex-col h-full`}>
                <BorderGlow
                  borderRadius={24}
                  edgeSensitivity={30}
                  className="w-full h-full"
                >
                  <Link
                    href={s.href}
                    className="relative flex flex-col justify-between p-8 sm:p-9 rounded-[24px] overflow-hidden transition-all duration-500 group h-full block"
                    style={{
                      background: "rgba(18, 22, 34, 0.45)",
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
                        background: "radial-gradient(circle at 50% 50%, rgba(234, 88, 12, 0.25) 0%, rgba(232, 147, 90, 0.08) 55%, transparent 75%)",
                      }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                          style={{
                            background: "rgba(232, 147, 90, 0.12)",
                            border: "1px solid rgba(232, 147, 90, 0.25)",
                            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: "#E8935A" }} strokeWidth={1.75} />
                        </div>
                        <span
                          className="text-[11px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full backdrop-blur-md"
                          style={{
                            color: "#E8935A",
                            background: "rgba(232, 147, 90, 0.1)",
                            border: "1px solid rgba(232, 147, 90, 0.2)",
                          }}
                        >
                          {s.tag}
                        </span>
                      </div>

                      <h3
                        className="text-[1.25rem] font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-[#FFFFFF]"
                        style={{ color: "#FFFFFF" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {s.body}
                      </p>
                    </div>

                    <div
                      className="inline-flex items-center gap-2 text-[14px] font-bold mt-8 pt-5 border-t group-hover:gap-3 transition-all duration-200"
                      style={{
                        color: "#E8935A",
                        borderColor: "rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </BorderGlow>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
