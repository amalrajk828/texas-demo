import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { ProductPageStat } from "./types";

export default function ProductPageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  subtitle,
  stats,
  featured,
  backgroundImage,
  imagePosition,
}: {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  stats?: ProductPageStat[];
  featured?: boolean;
  backgroundImage?: string;
  imagePosition?: string;
}) {
  if (featured && backgroundImage) {
    return (
      <section className="relative overflow-hidden min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: imagePosition || "center center" }}
          />
          <div className="absolute inset-0 bg-[#0B0D26]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D26]/30 via-transparent to-[#0B0D26]/40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl p-8 lg:p-10">
            <nav className="flex items-center gap-2 mb-6 text-[14px] text-white/55 flex-wrap">
              <Link href="/" className="hover:text-white/90 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link href="/products" className="hover:text-white/90 transition-colors">Products</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-white/80">{breadcrumbLabel}</span>
            </nav>

            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-white leading-[1.15] mb-4">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/70 text-[15px] sm:text-base leading-relaxed mb-6 max-w-lg">
                {subtitle}
              </p>
            )}

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 divide-x divide-white/[0.08] border-t border-white/[0.08] pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
                    <p className="text-xl sm:text-2xl font-medium text-[#e7212b]">{s.num}</p>
                    <p className="text-[10px] sm:text-[14px] text-white/70 tracking-wide mt-1 uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#0B0D26] overflow-hidden border-b-4 border-[#e7212b]">
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
            "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <nav className="flex items-center gap-2 text-[14px] text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white">{breadcrumbLabel}</span>
        </nav>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-[#0891B2]" />
          <span className="text-[#0891B2] text-[14px] font-medium tracking-[2.5px] uppercase">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-base max-w-xl">
            {subtitle}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-center"
              >
                <p className="text-white text-[1.4rem] font-black leading-none">{s.num}</p>
                <p className="text-white/70 text-[10px] mt-1.5 font-semibold tracking-[1.5px] uppercase">
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
