import { COMPANY, LOAN_OFFICERS } from "@/lib/company";

type FaqItem = { question: string; answer: string };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MortgageBroker", "LocalBusiness", "FinancialService"],
  "@id": `${COMPANY.siteUrl}/#organization`,
  name: COMPANY.brandName,
  legalName: COMPANY.legalName,
  url: COMPANY.siteUrl,
  telephone: COMPANY.phoneDisplay,
  image: `${COMPANY.siteUrl}/home/eddie-knoell.jpg`,
  logo: `${COMPANY.siteUrl}/home/mortgage-brothers-logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.streetAddress,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    postalCode: COMPANY.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5085,
    longitude: -112.0465,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "NMLS",
      value: COMPANY.nmls,
    },
    {
      "@type": "PropertyValue",
      name: "Arizona Mortgage Broker License",
      value: COMPANY.azLicense,
    },
  ],
  sameAs: [
    "https://www.facebook.com/azmortgagebrothers/",
    "https://x.com/azmortgagebros",
    "https://www.linkedin.com/company/azmortgagebrothers/",
    "https://www.youtube.com/@TheMortgageBrothersTeam",
    COMPANY.nmlsConsumerAccessUrl,
  ],
  employee: [
    {
      "@type": "Person",
      name: LOAN_OFFICERS.eddie.name,
      jobTitle: LOAN_OFFICERS.eddie.title,
      identifier: LOAN_OFFICERS.eddie.nmlsDisplay,
    },
    {
      "@type": "Person",
      name: LOAN_OFFICERS.thomas.name,
      jobTitle: LOAN_OFFICERS.thomas.title,
      identifier: LOAN_OFFICERS.thomas.nmlsDisplay,
    },
  ],
};

const homeFaqs: FaqItem[] = [
  {
    question: "What's the advantage of working with a mortgage broker instead of a bank?",
    answer:
      "As brokers, we can shop around multiple lenders to find you the best deal. We're not limited to one bank's products and can often find creative solutions for unique circumstances. We ask 'Where can we get this loan approved?' instead of 'Can we approve this loan?'",
  },
  {
    question: "What loan options are available for first-time buyers in Gilbert?",
    answer:
      "FHA loans and local programs for first-time buyers are great options. We'll guide you through the process and find the best fit.",
  },
  {
    question: "How does refinancing work in Mesa?",
    answer:
      "Refinancing replaces your current mortgage with a new one, often with better terms. It's a great way to save money on your Arizona home loan.",
  },
];

function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function JsonLd() {
  const schemas = [organizationSchema, faqSchema(homeFaqs)];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
