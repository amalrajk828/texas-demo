"use client";
import Link from "next/link";
import { ArrowRight, Monitor, Users, BookOpen, Settings } from "lucide-react";

const CARDS = [
  { Icon: Monitor, title: "OEM Premises Training", body: "Hands-on training at our OEM facilities with access to live metering systems, flow computers, and control equipment for real-world learning." },
  { Icon: Users, title: "On-Site Customer Training", body: "Customized training programs delivered at your facility — tailored to your specific metering systems and operational requirements." },
  { Icon: BookOpen, title: "Videoconference Courses", body: "Remote training sessions covering metering installation, commissioning, and operation — flexible scheduling with live instructor interaction." },
  { Icon: Settings, title: "Metering System Operation", body: "Comprehensive instruction on flow metering principles, custody transfer operations, flow computer configuration, and system troubleshooting." },
];

export default function AdvancedTrainingContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Training Programs</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Advanced Training Programs
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Tailored Training for Metering and Industrial Operations</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Effective training is the foundation of safe, efficient, and compliant industrial operations. TTS delivers specialised training programmes for metering system personnel, covering the principles of flow measurement, custody transfer operations, flow computer configuration, and routine system maintenance. Our courses are designed for operators, technicians, and engineers who require practical, hands-on competency.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Training is available at our OEM premises with access to live metering systems, at your facility using your own equipment, or via videoconference for remote teams. Our instructors hold OEM certifications and have direct field experience across oil and gas, petrochemical, and power generation sectors — ensuring training content is technically accurate, practically relevant, and immediately applicable to your operations in Kuwait, the UAE, and the GCC.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Each training programme includes pre-course assessment, practical exercises, competency verification, and post-training documentation. We maintain training records and can develop customised curricula aligned with your operational procedures, equipment inventory, and regulatory requirements — supporting workforce development and competency management across your organisation.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div className="fade-up">
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Get Started</p>
              <p className="text-white font-semibold text-lg">Schedule Your Training Program Today</p>
              <p className="text-white/70 text-sm mt-1">OEM premises · On-site · Videoconferencing — Kuwait &amp; Dubai</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Training
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
