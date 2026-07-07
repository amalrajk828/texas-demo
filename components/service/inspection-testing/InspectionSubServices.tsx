"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Hammer, ScanLine, Microscope } from "lucide-react";

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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SUB_SERVICES = [
  {
    Icon: Hammer,
    title: "Mechanical Testing",
    body: "Tensile testing is a process that provides information about the tensile strength, yield strength, and ductility of the metallic material. It measures the force required to break a composite or plastic specimen and the extent to which the specimen stretches or elongates to that breaking point — ensuring full material conformity.",
    href: "/service/mechanical-testing/",
  },
  {
    Icon: ScanLine,
    title: "Non Destructive Testing (NDT)",
    body: "The following non-destructive examination services are available at TTS with technical expertise, qualified and experienced technicians, and modern equipment: Visual Inspection (VI), Liquid / Dye Penetrant Examination (PT), Magnetic Particle Inspection (MT), Radiographic Testing (RT), and Ultrasonic Testing (UT).",
    href: "/service/non-destructive-testing-ndt/",
  },
  {
    Icon: Microscope,
    title: "Specialized Inspection Service",
    body: "Phased Array Ultrasonic Testing — phased arrays are used to detect image defects including cracks, voids, and pits caused by corrosion. They are used to measure material thickness and evaluate weld integrity, providing high-resolution imaging far beyond conventional UT techniques.",
    href: "/service/specialized-inspection-service/",
  },
];

function SubServiceCard({
  item,
  index,
}: {
  item: (typeof SUB_SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 + index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
    >
    <Link
      href={item.href}
      className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full"
    >
      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
            <item.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
          </div>
          <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

        <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">
          {item.title}
        </h3>

        <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
          {item.body}
        </p>
        <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
    </motion.div>
  );
}

export default function InspectionSubServices() {
  return (
    <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Inspection &amp; Testing
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
              Our Inspection &amp; Testing Services
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
            >
              Get More Information
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden aspect-[21/7] mb-10 shadow-2xl shadow-black/20">
            <Image
              src="/images/services/Usinage-2.jpg"
              alt="Industrial inspection and testing company Kuwait — NDT and mechanical testing services"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f5f8]/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
          </div>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_SERVICES.map((item, i) => (
            <SubServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
