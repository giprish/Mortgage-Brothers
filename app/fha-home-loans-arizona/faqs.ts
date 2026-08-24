/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "What's the minimum down payment for an FHA loan?", a: "The minimum down payment for an FHA loan is 3.5% of the purchase price for borrowers with a credit score of 580 or higher." },
  { q: "Are gift funds allowed for FHA loans?", a: "Yes. All of your down payment, closing costs, and prepaids can come from gift funds provided by an eligible donor, such as a family member." },
  { q: "What credit score do I need for an FHA loan in Arizona?", a: "Most Arizona lenders require a credit score of 580 with FHA backing." },
  { q: "How long do I have to pay mortgage insurance on an FHA loan?", a: "If you put less than 10% down, mortgage insurance remains for the life of the loan. If you put 10% or more down, mortgage insurance can be removed after 11 years." },
  { q: "What are the current FHA loan limits in Arizona?", a: "For 2026 in Maricopa County: 1-unit $557,750; 2-unit $714,000; 3-unit $863,100; 4-unit $1,072,600. Limits are higher in Coconino County and vary by county across Arizona." },
  { q: "Can I use an FHA loan to buy a condo?", a: "Yes, you can use an FHA loan to purchase a condo if the project is FHA-approved. Finding FHA-approved condos can be challenging in Arizona, but our team can help you identify eligible properties." },
  { q: "What's the maximum seller contribution on an FHA loan?", a: "Sellers can contribute up to 6% of the purchase price toward the buyer's closing costs, prepaid items, and discount points on an FHA loan." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
