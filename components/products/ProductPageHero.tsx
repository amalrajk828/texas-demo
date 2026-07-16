import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ProductPageStat } from "./types";

export default function ProductPageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  subtitle,
  stats,
}: {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  stats?: ProductPageStat[];
}) {
  return (
    <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#F5821F]">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,130,31,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white">{breadcrumbLabel}</span>
        </nav>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-[#F5821F]" />
          <span className="text-[#F5821F] text-[10px] font-medium tracking-[2.5px] uppercase">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-base max-w-xl">
            {subtitle}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center"
              >
                <p className="text-white text-[1.4rem] font-black leading-none">{s.num}</p>
                <p className="text-white/50 text-[10px] mt-1.5 font-semibold tracking-[1.5px] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
