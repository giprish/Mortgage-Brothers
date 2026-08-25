/** Shared FAQ copy — used by PageClient UI and JSON-LD. Matched to LIVE. */
export const faqs = [
  { q: "What is a conventional loan?", a: "A conventional loan is a mortgage that is not backed by a government agency. These loans are typically owned by Fannie Mae or Freddie Mac and follow their guidelines. Conventional loans offer competitive rates and flexible terms for various property types and purposes." },
  { q: "What are the loan limits for conventional home loans in Arizona?", a: "For 2026, the conventional loan limits in Arizona are: Single-family homes: $832,750; Duplexes: $1,066,250; Triplexes: $1,288,800; Four-unit properties: $1,601,750." },
  { q: "What's the minimum down payment for a conventional loan?", a: "You can put down as little as 3% for a conventional loan. This low down payment option makes homeownership more accessible, especially for first-time buyers. However, putting 20% or more down eliminates the need for private mortgage insurance (PMI)." },
  { q: "What credit score do I need for a conventional loan?", a: "The minimum credit score required for a conventional loan is 620. However, higher credit scores often lead to better interest rates and lower mortgage insurance premiums. It's beneficial to aim for the highest score possible to secure the best terms." },
  { q: "Can I use a conventional loan for an investment property?", a: "Yes, conventional loans can be used for investment properties, second homes, and primary residences. This flexibility is one of the key advantages of conventional loans compared to some government-backed loan programs." },
  { q: "What is the recast option in conventional loans?", a: "The recast option is a unique feature of conventional loans that allows you to recalculate your mortgage payment after making a large principal payment. This can potentially lower your monthly payments without the need to refinance." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
