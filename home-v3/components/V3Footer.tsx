"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function V3Footer() {
  return (
    <footer className="relative z-20 w-full bg-footer-dark text-on-tertiary-container pt-16 pb-12 border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                alt="Texas Technical Services Logo"
                className="h-8 w-auto object-contain brightness-125"
                src="/logo.svg"
                width={32}
                height={32}
              />
              <span className="font-headline-sm text-title-md text-surface-bright tracking-tight font-semibold">
                Texas Technical Services Co.
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-text-muted max-w-md">
              ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company established in 2008. Flow measurement, industrial automation &amp; inspection for oil &amp; gas and industrial sectors across Kuwait &amp; Dubai.
            </p>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <ShieldCheck className="w-4 h-4 text-primary-fixed-dim" />
              <span className="font-label-md text-label-md uppercase tracking-wider text-surface-bright">
                ISO 9001:2015 Certified Organization
              </span>
            </div>
          </div>

          {/* Gulf Hubs */}
          <div className="space-y-3">
            <div className="font-label-lg text-label-lg uppercase tracking-wider text-surface-bright font-semibold">
              Gulf Hubs
            </div>
            <div className="space-y-4 font-body-sm text-body-sm">
              <div className="space-y-1">
                <p className="text-surface-bright font-medium">Kuwait Headquarters</p>
                <p className="text-text-muted">East Ahmadi Industrial Area, Block 6, Plot 14, Kuwait</p>
              </div>
              <div className="space-y-1">
                <p className="text-surface-bright font-medium">Dubai Regional Office</p>
                <p className="text-text-muted">JAFZA One, Tower A, Jebel Ali Free Zone, Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="space-y-3">
            <div className="font-label-lg text-label-lg uppercase tracking-wider text-surface-bright font-semibold">
              Core Capabilities
            </div>
            <ul className="space-y-2 font-body-sm text-body-sm">
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/service/flow-measurement-solutions/">
                  Flow Measurement &amp; Control
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/service/inspection-testing/">
                  Inspection &amp; Testing
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/service/industrial-automation/">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/solutions/texaflow/">
                  Texaflow Custody Metering
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/solutions/space-ai/">
                  Space AI Predictive Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="font-label-lg text-label-lg uppercase tracking-wider text-surface-bright font-semibold">
              Company
            </div>
            <ul className="space-y-2 font-body-sm text-body-sm">
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/about-us/">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/certifications/">
                  ISO Certifications &amp; Accreditations
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/partners/">
                  Global Partners &amp; Alliances
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/products/">
                  Instrumentation &amp; Products
                </Link>
              </li>
              <li>
                <Link className="text-text-muted hover:text-surface-bright transition-colors" href="/contacts/">
                  Contact &amp; Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-caption text-caption text-text-muted">
          <p>© 2008 – 2026 Texas Technical Services Company W.L.L. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-surface-bright transition-colors" href="/about-us/">
              Privacy Policy
            </Link>
            <Link className="hover:text-surface-bright transition-colors" href="/certifications/">
              Quality &amp; Compliance
            </Link>
            <Link className="hover:text-surface-bright transition-colors" href="/contacts/">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
