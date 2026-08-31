import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PartnerHeroProps {
  name: string;
  logo: string;
  country: string;
  relationship: string;
  product: string;
}

export default function PartnerHero({ name, logo, country, relationship, product }: PartnerHeroProps) {
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
          background: "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[14px] text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/partners/" className="hover:text-white transition-colors">
            Global Network
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white">{name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Logo card */}
          <div className="shrink-0 w-40 h-28 rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center p-4">
            <Image
              src={logo}
              alt={name}
              width={220}
              height={80}
              quality={100}
              className="object-contain max-h-full w-auto"
              style={{ mixBlendMode: "screen" }}
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-medium tracking-[2.5px] uppercase">
                {relationship}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
              {name}
            </h1>

            <p className="text-white/70 text-base max-w-2xl mb-6">
              {product}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/70">
                <span className="text-[10px] font-bold tracking-[1.5px] text-[#e7212b]">
                  {country}
                </span>
              </span>
              <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-white/70">
                {relationship}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
