"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, Droplets, ScanSearch, FlaskConical, ShieldCheck } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CARDS = [
  { Icon: Droplets,    title: "Fluorescent PT",        body: "Fluorescent dye penetrant testing under UV/black light — highly sensitive detection of fine surface-breaking defects in machined, cast, and forged components in aerospace and precision engineering." },
  { Icon: ScanSearch,  title: "Visible / Colour Contrast PT", body: "Colour contrast (red dye) penetrant testing using visible light — cost-effective surface defect detection suitable for on-site inspection in weld, fabrication, and maintenance environments." },
  { Icon: FlaskConical, title: "Surface Crack Detection", body: "Capillary action draws penetrant into surface-breaking discontinuities — cracks, laps, and porosity are made visible after developer application, regardless of material type or orientation." },
  { Icon: ShieldCheck, title: "Multi-Material Application", body: "Effective on metals, ceramics, plastics, and non-metallic materials — provided the surface is non-porous. Widely used for weld inspection, casting examination, and in-service component assessment." },
];

const CAPABILITIES = [
  "Fluorescent and colour contrast penetrant testing (Type I & II)",
  "Solvent-removable, water-washable, and post-emulsifiable methods",
  "Weld PT examination to ASME, AWS, EN ISO 3452 standards",
  "Castings and forgings penetrant inspection",
  "In-service component and pressure part PT",
  "Sensitivity levels 1 to 4 per ASTM E165 / ISO 3452",
  "Qualification of PT procedures and personnel",
  "Certified test reports with indication mapping",
];

export default function PenetrantContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp delay={0} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#0B0D26] shadow-2xl shadow-black/15">
              <Image src="/images/services/PT.jpg" alt="Liquid dye penetrant testing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">LPT / LPI / DPT</p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">Penetrant Testing</p>
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.08}>
              <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#e7212b]" /><span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Liquid &amp; Dye Penetrant Testing for Surface Defect Detection</h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Liquid Penetrant Testing (LPT), also known as Liquid Penetrant Inspection (LPI) or Dye Penetrant Testing (DPT), is a widely used non-destructive testing (NDT) method to detect surface defects and discontinuities in materials. It is particularly effective for inspecting non-porous materials like metals, ceramics, plastics, and some non-metallic materials.</p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Dye penetrant testing (PT) is a non-destructive material testing method which uses capillary forces to find surface cracks or pores and make them visible. It can detect surface-breaking flaws such as cracks, laps, and porosity — providing a reliable and cost-effective surface inspection solution across all industry sectors.</p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="grid grid-cols-1 gap-2.5 mb-8">
                {CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#555] text-[13.5px] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.22}>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15">Get More Information <ArrowRight className="w-4 h-4" /></a>
            </FadeUp>
          </div>
        </div>
        <div>
          <FadeUp delay={0} className="mb-12">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#e7212b]" /><span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">PT Methods</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">Penetrant Testing Methods &amp; Applications</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARDS.map((item, i) => (
              <FadeUp key={item.title} delay={0.08 + i * 0.08}>
                <motion.div whileHover={{ y: -3, transition: { duration: 0.22 } }} className="group rounded-2xl border border-[#e8eaf0] bg-[#f4f5f8] p-6 hover:border-[#e7212b]/25 hover:bg-white hover:shadow-xl hover:shadow-[#e7212b]/5 transition-all duration-300 cursor-default h-full flex flex-col">
                  <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">{String(i + 1).padStart(2, "0")}</span>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#e8eaf0] group-hover:border-[#e7212b]/20 group-hover:bg-[#e7212b]/5 flex items-center justify-center mb-4 transition-all duration-300 shadow-sm">
                    <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-[1.75] flex-1">{item.body}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.42}>
            <div className="mt-8 rounded-2xl bg-[#0B0D26] overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
              <div className="absolute right-0 top-0 w-64 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
              <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-white font-bold text-[15px]">Need Penetrant Testing (PT) Services?</p>
                  <p className="text-white/40 text-[13px] mt-0.5">Contact our team about fluorescent or colour contrast PT for your components or welds.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20">Contact Us <ArrowRight className="w-3.5 h-3.5" /></a>
                  <Link href="/service/non-destructive-testing-ndt/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]">NDT Services</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
