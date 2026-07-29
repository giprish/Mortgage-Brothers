import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
