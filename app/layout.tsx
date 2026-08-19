import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { homeSeoMetadata } from "@/lib/seo";
import { getConfiguredSiteUrl } from "@/lib/site-url";
import DeferredPreApproval from "./component/DeferredPreApproval";
import GoogleTags from "./component/GoogleTags";
import JsonLd from "./component/JsonLd";
import "./globals.css";

/* Body uses system UI (no Inter download). Playfair only for display headings. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400"],
  preload: false,
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
  metadataBase: new URL(getConfiguredSiteUrl()),
  ...homeSeoMetadata,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "sc-domain%3Aazmortgagebrothers.com",
      "o0jlxMZZWCtr8DV0PYRSpPo3Vi7R8SV3yiEFaAT85Ac",
    ],
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PF5LK3F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <JsonLd />
        <div
          id="main-content"
          tabIndex={-1}
          className="flex flex-col flex-1 w-full min-h-0 outline-none"
        >
          {children}
        </div>
        <DeferredPreApproval />
        <GoogleTags />
      </body>
    </html>
  );
}
