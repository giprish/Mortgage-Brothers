/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "Can I get a mortgage with poor credit?", a: "Yes! Government-backed loans like **FHA, VA, and USDA mortgages** offer **flexible credit score requirements**. Some lenders also provide alternative loan programs for borrowers with **credit scores below 580**." },
  { q: "What's the minimum credit score required for a mortgage?", a: "**FHA loans:** As low as **580** (with 3.5% down); **VA & USDA loans:** No set minimum, but most lenders prefer **at least 580-620**; **Conventional loans:** Typically **620 or higher**." },
  { q: "Will I need a larger down payment with poor credit?", a: "It depends on the loan type. **FHA loans** require as little as **3.5% down**, but some conventional lenders may ask for **10-20% down** if your credit score is low." },
  { q: "How can I improve my chances of getting approved?", a: "Reduce your **debt-to-income (DTI) ratio** by paying off outstanding debts; Save for a **larger down payment** to lower your lender's risk; Get a **co-signer** with strong credit; Work with a lender that specializes in **low-credit mortgages**." },
  { q: "Can I refinance my mortgage after improving my credit?", a: "Yes! Once your **credit score improves**, you may qualify for a **lower interest rate** through refinancing, which can help reduce your monthly payments." },
  { q: "Will applying for a mortgage hurt my credit score?", a: "A **hard inquiry** from a lender may cause a **temporary dip** in your score, but **multiple mortgage inquiries within 45 days** typically count as one inquiry for credit scoring purposes." },
  { q: "Are there special mortgage programs for first-time homebuyers with bad credit?", a: "Yes! FHA and USDA loans are great options for **first-time homebuyers with low credit scores** because they have **low down payment requirements and flexible credit criteria**." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
