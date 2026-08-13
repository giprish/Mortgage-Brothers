import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,

  // Do not set output: 'export' — Route Handlers (sitemap/robots) need Node.

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "recharts",
      "chart.js",
      "react-chartjs-2",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    // Keep a large breakpoint for true full-bleed heroes; small logos use imageSizes via `sizes`.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 72, 90, 96, 104, 128, 150, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azmortgagebrothers.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://form.jotform.com https://www.youtube.com https://www.google.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https:",
          "frame-src 'self' https://form.jotform.com https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com https://smart1003.preapprovemeapp.com",
          "media-src 'self' https:",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self' https://form.jotform.com https://smart1003.preapprovemeapp.com",
        ].join("; "),
      },
    ];

    const longCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/home/:path*", headers: longCache },
      { source: "/_next/static/:path*", headers: longCache },
      { source: "/favicon-:size.jpg", headers: longCache },
      { source: "/apple-touch-icon.jpg", headers: longCache },
    ];
  },
  async redirects() {
    return [
      {
        source: "/areas-we-serve/:path*",
        destination: "/service-areas/:path*",
        permanent: true,
      },
      { source: "/term-condition", destination: "/team/", permanent: true },
      { source: "/term-condition/", destination: "/team/", permanent: true },
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
        source: "/loan-programs",
        destination: "/mortgage-loan-programs-arizona/",
        permanent: true,
      },
      {
        source: "/loan-programs/",
        destination: "/mortgage-loan-programs-arizona/",
        permanent: true,
      },
      { source: "/resources", destination: "/blog/", permanent: true },
      { source: "/resources/", destination: "/blog/", permanent: true },
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

const withBundleAnalyzer = (() => {
  try {
    // Optional: npm i -D @next/bundle-analyzer && npm run analyze
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("@next/bundle-analyzer")({
      enabled: process.env.ANALYZE === "true",
    });
  } catch {
    return (config: NextConfig) => config;
  }
})();

export default withBundleAnalyzer(nextConfig);
