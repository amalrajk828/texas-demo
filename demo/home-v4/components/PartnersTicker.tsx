"use client";

import Image from "next/image";
import Link from "next/link";
import { ALL_PARTNERS } from "@/lib/partners";

function Track() {
  return (
    <div className="partners-track flex shrink-0 items-center">
      {ALL_PARTNERS.map((p) => (
        <div
          key={p.slug}
          className="shrink-0 flex items-center justify-center mx-10 sm:mx-14"
        >
          <Link
            href={p.href.startsWith("/solutions/") ? p.href : `/partners/${p.slug}/`}
            className="block"
            aria-label={p.name}
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={220}
              height={80}
              quality={100}
              style={{ mixBlendMode: "multiply" }}
              className="object-contain h-16 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function PartnersTicker() {
  return (
    <section
      className="relative py-7 overflow-hidden select-none border-y"
      style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.05)" }}
    >
      <Link href="/partners/" className="block text-center text-[10px] font-bold tracking-[4px] uppercase mb-5 hover:opacity-70 transition-opacity" style={{ color: "rgba(0,0,0,0.60)" }}>
        Trusted Technology Partners
      </Link>

      <div
        className="partners-wrapper flex w-full"
        style={{ willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>

      <style>{`
        .partners-wrapper {
          animation: marquee 22s linear infinite;
        }
        .partners-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
