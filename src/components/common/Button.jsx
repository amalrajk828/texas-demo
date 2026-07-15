import React from "react";

/**
 * Reusable Button component with multiple variants, sizes, and micro-animations.
 * 
 * Props:
 * - children: React nodes (text, icons)
 * - onClick: Function called on click
 * - type: 'button' | 'submit' | 'reset'
 * - variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - disabled: Boolean
 * - className: Additional custom tailwind classes
 * - icon: Optional React component/icon to show next to text
 * - iconPosition: 'left' | 'right'
 */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  icon: Icon = null,
  iconPosition = "left",
  ...props
}) {
  // Base classes for a premium button with focus states, rounded corners, and transitions
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  // Variant mappings using the brand/standard colors
  const variants = {
    primary: "bg-[#e7212b] text-white hover:bg-[#c61922] focus:ring-[#e7212b] shadow-md hover:shadow-lg shadow-red-500/10",
    secondary: "bg-[#0b0d26] text-white hover:bg-[#181c4e] focus:ring-[#0b0d26] shadow-sm",
    outline: "border border-gray-300 text-[#0b0d26] hover:bg-gray-50 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200"
  };

  // Size mappings
  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6.5 py-3.5 text-base gap-2.5"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className={`shrink-0 ${size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={`shrink-0 ${size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}`} />
      )}
    </button>
  );
}
