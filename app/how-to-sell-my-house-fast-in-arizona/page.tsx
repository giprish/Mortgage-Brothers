"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function HowToSellMyHouseFastInArizonaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Article Hero Banner */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#8da684] text-[13px] font-semibold mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>&gt;</span>
              <span className="text-[#3fb364]">Arizona Real Estate Guide</span>
            </div>

            <span className="bg-[#103020] border border-[#205030] text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full inline-block mb-4">
              PILLAR POST · 2026 GUIDE
            </span>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Complete Arizona Guide to Selling Your Home for Cash (2026)
            </h1>

            <div className="flex items-center justify-center gap-4 text-[14px] text-[#c8c8b8]">
              <span>By <strong className="text-white">Eddie Knoell</strong> (Senior Loan Officer / Owner)</span>
              <span>•</span>
              <span>Updated Jun 25, 2026</span>
              <span>•</span>
              <span>33 min read</span>
            </div>
          </div>
        </section>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          
          {/* Section 1: Executive Summary */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              1. Executive Summary
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              A <strong>cash home sale</strong> is a transaction in which a buyer purchases your house outright, without a mortgage. With no lender, appraisal contingency, or loan underwriting in the way, these sales can close in roughly 7–14 days instead of the 30–60 days a financed sale typically takes. In Arizona, the buyers paying <strong>cash for houses</strong> are usually real estate investors, &quot;We Buy Houses&quot; companies, iBuyers, or — less often — an individual buyer with the funds on hand.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <strong>Is selling your home for cash a good idea?</strong> Sometimes. It&apos;s an excellent fit when speed, certainty, and skipping repairs matter more than getting the highest possible price. The trade-off is that cash offers usually come in below full market value, because the buyer is pricing in repairs, holding costs, and profit.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <strong>Who should consider it?</strong> Homeowners facing a tight timeline, an inherited or distressed property, foreclosure, divorce, relocation, or a home that needs more work than they can fund.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              The single most important step before accepting any cash offer is to <strong>compare it against your other options with real numbers.</strong>
            </p>

            {/* Quick Answer Callout Box */}
            <div className="bg-[#eaf5ed] border-l-4 border-[#3fb364] p-6 rounded-r-xl my-6">
              <p className="text-[15px] font-semibold text-[#052316] leading-relaxed">
                <strong>Quick answer:</strong> Selling your home for cash in Arizona means a no-mortgage sale that can close in about 7–14 days, usually at a price below market value in exchange for speed and convenience. It&apos;s worth it when speed matters more than price — but only after comparing the offer to a traditional sale, an as-is sale, or refinancing.
              </p>
            </div>
          </section>

          {/* Section 2: Arizona Housing Market in 2026 */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              2. The Arizona Housing Market in 2026: Where Cash Sales Fit
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Arizona&apos;s housing market in 2026 looks very different from the frenzied seller&apos;s market of 2021–2022. After two years of explosive appreciation followed by a sharp rate-driven cooldown, the market has settled into what most analysts now call <strong>normalization</strong> — modest price movement, healthier inventory, and more negotiating room for buyers.
            </p>
            <div className="space-y-4 my-6">
              <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
                <strong>Prices.</strong> Depending on the methodology, the Phoenix metro median sits in the mid-$400Ks in 2026: Redfin reported a median sale price near $464,000 in spring 2026. Statewide, Zillow&apos;s index is around $423,500. The takeaway: <strong>prices have plateaued, not crashed.</strong>
              </p>
              <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
                <strong>Mortgage rates.</strong> Financing costs are the dominant force in the market. Freddie Mac&apos;s 30-year fixed averaged <strong>6.47% in mid-June 2026</strong>. High rates make all-cash offers comparatively more attractive to sellers who want certainty.
              </p>
            </div>
          </section>

          {/* Section 3: History of Cash Home Sales in Arizona */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              3. A Short History of Cash Home Sales in Arizona
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Arizona didn&apos;t just participate in the rise of the cash home buyer — in many ways, it was <strong>ground zero.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.7] text-[#3a4a3a] mb-6">
              <li><strong>2008–2011: The crash and the foreclosure flood.</strong> Phoenix was one of the hardest-hit metros in the housing collapse.</li>
              <li><strong>2012: Wall Street arrives in Phoenix.</strong> Blackstone formed Invitation Homes in early 2012, buying thousands of Phoenix homes.</li>
              <li><strong>2014–2021: The iBuyer era.</strong> Opendoor launched in Phoenix in 2014, and Offerpad was founded in the Arizona suburbs.</li>
              <li><strong>2022–2026: Normalization.</strong> When rates rose, iBuyer volumes shrank. Today&apos;s cash-buyer landscape is leaner and more cautious.</li>
            </ul>
          </section>

          {/* Section 4: Types of Cash Buyers */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              4. What Does &quot;Selling a Home for Cash&quot; Actually Mean?
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              &quot;Cash buyer&quot; is an umbrella term that hides important differences. Here is a comparison of who is really behind a cash offer in Arizona:
            </p>

            {/* Table 1 */}
            <div className="overflow-x-auto my-8 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Buyer Type</th>
                    <th className="p-4 font-semibold">Price vs. Market</th>
                    <th className="p-4 font-semibold">Speed</th>
                    <th className="p-4 font-semibold">As-Is?</th>
                    <th className="p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Individual Cash Buyer</td>
                    <td className="p-4">Near market value</td>
                    <td className="p-4">Moderate</td>
                    <td className="p-4">Sometimes</td>
                    <td className="p-4">Near-full value with no financing risk</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Local Investor / &quot;We Buy Houses&quot;</td>
                    <td className="p-4">Below market value</td>
                    <td className="p-4">Very fast (7–14 days)</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Distressed or inherited homes</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">iBuyer</td>
                    <td className="p-4">Below market value (- fee)</td>
                    <td className="p-4">Fast</td>
                    <td className="p-4">Turnkey only</td>
                    <td className="p-4">Newer, well-maintained homes</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Wholesaler</td>
                    <td className="p-4">Below market value</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Reselling contract to end buyer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Red Flags vs Green Flags */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              5. Red Flags vs. Green Flags Before Accepting an Offer
            </h2>

            {/* Table 3 */}
            <div className="overflow-x-auto my-8 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold text-red-300">Red Flag 🚩</th>
                    <th className="p-4 font-semibold text-emerald-300">Green Flag ✅</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 text-red-900 bg-red-50/50">Won&apos;t provide proof of funds</td>
                    <td className="p-4 text-emerald-900 bg-emerald-50/50">Provides proof of funds upon request</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 text-red-900 bg-red-50/50">Pressures you to sign immediately</td>
                    <td className="p-4 text-emerald-900 bg-emerald-50/50">Gives you time to compare options</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 text-red-900 bg-red-50/50">Lowers offer after walkthrough without reason</td>
                    <td className="p-4 text-emerald-900 bg-emerald-50/50">Honors original written offer</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 text-red-900 bg-red-50/50">Closes outside of escrow/title company</td>
                    <td className="p-4 text-emerald-900 bg-emerald-50/50">Uses licensed Arizona title &amp; escrow company</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8: Cash Sale vs Traditional Listing */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              6. Cash Sale vs. Traditional Listing Comparison
            </h2>

            {/* Table 5 */}
            <div className="overflow-x-auto my-8 border border-[#e8e0d0] rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#052316] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Factor</th>
                    <th className="p-4 font-semibold">Cash Sale (Investor / iBuyer)</th>
                    <th className="p-4 font-semibold">Traditional MLS Listing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e0d0]">
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Speed</td>
                    <td className="p-4">7–14 days</td>
                    <td className="p-4">30–60 days to close</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Net Proceeds</td>
                    <td className="p-4">Usually lower</td>
                    <td className="p-4">Highest for well-maintained homes</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Repairs</td>
                    <td className="p-4">No repairs required</td>
                    <td className="p-4">Preparation &amp; repairs needed</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Showings</td>
                    <td className="p-4">None</td>
                    <td className="p-4">Required</td>
                  </tr>
                  <tr className="hover:bg-[#f9f7f2]">
                    <td className="p-4 font-bold text-[#052316]">Certainty</td>
                    <td className="p-4 text-emerald-700 font-bold">High</td>
                    <td className="p-4 text-amber-700 font-semibold">Financing may fall through</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 10: Keep the Home Options */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-5 font-playfair border-b border-[#e8e0d0] pb-3">
              7. Alternatives: Refinance, HELOC, or Reverse Mortgage
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Selling isn&apos;t the only way to solve a financial need tied to your home. Sometimes the better move is to <strong>keep the home and access its equity</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.7] text-[#3a4a3a] mb-6">
              <li>
                <strong>Cash-out refinance.</strong> Replace your mortgage with a larger one and take equity in cash. See our{" "}
                <Link href="/refinancing-arizona" className="text-[#3fb364] font-semibold underline">
                  Arizona Refinancing Guide
                </Link>.
              </li>
              <li>
                <strong>Reverse mortgage (age 62+).</strong> Convert equity into cash without monthly mortgage payments. See our{" "}
                <Link href="/reverse-mortgage-arizona" className="text-[#3fb364] font-semibold underline">
                  Arizona Reverse Mortgage Guide
                </Link>.
              </li>
            </ul>
          </section>

          {/* Expert Quotes Box */}
          <section className="my-12 bg-[#052316] text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-[#3fb364] text-[12px] font-bold tracking-[0.16em] uppercase mb-4">
              EXPERT COMMENTARY
            </h3>
            <div className="space-y-6">
              <blockquote className="border-l-2 border-[#3fb364] pl-4 italic text-[15px] text-[#c8c8b8]">
                &quot;A cash offer isn&apos;t good or bad on its own — it&apos;s only good or bad next to your alternatives. We&apos;ve sat with Arizona families who were about to leave $40,000 on the table because an offer felt &apos;easy.&apos; Our job is to make sure you see the whole board.&quot;
                <footer className="not-italic text-white font-bold text-[14px] mt-2">
                  — Eddie Knoell (Senior Loan Officer / Owner, NMLS #210917)
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Section 16: Frequently Asked Questions */}
          <section className="mb-14">
            <h2 className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-6 font-playfair border-b border-[#e8e0d0] pb-3">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How do I sell my home for cash in Arizona?",
                  a: "Contact a reputable cash buyer or investor, get a written no-obligation offer, and close through a licensed title company in 7–14 days. Always compare to open-market value first."
                },
                {
                  q: "Is selling a house for cash a good idea?",
                  a: "It is a great fit when speed and certainty matter more than price. Because cash offers are lower, compare against an as-is listing or refinancing before deciding."
                },
                {
                  q: "Can I sell my house as-is in Arizona?",
                  a: "Yes — to a cash buyer or through an agent on the MLS. Selling as-is saves repair time and money."
                },
                {
                  q: "How fast can a cash sale close?",
                  a: "Typically 7 to 14 days, versus 30 to 60 days for a financed buyer."
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e8e0d0] rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-bold text-[#052316] text-[16px] flex items-center justify-between hover:bg-[#f9f7f2] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#3fb364] text-[20px] font-bold">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 text-[14.5px] leading-relaxed text-[#4a5568] border-t border-[#f0e8db] bg-[#faf8f4]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Review Banner */}
          <div className="bg-[#052316] text-white rounded-2xl p-8 text-center mt-12 shadow-xl">
            <h3 className="text-[24px] font-bold mb-3 font-playfair">
              Get Your Free Home Selling Options Review
            </h3>
            <p className="text-[#c8c8b8] text-[15px] max-w-xl mx-auto mb-6 leading-relaxed">
              Before accepting any cash offer, let our team run the real net numbers for cash sale vs. as-is listing vs. refinancing.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-block bg-[#3fb364] hover:bg-[#2d9e4f] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Request Free Options Review
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
