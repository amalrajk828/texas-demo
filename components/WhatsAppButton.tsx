"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const PHONE = "96597243755";
const FALLBACK = "Hi, I'm interested in your industrial automation services.";

function getMessage(pathname: string): string {
  const p = pathname.toLowerCase();

  if (p === "/" || p === "") return FALLBACK;
  if (p.startsWith("/services/")) return "Hi, I'd like to learn more about your services.";
  if (p.startsWith("/service/flow-measurement")) return "Hi, I'm interested in flow measurement solutions.";
  if (p.startsWith("/service/industrial-automation")) return "Hi, I'm interested in industrial automation services.";
  if (p.startsWith("/service/inspection") || p.startsWith("/service/non-destructive"))
    return "Hi, I'm interested in inspection & testing services.";
  if (p.startsWith("/service/")) return "Hi, I'm interested in your services.";
  if (p.startsWith("/industries/")) return "Hi, I'd like to learn about your industry solutions.";
  if (p.startsWith("/products/")) return "Hi, I'd like to learn about your products.";
  if (p.includes("kuwait")) return "Hi, I'm interested in industrial automation services in Kuwait.";
  if (p.includes("dubai")) return "Hi, I'm interested in industrial automation services in Dubai.";
  if (p.startsWith("/contacts/")) return "Hi, I'd like to get in touch with your team.";
  if (p.startsWith("/about-us/")) return "Hi, I'd like to learn more about Texas Technical Services.";
  if (p.startsWith("/blog/")) return "Hi, I have a question about one of your articles.";
  if (p.startsWith("/partners/")) return "Hi, I'm interested in your partner solutions.";

  return FALLBACK;
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const href = useMemo(() => {
    const msg = getMessage(pathname);
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  }, [pathname]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-100">
          Chat with us on WhatsApp
          <div className="absolute top-full right-5 -mt-1 w-2 h-2 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-200"
        style={{ background: "#25D366" }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.374L1.054 31.25l6.118-1.958A15.907 15.907 0 0016.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.34 22.608c-.39 1.1-1.932 2.014-3.162 2.27-.84.18-1.936.322-5.656-1.216-4.764-1.966-7.826-6.79-8.064-7.104-.23-.314-1.9-2.524-1.9-4.814s1.2-3.414 1.626-3.882c.39-.428.922-.57 1.228-.57.314 0 .626.004.896.016.29.012.68-.11 1.064.812.39.95 1.336 3.252 1.452 3.484.116.232.194.502.038.816-.156.314-.232.51-.462.786-.232.276-.486.618-.694.828-.232.232-.472.484-.202.944.27.46 1.2 1.98 2.58 3.21 1.774 1.584 3.27 2.076 3.73 2.308.46.232.732.194 1.002-.116.27-.314 1.16-1.352 1.47-1.822.314-.468.626-.39 1.064-.234.438.156 2.784 1.316 3.26 1.554.476.238.794.358.914.554.12.196.12 1.136-.27 2.236z" />
        </svg>
      </a>
    </div>
  );
}
