"use client";

import React, { useState } from "react";
import Link from "next/link";

type ArticleHeroProps = {
  title: React.ReactNode;
  excerpt?: string;
  category?: string;
  categoryHref?: string;
  dateLabel?: string;
  readTime?: string;
  author?: string;
  authorRole?: string;
};

export default function ArticleHero({
  title,
  excerpt,
  category = "Resources",
  categoryHref = "/blog/",
  dateLabel,
  readTime,
  author = "Eddie Knoell",
  authorRole = "Co-Founder · Senior Loan Officer",
}: ArticleHeroProps) {
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // user dismissed the share sheet — nothing to do
    }
  };

  const initials = author
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="relative w-full bg-[#08271B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[min(360px,70vw)] h-[360px] rounded-full border border-white/[0.06]" />
        <div className="absolute -top-10 right-16 w-[min(240px,55vw)] h-[240px] rounded-full border border-white/[0.05]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <nav className="flex flex-wrap items-center gap-2 text-[12.5px] mb-5">
          <Link href="/blog/" className="text-[#8da684] hover:text-white transition-colors">
            Resources
          </Link>
          <span className="text-[#5d735d]" aria-hidden>
            &gt;
          </span>
          <Link
            href={categoryHref}
            className="text-[#3fb364] font-semibold hover:text-[#63cd85] transition-colors"
          >
            {category}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-6 h-[2px] bg-[#3fb364] shrink-0" aria-hidden />
          <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.14em] uppercase">
            {category}
          </span>
        </div>

        <h1 className="text-white font-playfair font-bold text-[30px] sm:text-[36px] lg:text-[46px] leading-[1.12] mb-5">
          {title}
        </h1>

        {excerpt && (
          <p className="text-[#b8c8b8] text-[16px] lg:text-[17px] leading-[1.7] mb-8 max-w-2xl">
            {excerpt}
          </p>
        )}

        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#3fb364]/20 text-[#3fb364] text-[13px] font-bold flex items-center justify-center shrink-0">
              {initials}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-white text-[13.5px] font-bold">{author}</span>
              <span className="text-[#8da684] text-[12px]">{authorRole}</span>
            </span>
          </div>

          {(dateLabel || readTime) && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#8da684] text-[12.5px]">
              {dateLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#3fb364]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                  </svg>
                  {dateLabel}
                </span>
              )}
              {readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#3fb364]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  {readTime}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 sm:ml-auto">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-white/15 bg-white/[0.06] text-white text-[13px] font-bold hover:bg-white/[0.12] transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" strokeLinecap="round" />
              </svg>
              Share
            </button>

            <button
              type="button"
              aria-label={saved ? "Remove bookmark" : "Bookmark article"}
              aria-pressed={saved}
              onClick={() => setSaved((prev) => !prev)}
              className="w-9 h-9 rounded-lg border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.12] transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M6 4h12v17l-6-4-6 4V4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Print article"
              onClick={() => typeof window !== "undefined" && window.print()}
              className="w-9 h-9 rounded-lg border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.12] transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 8V3h10v5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="4" y="8" width="16" height="8" rx="2" />
                <path d="M7 16h10v5H7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
