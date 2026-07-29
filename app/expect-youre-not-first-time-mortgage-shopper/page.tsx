"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const relatedLinks = [
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
  },
  {
    label: "Ultimate Guide to First Mortgage",
    href: "/ultimate-guide-first-mortgage/",
  },
  {
    label: "Why Use an Arizona Mortgage Broker",
    href: "/why-use-an-arizona-mortgage-broker/",
  },
  {
    label: "Arizona Mortgage Payments",
    href: "/arizona-mortgage-payments/",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I use an online mortgage lender when buying a home in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online lenders may advertise very low teaser rates, but these usually apply only to buyers with perfect credit, no debt, and large cash reserves. Many real estate agents advise against using online lenders because they often lack personal service, can cause delays, and may put you at a disadvantage in multiple-offer situations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a mortgage broker and a mortgage banker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mortgage broker works independently and can offer loan options from multiple lenders, often helping you secure the best rates. A mortgage banker works for a specific bank or lender and can only offer the loans that their company originates. Some lenders may also provide portfolio lending, where they originate and service the loan themselves.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it important to get pre-approved instead of just prequalified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A prequalification is based on verbal information and doesn't include a credit check or income verification, so it carries little weight with sellers. A pre-approval, however, verifies your financial information and signals to sellers that you are ready and able to buy. In competitive markets, a pre-approval can make the difference between having your offer accepted or rejected.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for mortgage pre-approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get pre-approved, you typically need to provide your Social Security number, proof of employment, recent pay stubs, tax returns from the last two years, and bank account information. These documents help lenders verify your income, employment stability, and available assets.",
      },
    },
    {
      "@type": "Question",
      name: "What should I avoid doing during the mortgage approval process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To avoid delays or loan denial, do not make large purchases on credit such as cars, boats, or vacations. Always provide requested documentation promptly, follow the timelines in your purchase agreement, and stay in close contact with your lender and agent throughout the process.",
      },
    },
  ],
};

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

export default function ExpectYoureNotFirstTimeMortgageShopperPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <section className="relative z-0 w-full bg-white overflow-hidden">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 py-3 lg:py-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/not-a-first-time-mortgage-shopper.jpg"
              alt="Insights for experienced mortgage shoppers navigating the home financing process."
              width={1920}
              height={1080}
              className="relative z-0 w-full h-auto block max-w-full rounded-md lg:rounded-lg"
            />
          </div>
        </section>

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">
              <h1
                className="text-[#08271B] text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What to Expect When You&apos;re Not a First Time Mortgage Shopper
              </h1>

              <p className="text-[#8a9a7a] text-[14px] mb-8">
                by{" "}
                <Link href="/about-us/" className="text-[#3fb364] hover:underline font-medium">
                  Eddie Knoell
                </Link>{" "}
                | Feb 11, 2025
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                When you&apos;re moving to Phoenix, or moving up to a new home within the area, one of the
                first things you need to do before visiting open houses, before finding a real estate agent or
                even deciding on a neighborhood, is to find a mortgage lender and understand how to secure a
                loan to buy a home.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                If you&apos;ve bought a home before, you might have some experience with the process. But the
                mortgage industry has changed since your last loan. And if you&apos;re new to the Phoenix
                Valley, you might not know who to call or what the process will look like here.
              </p>

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                Here&apos;s an overview of what it&apos;s really like to get a mortgage these days, and what
                you need to know and do to ensure you get the best loan for you.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Already Experienced? Elevate Your Mortgage Strategy!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  If you&apos;re not a first-time mortgage shopper, connect with our experts for advanced tips
                  and personalized solutions to optimize your mortgage journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Enhance Your Strategy &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-about-online-lenders">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What About Online Lenders?
                  </h2>
                  <p className="mb-5">
                    Depending on when you last applied for a mortgage, the market might have changed a lot, or
                    maybe just a little. One of the biggest changes over the last 10 to 15 years are online
                    lending options. Today, online lenders like Lending Tree and others are buying up ad space
                    on every real estate website, offering incredibly low rates and easy financing.
                  </p>
                  <p className="mb-5">
                    There are a few things you need to know. First, those rates you&apos;re seeing online?
                    They&apos;re teaser rates – the lowest possible rates that could ever be offered to a buyer
                    that has perfect credit, no outstanding debt, and plenty of cash to pay down points. Unless
                    you fit those criteria (very few people do) the rate you&apos;ll likely get will almost
                    certainly not match what online lender are offering.
                  </p>
                  <p className="mb-5">
                    Another problem with online lenders is that you cannot develop a personal relationship with
                    them. You might think, &ldquo;well, I don&apos;t want a relationship, I want a low
                    rate.&rdquo; The catch is, a personal relationship can often make the difference between
                    getting the house you want, and not getting it.
                  </p>
                  <p className="mb-5">
                    Why? The ugly truth about online lenders is that their business is all about numbers, not
                    people. That means they are busy processing huge volumes of loans. They&apos;re too busy to
                    answer the phone, too busy to answer questions, too busy to provide needed follow up. This
                    means that closing a loan with an online lender is likely to be fraught with problems and
                    delays. This can cost you big, since if your seller isn&apos;t understanding about this, you
                    could lose your deposit along with the opportunity to buy the home you&apos;ve chosen.
                  </p>
                  <p>
                    This is why many real estate agents actually advise their buyers against using online
                    lenders. In a multiple offer situation, online lenders can put you at a disadvantage since
                    neither agents nor sellers see them as being reliable or accountable. It&apos;s better to
                    develop a relationship with a lender that you trust, who is known in your local market. A
                    Phoenix-based lending expert like The Mortgage Brothers Team, for instance.
                  </p>
                </section>

                <section id="choosing-a-lender">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Choosing a Lender
                  </h2>
                  <p className="mb-5">
                    If you&apos;ve decided against going online for a loan, you&apos;ll need to find a lender
                    you can trust here in the Phoenix Valley. You&apos;ll have plenty of choices, but here are
                    some criteria you should consider:
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">Broker or Banker?</h3>
                  <p className="mb-5">
                    A mortgage broker is a person that sells loans that are offered or originated by other
                    lenders. That means they don&apos;t work for any specific lender. Instead, they work for
                    you. They can help you get access to the loans offered through thousands of lenders and
                    programs. A good broker can help you get the best rates available, because they have so many
                    options to choose from. A mortgage banker is a person that works for a lender that is
                    actually originating loans, usually this is a retail bank. They can also have access to some
                    good loans, but ultimately their job is to sell you the loans that their company originates.
                  </p>
                  <p className="mb-5">
                    Some brokers, by the way, are also bankers. This means that they have access to a wide
                    variety of loans that are offered by other lenders, but also may originate some of their own
                    loans. Another type of lending you should know about is called &quot;portfolio
                    lending.&quot; Where most lenders originate loans and resell them after closing, a portfolio
                    lender originates the loan, and services it after closing. These kinds of loans tend to be
                    ARMs or loans that would be difficult to sell on the open market.
                  </p>
                  <p className="mb-2 font-semibold text-[#052316]">Questions to ask:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Are you a broker or a bank?</li>
                    <li>Do you originate loans?</li>
                    <li>Do you offer portfolio lending?</li>
                  </ul>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">VA or FHA Approved?</h3>
                  <p className="mb-5">
                    <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      VA
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/fha-home-loans-arizona/"
                      className="text-[#3fb364] font-semibold hover:underline"
                    >
                      FHA loans
                    </Link>{" "}
                    offer some of the best rates in the mortgage industry, but because they are government
                    programs they require some expertise on the part of the lender to ensure the process goes
                    smoothly. If you&apos;re a veteran or considering an FHA loan, you should ask the lender
                    whether they are VA or FHA approved.
                  </p>
                  <p className="mb-5">
                    Why does it matter? Many lenders can offer VA or FHA loans but are not approved lenders.
                    That means they originate loans that are processed elsewhere – these lenders are at a
                    disadvantage since they are less able to resolve issues in a timely way. This can impact
                    your ability to close on time in some cases.
                  </p>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                    PreQualified or PreApproved?
                  </h3>
                  <p className="mb-5">
                    The next step before choosing a loan is to find out how much money and what loan programs
                    you might qualify for. There are two approaches to take, one is to get prequalified, which
                    is based on information you verbally tell a lender. It doesn&apos;t involve a credit check
                    or income verification, so the amount you actually qualify for could differ significantly.
                  </p>
                  <p className="mb-5">
                    Most people in the real estate industry don&apos;t put much stock in a prequalification, but
                    it can offer some good information early in the process. If you&apos;re 6 or more months out
                    from buying a home, a prequalification can be a good choice. If you&apos;re actually ready
                    to look at homes and make offers within the next few months, you&apos;re better off getting
                    pre-approved.
                  </p>
                  <p className="mb-5">
                    A pre-approval tells sellers and their agents that you are ready, willing and able to
                    actually buy a home for the amount that you&apos;re offering. In fact, many sellers agents
                    tell clients that a pre-qualification is basically worthless. What they want to see,
                    especially in a hot market, is a fully pre-approved offer. In a multiple offer situation,
                    having a solid pre-approval from a lender with a good reputation can make the difference
                    between being accepted, or not.
                  </p>
                  <p className="mb-2 font-semibold text-[#052316]">To get pre-approved, you will need to provide:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Social security number – you provide this and your current residence on an application.
                    </li>
                    <li>
                      Proof of employment and proof of income – this is usually your most recent pay stubs.
                    </li>
                    <li>
                      Tax Information – Usually, the last two years. Proves ongoing income and stable employment.
                    </li>
                    <li>
                      Bank Accounts and Balances – Lenders want to know what assets you already have and whether
                      you have cash to close.
                    </li>
                  </ul>
                </section>

                <section id="finding-a-home">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Finding a Home
                  </h2>
                  <p className="mb-5">
                    Now you&apos;re ready to actually go through the process of finding a home. The first step
                    is to find a reputable real estate agent, if you haven&apos;t already done so. In today&apos;s
                    market, with so much information available online, many buyers think they don&apos;t need an
                    agent but in most cases a good agent is the difference between getting the home you want,
                    and getting skunked. Agents bring valuable insight about which schools and neighborhoods are
                    best in your price range, they know what kind of offers sellers in their area are accepting,
                    and they can also save you a lot of time looking at houses that don&apos;t meet your
                    criteria (some listings look great on paper but are not so great in person).
                  </p>
                  <p className="mb-5">
                    You should provide your pre-approval information to the agent as soon as you are ready to
                    start looking. They can use this to develop a strategy to help you get the home you want.
                    How will they &quot;market&quot; you to sellers? Will they preview homes for you? This can
                    save time looking at those that aren&apos;t a good fit.
                  </p>
                  <p className="mb-5">
                    In a hot market, you and your agent should be ready to work quickly to get an offer in on
                    homes that will likely sell fast, and know how to write an offer that wins over the seller.
                    You will likely not have a lot of time to think about a home so you really need to be
                    prepared to write an offer on a home quickly after seeing it.
                  </p>
                  <p>
                    This is where having a solid pre-approval before you start looking really makes a
                    difference. It helps to ensure that the financial side doesn&apos;t complicate your
                    decision-making. You&apos;ll know whether you can afford the house and the payments involved
                    before you start looking.
                  </p>
                </section>

                <section id="applying-for-the-loan">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Applying for the Loan
                  </h2>
                  <p className="mb-5">
                    Once you&apos;ve found the house of your dreams, you need to make formal application for
                    your loan within a few days to ensure that you are meeting the terms of your purchase
                    agreement, and to ensure that the lender is able to close on time. Failure to meet these
                    terms can cause you to lose your deposit if you aren&apos;t able to close on time, so this
                    isn&apos;t the time to be shopping rates.
                  </p>
                  <p>
                    If you&apos;re pre-approved, the lender will have most of the information he or she needs,
                    but they will ask you to update all your information so that it is most recent (new pay
                    stubs, new bank account balances), and you&apos;ll need to fill out a new application. You
                    also need to provide a copy of your purchase and sale contract so that the lender knows what
                    house you are buying and can order a Be ready to move quickly – once that offer is down, you
                    have a lot of timelines that must be met to keep you &quot;in contract.&quot;
                  </p>
                </section>

                <section id="locking-rates">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Locking Rates
                  </h2>
                  <p className="mb-5">
                    Once your home is found, the offer is made and your loan application is made, you&apos;ll
                    need to make a decision about locking rates. This is a decision that&apos;s stressful for
                    many people, because of course, you want to get the lowest rate possible.
                  </p>
                  <p className="mb-5">
                    You&apos;ll want to do a little research about what sort of trend line rates are following
                    to know where your greatest risk lies. Your mortgage lender can advise you about this. If
                    rates are very low, and starting to trend higher, your risk of missing out on a future dip
                    in rates is outweighed by the likelihood that rates will go up, so locking in quickly is the
                    best choice. If the trend is downward, you might be better off to &quot;float&quot; as long
                    as you can.
                  </p>
                  <p>
                    In either case, there&apos;s always a risk that something can happen to cause rates to
                    increase – a news item or political event, terrorist attack…you never know. When it comes to
                    &quot;lock or float,&quot; your own personal outlook and comfort with risk is likely to be
                    the determining factor.
                  </p>
                </section>

                <section id="the-lending-process">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The Lending Process
                  </h2>
                  <p className="mb-5">
                    Once you&apos;ve made formal application and locked a rate, the lender will process the
                    loan. To avoid delays or even the possibility that your loan application will be denied,
                    make sure to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Follow all the terms of your purchase and sale contract.</strong> Make sure you
                      fully understand what actions you&apos;re required to take by what dates in order to meet
                      the terms of your contract. Your agent can help with this – many of them provide a
                      calendar of crucial dates for applications, inspections, responses and waivers.
                    </li>
                    <li>
                      <strong>Provide all loan materials requested in a timely way.</strong> If your mortgage
                      lender asks for a piece of additional information, make sure you respond quickly. Your
                      loan likely cannot be processed and approved without it.
                    </li>
                    <li>
                      <strong>Refrain from making any large purchases on credit.</strong> DO NOT purchase a car,
                      a boat, a fabulous vacation, or do an expensive renovation of your current home that you
                      plan to sell using a home equity line, credit card or any other form of credit. This will
                      show up on your credit report and can slow or stop your approval. It can wait.
                    </li>
                  </ul>
                </section>

                <section id="final-approval-and-the-closing-table">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Final Approval and the Closing Table
                  </h2>
                  <p className="mb-5">
                    Final Approval for a loan will ideally come in at least a week in advance of your closing,
                    and everything will go along merrily towards closing. In the real world, there are often
                    delays in this process. Sometimes these delays are caused by issues on the buyer end – such
                    as buying that boat we cautioned you against – other times, it&apos;s due to a backup at the
                    lender.
                  </p>
                  <p className="mb-5">
                    During this time, you&apos;ll want to stay in close contact with your lender, your agent and
                    possibly your therapist to ensure that things continue to go smoothly.
                  </p>
                  <p className="mb-2 font-semibold text-[#052316]">
                    A few to-dos for you around closing time include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Final inspection of the home 3 – 5 days in advance of closing. The seller&apos;s stuff
                      should be out, or on the way out, by this time. If not, you&apos;ll want to find out why.
                    </li>
                    <li>
                      Setting an appointment with your closing attorney or escrow agent to sign all final
                      paperwork.
                    </li>
                    <li>Key transfer – agents will often handle this for you.</li>
                    <li>
                      Move-in – For your sanity, it&apos;s best to delay your move in until a day or two after
                      closing. Sometimes timelines are tight to leave your old home if you have back to back
                      closings. If necessary, stay in a hotel for a night or two to ensure the house is move in
                      ready.
                    </li>
                  </ul>
                </section>

                <section id="kick-back-and-relax-youre-home">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kick Back and Relax – You&apos;re Home!
                  </h2>
                  <p>
                    Once you&apos;ve made it this far, you&apos;ll be able to relax. The house is closed,
                    you&apos;re moved in, maybe you&apos;re beginning to work on upgrades that will make the
                    home yours. Just remember, the loan process has been stressful, but in the end it&apos;s all
                    worth it to get into your new home. So make sure to take some time to celebrate this next
                    step in your life.
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Should I use an online mortgage lender when buying a home in Phoenix?
                      </h3>
                      <p>
                        Online lenders may advertise very low teaser rates, but these usually apply only to
                        buyers with perfect credit, no debt, and large cash reserves. Many real estate agents
                        advise against using online lenders because they often lack personal service, can cause
                        delays, and may put you at a disadvantage in multiple-offer situations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What is the difference between a mortgage broker and a mortgage banker?
                      </h3>
                      <p>
                        A mortgage broker works independently and can offer loan options from multiple lenders,
                        often helping you secure the best rates. A mortgage banker works for a specific bank or
                        lender and can only offer the loans that their company originates. Some lenders may also
                        provide portfolio lending, where they originate and service the loan themselves.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        Why is it important to get pre-approved instead of just prequalified?
                      </h3>
                      <p>
                        A prequalification is based on verbal information and doesn&apos;t include a credit
                        check or income verification, so it carries little weight with sellers. A pre-approval,
                        however, verifies your financial information and signals to sellers that you are ready
                        and able to buy. In competitive markets, a pre-approval can make the difference between
                        having your offer accepted or rejected.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What documents are needed for mortgage pre-approval?
                      </h3>
                      <p>
                        To get pre-approved, you typically need to provide your Social Security number, proof of
                        employment, recent pay stubs, tax returns from the last two years, and bank account
                        information. These documents help lenders verify your income, employment stability, and
                        available assets.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-2">
                        What should I avoid doing during the mortgage approval process?
                      </h3>
                      <p>
                        To avoid delays or loan denial, do not make large purchases on credit such as cars,
                        boats, or vacations. Always provide requested documentation promptly, follow the
                        timelines in your purchase agreement, and stay in close contact with your lender and
                        agent throughout the process.
                      </p>
                    </div>
                  </div>
                </section>

                <p>
                  If you have any questions about the mortgage process, call us at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>{" "}
                  or reach us using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>
                  .
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/ultimate-guide-first-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <span />
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
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-4 py-3 rounded-full transition-all"
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
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
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
