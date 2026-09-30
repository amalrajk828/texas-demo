"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

const VIDEO_PATH = "/v2/hero/bg_vdo.mp4";
const POSTER_PATH = "/v2/hero/bg_vdo-poster.jpg";

type SaveDataConnection = EventTarget & {
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: SaveDataConnection;
};

const backgroundStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 0,
  overflow: "hidden",
  pointerEvents: "none",
  isolation: "isolate",
  contain: "strict",
  backgroundColor: "#eef3f8",
};

const mediaStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

export default function FixedVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnabled, setVideoEnabled] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as NavigatorWithConnection).connection;

    const updatePlaybackMode = () => {
      setVideoEnabled(
        !mobileQuery.matches &&
          !reducedMotionQuery.matches &&
          connection?.saveData !== true,
      );
    };

    updatePlaybackMode();
    mobileQuery.addEventListener("change", updatePlaybackMode);
    reducedMotionQuery.addEventListener("change", updatePlaybackMode);
    connection?.addEventListener("change", updatePlaybackMode);

    return () => {
      mobileQuery.removeEventListener("change", updatePlaybackMode);
      reducedMotionQuery.removeEventListener("change", updatePlaybackMode);
      connection?.removeEventListener("change", updatePlaybackMode);
    };
  }, []);

  useEffect(() => {
    if (!videoEnabled) return;

    const syncVisibility = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // The poster stays visible if a browser blocks autoplay.
        });
      }
    };

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, [videoEnabled]);

  return (
    <div aria-hidden="true" style={backgroundStyle}>
      <div
        style={{
          ...mediaStyle,
          zIndex: 0,
          backgroundImage: `url(${POSTER_PATH})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {videoEnabled && (
        <video
          ref={videoRef}
          src={VIDEO_PATH}
          poster={POSTER_PATH}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          style={{
            ...mediaStyle,
            zIndex: 1,
            transform: "translateZ(0)",
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.58) 0%, rgba(244, 248, 252, 0.54) 46%, rgba(224, 235, 245, 0.52) 100%)",
        }}
      />
    </div>
  );
}
