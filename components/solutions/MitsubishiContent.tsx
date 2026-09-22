"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Monitor, Zap, Server } from "lucide-react";

const solutions = [
  {
    Icon: Cpu,
    title: "Mitsubishi PLC Programming & Integration",
    body: "As a trusted Mitsubishi system integrator in Kuwait, UAE, and Dubai, we specialize in programming and integrating Mitsubishi electric PLCs — including the MELSEC iQ-F, iQ-R, and L Series. Our expertise covers logic development, industrial network configuration (CC-Link, Ethernet/IP), and seamless integration with SCADA and HMI systems for complete factory automation solutions.",
    href: "/products/plc/",
  },
  {
    Icon: Monitor,
    title: "Mitsubishi HMI & GOT Solutions",
    body: "We design, engineer, and program Mitsubishi GOT (Graphic Operation Terminal) HMI panels for intuitive operator interfaces. From simple status displays to advanced multi-touch visualization with data logging and recipe management — our HMI solutions put real-time process control at your operators&apos; fingertips.",
    href: "/products/got/",
  },
  {
    Icon: Zap,
    title: "AC Servo Systems & Frequency Inverters",
    body: "Comprehensive Mitsubishi AC servo system and frequency inverter (VFD) solutions for precise motion control and energy-efficient motor drives. We configure Mitsubishi MR-J5 and MR-J4 servo amplifiers, and FREQROL series inverters — tailored to your application requirements in oil & gas, manufacturing, and material handling.",
    href: "/products/acservos/",
  },
  {
    Icon: Server,
    title: "Iconics SCADA & Mitsubishi Integration",
    body: "We integrate Iconics SCADA software with Mitsubishi electric automation hardware for enterprise-wide monitoring and control. Our Iconics SCADA Mitsubishi solutions provide real-time data visualization, historical trending, alarm management, and KPI dashboards — connecting your Mitsubishi PLCs and HMIs into a unified supervisory platform.",
    href: "/products/iconics/",
  },
];

const capabilities = [
  "Mitsubishi MELSEC PLC programming — iQ-F, iQ-R, L Series",
  "GOT HMI panel design, engineering & programming",
  "AC servo system configuration — MR-J5, MR-J4 series",
  "FREQROL frequency inverter (VFD) setup & integration",
  "Iconics SCADA development & Mitsubishi integration",
  "CC-Link, Ethernet/IP & Modbus industrial networking",
  "Control panel design, fabrication & FAT for Mitsubishi systems",
  "Legacy Mitsubishi system migration & upgrade",
  "Commissioning, start-up support & after-sales service",
  "Mitsubishi automation products — sales, support & spares",
];

const faqItems = [
  {
    q: "Are you an authorized Mitsubishi Electric system integrator?",
    a: "Yes, Texas Technical Services Co. is an authorized Mitsubishi Electric system integrator in Kuwait and the GCC. We have certified engineers trained on the full Mitsubishi automation portfolio including MELSEC PLC series, GOT HMI panels, MR-J servo drives, FREQROL VFDs, and ICONICS SCADA platforms. Our authorization ensures genuine products, factory-trained support, and warranty-backed installations.",
  },
  {
    q: "Which Mitsubishi PLC series do you support?",
    a: "We support the complete Mitsubishi MELSEC PLC lineup: the iQ-R series (high-end, modular, for complex automation), iQ-F series (compact, cost-effective for medium applications), L series (high-speed, mid-range), and legacy Q series (for existing installations). We also provide migration services from older A-series and Q-series to the latest iQ-R and iQ-F platforms.",
  },
  {
    q: "What is the difference between MELSEC iQ-R and iQ-F series?",
    a: "The MELSEC iQ-R series is Mitsubishi's flagship high-performance PLC designed for large-scale, complex automation systems with advanced motion control, high-speed networking (CC-Link IE), and extensive I/O capabilities. The iQ-F series is a compact, cost-optimized PLC for standalone machines and medium-scale applications, offering built-in Ethernet, positioning, and analog functions in a space-saving form factor. Both series share the same engineering software (GX Works3), simplifying development and maintenance.",
  },
  {
    q: "Do you supply Mitsubishi spare parts and replacements?",
    a: "Yes, we supply genuine Mitsubishi Electric automation components including MELSEC PLCs, GOT HMIs, MR-J servo drives and motors, FREQROL VFDs, and spare parts. As an authorized integrator, we provide competitive pricing, fast delivery across Kuwait and the GCC, and technical support for part selection and compatibility ensuring minimal downtime for your operations.",
  },
  {
    q: "Which industries use Mitsubishi factory automation solutions?",
    a: "Mitsubishi factory automation solutions are deployed across oil and gas (pipeline control, terminal automation), manufacturing (assembly lines, packaging, material handling), water and wastewater (pump control, treatment plants), power generation (turbine control, SCADA), cement and metals (process control), and food and beverage (filling, packaging, inspection). The reliability and precision of Mitsubishi equipment make it ideal for demanding industrial environments.",
  },
];

export default function MitsubishiContent() {
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
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/solutions/" className="hover:text-white/70 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white/60">Mitsubishi Electric</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[3px] uppercase">
                Mitsubishi Electric
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Mitsubishi Electric{" "}
              <em className="not-italic text-current">Factory Automation</em> Solutions
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              Texas Technical Services is your trusted Mitsubishi system integrator in Kuwait, UAE, and Dubai
              and the GCC. We deliver Mitsubishi electric factory automation solutions including
              PLC Mitsubishi electric programming, GOT HMI integration, AC servo drives,
              frequency inverters, and Iconics SCADA Mitsubishi systems — backed by our
              domain expertise in oil &amp; gas, power, and industrial automation.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                All Products →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "PLC", label: "MELSEC Series" },
              { num: "HMI", label: "GOT Panels" },
              { num: "Servo", label: "Motion Control" },
              { num: "SCADA", label: "Iconics Integration" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
                <p className="text-[13px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR SOLUTIONS ═══════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Mitsubishi Solutions
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                Our Mitsubishi Electric{" "}
                <em className="not-italic text-current">Automation Solutions</em>
              </h2>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
              >
                Get More Information
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <sol.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-lg font-bold text-[#0B0D26] leading-snug mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-[1.75] flex-1">
                    {sol.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-2 text-[#e7212b] text-[14px] font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES DARK STRIP ═════════════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.09) 0%, transparent 70%)",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />

            <div className="relative z-10 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#0891B2]" />
                    <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      Capabilities
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] leading-snug mb-3">
                    Our Mitsubishi Ecosystem Expertise
                  </h3>
                  <p className="text-white/70 text-[15px] leading-[1.8]">
                    From Mitsubishi electric factory automation PLCs to Iconics SCADA
                    integration — our team delivers complete Mitsubishi electric industrial
                    automation solutions for clients across Kuwait and the GCC.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/55 text-[14px] leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW WE DELIVER ═════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              How We Deliver
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Our Engagement Process
          </h2>
          <p className="text-gray-500 text-[15px] mb-12 max-w-2xl leading-relaxed">
            From product selection through to commissioning and after-sales support, we follow a
            structured delivery methodology that ensures quality, compliance, and optimal performance
            for every Mitsubishi automation project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consult & Specify",
                desc: "We assess your automation requirements, recommend the optimal Mitsubishi product selection, and define system architecture, budget, and timeline.",
              },
              {
                step: "02",
                title: "Engineer & Configure",
                desc: "Our certified engineers develop PLC programs (GX Works3), HMI screens (GT Designer3), servo configurations (MR Configurator), and VFD setups (FR Configurator).",
              },
              {
                step: "03",
                title: "Integrate & Test",
                desc: "We integrate all components, perform comprehensive in-house testing and FAT, and verify system performance against your specifications before shipment.",
              },
              {
                step: "04",
                title: "Install & Support",
                desc: "On-site installation, commissioning, SAT, and operator training. We provide ongoing technical support, spare parts supply, and maintenance services across Kuwait and the GCC.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-lg hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <span className="text-[2.5rem] font-bold text-[#e7212b]/10 leading-none">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#0B0D26] mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f4f5f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Industries
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Industries Using Mitsubishi Automation
          </h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">
            Mitsubishi Electric factory automation solutions power critical operations across
            diverse industries — from oil and gas pipeline control to high-speed manufacturing
            and packaging lines.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Oil & Gas", desc: "Pipeline SCADA, terminal automation, and process control" },
              { name: "Manufacturing", desc: "Assembly lines, packaging, and material handling" },
              { name: "Power & Utilities", desc: "Turbine control, SCADA, and plant automation" },
              { name: "Water & Wastewater", desc: "Pump control, treatment plant automation" },
              { name: "Cement & Metals", desc: "Process control and heavy machinery automation" },
              { name: "Food & Beverage", desc: "Filling, packaging, inspection, and line control" },
            ].map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl bg-white border border-[#e8eaf0] p-5 hover:border-[#e7212b]/20 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-[#0B0D26] font-bold text-lg mb-1">{ind.name}</h3>
                <p className="text-gray-400 text-[14px] leading-snug">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Mitsubishi Factory Automation</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg"
              >
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[16px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0891B2]/40" />
            <span className="text-[#0891B2] text-[14px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#0891B2]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Looking for Mitsubishi automation solutions?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-md mx-auto">
            Talk to our Mitsubishi-certified team about PLC, HMI, servo, VFD, or Iconics
            SCADA integration for your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
