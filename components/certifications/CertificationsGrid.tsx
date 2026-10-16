"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award, Eye, X, ZoomIn, Download } from "lucide-react";
import CardGrid from "@/components/v3/CardGrid";

export interface CertificationItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

interface CertificationsGridProps {
  items: CertificationItem[];
}

export default function CertificationsGrid({ items }: CertificationsGridProps) {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  const closeLightbox = useCallback(() => setActiveCert(null), []);

  useEffect(() => {
    if (!activeCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCert, closeLightbox]);

  return (
    <>
      <CardGrid max={4}>
        {items.map((cert, idx) => (
          <div
            key={idx}
            className="group rounded-[30px] bg-white border border-black/[0.06] overflow-hidden flex flex-col justify-between shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[0_15px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-500"
          >
            <div>
              {/* Certificate Image Frame */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative aspect-[4/3] w-full bg-[#f8f7f5] p-6 flex items-center justify-center cursor-pointer overflow-hidden border-b border-black/[0.04]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="px-4 py-2 rounded-full bg-white/95 text-[#1a1c20] text-[12px] font-semibold flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5 text-[#6b191b]" />
                    <span>View Certificate</span>
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-black/[0.06] text-[11px] font-mono font-bold text-[#6b191b]">
                  Verified
                </div>
              </div>

              {/* Text Block */}
              <div className="p-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b7280] font-semibold block mb-1">
                  {cert.subtitle}
                </span>
                <h3 className="font-heading text-[19px] font-bold text-[#1a1c20] group-hover:text-[#6b191b] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] text-[#4b5563] leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="px-6 pb-6 pt-2">
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="w-full py-2.5 px-4 rounded-[14px] bg-[#6b191b]/[0.08] hover:bg-[#6b191b] text-[#6b191b] hover:text-white text-[12.5px] font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Accreditation</span>
              </button>
            </div>
          </div>
        ))}
      </CardGrid>

      {/* ── Certificate Lightbox Modal ── */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b191b] font-bold">
                  Official Credential
                </span>
                <h3 className="font-heading text-[20px] sm:text-[22px] font-bold text-[#1a1c20]">
                  {activeCert.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-[#ece9e6] hover:bg-[#1a1c20] text-[#1a1c20] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Preview */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] my-4 bg-[#f8f7f5] rounded-[18px] p-4 flex items-center justify-center overflow-hidden">
              <Image
                src={activeCert.src}
                alt={activeCert.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[13px] text-[#4b5563]">
              <span>{activeCert.subtitle}</span>
              <a
                href={activeCert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#6b191b] hover:underline"
              >
                <Download className="w-4 h-4" />
                <span>Open Original File</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
