import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ["lucide-react"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "texastechserv.com", pathname: "/wp-content/**" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [40, 50, 60, 75, 85, 90, 100],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Fix old wrong VFD slugs
      { source: '/portfolio/cs80',        destination: '/portfolio/fr-cs80-series',              permanent: true },
      { source: '/portfolio/frd700',      destination: '/portfolio/fr-d700-series',              permanent: true },
      { source: '/portfolio/fre800',      destination: '/portfolio/fr-e800-series',              permanent: true },
      { source: '/portfolio/e800sce',     destination: '/portfolio/e800-sce-series',             permanent: true },
      { source: '/portfolio/frf800',      destination: '/portfolio/fr-f800-series',              permanent: true },
      { source: '/portfolio/f800e',       destination: '/portfolio/fr-f800-e-series',            permanent: true },
      { source: '/portfolio/f846e',       destination: '/portfolio/fr-f846-e-series',            permanent: true },
      { source: '/portfolio/fra800e',     destination: '/portfolio/fr-a800-e-series',            permanent: true },
      { source: '/portfolio/a741',        destination: '/portfolio/fr-a741-regenerative-series', permanent: true },
      // Fix old wrong sensor slug
      { source: '/portfolio/fiber-optic-sensors', destination: '/portfolio/fiber-optic-sensors-and-fibers', permanent: true },
      // Fix old wrong PLC slug
      { source: '/portfolio/melsec-iq-r', destination: '/portfolio/melsec-iq-r-series',         permanent: true },
      // Nested product URLs → /portfolio/[slug]
      // Use :slug+ NOT :slug* so listing pages are NOT caught
      { source: '/products/sensors/:slug+',                destination: '/portfolio/:slug', permanent: true },
      { source: '/products/plc/:slug+',                    destination: '/portfolio/:slug', permanent: true },
      { source: '/products/iconics/:slug+',                destination: '/portfolio/:slug', permanent: true },
      { source: '/products/got/:slug+',                    destination: '/portfolio/:slug', permanent: true },
      { source: '/products/frequency-inverter-vfd/:slug+', destination: '/portfolio/:slug', permanent: true },
      { source: '/products/acservos/:slug+',               destination: '/portfolio/:slug', permanent: true },
    ]
  },
};

export default nextConfig;
