import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  badgeVariant?: "maroon" | "dark" | "outline";
  className?: string;
}

/**
 * SectionHeading adhering to Home V3 design:
 * - Eyebrow: small, uppercase, bold, wide letter-spacing, maroon/dark red (#6b191b)
 * - Heading: bold Sora typography, tight letter-spacing (-0.025em), near-black (#1a1a1a)
 * - Body: medium grey (#595956), comfortable line-height, centered max-width (max-w-[720px])
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  badgeVariant = "maroon",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const badgeStyles = {
    maroon:
      "bg-[rgba(107,25,27,0.08)] text-[#6b191b] border border-[rgba(107,25,27,0.16)]",
    dark:
      "bg-[rgba(26,26,26,0.08)] text-[#1a1a1a] border border-[rgba(26,26,26,0.14)]",
    outline:
      "bg-transparent text-[#6b191b] border border-[#6b191b]/30",
  };

  return (
    <div
      className={`max-w-[54rem] mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3.5 ${isCenter ? "flex justify-center" : ""}`}>
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] ${badgeStyles[badgeVariant]}`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold tracking-[-0.025em] text-[#1a1a1a] leading-[1.16] mb-4 text-balance">
        {title}
      </h2>

      {description && (
        <div className="text-[15px] sm:text-[16.5px] text-[#595956] leading-[1.65]">
          {description}
        </div>
      )}
    </div>
  );
}
