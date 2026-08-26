"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";
import FaqAccordion from "../component/FaqAccordion";
import GetInTouch from "../component/GetInTouch";
import CountyTestimonials, { type CountyTestimonial } from "../component/CountyTestimonials";

const featureStrip = [
  "Unlock Home Equity with Arizona Refinancing Options",
  "Lower Monthly Payments Through Strategic Refinancing",
  "Optimize Your Mortgage with Arizona's Refinance Solutions",
];

const benefitCards = [
  {
    title: "Lower Interest Rates",
    text: "Capitalize on market conditions to secure a more favorable interest rate, potentially saving thousands over the life of your loan.",
  },
  {
    title: "Reduced Monthly Payments",
    text: "Restructure your mortgage to decrease your monthly financial obligations, freeing up cash for other important expenses or investments.",
  },
  {
    title: "Access to Home Equity",
    text: "Convert your home's value into usable funds for major expenses, home improvements, or debt consolidation through cash-out refinancing.",
  },
  {
    title: "Shorter Loan Terms",
    text: "Accelerate your path to full homeownership by refinancing to a shorter-term loan, potentially building equity faster.",
  },
  {
    title: "Elimination of PMI",
    text: "If your home value has increased, refinancing may allow you to remove private mortgage insurance, reducing your overall housing costs.",
  },
  {
    title: "Transition to Fixed Rates",
    text: "Switch from an adjustable-rate mortgage to a fixed-rate loan for more predictable monthly payments and long-term stability.",
  },
];

const rightForYouCards = [
  {
    title: "Lower Your Monthly Payments",
    text: "Refinancing to a lower interest rate or extending your loan term can significantly reduce your monthly mortgage payments, freeing up cash for other expenses or savings.",
  },
  {
    title: "Access Your Home's Equity",
    text: "With a cash-out refinance, you can tap into your home's equity to fund major expenses, home improvements, or consolidate high-interest debt into a single, lower-interest payment.",
  },
  {
    title: "Shorten Your Loan Term",
    text: "If your financial situation has improved, refinancing to a shorter-term loan can help you pay off your mortgage faster and save on interest over the life of the loan.",
  },
  {
    title: "Switch to a Fixed-Rate Mortgage",
    text: "If you currently have an adjustable-rate mortgage, refinancing to a fixed-rate loan can provide stability and predictability in your monthly payments, protecting you from potential rate increases.",
  },
  {
    title: "Eliminate Private Mortgage Insurance",
    text: "If your home's value has increased, refinancing may allow you to remove PMI, potentially saving you hundreds of dollars each month on your mortgage payment.",
  },
  {
    title: "Consolidate Multiple Mortgages",
    text: "If you have a second mortgage or a home equity line of credit, refinancing can allow you to combine these into a single loan, potentially at a lower overall interest rate.",
  },
];

const processSteps = [
  {
    title: "Assess Your Goals",
    text: "Determine why you want to refinance—whether it's to lower payments, access equity, or shorten your loan term—and evaluate if it aligns with your financial objectives.",
  },
  {
    title: "Review Your Finances",
    text: "Check your credit score, income, and debt-to-income ratio to ensure you meet the requirements for refinancing and qualify for the best rates.",
  },
  {
    title: "Compare Loan Options",
    text: "Work with a trusted lender to explore different refinancing programs and select the one that best fits your needs, such as cash-out or rate-and-term refinancing.",
  },
  {
    title: "Submit Your Application",
    text: "Provide the necessary documentation, including proof of income, credit history, and property details, to formally apply for your refinance loan.",
  },
  {
    title: "Get Your Home Appraised",
    text: "An appraisal will determine your home's current market value, which is essential for finalizing your loan terms and ensuring eligibility for specific programs.",
  },
  {
    title: "Close on Your New Loan",
    text: "Once approved, you'll sign the final documents and officially transition to your new mortgage terms, enjoying the benefits of refinancing immediately.",
  },
];

const testimonials: CountyTestimonial[] = [
  {
    name: "Kristy Bartusek",
    quote: "Thank you for outstanding service in the refinance of our home! Not only were you professional and courteous, you were realistic and honest. Our transaction was easier than we could have imagined.",
    attribution: "Kristy Bartusek, Tempe, Arizona",
  },
  {
    name: "Gregory LeBeau",
    quote: "Eddie refinanced our home with professionalism, timeliness, and accuracy. He was courteous, kept us informed, and got us a good rate.",
    attribution: "Gregory LeBeau, Scottsdale, Arizona",
  },
  {
    name: "Mike Cameli",
    quote: "I appreciated your good communication and frequent updates. Anytime I called I never got a recording -- always able to talk to someone in person. You closed early. Thanks!",
    attribution: "Mike Cameli, DPR Realty, Tempe, Arizona",
  },
  {
    name: "Michael and Donna Hawkins",
    quote: "Eddie saved us over $500 a month! He explained in great detail the program options, locked us into a great rate, and made it happen for us. We are so grateful.",
    attribution: "Michael and Donna Hawkins, Glendale, Arizona",
  },
  {
    name: "Arlyn and Jennifer Stotts",
    quote: "Eddie works fast and is thorough. He gave us a great deal. We were financed in no time, and it was a lot faster and easier than any other loan process we have ever gone through.",
    attribution: "Arlyn and Jennifer Stotts, Phoenix, Arizona",
  },
];

const whyChoose = [
  {
    title: "Expert Guidance",
    text: "Our knowledgeable mortgage professionals are here to guide you through every step of the refinancing process, helping you make informed decisions tailored to your financial goals.",
  },
  {
    title: "Customized Solutions",
    text: "We understand that every homeowner's situation is unique. That's why we offer personalized refinancing options designed to meet your specific needs and circumstances.",
  },
  {
    title: "Competitive Rates",
    text: "We work diligently to secure the most competitive rates available in the market, ensuring you get the best possible terms for your refinancing.",
  },
  {
    title: "Transparent Process",
    text: "Our commitment to transparency means you'll always know what to expect. We provide clear communication throughout the process, so there are no surprises along the way.",
  },
  {
    title: "Fast Turnaround Times",
    text: "We prioritize efficiency without sacrificing quality. Our streamlined processes enable us to close loans quickly, getting you into your new mortgage terms as soon as possible.",
  },
  {
    title: "Strong Client Relationships",
    text: "We pride ourselves on building lasting relationships with our clients. Your satisfaction is our top priority, and we're dedicated to providing ongoing support even after your refinance is complete.",
  },
  {
    title: "Arizona Market Expertise",
    text: "Our team specializes in Arizona's real estate market, offering insights into local trends, refinancing options, and strategies tailored to the state's unique housing landscape.",
  },
];

const faqs = pageFaqs;

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
];

const stats = [
  { value: "719", label: "Average Credit Score" },
  { value: "Every 7 years", label: "How Often People Refinance on Average" },
  { value: "5,800", label: "Arizona Households Who Refinance per Month" },
  { value: "$285", label: "Average Monthly Savings" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function RefinancingArizonaPage() {
  const [calcBalance, setCalcBalance] = useState("");
  const [calcCurrentRate, setCalcCurrentRate] = useState("");
  const [calcNewRate, setCalcNewRate] = useState("");
  const [calcTerm, setCalcTerm] = useState("30");
  const [calcResult, setCalcResult] = useState<string | null>(null);

  function sanitizeNonNegative(value: string, integersOnly = false) {
    const digits = value.replace(/[^0-9.]/g, "");
    if (integersOnly) return digits.replace(/\./g, "");
    const firstDot = digits.indexOf(".");
    if (firstDot === -1) return digits;
    return digits.slice(0, firstDot + 1) + digits.slice(firstDot + 1).replace(/\./g, "");
  }

  function parseAmount(value: string) {
    return parseFloat(sanitizeNonNegative(value));
  }

  function monthlyPayment(principal: number, annualRate: number, years: number) {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    if (n <= 0) return 0;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  function money(value: number) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const balance = parseAmount(calcBalance);
    const currentRate = parseAmount(calcCurrentRate);
    const newRate = parseAmount(calcNewRate);
    const term = parseAmount(calcTerm);
    if (
      !Number.isFinite(balance) ||
      !Number.isFinite(currentRate) ||
      !Number.isFinite(newRate) ||
      !Number.isFinite(term) ||
      balance <= 0 ||
      currentRate < 0 ||
      newRate < 0 ||
      term <= 0
    ) {
      setCalcResult("Please enter valid loan details to estimate your savings.");
      return;
    }
    const currentPayment = monthlyPayment(balance, currentRate, term);
    const newPayment = monthlyPayment(balance, newRate, term);
    const monthlySavings = currentPayment - newPayment;
    if (monthlySavings > 0) {
      setCalcResult(
        `Current payment ${money(currentPayment)} → new payment ${money(newPayment)}. Estimated monthly savings: ${money(monthlySavings)}`,
      );
    } else if (monthlySavings < 0) {
      setCalcResult(
        `Current payment ${money(currentPayment)} → new payment ${money(newPayment)}. Estimated monthly increase: ${money(Math.abs(monthlySavings))}`,
      );
    } else {
      setCalcResult(`Estimated monthly payment stays ${money(currentPayment)}`);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Mortgage Refinancing in Arizona"
          subtitle="Lower your monthly payments, access cash, or shorten your loan term with our tailored refinancing options."
          secondaryCtaLabel=""
          note="3 min / no credit impact"
        />

        <HeroFeatureStrip items={featureStrip} />

        {/* Intro + benefits */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5">
                <h2
                  className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Refinancing: Your Path to Financial Flexibility
                </h2>
                <div className="w-16 h-1 bg-[#3fb364] mb-6" />
                <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                  Refinancing your mortgage in Arizona can be a strategic move to improve your financial situation. It&apos;s about{" "}
                  <strong>optimizing your largest financial commitment</strong> to better suit your current needs and future goals.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                  <strong>Homeowners refinance for various reasons</strong>, each unique to their financial landscape. Whether you&apos;re looking to reduce monthly payments, tap into home equity, or change your loan terms, refinancing offers benefits tailored to your specific situation. In today&apos;s dynamic economic environment,{" "}
                  <strong>refinancing can be a powerful tool</strong> for savvy homeowners, allowing you to take advantage of market conditions and potentially secure more favorable terms.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefitCards.map((card) => (
                  <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-5 shadow-sm">
                    <h3 className="text-[#08271B] text-[16px] font-bold mb-2 flex items-center gap-2">
                      <CheckIcon />
                      <span>{card.title}</span>
                    </h3>
                    <p className="text-[#4e5b4e] text-[14px] leading-relaxed pl-7">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Explore Your Refinancing Options
              </Link>
            </div>
          </div>
        </section>

        {/* Refinance considerations + math */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[34px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Whether or not refinancing your home loan at this time depends on the following factors:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-6">
                <li>What is the purpose of the refinancing? Are you taking cash out? Shortening the term? Lowering my interest rate</li>
                <li>What are the refinancing costs</li>
                <li>How long do you plan to keep the home</li>
                <li>What is the refinance interest rate compared to my current rate</li>
                <li>How long will it take to recover the cost of refinancing</li>
                <li>Will my income support the refinanced loan amount</li>
              </ul>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-8">
                Anytime refinance interest rates are lower than your present interest rate you should consider a home refinance.
              </p>
              <h3
                className="text-[#08271B] text-[22px] font-normal mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let&apos;s Run The Math Together
              </h3>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-8">
                For every $100,000 of your loan balance, a one percent difference in interest rate is equal to $1,000 per year. If you have a loan balance of $300,000 and the interest rate difference is 1.5%, your annual savings from a refinance would be $4,500 or in monthly terms, $375 per month!
              </p>
              <h3
                className="text-[#08271B] text-[22px] font-normal mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quick, Easy, and No-Hassle Mortgage Refinance
              </h3>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                During our initial visit, we can also discuss affordable refinance programs and current refinance interest rates.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsBanner stats={stats} />

        {/* Is refinancing right for you */}
        <section className="w-full loan-section !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Is Refinancing Right for You?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Refinancing can offer numerous benefits, but it&apos;s important to understand if it aligns with your financial goals. Here are some compelling reasons to consider refinancing your mortgage in Arizona:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rightForYouCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3 flex items-center gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <Link
                href="/refinance-calculator/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Calculate Your Refinancing Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Credit quiz CTA */}
        <section className="w-full bg-[#08271B] loan-section">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-white text-[24px] lg:text-[30px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Could Your Credit Score Get You Better Refinance Terms?
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed mb-7">
              Refinancing success depends heavily on your current credit standing. Discover if your credit score can help you secure better mortgage terms.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* Process */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How the Refinancing Process Works
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Refinancing your mortgage doesn&apos;t have to be complicated. With the right guidance, it&apos;s a straightforward process designed to help you achieve your financial goals. Here&apos;s a step-by-step breakdown of how refinancing works:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[16px] flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 mt-10 shadow-sm">
              <h3
                className="text-[#08271B] text-[22px] font-normal mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                To refinance your home loan, there are basically three steps that you will take:
              </h3>
              <ul className="space-y-4 text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                <li>
                  <strong>Assess:</strong> With your lender, assess if refinancing your mortgage is the right
                  decision for you at this time. Then assess which program is best for you.
                </li>
                <li>
                  <strong>Apply:</strong> Complete the mortgage application. Gather together the documents
                  required by your lender and his underwriters. Submit them to your lender.
                </li>
                <li>
                  <strong>Appraise:</strong> Your lender may require an appraisal of your home to ensure that it
                  will cover the amount of the home loan. He will arrange this for you.
                </li>
              </ul>
            </div>
            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl mt-6">
              <h3 className="text-[#052316] text-[18px] font-bold mb-2">Completing the Refinance Process</h3>
              <p className="text-[15px] text-[#052316] leading-relaxed">
                Once the mortgage application has been approved and the appraisal has been accepted, your lender
                will schedule a closing date. On the date of closing, you will sign new mortgage documents.
                Shortly thereafter, the existing mortgage will be paid-off and retired and payments on your new
                mortgage will begin.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <h2
                  className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  See Your Savings with Our Refinance Calculator
                </h2>
                <div className="w-16 h-1 bg-[#3fb364] mb-6" />
                <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                  Curious about how much you could save by refinancing your mortgage? Use our easy-to-use financial calculator to estimate your potential monthly savings, total interest reduction, or cash-out amount. Simply input your current loan details and explore how refinancing could improve your financial outlook.
                </p>
              </div>
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleCalculate}
                  noValidate
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-8 shadow-sm space-y-5"
                >
                  <h3
                    className="text-[#08271B] text-[22px] font-normal mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mortgage Refinance Calculator
                  </h3>
                  <div>
                    <label htmlFor="calc-balance" className="block text-[#08271B] text-[13px] font-semibold mb-1.5">
                      Current Loan Balance ($)
                    </label>
                    <input
                      id="calc-balance"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="350000"
                      min={0}
                      value={calcBalance}
                      onChange={(e) => setCalcBalance(sanitizeNonNegative(e.target.value))}
                      className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[15px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-current-rate" className="block text-[#08271B] text-[13px] font-semibold mb-1.5">
                      Current Interest Rate (%)
                    </label>
                    <input
                      id="calc-current-rate"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="6.75"
                      min={0}
                      value={calcCurrentRate}
                      onChange={(e) => setCalcCurrentRate(sanitizeNonNegative(e.target.value))}
                      className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[15px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-new-rate" className="block text-[#08271B] text-[13px] font-semibold mb-1.5">
                      New Interest Rate (%)
                    </label>
                    <input
                      id="calc-new-rate"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="5.99"
                      min={0}
                      value={calcNewRate}
                      onChange={(e) => setCalcNewRate(sanitizeNonNegative(e.target.value))}
                      className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[15px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    />
                  </div>
                  <div>
                    <label htmlFor="calc-term" className="block text-[#08271B] text-[13px] font-semibold mb-1.5">
                      New Loan Term (years)
                    </label>
                    <input
                      id="calc-term"
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="30"
                      min={0}
                      value={calcTerm}
                      onChange={(e) => setCalcTerm(sanitizeNonNegative(e.target.value, true))}
                      className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[15px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full transition-all"
                  >
                    Calculate Savings
                  </button>
                  {calcResult && (
                    <p className="text-center text-[#08271B] text-[16px] font-semibold pt-2">{calcResult}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="w-full loan-section">
          <div className="max-w-3xl mx-auto bg-[#3fb364] rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-white text-[15.5px] leading-relaxed mb-6">
              Ready to start your refinancing journey? Our expert team is here to guide you through every step of the process, ensuring a smooth and beneficial transition to your new mortgage terms.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#08271B] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Start Your Refinance Application
            </Link>
          </div>
        </section>

        <CountyTestimonials
          title="What Our Clients Say"
          testimonials={testimonials}
        />

        {/* Why choose us */}
        <section className="w-full loan-section">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Choose Us for Your Refinancing Needs?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-4">
                Choosing the right partner for your refinancing journey can make all the difference. At our company, we don&apos;t just process loans; we focus on creating a seamless experience tailored to your unique financial situation.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Our commitment to excellence and client satisfaction sets us apart in the competitive mortgage landscape. Here&apos;s why homeowners in Arizona trust us with their refinancing needs:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#08271B] text-[16px] font-bold mb-3">{card.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="loan-btn-wrap">
              <div className="bg-[#3fb364] rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto">
                <p className="text-white text-[15.5px] leading-relaxed mb-4">
                  Ready to discuss your refinancing options? Our expert team is just a call away to provide you with personalized assistance and answer any questions you may have.
                </p>
                <a href="tel:+16025352171" className="text-white text-[28px] lg:text-[32px] font-bold block mb-6 hover:opacity-90 transition-opacity">
                  +1 (602) 535-2171
                </a>
                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#08271B] text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                >
                  Call Us Now for a Free Consultation!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-[#f5f0e8] loan-section border-y border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FAQs about Mortgage Refinancing in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Navigating the refinancing process can raise many questions. Here are some of the most common inquiries we receive from homeowners considering refinancing their mortgages. Understanding these key points can help you make informed decisions about your financial future.
              </p>
            </div>
            <div>
              <FaqAccordion items={faqs} />
            </div>
            <p className="text-[#4e5b4e] text-[15px] leading-relaxed text-center">
              Still have questions about refinancing? Our team is here to provide personalized guidance and ensure you have all the information you need to make the best decision for your financial future. Let us help you take the next step with confidence.
            </p>
            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Your Refinancing Questions Answered
              </Link>
            </div>
          </div>
        </section>

        <GetInTouch
          theme="dark"
          title="Contact Us for Expert Refinancing Advice in Arizona"
          description=""
          showPreApproveCta
          ctaLabel="Start my preapproval"
        />

        {/* Explore solutions */}
        <section className="w-full bg-[#f5f0e8] loan-section border-t border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-8"
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