"use client";

import { faqs as pageFaqs } from "./faqs";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import LoanProgramHero from "../component/LoanProgramHero";
import HeroFeatureStrip from "../component/HeroFeatureStrip";

const featureStrip = [
  "Buy Your Dream Home with No Monthly Payments",
  "Keep More Cash While Buying Your New Home",
  "Flexible Homeownership for Retirement Living",
];

export default function ReverseMortgageHomePurchaseArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = pageFaqs;

  const benefits = [
    {
      title: "No Monthly Mortgage Payments",
      desc: "You can buy your dream home without the burden of regular mortgage payments, freeing up cash flow for other expenses"
    },
    {
      title: "Maintain Home Ownership",
      desc: "You retain full ownership of your new property while living there, allowing you to age in place comfortably"
    },
    {
      title: "Flexibility in Home Choice",
      desc: "This program allows you to purchase a home that better suits your current needs, whether downsizing in Phoenix or moving closer to family in Tucson"
    },
    {
      title: "Protection Against Market Declines",
      desc: "As a non-recourse loan, you or your heirs won't owe more than the home's value when the loan becomes due"
    },
    {
      title: "Tax-Free Funds",
      desc: "The money received from a reverse mortgage is generally not considered taxable income, providing potential tax advantages"
    },
    {
      title: "FHA Insurance",
      desc: "Most reverse mortgages are insured by the Federal Housing Administration (FHA), offering an additional layer of security"
    }
  ];

  const eligibilityLeft = [
    {
      title: "Age Requirement",
      desc: "At least one borrower must be 62 years or older. If married, only one spouse needs to meet the age requirement"
    },
    {
      title: "Credit and Financial Assessment",
      desc: "No specific credit score requirement, but lenders will review your credit history. Must demonstrate ability to meet financial obligations"
    },
    {
      title: "Counseling Requirement",
      desc: "Complete mandatory HUD-approved reverse mortgage counseling"
    },
    {
      title: "Equity Status",
      desc: "For existing homeowners looking to refinance, substantial equity in the home is required"
    }
  ];

  const processSteps = [
    {
      title: "Determine Eligibility and Budget",
      desc: "First, you'll need to confirm that you meet the age requirement of 62 years or older and assess your financial situation. Our Arizona-based specialists will help you understand the program's requirements and work with you to determine a suitable budget for your new home purchase."
    },
    {
      title: "Choose Your New Arizona Home",
      desc: "With your budget in mind, you can start looking for your ideal home in Arizona. Whether you're drawn to the vibrant city life of Phoenix, the scenic beauty of Sedona, or the relaxed atmosphere of Tucson, you'll need to select a property that meets HUD standards and falls within the approved price limits for your chosen area."
    },
    {
      title: "Apply for the Reverse Mortgage",
      desc: "Once you've found your perfect home, you'll submit an application to an Arizona-licensed reverse mortgage lender. This process involves providing necessary financial documentation and information about the property you intend to purchase."
    },
    {
      title: "Complete Counseling",
      desc: "Before proceeding, you'll attend a mandatory counseling session with a HUD-approved counselor. This session is designed to ensure you fully understand the responsibilities and benefits of a Reverse Mortgage for Home Purchase in Arizona."
    },
    {
      title: "Home Appraisal and Inspection",
      desc: "The chosen property will undergo an appraisal and inspection to ensure it meets all FHA requirements. This step is crucial to determine the home's value and confirm it's in good condition."
    },
    {
      title: "Finalize Loan and Down Payment",
      desc: "After the appraisal, you'll review and sign the loan documents. You'll also need to prepare your down payment, which is typically 50-60% of the purchase price. Our Arizona experts will guide you through this process, ensuring you understand every detail."
    },
    {
      title: "Close on Your New Home",
      desc: "At the closing, you'll sign the final paperwork and receive the keys to your new Arizona home. This exciting step marks the completion of the purchase process."
    },
    {
      title: "Enjoy Your New Home",
      desc: "Finally, you can move into your new property and start enjoying life in your new Arizona home. Remember, with a Reverse Mortgage for Home Purchase, you can live there without making monthly mortgage payments while maintaining homeownership."
    }
  ];

  const pros = [
    "No monthly mortgage payments",
    "Retain home ownership",
    "Ability to purchase a more expensive home",
    "Protection against market volatility",
    "Flexibility to make payments if desired",
    "Non-recourse loan",
    "Can move closer to family or healthcare"
  ];

  const cons = [
    "Higher upfront costs",
    "Decreasing home equity over time",
    "Complexity of the loan structure",
    "Interest accrues on the loan balance",
    "Potential impact on Medicaid eligibility",
    "Requires maintaining the home and paying property taxes",
    "May affect inheritance plans"
  ];

  const testimonials = [
    {
      quote:
        "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Emails were responded to on a daily basis and in a very quick manner. Every step of the process was done very professionally and friendly. I highly recommend Eddie's mortgage team for your refinancing needs.",
      name: "Chris and Vicky Smith, Avondale, Arizona"
    },
    {
      quote:
        "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule.",
      name: "Elizabeth Todd - H2 Realty, Phoenix, Arizona"
    },
    {
      quote:
        "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. You are heads and shoulders beyond most I have worked with.",
      name: "Marleen Kapanicas - Homesmart, Scottsdale, Arizona"
    },
    {
      quote:
        "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern in the process. All questions were answered promptly and completely with the correct issues addressed without extra fanfare, like dealing with a trusted family member.",
      name: "Thomas and Carol Milberry, Queen Creek, Arizona 85242"
    },
    {
      quote:
        "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he's picked up the phone and called to let me know where we are in the process. He closes every deal and communicates through it well.",
      name: "Nancy Perry - Solutions Real Estate, Avondale, Arizona"
    }
  ];

  const whyUs = [
    {
      title: "Unmatched Expertise in Arizona's Housing Market",
      desc: "With years of experience in the local real estate landscape, we bring in-depth knowledge of Arizona's diverse communities and housing trends. From the bustling streets of Phoenix to the serene neighborhoods of Scottsdale, we'll help you find the perfect location for your new home."
    },
    {
      title: "Personalized Approach Tailored to Your Needs",
      desc: "We recognize that every client's situation is unique. Our team takes the time to understand your specific goals, financial situation, and preferences. We'll work closely with you to develop a customized strategy that aligns with your retirement vision."
    },
    {
      title: "Clear, Transparent Communication",
      desc: "Navigating the world of reverse mortgages can be complex, but we're here to make it simple. Count on us for clear explanations, honest advice, and transparent communication throughout the entire process. We'll ensure you have all the information you need to make confident decisions."
    },
    {
      title: "Commitment to Your Long-Term Financial Well-being",
      desc: "Our goal isn't just to help you buy a home — it's to support your overall financial health in retirement. We'll help you understand how a Reverse Mortgage for Home Purchase fits into your broader financial picture and long-term goals."
    }
  ];

  const relatedLoans = [
    { href: "/conventional-home-loans-arizona/", label: "Conventional Home Loans" },
    { href: "/conventional-vs-fha-loans-arizona/", label: "Conventional vs FHA Loans" },
    { href: "/fha-home-loans-arizona/", label: "FHA Home Loans" },
    { href: "/fha-streamline-refinance-arizona/", label: "FHA Streamline Refinance" },
    { href: "/first-time-home-buyer-arizona-guide/", label: "First Time Home Buyer" },
    { href: "/jumbo-loans-arizona/", label: "Jumbo Loans" },
    { href: "/reverse-mortgage-arizona/", label: "Reverse Mortgage" },
    { href: "/private-money-lender-arizona/", label: "Private Money Lender" },
    { href: "/refinancing-arizona/", label: "Refinancing" },
    { href: "/va-loans-arizona/", label: "VA Loans" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Reverse Mortgage for a Home Purchase"
          subtitle="No Monthly Payments for 62+ Homebuyers"
        />

        <HeroFeatureStrip items={featureStrip} />

        {/* BENEFITS OVERVIEW */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                  TOP BENEFITS
                </span>
                <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
                  Top Benefits of Reverse Mortgage for Home Purchase in Arizona
                </h2>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  A Reverse Mortgage for Home Purchase is a unique financial tool that empowers seniors 62 and older to buy their dream home without the burden of monthly mortgage payments. This innovative program combines a one-time investment of your own funds with the proceeds from a reverse mortgage to purchase a new primary residence.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  By leveraging your home equity, you can potentially secure a more comfortable living situation, move closer to family, or find a home that better suits your needs in retirement. This approach allows you to maintain ownership of your new property while preserving your cash flow for other important expenses.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  Whether you&apos;re looking to downsize, upgrade, or relocate, a Reverse Mortgage for Home Purchase offers the flexibility to make these changes without straining your retirement savings. It opens up possibilities for higher-value homes or more desirable locations that might be out of reach with traditional financing.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  This program not only helps you secure a new home but also provides financial freedom in retirement. You can allocate funds towards healthcare, travel, or simply enjoying your golden years to the fullest, all while living in a home that meets your current needs and preferences.
                </p>
                <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                  With a Reverse Mortgage for Home Purchase, you&apos;re not just buying a house – you&apos;re investing in your quality of life and securing a comfortable future in a home that truly feels like yours.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {benefits.map((b, idx) => (
                  <div
                    key={b.title}
                    className="bg-[#fcf9f3] border border-[#e0e0e0] hover:border-[#3fb364] rounded-2xl p-5 shadow-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[14px] mb-3">
                      {idx + 1}
                    </div>
                    <h3 className="text-[15px] font-bold text-[#052316] mb-2 font-playfair">{b.title}</h3>
                    <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="loan-cta-band bg-[#fcf9f3] !pb-0">
          <div className="mx-auto max-w-6xl text-center loan-block-gap">
            <Link
              href="/#get-pre-approved"
              className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
            >
              Get Personalized Advice →
            </Link>
          </div>
          <StatsBanner
              sectionClassName="py-0 bg-transparent"
              stats={[
                { value: "$0", label: "Monthly Payments?" },
                { value: "55%", label: "Average Down Payment" },
                { value: "70", label: "Average Borrower Age" },
                { value: "100%", label: "Full Ownership" },
              ]}
            />
        </section>

        {/* ELIGIBILITY */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                ELIGIBILITY
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Are You Eligible for a Reverse Mortgage Home Purchase in Arizona?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Discover if you qualify for this unique financing option that lets Arizona seniors buy their dream home without monthly mortgage payments. Whether downsizing in Phoenix, relocating to Tucson, or retiring in Scottsdale, start by understanding your eligibility for a Reverse Mortgage for Home Purchase in Arizona.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                {eligibilityLeft.map((item) => (
                  <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                    <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                    <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">
                    Financial Considerations
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3">
                    Ability to make a down payment (typically 50% or more of the purchase price). Sufficient income to cover ongoing property expenses:
                  </p>
                  <ul className="space-y-2 text-[14px] text-[#4e5b4e]">
                    {["Property taxes", "Homeowners insurance", "HOA fees (if applicable)", "Home maintenance"].map(
                      (li) => (
                        <li key={li} className="flex items-center gap-2">
                          <span className="text-[#3fb364] font-bold">✓</span>
                          <span>{li}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">
                    Property Qualifications
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3">
                    Must be your primary residence. Eligible property types include:
                  </p>
                  <ul className="space-y-2 text-[14px] text-[#4e5b4e]">
                    {[
                      "Single-family homes",
                      "2-4 unit properties (owner must occupy one unit)",
                      "HUD-approved condos",
                      "Manufactured homes (built after 1976 and HUD compliant)"
                    ].map((li) => (
                      <li key={li} className="flex items-center gap-2">
                        <span className="text-[#3fb364] font-bold">✓</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Contact Our Reverse Mortgage Specialists →
              </Link>
            </div>
          </div>
        </section>

        {/* CREDIT QUIZ */}
        <section className="loan-section bg-white">
          <div className="max-w-3xl mx-auto bg-[#052316] text-white rounded-3xl p-8 lg:p-10 text-center space-y-4 shadow-lg">
            <h3 className="text-[22px] lg:text-[26px] font-bold font-playfair">
              Buying with a Reverse Mortgage? Check Your Credit First
            </h3>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed">
              Using a reverse mortgage for purchase requires meeting specific criteria. See if your credit profile aligns with reverse mortgage purchase requirements.
            </p>
            <Link
              href="/credit-score-quiz/"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-white/10"
            >
              Take The Quiz
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                HOW IT WORKS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                How Reverse Mortgage for Home Purchase Works in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Curious about Reverse Mortgage for Home Purchase? This program lets seniors 62+ buy a new home without monthly payments. Follow our step-by-step guide to unlock your dream retirement home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center font-bold text-[18px] mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-md inline-block"
              >
                Schedule Your No-Obligation Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                CLIENT STORIES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                What Our Clients Say About Reverse Mortgages
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Hear from Arizona homeowners who have benefited from our reverse mortgage solutions. Their stories showcase how a reverse mortgage can provide financial freedom and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm space-y-4">
                  <p className="text-[#3fb364] text-[14px]">★★★★★</p>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-[#052316] text-[13px] font-bold">{t.name}</p>
                </div>
              ))}
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/client-mortgage-reviews/"
                className="inline-block bg-[#052316] hover:bg-[#0a3a24] text-white font-bold px-7 py-3.5 rounded-full transition-all"
              >
                Explore All Client Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* PROS & CONS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                WEIGH YOUR OPTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Pros and Cons of Reverse Mortgage for Home Purchase
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed max-w-3xl mx-auto mt-4">
                Considering a Reverse Mortgage for Home Purchase? It&apos;s important to understand both the advantages and potential drawbacks of this unique financing option. Here&apos;s a balanced overview to help you make an informed decision about whether this program aligns with your retirement goals and financial situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm">
                <h3 className="text-[20px] font-bold text-[#052316] mb-4 font-playfair">Pros</h3>
                <ul className="space-y-3">
                  {pros.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[14px] text-[#4e5b4e]">
                      <span className="text-[#3fb364] font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#e0e0e0]">
                  <h4 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">Understanding the Pros</h4>
                  <ul className="space-y-2 text-[13.5px] text-[#4e5b4e]">
                    <li>The absence of monthly mortgage payments frees up cash flow for other expenses.</li>
                    <li>You maintain full ownership of your new home while living there.</li>
                    <li>The program often allows for the purchase of a higher-value home than traditional financing.</li>
                    <li>As a non-recourse loan, you&apos;re protected if the home value decreases.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-[#e0e0e0] rounded-2xl p-7 shadow-sm">
                <h3 className="text-[20px] font-bold text-[#052316] mb-4 font-playfair">Cons</h3>
                <ul className="space-y-3">
                  {cons.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[14px] text-[#4e5b4e]">
                      <span className="text-[#052316] font-bold">–</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#e0e0e0]">
                  <h4 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">Considering the Cons</h4>
                  <ul className="space-y-2 text-[13.5px] text-[#4e5b4e]">
                    <li>Upfront costs can be higher than traditional mortgages.</li>
                    <li>Your home equity will decrease over time as interest accrues.</li>
                    <li>The loan structure can be complex, requiring careful consideration.</li>
                    <li>You must continue to pay property taxes, insurance, and maintain the home.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERT INSIGHT */}
        <section className="loan-section bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                EXPERT INSIGHT
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Making the Right Choice
              </h2>
            </div>

            <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-3xl p-8 lg:p-10 text-left space-y-5">
              <div>
                <h3 className="text-[20px] font-bold text-[#052316] font-playfair">Eddie Knoell</h3>
                <p className="text-[#3fb364] text-[13px] font-semibold mt-1">
                  Senior Loan Officer, Co-founder and Vice President of Mortgage Brothers LLC
                </p>
              </div>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                A Reverse Mortgage for Home Purchase can be a powerful financial tool for seniors looking to relocate or downsize. However, it&apos;s crucial to understand that every situation is unique. What works for one family may not be the best solution for another.
              </p>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed font-semibold text-[#052316]">
                Key considerations include:
              </p>
              <ul className="space-y-2 text-[14.5px] text-[#4e5b4e]">
                <li className="flex items-center gap-2">
                  <span className="text-[#3fb364]">✓</span>
                  <span>Your long-term financial goals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3fb364]">✓</span>
                  <span>Your health and potential future care needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3fb364]">✓</span>
                  <span>Your desire to leave an inheritance</span>
                </li>
              </ul>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                I always advise my clients to involve their family members in the decision-making process. It&apos;s also important to consider how this financial move fits into your overall retirement strategy.
              </p>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Remember, while the idea of no monthly mortgage payments is attractive, you&apos;re still responsible for property taxes, insurance, and home maintenance. It&apos;s essential to ensure you have the resources to meet these ongoing obligations.
              </p>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                Ultimately, a Reverse Mortgage for Home Purchase can provide financial flexibility and allow you to live in a home that better suits your needs. But it&apos;s a significant decision that requires careful consideration and expert guidance.
              </p>
            </div>

            <div className="bg-[#052316] text-white rounded-3xl p-8 text-center space-y-3">
              <p className="text-[18px] font-semibold">
                Have More Questions? Contact Our Reverse Mortgage for a Home Purchase Experts
              </p>
              <a href="tel:+16025352171" className="block text-[28px] font-bold text-[#3fb364] hover:underline">
                (602) 535-2171
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Common Questions About Reverse Mortgages in Arizona
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#052316] text-[16px] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                WHY MORTGAGE BROTHERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-bold font-playfair leading-tight">
                Your Path to a New Home Starts Here
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Are you ready to explore how a Reverse Mortgage for Home Purchase can open doors to your ideal retirement home? Whether you&apos;re looking to downsize, move closer to family, or find a home that better suits your current lifestyle, our team of specialists is here to guide you every step of the way.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At Mortgage Brothers LLC, we understand that this is more than just a financial decision – it&apos;s about finding the perfect place to enjoy your retirement years. Our experienced professionals are dedicated to helping you navigate the unique opportunities and considerations of using a Reverse Mortgage for Home Purchase in Arizona.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-5">
                  <h3 className="text-[16px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Schedule Your Free, No-Obligation Consultation
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              Let&apos;s work together to turn your retirement home dreams into reality. With Mortgage Brothers LLC, you&apos;re not just getting a mortgage – you&apos;re gaining a trusted partner in your retirement journey.
            </p>
            <p className="text-[#c8c8b8] text-[15px]">
              1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                className="bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[16px] px-8 py-4 rounded-full transition-all shadow-lg"
              >
                GET PRE-APPROVED NOW →
              </Link>
              <a
                href="tel:+16025352171"
                className="border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-4 rounded-full transition-all hover:bg-white/10"
              >
                Call (602) 535-2171
              </a>
            </div>
            <p className="text-[#b8d4b8] text-[12px] leading-relaxed pt-6 max-w-3xl mx-auto">
              Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only. You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS #210917 and #1618695. Equal housing lender.
            </p>
          </div>
        </section>

        {/* RELATED LOANS */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-bold font-playfair">
                Explore Our Mortgage Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLoans.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#052316] font-semibold text-[14.5px] hover:border-[#3fb364] hover:text-[#3fb364] transition-all"
                >
                  <span className="text-[#3fb364]">✓</span>
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