"use client";

import React, { useState } from "react";
import PurpleHeroBubble from "./PurpleHeroBubble";

export interface BlogHeroVideoProps {
  videoSrcMp4?: string;
  videoSrcWebm?: string;
  posterSrc?: string;
  className?: string;
}

/**
 * BlogHeroVideo
 * 
 * Renders the photorealistic 4K seamless looping video background of the 3D iridescent
 * glass sphere (generated from Kling / Runway / Luma / Pika) with a seamless fallback
 * to the smooth zero-gravity liquid purple bubble effect.
 */
export default function BlogHeroVideo({
  videoSrcMp4 = "/videos/blog-hero-bubble.mp4",
  videoSrcWebm = "/videos/blog-hero-bubble.webm",
  posterSrc = "/images/blog-hero-bubble.jpg",
  className = "",
}: BlogHeroVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Fallback & Baseline Layer: Smooth Morphing Purple Bubble */}
      {(!videoLoaded || videoError) && (
        <PurpleHeroBubble />
      )}

      {/* Primary Video Layer (Seamless Looping 4K AI Render) */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />}
        </video>
      )}

      {/* Subtle vignette scrim ensuring crisp hero text contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,15,0.08) 0%, rgba(10,10,15,0.42) 65%, rgba(10,10,15,0.85) 100%)",
        }}
      />
    </div>
  );
}
