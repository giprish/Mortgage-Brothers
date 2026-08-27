import Link from "next/link";
import React from "react";

export const INLINE_LINK_CLASS =
  "font-bold text-[#3fb364] no-underline hover:no-underline";

const CITY_PAGE_INLINE_LINKS: { phrase: string; href: string }[] = [
  { phrase: "purchasing your first home", href: "/first-time-home-buyer-arizona-guide/" },
  { phrase: "loan programs", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "Mortgage Brothers LLC", href: "/" },
];

export function renderInlineLinks(text: string): React.ReactNode {
  let earliest: { index: number; phrase: string; href: string } | null = null;

  for (const link of CITY_PAGE_INLINE_LINKS) {
    const index = text.indexOf(link.phrase);
    if (index === -1) continue;
    if (!earliest || index < earliest.index) {
      earliest = { index, ...link };
    }
  }

  if (!earliest) return text;

  const { index, phrase, href } = earliest;

  return (
    <>
      {text.slice(0, index)}
      <Link href={href} prefetch={false} className={INLINE_LINK_CLASS}>
        {phrase}
      </Link>
      {renderInlineLinks(text.slice(index + phrase.length))}
    </>
  );
}
