"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, User } from "lucide-react";

export default function V3FloatingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto h-[74px] max-w-[1140px] w-full bg-nav-dark-glass backdrop-blur-2xl rounded-full px-5 flex items-center justify-between shadow-[0_16px_40px_rgba(10,11,14,0.38)] border border-white/10 relative">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <Link className="flex items-center gap-3 group" href="#hero-stage">
            <Image
              alt="Texas Technical Services Logo"
              className="h-8 w-auto object-contain brightness-125"
              src="/logo.svg"
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-label-lg font-semibold tracking-tight text-surface-bright group-hover:text-primary-fixed transition-colors">
                TTSC
              </span>
              <span className="font-caption text-caption text-text-muted hidden sm:inline-block leading-none">
                Flow Measurement &amp; Automation
              </span>
            </div>
          </Link>
          <div className="w-px h-7 bg-white/20 hidden md:block" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 relative px-2 py-1.5 rounded-full bg-white/[0.03]">
          <Link
            className="px-3.5 py-2 rounded-full transition-all text-surface-bright font-semibold bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22)] font-label-lg text-label-lg"
            href="#hero-stage"
          >
            Home
          </Link>
          <Link
            className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] transition-all"
            href="/about-us/"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] inline-flex items-center gap-1 transition-all"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-3 w-68 bg-nav-dark-glass backdrop-blur-2xl rounded-xl p-2 shadow-2xl border border-white/10 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/service/flow-measurement-solutions/"
              >
                Flow Measurement &amp; Control
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/service/inspection-testing/"
              >
                Inspection &amp; Testing
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/service/industrial-automation/"
              >
                Industrial Automation
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-primary-fixed-dim hover:text-surface-bright hover:bg-white/[0.08] transition-colors border-t border-white/10 mt-1 pt-2"
                href="#disciplines-stage"
              >
                View Core Disciplines →
              </Link>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] inline-flex items-center gap-1 transition-all"
            >
              <span>Industries</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-3 w-60 bg-nav-dark-glass backdrop-blur-2xl rounded-xl p-2 shadow-2xl border border-white/10 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/industries/oil-gas/"
              >
                Oil &amp; Gas
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/industries/refinery/"
              >
                Refinery &amp; Petrochemicals
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/industries/power-plant/"
              >
                Power &amp; Desalination
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/industries/water-treatment/"
              >
                Water Treatment
              </Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] inline-flex items-center gap-1 transition-all"
            >
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-3 w-64 bg-nav-dark-glass backdrop-blur-2xl rounded-xl p-2 shadow-2xl border border-white/10 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/solutions/texaflow/"
              >
                Texaflow Custody Metering
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/solutions/space-ai/"
              >
                Space AI Industrial AI
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/solutions/mitsubishi-electric/"
              >
                Mitsubishi Electric Automation
              </Link>
              <Link
                className="block px-3 py-2 rounded-lg font-label-md text-label-md text-text-muted hover:text-surface-bright hover:bg-white/[0.08] transition-colors"
                href="/products/"
              >
                Products &amp; Instrumentation
              </Link>
            </div>
          </div>

          <Link
            className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] transition-all"
            href="/partners/"
          >
            Partners
          </Link>
          <Link
            className="px-3.5 py-2 rounded-full font-label-lg text-label-lg text-text-muted hover:text-surface-bright hover:bg-white/[0.06] transition-all"
            href="/blog/"
          >
            Blog
          </Link>
        </nav>

        {/* CTA + User icon + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-accent-hover transition-colors shadow-[0_8px_16px_rgba(138,48,47,0.24)]"
            href="#rfq-stage"
          >
            Contact Us
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-inner">
            <User className="w-4 h-4 text-white" />
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-[82px] left-0 right-0 bg-nav-dark-glass backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col gap-4 z-50 text-surface-bright lg:hidden">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="#hero-stage"
            >
              Home
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="/about-us/"
            >
              About Us
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="#disciplines-stage"
            >
              Services (What We Do)
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="#sectors-stage"
            >
              Industries Served
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="#solutions-stage"
            >
              Solutions &amp; Partners
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
              href="/blog/"
            >
              Blog
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 text-center rounded-xl bg-primary-container text-white font-bold"
              href="#rfq-stage"
            >
              Request Engineering Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
