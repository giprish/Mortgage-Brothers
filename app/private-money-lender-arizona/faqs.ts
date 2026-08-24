/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "What's the difference between private money and portfolio loans?", a: "Private money loans are typically short-term, asset-based loans from individual investors or small groups, while portfolio loans are held by the lender and offer more flexible long-term financing options." },
  { q: "How quickly can I get approved for a private money loan?", a: "Private money loans can often be approved within days, sometimes as quickly as 1-7 days for urgent deals." },
  { q: "What credit score do I need for a portfolio loan?", a: "While traditional loans may require higher scores, portfolio lenders often consider borrowers with credit scores as low as 620." },
  { q: "Can I use a private money loan for my primary residence?", a: "Private money loans are typically used for investment properties, not primary residences. However, portfolio loans are available for primary homes." },
  { q: "How quickly can a private money loan close in Arizona?", a: "Private money loans can typically close much faster than traditional bank loans — often in as little as 7 to 14 days. At Mortgage Brothers, we work efficiently to help investors and buyers who need speed and flexibility." },
  { q: "How much down payment is required for a portfolio loan?", a: "Portfolio loans often require a down payment of 20% to 35%, depending on the specific loan and property." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
