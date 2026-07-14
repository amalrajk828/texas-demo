"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesCtaBanner() {
  return (
    <section className="relative bg-[#0B0D26] py-24 lg:py-28 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
        }}
      />

      {/* Red ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(231,33,43,0.11) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <FadeUp delay={0}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-4xl sm:text-[2.8rem] font-bold text-white leading-[1.12] mb-5">
                Have a Project in Mind?
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed max-w-xl mb-8">
                Talk to our team about your requirements. Our Kuwait and Dubai offices are ready
                to help with flow measurement, automation, inspection, and construction projects
                of any scale.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center justify-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/25"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-8 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
                >
                  Back to Services
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right — contact cards */}
          <FadeUp delay={0.18} className="flex flex-col gap-4 min-w-[280px]">

            <a
              href={`mailto:${SITE_EMAIL}`}
              className="group flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/35 hover:bg-white/[0.07] rounded-xl px-6 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors duration-200">
                <Mail className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-white/30 text-[11px] tracking-[1.5px] uppercase mb-0.5">Email Us</p>
                <p className="text-white text-[14px] font-medium">{SITE_EMAIL}</p>
              </div>
            </a>

            <a
              href="tel:+96566347267"
              className="group flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/35 hover:bg-white/[0.07] rounded-xl px-6 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors duration-200">
                <Phone className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-white/30 text-[11px] tracking-[1.5px] uppercase mb-0.5">Kuwait Office</p>
                <p className="text-white text-[14px] font-medium">+965 66347267</p>
              </div>
            </a>

            <a
              href="tel:+971569553747"
              className="group flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/35 hover:bg-white/[0.07] rounded-xl px-6 py-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors duration-200">
                <Phone className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-white/30 text-[11px] tracking-[1.5px] uppercase mb-0.5">Dubai Office</p>
                <p className="text-white text-[14px] font-medium">+971 569553747</p>
              </div>
            </a>

          </FadeUp>
        </div>
      </div>
    </section>
  );
}
