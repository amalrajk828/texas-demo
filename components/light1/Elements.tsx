import Link from "next/link";
import type { ReactNode } from "react";
import s from "./light1.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className={s.eyebrow}>
      {number && <span>{number} /</span>}
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={s.textLink}>
      {children}
      <Arrow />
    </Link>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  href,
  link,
}: {
  number: string;
  eyebrow: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className={s.sectionHeading}>
      <div>
        <Eyebrow number={number}>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {href && <TextLink href={href}>{link}</TextLink>}
    </div>
  );
}
