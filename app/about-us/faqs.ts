/** Shared FAQ copy — used by PageClient UI and JSON-LD. */
export const faqs = [
  {
    q: "Who is Mortgage Brothers LLC?",
    a: "We're Eddie and Tom Knoell, third-generation Phoenix natives with over 25 years of experience in the Arizona mortgage industry. We founded Mortgage Brothers LLC to provide personalized, expert mortgage solutions to our fellow Arizonans.",
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a wide range of loan products, including conventional, FHA, VA, Jumbo loans, and Refinancing options. Our extensive lender network allows us to find the best fit for your unique situation.",
  },
  {
    q: "How long does the mortgage process typically take?",
    a: "While every situation is unique, we generally aim to close loans within 30 days. Our efficient processes and digital tools help streamline the experience, keeping you informed every step of the way.",
  },
  {
    q: "What sets Mortgage Brothers LLC apart from other brokers?",
    a: "Our deep local roots, veteran-led team, and commitment to transparency set us apart. We combine cutting-edge technology with personalized service to ensure you get the best rates and a smooth, stress-free experience.",
  },
  {
    q: "Do you work with first-time homebuyers?",
    a: "Absolutely! We specialize in guiding first-time buyers through the process, offering educational resources and patient support to help you make informed decisions.",
  },
  {
    q: "How can I get started with Mortgage Brothers LLC?",
    a: "It's easy! You can call us directly at (602) 535-2171 or fill out our quick online form for a free consultation. We'll then match you with an expert loan officer to discuss your needs and options.",
  },
] as const;

export const faqSchemaItems = faqs.map((item) => ({
  question: item.q,
  answer: item.a,
}));
