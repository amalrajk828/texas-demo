import React from "react";
import Container from "./Container";
import Button from "./Button";

interface CTASectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  primaryAction?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "crimson" | "dark" | "studio" | "white" | "light";
  className?: string;
}

/**
 * Standard CTA Section component matching Home V3:
 * - Rounded card container with soft shadow
 * - Bold Sora title, pill buttons
 * - Supports "white" / "light" variant for clean, high-contrast light card presentation
 */
export default function CTASection({
  eyebrow = "Ready to Discuss Your Project?",
  title = "Accelerate Your Plant Precision & Compliance",
  subtitle,
  description,
  primaryCta,
  primaryAction,
  secondaryCta,
  secondaryAction,
  variant = "white",
  className = "",
}: CTASectionProps) {
  const resolvedDescription = description ?? subtitle ?? "Speak directly with our senior flow measurement and industrial automation engineers in Kuwait and Dubai for custom technical sizing and quotation.";
  const resolvedPrimary = primaryCta ?? primaryAction ?? { label: "Contact Engineering Team", href: "/contacts/" };
  const resolvedSecondary = secondaryCta ?? secondaryAction ?? { label: "Explore Services", href: "/services/" };

  const isCrimson = variant === "crimson";
  const isDark = variant === "dark";
  const isWhite = variant === "white" || variant === "light";

  return (
    <section className={`py-16 sm:py-24 bg-[#e8e8e6] ${className}`}>
      <Container>
        <div
          className={`relative rounded-[28px] overflow-hidden p-8 sm:p-12 lg:p-16 text-center ${
            isCrimson
              ? "bg-[#6b191b] text-white shadow-[0_24px_50px_rgba(107,25,27,0.3)]"
              : isDark
              ? "bg-[#181818] text-white shadow-[0_24px_50px_rgba(0,0,0,0.25)]"
              : "bg-white border border-black/[0.08] text-[#1a1a1a] shadow-[0_24px_50px_rgba(0,0,0,0.07)]"
          }`}
        >
          {/* Subtle ambient lighting highlight for dark/crimson only */}
          {!isWhite && (
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.7) 0%, transparent 70%)",
              }}
            />
          )}

          <div className="relative z-10 max-w-[760px] mx-auto">
            {eyebrow && (
              <span
                className={`inline-block px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] mb-4 ${
                  isCrimson
                    ? "bg-white/15 text-white border border-white/20"
                    : isDark
                    ? "bg-[rgba(107,25,27,0.2)] text-[#ff6b6e] border border-[#6b191b]/40"
                    : "bg-[rgba(107,25,27,0.08)] text-[#6b191b] border border-[rgba(107,25,27,0.16)]"
                }`}
              >
                {eyebrow}
              </span>
            )}

            <h2 className="font-heading text-[28px] sm:text-[38px] lg:text-[46px] font-black tracking-[-0.03em] leading-[1.14] text-[#1a1a1a] mb-5">
              {title}
            </h2>

            {resolvedDescription && (
              <p
                className={`text-[15px] sm:text-[17px] leading-[1.65] max-w-[620px] mx-auto mb-9 ${
                  isCrimson ? "text-white/85" : isDark ? "text-white/70" : "text-[#595956]"
                }`}
              >
                {resolvedDescription}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4">
              {resolvedPrimary && (
                <Button
                  href={resolvedPrimary.href}
                  variant={isCrimson ? "secondary" : "primary"}
                  size="lg"
                >
                  {resolvedPrimary.label}
                </Button>
              )}
              {resolvedSecondary && (
                <Button
                  href={resolvedSecondary.href}
                  variant={isCrimson ? "dark" : isDark ? "outline" : "secondary"}
                  size="lg"
                  className={
                    isCrimson
                      ? "bg-black/30 hover:bg-black/50 text-white border border-white/20"
                      : "border-black/[0.12] text-[#1a1a1a]"
                  }
                >
                  {resolvedSecondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
