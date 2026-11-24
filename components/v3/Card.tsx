import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "white" | "solid" | "dark";
  padding?: "default" | "compact" | "generous" | "none";
  interactive?: boolean;
  className?: string;
}

/**
 * Standard Card component adhering to Home V3:
 * - Rounded corners: rounded-[20px]
 * - Background: off-white / glass backdrop-blur
 * - Border: subtle border-black/[0.06]
 * - Shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.07)
 */
export default function Card({
  children,
  variant = "glass",
  padding = "default",
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    glass:
      "bg-[#DCDCD9] backdrop-blur-md border border-[#C8C8C5] text-[#1a1a1a] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)]",
    white:
      "bg-[#DCDCD9] border border-[#C8C8C5] text-[#1a1a1a] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]",
    solid:
      "bg-[#DCDCD9] border border-[#C8C8C5] text-[#1a1a1a]",
    dark:
      "bg-[#1c1c1c] border border-white/[0.08] text-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)]",
  };

  const paddingStyles = {
    default: "p-6 sm:p-8",
    compact: "p-4 sm:p-6",
    generous: "p-8 sm:p-10 lg:p-12",
    none: "p-0",
  };

  const interactiveClass = interactive ? "card-interactive" : "";

  return (
    <div
      className={`rounded-[20px] ${variantStyles[variant]} ${paddingStyles[padding]} ${interactiveClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
