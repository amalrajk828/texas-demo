"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Play } from "lucide-react";
import type { Video } from "@/lib/videos";

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      {/* ══ GRID ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Video Library
            </span>
          </div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold text-[#181D4E]">
              Latest Videos
            </h2>
            <span className="text-gray-400 text-[12px]">
              {videos.length} Videos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <button
                key={video.id}
                id={video.id}
                onClick={() => setActive(video)}
                className={`fade-up d${i + 1} group text-left rounded-2xl border border-[#e8eaf0] hover:border-[#e7212b]/40 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#e7212b]/90 flex items-center justify-center shadow-lg shadow-[#e7212b]/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <time
                    dateTime={video.uploadDate}
                    className="text-[11px] text-gray-400 font-medium uppercase tracking-wide"
                  >
                    {new Date(video.uploadDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-[#181D4E] font-semibold text-lg mt-2 mb-2 group-hover:text-[#e7212b] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LIGHTBOX ═══════════════════════════════════════════ */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-[201] w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video + info panel */}
          <div
            className="w-[92vw] max-w-[960px] animate-in zoom-in-95 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Player */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
