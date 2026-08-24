/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "How much down payment do I need?", a: "Down payment requirements vary by loan type. Conventional loans can require as little as 3% down, FHA loans typically require 3.5% down, and eligible veterans may qualify for VA loans with 0% down. Down payment assistance programs may further reduce what you need out of pocket." },
  { q: "What credit score do I need to buy a home?", a: "A credit score of 620 is often the minimum for conventional loan programs. FHA loans can qualify with scores as low as 580. Higher scores generally lead to better rates and more loan options." },
  { q: "How long does the home buying process take?", a: "From accepted offer to closing typically takes 30–45 days. The full process — including saving, pre-approval, house hunting, and closing — often spans several months depending on your readiness and market conditions." },
  { q: "Can I use gift money for my down payment?", a: "Yes, gift funds from family members can be used for your down payment with proper documentation. Your lender will require a gift letter and proof of the transfer to verify the funds." },
  { q: "What additional costs should I budget for beyond the down payment?", a: "Plan for closing costs (1–8% of the purchase price), property taxes, homeowners insurance, potential HOA fees, and ongoing maintenance and repair costs as a homeowner." },
  { q: "How do I choose the right neighborhood?", a: "Consider proximity to work, school quality, local amenities, crime rates, and future development plans. Visit neighborhoods at different times of day to get a true feel for the area before making a decision." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
