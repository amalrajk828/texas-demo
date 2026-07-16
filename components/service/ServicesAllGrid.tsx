"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";

interface ServiceItem {
  title: string;
  category: string;
  image: string;
  href: string;
  body: string;
}

const MAIN_SERVICES: ServiceItem[] = [
  { title: "Flow Measurement & Control System Solutions", category: "Main Services", image: "/images/services/calibration.jpg", href: "/service/flow-measurement-solutions/", body: "Metering control system upgrades, maintenance, and validation for custody metering systems — precision and compliance." },
  { title: "Inspection & Testing", category: "Main Services", image: "/images/services/Usinage-2.jpg", href: "/service/inspection-testing/", body: "Comprehensive inspection and testing — equipment inspections, NDT, functional testing, and certification to industry standards." },
  { title: "Industrial Process Automation Solutions", category: "Main Services", image: "/images/services/automation_full.jpg", href: "/service/industrial-automation/", body: "Total industrial automation — PLC, SCADA, HMI, custom software for oil & gas and industrial sectors." },
  { title: "Constructions", category: "Main Services", image: "/images/services/SKYLIGHT-GANTRY-scaled.jpg", href: "/service/constructions/", body: "Gantry & structural fabrication, industrial facility design, piping, civil & mechanical construction, turnkey EPC execution." },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.03 + (index % 4) * 0.06 }} whileHover={{ y: -4, transition: { duration: 0.22 } }} className="h-full">
      <Link href={service.href} className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
        <div className="relative aspect-[16/10] bg-[#0B0D26] overflow-hidden flex items-center justify-center">
          <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-semibold text-white/70 bg-[#0B0D26]/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">Main Service</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5">
          <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-10 transition-all duration-300" />
          <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">{service.title}</h3>
          <p className="text-gray-500 text-[13px] leading-[1.7] flex-1">{service.body}</p>
          <div className="mt-4 pt-3 border-t border-[#e8eaf0] text-[#e7212b] text-[12px] font-semibold flex items-center gap-1">
            View Services
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesAllGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase().trim();
  const filtered = query
    ? MAIN_SERVICES.filter(s =>
        s.title.toLowerCase().includes(query) ||
        s.body.toLowerCase().includes(query)
      )
    : MAIN_SERVICES;

  return (
    <section className="relative bg-[#f4f5f8] py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative max-w-md mx-auto mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-12 pr-10 py-3 bg-white border border-[#e8eaf0] rounded-xl text-[14px] text-[#0B0D26] placeholder-gray-400 focus:outline-none focus:border-[#e7212b]/40 focus:ring-1 focus:ring-[#e7212b]/20 transition-all duration-200"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#e8eaf0] rounded-2xl p-8 mb-14">
            <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />
            <h3 className="text-[16px] font-bold text-[#0B0D26] mb-1">No services found</h3>
            <p className="text-[13px] text-gray-500">We couldn't find any services matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {filtered.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} index={i} />
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <p className="text-center text-[12px] text-gray-400">
            Showing {filtered.length} service{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    </section>
  );
}
