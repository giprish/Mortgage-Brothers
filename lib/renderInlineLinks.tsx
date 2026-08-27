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
  { phrase: "mortgage loans", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "loan programs", href: "/mortgage-loan-programs-arizona/" },
  { phrase: "Mortgage Brothers LLC", href: "/" },
  { phrase: "Mortgage refinance", href: "/refinancing-arizona/" },
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

/**
 * Live city intro paragraphs bold location/SEO phrases (e.g. "mortgage brokers in Kohls Ranch, AZ"),
 * not generic terms like "first-time homebuyers".
 */
const CITY_INTRO_BOLD_REGEXES: { re: RegExp; group?: number }[] = [
  { re: /^As experienced (.+?), we/i, group: 1 },
  { re: /^As trusted (.+?), we/i, group: 1 },
  { re: /^Looking for experienced (.+?)\?/i, group: 1 },
  { re: /^Looking for (?:a trusted|an experienced|reliable) (.+?)\?/i, group: 1 },
  { re: /^Looking for (.+? mortgage broker in .+?)\?/i, group: 1 },
  { re: /^Searching for (.+?)\?/i, group: 1 },
  {
    re: /(?:help you )?secure (?:dependable |reliable |flexible )?(mortgages in [A-Za-z0-9' -]+?)(?=\s+with|\s+and|,|\.|$)/i,
    group: 1,
  },
  {
    re: /(?:help you )?secure (?:dependable |reliable |flexible )?(mortgage loans in [A-Za-z0-9' -]+?(?: Arizona)?)(?=\s+with|\s+and|,|\.|$)/i,
    group: 1,
  },
  { re: /^(Buying or refinancing a home in [^,.]+(?:, Arizona)?)/i, group: 1 },
  { re: /^(Buying a home in [^ ]+ or refinancing your current mortgage\?)/i, group: 1 },
  { re: /^(Buying a home in [^ ]+ or planning a refinance\?)/i, group: 1 },
  { re: /^(Buying a home in [^ ]+ or exploring refinance options\?)/i, group: 1 },
  { re: /^(Finding the right mortgage in [^ ]+ requires)/i, group: 1 },
  { re: /trusted ([A-Z][A-Za-z ]+ mortgage lender)/i, group: 1 },
  { re: /trusted ([A-Z][A-Za-z ]+ mortgage provider)/i, group: 1 },
  { re: /(home loans in [^,.]+, AZ)/i, group: 1 },
  { re: /^As a ([^,]+ local mortgage team)/i, group: 1 },
  { re: /^As a (local [^,]+ mortgage team)/i, group: 1 },
  { re: /^As trusted (.+?) in /i, group: 1 },
];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wrapUnmarkedPhrase(text: string, phrasePattern: string): string {
  const re = new RegExp(`(?<!\\*\\*)(${phrasePattern})(?!\\*\\*)`, "gi");
  return text.replace(re, "**$1**");
}

/**
 * Wraps live-synced location mortgage phrases in ** so GetInTouch / services copy
 * bolds "{City} mortgage" (or "mortgages in {City}") sitewide while leaving brand names unchanged.
 */
export function boldLocationMortgagePhrases(text: string, cityName: string): string {
  const city = escapeRegExp(cityName);
  let result = wrapUnmarkedPhrase(text, `mortgages in ${city}`);
  result = wrapUnmarkedPhrase(result, `${city} mortgage`);
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

function findCityIntroBold(text: string): InlineMatch | null {
  let earliest: InlineMatch | null = null;

  for (const { re, group = 0 } of CITY_INTRO_BOLD_REGEXES) {
    const match = re.exec(text);
    if (!match) continue;

    const phrase = match[group];
    const index = match.index + match[0].indexOf(phrase);
    const candidate = { index, length: phrase.length, phrase };

    if (
      !earliest ||
      index < earliest.index ||
      (index === earliest.index && phrase.length > earliest.phrase.length)
    ) {
      earliest = candidate;
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

function findDefaultMatch(text: string): InlineMatch | null {
  return findExplicitBold(text) ?? findInlineLink(text);
}

function findCityIntroMatch(text: string): InlineMatch | null {
  return findExplicitBold(text) ?? findCityIntroBold(text);
}

/** Bold/link helper for FAQs and guidance copy. */
export function renderInlineLinks(text: string): React.ReactNode {
  return renderFormattedText(text, findDefaultMatch, (match) =>
    match.href ? renderLinkSpan(match) : renderBoldSpan(match.phrase),
  );
}

/**
 * GetInTouch / "Our {City} Mortgage Services" paragraphs.
 * Paragraphs are pre-marked with ** via boldLocationMortgagePhrases in cityData; this renders bold + brand links.
 */
export function renderGetInTouchText(text: string): React.ReactNode {
  return renderInlineLinks(text);
}

/**
 * City page intro paragraphs under "LOCAL MORTGAGE EXPERTS".
 * Matches live bold placement for location phrases instead of generic link terms.
 */
export function renderCityIntroText(text: string): React.ReactNode {
  return renderFormattedText(text, findCityIntroMatch, (match) =>
    renderBoldSpan(match.phrase),
  );
}
