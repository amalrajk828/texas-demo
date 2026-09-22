import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustryStat, IndustryHighlight } from "./types";

export default function IndustryHero({
  name,
  breadcrumbLabel,
  image,
  alt,
  Icon,
  description,
  tags,
  stats,
  highlights,
}: {
  name: string;
  breadcrumbLabel: string;
  image: string;
  alt: string;
  Icon: LucideIcon;
  description: string;
  tags: string[];
  stats: IndustryStat[];
  highlights: IndustryHighlight[];
}) {
  return (
    <section className="relative overflow-hidden min-h-[480px] flex flex-col justify-end">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0B0D26]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/50 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8 w-full">
        <nav className="flex items-center gap-2 mb-6 text-[14px] text-white/50 flex-wrap">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href="/industries/" className="hover:text-white/70 transition-colors">Industries</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-white/60">{breadcrumbLabel}</span>
        </nav>

        <div className="flex items-start gap-8 lg:gap-10 mb-8">
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
                Industry Solutions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] mb-5">
              {name}{" "}
              <em className="not-italic text-white">Industry</em>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[14px] text-white/55 tracking-wide border border-white/15 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3 shrink-0 w-[240px] ml-auto">
            {highlights.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <h.icon className="w-5 h-5 text-[#e7212b] shrink-0" strokeWidth={1.5} />
                <span className="text-white/70 text-[13px] leading-snug">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white/[0.06] backdrop-blur-xl border-t border-white/[0.10]">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/[0.08]">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 text-center">
              <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
              <p className="text-[14px] text-white/40 tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
