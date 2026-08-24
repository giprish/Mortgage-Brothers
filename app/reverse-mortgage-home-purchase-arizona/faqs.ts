/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "How does a Reverse Mortgage for Home Purchase differ from a traditional reverse mortgage?", a: "While both allow homeowners 62+ to tap into home equity, a Reverse Mortgage for Home Purchase is specifically used to buy a new home. Traditional reverse mortgages are for current homeowners who want to access their existing home's equity." },
  { q: "What happens to the home after I pass away?", a: "Your heirs have options. They can keep the home by paying off the loan balance, sell the home to repay the loan, or turn the home over to the lender. Any remaining equity after the loan is repaid belongs to your heirs." },
  { q: "Can I sell the home if I choose to move?", a: "Yes, you can sell your home at any time. The loan becomes due when you sell, and any remaining equity is yours to keep." },
  { q: "Do I have to make any payments while living in the home?", a: "No monthly mortgage payments are required. However, you must continue to pay property taxes, homeowners insurance, and maintain the home." },
  { q: "How much down payment is typically required?", a: "The down payment is usually around 50-60% of the home's purchase price, but this can vary based on factors like age and current interest rates." },
  { q: "Will this affect my Social Security or Medicare benefits?", a: "Generally, a Reverse Mortgage for Home Purchase does not affect Social Security or Medicare benefits. However, it may impact needs-based benefits like Medicaid." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
