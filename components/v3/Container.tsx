import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

/**
 * Shared Container component adhering to Home V3 max-width and responsive padding tokens.
 * - default: max-w-[1420px] (Home V3 standard)
 * - narrow: max-w-[1020px] (for focused content/articles)
 * - wide: max-w-[1600px]
 */
export default function Container({
  children,
  className = "",
  size = "default",
  ...props
}: ContainerProps) {
  const maxWClass =
    size === "narrow"
      ? "max-w-[1020px]"
      : size === "wide"
      ? "max-w-[1600px]"
      : "max-w-[1420px]";

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${maxWClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
