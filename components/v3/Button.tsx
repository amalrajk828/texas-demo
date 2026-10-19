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
      "bg-[var(--brand-action,#8a302f)] hover:bg-[var(--brand-action-hover,#6f2423)] text-white font-semibold border border-[var(--brand-action,#8a302f)] shadow-[0_8px_20px_rgba(138,48,47,0.28)] hover:-translate-y-[2px] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--brand-action,#8a302f)] focus-visible:outline-offset-[3px]",
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

  const combinedClasses = `group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.03em] transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        <span>{children}</span>
        {displayArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButton)}>
      <span>{children}</span>
      {displayArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
    </button>
  );
}
