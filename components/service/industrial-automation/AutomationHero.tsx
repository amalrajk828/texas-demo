"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

export default function AutomationHero() {
  return (
    <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20 lg:pb-28">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
        }}
      />

      {/* Top-right red glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8 text-[12px] text-white/30"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/service/" className="hover:text-white/60 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/60">Industrial Automation</span>
        </motion.div>

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
              Industrial Automation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Industrial Process{" "}
            <em className="not-italic text-[#e7212b]">Automation</em>
            <br className="hidden sm:block" />
            {" "}Solutions
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl"
          >
            We provide total industrial automation solutions and system integration using various
            brands of PLCs, SCADA, and HMIs. We develop customized software solutions and reporting
            software, and perform upgrades of legacy systems and SCADA software — delivering
            end-to-end automation across oil &amp; gas, power, and industrial sectors.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
            >
              Get More Information
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/service/"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
            >
              ← All Services
            </Link>
          </motion.div>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "PLC",   label: "Multi-Brand Integration" },
            { num: "SCADA", label: "System Upgrades" },
            { num: "HMI",   label: "Custom Development" },
            { num: "EPC",   label: "Turnkey Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
              <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
