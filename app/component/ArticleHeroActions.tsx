"use client";

import React, { useState } from "react";

/** Tiny client island for share / bookmark / print — keeps ArticleHero as a server component. */
export default function ArticleHeroActions() {
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // user dismissed share sheet
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
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
          aria-hidden
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
          aria-hidden
        >
          <path d="M6 4h12v17l-6-4-6 4V4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Print article"
        onClick={() => window.print()}
        className="w-9 h-9 rounded-lg border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.12] transition-colors cursor-pointer"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M7 8V3h10v5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="4" y="8" width="16" height="8" rx="2" />
          <path d="M7 16h10v5H7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
