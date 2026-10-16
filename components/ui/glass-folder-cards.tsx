"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Folder, FileText, ChevronRight, ArrowUpRight, Plus, MoreHorizontal } from "lucide-react";

export interface GlassFolderFile {
  name: string;
  href?: string;
  meta?: string;
}

export interface GlassFolderArtRecipe {
  style?: string; // "marble"
  colors?: string[];
  warp?: number;
  gloss?: number;
}

export interface GlassFolderProps {
  label: string;
  meta?: string;
  files?: GlassFolderFile[];
  action?: "none" | "add" | "menu";
  tone?: "light" | "dark";
  labelPlacement?: "bottom-left" | "top-left";
  art?: "none" | "featured" | GlassFolderArtRecipe;
  appear?: boolean;
  appearDelay?: number;
  width?: number | string;
  className?: string;
  "aria-label"?: string;
}

export default function GlassFolder({
  label,
  meta,
  files = [],
  action = "none",
  tone = "light",
  labelPlacement = "bottom-left",
  art = "none",
  appear = true,
  appearDelay = 0,
  width = "100%",
  className = "",
  "aria-label": ariaLabel,
}: GlassFolderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isOpen = isHovered || isFocused;

  const displayMeta = meta !== undefined ? meta : `${files.length} items`;
  const isDiscipline = meta?.toLowerCase() === "discipline";
  const isFeatured =
    isDiscipline ||
    art === "featured" ||
    (typeof art === "object" && art !== null && art.style === "marble");
  const titleAria = ariaLabel || label;

  return (
    <div
      className={`glass-folder-wrapper relative select-none h-full flex flex-col transition-all duration-500 ease-out ${
        appear ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width || "100%",
        maxWidth: "100%",
        paddingTop: "54px", // headroom for peek / fan-out
        transitionDelay: `${appearDelay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      role="region"
      aria-label={titleAria}
    >
      <div className={`relative group cursor-pointer h-full flex flex-col flex-1 ${isDiscipline ? "min-h-[330px]" : "min-h-[270px]"}`}>
        {/* ── Back Folder Layer + Tab ── */}
        <div
          className="absolute -top-6 left-0 h-10 w-28 rounded-t-[16px] pointer-events-none transition-transform duration-300"
          style={{
            background: isFeatured
              ? "linear-gradient(to right, #2e1913 0%, #6b1a1f 100%)"
              : "rgba(255, 255, 255, 0.45)",
            borderTop: isFeatured
              ? "1px solid rgba(255, 255, 255, 0.25)"
              : "1px solid rgba(255, 255, 255, 0.85)",
            borderLeft: isFeatured
              ? "1px solid rgba(255, 255, 255, 0.25)"
              : "1px solid rgba(255, 255, 255, 0.85)",
            borderRight: isFeatured
              ? "1px solid rgba(255, 255, 255, 0.25)"
              : "1px solid rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div className="flex items-center gap-1.5 px-3 pt-2">
            <Folder
              className={`w-3.5 h-3.5 ${
                isFeatured ? "text-[#f4efe9]/80" : "text-[#1a1c20]/60"
              }`}
            />
            <span
              className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                isFeatured ? "text-[#f4efe9]/90" : "text-[#1a1c20]/60"
              }`}
            >
              Dir
            </span>
          </div>
        </div>

        {/* ── Back Wall (Rust-to-Maroon gradient for featured; soft frosted glass for normal) ── */}
        <div
          className="absolute inset-0 rounded-[28px] transition-all duration-300 motion-reduce:transition-none"
          style={{
            background: isFeatured
              ? "linear-gradient(to right, #2e1913 0%, #6b1a1f 35%, #8a2c28 65%, #b0523f 100%)"
              : "rgba(255, 255, 255, 0.35)",
            border: isFeatured
              ? "1px solid rgba(255, 255, 255, 0.25)"
              : "1px solid rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: isFeatured
              ? "0 20px 45px rgba(46, 25, 19, 0.30)"
              : "0 18px 40px rgba(0, 0, 0, 0.06)",
          }}
        />

        {/* ── Inside Files (Stack & Fan-Out: White pills with dark text and muted arrow) ── */}
        <div
          className={`relative px-3.5 pt-3 z-10 space-y-2 pointer-events-auto transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isDiscipline ? "pb-3" : "pb-24"
          }`}
          style={{
            transform: isOpen && !isDiscipline ? "translateY(-28px)" : "translateY(0px)",
          }}
        >
          {files.slice(0, isDiscipline ? 2 : 4).map((file, idx) => {
            const isClickable = !!file.href;
            const content = (
              <div
                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-[14px] border text-left transition-all duration-300 motion-reduce:transition-none bg-white/95 hover:bg-white border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#1a1210] ${
                  isDiscipline
                    ? "opacity-100 translate-y-0"
                    : isOpen
                    ? "translate-y-0 opacity-100"
                    : idx === 0
                    ? "-translate-y-2 opacity-95 scale-[0.98]"
                    : "-translate-y-4 opacity-0 pointer-events-none scale-[0.95]"
                }`}
                style={{
                  transitionDelay: isOpen && !isDiscipline ? `${idx * 40}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <FileText className="w-3.5 h-3.5 shrink-0 text-[#6b191b]" />
                  <span
                    className="text-[12px] sm:text-[12.5px] font-semibold text-[#1a1210] truncate leading-tight flex-1"
                    title={file.name}
                  >
                    {file.name}
                  </span>
                </div>
                {file.meta ? (
                  <span className="text-[10.5px] font-mono shrink-0 px-1.5 py-0.5 rounded-md bg-black/[0.04] text-[#6b7280]">
                    {file.meta}
                  </span>
                ) : isClickable ? (
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-[#6b7280] opacity-60 group-hover:opacity-100 transition-opacity" />
                ) : null}
              </div>
            );

            if (isClickable && file.href) {
              return (
                <Link
                  key={idx}
                  href={file.href}
                  className="block group/file focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b] rounded-[14px]"
                >
                  {content}
                </Link>
              );
            }

            return <div key={idx}>{content}</div>;
          })}
        </div>

        {/* ── Folder Front (Pocket) ── */}
        <div
          className={`absolute inset-x-0 bottom-0 ${
            isDiscipline ? "top-[108px]" : "top-16"
          } rounded-b-[28px] rounded-t-[20px] z-20 flex flex-col justify-between p-5 sm:p-6 overflow-hidden transition-all duration-300 motion-reduce:transition-none`}
          style={{
            background: isFeatured
              ? "radial-gradient(circle at 10% 0%, rgba(167, 173, 157, 0.60) 0%, transparent 55%), radial-gradient(circle at 90% 0%, rgba(201, 160, 150, 0.60) 0%, transparent 55%), #e8e5e0"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.40) 100%)",
            border: isFeatured
              ? "1.5px solid rgba(255, 255, 255, 0.90)"
              : "1px solid rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: isFeatured
              ? "0 24px 40px -12px rgba(60, 25, 20, 0.35)"
              : "0 20px 40px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Gloss Specular Reflection */}
          <div
            className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
            }}
          />

          {/* Top of Front Pocket: Meta Tag & Status Dot */}
          {labelPlacement === "top-left" ? (
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span
                  className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    isFeatured ? "text-[#4a1014]/70" : "text-[#6b7280]"
                  }`}
                >
                  {displayMeta}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6b191b]" />
              </div>
              <h3
                className={`font-heading text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-snug line-clamp-2 min-h-[2.8em] ${
                  isFeatured ? "text-[#1a1210]" : "text-[#1a1c20]"
                }`}
                title={label}
              >
                {label}
              </h3>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                  isFeatured ? "text-[#4a1014]/70" : "text-[#6b7280]"
                }`}
              >
                {displayMeta}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#6b191b]" />
            </div>
          )}

          {/* Bottom of Front Pocket: Title & Open Link */}
          {labelPlacement === "bottom-left" && (
            <div className="pt-3 mt-auto border-t border-black/[0.04] flex flex-col justify-between">
              <h3
                className={`font-heading text-[18px] sm:text-[19px] lg:text-[20px] font-bold leading-snug line-clamp-2 min-h-[2.8em] mb-3 break-words ${
                  isFeatured ? "text-[#1a1210]" : "text-[#1a1c20]"
                }`}
                title={label}
              >
                {label}
              </h3>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[12.5px] font-semibold text-[#6b191b] group-hover:text-[#8a2c28] flex items-center gap-1 transition-colors">
                  <span>Open folder</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform motion-reduce:transform-none" />
                </span>

                {action === "add" && (
                  <div
                    className="w-8 h-8 rounded-[18px] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 motion-reduce:transform-none"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #3a2a2a 0%, #1a0e0e 100%)",
                    }}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                )}
                {action === "menu" && (
                  <div
                    className="w-8 h-8 rounded-[18px] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 motion-reduce:transform-none"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #3a2a2a 0%, #1a0e0e 100%)",
                    }}
                  >
                    <MoreHorizontal className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
