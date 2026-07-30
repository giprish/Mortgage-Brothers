"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Lender Deductible Limits",
    href: "/how-high-will-a-lender-allow-your-deductible-to-be/",
  },
  {
    label: "FHA Loan Gift Guide",
    href: "/put-bow-fha-loan-gift-guide/",
  },
  {
    label: "How to Skip 2 Payments",
    href: "/how-to-skip-2-payments-on-your-mortgage/",
  },
  {
    label: "Understanding Amortization",
    href: "/understanding-amortization-chart/",
  },
  {
    label: "Mortgage Recast Example",
    href: "/what-is-an-example-of-a-mortgage-recast/",
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
      name: "What are mortgage interest write-offs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortgage interest write-offs allow homeowners to deduct the interest they pay on their mortgage from their taxable income. Each year, homeowners receive a 1098 form showing the total interest paid, and this amount can be reported to the IRS to reduce taxable income and overall taxes owed.",
      },
    },
    {
      "@type": "Question",
      name: "How does a home mortgage help reduce taxable income?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A home mortgage provides a tax incentive by letting you deduct mortgage interest payments from your taxable income. This lowers the total income the government can tax, ultimately reducing how much you owe each year. The savings vary based on your income, loan size, and tax bracket.",
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

export default function IsTheMortgageInterestTaxDeductionReallyABigDealPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>Is The Mortgage Interest Tax Deduction Really a Big Deal?</>}
          excerpt="See how the mortgage interest tax deduction works with four income examples and what those tax savings look like day to day."
          category="Mortgage Payments & Strategies"
          categoryHref="/mortgage-payments-strategies/"
          dateLabel="Feb 12, 2025"
          readTime="11 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this episode, we&apos;re answering a question we&apos;re asked about pretty frequently,
                especially around tax season, &ldquo;If I have a mortgage, do I get a mortgage interest
                write-off?&rdquo; We&apos;re sharing why mortgage interest tax deductions are a big deal, and
                how your mortgage interest can help you during tax season!
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/_0AzXPoEETg"
                  title="Is The Mortgage Interest Tax Deduction Really a Big Deal?"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Unlock Your Mortgage Savings!
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Speak with our experts about leveraging the mortgage interest deduction to boost your
                  financial strategy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get Expert Mortgage Advice &rarr;
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3 transition-all"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="what-are-mortgage-interest-write-offs">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What Are Mortgage Interest Write-Offs?
                  </h2>
                  <p className="mb-5">
                    Each year, when you pay interest, or your mortgage payment, if you have 12 payments to your
                    mortgage company, usually at the end of January, when you get your W-2 form from your income,
                    you&apos;re going to receive a 1098 for any mortgage interest that you paid to the bank. That
                    form will tell you how much interest you paid to them, and that&apos;s the amount that you
                    get to tell the IRS, &ldquo;Don&apos;t tax me on this amount.&rdquo;
                  </p>
                  <p>
                    What the government says is, &ldquo;Listen, if you make X amount, we&apos;re going to charge
                    you tax on that.&rdquo; But if you pay interest on a mortgage, you can actually take your X,
                    you can deduct it. This allows you to reduce the taxable income you have because you pay
                    interest on a house.
                  </p>
                </section>

                <section id="a-home-mortgage-is-an-incentive-to-save-on-taxable-income">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    A Home Mortgage is an Incentive to Save on Taxable Income
                  </h2>
                  <p className="mb-5">
                    Mortgages are an incentive to purchase a home. The government has used the home purchase as
                    an incentive. They want people to have homeownership for various reasons, and the way they
                    incentivize is by putting money in your pocket.
                  </p>
                  <p className="mb-5">
                    Many people don&apos;t know how much money is going into their pockets. Sometimes
                    they&apos;re overestimating or underestimating. In this episode, we&apos;re going to try to
                    give four examples, for different people. These are just examples of their income and their
                    loan amount size, and we&apos;re going to quantify the savings, the daily savings, what that
                    looks like.
                  </p>
                  <p className="mb-5">
                    <strong>Example 1:</strong> Someone with a taxable income of $50,000. They&apos;re typically
                    going to be in a 12% tax rate, okay? That&apos;s what we&apos;re going to base this off of.
                    They have a home that&apos;s about $208,000. They have a mortgage of about $195,000. They pay
                    really close to $8,000 in interest, based off of that 4% that we&apos;re using, the 4% is
                    just an example. For $8,000 in interest to the bank, they save $950 a year, and that
                    calculates to be $2.60 a day. And what can you buy for $2.60 a day? We decided you can
                    purchase a 6-pack of brand named soda each day. Which ends up being a $900 savings. Before
                    the house, you had to pay us $960 more in taxes, then because of the interest write-off, you
                    paid $960 less.
                  </p>
                  <p className="mb-5">
                    <strong>Example 2:</strong> A person or persons making $75,000 of taxable income. Okay,
                    they&apos;re going to be in a house of about $315,000 worth. They&apos;re going to have a
                    loan just under 300,000. Their annual interest payment will have been close to $12,000 a
                    year. Remember we&apos;re taking the loan amount, we&apos;re multiplying it by the interest
                    rate. We&apos;re coming with that on an annual basis. Assuming the same tax bracket, 12%,
                    they&apos;re going to have tax savings, this is less money to pay the government every year,
                    of about $1,400, okay? That equates to almost $4 a day. It&apos;s like 3.90 a day. What can
                    you get for 3.90 a day? Dutch Bros or Starbucks coffee every day just because you have that
                    mortgage interest deduction or write-off.
                  </p>
                  <p className="mb-5">
                    <strong>Example 3:</strong> Someone with a taxable income of $100,000. Let&apos;s assume that
                    they have a loan amount of around $395,000 with a house worth $415,000. With the loan amount,
                    $395,000, paying that interest, 4% would be around $15,800 a year. Now in this tax bracket, or
                    this category, with the $100,000 in taxable income, they&apos;d probably be in about a 22% tax
                    bracket, and that would save them about $3,500 a year, which is about $9.54 a day. With that,
                    you could buy a decent bottle of wine each day.
                  </p>
                  <p className="mb-5">
                    <strong>Example 4:</strong> A person making a taxable income of $150,000. This person based
                    upon our assumptions would probably be in a house a little over $600,000. They&apos;d have a
                    loan of just under $600,000 paying an annual interest rate of about $23,000 a year. So it
                    really does escalate with these bigger mortgages. Same tax bracket as the previous group,
                    about 22%. So their tax savings is about $5,200 a year. $5,200 less you would have to pay the
                    government because of the big interest payment that you can write off or deduct. And what does
                    that equate to on a daily basis? About $14.50 a day, okay? And what can you get for $14.50 a
                    day, besides a lot? I&apos;m saying two pizzas.
                  </p>
                  <p>
                    Now, we&apos;re not tax experts, but again, look at your taxes, figure out what your tax
                    bracket is. That&apos;s not too hard to do. If you ever need any help just talking about this
                    stuff, brainstorming, you&apos;re thinking about a new mortgage, Tom and I, and our team,
                    that&apos;s what we&apos;re here for. If you have questions, that&apos;s what we do every
                    week. We try to answer your questions about mortgages.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to answer
                  on our podcast, you can submit your questions using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                  you and help you through the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&apos;ll personally work with
                    you and help you through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Discover whether the mortgage interest tax deduction truly makes a difference for your
                  finances. To get a complete picture, learn about{" "}
                  <Link
                    href="/how-high-will-a-lender-allow-your-deductible-to-be/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    lender deductible limits
                  </Link>
                  , explore the details of home closing costs, and understand why mortgage payoff can sometimes
                  exceed the balance.
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Is the Mortgage Interest Tax Deduction Really a Big Deal?
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell.
                      </p>
                      <p className="mb-3">
                        Today, we&apos;re diving into one of the most common tax-related questions we get: Is the
                        mortgage interest tax deduction actually worth it?
                      </p>
                      <p>
                        You&apos;ve probably heard people talk about it at work, at family gatherings, or even at
                        a wedding. Everyone seems to have an opinion. But how much are you really saving? Is it
                        just a couple of pennies, or is it actually significant?
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        What Is the Mortgage Interest Tax Deduction? [01:01]
                      </h3>
                      <p className="mb-3">
                        Simply put: If you own a home and pay mortgage interest, you may be able to deduct that
                        interest from your taxable income.
                      </p>
                      <p className="mb-3">
                        At the end of January, when you get your W-2 form for your income, you&apos;ll also
                        receive a 1098 form from your mortgage lender. This form will show how much interest you
                        paid throughout the year. That amount? That&apos;s what you get to tell the IRS NOT to
                        tax you on.
                      </p>
                      <p className="mb-3">
                        Example: Let&apos;s say you paid $8,000 in mortgage interest last year. That means you
                        can deduct that $8,000 from your taxable income, lowering the amount of taxes you owe.
                      </p>
                      <p>
                        The government allows this because they want to incentivize homeownership. But how much
                        do you actually save? Let&apos;s break it down.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Much Do You REALLY Save? Four Examples [03:06]
                      </h3>
                      <p className="mb-3">
                        We&apos;re going to walk through four different examples to show exactly how much
                        homeowners save each year and how that translates into daily savings.
                      </p>
                      <p className="mb-2 font-semibold text-[#052316]">Our Assumptions:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>A 4% interest rate (a general estimate)</li>
                        <li>A 5% down payment</li>
                        <li>Housing costs make up 25-30% of the homeowner&apos;s income</li>
                        <li>Tax rates are based on common brackets</li>
                      </ul>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Example 1: Homeowner Making $50,000 per Year
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Home Price: $208,000</li>
                        <li>Mortgage Amount: $195,000</li>
                        <li>Annual Interest Paid: ~$8,000</li>
                        <li>Tax Bracket: 12%</li>
                        <li>Annual Tax Savings: ~$950</li>
                        <li>Daily Savings: $2.60 per day — a six-pack of name-brand soda every day</li>
                      </ul>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Example 2: Homeowner Making $75,000 per Year
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Home Price: $315,000</li>
                        <li>Mortgage Amount: ~$300,000</li>
                        <li>Annual Interest Paid: ~$12,000</li>
                        <li>Tax Bracket: 12%</li>
                        <li>Annual Tax Savings: ~$1,400</li>
                        <li>Daily Savings: $3.90 per day — a Starbucks or Dutch Bros coffee every day</li>
                      </ul>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Example 3: Homeowner Making $100,000 per Year
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Home Price: $415,000</li>
                        <li>Mortgage Amount: ~$385,000</li>
                        <li>Annual Interest Paid: ~$15,800</li>
                        <li>Tax Bracket: 22%</li>
                        <li>Annual Tax Savings: ~$3,500</li>
                        <li>Daily Savings: $9.50 per day — a decent bottle of wine each day</li>
                      </ul>

                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        Example 4: Homeowner Making $150,000 per Year
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Home Price: $625,000</li>
                        <li>Mortgage Amount: ~$590,000</li>
                        <li>Annual Interest Paid: ~$23,000</li>
                        <li>Tax Bracket: 22%</li>
                        <li>Annual Tax Savings: ~$5,200</li>
                        <li>Daily Savings: $14.50 per day — two large pizzas every day</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Takeaway: Is the Mortgage Interest Deduction Worth It? [10:18]
                      </h3>
                      <p className="mb-3">
                        Yes, but… it&apos;s not a &ldquo;get rich&rdquo; hack. The mortgage interest deduction
                        lowers your tax bill—but it&apos;s not free money. Your savings depend on your income,
                        your loan amount, and your tax bracket.
                      </p>
                      <p className="mb-3">
                        The next time someone raves about the mortgage interest deduction, you&apos;ll actually
                        know how much it&apos;s worth in real dollars.
                      </p>
                      <p className="mb-3">
                        [10:50] Have questions about your mortgage? Thinking about refinancing? Contact us
                        through our{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          contact form
                        </Link>
                        .
                      </p>
                      <p>Thanks for tuning in—see you next time!</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/put-bow-fha-loan-gift-guide/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
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
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your unique
              financial situation.
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

