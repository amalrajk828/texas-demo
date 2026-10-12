import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "default" | "sm" | "lg";
  withArrow?: boolean;
  showArrow?: boolean;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Standard Button component adhering to Home V3:
 * - Shape: pill-shaped (rounded-full)
 * - Typography: uppercase/bold, tracking-[0.02em]
 * - Arrow icon: withArrow defaults to true
 * - Variants:
 *   - primary: signature deep crimson (#6b191b), hover (#852023)
 *   - secondary: white glass with border
 *   - dark: #1a1a1a near black
 *   - outline: transparent with crimson or dark border
 */
export default function Button({
  children,
  variant = "primary",
  size = "default",
  withArrow = true,
  showArrow,
  className = "",
  ...props
}: ButtonProps) {
  const displayArrow = showArrow !== undefined ? showArrow : withArrow;
  const variantStyles = {
    primary:
      "bg-[#6b191b] hover:bg-[#852023] text-white shadow-[0_4px_16px_rgba(107,25,27,0.22)] hover:shadow-[0_8px_24px_rgba(107,25,27,0.32)]",
    secondary:
      "bg-white/90 hover:bg-white text-[#1a1a1a] border border-black/[0.1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
    dark:
      "bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
    outline:
      "bg-transparent hover:bg-black/[0.04] text-[#1a1a1a] border border-black/[0.18]",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-[12px]",
    default: "px-7 py-3.5 text-[14px]",
    lg: "px-9 py-4 text-[15px]",
  };

  const combinedClasses = `inline-flex items-center justify-center gap-2.5 rounded-full font-bold uppercase tracking-[0.03em] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        <span>{children}</span>
        {displayArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButton)}>
      <span>{children}</span>
      {displayArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
