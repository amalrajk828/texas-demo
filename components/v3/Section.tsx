import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "studio" | "white" | "dark" | "glass";
  background?: "studio" | "white" | "dark" | "glass";
  spacing?: "default" | "compact" | "loose" | "none";
  className?: string;
  id?: string;
}

/**
 * Shared Section component matching Home V3 vertical rhythms and studio background variants.
 * - variant / background 'studio': #e8e8e6 (Home V3 signature warm studio grey)
 * - variant / background 'white': #ffffff (Clean elevated section)
 * - variant / background 'dark': #141414 (Dark contrast section)
 * - variant / background 'glass': translucent studio glass
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
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
    studio: "bg-[#e8e8e6] text-[#1a1a1a]",
    white: "bg-[#ffffff] text-[#1a1a1a]",
    dark: "bg-[#141414] text-[#f5f5f5]",
    glass: "bg-[rgba(232,232,230,0.85)] backdrop-blur-md text-[#1a1a1a]",
  };

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
      className={`relative w-full ${bgClasses[activeVariant]} ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});

export default Section;
