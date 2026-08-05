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
      >
        <svg
          viewBox="0 0 175.216 175.552"
          className="w-14 h-14"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#57d163" />
              <stop offset="1" stopColor="#23b33a" />
            </linearGradient>
          </defs>
          {/* White circle background */}
          <path
            fill="#fff"
            d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          />
          {/* Green gradient circle */}
          <path
            fill="url(#wa-grad)"
            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
          />
          {/* White speech bubble + phone */}
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
          />
        </svg>
      </a>
    </div>
  );
}
