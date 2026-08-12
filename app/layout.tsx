import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { homeSeoMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/company";
import DeferredPreApproval from "./component/DeferredPreApproval";
import JsonLd from "./component/JsonLd";
import "./globals.css";

/* Body uses system UI (no Inter download). Playfair only for display headings. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-playfair",
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08271B",
};

/**
 * Static metadata — do NOT call headers()/cookies() here or every page
 * becomes dynamically rendered and Lighthouse TTFB collapses.
 */
export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  ...homeSeoMetadata,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#2d8545] focus:text-white focus:font-bold focus:rounded-md focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd />
        {children}
        <DeferredPreApproval />
      </body>
    </html>
  );
}
