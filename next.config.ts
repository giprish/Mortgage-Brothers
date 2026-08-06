import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/areas-we-serve/:path*",
        destination: "/service-areas/:path*",
        permanent: true,
      },
      {
        source: "/term-condition",
        destination: "/team/",
        permanent: true,
      },
      {
        source: "/term-condition/",
        destination: "/team/",
        permanent: true,
      },
      {
        source: "/fha-loans",
        destination: "/fha-home-loans-arizona/",
        permanent: true,
      },
      {
        source: "/fha-loans/",
        destination: "/fha-home-loans-arizona/",
        permanent: true,
      },
      {
        source: "/loan-programs-detail",
        destination: "/mortgage-loan-programs-arizona/",
        permanent: true,
      },
      {
        source: "/loan-programs-detail/",
        destination: "/mortgage-loan-programs-arizona/",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics",
        destination: "/mortgage-basics/",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics/",
        destination: "/mortgage-basics/",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics/:article",
        destination: "/mortgage-basics/:article/",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics/:article/",
        destination: "/mortgage-basics/:article/",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml/",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/mortgage-basics",
        destination: "/resources/mortgage-basics",
      },
      {
        source: "/mortgage-basics/",
        destination: "/resources/mortgage-basics/",
      },
      {
        source: "/mortgage-basics/:article",
        destination: "/resources/mortgage-basics/:article",
      },
      {
        source: "/mortgage-basics/:article/",
        destination: "/resources/mortgage-basics/:article/",
      },
    ];
  },
};

export default nextConfig;
