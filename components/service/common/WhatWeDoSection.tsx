"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface WhatWeDoProps {
  label?: string;
  heading: string;
  paragraphs: string[];
  checklist?: string[];
  buttonText?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
}

export function WhatWeDoSection({
  label = "WHAT WE DO",
  heading,
  paragraphs,
  checklist,
  buttonText = "Get More Information",
  buttonHref = "#contact",
  imageSrc,
  imageAlt,
  badgeTitle,
  badgeSubtitle,
}: WhatWeDoProps) {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Image with Badge Overlay ── */}
          <div
            className="relative fade-up"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10 border border-gray-100 bg-gray-50">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
            </div>

            {/* Red Badge Overlay */}
            {badgeTitle && (
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#e7212b] text-white p-5 sm:p-6 rounded-2xl shadow-xl shadow-[#e7212b]/25 max-w-[280px] sm:max-w-[320px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase opacity-90 mb-1">
                  {badgeTitle}
                </p>
                {badgeSubtitle && (
                  <p className="text-[14px] font-extrabold leading-snug">
                    {badgeSubtitle}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* ── Right Column: Text Content & Checklist ── */}
          <div
            className="fade-up d2"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10.5px] font-bold tracking-[3.5px] uppercase">
                {label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-[2.3rem] font-bold text-[#1f2937] leading-[1.2] mb-6">
              {heading}
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 text-[15px] leading-[1.85] mb-8">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Checklist items */}
            {checklist && checklist.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#e7212b]" strokeWidth={2} />
                    </div>
                    <span className="text-[#1f2937] text-[14px] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {buttonHref && (
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2.5 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20 hover:shadow-xl hover:shadow-[#e7212b]/30"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
