/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  { q: "What is a Jumbo Loan?", a: "A Jumbo Loan is a type of mortgage that exceeds the conventional loan limit set by Fannie Mae and Freddie Mac, which is currently $832,750. Because these loans are not eligible for purchase by these government-sponsored enterprises, they come with different requirements and higher risks for lenders." },
  { q: "How do I qualify for a Jumbo Loan?", a: "Qualifying for a Jumbo Loan typically requires a higher credit score (usually 700 or above), a minimum down payment of 10%, and thorough documentation of your financial situation, including income, assets, and debts. Lenders will closely evaluate your financial profile to assess your ability to repay the loan." },
  { q: "Are interest rates higher for Jumbo Loans?", a: "Yes, Jumbo Loans often come with higher interest rates compared to conventional loans. This increase reflects the additional risk lenders take on when financing larger amounts. However, rates can vary based on market conditions and individual borrower profiles." },
  { q: "What documentation is needed for a Jumbo Loan application?", a: "You will need to provide comprehensive documentation, including tax returns, W-2 forms, bank statements, and proof of assets. It's essential to have all your financial information organized and ready to present to streamline the application process." },
  { q: "Is a larger down payment required for Jumbo Loans?", a: "While the minimum down payment for a Jumbo Loan is typically 10%, some lenders may require more depending on the loan amount and your financial profile. Always check with your loan officer for specific down payment guidelines." },
  { q: "Can I get a Jumbo Loan if I have multiple properties?", a: "Yes, you can still qualify for a Jumbo Loan if you own multiple properties; however, lenders will scrutinize your overall financial situation more closely. Be prepared to provide detailed information about your other properties and how they impact your financial profile." },
  { q: "What happens if my loan amount exceeds $1 million?", a: "If your loan amount exceeds $1 million, some lenders may require two appraisals on the property to ensure accurate valuation and mitigate risk. This extra step helps confirm that the property is worth the loan amount being requested." },
  { q: "How long does the approval process take for a Jumbo Loan?", a: "The approval process for a Jumbo Loan can vary but typically takes longer than conventional loans due to the additional documentation and scrutiny involved. It's advisable to allow several weeks for processing and approval." },
];

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
