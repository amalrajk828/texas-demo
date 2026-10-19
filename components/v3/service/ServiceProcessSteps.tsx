import React from "react";
import CardGrid from "@/components/v3/CardGrid";
import type { ServiceProcessStep } from "./types";

interface ServiceProcessStepsProps {
  steps: ServiceProcessStep[];
}

export default function ServiceProcessSteps({ steps }: ServiceProcessStepsProps) {
  return (
    <CardGrid max={4}>
      {steps.map((step, idx) => {
        const num = step.stepNumber !== undefined ? step.stepNumber : idx + 1;
        const formattedNum = String(num).padStart(2, "0");

        return (
          <div
            key={step.title || idx}
            className="glass-card service-process-card group relative flex flex-col h-full flex-1 text-center items-center overflow-hidden p-6 sm:p-7"
          >
            {/* ── 4. Thin 3px #8a302f top accent bar, clipped by card border radius ── */}
            <div className="process-card-top-bar" aria-hidden="true" />

            <div className="glass-layer flex flex-col h-full flex-1 w-full text-center items-center">
              {/* Top row: STEP {num} & Watermark Number */}
              <div className="w-full flex items-center justify-between mb-4">
                {/* ── 1. STEP label in #8a302f, mono font & letter-spacing ── */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a302f] font-mono leading-none">
                  STEP {num}
                </span>

                {/* ── 2. Watermark Number: #8a302f at 45% opacity, 100% on card hover ── */}
                <span className="process-card-num text-[13px] font-bold font-mono leading-none">
                  {formattedNum}
                </span>
              </div>

              {/* Title & Description: dark title (#1a1a1a), gray description (#595956) */}
              <div className="w-full flex-1 flex flex-col items-center text-center">
                <h3 className="font-heading text-[16px] sm:text-[17px] font-bold text-[#1a1a1a] mb-2.5 leading-[1.3] line-clamp-2 min-h-0 sm:min-h-[calc(2*1.3em)] text-balance">
                  {step.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-[#595956] leading-[1.65] flex-1 mb-6 line-clamp-4 sm:min-h-[calc(4*1.65em)]">
                  {step.description}
                </p>
              </div>

              {/* ── 3. Small divider line: #8a302f, width animates 38px -> 64px on hover ── */}
              <div className="process-card-divider" aria-hidden="true" />
            </div>
          </div>
        );
      })}
    </CardGrid>
  );
}
