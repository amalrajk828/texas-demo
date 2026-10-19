"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Folder, FileText, ArrowUpRight, ChevronRight } from "lucide-react";

export interface FolderLinkItem {
  label: string;
  href?: string;
  meta?: string;
}

export interface FolderCardProps {
  kind: "SECTOR" | "DISCIPLINE";
  title: string;
  href: string;
  links?: FolderLinkItem[];
  tone?: "light" | "maroon";
  appearDelay?: number;
  className?: string;
}

const FOLDER_OPEN_EVENT = "texas-folder-open";

export default function FolderCard({
  kind,
  title,
  href,
  links = [],
  tone = "light",
  className = "",
}: FolderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Touch and click-outside management for mobile devices
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleOtherFolderOpen = (e: Event) => {
      const ce = e as CustomEvent<HTMLElement>;
      if (ce.detail !== cardRef.current) {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener(FOLDER_OPEN_EVENT, handleOtherFolderOpen);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener(FOLDER_OPEN_EVENT, handleOtherFolderOpen);
    };
  }, [isOpen]);

  const displayLinks = links.slice(0, 3);
  const isMaroon = tone === "maroon";

  return (
    <div
      ref={cardRef}
      className={`folder-card folder-card-cell ${className}`}
      data-open={isOpen ? "true" : "false"}
      role="group"
      aria-label={`${kind}: ${title}`}
      tabIndex={0}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={(e) => {
        if (!cardRef.current?.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
      onClick={(e) => {
        // Support touch-only devices without hover
        if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
          const target = e.target as HTMLElement;
          // If clicking an explicit link or chip link, let default navigation proceed
          if (target.closest("a")) return;
          setIsOpen((prev) => {
            const next = !prev;
            if (next && typeof window !== "undefined" && cardRef.current) {
              window.dispatchEvent(
                new CustomEvent(FOLDER_OPEN_EVENT, { detail: cardRef.current })
              );
            }
            return next;
          });
        }
      }}
    >
      <div
        className={`folder-card-root ${
          isMaroon ? "tone-maroon" : "tone-light"
        }`}
      >
        <div className="folder-card-inner">
          {/* ── 1. Top-Left Ear (DIR Tab, z-index: 1) ── */}
          <div
            className={`folder-tab ${
              isMaroon ? "folder-tab-maroon" : "folder-tab-light"
            }`}
            aria-hidden="true"
          >
            <Folder className="folder-tab-icon" />
            <span className="folder-tab-text">DIR</span>
          </div>

          {/* ── 2. Back Panel (z-index: 1) ── */}
          <div
            className={`folder-back ${
              isMaroon ? "folder-back-maroon" : "folder-back-light"
            }`}
            aria-hidden="true"
          >
            {isMaroon && <div className="folder-back-art folder-back-art-maroon" />}
          </div>

          {/* ── 3. Files Stack (z-index: 2, slides out from behind front card) ── */}
          {displayLinks.length > 0 && (
            <div className="folder-files-layer" role="list">
              {displayLinks.map((linkItem, idx) => {
                const isClickable = !!linkItem.href;
                const pillContent = (
                  <div
                    className={`folder-chip folder-file-pill file-depth-${idx}`}
                    title={linkItem.label}
                  >
                    <FileText className="folder-file-icon" aria-hidden="true" />
                    <span className="folder-file-title">{linkItem.label}</span>
                    {linkItem.meta ? (
                      <span className="text-[10.5px] font-mono text-[#6b7280] bg-black/[0.04] px-1.5 py-0.5 rounded">
                        {linkItem.meta}
                      </span>
                    ) : isClickable ? (
                      <ArrowUpRight className="folder-file-arrow" aria-hidden="true" />
                    ) : null}
                  </div>
                );

                if (isClickable && linkItem.href) {
                  return (
                    <div key={idx} role="listitem">
                      <Link
                        href={linkItem.href}
                        className="block rounded-[13px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b191b]"
                        onClick={(e) => {
                          e.stopPropagation();
                          (e.currentTarget as HTMLElement)?.blur();
                        }}
                      >
                        {pillContent}
                      </Link>
                    </div>
                  );
                }

                return (
                  <div key={idx} role="listitem">
                    {pillContent}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── 4. Front Glass Panel (z-index: 3, Clean -4px lift on hover, zero tilt) ── */}
          <div
            className={`folder-front ${
              isMaroon ? "folder-front-maroon" : "folder-front-light"
            }`}
          >
            {/* Specular Highlight */}
            <div className="folder-specular" aria-hidden="true" />

            {/* Top row: SECTOR/DISCIPLINE label + Maroon dot */}
            <div>
              <div className="folder-meta-row">
                <span
                  className={`folder-kind-badge ${
                    isMaroon ? "folder-kind-badge-maroon" : "folder-kind-badge-light"
                  }`}
                >
                  {kind}
                </span>
                <span
                  className={`folder-dot ${
                    isMaroon ? "folder-dot-maroon" : "folder-dot-light"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Card Title (with accessible primary stretched link) */}
              <h3
                className={`folder-title ${
                  isMaroon ? "folder-title-maroon" : "folder-title-light"
                }`}
              >
                <Link
                  href={href}
                  className="folder-stretched-link"
                  onClick={(e) => {
                    (e.currentTarget as HTMLElement)?.blur();
                  }}
                >
                  {title}
                </Link>
              </h3>
            </div>

            {/* Bottom: Open Folder link */}
            <div className="folder-bottom-row">
              <span
                className={`folder-open-link ${
                  isMaroon ? "folder-open-link-maroon" : "folder-open-link-light"
                }`}
                aria-hidden="true"
              >
                <span>Open folder</span>
                <ChevronRight className="folder-open-chevron" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
