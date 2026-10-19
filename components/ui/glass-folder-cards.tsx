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
  style?: string;
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
  image?: string;
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
  image,
  appear = true,
  appearDelay = 0,
  width = "100%",
  className = "",
  "aria-label": ariaLabel,
}: GlassFolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const displayMeta = meta !== undefined ? meta : `${files.length} items`;
  const titleAria = ariaLabel || label;

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target === e.currentTarget) {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }
      }}
      className={`gf-root group glass-folder-wrapper relative select-none w-full h-full flex flex-col pt-[54px] rounded-[28px] outline-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_40px_-14px_rgba(0,0,0,0.25)] focus-visible:ring-2 focus-visible:ring-[#6b191b] focus-within:-translate-y-1.5 focus-within:shadow-[0_28px_40px_-14px_rgba(0,0,0,0.25)] motion-reduce:transform-none motion-reduce:hover:translate-y-0 ${
        appear ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width || "100%",
        maxWidth: "100%",
        transitionDelay: `${appearDelay}ms`,
      }}
      aria-label={titleAria}
    >
      {/* ── GF Shadow Layer ── */}
      <div className="gf-shadow absolute inset-0 rounded-[28px] pointer-events-none -z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

      {/* ── Folder Tab (Top-Left Ear) ── */}
      <div
        className="absolute top-[24px] left-0 h-[31px] w-[125px] px-3.5 rounded-t-[14px] flex items-center gap-1.5 pointer-events-none z-0"
        style={{
          background: image
            ? "linear-gradient(135deg, rgba(84, 46, 36, 0.95) 0%, rgba(54, 28, 22, 0.95) 100%)"
            : "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: image
            ? "1px solid rgba(255, 255, 255, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          borderLeft: image
            ? "1px solid rgba(255, 255, 255, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          borderRight: image
            ? "1px solid rgba(255, 255, 255, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          borderBottom: "none",
        }}
      >
        <Folder
          className="w-3.5 h-3.5"
          style={{ color: image ? "#c9a096" : "#6b6f76" }}
        />
        <span
          className="text-[11px] font-mono font-medium uppercase tracking-wider"
          style={{ color: image ? "#c9a096" : "#6b6f76" }}
        >
          DIR
        </span>
      </div>

      {/* ── Folder Back Panel ── */}
      <div
        className="absolute top-[54px] inset-x-0 bottom-0 rounded-[28px] rounded-tl-none pointer-events-none z-0 overflow-hidden"
        style={{
          background: image
            ? `url(${image}) center / cover no-repeat`
            : "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: image
            ? "1px solid rgba(255, 255, 255, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          boxShadow: image
            ? "0 20px 45px rgba(46, 25, 19, 0.30)"
            : "0 10px 30px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
      />

      {/* ── File Row(s) in Back Panel (Rises on Open) ── */}
      <div
        className="relative z-10 px-3.5 pt-1 pb-2 flex flex-col gap-2 shrink-0 transition-transform duration-300 ease-out motion-reduce:transform-none"
        style={{
          transform: isOpen ? "translateY(-36px)" : "translateY(0px)",
        }}
      >
        {files.slice(0, 2).map((file, idx) => {
          const isClickable = !!file.href;
          const content = (
            <div className="h-[36px] min-h-[36px] px-3 rounded-[14px] bg-white flex items-center justify-between gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)] group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-black/[0.04] transition-all duration-300 group/row">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <FileText className="w-3.5 h-3.5 shrink-0 text-[#6b191b]" />
                <span
                  className="text-[14px] sm:text-[15px] font-medium text-[#1e293b] truncate leading-none flex-1"
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
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-[#64748b] transition-all duration-300 group-hover:text-[#6b191b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-within:text-[#6b191b] group-focus-within:translate-x-0.5 group-focus-within:-translate-y-0.5 group-hover/row:text-[#6b191b] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 motion-reduce:transform-none" />
              ) : null}
            </div>
          );

          if (isClickable && file.href) {
            return (
              <Link
                key={idx}
                href={file.href}
                tabIndex={isOpen ? 0 : -1}
                aria-hidden={!isOpen}
                className="block rounded-[14px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b]"
              >
                {content}
              </Link>
            );
          }

          return <div key={idx}>{content}</div>;
        })}
      </div>

      {/* ── Front Glass Pocket ── */}
      <div
        className="gf-front relative z-20 flex-1 flex flex-col justify-between p-5 sm:p-6 rounded-[28px] overflow-hidden min-h-[190px]"
        style={{
          background: image
            ? "linear-gradient(180deg, rgba(255,255,255,.2) 0%, rgba(236,233,228,.95) 100%)"
            : "linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow: "0 20px 30px -12px rgba(0, 0, 0, 0.18)",
        }}
      >
        {/* Soft white glare sweep on card hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full group-focus-within:translate-x-full transition-transform duration-700 ease-out motion-reduce:hidden" />
        </div>

        {/* .gf-tint layer */}
        <div
          className="gf-tint absolute inset-0 rounded-[28px] pointer-events-none -z-10"
          style={{
            background: image
              ? "radial-gradient(60% 55% at 12% 8%, rgba(150,160,140,.55), rgba(150,160,140,0) 70%), radial-gradient(55% 60% at 88% 10%, rgba(205,150,138,.6), rgba(205,150,138,0) 70%), linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(235,231,226,.72) 45%, rgba(236,233,228,.96) 100%)"
              : undefined,
          }}
        />

        {/* Top: Meta Label + Maroon Dot */}
        {labelPlacement === "top-left" ? (
          <div className="gf-label">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="gf-meta text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--gf-ink-soft,#6b7280)]">
                {displayMeta}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#6b191b]" />
            </div>
            <h3
              className="gf-title font-heading text-[22px] sm:text-[24px] font-bold leading-tight text-[var(--gf-ink,#1a1c20)] break-words line-clamp-2 min-h-[2.4em]"
              title={label}
            >
              {label}
            </h3>
          </div>
        ) : (
          <div className="gf-label">
            <div className="flex items-center justify-between gap-2">
              <span className="gf-meta text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--gf-ink-soft,#6b7280)]">
                {displayMeta}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#6b191b]" />
            </div>
            <div className="h-px bg-black/[0.08] w-full my-3" />
            <h3
              className="gf-title font-heading text-[22px] sm:text-[24px] font-bold leading-tight text-[var(--gf-ink,#1a1c20)] break-words line-clamp-2 min-h-[2.4em]"
              title={label}
            >
              {label}
            </h3>
          </div>
        )}

        {/* Bottom: Open Folder Link */}
        <div className="mt-auto flex items-center justify-between pt-3">
          {files[0]?.href ? (
            <Link
              href={files[0].href}
              className="text-[13px] font-semibold text-[#6b191b] hover:text-[#8a2c28] flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b] rounded"
            >
              <span>Open folder</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transform-none" />
            </Link>
          ) : (
            <span className="text-[13px] font-semibold text-[#6b191b] group-hover:text-[#8a2c28] flex items-center gap-1.5 transition-colors">
              <span>Open folder</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transform-none" />
            </span>
          )}

          {action === "add" && (
            <div
              className="w-8 h-8 rounded-[18px] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
              style={{
                background: "radial-gradient(circle at 30% 30%, #3a2a2a 0%, #1a0e0e 100%)",
              }}
            >
              <Plus className="w-4 h-4 text-white" />
            </div>
          )}
          {action === "menu" && (
            <div
              className="w-8 h-8 rounded-[18px] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
              style={{
                background: "radial-gradient(circle at 30% 30%, #3a2a2a 0%, #1a0e0e 100%)",
              }}
            >
              <MoreHorizontal className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
