"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  Flame, Factory, Zap, Droplets,
  FlaskConical, Snowflake, Building2, Layers,
} from "lucide-react";

const INDUSTRIES = [
  { name: "Oil & Gas",       slug: "oil-gas",        Icon: Flame,        sub: "Upstream · Midstream" },
  { name: "Refinery",        slug: "refinery",        Icon: Factory,      sub: "Process control" },
  { name: "Power Plant",     slug: "power-plant",     Icon: Zap,          sub: "Generation · Grid" },
  { name: "Water Treatment", slug: "water-treatment", Icon: Droplets,     sub: "Municipal · Industrial" },
  { name: "Petrochemicals",  slug: "petrochemicals",  Icon: FlaskConical, sub: "Process automation" },
  { name: "LNG",             slug: "lng",             Icon: Snowflake,    sub: "Custody · Metering" },
  { name: "Cement",          slug: "cement",          Icon: Building2,    sub: "Production · Quality" },
  { name: "Metal & Steel",   slug: "metal-steel",     Icon: Layers,       sub: "Monitoring · Safety" },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#0891B2]/40" />
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
              Industries we serve
            </span>
            <span className="w-8 h-px bg-[#0891B2]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0D26]">
            Built for the world&apos;s most demanding sectors
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.slug}
            >
              <Link
                href={`/industries/${ind.slug}/`}
                className="group flex flex-col items-center border border-[#e8eaf0] hover:border-[#e7212b]/60 rounded-xl p-5 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e7212b]/8 flex items-center justify-center mb-3 group-hover:bg-[#e7212b]/12 transition-colors duration-200">
                  <ind.Icon className="w-6 h-6 text-[#e7212b]" strokeWidth={1.5} />
                </div>
                <p className="text-[14px] font-semibold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors leading-snug">
                  {ind.name}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{ind.sub}</p>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
