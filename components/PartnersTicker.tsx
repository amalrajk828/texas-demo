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
    <section className="bg-white border-b border-gray-100 py-6 overflow-hidden select-none">
      <p className="text-center text-[10px] font-semibold tracking-[3.5px] uppercase text-gray-300 mb-5">
        Trusted Partners &amp; Brands
      </p>

      {/* Two identical tracks side-by-side — when track 1 scrolls fully left, track 2 is already in view, creating a seamless loop */}
      <div
        className="partners-wrapper flex w-full"
        style={{ willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>

      <style>{`
        .partners-wrapper {
          animation: marquee 30s linear infinite;
        }
        .partners-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        /* Fade edges for a polished look */
        section:has(.partners-wrapper)::before,
        section:has(.partners-wrapper)::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        section:has(.partners-wrapper) {
          position: relative;
        }
        section:has(.partners-wrapper)::before {
          left: 0;
          background: linear-gradient(to right, white 30%, transparent);
        }
        section:has(.partners-wrapper)::after {
          right: 0;
          background: linear-gradient(to left, white 30%, transparent);
        }
      `}</style>
    </section>
  );
}
