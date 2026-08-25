/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "What's the minimum down payment for an FHA loan?", a: "The minimum down payment is 3.5% of the purchase price." },
  { q: "Are gift funds allowed for FHA loans?", a: "Yes, borrowers can receive all of their down payment, closing costs, and prepaid taxes and insurance from a gift" },
  { q: "What credit score do I need for an FHA loan in Arizona?", a: "Most lenders require a minimum credit score of 620, though some may go as low as 580 in certain cases." },
  { q: "How long do I have to pay mortgage insurance on an FHA loan?", a: "For loans with less than 10% down, mortgage insurance is required for the entire loan term. For loans with 10% or more down, mortgage insurance can be removed after 11 years of on-time payments." },
  { q: "What are the current FHA loan limits in Arizona?", a: "Here are the 2026 FHA loan limits for Maricopa County, Arizona: 1‑Unit (One-Family): $557,750; 2‑Unit (Two-Family): $714,000; 3‑Unit (Three-Family): $863,100; 4‑Unit (Four-Family): $1,072,600." },
  { q: "Can I use an FHA loan to buy a condo?", a: "Yes, but the condo project must be FHA-approved, which can be challenging in Arizona" },
  { q: "What's the maximum seller contribution on an FHA loan?", a: "Sellers can contribute up to 6% of the sales price towards a buyer's closing costs and prepaids" },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
