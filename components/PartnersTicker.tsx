"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/homecompanies/SICK-1.jpg",         alt: "SICK Sensor Intelligence"  },
  { src: "/homecompanies/Mist.jpeg",           alt: "Mitsubishi Electric"        },
  { src: "/homecompanies/PyroTech.jpg",        alt: "Pyrotech Workspace"         },
  { src: "/homecompanies/FaureHerman.png",     alt: "Faure Herman Ultraflux"     },
  { src: "/homecompanies/Omni.png",            alt: "Omni Flow Computers"        },
  { src: "/homecompanies/bis.svg",             alt: "BIS"                        },
  { src: "/homecompanies/Meter-Engineer.jpeg", alt: "Meter Engineers"            },
  { src: "/homecompanies/KEP.jpeg",            alt: "KEP"                        },
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
            className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
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
