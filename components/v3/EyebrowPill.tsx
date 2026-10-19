import React from "react";

export interface EyebrowPillProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

export default function EyebrowPill({
  children,
  text,
  className = "",
}: EyebrowPillProps) {
  const content = text || children;
  return (
    <div
      className={`inline-flex items-center gap-[10px] h-[38px] px-[18px] py-[8px] rounded-full border text-[14px] font-bold uppercase tracking-[0.08em] select-none ${className}`}
      style={{
        backgroundColor: "rgba(138, 48, 47, 0.08)",
        borderColor: "rgba(138, 48, 47, 0.25)",
        color: "var(--brand-action, #8a302f)",
      }}
    >
      <span
        className="w-[8px] h-[8px] rounded-full shrink-0"
        style={{ backgroundColor: "var(--brand-action, #8a302f)" }}
        aria-hidden="true"
      />
      <span>{content}</span>
    </div>
  );
}
