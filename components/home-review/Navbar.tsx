"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, ChevronDown } from "lucide-react";
import data from "@/data/homepage-review.json";
import { motion } from "framer-motion";
import { Navbar1 } from "@/components/ui/navbar-1";
import { useMotionPreference } from "./Motion";
import s from "./review.module.css";

const items = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "/products/" },
];
type NavEntry = { label: string; href: string; children: NavEntry[] };
function MenuLinks({
  entries,
  onSelect,
}: {
  entries: NavEntry[];
  onSelect?: () => void;
}) {
  return (
    <>
      {entries.map((entry) => (
        <div key={entry.href}>
          <a href={entry.href} onClick={onSelect}>
            {entry.label}
          </a>
          {entry.children.length > 0 && (
            <div className={s.navSubgroup}>
              <MenuLinks entries={entry.children} onSelect={onSelect} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default function Navbar({ glass = false }: { glass?: boolean }) {
  const navigation: NavEntry[] = glass
    ? data.navigation
    : items.map((item) => ({ ...item, children: [] }));
  const reduced = useMotionPreference();
  const Frame = glass ? Navbar1 : "div";
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  function close() {
    header.current?.querySelectorAll("details").forEach((detail) => {
      detail.open = false;
    });
  }
  return (
    <header
      ref={header}
      className={s.header}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const open = (event.target as HTMLElement).closest("details");
          close();
          open?.querySelector("summary")?.focus();
        }
      }}
    >
      <Frame
        className={`${s.container} ${s.navbar}`}
        {...(glass ? { reduced } : {})}
      >
        <Link
          prefetch={false}
          className={s.brand}
          href={glass ? "/light2/" : "/light1/"}
        >
          <span className={s.logo}>
            <Image
              src="/logo.svg"
              width={glass ? 76 : 50}
              height={glass ? 76 : 50}
              alt=""
            />
          </span>
          <span>
            TEXAS<small>TECHNICAL SERVICES</small>
          </span>
        </Link>
        <nav className={s.desktopNav} aria-label="Main navigation">
          {navigation.map((item) =>
            item.children.length ? (
              <details
                className={s.navDropdown}
                key={item.href}
                name="light2-desktop-navigation"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    event.currentTarget.open = false;
                }}
              >
                <summary>
                  {item.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </summary>
                <nav aria-label={`${item.label} navigation`}>
                  <MenuLinks entries={item.children} onSelect={close} />
                  <a className={s.navViewAll} href={item.href} onClick={close}>
                    View all {item.label.toLowerCase()}
                  </a>
                </nav>
              </details>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={
                  glass && !reduced ? { y: -2, scale: 1.04 } : undefined
                }
              >
                {item.label}
              </motion.a>
            ),
          )}
        </nav>
        <Link
          prefetch={false}
          href="/contacts/"
          className={`${s.button} ${s.navCta}`}
          aria-label="Contact Us"
        >
          <MessageSquare size={18} aria-hidden="true" />
          <span className={s.navContactLabel}>Contact Us</span>
          <ArrowUpRight
            className={s.navContactArrow}
            size={17}
            aria-hidden="true"
          />
        </Link>
        <details
          ref={menu}
          className={s.mobileMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              close();
              menu.current?.querySelector("summary")?.focus();
            }
          }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) close();
          }}
        >
          <summary aria-label="Toggle navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) =>
              item.children.length ? (
                <details className={s.mobileGroup} key={item.href}>
                  <summary>
                    {item.label}
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <div>
                    <MenuLinks entries={item.children} onSelect={close} />
                    <a href={item.href} onClick={close}>
                      View all {item.label.toLowerCase()}
                    </a>
                  </div>
                </details>
              ) : (
                <a key={item.href} href={item.href} onClick={close}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ),
            )}
            <Link href="/contacts/" onClick={close}>
              Contact Us
            </Link>
          </nav>
        </details>
      </Frame>
    </header>
  );
}
