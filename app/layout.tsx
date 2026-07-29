import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { homeSeoMetadata } from "@/lib/seo";
import { resolveSiteUrlFromHeaders } from "@/lib/site-url";
import PreApprovalProvider from "./component/PreApprovalProvider";
import JsonLd from "./component/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <PreApprovalProvider>{children}</PreApprovalProvider>
      </body>
    </html>
  );
}
