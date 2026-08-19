import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import FaqAccordion from "../component/FaqAccordion";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

export const metadata: Metadata = getSeoMetadata("/ultimate-guide-first-mortgage/");

const relatedLinks = [
  {
    label: "Arizona Refinance Process",
    href: "/arizona-refinance-process/",
  },
  {
    label: "Arizona Mortgage Basics",
    href: "/arizona-mortgage-basics/",
  },
  {
    label: "First-time Home Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
  },
  {
    label: "Conventional Home Loan Guide",
    href: "/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/",
  },
  {
    label: "Arizona Home Buying Process",
    href: "/arizona-home-buying-process/",
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
      name: "What do lenders look for when approving a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lenders typically assess several key factors when approving a mortgage, including your credit score and payment history, reliable income, debt-to-income ratio, and available assets. They want to ensure you have a strong record of repaying debts, a stable income source, manageable debt levels, and financial reserves to cover unforeseen circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "How does my credit score affect my mortgage approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your credit score plays a major role in determining the interest rate and loan options available to you. A score around 700 or higher is considered good and often qualifies for the best rates. Scores as low as 620 may still be accepted, but they typically result in higher rates. Lenders also consider your credit utilization and full credit history, not just the score.",
      },
    },
    {
      "@type": "Question",
      name: "How much down payment do I need for my first home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The required down payment depends on the type of loan and home price. Conventional loans generally need 20% down, though some allow as little as 5%. FHA loans require a minimum of 3.5% down, and VA loans for veterans can go as low as 0%. A larger down payment helps reduce your monthly payments and total loan cost.",
      },
    },
    {
      "@type": "Question",
      name: "What types of home loans are available for first-time buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common loan types include conventional loans, FHA loans, and VA loans. Conventional loans are widely available and often sold on the secondary market. FHA loans are backed by the Federal Housing Administration and offer lower down payments, while VA loans are guaranteed by the Department of Veterans Affairs and provide benefits like no down payment for eligible veterans.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between pre-approval and pre-qualification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A pre-qualification is an initial estimate of how much you may be able to borrow based on basic information you provide. A pre-approval is a more detailed process that requires financial verification, such as proof of income, tax returns, and bank statements. Pre-approval carries more weight when making an offer on a home.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after my mortgage is approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once your mortgage is approved, the lender will finalize the loan documents and schedule your closing. You'll complete a final home inspection, sign paperwork with your closing agent or attorney, and arrange for the key transfer. Staying in close contact with your lender and real estate agent ensures a smooth closing process.",
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

export default function UltimateGuideFirstMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>The Ultimate Guide to Your First Mortgage</>}
          excerpt="A complete first-time buyer guide covering credit, down payments, loan types, pre-approval, rate locks, and closing in Arizona."
          category="Mortgage Basics"
          categoryHref="/mortgage-basics/"
          dateLabel="Feb 11, 2025"
          readTime="18 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-5">
                The Phoenix Valley was recently voted out of the top 20 markets for first time buyers,
                highlighting a fact that most first time buyers have probably already noticed on their own:
                it&apos;s getting more expensive to buy your first home.
              </p>
              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-10">
                But don&apos;t despair. You can still buy the home of your dreams, even if it will take more time
                and planning than might have been needed even just a year or two ago. In this guide, I&apos;m
                going to give you all the insider tips on how you can get into your first home without paying too
                much.
              </p>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Start Your Journey to Secure Your First Mortgage Now!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Begin your path with expert guidance. Connect with our professionals for personalized advice on
                  securing your first mortgage.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    data-preapproval="true"
                    className="btn-primary"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="the-basics-what-do-lenders-look-for">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The Basics: What Do Lenders Look For?
                  </h2>
                  <p className="mb-5">
                    So, what do you need to do to prepare to buy your first home? What do lenders want to see
                    before approving you for a mortgage? Here are some of the things lenders will consider:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Good Credit</strong><br />
                      Lenders want to know if the loans they provide will be repaid on time. The best way they
                      have to determine this is by looking at what a loan applicant has done in the past. Most
                      lenders look at credit scores and credit history to determine whether you have a history of
                      paying your bills on time.
                    </li>
                    <li>
                      <strong>Reliable Income</strong><br />
                      Lenders also want to know whether you have a means of repaying them. Do you have the income
                      to cover the mortgage? They want to see evidence that you have a job that pays enough to
                      cover a mortgage, and they want some evidence that you&apos;re likely to hold that job for
                      a while. Typically they&apos;ll be looking for 2 years with the same employer, give or
                      take. If you can&apos;t show 2 years with a single employer, 2 years at a rising or similar
                      income level can also work.
                    </li>
                    <li>
                      <strong>Debt to Income</strong><br />
                      Your debt to income ratio is another aspect of your financial health that lenders look at
                      when considering you for a loan. How much of your income is currently being used to pay
                      outstanding debt? If the ratio is too high, that&apos;s an indication that you might have
                      trouble paying off your loan.
                    </li>
                    <li>
                      <strong>Assets and Liabilities</strong><br />
                      Lenders have learned that sometimes people who have good credit and reliable income at the
                      time a loan was made can experience a change in their circumstances, such as job loss or a
                      long-term illness – that will result in their not being able to pay a mortgage.
                      Unfortunately, even when these things happen, mortgages still have to be paid, so lenders
                      want to know if you have assets that you could use in a pinch. They also want to know how
                      many other liabilities you have – such as credit card debt, student loans or auto payments
                      – that might also have to be paid.
                    </li>
                  </ul>
                </section>

                <section id="how-do-lenders-look-at-credit">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How Do Lenders Look at Credit?
                  </h2>
                  <p className="mb-5">
                    Many people have the idea that lenders just look at a credit score to determine if a buyer has
                    good credit. There&apos;s actually quite a bit more to it. So, what do lenders look at when it
                    comes to credit?
                  </p>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <strong>Credit score</strong><br />
                      Yes, most lenders do look at your credit score and this is an important consideration when
                      it comes to getting a loan. Generally speaking, you&apos;re considered to have good credit
                      when your score is around 700 or above. This will usually qualify you for the best mortgage
                      rates. A score as low as 620 may still be considered, but the lower the score, the higher
                      the rate. Below a 620 credit score will usually not be considered.
                    </li>
                    <li>
                      <strong>Credit utilization</strong><br />
                      Another aspect of your credit that lenders will look at, is how much of your current
                      available credit you are using. How high are your balances? If the limit of your credit
                      card is $25,000, is your balance hovering around that amount, or are you following
                      responsible credit practices and paying that off? The less you owe on those cards, the
                      lower your utilization rate and that is what lenders want to see.
                    </li>
                    <li>
                      <strong>Credit history</strong><br />
                      Some lenders don&apos;t just look at credit score. They look at your whole credit history.
                      This is a benefit to buyers who are just getting financially established because they often
                      don&apos;t have a long credit history and this can lower their scores, even though their
                      actual credit history is good. VA lenders often consider the buyer&apos;s history of
                      on-time payments for this reason.
                    </li>
                  </ol>
                </section>

                <section id="down-payments-how-much-do-i-need-to-save">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Down Payments: How Much Do I Need to Save?
                  </h2>
                  <p className="mb-5">
                    When prices are rising quickly, first time buyers often become concerned that they will be
                    priced out of the market, because they aren&apos;t able to save enough to keep up with the
                    increase in down payments that may be required as homes become more expensive.
                  </p>
                  <p className="mb-5">
                    The down payment amount you need varies depending on the price range of the home and the type
                    of loan you are getting. Conventional loans usually require 20% down, but there are also many
                    conventional loans that have down payments as low as 5%. For veterans, VA loans are available
                    at 0% down. FHA loans require a 3.5% down payment.
                  </p>
                  <p>
                    Of course, the downside to a low down payment is that you have a higher principal balance and
                    thus, your payments will be higher. In general, the more you can put toward your down payment,
                    the better off you will be: you&apos;ll owe less overall, have lower payments and be able to
                    pay off your loan more quickly.
                  </p>
                </section>

                <section id="how-do-lenders-look-at-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How do Lenders Look at Income?
                  </h2>
                  <p className="mb-5">
                    Some people think you need to have a lot of money to get a mortgage, but this isn&apos;t the
                    case. You only need an income big enough for the mortgage you&apos;re trying to get.
                  </p>
                  <p className="mb-5">
                    Lenders look at several things when it comes to your income. At a basic level, they want to
                    determine if you have income sufficient to pay your mortgage. How much is enough, though? Most
                    lenders want to see no more than a third of your monthly income going towards covering your
                    housing related expenses. Lenders define these expenses as including principle, interest, taxes
                    and insurance, or PITI.
                  </p>
                  <p>
                    Just remember: income requirements vary by the size of the loan; as a general rule your PITI
                    should not exceed a third of your monthly income.
                  </p>
                </section>

                <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                  <h2
                    className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Discover Your Borrower Rating Today!
                  </h2>
                  <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                    Take our quick quiz to assess your credit profile and receive personalized insights to guide
                    your mortgage journey.
                  </p>
                  <button
                    type="button"
                    data-quiz="true"
                    className="btn-primary"
                  >
                    Take the Quiz
                  </button>
                </div>

                <section id="finding-a-lender">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Finding a Lender
                  </h2>
                  <p className="mb-5">
                    Now that you know some of the basics around getting a loan, let&apos;s look at the process. One
                    of the first decisions you need to make is to find a lender you trust to get you the best
                    mortgage that is right for you.
                  </p>
                  <p className="mb-5">
                    Once, this simply involved going down your local bank and talking to their lending officer.
                    Today, you have a lot more options. These options include:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Online lenders</strong><br />
                      If you&apos;re looking online you&apos;ve probably noticed a lot of online lenders offering
                      really low rates for loans. There are a few things you should know. The rates offered
                      online are teaser rates – the lowest possible rates that could ever be offered to a buyer
                      that has perfect credit, no outstanding debt, and plenty of cash to pay down points. The
                      rates that will actually be available to you will likely not match those seen online.
                      It&apos;s also challenging for a first time buyer to work with an online lender because
                      they are processing huge volumes of loans, leaving them too busy to be available to answer
                      questions. Follow up tends to be poor as well, so your loan closing can be subject to
                      problems and delays.<br />
                      These issues can cost you big. If your seller won&apos;t wait for your
                      lender to resolve issues, you can lose your earnest money deposit or even the house you
                      wanted to buy. It&apos;s better to develop a relationship with a lender you trust in your
                      local market.
                    </li>
                    <li>
                      <strong>Mortgage brokers</strong><br />
                      A mortgage broker is a person who originates or takes applications for loans that are
                      available on the open market. Those loans are available from multiple lenders, which means
                      a broker has access to a wide variety of loan programs and types. Unlike a bank that will
                      only sell you the loans that they offer, a broker can give you access to just about any
                      loan available on the market and that means they can help you get the best rate possible.
                    </li>
                    <li>
                      <strong>Mortgage bankers</strong><br />
                      A mortgage banker is similar to a broker in that they originate loans that will be provided
                      by other lenders. They also often have some of their own &quot;in-house&quot; loan programs
                      that they can offer. If your credit is challenged, sometimes a mortgage banker will have
                      in-house programs that they service – called portfolio loans – that you may be able to
                      qualify for.
                    </li>
                    <li>
                      <strong>Banks and credit unions</strong><br />
                      Banks and credit unions provide home loans too. These loans are limited to those actually
                      provided by the bank, which means there&apos;s not much selection. This often equates to a
                      higher rate.
                    </li>
                  </ul>
                </section>

                <section id="what-types-of-loans-are-there">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Types of Loans Are There?
                  </h2>
                  <p className="mb-5">
                    The most common loan types are conventional loans, VA and FHA loans. Here is a little more
                    information about each of them.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong><Link href="/va-loans-arizona/" className="hover:underline">VA loans</Link></strong><br />
                      are for veterans of the armed forces. VA loans are loans that are guaranteed by the
                      Veterans Administration, which protects the lenders providing these loans against default.
                      Because they&apos;re federally guaranteed, these loans offer very low rates, and also can
                      be obtained for as little as 0% down. If you&apos;re a first time buyer who is also a
                      veteran, ask if you qualify for a VA loan.
                    </li>
                    <li>
                      <strong><Link href="/fha-home-loans-arizona/" className="hover:underline">FHA loans</Link></strong><br />
                      are another loan program which is commonly used by first time buyers. FHA loans are
                      federally guaranteed loans that are often used by first-time buyers. They offer low rates
                      and a down payment of just 3.5%,
                    </li>
                    <li>
                      <strong><Link href="/conventional-home-loans-arizona/" className="hover:underline">Conventional loans</Link></strong><br />
                      are loans with are bought and sold on the open mortgage market (more about that in a
                      moment). These loans are offered by all types of lenders according to criteria that makes
                      them easy to underwrite.
                    </li>
                  </ul>
                </section>

                <section id="conventional-loans-and-the-mortgage-market">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Conventional Loans and The Mortgage Market
                  </h2>
                  <p className="mb-5">
                    The mortgage world is pretty complex with a lot of players. Many buyers think that the loan
                    they get, whether it&apos;s from a broker or a bank, is actually made by the person they got it
                    from and will be repaid to them. This is sometimes true with portfolio lending, but more often
                    than not, loans are made and then resold on the conventional loan market.
                  </p>
                  <p className="mb-5">
                    This market is overseen by an organization called Fannie Mae (stands for FNMA, or Federal
                    National Mortgage Association), which sets underwriting standards that conventional loans have
                    to adhere to. They&apos;re the ones who determine the down payment amount that must be provided
                    (usually 20%), the documentation that must be provided, etc., for each individual loan.
                  </p>
                  <p>
                    Conventional loans underwritten to Fannie Mae standards are loans that are easy to sell on the
                    mortgage market after closing because they have a high probability of being repaid on time.
                    After selling a loan on the open market, your lender will have funds available to make more
                    loans. After being sold, loans are assigned to a servicer who will actually process payments.
                  </p>
                </section>

                <section id="getting-pre-approved">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Getting Pre-Approved
                  </h2>
                  <p className="mb-5">
                    After selecting a lender, your next step is to get pre-approved. A pre-approval is when the
                    lender gathers all the information needed to determine how much you qualify for and actually
                    verifies that the number are accurate.
                  </p>
                  <p className="mb-3">
                    For a pre-approval, you need to provide quite a bit of financial information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-5">
                    <li>Authorization to pull credit.</li>
                    <li>
                      Social security number – you provide this and your current residence on an application.
                    </li>
                    <li>Proof of employment and proof of income – this is usually your most recent pay stubs.</li>
                    <li>
                      Tax Information – Usually, the last two years. Proves ongoing income and stable employment.
                    </li>
                    <li>
                      Bank Accounts and Balances – Lenders want to know what assets you already have and whether
                      you have cash to close.
                    </li>
                  </ul>
                  <p className="mb-5">
                    With this information, a lender can determine the actual loan amount you can be approved to
                    receive and whether you will, in fact, be able to obtain that loan.
                  </p>
                  <p>
                    It&apos;s important here to distinguish that there is a different between a pre-approval and a
                    pre-qualification. Often, when first time buyers are looking for a home, they want to determine
                    if they can afford the home. A lender may take some basic information over the phone and come
                    back to them with a number. Unless you&apos;ve actually provided the detail to back up what was
                    discussed over the phone, this isn&apos;t a pre-approval, it&apos;s a pre-qualification.
                  </p>
                </section>

                <section id="next-step-finding-a-home">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Next Step: Finding a Home
                  </h2>
                  <p className="mb-5">
                    You should provide your pre-approval information to your real estate agent as soon as you are
                    ready to start looking. They can use this to help you get the home you want. It&apos;s a hot
                    market right now in the Phoenix Valley, so that means homes are selling quickly. You and your
                    agent should be ready to submit offers quickly, and that means it&apos;s critical to have a
                    solid pre-approval – NOT a pre-qualification. Your pre-approval also helps your agent determine
                    the right price range for you.
                  </p>
                  <p>
                    Depending on down payment and your personal comfort level, your price range could be lower or
                    higher than your pre-approval amount. You and your agent need to communicate clearly about
                    this. The most important reason to have your pre-approval in hand before you start looking is
                    that it saves time and keeps finances from complicating your decision-making. You&apos;ll know
                    whether you can afford the house you want and what the payments will be before you start
                    looking.
                  </p>
                </section>

                <section id="making-the-offer-and-making-a-loan-application">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Making the Offer and Making a Loan Application
                  </h2>
                  <p className="mb-5">
                    Making an offer to buy your first home is exciting. Many buyers also find it very
                    nerve-wracking. The best way to stay calm during the process is to be educated about the
                    process beforehand.
                  </p>
                  <p className="mb-5">
                    You and your agent will write up the offer on the home you want and submit it to the seller.
                    The offer will entail making a lot of decisions quickly about inspections, earnest money
                    deposits and more, so it&apos;s good to work out a strategy beforehand with your agent.
                  </p>
                  <p className="mb-5">
                    An updated pre-approval letter should be sent along with the offer to make sure your seller
                    knows that you are ready and able to buy the house. Usually, you will also submit an earnest
                    money deposit that serves as an assurance to the seller that you intend to make good on the
                    offer. The earnest money is not kept by the seller; it goes to escrow where it will be put
                    toward your down payment and closing costs.
                  </p>
                  <p>
                    After the offer is negotiated (this usually takes a couple of days) and accepted, you will need
                    to work quickly to get a formal loan application filled out. The time limit will be spelled out
                    in your purchase and sale agreement; usually the timeframe is 5 days, but the sooner
                    application is made, the sooner we can start processing your loan.
                  </p>
                </section>

                <section id="what-does-it-mean-to-lock-my-rate">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What does it mean to lock my rate?
                  </h2>
                  <p className="mb-5">
                    When you were first getting pre-approved for your loan, your lender may have quoted you a rate
                    that was based on what that rate was that day, but until you make formal application and lock
                    your rate, you won&apos;t know your actual rate. This is because rates actually change on a
                    daily basis depending on what is happening in the financial markets.
                  </p>
                  <p className="mb-5">
                    Locking rates can be stressful because rates can go up or down from the day you lock them. If
                    they go up, you&apos;ll save money because you&apos;ll have gotten a lower rate than what might
                    be available in the future. If they down, you miss out on the opportunity to get that lower
                    rate.
                  </p>
                  <p>
                    Your mortgage lender can advise you about the best time to lock rates. If rates are very low,
                    and starting to trend higher, your risk of missing out on a future dip in rates is outweighed
                    by the likelihood that rates will go up, so locking in quickly is the best choice. If the trend
                    is downward, you might be better off to &quot;float&quot; as long as you can. When it comes to
                    &quot;lock or float,&quot; your own personal outlook and comfort with risk is likely to be the
                    determining factor.
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
                    Once you&apos;ve made formal application and locked a rate, the lender will process the loan.
                    To avoid delays or even the possibility that your loan application will be denied, make sure
                    to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Follow all the terms of your purchase and sale contract.</strong><br />
                      Make sure you fully understand what actions you&apos;re required to take by what dates in
                      order to meet the terms of your contract. Your agent can help with this – many of them
                      provide a calendar of crucial dates for applications, inspections, responses and waivers.
                    </li>
                    <li>
                      <strong>Provide all loan materials requested in a timely way.</strong><br />
                      If your mortgage lender asks for a piece of additional information, make sure you respond
                      quickly. Your loan likely cannot be processed and approved without it.
                    </li>
                    <li>
                      <strong>Refrain from making any large purchases on credit.</strong><br />
                      DO NOT purchase a car, a boat, a fabulous vacation, or do an expensive renovation of your
                      current home that you plan to sell using a home equity line, credit card or any other form
                      of credit. This will show up on your credit report and can slow or stop your approval. It
                      can wait.
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
                    Final Approval for your loan usually comes in about a week before closing but there can often
                    be delays in this process. Sometimes these delays are due to a backup at the lender if a lot of
                    other loans need to be processed first. When lending volumes are high, lenders &quot;triage&quot;
                    their approvals and handle the most urgent cases first. Delays can also be caused by issues on
                    the buyer end – such as buying that boat we cautioned you against, which causes the lender to
                    have to re-process your file.
                  </p>
                  <p className="mb-5">
                    Stay in close contact with your lender and your agent as closing approaches to make sure
                    everyone has what they need. A few common to-dos for you around closing time include:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      Final inspection of the home 3 – 5 days in advance of closing. The seller&apos;s belongings
                      should be out, or on the way out, by this time. If not, you&apos;ll want to find out why.
                    </li>
                    <li>
                      Setting an appointment with your closing attorney or escrow agent to sign all final paperwork.
                    </li>
                    <li>Key transfer – agents will often handle this for you.</li>
                    <li>
                      Move-in – It&apos;s best to delay your move in until a day or two after closing. This gives
                      time to have the house cleaned before you move in. Unlike a rental, sellers are not required
                      to clean carpets or paint before you move in, so if this is important you&apos;ll need to
                      allow time after closing to get it done.
                    </li>
                  </ul>
                </section>

                <section id="celebrate-youre-a-homeowner">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Celebrate – You&apos;re a Homeowner!
                  </h2>
                  <p>
                    After several months of looking for a home and a flurry of activity to close on your home, the
                    house will close and you&apos;ll move in. Maybe you&apos;ll begin making those improvements
                    that will really make the home your own. Just remember, even though the loan process can be
                    stressful, in the end it&apos;s all worth it to become a homeowner. Make sure to take time to
                    celebrate this next step in your life!
                  </p>
                </section>

                <section id="frequently-asked-questions">
                  <FaqAccordion
                    title="Frequently Asked Questions"
                    items={[
                    { q: "What do lenders look for when approving a mortgage?", a: <>Lenders typically assess several key factors when approving a mortgage, including your credit score and payment history, reliable income, debt-to-income ratio, and available assets. They want to ensure you have a strong record of repaying debts, a stable income source, manageable debt levels, and financial reserves to cover unforeseen circumstances.</> },
                    { q: "How does my credit score affect my mortgage approval?", a: <>Your credit score plays a major role in determining the interest rate and loan options available to you. A score around 700 or higher is considered good and often qualifies for the best rates. Scores as low as 620 may still be accepted, but they typically result in higher rates. Lenders also consider your credit utilization and full credit history, not just the score.</> },
                    { q: "How much down payment do I need for my first home?", a: <>The required down payment depends on the type of loan and home price. Conventional loans generally need 20% down, though some allow as little as 5%. FHA loans require a minimum of 3.5% down, and VA loans for veterans can go as low as 0%. A larger down payment helps reduce your monthly payments and total loan cost.</> },
                    { q: "What types of home loans are available for first-time buyers?", a: <>Common loan types include conventional loans, FHA loans, and VA loans. Conventional loans are widely available and often sold on the secondary market. FHA loans are backed by the Federal Housing Administration and offer lower down payments, while VA loans are guaranteed by the Department of Veterans Affairs and provide benefits like no down payment for eligible veterans.</> },
                    { q: "What is the difference between pre-approval and pre-qualification?", a: <>A pre-qualification is an initial estimate of how much you may be able to borrow based on basic information you provide. A pre-approval is a more detailed process that requires financial verification, such as proof of income, tax returns, and bank statements. Pre-approval carries more weight when making an offer on a home.</> },
                    { q: "What happens after my mortgage is approved?", a: <>Once your mortgage is approved, the lender will finalize the loan documents and schedule your closing. You&apos;ll complete a final home inspection, sign paperwork with your closing agent or attorney, and arrange for the key transfer. Staying in close contact with your lender and real estate agent ensures a smooth closing process.</> }
                    ]}
                  />
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/what-is-a-conventional-home-loan-the-complete-first-time-buyer-mortgage-guide/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/first-time-home-buyer-arizona-guide/"
                  className="text-[#5a6b52] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <span className="text-center">1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020</span>
            </div>
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