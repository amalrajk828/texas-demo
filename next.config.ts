import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "texastechserv.com", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "emea.mitsubishielectric.com" },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Sensors
      { source: "/products/sensors/radar-sensors",         destination: "/portfolio/radar-sensors",         permanent: true },
      { source: "/products/sensors/photoelectric-sensors", destination: "/portfolio/photoelectric-sensors", permanent: true },
      { source: "/products/sensors/safety-light-curtains", destination: "/portfolio/safety-light-curtains", permanent: true },
      { source: "/products/sensors/fiber-optic-sensors",   destination: "/portfolio/fiber-optic-sensors",   permanent: true },

      // PLC
      { source: "/products/plc/melsec-iq-r",              destination: "/portfolio/melsec-iq-r",           permanent: true },

      // ICONICS
      { source: "/products/iconics/genesis64",             destination: "/portfolio/genesis64",             permanent: true },

      // GOT
      { source: "/products/got/got2000series",             destination: "/portfolio/got2000series",         permanent: true },

      // VFD
      { source: "/products/frequency-inverter-vfd/a741",    destination: "/portfolio/a741",    permanent: true },
      { source: "/products/frequency-inverter-vfd/fra800e", destination: "/portfolio/fra800e", permanent: true },
      { source: "/products/frequency-inverter-vfd/f846e",   destination: "/portfolio/f846e",   permanent: true },
      { source: "/products/frequency-inverter-vfd/f800e",   destination: "/portfolio/f800e",   permanent: true },
      { source: "/products/frequency-inverter-vfd/frf800",  destination: "/portfolio/frf800",  permanent: true },
      { source: "/products/frequency-inverter-vfd/e800sce", destination: "/portfolio/e800sce", permanent: true },
      { source: "/products/frequency-inverter-vfd/cs80",    destination: "/portfolio/cs80",    permanent: true },
      { source: "/products/frequency-inverter-vfd/frd700",  destination: "/portfolio/frd700",  permanent: true },
      { source: "/products/frequency-inverter-vfd/fre800",  destination: "/portfolio/fre800",  permanent: true },

      // AC Servos
      { source: "/products/acservos/melservo-jet-hg-sns-servo-motor", destination: "/portfolio/melservo-jet-hg-sns-servo-motor", permanent: true },
      { source: "/products/acservos/melservo-jet-hg-kns-servo-motor", destination: "/portfolio/melservo-jet-hg-kns-servo-motor", permanent: true },
      { source: "/products/acservos/melservo-jet-servo-drive",        destination: "/portfolio/melservo-jet-servo-drive",        permanent: true },
      { source: "/products/acservos/melservo-je-hg-sn-servo-motor",   destination: "/portfolio/melservo-je-hg-sn-servo-motor",   permanent: true },
      { source: "/products/acservos/melservo-je-hg-kn-servo-motor",   destination: "/portfolio/melservo-je-hg-kn-servo-motor",   permanent: true },
      { source: "/products/acservos/melservo-je-servo-drive",         destination: "/portfolio/melservo-je-servo-drive",         permanent: true },

      // Catch-all wildcard fallback for any other nested product URL pattern
      { source: "/products/sensors/:slug",               destination: "/portfolio/:slug", permanent: true },
      { source: "/products/plc/:slug",                   destination: "/portfolio/:slug", permanent: true },
      { source: "/products/iconics/:slug",               destination: "/portfolio/:slug", permanent: true },
      { source: "/products/got/:slug",                   destination: "/portfolio/:slug", permanent: true },
      { source: "/products/frequency-inverter-vfd/:slug",destination: "/portfolio/:slug", permanent: true },
      { source: "/products/acservos/:slug",              destination: "/portfolio/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
