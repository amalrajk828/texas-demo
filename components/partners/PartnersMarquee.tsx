"use client";

import Image from "next/image";

export type PartnerMarqueeItem = {
  name: string;
  logo: string;
};

function Track({ partners = [] }: { partners?: PartnerMarqueeItem[] }) {
  if (!partners || partners.length === 0) return null;
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {partners.map((p, idx) => (
        <div key={`${p.name}-${idx}`} className="shrink-0 flex items-center justify-center mx-4 sm:mx-5">
          <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 w-44 h-16 flex items-center justify-center shadow-sm">
            <Image
              src={p.logo}
              alt={p.name}
              width={120}
              height={40}
              quality={100}
              className="object-contain max-h-full w-auto"
              style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.15))" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PartnersMarquee({ partners = [] }: { partners?: PartnerMarqueeItem[] }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-6">
        <span
          className="w-8 h-px opacity-40"
          style={{ backgroundColor: "var(--eyebrow-color, #8a302f)" }}
        />
        <span
          className="text-xs font-semibold tracking-[2px] uppercase"
          style={{ color: "var(--eyebrow-color, #8a302f)" }}
        >
          Featured OEM Alliances
        </span>
        <span
          className="w-8 h-px flex-1 opacity-40"
          style={{ backgroundColor: "var(--eyebrow-color, #8a302f)" }}
        />
      </div>

      <div className="relative marquee-container">
        <div className="marquee-wrapper flex w-full" style={{ willChange: "transform" }}>
          <Track partners={partners} />
          <Track partners={partners} />
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          animation: marquee 35s linear infinite;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-container {
          mask-image: linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%);
        }
      `}</style>
    </div>
  );
}
