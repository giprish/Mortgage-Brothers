import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/areas-we-serve/:path*",
        destination: "/service-areas/:path*",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics",
        destination: "/mortgage-basics",
        permanent: true,
      },
      {
        source: "/resources/mortgage-basics/:article",
        destination: "/mortgage-basics/:article",
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
        source: "/mortgage-basics/:article",
        destination: "/resources/mortgage-basics/:article",
      },
    ];
  },
};

export default nextConfig;
