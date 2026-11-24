import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tone?: "light" | "grey" | "white" | "dark";
  variant?: "studio" | "white" | "dark" | "glass";
  background?: "studio" | "white" | "dark" | "glass";
  spacing?: "default" | "compact" | "loose" | "none";
  className?: string;
  id?: string;
}

/**
 * Shared Section component matching Home V3 vertical rhythms and studio background variants.
 * - tone 'light': #ffffff (Clean elevated section, sets light card variables)
 * - tone 'grey': #e2e3e3 (Neutral grey section, sets grey card variables)
 * - variant / background 'studio': #e2e3e3 (Neutral grey)
 * - variant / background 'white': #ffffff (Clean elevated section)
 * - variant / background 'dark': #141414 (Dark contrast section)
 * - variant / background 'glass': translucent studio glass
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
    tone,
    variant = "studio",
    background,
    spacing = "default",
    className = "",
    id,
    ...props
  },
  ref
) {
  const activeVariant = background || variant;

  const bgClasses = {
    studio: "section-tone-grey bg-[#ffffff] text-[#1a1a1a]",
    white: "section-tone-light bg-[#ffffff] text-[#1a1a1a]",
    dark: "bg-[#141414] text-[#f5f5f5]",
    glass: "bg-[rgba(255,255,255,0.92)] backdrop-blur-md text-[#1a1a1a]",
  };

  const toneClass = tone
    ? tone === "light" || tone === "white"
      ? "section-tone-light bg-[#ffffff] text-[#1a1a1a]"
      : tone === "dark"
      ? "bg-[#141414] text-[#f5f5f5]"
      : "section-tone-grey bg-[#ffffff] text-[#1a1a1a]"
    : bgClasses[activeVariant];

  const spacingClasses = {
    default: "py-16 sm:py-20 lg:py-24",
    compact: "py-10 sm:py-14",
    loose: "py-20 sm:py-28 lg:py-32",
    none: "py-0",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`relative w-full ${toneClass} ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});

export default Section;
