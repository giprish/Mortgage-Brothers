/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "What credit score is considered 'good' for a mortgage?", a: "A credit score between **700 and 759** is typically considered good. While it's not \"excellent,\" this score range still qualifies you for competitive rates and favorable loan terms." },
  { q: "Can I qualify for a mortgage with a lower down payment if I have good credit?", a: "Yes, borrowers with good credit often qualify for programs like **low-down-payment conventional loans** that require as little as **3% down**." },
  { q: "How does my credit score affect my interest rate?", a: "A higher credit score usually results in a **lower interest rate**. While good credit won't always secure the lowest rates available, it still provides access to competitive rates that can save you money over time." },
  { q: "What types of mortgage loans are best for good credit borrowers?", a: "Good credit borrowers can benefit from a variety of loan programs, including: **Conventional Fixed-Rate Loans** for stable payments; **Adjustable-Rate Mortgages (ARMs)** for lower initial rates; **FHA Loans** for low down payment options." },
  { q: "Can I refinance my existing mortgage with a good credit score?", a: "Yes! A good credit score makes refinancing easier, allowing you to **reduce your interest rate**, change your loan term, or access your home's equity." },
  { q: "Will checking mortgage rates affect my credit score?", a: "If you apply for pre-approval, lenders perform a **hard inquiry**, which may cause a small, temporary dip in your credit score. However, using a **soft inquiry tool** to check rates won't impact your score. Need Personalized Help?" },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
