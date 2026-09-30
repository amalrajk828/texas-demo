"use client";

import { useState, useEffect } from "react";

const STAGES = [
  { id: "hero-stage", label: "01 Overview" },
  { id: "disciplines-stage", label: "02 What We Do" },
  { id: "sectors-stage", label: "03 Industries" },
  { id: "solutions-stage", label: "04 Solutions & Partners" },
  { id: "profile-stage", label: "05 About Us & Certs" },
  { id: "testimonials-stage", label: "06 Vision & Trust" },
  { id: "rfq-stage", label: "07 Get In Touch" },
];

export default function V3SideRail() {
  const [activeStage, setActiveStage] = useState("hero-stage");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      for (const stage of STAGES) {
        const el = document.getElementById(stage.id);
        if (el) {
          const top = el.offsetTop - 180;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveStage(stage.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label="Page Sections"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 bg-white/85 backdrop-blur-md p-2.5 rounded-full shadow-[0_8px_30px_rgba(17,28,44,0.12)] border border-white/60"
    >
      {STAGES.map((stage, idx) => {
        const isActive = activeStage === stage.id;
        return (
          <div key={stage.id} className="flex flex-col items-center gap-3">
            {idx > 0 && <div className="w-0.5 h-3 bg-[#d9e3f3]" />}
            <button
              type="button"
              onClick={() => scrollToStage(stage.id)}
              className="group relative flex items-center justify-center w-7 h-7 rounded-full transition-all focus:outline-none"
              aria-label={stage.label}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-primary-container scale-125 shadow-sm"
                    : "w-2 h-2 bg-[#555f6c] group-hover:bg-primary-container group-hover:scale-125"
                }`}
              />
              <span className="absolute right-9 px-3 py-1 bg-[#263142] text-[#ebf1ff] font-label-md text-label-md rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 whitespace-nowrap shadow-lg">
                {stage.label}
              </span>
            </button>
          </div>
        );
      })}
    </aside>
  );
}
