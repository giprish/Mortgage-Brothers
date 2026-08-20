import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";
import YoutubeLiteEmbed from '@/app/component/YoutubeLiteEmbed';

export const metadata: Metadata = getSeoMetadata("/how-do-solar-panels-affect-the-mortgage-and-closing-process/");

const relatedLinks = [
  {
    label: "Mortgage Rates & Interest Deduction",
    href: "/arizona-mortgage-rates-and-the-interest-deduction/",
  },
  {
    label: "Prepayment Penalties",
    href: "/prepayment-penalties-on-your-arizona-mortgage/",
  },
  {
    label: "Arizona BINSR Inspection Notices",
    href: "/arizona-binsr-buyer-inspection-notice-and-seller-response/",
  },
  {
    label: "LSU Forms & Loan Status Updates",
    href: "/lsu-forms-loan-status-updates-and-what-you-need-to-know/",
  },
  {
    label: "Buying Down Your Interest Rate",
    href: "/buying-down-your-arizona-interest-rate/",
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
      name: "How do Solar Panels affect the mortgage and closing process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases, solar panels are allowed. Lenders require the buyer to get a copy of the solar agreement, ensure there is a warranty against malfunctions or defects, and confirm that the lease is transferable to the new buyer. If panels are leased, they must be transferred by the solar company to the buyer. Owned panels are treated as real estate fixtures, though if a loan exists, it becomes a lien on the property that must be transferable.",
      },
    },
    {
      "@type": "Question",
      name: "How do solar panels impact property value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leased solar panels generally do not add value to a property because institutions like Fannie Mae, Freddie Mac, FHA, and VA only recognize ownership. Owned solar panels can increase value modestly, but not equal to the full installation cost. For example, a $20,000 system might only add about $5,000 in appraised value, depending on neighborhood sales comparables.",
      },
    },
    {
      "@type": "Question",
      name: "How do solar panel payments affect loan qualifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your solar lease or ownership agreement includes a production guarantee, lenders typically do not count the loan or lease payment against you. However, buyers must still pay their utility bill plus any solar payments. At closing, any lien from a solar loan or lease must be released before the lender places their lien, a process handled by the title company that may involve a modest fee.",
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

export default function SolarPanelsMortgagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="flex-grow relative z-0">
        <ArticleHero
          title={<>How do Solar Panels affect the mortgage and closing process?</>}
          excerpt="Learn how lenders view owned vs. leased solar panels, how they impact appraised value, and whether solar payments affect mortgage qualifications."
          category="Mortgage Process Guidance"
          categoryHref="/mortgage-process-guidance/"
          dateLabel="Feb 6, 2025"
          readTime="10 min read"
        />

        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this episode, we covered solar panels and how borrowers should view them when looking to
                buy.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <YoutubeLiteEmbed
                  videoId="71r_zs4Cag4"
                  title="How do Solar Panels affect the mortgage and closing process?"
                />
              </div>

              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Buying or Selling a Home with Solar Panels?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Solar panels can impact mortgage approval and the closing process. Get expert guidance to
                  navigate financing and lender requirements.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="btn-primary"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-10 text-[#3a4a3a] text-[16px] leading-[1.8]">
                <section id="how-do-lenders-view-solar-panels">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How do lenders view solar panels? Are they even allowed?
                  </h2>
                  <p className="mb-5">
                    Yes, in most cases, solar panels are allowed. When we do the loan, we want to make sure
                    that the buyer gets a copy of the solar agreement that the owner has, we want to make sure
                    that there is a warranty against all malfunctions and defects, and we want to make sure
                    that the lease is transferable to our buyer regardless of whether the solar panels are
                    leased or owned.
                  </p>
                  <p className="mb-5">
                    If someone&apos;s solar panels are leased, they have to be transferred by the owner (a
                    company such as Solar City) to the new buyer. But, if they are owned outright then
                    there&apos;s no loan and they are treated as a part of the real estate, a fixture of the
                    property. However, if there&apos;s a loan on there, that loan itself goes with the
                    property as a lien, and it must be transferable to the new buyer.
                  </p>
                  <p>
                    One other thing to expect is that the solar company may do a credit check. That being
                    said, there&apos;s likely a higher threshold for qualifying for buying a house than for a
                    solar lease, so this shouldn&apos;t be too much of a concern.
                  </p>
                </section>

                <section id="how-do-solar-panels-impact-value">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How do solar panels impact value?
                  </h2>
                  <p>
                    If the panels are leased, appraisers will not count value. The reason for this is that the
                    appraisal and the guidelines that came out by the institutions like Fannie Mae and Freddie
                    Mac, the{" "}
                    <Link href="/fha-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      FHA
                    </Link>
                    , and the{" "}
                    <Link href="/va-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                      VA
                    </Link>
                    , view ownership of the panels means that you actually need to own the asset. If the solar
                    panels are actually owned, rather than leased, you&apos;re going to see a value adjustment
                    on the appraisal, though you shouldn&apos;t expect too much of a bump. If you spent
                    $20,000 on your system, you might only see a $5,000 adjustment. And in some cases, they
                    don&apos;t even show up if the comparable sales in the neighborhood don&apos;t demonstrate
                    that solar panels give value.
                  </p>
                </section>

                <section id="how-do-solar-panel-payments-affect-qualifications">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    How do solar panel payments potentially affect qualifications?
                  </h2>
                  <p className="mb-5">
                    If there is a production guarantee in your lease agreement or the ownership agreement, the
                    lender will not count the loan payment or the lease payment against you. In many cases,
                    there&apos;s a production guarantee which is when a solar company says, &ldquo;If your
                    solar system doesn&apos;t produce so many kilowatts an hour for so many months, we&apos;ll
                    refund you.&rdquo; This is one of the ways they justify being able to install the system
                    while also protecting the borrower because if the borrower buys the system it&apos;s their
                    responsibility if something goes wrong with the cells or if they are defective.
                  </p>
                  <p className="mb-5">
                    One other thing to be aware of is not only are you going to be paying APS and SRP, the
                    bill, but also, you&apos;ll be paying this extra loan payment. So this warranty of a
                    minimum guarantee will help.
                  </p>
                  <p>
                    As well, when we close the loan, if there is a lien right from the loan or a lease, the
                    title company is going to be required to release that lien before we put our lien on. They
                    want to release the lien of the solar company, and then put that back on afterward.
                    Sometimes there is a modest fee associated with this and sometimes there&apos;s no fee at
                    all, but it&apos;s a process that needs to be done, and the real estate agents, buyers, and
                    everyone, by the end of the transaction, will be very familiar with how that all works.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&apos;d like us to
                  answer on our podcast, you can submit your questions using our{" "}
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
                  Thanks for listening and reading the Mortgage Brothers Show. Let us know if you have any
                  questions you&apos;d like us to answer on this podcast. You can email your questions to
                  Tom@AZMortgageBrothers.com or Eddie@AZMortgageBrothers.com.
                </p>

                <p className="text-[#5a6b52] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has
                  been prepared for informational purposes only. You should consult your own tax, legal, and
                  accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154, NMLS
                  #210917 and 1618695. Equal housing lender.
                </p>

                <p>
                  Learn how installing solar panels can influence your mortgage and the closing process. To
                  understand the broader financial landscape, check out our insights on{" "}
                  <Link
                    href="/arizona-mortgage-rates-and-the-interest-deduction/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    mortgage rates and deductions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/prepayment-penalties-on-your-arizona-mortgage/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    prepayment penalties
                  </Link>
                  . You might also review our article on{" "}
                  <Link
                    href="/arizona-binsr-buyer-inspection-notice-and-seller-response/"
                    className="text-[#3fb364] font-semibold hover:underline"
                  >
                    inspection notices
                  </Link>{" "}
                  for related topics.
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
                        How Do Solar Panels Affect the Mortgage &amp; Closing Process?
                      </h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p className="mb-3">
                        Welcome to the Mortgage Brothers Podcast! I&apos;m Eddie Knoell, and I&apos;m Tom
                        Knoell. Today, we&apos;re diving into a hot topic for homeowners and buyers: Solar
                        Panels—How Do They Impact Your Mortgage &amp; Closing?
                      </p>
                      <p>
                        Are solar panels always a bright idea, or do they come with storm clouds when it comes
                        to financing? Let&apos;s break it down.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Are Solar Panels Allowed in Mortgage Loans? [00:36]
                      </h3>
                      <p className="mb-3">Yes, lenders allow solar panels! However, they fall into two categories:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          <strong>Owned panels</strong> – The seller owns the panels outright.
                        </li>
                        <li>
                          <strong>Leased panels</strong> – The panels are owned by a solar company, and the
                          homeowner is making lease payments.
                        </li>
                      </ul>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Lenders need to review the solar agreement before approving a loan.</li>
                        <li>The buyer must get a copy of the agreement and provide it to the lender.</li>
                        <li>
                          If the panels are leased, the lease must be transferable to the new buyer.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Why Does Transferability Matter? [01:46]
                      </h3>
                      <p className="mb-3">
                        If the solar lease isn&apos;t transferable, the deal can fall apart. Buyers should
                        check:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Does the solar lease include a warranty for malfunctions?</li>
                        <li>Can the buyer take over the lease without restrictions?</li>
                        <li>Does the solar company require a credit check for the new owner?</li>
                      </ul>
                      <p>
                        Key point: If the panels are owned outright, they transfer automatically with the
                        home, just like any other fixture. But if there&apos;s a loan or lease attached, the
                        seller may need to pay off the balance before selling.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Do Solar Panel Leases Impact Buyers? [03:59]
                      </h3>
                      <p className="mb-3"><strong>What do buyers need to know?</strong></p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>If the panels are leased, the buyer must qualify to take over the lease.</li>
                        <li>Some solar companies will run a credit check on the buyer.</li>
                        <li>
                          If the lease isn&apos;t transferable, the seller may need to buy out the contract
                          before closing.
                        </li>
                      </ul>
                      <p className="mb-3"><strong>Will the seller pay off the loan?</strong></p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Sometimes, sellers offer to pay off the remaining balance to make the home more
                          attractive.
                        </li>
                        <li>
                          Buyers should ask about the payoff amount before making an offer.
                        </li>
                      </ul>
                      <p>
                        <strong>Pro Tip:</strong> If a home has leased panels, check with the solar company early in the
                        process to avoid last-minute surprises!
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Do Solar Panels Affect Home Value? [05:38]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Owned solar panels can increase value, but not as much as most people think.
                        </li>
                        <li>Leased panels do NOT increase the appraised value of the home.</li>
                      </ul>
                      <h3 className="text-[#052316] text-[17px] font-bold mb-2">
                        How Do Appraisers Handle Solar Panels? [06:19]
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Leased panels = No value added</li>
                        <li>
                          Owned panels = Some value added (but not always a full return on investment)
                        </li>
                      </ul>
                      <p className="mb-3">
                        Even if the seller paid $20,000 for the system, appraisers may only add $5,000 in
                        value. If there are no comparable homes with solar panels, the appraiser may not
                        adjust the value at all.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Do Solar Panel Payments Affect Mortgage Qualification? [09:39]
                      </h3>
                      <p className="mb-3">
                        If the buyer takes over a lease, will the payment count against their mortgage
                        qualification? It depends. If the lease includes a <strong>production guarantee</strong>, lenders
                        won&apos;t count it in debt-to-income (DTI) calculations.
                      </p>
                      <p className="mb-3">
                        <strong>What&apos;s a production guarantee?</strong><br />
                        A solar company promises that the panels will produce a
                        set amount of electricity. If they don&apos;t, they refund the homeowner.
                      </p>
                      <p className="mb-3"><strong>Why does this matter?</strong></p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>
                          Without a production guarantee, lenders may count the lease payment as debt,
                          reducing the buyer&apos;s borrowing power.
                        </li>
                        <li>
                          Buyers should check their loan pre-approval to see if the solar lease affects their
                          DTI ratio.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        How Do Solar Panels Affect the Closing Process? [11:18]
                      </h3>
                      <p className="mb-3">
                        If the solar panels are financed, there is usually a lien on the property. Before
                        closing, the title company must:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Get the solar company to release the lien</li>
                        <li>Add the new buyer&apos;s name to the lease (if applicable)</li>
                        <li>Re-file the lien after closing (if the lease continues)</li>
                      </ul>
                      <p className="mb-3">
                        Some solar companies charge $200–$500 to transfer the lien. Work with the title
                        company early in the process to avoid delays.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Final Thoughts [14:45]
                      </h3>
                      <p className="mb-3">Solar panels can be a great investment, but buyers should:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li>Ask for a copy of the lease or loan agreement early.</li>
                        <li>Check if the lease is transferable.</li>
                        <li>Verify whether the solar payment affects their mortgage qualification.</li>
                        <li>Understand that appraisals may not fully reflect the system&apos;s cost.</li>
                      </ul>
                      <p className="mb-3">
                        Long-term outlook: Solar technology is improving, and costs are dropping. While solar
                        panels may not add much value today, they can offset rising electricity costs in the
                        future.
                      </p>
                      <p>
                        Need a mortgage? Ask us for a{" "}
                        <Link href="/#get-pre-approved" className="text-[#3fb364] font-semibold hover:underline">
                          free quote
                        </Link>
                        —we&apos;ll guide you through every step!
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/lsu-forms-loan-status-updates-and-what-you-need-to-know/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/air-conditionings-impact-phoenix-valley-real-estate/"
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
                <p className="text-[#3fb364] text-[14px] font-bold uppercase mb-5">
                  Talk to a Broker Today!
                </p>
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
              Have questions about financing options? Our experts are here to help with personalized advice
              for any mortgage type. Fill out our form to get started today!
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
              Ready to take the next step towards your dream home? One of our experienced mortgage
              professionals will get back to you promptly with personalized solutions tailored to your unique
              financial situation.
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