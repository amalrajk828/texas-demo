import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import IndustryProductCardMotion from "./IndustryProductCardMotion";

export default function IndustryFeatureCard({
  name,
  slug,
  Icon,
  image,
  sub,
  desc,
  animationDelay = 0,
}: {
  name: string;
  slug: string;
  Icon: LucideIcon;
  image: string;
  sub: string;
  desc: string;
  animationDelay?: number;
}) {
  return (
    <IndustryProductCardMotion delay={animationDelay}>
      <Link
        href={`/industries/${slug}/`}
        className="group block rounded-2xl overflow-hidden bg-white/[0.10] backdrop-blur-xl border border-white/[0.12] hover:border-[#e7212b]/40 transition-all duration-500 shadow-[0_4px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_40px_rgba(231,33,43,0.12)]"
        style={
          {
            "--tw-shadow-color": "rgba(231,33,43,0.12)",
            "--tw-shadow": "var(--tw-shadow-colored)",
          } as React.CSSProperties
        }
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
          style={{ background: "radial-gradient(circle, rgba(231,33,43,0.16) 0%, transparent 70%)" }}
        />
        <div className="relative h-60 overflow-hidden bg-[#0B0D26]">
          <Image
            src={image}
            alt={`${name} industry solutions — Texas Technical Services`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26]/80 via-[#0B0D26]/20 to-transparent" />

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 text-[9px] text-white/75 tracking-[2px] uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/[0.12]">
              <span className="w-1 h-1 rounded-full bg-[#e7212b]" />
              Industry
            </span>
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-10">
            <h2 className="text-white font-medium text-2xl leading-tight group-hover:text-[#e7212b] transition-colors duration-200">
              {name}
            </h2>
            <p className="text-white/80 text-xs mt-0.5 tracking-wide">
              {sub}
            </p>
          </div>
        </div>

        <div className="px-5 pt-4 pb-5">
          <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-4">
            {desc}
          </p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[#e7212b] text-[13px] font-medium group-hover:gap-2.5 transition-all duration-200">
              Read More
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="block h-px w-6 bg-[#e7212b]/25 group-hover:w-14 transition-all duration-300 ease-out" />
          </div>
        </div>

        <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </IndustryProductCardMotion>
  );
}
