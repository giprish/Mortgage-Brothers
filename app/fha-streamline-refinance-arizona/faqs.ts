/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "Who qualifies for an FHA Streamline Refinance?", a: "FHA borrowers who have not missed a mortgage payment in the last 12 months and can achieve a combined savings from interest rate reduction and mortgage insurance of at least 0.5% on a fixed-rate FHA mortgage are eligible. This option is available for primary residences, second homes, and investment properties." },
  { q: "How soon can I refinance after getting my FHA loan?", a: "While the search results don't provide a specific timeframe, typically you need to have made at least 6 monthly payments on your current FHA loan before being eligible for a Streamline Refinance. It's best to consult with one of our mortgage experts for the most up-to-date requirements." },
  { q: "Will my mortgage insurance premium change?", a: "Your mortgage insurance premium may change depending on when your current FHA loan was originated. Loans closed before May 31, 2009, have lower upfront and annual mortgage insurance rates compared to those closed after this date. For example, a 30-year fixed FHA Streamline refinance for loans before May 31, 2009, has a 0.01% upfront and 0.55% annual rate, while loans after this date have 1.75% upfront and 0.60% annual rates." },
  { q: "Can I get cash out with an FHA Streamline Refinance?", a: "No, the FHA Streamline Refinance program does not allow for cash-out refinancing. This program is designed specifically to lower your interest rate or adjust your loan term, not to access home equity." },
  { q: "Is an appraisal required for an FHA Streamline Refinance?", a: "One of the major benefits of the FHA Streamline Refinance is that no appraisal is required. This means you can refinance regardless of your home's current equity position, making it an attractive option for homeowners in various market conditions." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
