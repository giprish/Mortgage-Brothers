import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import { homeSeoMetadata } from "@/lib/seo";
import { resolveSiteUrlFromHeaders } from "@/lib/site-url";
import PreApprovalProvider from "./component/PreApprovalProvider";
import JsonLd from "./component/JsonLd";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────────────────────────
   next/font self-hosts fonts so there is no render-blocking Google Fonts
   network request. Subset to latin to minimise payload.
──────────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08271B",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const siteUrl = resolveSiteUrlFromHeaders(requestHeaders);

  return {
    metadataBase: new URL(siteUrl),
    ...homeSeoMetadata,
    robots: {
      index: false,
      follow: false,
    },
    icons: {
      icon: [
        {
          url: "/favicon-32x32.jpg",
          sizes: "32x32",
          type: "image/jpeg",
        },
        {
          url: "/favicon-192x192.jpg",
          sizes: "192x192",
          type: "image/jpeg",
        },
      ],
      apple: [
        {
          url: "/apple-touch-icon.jpg",
          sizes: "180x180",
          type: "image/jpeg",
        },
      ],
      shortcut: "/favicon-32x32.jpg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to JotForm so the modal iframe loads faster */}
        <link rel="preconnect" href="https://form.jotform.com" />
        <link rel="dns-prefetch" href="https://form.jotform.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <PreApprovalProvider>{children}</PreApprovalProvider>
      </body>
    </html>
  );
}
