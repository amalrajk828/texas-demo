"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, X, Calendar } from "lucide-react";
import type { Video } from "@/lib/videos";
import CardGrid from "@/components/v3/CardGrid";

interface V3VideoGridProps {
  videos: Video[];
}

export default function V3VideoGrid({ videos }: V3VideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const closeLightbox = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo, closeLightbox]);

  return (
    <>
      <CardGrid max={3}>
        {videos.map((video) => (
          <div
            key={video.id}
            id={video.id}
            onClick={() => setActiveVideo(video)}
            className="group rounded-[30px] bg-white border border-black/[0.06] overflow-hidden flex flex-col h-full flex-1 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[0_15px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
          >
            {/* Video Thumbnail Frame */}
            <div className="relative aspect-[16/9] w-full bg-[#1a1c20] overflow-hidden flex-none">
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#6b191b] text-white flex items-center justify-center shadow-lg shadow-[#6b191b]/40 transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-white text-[11px] font-mono font-medium">
                Watch Demo
              </div>
            </div>

            {/* Text Block */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#6b7280] mb-2 font-semibold h-[1.4em] min-h-[1.4em]">
                <Calendar className="w-3.5 h-3.5 text-[#6b191b]" />
                <time dateTime={video.uploadDate}>
                  {new Date(video.uploadDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h3 className="font-heading text-[17px] sm:text-[18px] font-bold text-[#1a1c20] group-hover:text-[#6b191b] transition-colors leading-[1.3] line-clamp-2 sm:min-h-[calc(2*1.3em)]">
                {video.title}
              </h3>
              <p className="mt-2.5 text-[13px] text-[#4b5563] leading-[1.55] line-clamp-3 sm:min-h-[calc(3*1.55em)] flex-1">
                {video.description}
              </p>
            </div>

            {/* Bottom Link Bar */}
            <div className="mt-auto px-6 pb-6 pt-2 border-t border-black/[0.04] flex items-center justify-between text-[12.5px] font-semibold text-[#6b191b]">
              <span>Launch Video Walkthrough</span>
              <div className="w-6 h-6 rounded-full bg-[#6b191b]/[0.08] flex items-center justify-center group-hover:bg-[#6b191b] group-hover:text-white transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </CardGrid>

      {/* ── Video Lightbox Modal ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141414] rounded-[28px] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-[#1a1a1a] border-b border-white/10">
              <h3 className="text-white font-heading text-[16px] sm:text-[18px] font-bold truncate pr-4">
                {activeVideo.title}
              </h3>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Close Video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Iframe Aspect Video */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Description Footer */}
            <div className="p-4 sm:p-5 bg-[#1a1a1a] text-[#9ca3af] text-[13px] leading-relaxed">
              <p>{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
