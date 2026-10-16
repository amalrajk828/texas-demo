import React from "react";
import CardGrid from "@/components/v3/CardGrid";
import type { ServiceProcessStep } from "./types";

interface ServiceProcessStepsProps {
  steps: ServiceProcessStep[];
}

export default function ServiceProcessSteps({ steps }: ServiceProcessStepsProps) {
  return (
    <CardGrid max={3}>
      {steps.map((step, idx) => {
        const num = step.stepNumber !== undefined ? step.stepNumber : idx + 1;
        const formattedNum = String(num).padStart(2, "0");

        return (
          <div
            key={step.title || idx}
            className="glass-card flex flex-col h-full text-center items-center"
          >
            <div className="glass-layer flex flex-col h-full flex-1 w-full text-center items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280] font-mono">
                  Step {num}
                </span>
                <span className="text-[12px] font-bold text-[#6b7280] font-mono">
                  {formattedNum}
                </span>
              </div>
              <div className="w-full flex-1 flex flex-col items-center text-center">
                <h3 className="font-heading text-[17px] font-bold text-[#1a1c20] mb-2.5 leading-snug min-h-0 sm:min-h-[48px] text-balance">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#2b2f36] leading-[1.65] flex-1 mb-6">
                  {step.description}
                </p>
              </div>
              <div className="w-8 h-[2px] bg-[#2b2f36] rounded-full mt-auto" />
            </div>
          </div>
        );
      })}
    </CardGrid>
  );
}
