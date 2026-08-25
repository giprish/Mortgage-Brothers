/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  {
    q: "How long does the mortgage process take?",
    a: "The timeline varies depending on your situation, but most mortgages are processed and closed within 30-45 days. Our team works hard to ensure a smooth and timely experience.",
  },
  {
    q: "What documents do I need to apply for a mortgage?",
    a: "Typically, you'll need proof of income, tax returns, bank statements, and identification. Don't worry—we'll provide you with a detailed checklist to make it easy.",
  },
  {
    q: "Can I qualify for a mortgage with less-than-perfect credit?",
    a: "Yes! We work with clients of all credit levels and will help you explore loan options that fit your financial situation.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "Down payments vary based on the loan program. Some options require as little as 3%, while others may not require a down payment at all, like VA loans.",
  },
  {
    q: "What's the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification gives you an estimate of what you might qualify for, while pre-approval is a more in-depth process that shows sellers you're serious and financially ready to buy.",
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a variety of loan programs, including conventional loans, FHA loans, VA loans, and refinancing options. Our team will help you choose the best one for your needs.",
  },
] as const;

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
