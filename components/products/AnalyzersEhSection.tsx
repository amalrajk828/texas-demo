"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import BadgeList from "./BadgeList";
import type { BadgeItem } from "./types";

type EhCategory = {
  title: string;
  sub: string;
  models: string[];
  benefit: string;
};

const CATEGORIES: EhCategory[] = [
  {
    title: "Gas Flow Measurement",
    sub: "Ultrasonic & Custody Transfer",
    models: ["FLOWSIC600-XT", "FLOWSIC550", "FLOWSIC100-XT"],
    benefit:
      "Maintenance-free ultrasonic technology with high accuracy for fiscal metering and harsh environments.",
  },
  {
    title: "CEMS & Process Analysis",
    sub: "Emissions Monitoring Systems",
    models: [
      "MCS300P",
      "MCS100/200",
      "GHG-Control",
      "MEAC",
      "GMS800 FIDOR",
      "GM32 (In-situ)",
      "TRANSIC100LP",
      "ZIRKOR O2",
    ],
    benefit:
      "Complete solutions for regulatory compliance (QAL1/MCERTS) measuring NOx, SO2, CO, O2, and hydrocarbons.",
  },
  {
    title: "Dust & Opacity",
    sub: "Particulate Measurement",
    models: [
      "DUSTHUNTER T",
      "DUSTHUNTER S/SP",
      "DUSTHUNTER C200",
      "FW300 Ex",
      "GRAVIMAT",
      "Filter Monitors",
    ],
    benefit:
      "Reliable dust concentration measurement for emission control and filter monitoring in all industrial processes.",
  },
];

const COMPLIANCE: BadgeItem[] = [
  { name: "QAL1 & MCERTS Certified", Icon: ShieldCheck },
  { name: "Ex / Hazardous Area Versions", Icon: ShieldCheck },
  { name: "Complete System Solutions", Icon: ShieldCheck },
];

export default function AnalyzersEhSection() {
  return (
    <section className="bg-[#0B0D26] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#F5821F] text-[10px] font-semibold tracking-[3px] uppercase">
            Authorized Agent · Endress+Hauser
          </span>
          <h2 className="mt-3 text-white text-2xl sm:text-3xl font-bold">
            Gas Flow Meter, Analyzers &amp; CEMS
          </h2>
          <p className="text-white/55 text-[14px] mt-3 max-w-2xl mx-auto">
            Precision measurement for process &amp; environmental compliance —
            with QAL1/MCERTS certified solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <EhCard key={cat.title} category={cat} />
          ))}
        </div>

        <div className="mt-10">
          <BadgeList items={COMPLIANCE} variant="dark" />
        </div>
      </div>
    </section>
  );
}

function EhCard({ category }: { category: EhCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
    >
      <div className="mb-3">
        <h3 className="text-white text-[16px] font-bold">{category.title}</h3>
        <p className="text-white/55 text-[11px] mt-1 font-semibold tracking-wide uppercase">
          {category.sub}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {category.models.map((m) => (
          <span
            key={m}
            className="rounded bg-white/5 border border-white/10 px-2 py-1 text-white/80 text-[10.5px] font-mono"
          >
            {m}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="text-[10px] font-semibold tracking-[2px] uppercase text-[#F5821F]">
          Key Benefit
        </p>
        <p className="text-white/65 text-[12.5px] mt-1.5 leading-relaxed">
          {category.benefit}
        </p>
      </div>
    </motion.div>
  );
}
