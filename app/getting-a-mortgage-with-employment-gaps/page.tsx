"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ArticleHero from "../component/ArticleHero";

const relatedLinks = [
  {
    label: "Credit Card Payoff",
    href: "/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/",
  },
  {
    label: "Mortgage as a Couple vs Single",
    href: "/better-getting-mortgage-couple-vs-single-applicant/",
  },
  {
    label: "Relocating While Remote",
    href: "/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/",
  },
  {
    label: "Rapid Rescore for Eligibility",
    href: "/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/",
  },
  {
    label: "DSCR Loan Explained",
    href: "/dscr-loan-the-best-alternative-to-hard-money/",
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
      name: "What are some typical employment gap scenarios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employment gaps typically occur when someone loses a job and is searching for a new one. For executives, it may take up to a year to find the right fit, while entry-level workers may take only a few months. Other common scenarios include parents returning to the workforce after staying home to care for children.",
      },
    },
    {
      "@type": "Question",
      name: "How do conventional, FHA, and VA loans treat job gaps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional loans are the most flexible and can work with borrowers who recently rejoined the workforce, even after long gaps, as long as credit is decent. FHA loans require a two-year consecutive work history if the job gap exceeds six months and at least six months with the current employer. VA loans are stricter, requiring at least a 12-month history on the current job if there are job gaps of more than 60 days in the last two years.",
      },
    },
    {
      "@type": "Question",
      name: "Do all loan programs accept short job gaps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all programs generally accept employment gaps of less than 30 days without issue. However, longer gaps have different requirements depending on whether you are applying for a Conventional, FHA, or VA loan.",
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

export default function GettingMortgageWithEmploymentGapsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow relative z-0">
        {/* Featured hero image */}
        <ArticleHero
          title={<>Getting a Mortgage with Employment Gaps</>}
          excerpt="Learn how employment gaps can affect mortgage approval and what Conventional, FHA, and VA loan programs require."
          category="Mortgage Qualifications"
          categoryHref="/mortgage-qualifications/"
          dateLabel="Feb 3, 2025"
          readTime="8 min read"
        />

        {/* Article + sidebar */}
        <section className="relative z-0 w-full py-12 lg:py-16 bg-[#fcf9f3]">
          <div className="w-[90%] max-w-[1520px] mx-auto px-0 sm:px-2 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
            <article className="min-w-0">

              <p className="text-[#3a4a3a] text-[16px] leading-[1.8] mb-8">
                In this episode, we covered gaps in employment. In some time in their life, most people will
                probably have a gap in employment. The reason why gaps are even defined or talked about is that
                underwriters are looking to see the sustainability and likelihood of you continuing to make an income.
              </p>

              {/* Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08271B] mb-10 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/MCFlkfZ3Cr4"
                  title="Getting a Mortgage with Employment Gaps"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Mid CTA */}
              <div className="mb-12 bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 lg:p-8 text-center shadow-sm">
                <h2
                  className="text-[#08271B] text-[24px] lg:text-[28px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Worried About Employment Gaps &amp; Mortgage Approval?
                </h2>
                <p className="text-[#4e5b4e] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                  Even with employment gaps, you may still qualify for a mortgage. Let our experts help you
                  navigate lender requirements and secure financing.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Mortgage Consultation &rarr;
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
                <section id="employment-gap-scenarios">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    What are some typical gap scenarios?
                  </h2>
                  <p className="mb-5">
                    Typically, a gap scenario is going to come up when someone&rsquo;s either lost their job and they&rsquo;re
                    on the market looking for the right fit. People&rsquo;s situations can vary greatly. If you&rsquo;re an
                    executive in a corporate job it can take you a year to find the right job, but if you&rsquo;re looking
                    for entry-level employment, it can take a few months.
                  </p>
                  <p className="mb-5">
                    And it&rsquo;s not always job loss. We work with a lot of working class people. We have a lot of mothers
                    and fathers that have stayed home to take care of the kids, are now entering the workforce, and have
                    been working for a couple of months and call about applying for a loan or refi. So, let&rsquo;s look over
                    the three main loan programs: conventional, FHA, and VA.
                  </p>
                </section>

                <section id="conventional-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Conventional Loans
                  </h2>
                  <p>
                    If someone has had a gap in employment for a long time, say 10 years, and they just got back into
                    the workforce a month ago we would put them into a conventional loan. Neither the FHA nor the VA
                    would allow for this situation. Conventional is going to be flexible because they&rsquo;re going to be able
                    to look at someone&rsquo;s situation case by case. The only reason you wouldn&rsquo;t like conventional is if
                    your credit score isn&rsquo;t very good. So as long as you have decent credit, conventional is the way to go.
                  </p>
                </section>

                <section id="fha-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    FHA Loans
                  </h2>
                  <p>
                    So, the biggest difference between FHA and conventional is that in the case of FHA if there&rsquo;s a job gap
                    over six months a two-year work history will be needed. Now it doesn&rsquo;t matter when that two-year work
                    history was. It can go back 10 years, but it needs to be two years of consecutive work. FHA is where a
                    lot of our first-time homebuyers or lower credit score borrowers will fall. To qualify for the loan you
                    will have to have been with your current employer for six months and the borrower would need to have two
                    years of consecutive work history prior to any job gaps.
                  </p>
                </section>

                <section id="va-loans">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    VA Loans
                  </h2>
                  <p>
                    The VA is the strictest of all three. It requires borrowers to have at least a 12-month history on the
                    current job if there are any job gaps over 60 days within the last two years.
                  </p>
                </section>

                <section id="to-summarize">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    To Summarize
                  </h2>
                  <p className="mb-4">All programs are fine with job gaps less than 30 days</p>
                  <p className="mb-4">
                    Fannie Mae technically does not have any job gap maximum allowed limit like Freddie Mac. Technically a
                    borrower can be out of a job for years and come back to the workforce along with a letter of explanation
                    and would be okay. Only full time hourly or salary is allowed in these cases.
                  </p>
                  <p className="mb-4">
                    With Freddie Mac if the gap is greater than or equal to six months, a letter of explanation from the client
                    is required explaining the circumstances surrounding the gap in employment. Freddie needs a 12-month work history
                    in the last 24 months. Only full time hourly or salary allowed in these cases.
                  </p>
                  <p className="mb-4">
                    With FHA loans job gaps over six months are an issue. They are doable if the borrower has been with current employer
                    for six months and they have a consecutive 2-year work history prior to any job gaps.
                  </p>
                  <p className="mb-4">
                    VA loans require the borrower to have a 12-month history on their current job if there are job gaps over 60 days with
                    the last two years. As well, an explanation letter is needed and only full time hourly or salary is allowed.
                  </p>
                </section>

                <p>
                  If you have any questions about this or if you have any questions you&rsquo;d like us to answer on our podcast,
                  you can submit your questions using our{" "}
                  <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                    contact form
                  </Link>{" "}
                  or give us a call at{" "}
                  <a href="tel:+16025352171" className="text-[#3fb364] font-semibold hover:underline">
                    (602) 535-2171
                  </a>
                  . Be sure to ask us for a free quote on your next mortgage. We&rsquo;ll personally work with you and help you through
                  the whole process.
                </p>

                <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-5 rounded-r-xl">
                  <p className="text-[15px] text-[#052316] leading-relaxed">
                    Be sure to ask us for a free quote on your next mortgage. We&rsquo;ll personally work with you and help you
                    through the whole process.
                  </p>
                </div>

                <p className="text-[15px]">
                  Worried about employment gaps affecting your mortgage? Explore our guide on{" "}
                  <Link href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/" className="text-[#3fb364] font-semibold hover:underline">
                    credit card payoff
                  </Link>
                  , learn the pros and cons of{" "}
                  <Link href="/better-getting-mortgage-couple-vs-single-applicant/" className="text-[#3fb364] font-semibold hover:underline">
                    couple vs single applications
                  </Link>
                  , get tips on{" "}
                  <Link href="/can-i-relocate-and-get-a-mortgage-while-working-remotely-out-of-state/" className="text-[#3fb364] font-semibold hover:underline">
                    relocating while remote
                  </Link>
                  , discover how a{" "}
                  <Link href="/how-a-rapid-rescore-can-help-to-get-qualified-for-a-mortgage/" className="text-[#3fb364] font-semibold hover:underline">
                    rapid rescore can help
                  </Link>
                  , and see why a{" "}
                  <Link href="/dscr-loan-the-best-alternative-to-hard-money/" className="text-[#3fb364] font-semibold hover:underline">
                    DSCR loan
                  </Link>{" "}
                  might be right for you.
                </p>

                <p className="text-[#8a9a7a] text-[13px] leading-relaxed">
                  Mortgage Brothers LLC does not provide tax, legal, or accounting advice. This material has been prepared for informational purposes only.
                  You should consult your own tax, legal, and accounting advisors before engaging in any transaction. Mortgage Brothers NMLS 1007154,
                  NMLS #210917 and 1618695. Equal housing lender.
                </p>

                {/* Transcript */}
                <section id="podcast-transcript">
                  <h2
                    className="text-[#052316] text-[24px] sm:text-[28px] font-bold mb-6 border-b border-[#e8e0d0] pb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Transcript of the Mortgage Brothers Podcast
                  </h2>

                  <div className="space-y-8 text-[15.5px]">
                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Getting a Mortgage with Employment Gaps</h3>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Introduction [00:02]</h3>
                      <p>
                        Today, we&rsquo;re tackling a common question: &ldquo;Can I still qualify for a mortgage if I have employment gaps?&rdquo;
                      </p>
                      <p className="mb-3">
                        Many borrowers worry that if they&rsquo;ve taken time off from work&mdash;whether due to job loss, staying home with kids, health issues,
                        or other reasons&mdash;they won&rsquo;t be able to get approved for a mortgage. The good news? It&rsquo;s possible, but each loan program
                        has different rules. Let&rsquo;s break it all down.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">What Counts as an Employment Gap? [01:51]</h3>
                      <p className="mb-3">
                        An employment gap happens when a borrower stops working for a period of time&mdash;whether for weeks, months, or even years.
                      </p>
                      <p className="mb-3">
                        If you leave a job for a few weeks and start a new one quickly, that&rsquo;s usually not an issue. If you were unemployed for several months
                        or years, lenders will take a closer look at your work history.
                      </p>
                      <p>
                        Lenders want to see stability and the likelihood that your income will continue. That&rsquo;s why gaps in employment raise red flags, but they
                        don&rsquo;t automatically disqualify you.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Common Reasons for Employment Gaps [03:00]</h3>
                      <p className="mb-3">
                        There are many valid reasons why someone might have an employment gap, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>Job loss (looking for the right fit)</li>
                        <li>Maternity/paternity leave (stay-at-home parents returning to work)</li>
                        <li>Caring for a family member (elderly parents, children, etc.)</li>
                        <li>Medical leave (disability, recovery from an accident, etc.)</li>
                        <li>Military deployment or overseas assignments</li>
                        <li>Returning to work after retirement</li>
                      </ul>
                      <p>
                        If your employment gap was due to one of these reasons, you may still qualify for a mortgage&mdash;but the lender will need additional
                        documentation and explanations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Conventional Loans (Fannie Mae &amp; Freddie Mac) [04:37]
                      </h3>
                      <p className="mb-3">Best for borrowers with good credit and stable income.</p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>You can qualify with an employment gap of ANY length</li>
                        <li>You only need to be back at work for at least 1 month</li>
                        <li>Requires a written explanation for why you were unemployed</li>
                      </ul>
                      <p>
                        Example: If a stay-at-home parent has been out of work for 10 years but recently returned to a stable full-time job, they can still qualify&mdash;even after just 1 month of employment!
                      </p>
                      <p className="mt-3">
                        Key advantage: Conventional loans are the most flexible when it comes to employment gaps.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">FHA Loans [06:20]</h3>
                      <p className="mb-3">Best for first-time buyers, lower credit scores, or smaller down payments.</p>
                      <p className="mb-3">
                        FHA has stricter rules for employment gaps: if you&rsquo;ve been unemployed for more than 6 months, you must:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>Have at least 6 months of continuous employment before applying</li>
                        <li>Show at least 2 years of prior work history (even if it was years ago)</li>
                      </ul>
                      <p className="mb-3">
                        If your job gap was less than 6 months, there are no restrictions&mdash;you can qualify as long as you&rsquo;re currently working.
                      </p>
                      <p>
                        Example: If you were unemployed for 5 months and just started a new job, you can apply immediately. But if you were unemployed for 7 months, you must work at least 6 months before applying.
                      </p>
                      <p className="mt-3">
                        Key takeaway: FHA loans allow for employment gaps, but you need more work history and recent employment stability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">VA Loans [09:28]</h3>
                      <p className="mb-3">Best for military borrowers (0% down, no PMI, flexible guidelines).</p>
                      <p className="mb-3">
                        VA loans have the strictest rules for employment gaps: if you have a job gap longer than 60 days in the past 2 years, you must:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>Show at least 12 months of continuous employment at your current job</li>
                        <li>Provide a written explanation for the gap</li>
                      </ul>
                      <p>
                        Example: If a veteran was unemployed for 2.5 months, they must be at their new job for at least 12 months before qualifying for a VA loan.
                      </p>
                      <p className="mt-3">Key takeaway: VA loans require longer employment stability after a gap.</p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">
                        Summary: What You Need to Qualify with an Employment Gap [10:07]
                      </h3>

                      <div className="overflow-x-auto my-6 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
                        <table className="w-full text-left text-[14px]">
                          <thead className="bg-[#052316] text-white">
                            <tr>
                              <th className="p-4 font-semibold">Loan Type</th>
                              <th className="p-4 font-semibold">Job Gap Over 6 Months?</th>
                              <th className="p-4 font-semibold">Minimum Time at Current Job</th>
                              <th className="p-4 font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e8e0d0]">
                            <tr className="hover:bg-[#f9f7f2]">
                              <td className="p-4 font-bold text-[#052316]">Conventional</td>
                              <td className="p-4">Allowed</td>
                              <td className="p-4">1 month</td>
                              <td className="p-4">Must provide an explanation</td>
                            </tr>
                            <tr className="hover:bg-[#f9f7f2]">
                              <td className="p-4 font-bold text-[#052316]">FHA</td>
                              <td className="p-4">Allowed (with conditions)</td>
                              <td className="p-4">6 months</td>
                              <td className="p-4">Must show 2 years of prior work history</td>
                            </tr>
                            <tr className="hover:bg-[#f9f7f2]">
                              <td className="p-4 font-bold text-[#052316]">VA</td>
                              <td className="p-4">Not allowed (if over 60 days)</td>
                              <td className="p-4">12 months</td>
                              <td className="p-4">Must explain employment history gaps</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Final Tips for Getting Approved with Employment Gaps [11:22]</h3>
                      <ul className="list-disc pl-6 space-y-2 text-[15.5px] mb-3">
                        <li>Be upfront with your lender&mdash;don&rsquo;t try to hide employment gaps.</li>
                        <li>Have documentation ready (old W-2s, pay stubs, letters from employers).</li>
                        <li>Write a letter of explanation for why you had a job gap and why you&rsquo;re now stable.</li>
                        <li>If your credit is strong, conventional loans may be the best option.</li>
                        <li>If you need FHA or VA financing, make sure you meet the minimum job history requirements.</li>
                      </ul>
                      <p>
                        Key takeaway: Employment gaps aren&rsquo;t deal-breakers, but they require extra documentation and stable recent employment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[#052316] text-[18px] font-bold mb-3">Need Help with Your Mortgage?</h3>
                      <p className="mb-3">
                        If you&rsquo;re unsure whether you qualify due to an employment gap, contact us for a free quote!
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <Link href="/contact-us/" className="text-[#3fb364] font-semibold hover:underline">
                          Contact Form
                        </Link>
                        <br />
                        <strong>NMLS:</strong> 1007154
                      </p>
                      <p className="text-[14px] text-[#6a7a6a] mt-3">
                        Disclaimer: This content is for informational purposes only. Please consult legal or financial professionals before making any financial decisions.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e0d0]/70 flex flex-wrap items-center justify-between gap-4 text-[14px]">
                <Link
                  href="/if-i-have-1-mortgage-late-in-the-past-12-months-can-i-get-approved-for-a-mortgage/"
                  className="text-[#3fb364] font-semibold hover:underline"
                >
                  ← Previous Post
                </Link>
                <Link
                  href="/can-i-simply-payoff-credit-cards-to-qualify-for-a-mortgage/"
                  className="text-[#8a9a7a] hover:text-[#3fb364] transition-colors"
                >
                  Next Post →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
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

        {/* Tailored solutions */}
        <section className="w-full bg-[#08271B] py-14 lg:py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white text-[28px] lg:text-[34px] font-normal mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tailored Mortgage Solutions
            </h2>
            <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed mb-7">
              Have questions about financing options? Our experts are here to help with personalized advice for any mortgage type.
              Fill out our form to get started today!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Get in touch */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to take the next step towards your dream home? One of our experienced mortgage professionals will get back to you promptly with personalized solutions tailored to your unique financial situation.
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

        {/* Explore solutions */}
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

