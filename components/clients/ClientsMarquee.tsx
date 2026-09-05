"use client";

import Image from "next/image";

type Client = {
  name: string;
  logo: string;
  url: string;
  external: boolean;
};

function Track({ clients }: { clients: Client[] }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {clients.map((c) => (
        <div key={c.name} className="shrink-0 flex items-center justify-center mx-4 sm:mx-5">
          <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 w-44 h-16 flex items-center justify-center shadow-sm">
            <Image src={c.logo} alt={c.name} width={120} height={40} quality={100}
              className="object-contain max-h-full w-auto"
              style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.35))", mixBlendMode: c.logo.includes("alkhorayef") ? "multiply" : undefined }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ClientsMarquee({ clients }: { clients: Client[] }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-[#0891B2]/40" />
        <span className="text-[#0891B2] text-xs font-semibold tracking-[2px] uppercase">
          Featured Clients
        </span>
        <span className="w-8 h-px bg-[#0891B2]/40 flex-1" />
      </div>

      <div className="relative marquee-container">
        <div className="marquee-wrapper flex w-full" style={{ willChange: "transform" }}>
          <Track clients={clients} />
          <Track clients={clients} />
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          animation: marquee 40s linear infinite;
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
