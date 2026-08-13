export type BlogArticle = {
  id: string;
  title: string;
  description: string;
  href: string;
  date: string;
  readTime: string;
  category: string;
  categories: string[];
  isFeatured?: boolean;
};

export const CATEGORY_HREF_MAP: Record<string, string> = {
  All: "/blog/",
  "Pillar Post": "/pillar-post/",
  "Arizona Mortgage Insights": "/arizona-mortgage-insights/",
  "Mortgage Basics": "/mortgage-basics/",
  "FHA Loans": "/fha-loans/",
  "Real Estate & Mortgages": "/real-estate-mortgages/",
  "Process Guidance": "/mortgage-process-guidance/",
};

export const CATEGORY_FROM_PATH: Record<string, string> = {
  "/blog": "All",
  "/blog/": "All",
  "/pillar-post": "Pillar Post",
  "/pillar-post/": "Pillar Post",
  "/arizona-mortgage-insights": "Arizona Mortgage Insights",
  "/arizona-mortgage-insights/": "Arizona Mortgage Insights",
  "/mortgage-basics": "Mortgage Basics",
  "/mortgage-basics/": "Mortgage Basics",
  "/fha-loans": "FHA Loans",
  "/fha-loans/": "FHA Loans",
  "/real-estate-mortgages": "Real Estate & Mortgages",
  "/real-estate-mortgages/": "Real Estate & Mortgages",
  "/mortgage-process-guidance": "Process Guidance",
  "/mortgage-process-guidance/": "Process Guidance",
};

export const BLOG_CATEGORIES = [
  "All",
  "Pillar Post",
  "Arizona Mortgage Insights",
  "Mortgage Basics",
  "Real Estate & Mortgages",
  "Process Guidance",
] as const;

export const blogArticles: BlogArticle[] = [
  {
    "title": "The Complete Arizona Guide to Selling Your Home for Cash (2026)",
    "description": "A cash home sale is a transaction in which a buyer purchases your house outright, without a mortgage. Learn the pros, cons, and alternatives in Arizona.",
    "href": "/how-to-sell-my-house-fast-in-arizona/",
    "date": "Jun 25, 2026",
    "readTime": "33 min read",
    "category": "Pillar Post",
    "categories": [
      "Pillar Post",
      "Real Estate & Mortgages"
    ],
    "id": "how-to-sell-my-house-fast-in-arizona",
    "isFeatured": true
  },
  {
    "title": "Conventional Home Loans vs. FHA Loans: Which Is Right for You?",
    "description": "Side-by-side comparison of down payments, credit requirements, PMI vs. MIP, and loan limits for Arizona homebuyers in 2026.",
    "href": "/conventional-home-loans-vs-fha-loans-which-is-right-for-you/",
    "date": "Jun 20, 2026",
    "readTime": "12 min read",
    "category": "Pillar Post",
    "categories": [
      "Pillar Post",
      "Mortgage Basics",
      "Process Guidance",
      "FHA Loans"
    ],
    "id": "conventional-home-loans-vs-fha-loans-which-is-right-for-you",
    "isFeatured": false
  },
  {
    "title": "Canceling your FHA MIP is Easier than you think",
    "description": "If you are still paying Mortgage Insurance Premiums (MIP) on an FHA-backed loan you may be paying more than you need to. Canceling this type of mortgage insurance can also be easier than many homeowners believe.",
    "href": "/canceling-your-fha-mip-is-easier-than-you-think/",
    "date": "Feb 6, 2025",
    "readTime": "10 min read",
    "category": "FHA Loans",
    "categories": [
      "FHA Loans",
      "Homeownership Tips"
    ],
    "id": "canceling-your-fha-mip-is-easier-than-you-think",
    "isFeatured": false
  },
  {
    "title": "Put A Bow On It: FHA Loan Gift Guide",
    "description": "Many first-time homebuyers do not have the savings on hand for a large down payment. FHA loans require as little as 3.5% down and allow gift funds to cover it.",
    "href": "/put-bow-fha-loan-gift-guide/",
    "date": "Feb 5, 2025",
    "readTime": "8 min read",
    "category": "FHA Loans",
    "categories": [
      "FHA Loans"
    ],
    "id": "put-bow-fha-loan-gift-guide",
    "isFeatured": false
  },
  {
    "title": "FHA Flip Rule Waiver Expired – You need to wait 90 days to write a contract",
    "description": "If you are getting FHA financing, check whether the seller has owned the home for less than 90 days. Those properties are not eligible for FHA financing.",
    "href": "/fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract/",
    "date": "Feb 4, 2025",
    "readTime": "5 min read",
    "category": "FHA Loans",
    "categories": [
      "FHA Loans"
    ],
    "id": "fha-flip-rule-waiver-expired-you-need-wait-90-days-to-write-a-contract",
    "isFeatured": false
  },
  {
    "title": "What Is An Assumable Mortgage?",
    "description": "An assumable mortgage lets a buyer take over the seller’s existing loan, including the rate and remaining term, when the lender consents.",
    "href": "/assumable-mortgage/",
    "date": "Feb 4, 2025",
    "readTime": "6 min read",
    "category": "FHA Loans",
    "categories": [
      "FHA Loans",
      "Specialty Loans"
    ],
    "id": "assumable-mortgage",
    "isFeatured": false
  },
  {
    "title": "Arizona Vacation and Investment Home Mortgages",
    "description": "Learn down payment rules for Arizona vacation and investment homes, and why working with a local mortgage broker helps.",
    "href": "/arizona-vacation-and-investment-home-mortgages/",
    "date": "Feb 14, 2025",
    "readTime": "8 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights"
    ],
    "id": "arizona-vacation-and-investment-home-mortgages",
    "isFeatured": false
  },
  {
    "title": "How High Will A Lender Allow Your Deductible To Be?",
    "description": "See how raising your homeowners insurance deductible can lower premiums and what lenders typically allow.",
    "href": "/how-high-will-a-lender-allow-your-deductible-to-be/",
    "date": "Feb 12, 2025",
    "readTime": "9 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights"
    ],
    "id": "how-high-will-a-lender-allow-your-deductible-to-be",
    "isFeatured": false
  },
  {
    "title": "How Does My Car Loan Payment Affect My Mortgage?",
    "description": "See how car payments impact debt-to-income ratios and how much home-buying power you lose with common auto loan amounts.",
    "href": "/how-does-my-car-loan-payment-affect-my-mortgage/",
    "date": "Feb 4, 2025",
    "readTime": "8 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights"
    ],
    "id": "how-does-my-car-loan-payment-affect-my-mortgage",
    "isFeatured": false
  },
  {
    "title": "Top 7 Reasons Arizona Investment Home Buyers Choose Private Money Lenders",
    "description": "Discover why real estate investors in Phoenix and Scottsdale turn to private money lending for fast, flexible property acquisitions.",
    "href": "/top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders/",
    "date": "Jun 15, 2026",
    "readTime": "8 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights",
      "Real Estate & Mortgages"
    ],
    "id": "top-7-reasons-arizona-investment-home-buyers-choose-private-money-lenders",
    "isFeatured": false
  },
  {
    "title": "How to Get a Mortgage in Arizona with Fair or Improving Credit",
    "description": "Learn how buyers with credit scores between 580 and 660 qualify for home loans in Arizona with FHA programs and rapid rescoring.",
    "href": "/how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit/",
    "date": "Jun 10, 2026",
    "readTime": "7 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights",
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "how-to-get-a-mortgage-in-arizona-with-fair-or-improving-credit",
    "isFeatured": false
  },
  {
    "title": "Who Qualifies for a Reverse Mortgage? Understanding Eligibility in Arizona",
    "description": "A complete guide to HECM reverse mortgage eligibility rules, age requirements, and equity qualifications for Arizona seniors.",
    "href": "/who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements/",
    "date": "Jun 5, 2026",
    "readTime": "9 min read",
    "category": "Arizona Mortgage Insights",
    "categories": [
      "Arizona Mortgage Insights"
    ],
    "id": "who-qualifies-for-a-reverse-mortgage-understanding-eligibility-requirements",
    "isFeatured": false
  },
  {
    "title": "What to Expect When You’re Not a First Time Mortgage Shopper",
    "description": "What experienced Phoenix homebuyers need to know about online lenders, choosing a broker, pre-approval, rate locks, and closing.",
    "href": "/expect-youre-not-first-time-mortgage-shopper/",
    "date": "Feb 11, 2025",
    "readTime": "14 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "expect-youre-not-first-time-mortgage-shopper",
    "isFeatured": false
  },
  {
    "title": "The Ultimate Guide to Your First Mortgage",
    "description": "A complete first-time buyer guide covering credit, down payments, loan types, pre-approval, rate locks, and closing in Arizona.",
    "href": "/ultimate-guide-first-mortgage/",
    "date": "Feb 11, 2025",
    "readTime": "18 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "ultimate-guide-first-mortgage",
    "isFeatured": false
  },
  {
    "title": "Arizona Mortgage Closing Costs",
    "description": "Break down Arizona mortgage closing costs—lender fees, title company fees, appraisals, pest inspections, septic/well certifications, and condo questionnaire fees.",
    "href": "/arizona-mortgage-closing-costs/",
    "date": "Feb 10, 2025",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "arizona-mortgage-closing-costs",
    "isFeatured": false
  },
  {
    "title": "Arizona Refinance Process",
    "description": "Learn the Arizona refinance process, four top reasons to refinance, how to calculate net benefit, and HELOC vs cash-out options.",
    "href": "/arizona-refinance-process/",
    "date": "Feb 10, 2025",
    "readTime": "10 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "arizona-refinance-process",
    "isFeatured": false
  },
  {
    "title": "Why Use an Arizona Mortgage Broker",
    "description": "Learn why an Arizona mortgage broker can shop multiple lenders, compare rates, and guide you from pre-qualification through closing.",
    "href": "/why-use-an-arizona-mortgage-broker/",
    "date": "Feb 10, 2025",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "why-use-an-arizona-mortgage-broker",
    "isFeatured": false
  },
  {
    "title": "Understanding Your Credit",
    "description": "Understand FICO score components, free credit reports, and what does—and doesn’t—impact your score when applying for an Arizona mortgage.",
    "href": "/arizona-understanding-your-credit/",
    "date": "Feb 10, 2025",
    "readTime": "7 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "arizona-understanding-your-credit",
    "isFeatured": false
  },
  {
    "title": "Arizona Mortgage Closing Process",
    "description": "Understand prior-to-closing conditions, what to bring on signing day, and how closing timing affects your Arizona mortgage.",
    "href": "/arizona-mortgage-closing-process/",
    "date": "Feb 10, 2025",
    "readTime": "10 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "arizona-mortgage-closing-process",
    "isFeatured": false
  },
  {
    "title": "Arizona Mortgage Basics",
    "description": "Learn what a mortgage is, how approval works, payment structure, programs, closing costs/fees, and rates for Arizona homebuyers.",
    "href": "/arizona-mortgage-basics/",
    "date": "Feb 10, 2025",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "arizona-mortgage-basics",
    "isFeatured": false
  },
  {
    "title": "Arizona Home Buying Process",
    "description": "Walk through the five major steps of buying a home in Arizona—from pre-approval and your buying team to offer, paperwork, and closing.",
    "href": "/arizona-home-buying-process/",
    "date": "Feb 10, 2025",
    "readTime": "9 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "arizona-home-buying-process",
    "isFeatured": false
  },
  {
    "title": "Arizona Mortgage Payments",
    "description": "Understand what’s in your Arizona mortgage payment—principal, interest, taxes, insurance, MIP/PMI—and how escrow and impound accounts work.",
    "href": "/arizona-mortgage-payments/",
    "date": "Feb 10, 2025",
    "readTime": "7 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "arizona-mortgage-payments",
    "isFeatured": false
  },
  {
    "title": "Learn About the Home Mortgage Approval Process",
    "description": "A step-by-step roadmap of the Arizona mortgage approval process, plus key concepts like DTI, LTV, credit, and pre-approval letters.",
    "href": "/arizona-mortgage-approval-process/",
    "date": "Feb 10, 2025",
    "readTime": "12 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics",
      "Process Guidance"
    ],
    "id": "arizona-mortgage-approval-process",
    "isFeatured": false
  },
  {
    "title": "How to Calculate How Much PMI Mortgage Insurance Will Be",
    "description": "Learn how PMI is calculated, when it’s required, and how to remove it — with a real Radian quote example.",
    "href": "/how-to-calculate-how-much-pmi-mortgage-insurance-will-be/",
    "date": "Dec 30, 2024",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "how-to-calculate-how-much-pmi-mortgage-insurance-will-be",
    "isFeatured": false
  },
  {
    "title": "When is a mortgage payment actually considered late?",
    "description": "Learn when lenders vs. credit bureaus consider a mortgage payment late, grace periods, 5% late fees, and 30-day credit reporting.",
    "href": "/when-is-a-mortgage-payment-actually-considered-late/",
    "date": "Dec 29, 2024",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "when-is-a-mortgage-payment-actually-considered-late",
    "isFeatured": false
  },
  {
    "title": "Understanding An Amortization Schedule",
    "description": "Learn how a mortgage amortization schedule works, how principal and interest change over time, and how extra payments can shorten your loan.",
    "href": "/understanding-amortization-chart/",
    "date": "Feb 3, 2025",
    "readTime": "7 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "understanding-amortization-chart",
    "isFeatured": false
  },
  {
    "title": "What Are Mortgage Trigger Leads? Why Are Strangers Calling Your phone?",
    "description": "Learn what mortgage trigger leads are, why strangers call after you apply, and how to stop unwanted calls and mail with Do Not Call and DMA Choice.",
    "href": "/what-are-mortgage-trigger-leads/",
    "date": "Feb 3, 2025",
    "readTime": "6 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "what-are-mortgage-trigger-leads",
    "isFeatured": false
  },
  {
    "title": "How Does a Mortgage APR Work and What Does It Mean?",
    "description": "Learn how mortgage APR differs from interest rate, how closing costs affect APR, and how to compare loan offers by focusing on fees—not just the rate.",
    "href": "/how-does-a-mortgage-apr-work-and-what-does-it-mean/",
    "date": "Feb 3, 2025",
    "readTime": "8 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "how-does-a-mortgage-apr-work-and-what-does-it-mean",
    "isFeatured": false
  },
  {
    "title": "What Are Closing Costs on a Home Purchase",
    "description": "Learn what closing costs are on a home purchase, what fees are true lender costs, and how prepaids like taxes and insurance affect cash-to-close.",
    "href": "/what-are-closing-costs-on-a-home-purchase/",
    "date": "Feb 3, 2025",
    "readTime": "9 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "what-are-closing-costs-on-a-home-purchase",
    "isFeatured": false
  },
  {
    "title": "Why Is My Mortgage Payoff Higher Than My Mortgage Statement Balance?",
    "description": "Understand why mortgage payoff amounts can exceed statement balances, including daily accrued interest, payoff timing, and closing date impacts.",
    "href": "/mortgage-payoff-higher-than-mortgage-balance/",
    "date": "Feb 3, 2025",
    "readTime": "7 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "mortgage-payoff-higher-than-mortgage-balance",
    "isFeatured": false
  },
  {
    "title": "What Is a Jumbo Loan? Everything You Need to Know Before Applying in Arizona",
    "description": "Understanding non-conforming luxury home financing, qualification rules, and 2026 limits in Scottsdale and Phoenix.",
    "href": "/what-is-a-jumbo-loan-everything-you-need-to-know-before-applying/",
    "date": "May 12, 2026",
    "readTime": "9 min read",
    "category": "Mortgage Basics",
    "categories": [
      "Mortgage Basics"
    ],
    "id": "what-is-a-jumbo-loan-everything-you-need-to-know-before-applying",
    "isFeatured": false
  },
  {
    "title": "Arizona Real Estate Trends in 2026: Predicting Mortgage Rates & Market Shifts",
    "description": "Market analysis on 2026 Phoenix mortgage rate forecasts, housing inventory recovery, and home appreciation trends.",
    "href": "/arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year/",
    "date": "May 5, 2026",
    "readTime": "10 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "arizona-real-estate-trends-in-2026-predicting-mortgage-rates-for-the-coming-year",
    "isFeatured": false
  },
  {
    "title": "LSU Forms – Loan Status Updates and what you need to know",
    "description": "We go through the Arizona LSU (Loan Status Updates) form lenders send to sellers throughout a purchase—and what buyers, sellers, and Realtors should watch for.",
    "href": "/lsu-forms-loan-status-updates-and-what-you-need-to-know/",
    "date": "Feb 6, 2025",
    "readTime": "12 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "lsu-forms-loan-status-updates-and-what-you-need-to-know",
    "isFeatured": false
  },
  {
    "title": "Difference Between Owner-Occupied, Second Home, and Investment Property?",
    "description": "Occupancy type drives down payment, loan programs, and rates. Compare owner-occupied, second home, and investment property requirements.",
    "href": "/difference-between-owner-occupied-second-home-and-investment-property/",
    "date": "Feb 5, 2025",
    "readTime": "7 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "difference-between-owner-occupied-second-home-and-investment-property",
    "isFeatured": false
  },
  {
    "title": "How do Solar Panels affect the mortgage and closing process?",
    "description": "Learn how lenders view owned vs. leased solar panels, how they impact appraised value, and whether solar payments affect mortgage qualifications.",
    "href": "/how-do-solar-panels-affect-the-mortgage-and-closing-process/",
    "date": "Feb 6, 2025",
    "readTime": "10 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages",
      "Process Guidance"
    ],
    "id": "how-do-solar-panels-affect-the-mortgage-and-closing-process",
    "isFeatured": false
  },
  {
    "title": "Air Conditioning’s Impact on Phoenix Valley Real Estate",
    "description": "How residential AC shaped Phoenix growth, swamp coolers vs central air, and what cooling systems mean for Valley home values and energy costs.",
    "href": "/air-conditionings-impact-phoenix-valley-real-estate/",
    "date": "Feb 6, 2025",
    "readTime": "8 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "air-conditionings-impact-phoenix-valley-real-estate",
    "isFeatured": false
  },
  {
    "title": "Arizona BINSR Buyer Inspection Notice and Seller Response",
    "description": "Learn how the Arizona BINSR process works, what buyers and sellers need to know, and how to handle repair requests in a home sale.",
    "href": "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
    "date": "Feb 4, 2025",
    "readTime": "7 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "arizona-binsr-buyer-inspection-notice-and-seller-response",
    "isFeatured": false
  },
  {
    "title": "What you need to know about the Arizona Prequalification Form",
    "description": "Highlight key line items on the Arizona Prequalification Form, how it strengthens offers in competitive markets, and why income and asset docs matter.",
    "href": "/what-you-need-to-know-about-the-arizona-prequalification-form/",
    "date": "Feb 4, 2025",
    "readTime": "12 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "what-you-need-to-know-about-the-arizona-prequalification-form",
    "isFeatured": false
  },
  {
    "title": "Arizona Mortgage Rates and the Interest Deduction",
    "description": "Understand the mortgage interest tax deduction, why few homeowners claim it, and how demographics affect usage across states including Arizona.",
    "href": "/arizona-mortgage-rates-and-the-interest-deduction/",
    "date": "Feb 4, 2025",
    "readTime": "6 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "arizona-mortgage-rates-and-the-interest-deduction",
    "isFeatured": false
  },
  {
    "title": "Prepayment Penalties on Your Arizona Mortgage",
    "description": "Learn how optional prepayment penalties work on Arizona mortgages, when they may lower your rate, and how to negotiate or avoid surprise fees.",
    "href": "/prepayment-penalties-on-your-arizona-mortgage/",
    "date": "Feb 4, 2025",
    "readTime": "5 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "prepayment-penalties-on-your-arizona-mortgage",
    "isFeatured": false
  },
  {
    "title": "Buying Down Your Home Loan Interest Rate",
    "description": "Learn how mortgage buydowns and discount points work in Arizona, including simple, 2-1, and 3-2-1 options that can lower your rate.",
    "href": "/buying-down-your-arizona-interest-rate/",
    "date": "Feb 4, 2025",
    "readTime": "6 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "buying-down-your-arizona-interest-rate",
    "isFeatured": false
  },
  {
    "title": "Arizona Second Mortgages",
    "description": "Understand Arizona second mortgages, home equity loans, HELOCs, and how homeowners can qualify to access equity.",
    "href": "/arizona-second-mortgages/",
    "date": "Feb 4, 2025",
    "readTime": "6 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "arizona-second-mortgages",
    "isFeatured": false
  },
  {
    "title": "Arizona Real Estate Capital Gains is back",
    "description": "A recap of capital gains rules for Arizona home sellers, main-home exclusions, and special situations that can reduce tax liability.",
    "href": "/arizona-real-estate-capital-gains-is-back/",
    "date": "Feb 4, 2025",
    "readTime": "6 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "arizona-real-estate-capital-gains-is-back",
    "isFeatured": false
  },
  {
    "title": "What Is The Difference Between A Condo And A Townhome?",
    "description": "Compare Arizona condo vs townhome ownership structures and why lenders treat condos with stricter financing guidelines.",
    "href": "/what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome/",
    "date": "Feb 5, 2025",
    "readTime": "6 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "what-is-the-difference-between-aan-arizona-condo-and-arizona-townhome",
    "isFeatured": false
  },
  {
    "title": "Does connecting a guest house to the main house add value?",
    "description": "See how connecting a detached casita to the main house can change appraisal value, square footage, and refinance options.",
    "href": "/connecting-guest-house-main-house-add-value/",
    "date": "Feb 5, 2025",
    "readTime": "9 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "connecting-guest-house-main-house-add-value",
    "isFeatured": false
  },
  {
    "title": "Detached Guest Home (Casita) Appraisal Issues",
    "description": "Learn how casitas are appraised as line-item adjustments, why values often lag build cost, and what that means for buyers and refinancers.",
    "href": "/detached-guest-home-casita-appraisal-issues/",
    "date": "Feb 5, 2025",
    "readTime": "11 min read",
    "category": "Real Estate & Mortgages",
    "categories": [
      "Real Estate & Mortgages"
    ],
    "id": "detached-guest-home-casita-appraisal-issues",
    "isFeatured": false
  },
  {
    "title": "How Fast is Too Fast to Close a Mortgage Loan to Purchase a House?",
    "description": "Learn why a 30-day close is ideal, when 20–25 days is reasonable, and the risks of rushing a super-fast mortgage closing.",
    "href": "/how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house/",
    "date": "Feb 4, 2025",
    "readTime": "10 min read",
    "category": "Process Guidance",
    "categories": [
      "Process Guidance"
    ],
    "id": "how-fast-is-too-fast-to-close-a-mortgage-loan-to-purchase-a-house",
    "isFeatured": false
  },
  {
    "title": "VA Loans for First-Time Homebuyers in Arizona: Your Path to Homeownership",
    "description": "Explore 0% down payment VA loan benefits, eligibility guidelines, and rate advantages for military buyers in Arizona.",
    "href": "/va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership/",
    "date": "May 28, 2026",
    "readTime": "8 min read",
    "category": "Process Guidance",
    "categories": [
      "Process Guidance"
    ],
    "id": "va-loans-for-first-time-homebuyers-in-arizona-your-path-to-affordable-homeownership",
    "isFeatured": false
  },
  {
    "title": "What Is a Conventional Home Loan? The Complete First-Time Buyer Mortgage Guide",
    "description": "Learn what a conventional home loan is, 2025 Arizona loan limits, qualification requirements, and how it compares to FHA, VA, and jumbo options.",
    "href": "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
    "date": "Sep 16, 2025",
    "readTime": "12 min read",
    "category": "Process Guidance",
    "categories": [
      "Process Guidance"
    ],
    "id": "what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide",
    "isFeatured": false
  }
];
