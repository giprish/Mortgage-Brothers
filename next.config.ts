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
    ];
  },
};

export default nextConfig;
