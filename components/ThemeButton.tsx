"use client";
import Link from "next/link";
import type { ComponentProps } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function ThemePrimaryLink({ href = "#", children, className = "", external = false }: Props) {
  const base =
    "inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px]";

  const style = {
    background: "var(--color-brand-red)",
  } as React.CSSProperties;

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "var(--color-brand-red-dark)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "var(--color-brand-red)";
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className={`${base} ${className}`} style={style}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`} style={style}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </Link>
  );
}

export function ThemeCTALink({ href = "#", children, className = "" }: Props) {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "var(--color-brand-red-dark)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "var(--color-brand-red)";
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 ${className}`}
      style={{ background: "var(--color-brand-red)" } as React.CSSProperties}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </Link>
  );
}
