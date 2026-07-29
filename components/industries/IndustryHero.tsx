import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustryStat } from "./types";

export default function IndustryHero({
  name,
  breadcrumbLabel,
  image,
  alt,
  Icon,
  description,
  tags,
  stats,
}: {
  name: string;
  breadcrumbLabel: string;
  image: string;
  alt: string;
  Icon: LucideIcon;
  description: string;
  tags: string[];
  stats: IndustryStat[];
}) {
  return (
    <section className="relative overflow-hidden min-h-[480px] flex items-end">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#000000] blueprint-grid blueprint-dot-grid/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/40 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-28">
        <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/industries/" className="hover:text-white/70 transition-colors">Industries</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/60">{breadcrumbLabel}</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                Industry Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.15] mb-5">
              {name}
              <br />
              <em className="not-italic text-[#e7212b]">Industry</em>
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-white/55 tracking-wide border border-white/15 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-3 shrink-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-5 py-4 text-center min-w-[88px]"
              >
                <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
