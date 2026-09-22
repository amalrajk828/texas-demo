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
          className="shrink-0 flex items-center justify-center mx-8 sm:mx-12"
        >
          <Link
            href={p.href.startsWith("/solutions/") ? p.href : `/partners/${p.slug}/`}
            className="block group"
            aria-label={p.name}
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={220}
              height={80}
              quality={100}
              className="object-contain h-14 sm:h-16 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
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
      className="relative py-8 overflow-hidden select-none border-y"
      style={{
        background: "var(--bg-alt, #070503)",
        borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
      }}
    >
      <div className="flex justify-center mb-6">
        <Link
          href="/partners/"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[4px] bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-medium text-white/80 tracking-[2px] uppercase hover:border-[var(--border-active)] transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
          <span>Trusted Technology Partners</span>
        </Link>
      </div>

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
