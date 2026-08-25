/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "What mortgage loan programs are available in Arizona?", a: "We offer Conventional, FHA, FHA Streamline, VA, Jumbo, Reverse Mortgage, Reverse Mortgage for Purchase, Refinancing, First Time Home Buyer, and Private Money Lender programs — all tailored to Arizona homeowners across Phoenix, Scottsdale, and Maricopa County." },
  { q: "How do I know which loan program is right for me?", a: "It depends on your credit score, down payment, military service, and financial goals. Our team will walk you through your options and recommend the best fit — at no cost and no obligation. Call us at 602-535-2171 or use our contact form to get started." },
  { q: "What is the difference between FHA and Conventional loans?", a: "FHA loans require as little as 3.5% down and are more flexible on credit scores, making them popular with first-time buyers. Conventional loans typically require stronger credit but offer more flexibility on loan amounts and property types. We can help you compare both side by side." },
  { q: "Do you serve all of Arizona or just Maricopa County?", a: "We are licensed statewide and serve all of Arizona, though we specialize in the Phoenix metro and Maricopa County market. Whether you are in Tucson, Flagstaff, or anywhere across the state, we can help you find the right loan program." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
