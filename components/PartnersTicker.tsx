"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/homecompanies/mitsubishi-electric.svg", alt: "Mitsubishi Electric" },
  { src: "/homecompanies/endress-hauser.svg",      alt: "Endress+Hauser" },
  { src: "/homecompanies/SICK-1.jpg",              alt: "SICK Sensor Intelligence" },
  { src: "/homecompanies/meter-engineers.svg",     alt: "Meter Engineers" },
  { src: "/homecompanies/FaureHerman.png",         alt: "Faure Herman" },
  { src: "/homecompanies/Omni.png",                alt: "OMNI Flow Computers" },
  { src: "/homecompanies/kem-kuppers.svg",         alt: "KEM Küppers" },
  { src: "/homecompanies/tek-trol.svg",            alt: "Tek-Trol" },
  { src: "/homecompanies/rockwin.svg",             alt: "Rockwin" },
  { src: "/homecompanies/kurz-instruments.svg",    alt: "Kurz Instruments" },
  { src: "/homecompanies/hms-networks.svg",        alt: "HMS Networks" },
  { src: "/homecompanies/PyroTech.jpg",            alt: "Pyrotech Workspace" },
  { src: "/homecompanies/autocontrol.svg",         alt: "Autocontrol" },
  { src: "/homecompanies/euromag.svg",             alt: "Euromag International" },
  { src: "/homecompanies/texaflow.svg",            alt: "Texaflow" },
  { src: "/homecompanies/novus-automation.svg",    alt: "NOVUS Automation" },
  { src: "/homecompanies/bis.svg",                 alt: "BIS" },
  { src: "/homecompanies/space-ai.svg",            alt: "Space AI" },
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
            width={160}
            height={56}
            quality={100}
            className="object-contain max-h-12 w-auto opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
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
