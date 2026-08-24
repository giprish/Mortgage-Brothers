/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "How much equity do I need to refinance?", a: "Most lenders require you to have at least 20% equity in your home to qualify for a refinance. This ensures that you have a sufficient buffer against fluctuations in property value." },
  { q: "What credit score is needed for refinancing?", a: "While specific requirements vary by lender, a credit score of 620 or higher is generally recommended for conventional loans. A higher score may qualify you for better rates and terms." },
  { q: "Are there costs associated with refinancing?", a: "Yes, refinancing typically involves closing costs, which can range from 3% to 6% of the loan amount. It's important to evaluate whether the potential savings outweigh these costs." },
  { q: "How long does the refinancing process take?", a: "The refinancing process can take anywhere from 30 to 45 days, depending on the lender and your specific circumstances. Being prepared with necessary documents can help expedite the process." },
  { q: "Can I refinance if I've recently purchased my home?", a: "Yes, you can refinance shortly after purchasing your home, but it's advisable to wait until you've made at least six payments to avoid potential penalties and ensure you have enough equity built up." },
  { q: "Will I automatically qualify for a refinance with my current lender?", a: "Not necessarily. While your current lender may streamline the process, you'll still need to meet their qualifications based on your financial situation and creditworthiness." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
