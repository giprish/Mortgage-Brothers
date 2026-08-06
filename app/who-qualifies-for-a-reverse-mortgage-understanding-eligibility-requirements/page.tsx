import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FaqAccordion from "../component/FaqAccordion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum age to qualify for a reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least one borrower must be 62 years old. Spouses younger than 62 may have protections under the non-borrowing spouse rule.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a reverse mortgage if I still have a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the reverse mortgage will first pay off your existing mortgage, provided there is enough equity remaining to access funds.",
      },
    },
    {
      "@type": "Question",
      name: "Which properties are eligible for a reverse mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eligible properties include single-family homes, 1–4 unit homes you occupy, FHA-approved condos, and manufactured homes meeting HUD standards. Vacation homes, co-ops, and homes on leased land are generally not eligible.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need counseling before applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, HUD-approved counseling is mandatory to ensure you understand the reverse mortgage process, costs, and alternatives.",
      },
    },
    {
      "@type": "Question",
      name: "What financial obligations must I meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must demonstrate the ability to pay property taxes, insurance, and maintain the home. Lenders also review your credit and federal debt status.",
      },
    }
  ],
};

export default function ReverseMortgageEligibilityArticlePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-[64px] sm:pt-[72px]">
        {/* Hero */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Mortgage Insights</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              RETIREMENT GUIDE · 2026
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who Qualifies for a Reverse Mortgage? Understanding Eligibility &amp; Requirements
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong></span>
              <span>•</span>
              <span>Jun 5, 2026</span>
              <span>•</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          <section className="mb-12">
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              A reverse mortgage allows homeowners aged 62 and older to convert home equity into cash without selling their home. However, not everyone qualifies. Understanding the eligibility requirements is essential before considering this financial option.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              This guide covers all major qualifications — from age and home equity to property standards and financial assessments — so you can determine if a <Link href="/reverse-mortgage-arizona/" className="text-[#3fb364] font-semibold hover:underline">reverse mortgage</Link> is the right solution for your retirement planning.
            </p>
            <p className="text-[14px] leading-[1.8] text-[#3a4a3a] mb-4 italic">
              (Sources: HUD, Investopedia, <a href="https://files.consumerfinance.gov/f/documents/cfpb_reverse_mortgage_rights_responsibilities.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3fb364] font-semibold hover:underline">Consumer Finance.gov</a>)
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              1. Age Requirement
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              To qualify, <strong>at least one borrower must be 62 years or older</strong>.<br />
              For married couples with a younger spouse, there are two options:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li><strong>Non-borrowing spouse:</strong> The younger spouse isn&apos;t listed as a borrower but is protected under HUD rules.</li>
              <li><strong>Wait until both are 62:</strong> Both spouses become borrowers, often resulting in higher loan amounts and equal protection.</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              💡 <em>Tip</em>: Older borrowers may qualify for larger loan amounts since lenders factor life expectancy into interest calculations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              2. Home Equity Requirements
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Home equity is the portion of the property you own outright. Requirements typically include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>50% <strong>or more equity</strong>, or</li>
              <li>A mortgage balance low enough to pay off with reverse mortgage proceeds.</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <strong>Example:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>Home value: $400,000</li>
              <li>Existing mortgage: $100,000</li>
              <li>Home equity: $200,000 ✅ Eligible</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              The remaining funds can be accessed as cash or a line of credit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              3. Property Type &amp; Residency Requirements
            </h2>
            <h3 className="text-[#052316] text-[20px] font-bold mb-2">Eligible Properties</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>Single-family homes</li>
              <li>1–4 unit residential properties (if you occupy one unit)</li>
              <li>FHA-approved condos or planned developments</li>
              <li>Manufactured homes meeting HUD standards</li>
            </ul>
            <h3 className="text-[#052316] text-[20px] font-bold mb-2">Ineligible Properties</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>Vacation or investment homes</li>
              <li>Co-ops</li>
              <li>Homes on leased land</li>
            </ul>
            <h3 className="text-[#052316] text-[20px] font-bold mb-2">Primary Residence Rule</h3>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Your home must be your primary residence, occupied most of the year (typically 6+ months). Temporary absences for vacations or medical care are generally allowed, but permanent relocation may trigger repayment.
            </p>
            <div className="text-center my-6">
              <Link href="/contact-us/" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
                Speak with a Reverse Mortgage Specialist
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              4. Financial Assessment
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Lenders review your financial capacity to ensure you can maintain your home. They check:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li><strong>Income &amp; assets:</strong> Social Security, pensions, retirement accounts, and savings</li>
              <li><strong>Ability to pay property taxes, insurance, and maintenance</strong></li>
              <li><strong>Credit history and federal debts</strong></li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              If risks are identified, a <strong>Life Expectancy Set-Aside (LESA)</strong> may be required to cover taxes and insurance automatically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              5. Property Condition &amp; Repairs
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Your home must meet <strong>HUD minimum property standards</strong>, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>Structurally sound foundation and roof</li>
              <li>Working plumbing, electrical, and HVAC systems</li>
              <li>No safety or health hazards</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Repairs can be funded through a <strong>repair set-aside</strong> from your reverse mortgage proceeds or completed before closing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              6. Mandatory Counseling
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              All HECM applicants must complete a <strong>HUD-approved counseling session</strong>.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Counseling ensures you understand:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>How reverse mortgages work</li>
              <li>Costs, fees, and obligations</li>
              <li>Available alternatives</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              You receive a certificate valid for 180 days to proceed with your application.
            </p>
            <div className="text-center my-6">
              <Link href="/contact-us/" className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors">
                Check Your Reverse Mortgage Eligibility
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 font-playfair border-b border-[#e8e0d0] pb-3">
              Summary
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              To qualify for a reverse mortgage, you generally need:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li><strong>62 years or older</strong></li>
              <li><strong>Sufficient home equity</strong></li>
              <li><strong>Primary residence</strong> meeting property standards</li>
              <li><strong>Financial capacity</strong> to maintain taxes, insurance, and upkeep</li>
              <li><strong>HUD-approved counseling completion</strong></li>
              <li>No major federal debt defaults</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <Link href="/reverse-mortgage-arizona/" className="text-[#3fb364] font-semibold hover:underline"><strong>Reverse mortgages</strong></Link> can unlock home equity for retirement, healthcare, or other needs while allowing you to stay in your home.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-[#052316] text-[24px] font-bold mb-4 font-playfair">
              Take Action Today
            </h3>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              If you think you may qualify for a reverse mortgage:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#3a4a3a] text-[16px]">
              <li>Schedule a <strong>HUD-approved counseling session</strong></li>
              <li>Review your <strong>home equity and financial capacity</strong></li>
              <li>Consult a <strong>certified reverse mortgage specialist</strong> to explore your options</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              💡 <em><strong>Tip</strong></em>: Early planning ensures you maximize your reverse mortgage benefits and secure financial peace of mind in retirement.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <FaqAccordion
              title="Frequently Asked Questions"
              items={[
                { q: "What is the minimum age to qualify for a reverse mortgage?", a: <><strong>A:</strong> At least one borrower must be 62 years old. Spouses younger than 62 may have protections under the non-borrowing spouse rule.</> },
                { q: "Can I get a reverse mortgage if I still have a mortgage?", a: <><strong>A:</strong> Yes, the reverse mortgage will first pay off your existing mortgage, provided there is enough equity remaining to access funds.</> },
                { q: "Which properties are eligible for a reverse mortgage?", a: <><strong>A:</strong> Eligible properties include single-family homes, 1–4 unit homes you occupy, FHA-approved condos, and manufactured homes meeting HUD standards. Vacation homes, co-ops, and homes on leased land are generally not eligible.</> },
                { q: "Do I need counseling before applying?", a: <><strong>A:</strong> Yes, HUD-approved counseling is mandatory to ensure you understand the reverse mortgage process, costs, and alternatives.</> },
                { q: "What financial obligations must I meet?", a: <><strong>A:</strong> You must demonstrate the ability to pay property taxes, insurance, and maintain the home. Lenders also review your credit and federal debt status.</> }
              ]}
            />
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}