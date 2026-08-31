/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "How much down payment do I need?", a: "Down payment requirements vary depending on the loan program. Conventional loans may require as little as 3% down, FHA loans typically require 3.5% down, and VA loans for eligible veterans offer 0% down payment options." },
  { q: "What credit score do I need to buy a home?", a: "While a credit score of 620 is often considered the minimum for most loans, higher scores can lead to better rates and terms. FHA loans may be available for those with credit scores below 620." },
  { q: "How long does the home buying process take?", a: "The timeline can vary, but typically expect 30-45 days from offer acceptance to closing. However, the entire process, including home searching, can take several months." },
  { q: "Can I use gift money for my down payment?", a: "Yes, many loan programs allow you to use gifted funds for your down payment. The gift must be properly documented, and some programs may require a portion of the down payment to come from your own funds." },
  { q: "What additional costs should I budget for beyond the down payment?", a: "Be prepared for closing costs (1-8% of the home's price), property taxes, homeowners insurance, and potential HOA fees. It's also wise to budget for maintenance and repairs." },
  { q: "How do I choose the right neighborhood?", a: "Consider factors like proximity to work, school quality, local amenities, and future development plans. Research crime rates and visit the area at different times of day to get a feel for the community." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
