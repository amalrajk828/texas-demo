import React from "react";
import { Settings2, CheckCircle2, Building2 } from "lucide-react";

export type ProductInfoProps = {
  keyApplications: string[];
  keyBenefits: string[];
  industries: string[];
};

export default function ProductInfoColumns({
  keyApplications,
  keyBenefits,
  industries,
}: ProductInfoProps) {
  return (
    <section className="bg-[#F8F9FA] py-16 border-t border-b border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Key Applications */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E8F0] border-t-4 border-t-[#e7212b] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#e7212b]/10 flex items-center justify-center shrink-0">
                <Settings2 className="w-5 h-5 text-[#e7212b]" strokeWidth={2} />
              </div>
              <h3 className="text-[#1A1A2E] text-lg font-bold">Key Applications</h3>
            </div>
            <ul className="space-y-3.5 text-[#555770] text-[14px] leading-relaxed flex-1">
              {keyApplications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#e7212b] font-bold text-base leading-none select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Key Benefits / Features */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E8F0] border-t-4 border-t-[#e7212b] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#e7212b]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#e7212b]" strokeWidth={2} />
              </div>
              <h3 className="text-[#1A1A2E] text-lg font-bold">Key Benefits / Features</h3>
            </div>
            <ul className="space-y-3.5 text-[#555770] text-[14px] leading-relaxed flex-1">
              {keyBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#e7212b] font-bold text-base leading-none select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries Served */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E8F0] border-t-4 border-t-[#e7212b] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#e7212b]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#e7212b]" strokeWidth={2} />
              </div>
              <h3 className="text-[#1A1A2E] text-lg font-bold">Industries Served</h3>
            </div>
            <ul className="space-y-3.5 text-[#555770] text-[14px] leading-relaxed flex-1">
              {industries.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#e7212b] font-bold text-base leading-none select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
