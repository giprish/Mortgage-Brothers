/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "How much can I borrow with a reverse mortgage?", a: "The amount you can borrow depends on your age and current interest rates — typically between 30% and 60% of your home's appraised value (or $1,249,125, whichever is lower). For example, on a $500,000 home, a borrower might access anywhere from $150,000 to $300,000. The exact loan amount requires a review by a reverse mortgage loan officer. Give us a call and we can walk you through your specific numbers." },
  { q: "Can I use a reverse mortgage to purchase a home?", a: "Yes, you can use a reverse mortgage to purchase a home. This option allows seniors to buy a new primary residence and obtain a reverse mortgage in a single transaction." },
  { q: "How are the funds from a reverse mortgage disbursed?", a: "After paying off any existing mortgages or liens, you can receive the remaining funds in several ways: Lump sum; Line of credit; Monthly draws. You can choose the option that best fits your financial needs." },
  { q: "What documents do I need for a reverse mortgage application?", a: "When applying, you'll need to bring: HUD counseling certificate; Driver's license or ID; Proof of Social Security number; Current mortgage statement (if applicable); Homeowners insurance declaration page; HOA statement (if applicable)." },
  { q: "Is HUD counseling required for a reverse mortgage?", a: "Yes, completing HUD reverse mortgage counseling is a mandatory step. We provide a list of approved Arizona HUD counseling agencies. Counseling can be done face-to-face or over the phone." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
