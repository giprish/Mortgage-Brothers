import Link from "next/link";
import React from "react";

export const INLINE_LINK_CLASS =
  "font-bold text-[#3fb364] no-underline hover:text-[#2d8545] hover:no-underline";

export const INLINE_BOLD_CLASS = "font-bold text-[#052316]";

/** Longest phrases first so overlapping matches resolve correctly. */
const CITY_PAGE_INLINE_LINKS: { phrase: string; href: string }[] = [
  { phrase: "purchasing your first home", href: "/first-time-home-buyer-arizona-guide/" },
  { phrase: "first-time home buyers", href: "/first-time-home-buyer-arizona-guide/" },
  { phrase: "first-time homebuyers", href: "/first-time-home-buyer-arizona-guide/" },
  { phrase: "Mortgage loans program", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "mortgage loans program", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "mortgage loans", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "loan programs", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "Mortgage Brothers LLC", href: "/" },
  { phrase: "Mortgage refinance options", href: "/refinancing-arizona/" },
  { phrase: "mortgage refinance options", href: "/refinancing-arizona/" },
  { phrase: "Mortgage refinance", href: "/refinancing-arizona/" },
  { phrase: "refinancing", href: "/refinancing-arizona/" },
  { phrase: "Reverse mortgages", href: "/reverse-mortgage-arizona/" },
  { phrase: "reverse mortgages", href: "/reverse-mortgage-arizona/" },
  { phrase: "Reverse mortgage", href: "/reverse-mortgage-arizona/" },
  { phrase: "reverse mortgage", href: "/reverse-mortgage-arizona/" },
  { phrase: "Conventional loans", href: "/conventional-home-loans-arizona/" },
  { phrase: "conventional loans", href: "/conventional-home-loans-arizona/" },
  { phrase: "FHA loans", href: "/fha-home-loans-arizona/" },
  { phrase: "Jumbo loans", href: "/jumbo-loans-arizona/" },
  { phrase: "jumbo loans", href: "/jumbo-loans-arizona/" },
  { phrase: "VA loans", href: "/va-loans-arizona/" },
  { phrase: "VA Loan", href: "/va-loans-arizona/" },
  { phrase: "VA loan", href: "/va-loans-arizona/" },
].sort((a, b) => b.phrase.length - a.phrase.length);

type InlineMatch = {
  index: number;
  length: number;
  phrase: string;
  href?: string;
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wrapUnmarkedPhrase(text: string, phrasePattern: string): string {
  const re = new RegExp(`(?<!\\*\\*)(${phrasePattern})(?!\\*\\*)`, "gi");
  return text.replace(re, "**$1**");
}

/**
 * Wraps live-synced location mortgage phrases in ** for city intro copy.
 * Not applied to Get In Touch (live getInTouch is typically plain unless explicit markdown links).
 *
 * Skip "{City} mortgage" when followed by " loans program" so contiguous
 * phrases like "mortgage loans program" stay intact in source content.
 */
export function boldLocationMortgagePhrases(text: string, cityName: string): string {
  const city = escapeRegExp(cityName);
  let result = wrapUnmarkedPhrase(text, `mortgages in ${city}`);
  result = wrapUnmarkedPhrase(result, `${city} mortgage(?!\\s+loans\\s+program)`);
  return result;
}

function findExplicitBold(text: string): InlineMatch | null {
  const start = text.indexOf("**");
  if (start === -1) return null;

  const end = text.indexOf("**", start + 2);
  if (end === -1) return null;

  return {
    index: start,
    length: end + 2 - start,
    phrase: text.slice(start + 2, end),
  };
}

/** Explicit `[label](href)` markdown — used by Get In Touch and city intro opt-in links. */
function findMarkdownLink(text: string): InlineMatch | null {
  const match = /\[([^\]]+)\]\(([^)]+)\)/.exec(text);
  if (!match) return null;

  return {
    index: match.index,
    length: match[0].length,
    phrase: match[1],
    href: match[2],
  };
}

function findInlineLink(text: string): InlineMatch | null {
  let earliest: (InlineMatch & { href: string }) | null = null;

  for (const link of CITY_PAGE_INLINE_LINKS) {
    const index = text.indexOf(link.phrase);
    if (index === -1) continue;
    if (
      !earliest ||
      index < earliest.index ||
      (index === earliest.index && link.phrase.length > earliest.phrase.length)
    ) {
      earliest = { index, length: link.phrase.length, phrase: link.phrase, href: link.href };
    }
  }

  return earliest;
}

function renderFormattedText(
  text: string,
  findMatch: (value: string) => InlineMatch | null,
  renderMatch: (match: InlineMatch) => React.ReactNode,
): React.ReactNode {
  const match = findMatch(text);
  if (!match) return text;

  const { index, length, phrase } = match;

  return (
    <>
      {text.slice(0, index)}
      {renderMatch(match)}
      {renderFormattedText(text.slice(index + length), findMatch, renderMatch)}
    </>
  );
}

function renderBoldSpan(phrase: string) {
  return <strong className={INLINE_BOLD_CLASS}>{phrase}</strong>;
}

function renderLinkSpan(match: InlineMatch) {
  return (
    <Link href={match.href!} prefetch={false} className={INLINE_LINK_CLASS}>
      {match.phrase}
    </Link>
  );
}

function earliestMatch(...candidates: (InlineMatch | null)[]): InlineMatch | null {
  let best: InlineMatch | null = null;

  for (const candidate of candidates) {
    if (!candidate) continue;
    if (
      !best ||
      candidate.index < best.index ||
      (candidate.index === best.index && candidate.length > best.length)
    ) {
      best = candidate;
    }
  }

  return best;
}

function findDefaultMatch(text: string): InlineMatch | null {
  return earliestMatch(findExplicitBold(text), findInlineLink(text));
}

/** City intro: only explicit `**bold**` and `[label](href)` — no heuristic bold/auto brand. */
function findCityIntroMatch(text: string): InlineMatch | null {
  return earliestMatch(findExplicitBold(text), findMarkdownLink(text));
}

function renderCityIntroBrandLink(match: InlineMatch) {
  return (
    <>
      {match.index > 0 ? <br /> : null}
      <Link
        href={match.href!}
        prefetch={false}
        className="font-bold text-[#3fb364] no-underline hover:text-[#2d8545] hover:no-underline"
      >
        {match.phrase}
      </Link>
    </>
  );
}

function isIntroBrandHomeLink(match: InlineMatch): boolean {
  return match.href === "/" && match.phrase === "Mortgage Brothers LLC";
}

/** Bold/link helper for FAQs and guidance copy. */
export function renderInlineLinks(text: string): React.ReactNode {
  return renderFormattedText(text, findDefaultMatch, (match) =>
    match.href ? renderLinkSpan(match) : renderBoldSpan(match.phrase),
  );
}

/**
 * GetInTouch / "Our {City} Mortgage Services" paragraphs.
 * Plain text by default (live Cochise-style pages have no bold/auto-links).
 * Only explicit `[label](href)` renders as green bold links — no CITY_PAGE_INLINE_LINKS,
 * and `**…**` markers are stripped (not bolded).
 */
export function renderGetInTouchText(text: string): React.ReactNode {
  const withoutBoldMarkup = text.replace(/\*\*/g, "");
  return renderFormattedText(withoutBoldMarkup, findMarkdownLink, renderLinkSpan);
}

/**
 * City page intro paragraphs under "LOCAL MORTGAGE EXPERTS".
 * Bold only via explicit `**…**`; green brand (and other) links only via `[label](href)`.
 * Brand home links start on a new line when not at the start of the paragraph.
 */
export function renderCityIntroText(text: string): React.ReactNode {
  return renderFormattedText(text, findCityIntroMatch, (match) =>
    match.href
      ? isIntroBrandHomeLink(match)
        ? renderCityIntroBrandLink(match)
        : renderLinkSpan(match)
      : renderBoldSpan(match.phrase),
  );
}

/**
 * Hero description under the H1.
 * Only explicit `**bold**` and optional `[label](href)` — no CITY_PAGE_INLINE_LINKS auto-linking.
 * Uses white bold (not INLINE_BOLD_CLASS) so emphasis stays readable on the dark hero.
 */
export function renderHeroDescription(text: string): React.ReactNode {
  return renderFormattedText(
    text,
    (value) => earliestMatch(findExplicitBold(value), findMarkdownLink(value)),
    (match) =>
      match.href ? (
        renderLinkSpan(match)
      ) : (
        <strong className="font-bold text-white">{match.phrase}</strong>
      ),
  );
}
