"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FaqAccordion from "../component/FaqAccordion";

const articleFaqs = [
  {
    q: "1. Can I remove my ex-spouse's name from the mortgage without refinancing?",
    a: "Usually, no. Lenders require refinancing to release one party from liability. In rare cases, an assumption may be allowed, but most lenders prefer a full refinance.",
  },
  {
    q: "2. How long after divorce can I refinance my mortgage?",
    a: "You can refinance as soon as your divorce is finalized and you meet lender requirements for credit, income, and documentation. Many people refinance immediately after receiving their divorce decree.",
  },
  {
    q: "3. What documents are required for an equity buyout refinance?",
    a: (
      <>
        You&apos;ll typically need your <strong>divorce decree</strong>, <strong>property settlement agreement</strong>, recent{" "}
        <strong>pay stubs</strong>, <strong>tax returns</strong>, and proof of the equity amount owed to your former spouse.
      </>
    ),
  },
  {
    q: "4. Can I buy a new home before my divorce is final?",
    a: "Yes, but it's more complex. You'll need a signed separation agreement and proof of separate finances. Some lenders prefer to wait until finalization, but others specialize in pre-divorce lending.",
  },
  {
    q: "5. Will alimony or child support help or hurt my mortgage approval?",
    a: (
      <>
        It depends. If you <strong>receive</strong> alimony or support, it can count as income (with documentation). If you{" "}
        <strong>pay</strong> it, it&apos;s counted as a debt, which may affect your debt-to-income ratio.
      </>
    ),
  },
  {
    q: "6. Is an equity buyout refinance the same as a cash-out refinance?",
    a: (
      <>
        No — and that&apos;s a key advantage. Court-ordered equity buyouts through conventional loans are treated as{" "}
        <strong>rate-and-term refinances</strong>, which means <strong>lower interest rates and better terms</strong>.
      </>
    ),
  },
];

export default function DivorceMortgageArticlePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main id="main-content" className="flex-grow pt-[64px] sm:pt-[72px]">
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 text-[#b8d4b8] text-[13px] font-semibold mb-6">
              <Link href="/arizona-mortgage-insights/" className="hover:text-white transition-colors">
                Arizona Mortgage Insights
              </Link>
            </div>

            <h1
              className="text-[32px] sm:text-[42px] lg:text-[50px] font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigating Mortgage Options During Divorce: A Complete Guide
            </h1>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-[#1a3a1a]">
          <section className="mb-12">
            <h2
              className="text-[#052316] text-[26px] sm:text-[32px] font-bold mb-4 border-b border-[#e8e0d0] pb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Understanding Mortgage Options During Divorce
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Divorce is one of life&apos;s most difficult transitions, and when real estate is involved, the
              financial complexity increases dramatically. For many couples, their home represents their largest
              shared asset, making mortgage decisions a critical part of achieving independence.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
              Knowing how to handle your mortgage during or after a divorce — whether you sell, refinance, or buy
              a new home — can help you make informed decisions and protect your financial stability.
            </p>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              1. Understanding Your Current Mortgage Situation
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              When a couple divorces, their shared mortgage doesn&apos;t automatically change. Both spouses remain
              legally responsible for the debt until steps are taken to modify or remove one person&apos;s name.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Even if the divorce decree awards the home to one spouse,{" "}
              <strong>the mortgage lender isn&apos;t bound by that order</strong>. If the person keeping the home
              stops paying, the other spouse&apos;s credit can still be damaged.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              To prevent this, it&apos;s vital to resolve the mortgage situation as part of the divorce
              settlement. Couples usually have <strong>three main options</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              <li><strong>Sell the home</strong> and divide the proceeds equally or as determined by the court.</li>
              <li><strong>Refinance the mortgage</strong> so one spouse keeps the home and removes the other from the loan.</li>
              <li><strong>Maintain joint ownership temporarily</strong>, allowing more time to plan financially before separating the asset.</li>
            </ul>
            <div className="text-center my-6">
              <Link href="#getin_touch" className="btn-primary">
                Get Expert Guidance Now
              </Link>
            </div>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              2. Removing a Spouse from the Mortgage Through Refinancing
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              One of the most common goals during divorce is to remove one spouse from the mortgage. This helps
              both parties achieve financial independence and protects the departing spouse from future
              liability.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              The primary way to accomplish this is through{" "}
              <Link href="/refinancing-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                <strong>refinancing</strong>
              </Link>{" "}
              the loan in the name of the spouse who will keep the home.
            </p>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>How Refinancing Works After Divorce</strong></h4>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">The spouse keeping the home must:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <li>Qualify for the mortgage independently (income, credit, and debt-to-income ratio).</li>
              <li>Show consistent income sufficient to cover the monthly payment.</li>
              <li>Remove the other spouse&apos;s name from both the mortgage and property title.</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
              In many cases, refinancing also provides an opportunity to pay the departing spouse their share of
              home equity — a process known as an <strong>equity buyout</strong>.
            </p>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              3. The Equity Buyout Advantage with Conventional Loans
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Divorcing homeowners can benefit greatly from <strong>conventional loan guidelines</strong> when refinancing for an
              equity buyout.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Typically, when you take money out of your home&apos;s equity, the lender classifies it as a{" "}
              <strong>cash-out refinance</strong>, which comes with higher rates and stricter qualification rules. However,{" "}
              <strong>in divorce cases</strong>, conventional loan programs often treat a court-ordered equity payout as a{" "}
              <strong>rate-and-term refinance</strong>, not a cash-out.
            </p>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>Why This Matters</strong></h4>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <li><strong>Lower interest rates:</strong> Rate-and-term refinances generally qualify for better rates.</li>
              <li><strong>Easier approval:</strong> Fewer restrictions and more favorable terms.</li>
              <li><strong>Financial savings:</strong> Reduces long-term borrowing costs for the spouse keeping the home.</li>
            </ul>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>How to Qualify</strong></h4>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">To access this benefit:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <li>Your <strong>divorce decree or separation agreement</strong> must clearly document the equity amount owed to your ex-spouse.</li>
              <li>The lender must see that the funds are part of the legal settlement, not a discretionary cash withdrawal.</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
              <strong>👉 Tip:</strong> Work with a mortgage professional experienced in divorce refinances. They&apos;ll help ensure
              your paperwork aligns with lender requirements and that your refinance qualifies for the best
              possible terms.
            </p>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              4. Buying a New Home After Divorce
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              For many individuals, divorce marks a fresh start — including a new home. Whether you&apos;re ready
              to buy immediately or after your divorce is finalized, understanding how lenders view your financial
              situation is crucial.
            </p>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>If Your Divorce Is Finalized</strong></h4>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">
              The process is more straightforward once your divorce is legally complete. You&apos;ll apply for a
              mortgage as an individual, based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <li>Your income and employment stability.</li>
              <li>Your assets and credit score.</li>
              <li>Your ongoing obligations (alimony, child support, etc.).</li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              If you receive <strong>alimony or child support</strong>, lenders may count it as income — provided it will continue
              for at least three years and you can document consistent payments.
            </p>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>If Your Divorce Is Still in Progress</strong></h4>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">
              If your divorce isn&apos;t finalized, lenders may require:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              <li>A <strong>separation agreement</strong> detailing division of assets and debts.</li>
              <li>Evidence of <strong>separate finances and living arrangements.</strong></li>
            </ul>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              Some lenders prefer to wait until the divorce is final, but those with experience in divorce lending
              can often navigate these situations before finalization.
            </p>
            <h4 className="text-[#052316] text-[18px] font-bold mb-3"><strong>Existing Mortgage Considerations</strong></h4>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">
              If your name is still on the marital home&apos;s mortgage, that payment will count toward your{" "}
              <Link href="/debt-to-income-ratio-calculator/" className="text-[#3fb364] font-semibold hover:underline">
                <strong>debt-to-income ratio</strong>
              </Link>
              , even if your ex-spouse is making the payments.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-3">You can sometimes exclude this debt if:</p>
            <ul className="list-disc pl-6 space-y-2 text-[16px] leading-[1.8] text-[#3a4a3a]">
              <li>The divorce decree assigns the mortgage responsibility to your ex-spouse.</li>
              <li>You can provide documentation showing consistent payments made by them for at least 6–12 months.</li>
            </ul>
            <div className="text-center my-6">
              <Link href="#getin_touch" className="btn-primary">
                Schedule a Divorce Mortgage Consultation
              </Link>
            </div>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5. Timing Your Move Strategically
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Timing plays a major role in optimizing both your refinance and new home purchase.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              If you plan to <strong>keep the marital home</strong>, consider refinancing soon after the divorce is finalized. This
              solidifies your financial independence and prevents shared liability. However, ensure you have
              stable income and a strong credit profile first.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
              If you&apos;re buying a new home, waiting until your divorce is legally complete provides the{" "}
              <strong>clearest and smoothest process</strong>. Still, if you need to move sooner, lenders with divorce experience
              can often structure your loan even before finalization.
            </p>
          </section>

          <section className="mb-12 border-t border-[#e8e0d0] pt-8">
            <h2
              className="text-[#052316] text-[26px] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Moving Forward with Confidence
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-4">
              Divorce forces you to separate emotional and financial ties, and your mortgage is often the largest
              shared financial commitment. Whether you&apos;re refinancing to remove your ex-spouse, buying out
              their equity, or starting over with a new home, understanding your mortgage options helps you make
              informed, confident decisions.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a] mb-6">
              Remember that{" "}
              <strong>
                <Link href="/conventional-home-loans-arizona/" className="text-[#3fb364] font-semibold hover:underline">
                  conventional loans
                </Link>{" "}
                offer unique benefits
              </strong>{" "}
              for divorce-related refinances — treating court-ordered equity payouts as rate-and-term rather than cash-out transactions. This difference can
              save you money and help you achieve independence faster.
            </p>
            <h3
              className="text-[#052316] text-[22px] font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to explore your options?
            </h3>
            <p className="text-[16px] leading-[1.8] text-[#3a4a3a]">
              Our team specializes in <strong>divorce-related mortgage solutions</strong>, including refinancing, equity buyouts,
              and new home financing. Contact us today for a personalized consultation and take the next step
              toward your new beginning.
            </p>
          </section>

          <section className="mb-12">
            <FaqAccordion
              title="Frequently Asked Questions (FAQ)"
              items={articleFaqs.map((faq) => ({ q: faq.q, a: faq.a }))}
            />
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
