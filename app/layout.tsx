import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import { homeSeoMetadata } from "@/lib/seo";
import { getConfiguredSiteUrl } from "@/lib/site-url";
import DeferredPreApproval from "./component/DeferredPreApproval";
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
      {/* Google Tag Manager — injected as high in <head> as possible */}
      <Script
        id="google-tag-manager"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF5LK3F');`,
        }}
      />
      {/* Google tag (gtag.js) — once on every page, in <head> */}
      <Script
        id="google_gtagjs-js"
        src="https://www.googletagmanager.com/gtag/js?id=GT-NS9R5SN"
        strategy="beforeInteractive"
      />
      <Script
        id="google_gtagjs-js-after"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["azmortgagebrothers.com"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-NS9R5SN");
gtag("config", "AW-1015684940");
gtag("config", "G-CQ4C5WS1YT");
 window._googlesitekit = window._googlesitekit || {}; window._googlesitekit.throttledEvents = []; window._googlesitekit.gtagEvent = (name, data) => { var key = JSON.stringify( { name, data } ); if ( !! window._googlesitekit.throttledEvents[ key ] ) { return; } window._googlesitekit.throttledEvents[ key ] = true; setTimeout( () => { delete window._googlesitekit.throttledEvents[ key ]; }, 5 ); gtag( "event", name, { ...data, event_source: "site-kit" } ); };
//# sourceURL=google_gtagjs-js-after`,
        }}
      />
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
      </body>
    </html>
  );
}
