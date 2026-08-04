/**
 * batch_extract.js
 * Fetches and parses multiple pages from the original website, saving clean text to output files.
 * Usage: node batch_extract.js
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'C:\\Users\\ADMIN\\OneDrive\\Desktop\\Morgage\\Mortgage\\mortgage\\extracted_content';
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const PAGES = [
  // Batch A
  { slug: 'home', url: 'https://azmortgagebrothers.com/' },
  { slug: 'about-us', url: 'https://azmortgagebrothers.com/about-us/' },
  { slug: 'contact-us', url: 'https://azmortgagebrothers.com/contact-us/' },
  { slug: 'team', url: 'https://azmortgagebrothers.com/team/' },
  { slug: 'client-mortgage-reviews', url: 'https://azmortgagebrothers.com/client-mortgage-reviews/' },
  { slug: 'job-opportunities', url: 'https://azmortgagebrothers.com/job-opportunities/' },
  // Batch B
  { slug: 'fha-home-loans-arizona', url: 'https://azmortgagebrothers.com/fha-home-loans-arizona/' },
  { slug: 'fha-streamline-refinance-arizona', url: 'https://azmortgagebrothers.com/fha-streamline-refinance-arizona/' },
  { slug: 'conventional-home-loans-arizona', url: 'https://azmortgagebrothers.com/conventional-home-loans-arizona/' },
  { slug: 'conventional-vs-fha-loans-arizona', url: 'https://azmortgagebrothers.com/conventional-vs-fha-loans-arizona/' },
  { slug: 'jumbo-loans-arizona', url: 'https://azmortgagebrothers.com/jumbo-loans-arizona/' },
  { slug: 'va-loans-arizona', url: 'https://azmortgagebrothers.com/va-loans-arizona/' },
  { slug: 'usda-loans-arizona', url: 'https://azmortgagebrothers.com/usda-loans-arizona/' },
  { slug: 'private-money-lender-arizona', url: 'https://azmortgagebrothers.com/private-money-lender-arizona/' },
  { slug: 'reverse-mortgage-arizona', url: 'https://azmortgagebrothers.com/reverse-mortgage-arizona/' },
  { slug: 'self-employed-mortgage-arizona', url: 'https://azmortgagebrothers.com/self-employed-mortgage-arizona/' },
  // Batch C
  { slug: 'refinancing-arizona', url: 'https://azmortgagebrothers.com/refinancing-arizona/' },
  { slug: 'first-time-home-buyer-arizona', url: 'https://azmortgagebrothers.com/first-time-home-buyer-arizona/' },
  { slug: 'first-time-home-buyer-arizona-guide', url: 'https://azmortgagebrothers.com/first-time-home-buyer-arizona-guide/' },
  { slug: 'mortgage-basics', url: 'https://azmortgagebrothers.com/mortgage-basics/' },
  { slug: 'mortgage-loan-programs-arizona', url: 'https://azmortgagebrothers.com/mortgage-loan-programs-arizona/' },
  { slug: 'mortgage-rates-tool-arizona', url: 'https://azmortgagebrothers.com/mortgage-rates-tool-arizona/' },
  { slug: 'mortgage-qualifications', url: 'https://azmortgagebrothers.com/mortgage-qualifications/' },
  { slug: 'mortgage-for-excellent-credit', url: 'https://azmortgagebrothers.com/mortgage-for-excellent-credit/' },
  { slug: 'mortgage-for-good-credit', url: 'https://azmortgagebrothers.com/mortgage-for-good-credit/' },
  { slug: 'mortgage-for-poor-credit', url: 'https://azmortgagebrothers.com/mortgage-for-poor-credit/' },
  { slug: 'mortgage-broker-loan-officer-originator', url: 'https://azmortgagebrothers.com/mortgage-broker-loan-officer-originator/' },
  { slug: 'moving-mortgage-for-purchase-arizona', url: 'https://azmortgagebrothers.com/moving-mortgage-for-purchase-arizona/' },
  { slug: 'reverse-mortgage-home-purchase-arizona', url: 'https://azmortgagebrothers.com/reverse-mortgage-home-purchase-arizona/' },
  { slug: 'reverse-mortgage-loan-officer', url: 'https://azmortgagebrothers.com/reverse-mortgage-loan-officer/' },
  // Batch D
  { slug: 'service-areas', url: 'https://azmortgagebrothers.com/service-areas/' },
  { slug: 'service-areas--apache-county-az', url: 'https://azmortgagebrothers.com/service-areas/apache-county-az/' },
  { slug: 'service-areas--cochise-county-az', url: 'https://azmortgagebrothers.com/service-areas/cochise-county-az/' },
  { slug: 'service-areas--coconino-county-az', url: 'https://azmortgagebrothers.com/service-areas/coconino-county-az/' },
  { slug: 'service-areas--gila-county-az', url: 'https://azmortgagebrothers.com/service-areas/gila-county-az/' },
  { slug: 'service-areas--graham-county-az', url: 'https://azmortgagebrothers.com/service-areas/graham-county-az/' },
  { slug: 'service-areas--greenlee-county-az', url: 'https://azmortgagebrothers.com/service-areas/greenlee-county-az/' },
  { slug: 'service-areas--la-paz-county-az', url: 'https://azmortgagebrothers.com/service-areas/la-paz-county-az/' },
  { slug: 'service-areas--maricopa-county-az', url: 'https://azmortgagebrothers.com/service-areas/maricopa-county-az/' },
  { slug: 'service-areas--mohave-county-az', url: 'https://azmortgagebrothers.com/service-areas/mohave-county-az/' },
  { slug: 'service-areas--navajo-county-az', url: 'https://azmortgagebrothers.com/service-areas/navajo-county-az/' },
  { slug: 'service-areas--pima-county-az', url: 'https://azmortgagebrothers.com/service-areas/pima-county-az/' },
  { slug: 'service-areas--pinal-county-az', url: 'https://azmortgagebrothers.com/service-areas/pinal-county-az/' },
  { slug: 'service-areas--santa-cruz-county-az', url: 'https://azmortgagebrothers.com/service-areas/santa-cruz-county-az/' },
  { slug: 'service-areas--yavapai-county-az', url: 'https://azmortgagebrothers.com/service-areas/yavapai-county-az/' },
  { slug: 'service-areas--yuma-county-az', url: 'https://azmortgagebrothers.com/service-areas/yuma-county-az/' },
  // Batch E
  { slug: 'faq', url: 'https://azmortgagebrothers.com/faq/' },
  { slug: 'glossary', url: 'https://azmortgagebrothers.com/glossary/' },
  { slug: 'realtorteam', url: 'https://azmortgagebrothers.com/realtorteam/' },
  { slug: 'the-broker-advantage', url: 'https://azmortgagebrothers.com/the-broker-advantage/' },
  { slug: 'specialty-loans', url: 'https://azmortgagebrothers.com/specialty-loans/' },
  { slug: 'real-estate-mortgages', url: 'https://azmortgagebrothers.com/real-estate-mortgages/' },
  { slug: 'mortgage-payoff-higher-than-mortgage-balance', url: 'https://azmortgagebrothers.com/mortgage-payoff-higher-than-mortgage-balance/' },
  { slug: 'mortgage-payments-strategies', url: 'https://azmortgagebrothers.com/mortgage-payments-strategies/' },
  { slug: 'mortgage-process-guidance', url: 'https://azmortgagebrothers.com/mortgage-process-guidance/' },
  { slug: 'mortgage-101', url: 'https://azmortgagebrothers.com/mortgage-101/' },
  // Batch F
  { slug: 'sell-my-house-fast-arizona', url: 'https://azmortgagebrothers.com/sell-my-house-fast-arizona/' },
  { slug: 'how-to-sell-my-house-fast-in-arizona', url: 'https://azmortgagebrothers.com/how-to-sell-my-house-fast-in-arizona/' },
  { slug: 'spouse-estate-considerations', url: 'https://azmortgagebrothers.com/spouse-estate-considerations/' },
  { slug: 'privacy-policy', url: 'https://azmortgagebrothers.com/privacy-policy/' },
  { slug: 'terms-of-use', url: 'https://azmortgagebrothers.com/terms-of-use/' },
  { slug: 'prepayment-penalties-on-your-arizona-mortgage', url: 'https://azmortgagebrothers.com/prepayment-penalties-on-your-arizona-mortgage/' },
  { slug: 'seller-concessions-to-buyers-how-much', url: 'https://azmortgagebrothers.com/seller-concessions-to-buyers-how-much/' },
  { slug: 'ultimate-guide-first-mortgage', url: 'https://azmortgagebrothers.com/ultimate-guide-first-mortgage/' },
  { slug: 'understanding-amortization-chart', url: 'https://azmortgagebrothers.com/understanding-amortization-chart/' },
  { slug: 'homeownership-tips', url: 'https://azmortgagebrothers.com/homeownership-tips/' },
  { slug: 'navigating-mortgage-options-during-divorce-a-complete-guide', url: 'https://azmortgagebrothers.com/navigating-mortgage-options-during-divorce-a-complete-guide/' },
  { slug: 'what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide', url: 'https://azmortgagebrothers.com/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/' },
  { slug: 'what-is-a-jumbo-loan-everything-you-need-to-know-before-applying', url: 'https://azmortgagebrothers.com/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/' },
  { slug: 'what-is-an-example-of-a-mortgage-recast', url: 'https://azmortgagebrothers.com/what-is-an-example-of-a-mortgage-recast/' },
  { slug: 'what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome', url: 'https://azmortgagebrothers.com/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/' },
  { slug: 'what-are-closing-costs-on-a-home-purchase', url: 'https://azmortgagebrothers.com/what-are-closing-costs-on-a-home-purchase/' },
  { slug: 'what-are-mortgage-trigger-leads', url: 'https://azmortgagebrothers.com/what-are-mortgage-trigger-leads/' },
  { slug: 'what-if-my-spouse-dies-and-im-not-on-the-mortgage', url: 'https://azmortgagebrothers.com/what-if-my-spouse-dies-and-im-not-on-the-mortgage/' },
  { slug: 'what-you-need-to-know-about-the-arizona-prequalification-form', url: 'https://azmortgagebrothers.com/what-you-need-to-know-about-the-arizona-prequalification-form/' },
  { slug: 'when-is-a-mortgage-payment-actually-considered-late', url: 'https://azmortgagebrothers.com/when-is-a-mortgage-payment-actually-considered-late/' },
  { slug: 'who-can-and-cannot-be-on-title-when-you-get-a-mortgage', url: 'https://azmortgagebrothers.com/who-can-and-cannot-be-on-title-when-you-get-a-mortgage/' },
  { slug: 'who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements', url: 'https://azmortgagebrothers.com/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/' },
  { slug: 'why-use-an-arizona-mortgage-broker', url: 'https://azmortgagebrothers.com/why-use-an-arizona-mortgage-broker/' },
  { slug: 'lsu-forms-loan-status-updates-and-what-you-need-to-know', url: 'https://azmortgagebrothers.com/lsu-forms-loan-status-updates-and-what-you-need-to-know/' },
];

const decode = (s) => s
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&apos;/g, "'")
  .replace(/&#8217;/g, '\u2019').replace(/&#8216;/g, '\u2018')
  .replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D')
  .replace(/&#8211;/g, '\u2013').replace(/&#8212;/g, '\u2014')
  .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

function extractText(html) {
  let clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const results = [];
  const seen = new Set();
  const extract = (tag, prefix) => {
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
    let m;
    while ((m = re.exec(clean)) !== null) {
      const text = decode(m[1]);
      if (text.length > 3) {
        const key = prefix + ':' + text.slice(0, 100);
        if (!seen.has(key)) { seen.add(key); results.push(`[${prefix}] ${text}`); }
      }
    }
  };
  ['h1','h2','h3','h4','h5','p','li','blockquote'].forEach((t, i) =>
    extract(t, ['H1','H2','H3','H4','H5','P','LI','QUOTE'][i]));
  return results.filter(r => {
    const t = r.slice(r.indexOf('] ') + 2);
    return t.length >= 5 && !/^(home|skip to|copyright|all rights reserved)/i.test(t);
  }).join('\n');
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120',
        'Accept': 'text/html', 'Accept-Language': 'en-US,en;q=0.9'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Processing ${PAGES.length} pages...\n`);
  for (const page of PAGES) {
    const outFile = path.join(OUTPUT_DIR, `${page.slug}.txt`);
    if (fs.existsSync(outFile)) {
      console.log(`SKIP (exists): ${page.slug}`);
      continue;
    }
    try {
      const { status, data } = await fetchPage(page.url);
      if (status === 200) {
        const text = extractText(data);
        fs.writeFileSync(outFile, text, 'utf8');
        console.log(`OK: ${page.slug} (${text.split('\n').length} lines)`);
      } else {
        console.log(`BLOCKED (${status}): ${page.slug}`);
        fs.writeFileSync(outFile, `FETCH_FAILED: HTTP ${status}`, 'utf8');
      }
    } catch (e) {
      console.log(`ERROR: ${page.slug} — ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('\nDone! Files saved to:', OUTPUT_DIR);
}

main();
