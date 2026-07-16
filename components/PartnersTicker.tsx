"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/about/mitsubishi-electric.png", alt: "Mitsubishi Electric" },
  { src: "/about/endress-hauser.jpg",      alt: "Endress+Hauser" },
  { src: "/about/sick.jpg",                alt: "SICK Sensor Intelligence" },
  { src: "/about/meter-engineers.jpg",     alt: "Meter Engineers" },
  { src: "/about/faure-herman.jpg",        alt: "Faure Herman" },
  { src: "/about/omni.png",                alt: "OMNI Flow Computers" },
  { src: "/about/kem-kuppers.png",         alt: "KEM Küppers" },
  { src: "/about/tek-trol.jpg",            alt: "Tek-Trol" },
  { src: "/about/rockwin.jpg",             alt: "Rockwin" },
  { src: "/about/kurz-instruments.jpg",    alt: "Kurz Instruments" },
  { src: "/about/hms-networks.jpg",        alt: "HMS Networks" },
  { src: "/about/pyrotech.jpg",            alt: "Pyrotech Workspace" },
  { src: "/about/autocontrol.jpg",         alt: "Autocontrol" },
  { src: "/about/euromag.jpg",             alt: "Euromag International" },
  { src: "/about/texaflow.svg",            alt: "Texaflow" },
  { src: "/about/novus-automation.jpg",    alt: "NOVUS Automation" },
  { src: "/about/bis.png",                 alt: "BIS (Balaji Industrial Services)" },
  { src: "/about/space-ai.jpg",            alt: "Space AI" },
  { src: "/about/pws-floors.jpg",          alt: "PWS Floor Solutions" },
];

function Track() {
  return (
    <div className="partners-track flex shrink-0 items-center" aria-hidden>
      {PARTNERS.map((p, i) => (
        <div
          key={i}
          className="shrink-0 flex items-center justify-center mx-10 sm:mx-14"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={220}
            height={80}
            quality={100}
            style={{ mixBlendMode: "multiply" }}
            className="object-contain h-16 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
          />
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
      <p className="text-center text-[10px] font-bold tracking-[4px] uppercase mb-5" style={{ color: "rgba(0,0,0,0.40)" }}>
        Trusted Technology Partners
      </p>

      {/* Two identical tracks — seamless marquee loop */}
      <div
        className="partners-wrapper flex w-full"
        style={{ willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>

      {/* Fade edges with CSS mask for reliability */}
      <style>{`
        .partners-wrapper {
          animation: marquee 22s linear infinite;
        }
        .partners-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        section:has(.partners-wrapper) {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
      `}</style>
    </section>
  );
}
