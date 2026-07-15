import React from "react";
import { Cpu, Mail, MapPin, Phone } from "lucide-react";

/**
 * Standard reusable Footer component.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0d26] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#e7212b] flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight leading-tight">
                TEXAS <span className="text-xs font-normal text-gray-500 uppercase tracking-widest block">Technical Services</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Providing premium, high-precision industrial automation, flow measurement, and control room ergonomics since 1998.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#e7212b] hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#e7212b] hover:text-white transition-colors duration-300" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Products Catalog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Technical Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Custom Solutions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          {/* Features Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Core Competencies</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Flow Metering Systems</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Control Room Console Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Industrial Edge Gateway</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Calibration & Testing</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  1245 Industry Parkway, Suite 100, Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e7212b] shrink-0" />
                <span className="text-gray-400">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e7212b] shrink-0" />
                <span className="text-gray-400">info@texastechserv.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {currentYear} Texas Technical Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
