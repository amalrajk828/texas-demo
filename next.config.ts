import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  transpilePackages: ["lucide-react"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "texastechserv.com", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [40, 50, 60, 75, 85, 90, 100],
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/homevideos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|ico|gif|mp4|pdf|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/products/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/industries/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
