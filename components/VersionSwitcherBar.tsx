"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Only include active demo variations (V1 - V4)
const VERSIONS = [
  { id: "home-v1", label: "V1", href: "/demo/home-v1" },
  { id: "home-v2", label: "V2", href: "/demo/home-v2" },
  { id: "home-v3", label: "V3", href: "/demo/home-v3" },
  { id: "home-v4", label: "V4", href: "/demo/home-v4" },
];

export default function VersionSwitcherBar() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Demo Version Switcher"
      className="fixed bottom-0 inset-x-0 z-[9999] h-12 sm:h-14 bg-[#0B0D26]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.6)] flex items-center justify-center px-4"
    >
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto py-1 max-w-full">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mr-1 sm:mr-2 select-none shrink-0">
          Preview
        </span>
        {VERSIONS.map((item) => {
          const isActive = pathname
            ? pathname === item.href ||
              pathname.startsWith(`${item.href}/`) ||
              pathname === `/${item.id}` ||
              pathname.startsWith(`/${item.id}/`)
            : false;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 select-none ${
                isActive
                  ? "bg-white text-zinc-950 shadow-[0_0_12px_rgba(255,255,255,0.4)] ring-1 ring-white"
                  : "text-zinc-300 bg-white/5 hover:bg-white/15 hover:text-white border border-white/10"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
