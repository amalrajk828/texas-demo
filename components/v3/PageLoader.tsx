"use client";

import React, { useEffect, useState } from "react";

interface PageLoaderProps {
  isRouteTransition?: boolean;
}

export default function PageLoader({ isRouteTransition = false }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (isRouteTransition) return;

    const startTime = Date.now();
    const minDisplayTime = 500;
    const maxDisplayTime = 3000;

    const handleReady = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setMounted(false), 300);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady, { once: true });
    }

    const safetyTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setMounted(false), 300);
    }, maxDisplayTime);

    return () => {
      window.removeEventListener("load", handleReady);
      clearTimeout(safetyTimer);
    };
  }, [isRouteTransition]);

  if (!mounted && !isRouteTransition) return null;

  return (
    <>
      <noscript>
        <style>{`.page-loader-overlay { display: none !important; }`}</style>
      </noscript>
      <div
        role="status"
        aria-label="Loading"
        className={`page-loader-overlay ${!visible && !isRouteTransition ? "is-hidden" : ""}`}
      >
        <div className="loader">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </>
  );
}
