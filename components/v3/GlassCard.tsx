import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function GlassCard({
  children,
  className = "",
  innerClassName = "",
  ...props
}: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      <div className={`glass-layer ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
