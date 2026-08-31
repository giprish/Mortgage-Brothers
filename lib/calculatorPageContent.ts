export type CalculatorFeatureIcon =
  | "compare"
  | "savings"
  | "breakeven"
  | "cashout"
  | "info"
  | "payment"
  | "amortization"
  | "affordability"
  | "budget"
  | "time"
  | "mip"
  | "limits"
  | "downpayment";

export type CalculatorFeature = {
  title: string;
  description: string;
  icon: CalculatorFeatureIcon;
};

export type CalculatorExplainerContent = {
  title: string;
  paragraphs: string[];
  features: CalculatorFeature[];
};

export type ExploreCalculatorItem = {
  href: string;
  title: string;
  bullets: [string, string];
};

export type CalculatorMidCtaContent = {
  title: string;
  description: string;
  ctaLabel: string;
  /** Defaults to `#get-pre-approved` when omitted. */
  ctaHref?: string;
};

export type CalculatorPageContent = {
  explainer: CalculatorExplainerContent;
  /** Green mid-page CTA band (above explore grid on live). */
  midCta: CalculatorMidCtaContent;
  explore: {
    title: string;
    intro: string;
  };
  contact: {
    title: string;
    description: string;
  };
};

/** Shared 10-calculator grid — identical card copy on live across all calculator pages. */
export const SHARED_EXPLORE_CALCULATORS: ExploreCalculatorItem[] = [
  {
    href: "/basic-mortgage-payment-calculator/",
    title: "Basic Mortgage Payment Calculator",
    bullets: [
      "Calculates monthly payments based on loan amount, interest rate, and term",
      "Essential for quick estimates of mortgage costs",
    ],
  },
  {
    href: "/mortgage-affordability-calculator/",
    title: "Affordability Calculator",
    bullets: [
      "Helps determine how much house you can afford based on income and debts",
      "Great for setting a realistic budget before house hunting",
    ],
  },
  {
    href: "/refinance-calculator/",
    title: "Refinance Calculator",
    bullets: [
      "Compares current mortgage with potential refinance options",
      "Useful for deciding if refinancing makes financial sense",
    ],
  },
  {
    href: "/rent-vs-buy-calculator/",
    title: "Rent vs. Buy Calculator",
    bullets: [
      "Compares the costs of renting versus buying over time",
      "Helps make the big decision between renting and homeownership",
    ],
  },
  {
    href: "/extra-payment-mortgage-calculator/",
    title: "Extra Payment Calculator",
    bullets: [
      "Shows the impact of making additional payments on loan term and interest",
      "Perfect for those looking to pay off their mortgage faster",
    ],
  },
  {
    href: "/fha-loan-calculator/",
    title: "FHA Loan Calculator",
    bullets: [
      "Calculates payments for FHA loans, including mortgage insurance",
      "Ideal for first-time homebuyers considering FHA financing",
    ],
  },
  {
    href: "/va-loan-calculator/",
    title: "VA Loan Calculator",
    bullets: [
      "Estimates payments for VA loans, factoring in the funding fee",
      "Great for veterans and active-duty military personnel",
    ],
  },
  {
    href: "/down-payment-calculator/",
    title: "Down Payment Calculator",
    bullets: [
      "Helps determine how much to save for a down payment",
      "Useful for planning and setting savings goals",
    ],
  },
  {
    href: "/debt-to-income-ratio-calculator/",
    title: "Debt-to-Income Ratio Calculator",
    bullets: [
      "Calculates DTI ratio to determine loan eligibility",
      "Important for understanding how lenders view your financial health",
    ],
  },
  {
    href: "/home-purchase-closing-cost-calculator/",
    title: "Home Purchase Closing Cost Calculator",
    bullets: [
      "Estimates various closing costs associated with buying a home",
      "Helps buyers prepare for additional expenses beyond the down payment",
    ],
  },
];

const CALCULATOR_PAGE_CONTENT: Record<string, CalculatorPageContent> = {
  "/basic-mortgage-payment-calculator/": {
    explainer: {
      title: "Simplify Your Mortgage Planning",
      paragraphs: [
        "A basic mortgage payment calculator is a powerful tool designed to help you navigate the complexities of home financing. By providing quick estimates of your potential monthly payments, it empowers you to make informed decisions about your home purchase.",
        "This calculator allows you to assess how different loan terms, interest rates, and down payments can impact your financial obligations, ensuring that you choose the best mortgage options for your unique situation.",
      ],
      features: [
        {
          icon: "payment",
          title: "Monthly Payment Breakdown",
          description:
            "See how your payment is divided between principal, interest, taxes, and insurance",
        },
        {
          icon: "savings",
          title: "Total Cost of Borrowing",
          description:
            "Understand the full amount you'll pay over the life of your loan, including interest.",
        },
        {
          icon: "amortization",
          title: "Amortization Schedule",
          description:
            "View how your loan balance decreases over time as you make payments.",
        },
        {
          icon: "affordability",
          title: "Affordability Assessment",
          description:
            "Determine how much house you can comfortably afford based on your income and expenses.",
        },
        {
          icon: "breakeven",
          title: "Interest Savings",
          description:
            "Explore how different down payments or loan terms can affect your total interest paid.",
        },
      ],
    },
    midCta: {
      title: "Take the Next Step in Your Home Purchase",
      description:
        "Now that you've estimated your mortgage payments, let's discuss how to make your dream home a reality. Our team is here to guide you through the process, providing personalized advice and support every step of the way.",
      ctaLabel: "Get Personalized Mortgage Guidance",
    },
    explore: {
      title: "Explore More Mortgage Tools",
      intro:
        "In addition to our Basic Mortgage Payment Calculator, we offer a range of other tools designed to help you navigate the home buying process with confidence. Whether you're looking to calculate closing costs or explore different mortgage options, our calculators provide you with the insights you need to make informed decisions.",
    },
    contact: {
      title: "Get Personalized Mortgage Guidance",
      description:
        "Now that you've explored our Basic Mortgage Payment Calculator, take the next step towards securing your dream home. Our experienced team is here to provide personalized advice and support tailored to your unique financial situation. Whether you have questions about mortgage options, need help understanding your calculations, or want to discuss your home buying strategy, we're ready to assist you. Please fill out the form below to get in touch with us today!",
    },
  },

  "/mortgage-affordability-calculator/": {
    explainer: {
      title: "What is a Mortgage Affordability Calculator?",
      paragraphs: [
        "A mortgage affordability calculator helps you determine how much home you can realistically afford based on your financial situation. It takes into account factors like your income, debt, and desired down payment to provide an estimate of your purchasing power in the Arizona housing market.",
        "By using our affordability calculator, you can save substantial time in your home search and make more informed decisions. Rather than looking at properties outside your budget, you'll know exactly what price range to focus on, allowing you to house-hunt with confidence.",
      ],
      features: [
        {
          icon: "affordability",
          title: "Determine your price range",
          description:
            "Find out how much home you can afford based on your income and financial situation, helping you focus your search on properties within your budget.",
        },
        {
          icon: "downpayment",
          title: "Plan your down payment",
          description:
            "See how different down payment amounts affect your monthly mortgage payments and overall affordability.",
        },
        {
          icon: "compare",
          title: "Compare loan variables",
          description:
            "Adjust loan terms, interest rates, and down payment percentages to find the most practical financing option for your situation.",
        },
        {
          icon: "budget",
          title: "Budget effectively",
          description:
            "Use the calculator as a financial planning tool to prepare for homeownership, whether you're buying soon or saving for the future.",
        },
        {
          icon: "time",
          title: "Save time in your search",
          description:
            "By knowing your starting point financially, you can meet with lenders sooner and streamline your home search process.",
        },
      ],
    },
    midCta: {
      title: "Ready to Find Your Perfect Arizona Home?",
      description:
        "Get a personalized affordability assessment from our expert mortgage advisors. We'll help you understand your buying power and find the right financing options for your dream home in Arizona.",
      ctaLabel: "Get Pre-Approved Today",
    },
    explore: {
      title: "Explore Our Suite of Mortgage Calculators",
      intro:
        "Discover our comprehensive range of mortgage calculators designed to help you make informed decisions about your home financing. Whether you're looking to calculate closing costs, determine affordability, or explore different loan scenarios, our tools provide accurate and personalized results to guide your homebuying journey.",
    },
    contact: {
      title: "Get Expert Advice on Your Home Affordability",
      description:
        "Have questions about your mortgage affordability or need personalized guidance for your Arizona home purchase? Our team of experienced mortgage advisors is ready to help you understand your options and find the perfect financing solution. Fill out the form below, and we'll contact you promptly to discuss your home buying goals and budget considerations.",
    },
  },

  "/refinance-calculator/": {
    explainer: {
      title: "What is a Refinance Calculator?",
      paragraphs: [
        "A refinance calculator is a powerful online tool that helps homeowners evaluate the financial implications of refinancing their mortgage. By inputting key details about your current loan and potential new terms, you can quickly determine if refinancing makes financial sense for your situation.",
        "This calculator compares your existing mortgage with potential refinance options, providing clear insights into monthly payment changes, interest savings, and how long it will take to recoup closing costs. It simplifies complex financial calculations, allowing you to make informed decisions without the need for complicated manual calculations.",
      ],
      features: [
        {
          icon: "compare",
          title: "Compare loan scenarios",
          description:
            "Input different interest rates and loan terms to find the most cost-effective refinancing option for your needs.",
        },
        {
          icon: "savings",
          title: "Calculate potential savings",
          description:
            "See how much you could save monthly and over the life of your loan by refinancing to a lower interest rate.",
        },
        {
          icon: "breakeven",
          title: "Determine break-even point",
          description:
            "Find out exactly how long it will take for your refinance savings to outweigh the closing costs, helping you decide if refinancing is worthwhile.",
        },
        {
          icon: "cashout",
          title: "Evaluate cash-out options",
          description:
            "Assess whether tapping into your home equity through a cash-out refinance makes sense for debt consolidation or home improvements.",
        },
        {
          icon: "info",
          title: "Make informed decisions",
          description:
            "Get a clear picture of the financial impact before committing to a refinance, ensuring you choose the option that best aligns with your long-term financial goals.",
        },
      ],
    },
    midCta: {
      title: "Ready to Lower Your Mortgage Payments?",
      description:
        "Find out if refinancing makes financial sense for your situation. Our mortgage experts can help you navigate the refinance process and secure the best rates available in Arizona today.",
      ctaLabel: "Get Your Free Refinance Consultation",
    },
    explore: {
      title: "Explore Our Other Mortgage Calculators",
      intro:
        "Looking for more ways to plan your mortgage journey? Check out our comprehensive suite of mortgage calculators designed to help you make informed financial decisions. Each calculator provides specialized insights for different aspects of the home buying and refinancing process.",
    },
    contact: {
      title: "Contact Our Refinance Specialists",
      description:
        "Have questions about refinancing your mortgage or need personalized advice? Our Arizona mortgage experts are ready to help you navigate the refinance process and find the best solution for your financial goals. Fill out the form below, and one of our specialists will contact you promptly to discuss your refinance options.",
    },
  },

  "/rent-vs-buy-calculator/": {
    explainer: {
      title: "Understanding the Rent vs. Buy Calculator",
      paragraphs: [
        "The Rent vs. Buy Calculator is a powerful tool designed to help you make an informed decision about whether to rent or purchase a home. By comparing the long-term financial implications of renting versus buying, this calculator provides valuable insights into which option may be more financially beneficial for your specific situation.",
        "This calculator takes into account various factors such as monthly housing costs, property appreciation, investment returns, and tax considerations. It then projects these costs over time, typically 30 years, to give you a comprehensive view of the financial outcomes of renting versus buying.",
      ],
      features: [
        {
          icon: "compare",
          title: "Cost Comparison",
          description:
            "Analyzes monthly expenses for both renting and buying, including rent, mortgage payments, property taxes, and maintenance costs.",
        },
        {
          icon: "time",
          title: "Long-term Projections",
          description:
            "Forecasts the financial impact of your decision over an extended period, usually 30 years.",
        },
        {
          icon: "savings",
          title: "Investment Consideration",
          description:
            "Factors in potential returns from investing the money saved by renting instead of buying.",
        },
        {
          icon: "info",
          title: "Tax Implications",
          description:
            "Accounts for tax deductions associated with homeownership, such as mortgage interest and property tax deductions.",
        },
        {
          icon: "breakeven",
          title: "Appreciation and Inflation",
          description:
            "Considers home value appreciation and rent inflation over time.",
        },
      ],
    },
    midCta: {
      title: "Ready to Make Your Housing Decision?",
      description:
        "Get personalized insights on whether renting or buying makes more financial sense for your situation. Our mortgage experts can help you interpret the results and explore your options.",
      ctaLabel: "Get Expert Advice",
    },
    explore: {
      title: "Mortgage Tools to Support Your Decision",
      intro:
        "Discover additional calculators designed to help you make informed financial decisions about your Arizona home purchase. Each tool provides valuable insights into different aspects of the mortgage process, giving you a complete picture of your options.",
    },
    contact: {
      title: "Get Expert Advice on Your Rent vs. Buy Decision",
      description:
        "Still unsure whether renting or buying is the right choice for you? Our mortgage specialists are here to help. Fill out the form below or use our contact information to reach out, and we'll provide personalized insights based on your unique financial situation and Arizona's real estate market.",
    },
  },

  "/extra-payment-mortgage-calculator/": {
    explainer: {
      title: "What is an Extra Payment Mortgage Calculator?",
      paragraphs: [
        "An extra payment mortgage calculator helps you see how making additional payments on your mortgage can save you money and reduce your loan term. By calculating the impact of extra payments, you can visualize how even small additional amounts applied to your principal can significantly decrease the total interest paid over the life of your loan and help you become mortgage-free sooner.",
        "Making extra payments toward your mortgage principal can be a powerful financial strategy. When you pay more than your required monthly payment, the additional amount goes directly toward reducing your loan balance, which means less interest accrues over time. This calculator allows you to experiment with different payment scenarios to find an approach that fits your budget while maximizing your long-term savings.",
      ],
      features: [
        {
          icon: "savings",
          title: "Reduced Interest Costs",
          description:
            "Making extra payments can save you thousands of dollars in interest over the life of your loan.",
        },
        {
          icon: "time",
          title: "Shortened Loan Term",
          description:
            "Extra payments can cut years off your mortgage. Even an additional $50 per month on a 30-year mortgage can reduce your payment time by nearly 2 years.",
        },
        {
          icon: "compare",
          title: "Flexible Payment Options",
          description:
            "You can make one-time lump sum payments, regular monthly extra payments, or biweekly payments to accelerate your mortgage payoff.",
        },
        {
          icon: "info",
          title: "Earlier Financial Freedom",
          description:
            "Paying off your mortgage faster means achieving debt freedom sooner, giving you more financial flexibility for other goals like retirement or education funding.",
        },
      ],
    },
    midCta: {
      title: "Ready to Save on Your Mortgage?",
      description:
        "See how much you could save with extra payments on your Arizona mortgage. Our mortgage experts can help you create a personalized payment plan that fits your budget and financial goals.",
      ctaLabel: "Get a Personalized Payment Plan",
    },
    explore: {
      title: "Mortgage Calculator Suite",
      intro:
        "Find the right tools to help you make informed mortgage decisions. Our collection of specialized calculators gives you a complete picture of your home financing options. Each calculator is designed to address specific aspects of the mortgage process, from estimating closing costs to calculating monthly payments.",
    },
    contact: {
      title: "Get Expert Advice on Your Mortgage Payment Strategy",
      description:
        "Have questions about making extra payments on your mortgage? Our team is ready to help you create a personalized payment plan that fits your budget and maximizes your savings. Contact us today to speak with a mortgage professional who can guide you through your options and help you achieve mortgage freedom sooner.",
    },
  },

  "/fha-loan-calculator/": {
    explainer: {
      title: "Understanding Our FHA Loan Calculator",
      paragraphs: [
        "Our comprehensive FHA Loan Calculator helps you estimate your monthly mortgage payments when using an FHA loan to purchase a home in Arizona. This powerful tool calculates your total payment including principal, interest, and the required mortgage insurance premium (MIP) that's unique to FHA loans.",
        "By inputting basic information about your potential home purchase, you can quickly determine if an FHA loan fits your budget and financial goals. This calculator is especially valuable for first-time homebuyers who benefit from FHA's lower down payment requirements of just 3.5% of the purchase price.",
      ],
      features: [
        {
          icon: "payment",
          title: "Accurate Payment Breakdown",
          description:
            "See exactly how your monthly payment is divided between principal, interest, and mortgage insurance premium (MIP)",
        },
        {
          icon: "mip",
          title: "Two Types of MIP Calculation",
          description:
            "Includes both the upfront MIP (1.75% of loan amount) and annual MIP (typically 0.80-0.85% for 30-year loans) in your total cost assessment",
        },
        {
          icon: "limits",
          title: "Loan Limit Consideration",
          description:
            "Automatically factors in FHA loan limits by county and property type, helping you understand if you'll need a larger down payment",
        },
        {
          icon: "amortization",
          title: "Amortization Understanding",
          description:
            "Shows how your payments gradually shift from mostly interest to mostly principal over the life of your loan",
        },
        {
          icon: "downpayment",
          title: "Down Payment Requirements",
          description:
            "Calculates based on FHA's minimum 3.5% down payment requirement, with adjustments if loan limits are exceeded",
        },
      ],
    },
    midCta: {
      title: "Get Expert Help with Your FHA Loan Application",
      description:
        "Not sure if an FHA loan is right for you? Our mortgage professionals can help you navigate FHA loan requirements, explain MIP costs, and find the best rates for your Arizona home purchase. We specialize in helping first-time homebuyers qualify with just 3.5% down payment.",
      ctaLabel: "Contact Our FHA Loan Specialists Today",
    },
    explore: {
      title: "Essential Mortgage Tools for Arizona Homebuyers",
      intro:
        "Our FHA Loan Calculator is just one of several specialized tools we've developed to help you make informed decisions about your home financing options. These calculators provide accurate estimates tailored to different loan types and financial situations, allowing you to compare options and find the perfect mortgage solution for your needs.",
    },
    contact: {
      title: "Speak with Our FHA Loan Specialists in Arizona",
      description:
        "Have questions about FHA loan requirements, mortgage insurance premiums, or whether you qualify with a 3.5% down payment? Our experienced mortgage professionals are ready to help you navigate the FHA loan process. We specialize in assisting first-time homebuyers throughout Phoenix, Scottsdale, and all of Arizona secure affordable FHA financing with competitive rates.",
    },
  },

  "/va-loan-calculator/": {
    explainer: {
      title: "What is a VA Loan Calculator?",
      paragraphs: [
        "A [VA Loan](/va-loans-arizona/) Calculator is a specialized tool designed to help veterans, active-duty service members, and eligible military spouses estimate their monthly mortgage payments when using a [VA loan](/va-loans-arizona/). Unlike standard mortgage calculators, this tool accounts for the unique aspects of [VA loans](/va-loans-arizona/), including the VA funding fee, potential disability exemptions, and the $0 down payment option that makes these loans so valuable to military families.",
        "The calculator provides a comprehensive breakdown of your potential monthly payments, including principal, interest, property taxes, and homeowners insurance. By inputting basic information about your military status, loan amount, and property details, you can quickly determine what you can afford and make informed decisions about your home purchase.",
      ],
      features: [
        {
          icon: "downpayment",
          title: "No Down Payment Required",
          description:
            "[VA loans](/va-loans-arizona/) allow eligible borrowers to become homeowners without contributing money upfront, a significant advantage compared to [conventional mortgages](/conventional-home-loans-arizona/) that typically require at least 20% down",
        },
        {
          icon: "mip",
          title: "No Mortgage Insurance",
          description:
            "Unlike [FHA loans](/fha-home-loans-arizona/) or [conventional loans](/conventional-home-loans-arizona/) with less than 20% down, [VA loans](/va-loans-arizona/) don't require any mortgage insurance, saving you considerable money each month",
        },
        {
          icon: "payment",
          title: "VA Funding Fee",
          description:
            "This one-time fee paid to the Department of Veterans Affairs helps keep the program running. First-time users typically pay 2.15% with no down payment, while subsequent users pay 3.3%. Veterans with service-related disabilities are exempt",
        },
        {
          icon: "compare",
          title: "Personalized Estimates",
          description:
            "By entering details like home price, loan term, interest rate, and military status, you'll receive accurate estimates of your monthly payments, helping you understand exactly what you can afford",
        },
        {
          icon: "savings",
          title: "Lower Interest Rates",
          description:
            "[VA loans](/va-loans-arizona/) typically offer lower interest rates than [conventional loans](/conventional-home-loans-arizona/), saving you money over the life of your mortgage",
        },
      ],
    },
    midCta: {
      title: "Ready to Secure Your VA Home Loan?",
      description:
        "Get personalized assistance with your VA loan application and discover how much you can afford with your military benefits. Our mortgage experts specialize in helping veterans and active-duty service members navigate the VA loan process.",
      ctaLabel: "Get Your Free VA Loan Quote Today",
    },
    explore: {
      title: "Additional Mortgage Calculation Tools",
      intro:
        "Our VA Loan Calculator is just one of several specialized tools we've developed to help you make informed decisions about your home financing options. These calculators provide accurate estimates tailored to different loan types and financial situations, allowing you to compare options and find the perfect mortgage solution for your needs.",
    },
    contact: {
      title: "Get Expert VA Loan Assistance",
      description:
        "Ready to take the next step with your [VA loan](/va-loans-arizona/)? Our team of mortgage specialists is here to help you navigate the [VA loan](/va-loans-arizona/) process and secure the best possible terms for your military service benefits. Fill out the form below, and one of our [VA loan](/va-loans-arizona/) experts will contact you promptly to discuss your specific situation and answer any questions you may have about using your VA benefits to purchase a home in Arizona.",
    },
  },

  "/down-payment-calculator/": {
    explainer: {
      title: "Understanding the Down Payment Calculator",
      paragraphs: [
        "A down payment calculator is a valuable tool that helps prospective homebuyers determine how much money they need to pay upfront when purchasing a property. This calculator allows you to estimate your ideal down payment amount based on the home's purchase price, helping you plan your finances more effectively and understand how different down payment amounts affect your mortgage terms.",
        "When buying a home in Arizona, determining the right down payment amount is crucial for your overall financial strategy. A larger down payment typically results in lower monthly payments, potentially better interest rates, and immediate equity in your new home. Our Down Payment Calculator helps you visualize these scenarios so you can make an informed decision about your home purchase.",
      ],
      features: [
        {
          icon: "budget",
          title: "Budget Planning",
          description:
            "Calculate exactly how much cash you'll need to have available before applying for a mortgage loan",
        },
        {
          icon: "compare",
          title: "Payment Comparison",
          description:
            "Evaluate how different down payment percentages affect your monthly mortgage payments and total loan costs",
        },
        {
          icon: "mip",
          title: "Mortgage Insurance Assessment",
          description:
            "Determine whether you'll need to pay mortgage insurance based on your down payment percentage",
        },
        {
          icon: "time",
          title: "Loan Term Evaluation",
          description:
            "Compare various loan terms to find the optimal solution for your financial situation",
        },
        {
          icon: "savings",
          title: "Interest Rate Impact",
          description:
            "Understand how a larger down payment might help you secure a more favorable interest rate",
        },
      ],
    },
    midCta: {
      title: "Calculate Your Perfect Down Payment Today",
      description:
        "Unsure about how much to put down on your Arizona home? Our down payment calculator helps you find the optimal balance between upfront costs and monthly payments. Get personalized recommendations based on your financial situation.",
      ctaLabel: "Get Your Free Down Payment Estimate",
    },
    explore: {
      title: "Essential Mortgage Tools for Arizona Homebuyers",
      intro:
        "Take advantage of our complete suite of mortgage calculators designed to simplify your home buying journey in Arizona. Each specialized tool helps you understand different aspects of the mortgage process, from estimating monthly payments to calculating closing costs. The Down Payment Calculator is just one of many resources we offer to help you make informed decisions about your home purchase.",
    },
    contact: {
      title: "Get Expert Down Payment Advice",
      description:
        "Have questions about your down payment options in Arizona? Our mortgage specialists can help you determine the optimal down payment amount based on your financial situation and homebuying goals. Complete the form below to receive personalized advice on down payment strategies that can save you money and streamline your home purchase process.",
    },
  },

  "/debt-to-income-ratio-calculator/": {
    explainer: {
      title: "What is a Debt-to-Income Ratio Calculator?",
      paragraphs: [
        "A Debt-to-Income (DTI) ratio calculator is a powerful financial tool that measures the percentage of your gross monthly income that goes toward paying your debts. This crucial metric helps lenders evaluate your creditworthiness and ability to manage additional debt obligations, particularly when applying for a mortgage or other loans.",
        "Understanding your DTI ratio gives you valuable insight into your financial health from a lender's perspective. A lower DTI ratio indicates you have a good balance between debt and income, making you more attractive to lenders who will likely offer you better interest rates and loan terms.",
      ],
      features: [
        {
          icon: "info",
          title: "Mortgage Approval Chances",
          description:
            "Most lenders prefer a DTI ratio of 36% or lower, with some accepting up to 43-50% for qualified borrowers.",
        },
        {
          icon: "budget",
          title: "Financial Health Assessment",
          description:
            "Helps you understand if you're managing your debt effectively relative to your income.",
        },
        {
          icon: "affordability",
          title: "Loan Qualification",
          description:
            "Determines how much you can borrow and what interest rates you might qualify for.",
        },
        {
          icon: "compare",
          title: "Improvement Planning",
          description:
            "Provides a clear metric to track as you work to reduce debt or increase income.",
        },
      ],
    },
    midCta: {
      title: "Ready to Improve Your Mortgage Chances?",
      description:
        "Find out if your DTI ratio meets lender requirements for your Arizona home loan. Our mortgage experts can help you understand your options and improve your financial profile.",
      ctaLabel: "Get Your Free DTI Analysis",
    },
    explore: {
      title: "Mortgage Tools to Support Your Home Buying Journey",
      intro:
        "Take advantage of our complete suite of financial calculators designed to simplify your mortgage process. Each specialized tool helps you understand different aspects of home financing, from estimating closing costs to calculating monthly payments. Find the right calculator for your specific needs below.",
    },
    contact: {
      title: "Get Expert Help with Your DTI Ratio",
      description:
        "Our mortgage specialists are ready to assist you in understanding and improving your Debt-to-Income ratio. Whether you have questions about qualifying for a mortgage or need guidance on enhancing your financial profile, we're here to help. Reach out to us today for personalized advice tailored to your unique situation.",
    },
  },

  "/home-purchase-closing-cost-calculator/": {
    explainer: {
      title: "Unlock the Power of Informed Home Buying Decisions",
      paragraphs: [
        "Purchasing a home in Arizona is a significant financial decision. Our Closing Cost Calculator empowers you to understand the costs involved, ensuring you make informed choices. By using our tool, you can estimate total closing costs, plan your budget, and compare different scenarios to find the best fit for your financial situation.",
        "With this knowledge, you'll be better equipped to navigate the home buying process confidently. Our calculator provides valuable insights to help you prepare for every step, from initial costs to ongoing expenses like property taxes and homeowners insurance. By taking control of your financial future, you can focus on finding your dream home without worrying about unexpected expenses down the line.",
      ],
      features: [
        {
          icon: "payment",
          title: "Estimate Total Closing Costs",
          description:
            "Get a comprehensive breakdown of expenses associated with your home purchase, including lender fees, title and escrow fees, and prepaid items.",
        },
        {
          icon: "budget",
          title: "Plan Your Budget",
          description:
            "Assess your financial readiness by factoring in not just the down payment, but also closing costs, which typically range from 1.5-3% of the home's purchase price.",
        },
        {
          icon: "compare",
          title: "Compare Scenarios",
          description:
            "Evaluate how different loan types, down payments, and property locations can impact your closing costs.",
        },
        {
          icon: "affordability",
          title: "Prepare for Ongoing Expenses",
          description:
            "Consider future homeownership costs like property taxes, homeowners insurance, and potential HOA fees.",
        },
      ],
    },
    midCta: {
      title: "Get Your Personalized Closing Cost Estimate Today",
      description:
        "Don't let hidden costs surprise you. Our experts will break down your specific closing expenses and help you plan your Arizona home purchase with confidence.",
      ctaLabel: "Calculate My Closing Costs",
    },
    explore: {
      title: "Unlock More with Our Suite of Mortgage Calculators",
      intro:
        "Empower your home financing decisions with our comprehensive set of mortgage calculators. From estimating monthly payments to comparing different loan types, our tools provide valuable insights to guide your mortgage journey. Explore our calculators to make informed choices about your Arizona home purchase or refinance.",
    },
    contact: {
      title: "Unlock Expert Advice for Your Home Purchase",
      description:
        "Don't let closing costs catch you off guard. Our mortgage specialists are here to provide you with personalized guidance and help you navigate the complexities of home buying in Arizona. Fill out the form below to get expert advice tailored to your specific situation and take the next step towards securing your dream home.",
    },
  },

  "/conventional-vs-fha-calculator/": {
    explainer: {
      title: "What is a Conventional vs. FHA Calculator?",
      paragraphs: [
        "A Conventional vs. FHA calculator helps you compare two of the most common mortgage options side by side before you apply. By entering the same home price, down payment, and loan terms for each program, you can see how monthly payments, mortgage insurance, and total cost over time differ between a conventional loan and an FHA loan.",
        "This tool is especially useful when you're deciding which loan type fits your credit profile, down payment savings, and long-term housing plans. Rather than guessing which program is cheaper, you can model both scenarios and understand the trade-offs — including how long FHA mortgage insurance may stay in place compared with conventional PMI.",
      ],
      features: [
        {
          icon: "compare",
          title: "Side-by-side payment comparison",
          description:
            "View principal, interest, and mortgage insurance for conventional and FHA loans using the same inputs so you can compare true monthly costs.",
        },
        {
          icon: "mip",
          title: "Mortgage insurance breakdown",
          description:
            "See how conventional PMI and FHA MIP affect your payment today and over the life of the loan under different down payment scenarios.",
        },
        {
          icon: "breakeven",
          title: "Total cost over time",
          description:
            "Compare cumulative cost across loan terms to understand which option may save more money based on how long you plan to keep the mortgage.",
        },
        {
          icon: "downpayment",
          title: "Down payment scenarios",
          description:
            "Adjust down payment amounts to see when a conventional loan may become more competitive versus FHA's minimum 3.5% requirement.",
        },
        {
          icon: "info",
          title: "Make a confident loan choice",
          description:
            "Use clear estimates to discuss options with a loan officer and choose the program that best aligns with your budget and homeownership goals.",
        },
      ],
    },
    midCta: {
      title: "Ready to Choose Between Conventional and FHA?",
      description:
        "Get personalized guidance on which loan program fits your credit, down payment, and long-term plans. Our mortgage experts can walk you through your comparison results and help you apply with confidence.",
      ctaLabel: "Talk to a Loan Specialist",
    },
    explore: {
      title: "Explore Our Other Mortgage Calculators",
      intro:
        "Looking for more ways to plan your mortgage journey? Check out our comprehensive suite of mortgage calculators designed to help you make informed financial decisions. Each calculator provides specialized insights for different aspects of the home buying and refinancing process.",
    },
    contact: {
      title: "Contact Our Loan Comparison Specialists",
      description:
        "Not sure whether a conventional or FHA loan is the better fit for your Arizona home purchase? Our mortgage experts can walk you through your calculator results, explain mortgage insurance rules, and help you choose the program that matches your credit, down payment, and long-term plans. Fill out the form below and one of our specialists will contact you promptly.",
    },
  },
};

export function getCalculatorPageContent(path: string): CalculatorPageContent | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return CALCULATOR_PAGE_CONTENT[normalized];
}

export function getCalculatorPageContentOrThrow(path: string): CalculatorPageContent {
  const content = getCalculatorPageContent(path);
  if (!content) {
    throw new Error(`No calculator page content registered for ${path}`);
  }
  return content;
}
