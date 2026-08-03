/**
 * Enhanced bulk migration: converts ALL static FAQ sections
 * (pattern: <div class="space-y-6"><div><h3...font-bold...mb-2>Q</h3><p>A</p></div>...</div>)
 * in article/blog pages to use the FaqAccordion component.
 */

import fs from 'fs';
import path from 'path';

const APP_DIR = 'app';

// Pages/dirs to skip
const EXCLUDE = new Set([
  'faq', 'component', 'service-areas', '[county]', '[city]',
  'resources', '[category]', '[article]',
]);

/**
 * Find the <section> that wraps FAQ items (h3 font-bold + p pattern)
 * We look for the first <div class="space-y-6"> or similar that has FAQ h3s
 */
function extractFaqSection(src) {
  // Pattern: <section ...> ... <div ...space-y-...> <div><h3...font-bold...mb-2>Q</h3><p>A</p></div>... </div> </section>
  // We use a line-based approach instead of pure regex for reliability

  const lines = src.split('\n');

  // Find div with FAQ h3 items (h3 with font-bold and mb-2)
  let faqDivStartLine = -1;
  let faqSectionStartLine = -1;
  let h2TitleLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('className="text-[#052316] text-[18px] font-bold mb-2"') ||
        l.includes("className=\"text-[#052316] text-[18px] font-bold mb-2\"")) {
      // Found a FAQ h3. Walk back to find the div.space-y wrapper and its enclosing section
      // Find the space-y div start
      for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
        if (lines[j].includes('space-y-')) {
          faqDivStartLine = j;
          break;
        }
      }
      // Find the h2 title
      for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
        if (lines[j].includes('<h2') || lines[j].includes('</h2>')) {
          h2TitleLine = j;
          break;
        }
      }
      // Find the enclosing <section
      for (let j = i - 1; j >= Math.max(0, i - 30); j--) {
        if (lines[j].trim().startsWith('<section')) {
          faqSectionStartLine = j;
          break;
        }
      }
      break;
    }
  }

  if (faqDivStartLine === -1) return null;

  // Extract h2 title
  let faqTitle = 'Frequently Asked Questions';
  if (h2TitleLine !== -1) {
    // Read h2 content (may span multiple lines)
    let titleContent = '';
    for (let j = h2TitleLine; j < Math.min(h2TitleLine + 10, lines.length); j++) {
      titleContent += ' ' + lines[j];
      if (lines[j].includes('</h2>')) break;
    }
    const m = titleContent.match(/>([^<]+)</);
    if (m) faqTitle = m[1].trim().replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  }

  // Now extract the FAQ items from the space-y div
  // Find where the space-y div ends (matching </div>)
  let depth = 0;
  let faqDivEndLine = -1;
  for (let i = faqDivStartLine; i < lines.length; i++) {
    const l = lines[i];
    const opens = (l.match(/<div/g) || []).length;
    const closes = (l.match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (depth <= 0 && i > faqDivStartLine) {
      faqDivEndLine = i;
      break;
    }
  }

  if (faqDivEndLine === -1) return null;

  // Extract section end
  let sectionEndLine = faqDivEndLine + 2;
  for (let i = faqDivEndLine; i < Math.min(faqDivEndLine + 5, lines.length); i++) {
    if (lines[i].includes('</section>')) {
      sectionEndLine = i;
      break;
    }
  }

  // Parse FAQ items: <div>\n<h3...>Q</h3>\n<p>A</p>\n</div>
  const divBlock = lines.slice(faqDivStartLine, faqDivEndLine + 1).join('\n');
  const items = [];

  // Extract each <div><h3...>Q</h3>...<p>A</p></div>
  const itemRegex = /<div>\s*<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>/g;
  let m;
  while ((m = itemRegex.exec(divBlock)) !== null) {
    const q = m[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .replace(/^\d+\.\s*/, '')
      .trim();
    const rawA = m[2].trim();
    if (q) items.push({ q, rawA });
  }

  if (!items.length) return null;

  return {
    sectionStart: faqSectionStartLine !== -1 ? faqSectionStartLine : faqDivStartLine - 5,
    sectionEnd: sectionEndLine,
    faqTitle,
    items,
    lines,
  };
}

function migrate(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  // Skip already migrated
  if (src.includes('FaqAccordion')) return null;
  // Skip files that already have proper accordion (useState-based)
  if (src.includes('openFaq') || src.includes('setOpenFaq')) return null;

  const result = extractFaqSection(src);
  if (!result) return null;

  const { sectionStart, sectionEnd, faqTitle, items, lines } = result;

  // Build items JSX
  const itemsJsx = items.map(({ q, rawA }) => {
    // Escape double quotes in q for JSX attribute
    const escapedQ = q.replace(/"/g, '\\"');
    return `                    { q: "${escapedQ}", a: <>${rawA}</> }`;
  }).join(',\n');

  const accordionJsx = `                <section id="faqs">
                  <FaqAccordion
                    title="${faqTitle.replace(/"/g, '\\"')}"
                    items={[
${itemsJsx},
                    ]}
                  />
                </section>`;

  // Replace lines from sectionStart to sectionEnd
  const newLines = [
    ...lines.slice(0, sectionStart),
    accordionJsx,
    ...lines.slice(sectionEnd + 1),
  ];

  let newSrc = newLines.join('\n');

  // Add FaqAccordion import after last existing import
  if (!newSrc.includes('import FaqAccordion')) {
    // Find the last import line
    const importLines = newSrc.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < importLines.length; i++) {
      if (importLines[i].startsWith('import ')) lastImportIdx = i;
    }
    if (lastImportIdx !== -1) {
      importLines.splice(lastImportIdx + 1, 0, 'import FaqAccordion from "../component/FaqAccordion";');
      newSrc = importLines.join('\n');
    }
  }

  return newSrc;
}

const PAGES_TO_MIGRATE = [
  'air-conditionings-impact-phoenix-valley-real-estate',
  'arizona-binsr-buyer-inspection-notice-and-seller-response',
  'arizona-home-buying-process',
  'arizona-mortgage-approval-process',
  'arizona-mortgage-basics',
  'arizona-mortgage-closing-costs',
  'arizona-mortgage-closing-process',
  'arizona-mortgage-payments',
  'arizona-mortgage-rates-and-the-interest-deduction',
  'arizona-real-estate-capital-gains-is-back',
  'arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year',
  'arizona-refinance-process',
  'arizona-second-mortgages',
  'arizona-understanding-your-credit',
  'arizona-vacation-and-investment-home-mortgages',
  'assumable-mortgage',
  'better-getting-mortgage-couple-vs-single-applicant',
  'buying-a-house-with-a-cash-offer-and-simultaneously-getting-mortgage-financing',
  'buying-down-your-arizona-interest-rate',
  'buying-or-selling-personal-property-with-your-home-sale-must-watch-this-first',
  'can-i-get-a-3rd-mortgage',
  'can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state',
  'can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage',
  'canceling-your-fha-mip-is-easier-than-you-think',
  'connecting-guest-house-main-house-add-value',
  'delayed-financing-how-to-get-cashout-without-waiting-6-months-seasoning',
  'detached-guest-home-casita-appraisal-issues',
  'difference-between-owner-occupied-second-home-and-investment-property',
  'dscr-loan-the-best-alternative-to-hard-money',
  'expect-youre-not-first-time-mortgage-shopper',
  'fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract',
  'get-part-income-commission-can-use-qualify-loan',
  'getting-a-mortgage-with-employment-gaps',
  'grossing-up-your-income-what-does-that-mean',
  'how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage',
  'how-do-solar-panels-affect-the-mortgage-and-closing-process',
  'how-does-a-mortgage-apr-work-and-what-does-it-mean',
  'how-does-my-car-loan-payment-affect-my-mortgage',
  'how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house',
  'how-high-will-a-lender-allow-your-deductible-to-be',
  'how-to-count-commissions-and-bonuses-and-tips',
  'how-to-skip-2-payments-on-your-mortgage',
  'if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage',
  'is-homeownership-hereditary',
  'is-the-mortgage-interest-tax-deduction-really-a-big-deal',
  'lsu-forms-loan-status-updates-and-what-you-need-to-know',
  'mortgage-payoff-higher-than-mortgage-balance',
  'prepayment-penalties-on-your-arizona-mortgage',
  'put-bow-fha-loan-gift-guide',
  'seller-concessions-to-buyers-how-much',
  'ultimate-guide-first-mortgage',
  'what-are-closing-costs-on-a-home-purchase',
  'what-are-mortgage-trigger-leads',
  'what-if-my-spouse-dies-and-im-not-on-the-mortgage',
  'what-is-an-example-of-a-mortgage-recast',
  'what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome',
  'what-you-need-to-know-about-the-arizona-prequalification-form',
  'when-is-a-mortgage-payment-actually-considered-late',
  'who-can-and-cannot-be-on-title-when-you-get-a-mortgage',
  'why-use-an-arizona-mortgage-broker',
];

console.log('Starting enhanced FAQ accordion migration...\n');
let migrated = 0, skipped = 0, errors = 0;

for (const page of PAGES_TO_MIGRATE) {
  const pagePath = path.join(APP_DIR, page, 'page.tsx');
  if (!fs.existsSync(pagePath)) { skipped++; continue; }
  try {
    const result = migrate(pagePath);
    if (result) {
      fs.writeFileSync(pagePath, result, 'utf8');
      console.log('✅', page);
      migrated++;
    } else {
      console.log('⏭️  Skip (no FAQ / already done):', page);
      skipped++;
    }
  } catch (err) {
    console.error('❌', page, ':', err.message);
    errors++;
  }
}

console.log(`\nDone! Migrated: ${migrated}, Skipped: ${skipped}, Errors: ${errors}`);
