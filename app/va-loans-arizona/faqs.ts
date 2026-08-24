/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "Can I use my VA loan benefits multiple times?", a: "Yes, even if you currently have a VA loan, you may be eligible for another VA loan with 0% down. Eligibility depends on your remaining entitlement and the county where you plan to purchase." },
  { q: "What types of properties can I buy with a VA loan?", a: "VA loans can be used for existing homes, new construction, approved condominiums, and owner-occupied multi-family properties up to 4 units." },
  { q: "Can I refinance my current mortgage with a VA loan?", a: "Yes, you can refinance both VA and non-VA loans using either an Interest Rate Reduction Refinance Loan (IRRRL) or a VA cash-out refinance." },
  { q: "Can I use my VA loan for high-end properties?", a: "Yes, VA jumbo loans are available for loan amounts up to $2,000,000 for borrowers with sufficient entitlement. Veterans with full entitlement have no VA loan limit -- a down payment is only required if your entitlement has been reduced by a previous VA loan." },
  { q: "Can I take cash out with a VA loan?", a: "Yes, qualified veterans can access up to 100% of their home's value through a VA cash-out refinance for home improvements, debt consolidation, or other needs." },
  { q: "What credit score do I need for a VA loan?", a: "While the VA doesn't set a minimum credit score, most lenders require a score of at least 620. VA loans often offer competitive rates regardless of credit score." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
