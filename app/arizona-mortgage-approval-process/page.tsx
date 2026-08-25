import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import JsonLd from "@/app/component/JsonLd";
import { buildArticleSchemas } from "@/lib/seo/structured-data";
import FaqAccordion from "../component/FaqAccordion";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/arizona-mortgage-approval-process/");

const relatedLinks = [
  {
    label: "Why Use an Arizona Mortgage Broker",
    href: "/why-use-an-arizona-mortgage-broker/",
  },
  {
    label: "Arizona Mortgage Rates",
    href: "/mortgage-rates-tool-arizona/",
  },
  {
    label: "Arizona Home Buying Process",
    href: "/arizona-home-buying-process/",
  },
  {
    label: "Arizona Mortgage Closing Process",
    href: "/arizona-mortgage-closing-process/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
  },
];

const categories = [
  { label: "Arizona Mortgage Insights", href: "/arizona-mortgage-insights/" },
  { label: "FHA Loans", href: "/fha-loans/" },
  { label: "Homeownership Tips", href: "/homeownership-tips/" },
  { label: "Mortgage Basics", href: "/mortgage-basics/" },
  { label: "Mortgage Payments & Strategies", href: "/mortgage-payments-strategies/" },
  { label: "Mortgage Process Guidance", href: "/mortgage-process-guidance/" },
  { label: "Mortgage Qualifications", href: "/mortgage-qualifications/" },
  { label: "Real Estate & Mortgages", href: "/real-estate-mortgages/" },
  { label: "Specialty Loans", href: "/specialty-loans/" },
  { label: "Spouse & Estate Considerations", href: "/spouse-estate-considerations/" },
];

const loanPrograms = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
];

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const tocLinks = [
  { label: "Mortgage Approval Process Outline", href: "#mortgage-approval-process-outline" },
  { label: "Beyond the Steps of the Mortgage Approval Process", href: "#beyond-the-steps" },
  { label: "Debt to Income (DTI) Ratio", href: "#debt-to-income-dti-ratio" },
  { label: "Loan to Value (LTV)", href: "#loan-to-value-ltv" },
  { label: "Credit", href: "#credit" },
  { label: "Property Types", href: "#property-types" },
  { label: "Mortgage Programs", href: "#mortgage-programs" },
  { label: "Pre-Approval Letters", href: "#pre-approval-letters" },
  { label: "Arizona Mortgage Approval Process FAQ's", href: "#arizona-mortgage-approval-process-faqs" },
];

const articleFaqs = [
  { question: "I was told I needed a second pre-approval letter from a different lender when I wanted to make an offer on a certain home. Why?", answer: "Some large banks that are trying to sell a bank-owned or short sale property may require this and it’s called “Cross Qualification”. In effect, this may be required in order to make the seller, the agent, or the bank who owns the property more comfortable that if the primary lending option falls through that there is a backup plan in place." },
  { question: "I was pre-approved for a loan, but after I found a home and signed the contract, my lender decided to deny my loan! Why did they do that?", answer: "Unfortunately since Arizona mortgage loans have many moving parts, sometimes even the smallest change in credit scores, income or employment can change the status of a loan causing the lender to deny it at the last minute. Other issues such as the appraised value, the inspection report, or even the seller turning uncooperative can cause issues along with changes in the interest rates offered by a lender. There are many reason to go from a pre-approval to a denial, so be sure to keep in constant contact with your mortgage lender to assure things flow smoothly." },
  { question: "What happens if I don’t find a home before my pre-approval letter expires?", answer: "This all depends on the mortgage program you’re involved in, but in most cases it will require you to re-submit the most recent 30 days of income and asset documentation as well as having your credit report pulled. This is precisely why it’s important to understand the expiration dates of all documents to avoid having the entire process drag out for months." },
  { question: "Do I have to sell my current home before I can qualify for a new mortgage loan?", answer: "The answer is…it depends. If you’re in a financial position where you could afford BOTH payments until your first home sells, then there should be no problem! This comes down to your Debt to Income ratio (mentioned earlier) but additional expenses such as maintenance of the first property, unexpected repairs and even property taxes will need to be taken into account." },
  { question: "What basic background information is required during the initial mortgage application?", answer: "When a loan officer takes your initial application, you must provide your full legal name, a complete two-year residence and employment history, documentation of your assets and income, a list of any other properties you own, and disclosures regarding past credit events like collections, bankruptcies, or foreclosures." },
  { question: "How do automated underwriting systems evaluate an Arizona mortgage file?", answer: "Once your credit profile and application are loaded, the file is typically submitted through online automated underwriting platforms like Desktop Underwriter (DU) or Loan Product Advisor (LPA). These systems generate automated 'findings' that determine initial approval status and list the explicit documentation requirements needed for the loan file." },
  { question: "Should I expect the underwriter to request more documents after initial submission?", answer: "Yes. Nearly 99% of all mortgage files receive an initial approval that is conditional, meaning it contains conditional requirements. Homebuyers should fully anticipate that the underwriter will ask for additional supporting documents, asset verifications, or letters of explanation before issuing a final approval." },
  { question: "What are the final operational steps required to fund an Arizona mortgage?", answer: "Once all conditional requirements are cleared, the lender issues a final approval and delivers the closing loan documents to the title company for your signing appointment. After signing, the package is reviewed by the lender's funder, who authorizes and sends the final wire transfer to the title company to fund the transaction." },
] as const;

const articleJsonLd = buildArticleSchemas({
  blog: {
    pathname: "/arizona-mortgage-approval-process/",
    headline: "Learn About the Home Mortgage Approval Process",
    description: "A step-by-step roadmap of the Arizona mortgage approval process, plus key concepts like DTI, LTV, credit, and pre-approval letters.",
    datePublished: "2025-02-10",
    articleSection: "Mortgage Basics",
  },
  faqs: [...articleFaqs],
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Mortgage Basics", path: "/mortgage-basics/" },
    { name: "Learn About the Home Mortgage Approval Process", path: "/arizona-mortgage-approval-process/" },
  ],
});

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ArizonaMortgageApprovalProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <JsonLd data={articleJsonLd} />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Learn About the Home Mortgage Approval Process</>}
          excerpt="A step-by-step roadmap of the Arizona mortgage approval process, plus key concepts like DTI, LTV, credit, and pre-approval letters."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 10, 2025"
          readTime="12 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                There&apos;s no question that the entire approval process for home loans in Arizona can be
                confusing and slightly overwhelming! For the first-time home buyer the process can be a stressful
                situation so we want to provide you a road map to help you navigate the event, but be sure that
                you always take the time to ask your Arizona mortgage broker if anything is unclear!
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                We&apos;ve also placed at the bottom of this page a Frequently Asked Questions (FAQ) section for
                quick reference!
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Mortgage loan program guidelines, Arizona mortgage rate questions and down payment requirements
                are a few of the major components you&apos;ll need to be familiar with when applying for a home
                loan for your new purchase or for your refinance.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Master the Process—Connect with Our Experts!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Now that you understand the Arizona Mortgage Approval Process, reach out to us. We&apos;re here
                  to streamline your mortgage journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get Pre-Approved
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <nav
                  aria-label="Table of contents"
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <p className="text-[#052316] text-[16px] font-bold mb-3">On this page</p>
                  <ul className="space-y-2">
                    {tocLinks.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-[14px] text-[#3fb364] font-semibold hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav
                  aria-label="Table of contents"
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <p className="text-[#052316] text-[16px] font-bold mb-3">On this page</p>
                  <ul className="space-y-2">
                    {tocLinks.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-[14px] text-[#3fb364] font-semibold hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <section id="mortgage-approval-process-outline">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Approval Process Outline
                  </h2>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 1</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    Loan Officer takes your application. The application contains:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Your legal name</li>
                    <li>Address and where you have worked for the last 2 years</li>
                    <li>Your asset and income documentation</li>
                    <li>List of all properties that you own</li>
                    <li>
                      You will need to disclose whether you have had any collections, judgements, Bankruptcies,
                      Foreclosures, etc.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 2</h3>
                  <p className="mb-3 font-semibold text-[#052316]">The loan officer will pull your credit:</p>
                  <p className="mb-6">
                    The loan officer will pull your credit to determine what liabilities you have on a monthly
                    basis and what credit score you have. The content of your credit report as well as the credit
                    score will impact and affect your approval.
                  </p>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 3</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    Your file is setup and then submitted your loan through the underwriter pre-approval process
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      In most cases, this is a submitted through an online approval system. The two most widely used
                      underwriting systems are &apos;Desktop Underwriter&apos; and &apos;Loan Prospector&apos;
                    </li>
                    <li>
                      The approval system will give the loan officer &apos;findings&apos; which tell them if you are
                      approved for the loan or not. The &apos;findings&apos; will tell them specifically what they
                      will need to document in your file.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 4</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    You will be given a list of documents to provide the loan officer. Typically, this is what will
                    be asked from you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Copies of your 2 most recent tax returns (federal returns only)</li>
                    <li>30 days of paystubs to document income</li>
                    <li>2 months bank statements (all pages) to document assets and reserves</li>
                    <li>Copy of your drivers license</li>
                    <li>In some cases you will need to provide a copy of your social security card</li>
                    <li>
                      Any letters of explanations that the loan officer believes will be asked for by the
                      underwriter
                    </li>
                    <li>
                      You will need to setup a homeowners insurance policy and give the insurance agent&apos;s
                      contact information to the loan officer
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 5</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    Your loan file is setup and then submitted to underwriting
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      All your documents and supporting loan items are organized in a particular order for the
                      underwriter to review for preliminary or final approval.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 6</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    Your loan receive an approval either with or without conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      In most cases there is something (extra documentation) that the underwriter will be asking the
                      loan officer to gather for the file. This occurs on nearly 99% of all files and should be
                      anticipated by the borrower.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 7</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    Once all the required conditions are met, your file will receive a final approval:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>The lender will clear your file from underwriting.</li>
                    <li>The lender will then prepare your loan documents to be sent to the title company.</li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 8</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    The loan documents are sent to the tile company and your escrow officer prepares them for you
                    to sign:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>You will make an appointment with the title company to sign your loan documents.</li>
                    <li>
                      After you sign the documents, the title company send the file to the Lender&apos;s funder
                      for review.
                    </li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 9</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    The funder reviews everything in the file and sends the wire:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      When the funder confirms that everything is in the file that the lender requires, they order
                      the wire to be sent to the title company.
                    </li>
                    <li>The title company receives the wire and reconciles all their figures.</li>
                  </ul>

                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Step 10</h3>
                  <p className="mb-3 font-semibold text-[#052316]">
                    The title company records the purchase or refinance loan
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>The home loan is complete and you can now relax.</li>
                  </ul>
                </section>

                <section id="beyond-the-steps">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Beyond the Steps of the Mortgage Approval Process
                  </h2>
                  <p>
                    As we mentioned in &quot;Mortgage Basic&quot;, Arizona mortgage lenders approve loans that are
                    secured by the real estate being purchased but also based on a standard set of guidelines which
                    are determined by the type of loan program you&apos;re getting involved in. To help you
                    understand the terminology you&apos;ll be hearing, we have a few of those key components below.
                  </p>
                </section>

                <section id="debt-to-income-dti-ratio">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Debt to Income (DTI) Ratio
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      This ratio is a comparison between a borrower&apos;s income to their debt (or liabilities).
                    </li>
                    <li>
                      The lower the ratio (that is, the higher your income is compared to the debts you have) the
                      better it is. This gives confidence to the lender that you&apos;ll be able to repay the loan.
                    </li>
                  </ul>
                </section>

                <section id="loan-to-value-ltv">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Loan to Value (LTV)
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      A common term used by mortgage lenders, it compared the difference between the outstanding
                      amount of the loan compared to the property&apos;s value.
                    </li>
                    <li>
                      Depending on this ratio, you may be required to have a higher down payment in order to avoid
                      mortgage insurance. However, some government loan programs can be done with little to no down
                      payment (or higher Loan to Value ratios).
                    </li>
                    <li>
                      Here&apos;s an example: A lender might tell you that in order to avoid mortgage insurance you
                      will have to have a Loan to Value of less than 80%. This means you down payment must be 20% of
                      the amount of the loan.
                    </li>
                  </ul>
                </section>

                <section id="credit">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Credit
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      Credit scores and credit history are used by AZ mortgage brokers in order to estimate the risk
                      associated with a borrower.
                    </li>
                    <li>
                      While lenders like to see several open lines of credit with at least 2 years of history,
                      others offer programs to allow borrowers to use a variety of credit histories to qualify for a
                      loan.
                    </li>
                  </ul>
                </section>

                <section id="property-types">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Property Types
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      The type of property and how a borrower plans to use the property plays a major role in a
                      mortgage lender&apos;s decision on granting a loan. Home Owners Association (HOA)
                      restrictions, government lending mortgage insurance requirements and appraisal policies can be
                      very different from property to property. This is why your real estate agent must understand
                      the exact details and possible restrictions before any offer is placed!
                    </li>
                  </ul>
                </section>

                <section id="mortgage-programs">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Programs
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      There are many mortgage programs available to borrowers including allowing 100% financing, low
                      down payments or even allowing upgrades to a property to be rolled into the mortgage loan.
                    </li>
                    <li>
                      Speak with your Arizona mortgage broker about government insured programs such as{" "}
                      <Link
                        href="/fha-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        FHA
                      </Link>
                      , USDA and{" "}
                      <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                        VA home loans
                      </Link>{" "}
                      as well as{" "}
                      <Link
                        href="/conventional-home-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        conventional
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/jumbo-loans-arizona/"
                        className="text-[#3fb364] font-semibold hover:underline"
                      >
                        jumbo loan
                      </Link>{" "}
                      financing.
                    </li>
                  </ul>
                </section>

                <section id="pre-approval-letters">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pre-Approval Letters
                  </h2>
                  <p className="mb-5">
                    Having a mortgage pre-approval letter in hand prior to looking for a new home is an essential
                    first step in the home buying process.
                  </p>
                  <p className="mb-5">
                    Not only does this pre-approval letter provide the borrow with an idea of what properties they
                    may be able to afford, this letter also gives confidence to the seller and their agent that
                    the purchase will go though on time. However, be sure to know the difference between a
                    &quot;pre-approval letter&quot; and a &quot;Mortgage Conditions List.&quot;
                  </p>
                  <p className="mb-5">
                    The pre-approval letter, generally issued by your Arizona mortgage broker, is provided after
                    initial conditions are met such as income, assets and loan program conditions.
                  </p>
                  <p className="mb-5">
                    The Mortgage Approval Conditions List is a more detailed document issued by the underwriter
                    once an entire loan package is submitted after a review of other qualifying details such as
                    inspection issues, purchase contract updates and appraisal values.
                  </p>
                  <p className="mb-4">
                    Pre-approval letters let the borrower know the exact terms of the loan amount, down payment
                    requirements and monthly payments. Typically this letter will include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loan Amount</li>
                    <li>Status Date and Expiration Date – most letters are good for 90 days</li>
                    <li>Mortgage Type – Is the loan an FHA, VA, USDA, Conventional or Jumbo loan</li>
                    <li>
                      Term – Is the loan a 20, 30 or 40 year fixed loan, an Adjustable Rate Mortgage (ARM) with a
                      1, 3, 5, 7 or 10 year fixed period, or an interest only loan
                    </li>
                    <li>
                      Occupancy – Is the property owner occupied, a secondary residence or an investment
                    </li>
                    <li>Contact Info – Lender&apos;s name and address</li>
                    <li>Conditions – Document and Funding requirements needed prior to final approval</li>
                  </ul>
                </section>

                <section id="arizona-mortgage-approval-process-faqs">
                  <FaqAccordion
                    title="Arizona Mortgage Approval Process FAQ's"
                    items={articleFaqs.map((faq) => ({
                      q: faq.question,
                      a: faq.answer,
                    }))}
                  />
                </section>

                <div className="flex items-center justify-between pt-8 border-t border-[#e8e0d0]">
                  <Link
                    href="/why-use-an-arizona-mortgage-broker/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    ← Previous Post
                  </Link>
                  <Link
                    href="/mortgage-rates-tool-arizona/"
                    className="text-[#5a6b52] hover:text-[#3fb364] transition-colors"
                  >
                    Next Post →
                  </Link>
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-[100px] h-fit space-y-6">
              <div className="bg-[#f0f2f5] border-t-4 border-[#3fb364] rounded-b-2xl p-6 text-center shadow-sm">
                <p className="text-[#08271B] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  The Mortgage Brothers Team
                </p>
                <h3 className="text-[#08271B] text-[20px] font-extrabold uppercase tracking-wide leading-snug mt-4 mb-2">
                  Your Dream Home Awaits!
                </h3>
                <p className="text-[#6a7a6a] text-[11px] font-semibold uppercase tracking-wide mb-4">
                  Expert mortgage solutions tailored to your needs
                </p>
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">Talk to a Broker Today!</p>
                <a
                  href="tel:+16025352171"
                  className="btn-primary w-full"
                >
                  +1 602-535-2171
                </a>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Categories</h3>
                <ul className="space-y-2.5">
                  {categories.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Related Reading</h3>
                <ul className="space-y-2.5">
                  {relatedLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#08271B] text-[16px] font-bold mb-4">Loan Programs</h3>
                <ul className="space-y-2.5">
                  {loanPrograms.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="text-[13.5px] text-[#4e5b4e] hover:text-[#3fb364] transition-colors leading-snug"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for
              any mortgage type. Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals
              will get back to you promptly with personalized solutions tailored to your unique financial
              situation.
            </p>
            <Link
              href="/#get-pre-approved"
              className="btn-primary"
            >
              Get Your Rate Now
            </Link>
          </div>
        </section>

        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}