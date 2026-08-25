import React from "react";
import Link from "next/link";
import ArticleHeroActions from "./ArticleHeroActions";

type ArticleHeroProps = {
  title: React.ReactNode;
  excerpt?: string;
  category?: string;
  categoryHref?: string;
  /** Original publish date shown in the hero (e.g. "Feb 3, 2025"). */
  dateLabel?: string;
  /** Last content update — shown when the article was rewritten after publish. */
  updatedLabel?: string;
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
  updatedLabel,
  readTime,
  author = "Eddie Knoell",
  authorRole = "Co-Founder · Senior Loan Officer",
}: ArticleHeroProps) {
  const initials = author
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="relative w-full bg-[#08271B] overflow-hidden pt-[64px] sm:pt-[72px]">
      <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[min(360px,70vw)] h-[360px] rounded-full border border-white/[0.06]" />
        <div className="absolute -top-10 right-16 w-[min(240px,55vw)] h-[240px] rounded-full border border-white/[0.05]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-8 sm:py-10 lg:py-12 text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <span className="block w-6 h-[2px] bg-[#3fb364] shrink-0" aria-hidden />
          <span className="text-[#63cd85] text-[11px] font-bold tracking-[0.14em] uppercase">
            {category}
          </span>
          <span className="block w-6 h-[2px] bg-[#3fb364] shrink-0" aria-hidden />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-2 text-[12.5px] mb-5">
          <Link prefetch={false} href="/blog/" className="text-[#b8d4b8] hover:text-white transition-colors">
            Resources
          </Link>
          <span className="text-[#5d735d]" aria-hidden>
            &gt;
          </span>
          <Link
            prefetch={false}
            href={categoryHref}
            className="text-[#63cd85] font-semibold hover:text-[#8ee0a8] transition-colors"
          >
            {category}
          </Link>
        </nav>

        <h1 className="text-white font-semibold text-[30px] sm:text-[36px] lg:text-[46px] leading-[1.12] mb-4 max-w-4xl mx-auto">
          {title}
        </h1>

        {excerpt && (
          <p className="text-[#c8d4c8] text-[16px] lg:text-[17px] leading-[1.7] mb-8 max-w-2xl mx-auto">
            {excerpt}
          </p>
        )}

        <div className="w-full pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#3fb364]/20 text-[#63cd85] text-[13px] font-bold flex items-center justify-center shrink-0">
              {initials}
            </span>
            <span className="flex flex-col items-start leading-tight text-left">
              <span className="text-white text-[13.5px] font-bold">{author}</span>
              <span className="text-[#c8d4c8] text-[12px]">{authorRole}</span>
            </span>
          </div>

          {(dateLabel || updatedLabel || readTime) && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#c8d4c8] text-[12.5px]">
              {dateLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#63cd85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                  </svg>
                  {dateLabel}
                </span>
              )}
              {updatedLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#63cd85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M23 4v6h-6" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Updated {updatedLabel}
                </span>
              )}
              {readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#63cd85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  {readTime}
                </span>
              )}
            </div>
          )}

          <ArticleHeroActions />
        </div>
      </div>
    </section>
  );
}
