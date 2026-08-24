/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "What credit score do I need to get the best mortgage rates?", a: "Lenders typically offer the lowest interest rates to borrowers with a credit score of 760 or higher. However, you can still get competitive rates with a score above 720." },
  { q: "Can I qualify for a mortgage with just my credit score, or do lenders look at other factors?", a: "Your credit score is important, but lenders also consider your income, debt-to-income (DTI) ratio, employment history, and down payment amount. Having excellent credit helps, but strong finances overall give you the best chances for approval." },
  { q: "Is a higher credit score always better for mortgage approval?", a: "While a high credit score helps secure lower rates and better terms, lenders also evaluate loan size, income stability, and debt obligations. A score above 760 will generally unlock the best rates, but improving your DTI ratio and saving for a higher down payment can also improve your loan offer." },
  { q: "What loan programs are available for borrowers with excellent credit?", a: "Borrowers with high credit scores have access to more flexible loan options, including conventional fixed-rate loans with low interest rates, jumbo loans for high-value homes, adjustable-rate mortgages (ARMs) with lower initial rates, and cash-out refinancing to access home equity at better terms." },
  { q: "How much can I borrow with a high credit score?", a: "The amount you can borrow depends on your income, existing debts, and loan type. High-credit borrowers often qualify for larger loan amounts, especially if they have a low debt-to-income ratio and strong financial history." },
  { q: "Should I put more than the minimum down payment if I have excellent credit?", a: "While some programs allow as little as 3% down, a larger down payment (10–20%) can help you secure an even lower interest rate, avoid private mortgage insurance (PMI), and reduce your monthly payment and total loan cost." },
  { q: "Does checking mortgage rates impact my credit score?", a: "If you apply for pre-approval, lenders perform a hard inquiry, which may cause a small temporary dip in your credit score. However, checking rates through a soft inquiry does not affect your credit." },
  { q: "Can I refinance my mortgage if I already have excellent credit?", a: "Yes! Refinancing allows you to lower your rate, shorten your loan term, or cash out equity. Even with excellent credit, it's important to compare current rates and potential savings before refinancing." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
