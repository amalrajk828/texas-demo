import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  transpilePackages: ["lucide-react"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "texastechserv.com", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [40, 50, 60, 75, 85, 90, 100],
    unoptimized: true,
  },
  async redirects() {
    return [
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
