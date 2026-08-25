/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "Mortgage Insurance Differences", a: "Conventional loans allow mortgage insurance to be removed once you reach 20% equity in your home. FHA loans require mortgage insurance for the life of the loan if you put less than 10% down. With a 10% or larger down payment, FHA mortgage insurance can be removed after 11 years." },
  { q: "Switching from FHA to Conventional", a: "You can refinance from an FHA loan to a conventional loan once your credit improves or you build more equity. This is a common strategy for borrowers who start with FHA loans due to credit issues but want to eliminate mortgage insurance in the future." },
  { q: "Appraisal Differences", a: "Contrary to popular belief, FHA and conventional appraisals are very similar today. Both focus on health and safety issues. The main difference is that FHA appraisals may be slightly more stringent about peeling paint, but this is a minor concern that can also arise in conventional appraisals." },
  { q: "Credit Score Impact", a: "FHA loans are more forgiving of lower credit scores, with rates staying consistent for scores above 660. Conventional loans are highly sensitive to credit scores, with significant rate increases for scores below 700. This makes FHA loans often more attractive for borrowers with credit scores in the 600s." },
  { q: "Down Payment Requirements", a: "FHA loans require a minimum of 3.5% down, while conventional loans typically require at least 5% down, though some programs offer 3% down payments for qualified buyers." },
  { q: "Loan Limits", a: "Yes, FHA loans have lower limits than conventional loans in most Arizona areas. As of 2026, the conventional conforming loan limit in Arizona is $832,750 for a single-family home. FHA limits vary by county—for example $557,750 in Maricopa County, $609,500 in Coconino County, and $541,287 in many other Arizona counties." },
  { q: "Debt-to-Income Ratio", a: "FHA loans are generally more lenient, allowing DTI ratios up to 50% in some cases, while conventional loans typically prefer a maximum DTI of 43%, though exceptions can be made." },
  { q: "Property Type Restrictions", a: "FHA loans are primarily for owner-occupied primary residences, while conventional loans can be used for primary homes, second homes, and investment properties." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
