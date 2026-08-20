"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StatsBanner from "../component/StatsBanner";
import { COMPANY, LOAN_OFFICERS } from "@/lib/company";

const comparisonRows = [
  {
    feature: "Typical Sale Price",
    cash: "Usually Lower",
    asIs: "Lower",
    repairs: "Higher",
    traditional: "May Be Highest",
  },
  {
    feature: "Time to Close",
    cash: "7â€“14 Days",
    asIs: "30â€“60 Days",
    repairs: "60â€“120+ Days",
    traditional: "30â€“60 Days",
  },
  {
    feature: "Repairs Needed",
    cash: "None",
    asIs: "None",
    repairs: "Yes",
    traditional: "Maybe",
  },
  {
    feature: "Showings / Open Houses",
    cash: "No",
    asIs: "Yes",
    repairs: "Yes",
    traditional: "Yes",
  },
  {
    feature: "Fees / Commissions",
    cash: "Often None",
    asIs: "Agent Fees May Apply",
    repairs: "Agent Fees May Apply",
    traditional: "Agent Fees May Apply",
  },
  {
    feature: "Convenience",
    cash: "Highest",
    asIs: "High",
    repairs: "Lower",
    traditional: "Lower",
  },
];

const whySellReasons = [
  {
    title: "You inherited a property",
    text: "Out-of-state heirs or families settling an estate often value a quick, as-is close.",
    compare: "Worth comparing: what a light cleanout plus a standard listing could net versus a one-and-done cash sale.",
  },
  {
    title: "The home needs major repairs",
    text: "When repairs cost more than you can or want to spend, selling as-is is appealing.",
    compare: "Worth comparing: an as-is cash offer against an as-is agent listing, which can reach more buyers and a higher price.",
  },
  {
    title: "Facing financial hardship",
    text: "If foreclosure is a risk, speed and certainty matter most.",
    compare: "Worth comparing: a cash sale against options that might let you keep the home, such as refinancing or tapping equity.",
  },
  {
    title: "You need to sell fast",
    text: "A relocation, a tight closing on your next home, or a vacant property bleeding carrying costs.",
    compare: "Worth comparing: the cash discount versus the few extra weeks a quick listing might take.",
  },
  {
    title: "You're going through a life change",
    text: "Divorce, downsizing, or moving closer to family are emotional and time-sensitive.",
    compare: "Worth comparing: net proceeds and timeline across each path so the decision stays clear-headed.",
  },
  {
    title: "You're simply exploring options",
    text: "Many homeowners just want to know what their home is worth and how a cash offer measures up.",
    compare: "Worth comparing: that's exactly what our free review is for â€” no commitment required.",
  },
];

const cashOfferQuestions = [
  "What is the offer based on? Ask for the comparable sales and repair assumptions behind the number, not just a headline figure.",
  "Are there any fees? Some buyers advertise \"no commissions\" but deduct service fees, closing costs, or repair credits later. Get the net amount in writing.",
  "Can you prove funds? A credible cash buyer can show proof of funds. If they can't, the \"cash\" offer may not be cash at all.",
  "Who handles closing? Insist on a licensed Arizona title or escrow company â€” never close directly with a buyer outside of escrow.",
  "Is the offer truly no-obligation? You should be free to walk away and compare other options without penalty.",
];

const trustPoints = [
  {
    title: "Arizona expertise",
    text: "A third-generation Arizona family business. The Knoell family has been rooted in Phoenix-area real estate for decades, helping homeowners statewide make confident decisions.",
  },
  {
    title: "Experience helping homeowners",
    text: "We've worked with thousands of Arizona families through purchases, refinances, and major decisions â€” so we know the real-world trade-offs behind a cash offer.",
  },
  {
    title: "Independent, unbiased advice",
    text: "The part that sets us apart: we do not buy houses. We never make you an offer, so we have nothing to gain from steering you toward a cash sale. Our only product here is clarity.",
  },
  {
    title: "No-obligation consultation",
    text: "The Home Selling Options Review is 100% free with zero obligation. You leave with information and a clear comparison â€” never a contract.",
  },
  {
    title: "Local market knowledge",
    text: "From Phoenix and Scottsdale to the East and West Valley, we know how Arizona neighborhoods, price tiers, and timelines behave â€” so guidance reflects your market, not a national average.",
  },
  {
    title: "Explore your options",
    text: "Beyond selling, you can explore all our Arizona mortgage programs â€” from refinancing to reverse mortgages â€” to find the path that fits.",
  },
];

const quickAnswers = [
  {
    q: "What is the best way to sell a house for cash?",
    a: "Get offers from reputable Arizona cash buyers, verify they can fund the purchase, then compare each offer against what your home would bring on the open market. The \"best\" choice depends on your timeline, your home's condition, and whether speed matters more than price. Mortgage Brothers LLC helps Arizona homeowners run that comparison for free.",
  },
  {
    q: "Is a cash offer better than listing?",
    a: "Not always. A cash offer is faster and skips repairs and showings, but it usually comes in below market value. Listing â€” even as-is with an agent â€” often nets more if your home is in decent shape and you have time. The right answer comes from comparing the actual numbers for your property.",
  },
  {
    q: "How do cash buyers work?",
    a: "Cash buyers (investors, \"We Buy Houses\" companies, and iBuyers) assess your home using local data and a walkthrough, then make a no-obligation offer, often within 24â€“48 hours. If you accept, they close through a title company without mortgage financing â€” sometimes in 7 to 14 days. In exchange for that speed, they typically pay less than full market value.",
  },
  {
    q: "What should homeowners compare before accepting a cash offer?",
    a: "Compare the cash offer's net price, closing speed, repair requirements, fees or commissions, and the buyer's credibility against your other options: a traditional sale, an as-is agent sale, or keeping and refinancing the home. Mortgage Brothers LLC â€” which does not buy houses â€” provides an unbiased, free comparison so you can decide with confidence.",
  },
];

const faqs = [
  {
    q: "How do I sell my home for cash?",
    a: "You can sell your home for cash by contacting a cash-buying company, investor, or iBuyer, or by attracting a cash buyer through a traditional listing. The buyer reviews your property, makes a no-obligation offer (often within 24â€“48 hours), and closes through a title company â€” sometimes in as little as 7 to 14 days, since no mortgage financing is involved. Before choosing, it's wise to compare the cash offer against listing on the open market to see which nets you more.",
  },
  {
    q: "Who pays cash for houses in Arizona?",
    a: "Cash for houses in Arizona typically comes from real estate investors, \"We Buy Houses\" companies, and iBuyers. They buy quickly and often as-is, but usually pay below full market value in exchange for speed and convenience. Mortgage Brothers LLC does not buy houses â€” as independent mortgage experts, we help you compare those cash offers against your other options at no cost.",
  },
  {
    q: "Is selling a house for cash a good idea?",
    a: "It can be â€” when speed and certainty matter more than maximizing price. A cash sale skips repairs, showings, and financing delays. But because cash offers are often lower, it isn't automatically the best financial choice. Comparing a cash offer to a traditional or as-is sale is the only way to know what's right for your situation.",
  },
  {
    q: "How much less do cash buyers pay?",
    a: "It varies widely by buyer and property condition. Investor and \"We Buy Houses\" offers generally come in below full market value, because the buyer factors in repairs, holding costs, and profit; iBuyers often pay closer to market value but charge a service fee. Because there's no fixed number, the only reliable way to know what an offer is really worth is to compare it against what your home would bring on the open market.",
  },
  {
    q: "Can I sell my house as-is?",
    a: "Yes. Many Arizona homeowners sell as-is without making repairs, either to a cash buyer or through an agent. Selling as-is saves time and money on repairs, though the price you receive may be lower than for a move-in-ready home.",
  },
  {
    q: "What are the risks of cash buyers?",
    a: "The main risks are offers well below market value, high-pressure tactics, and buyers with no verifiable track record. Protect yourself by checking reviews, confirming the buyer can actually fund the purchase, closing through a licensed Arizona title company, and comparing the offer to your other options first.",
  },
  {
    q: "How fast can a cash sale close?",
    a: "Cash sales can often close in as little as 7 to 14 days, depending on the buyer, title work, and required documentation â€” much faster than a typical financed sale that takes 30 to 60 days.",
  },
  {
    q: "Should I accept a cash offer?",
    a: "Only after you've compared it to your alternatives. A cash offer is worth accepting when its speed and convenience outweigh the lower price for your specific goals and timeline. Our free Home Selling Options Review lays the numbers side by side so you can decide with confidence.",
  },
];

const processSteps = [
  { step: "1", title: "You request an offer", text: "You share basic details about the property online or by phone." },
  { step: "2", title: "The buyer assesses value", text: "They review local comps and usually do a walkthrough." },
  { step: "3", title: "You receive a no-obligation cash offer", text: "Often within 24â€“48 hours." },
  { step: "4", title: "You decide", text: "If you accept, the buyer opens escrow with a licensed Arizona title company." },
  { step: "5", title: "You close", text: "Frequently in as little as 7 to 14 days, on a date you choose." },
];

const serviceAreas = [
  "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale",
  "Tempe", "Peoria", "Surprise", "Goodyear", "Avondale", "Buckeye",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function SellMyHouseFastArizonaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openQuickAnswer, setOpenQuickAnswer] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero â€” centered, matches the Areas We Serve page */}
        <section className="w-full bg-brand-green-deep pt-[110px] lg:pt-[130px] pb-12 sm:pb-14 lg:pb-16 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              HOME SELLING OPTIONS REVIEW
            </p>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Sell Your Home for Cash in Arizona
            </h1>

            <p className="text-[#63cd85] text-[17px] lg:text-[20px] font-medium leading-snug mb-5 max-w-2xl mx-auto">
              Before you accept a cash offer, compare it to every other way you could sell â€” with local experts who don&apos;t buy houses.
            </p>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              See how a cash sale really stacks up against listing traditionally, selling as-is, repairing first, or keeping your home â€” in plain numbers, with no pressure and no obligation.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[15px] font-semibold text-white text-left">
              {["100% Free", "No Obligation", "We Don't Buy Houses", "Local Arizona Experts"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#3fb364] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="/#get-pre-approved"
                data-preapproval="true"
                className="btn-primary px-7 py-3.5 text-[16px]"
              >
                Get My Free Home Selling Options Review
              </Link>
              <p className="text-[#63cd85] text-[15px] font-medium">
                or call{" "}
                <a href={COMPANY.phoneHref} className="underline underline-offset-2 hover:text-white">
                  602-535-2171
                </a>
              </p>
              <p className="text-[#b8d4b8] text-[12px] leading-relaxed">
                Safe. Secure. No pressure.
                <br />
                Reviewed by {LOAN_OFFICERS.eddie.name}, Licensed Mortgage Broker ({LOAN_OFFICERS.eddie.nmlsDisplay})
              </p>
            </div>
          </div>
        </section>

        {/* Intro strip */}
        <div className="loan-strip w-full bg-[#03170e] text-[#c8c8b8] border-y border-white/10">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-[14px] font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">âœ“</span>
              <span>We Are Not Cash Buyers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">âœ“</span>
              <span>Compare Every Selling Option</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3fb364]">âœ“</span>
              <span>Free, Unbiased Review</span>
            </div>
          </div>
        </div>

        {/* We Are Not Cash Buyers */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-6 text-left">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
              INDEPENDENT ADVICE
            </span>
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              We Are Not Cash Buyers â€” We Help You Compare
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              If you&apos;ve been searching for how to sell your home for cash in Arizona, you&apos;re not alone. Every month, thousands of homeowners across Phoenix and the surrounding Valley look into a cash sale, hoping for a fast, simple closing with no repairs, no showings, and no financing to fall through.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              A cash offer can absolutely be the right move â€” but &ldquo;I want to sell my home for cash&rdquo; and &ldquo;a cash sale is my best financial option&rdquo; are not always the same thing. At Mortgage Brothers LLC, we are not a cash home buying company. We will never make an offer on your house, and we have no stake in which path you choose. We&apos;re licensed Arizona mortgage experts whose only goal is to help you understand what selling for cash would really put in your pocket â€” compared to listing traditionally, selling as-is with an agent, making a few repairs first, or tapping your home&apos;s equity instead of selling.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              Most pages that show up when you look for cash for your house are the buyers themselves: &ldquo;We Buy Houses&rdquo; companies, investors, and iBuyers. Their job is to acquire your home as cheaply as the deal allows. Our job is different. Because we don&apos;t buy houses, we can give you straight information about how a cash home sale in Arizona actually compares to your alternatives â€” and help you avoid leaving money on the table. The review is 100% free, carries no obligation, and ends with you holding clear numbers, not a signed contract.
            </p>
          </div>
        </section>

        {/* Stats */}
        <StatsBanner
          stats={[
            { value: "23+", label: "Years in Business" },
            { value: "Thousands", label: "of Arizona Families Helped" },
            { value: "5-Star", label: "Local Reputation" },
          ]}
        />

        {/* What It Means */}
        <section className="loan-section bg-[#fcf9f3] !pt-8 sm:!pt-10 lg:!pt-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              What It Means to Sell Your Home for Cash
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              A cash sale simply means the buyer purchases your home without mortgage financing. There&apos;s no lender, no loan underwriting, and no appraisal contingency tied to a bank â€” so the deal can close in days rather than weeks. In Arizona, the people paying cash for houses generally fall into three groups:
            </p>
            <ul className="space-y-3 text-[#4e5b4e] text-[15px]">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong className="text-[#052316]">&ldquo;We Buy Houses&rdquo; investors</strong> â€” buy in as-is condition, often target distressed or inherited properties, and prioritize speed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong className="text-[#052316]">iBuyers (the large national platforms)</strong> â€” make algorithm-driven offers on homes in good condition and typically charge a service fee.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span><strong className="text-[#052316]">Individual cash buyers</strong> â€” occasionally a traditional buyer simply pays cash, usually through a standard agent listing.</span>
              </li>
            </ul>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              Each pays differently, closes differently, and carries different risks. Knowing which type you&apos;re dealing with is the first step to evaluating any cash offer for your house.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight mb-4">
                How a Cash Home Sale Works in Arizona
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                The typical fast home sale in Arizona follows a predictable path. The speed and certainty are real advantages, especially if you need to sell your property fast. But speed has a price, which is where an honest comparison matters most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item) => (
                <div key={item.step} className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#3fb364]/15 text-[#3fb364] font-bold text-[16px] flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-[#052316] text-[17px] font-bold mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Cash Buyers Pay */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              What Cash Buyers Typically Pay (the Honest Trade-Off)
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              This is the part many &ldquo;sell fast&rdquo; sites gloss over. Investor and &ldquo;We Buy Houses&rdquo; offers usually come in below full market value, because the buyer has to factor in repairs, holding costs, and their own profit margin. iBuyers often pay closer to market value but typically deduct a service fee. How big that gap is depends entirely on the buyer, your home&apos;s condition, and how quickly you need to sell â€” which is exactly why putting offers side by side matters so much.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              The practical takeaway: a cash sale can save you weeks of effort and thousands in repairs â€” but it can also cost you tens of thousands compared with the open market. Whether that trade-off is worth it depends entirely on your situation, which is what the comparison below is for.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="loan-section bg-white">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                SIDE-BY-SIDE COMPARISON
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                How Selling for Cash Compares to Your Other Options
              </h2>
              <p className="text-[#4e5b4e] text-[15px] mt-4 max-w-2xl mx-auto">
                Every situation is different. Here&apos;s how the most common options stack up. There&apos;s no single &ldquo;best&rdquo; row â€” only the best fit for your timeline, your home&apos;s condition, and your financial goals.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#e0e0e0] rounded-2xl shadow-sm">
              <table className="w-full text-left text-[13px] sm:text-[14px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#052316] text-white">
                    <th className="py-4 px-4 sm:px-6 font-semibold">Feature</th>
                    <th className="py-4 px-4 sm:px-6 font-semibold">Cash Sale<br /><span className="font-normal text-[12px] opacity-80">(To Investor)</span></th>
                    <th className="py-4 px-4 sm:px-6 font-semibold">Sell As-Is<br /><span className="font-normal text-[12px] opacity-80">(With Agent)</span></th>
                    <th className="py-4 px-4 sm:px-6 font-semibold">Repairs First<br /><span className="font-normal text-[12px] opacity-80">(Then Sell)</span></th>
                    <th className="py-4 px-4 sm:px-6 font-semibold">Traditional Sale<br /><span className="font-normal text-[12px] opacity-80">(Move-In Ready)</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e0e0e0] bg-white">
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 1 ? "bg-[#fcf9f3]" : ""}>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#052316]">{row.feature}</td>
                      <td className="py-3.5 px-4 sm:px-6">{row.cash}</td>
                      <td className="py-3.5 px-4 sm:px-6">{row.asIs}</td>
                      <td className="py-3.5 px-4 sm:px-6">{row.repairs}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#3fb364]">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="loan-btn-wrap">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#359854] text-white font-bold text-[15px] px-8 py-3.5 rounded-full transition-all shadow-md"
              >
                Get My Free Comparison Review
              </Link>
            </div>
          </div>
        </section>

        {/* Why Homeowners Sell for Cash */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                COMMON SITUATIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Arizona Homeowners Consider Selling for Cash
              </h2>
              <p className="text-[#4e5b4e] text-[15px] mt-4 max-w-2xl mx-auto">
                Most homeowners who look into a cash sale fall into one of a few situations â€” here&apos;s how a cash offer tends to fit each, and what&apos;s worth comparing first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whySellReasons.map((item) => (
                <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:border-[#3fb364] transition-all">
                  <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3">{item.text}</p>
                  <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed italic border-t border-[#f0f0f0] pt-3">{item.compare}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Sell */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              Who Should Sell a House for Cash?
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
              A cash sale tends to make the most sense when speed and certainty matter more than squeezing out the last dollar â€” for example, when you&apos;re facing a tight deadline, the home needs major work, or the property is vacant and costing you money each month. If, on the other hand, your home is in decent shape and you have a little time, listing it (even as-is with an agent) often nets meaningfully more. For some owners â€” especially those 62 and older â€” a reverse mortgage may let you access cash without selling at all. The only way to know which is true for you is to put the numbers side by side. That&apos;s the free review we offer â€” no pressure, no obligation, and no one trying to buy your house at the end of it.
            </p>
          </div>
        </section>

        {/* Questions Before Accepting */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-[28px] lg:text-[38px] font-bold font-playfair leading-tight">
              Questions to Ask Before You Accept Any Cash Offer
            </h2>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed">
              Whether an offer comes from an investor, an iBuyer, or a &ldquo;We Buy Houses&rdquo; company, a few questions will tell you quickly whether it&apos;s fair â€” and whether the buyer is legitimate:
            </p>
            <ul className="space-y-4">
              {cashOfferQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-[#c8c8b8] text-[14.5px] leading-relaxed">
                  <span className="text-[#3fb364] font-bold text-[16px] shrink-0">âœ“</span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="text-[#c8c8b8] text-[15px] leading-relaxed">
              These are exactly the kinds of details a neutral expert can help you read. Because Mortgage Brothers LLC doesn&apos;t buy homes, we can look at any cash offer for your house alongside you and explain â€” in plain numbers â€” how it compares to selling on the open market, selling as-is, or holding the property.
            </p>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Why Arizona Homeowners Trust Mortgage Brothers LLC
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((item) => (
                <div key={item.title} className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[16px] font-bold text-[#052316] mb-3 font-playfair">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Strip */}
        <section className="loan-strip w-full bg-[#fafafa] border-y border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-[#052316] text-[20px] font-bold font-playfair">Credentials</h2>
            <p className="text-[#4e5b4e] text-[13px] leading-relaxed">
              {COMPANY.legalName} Â· {COMPANY.nmlsDisplay} Â· {COMPANY.azLicenseDisplay} Â·{" "}
              {LOAN_OFFICERS.eddie.name} {LOAN_OFFICERS.eddie.nmlsDisplay} Â·{" "}
              {LOAN_OFFICERS.thomas.name} {LOAN_OFFICERS.thomas.nmlsDisplay} Â·{" "}
              {COMPANY.addressFull} Â·{" "}
              <a href={COMPANY.phoneHref} className="text-[#3fb364] hover:underline font-semibold">
                {COMPANY.phoneDisplay}
              </a>
              .{" "}
              <a
                href={COMPANY.nmlsConsumerAccessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] hover:underline font-semibold"
              >
                Verify our license on NMLS Consumer Access
              </a>
              .
            </p>
            <p className="text-[#4e5b4e] text-[13px] leading-relaxed max-w-3xl mx-auto">
              Reviewed by {LOAN_OFFICERS.eddie.name} â€” Owner &amp; Vice President, {COMPANY.legalName}. Licensed Arizona Mortgage Loan Originator ({LOAN_OFFICERS.eddie.nmlsDisplay}, {LOAN_OFFICERS.eddie.azLicenseDisplay}). A third-generation Phoenix native, Eddie has guided Arizona homeowners through home financing and selling decisions for more than 20 years.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="text-[11px] font-semibold text-[#4e5b4e] px-4 py-2 border border-[#e8e0d0] bg-[#fcfbf9] rounded-full">
                {COMPANY.nmlsDisplay}
              </span>
              <span className="text-[11px] font-semibold text-[#4e5b4e] px-4 py-2 border border-[#e8e0d0] bg-[#fcfbf9] rounded-full">
                {COMPANY.azLicenseDisplay}
              </span>
              <span className="text-[11px] font-semibold text-white px-4 py-2 bg-[#052316] rounded-full flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                {COMPANY.equalHousingLabel}
              </span>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="loan-section bg-white">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair text-center">
              Serving Homeowners Across the Phoenix Metro &amp; Arizona
            </h2>
            <p className="text-[#4e5b4e] text-[15px] text-center max-w-3xl mx-auto leading-relaxed">
              Arizona isn&apos;t one housing market â€” it&apos;s many, and a smart selling decision starts with knowing yours. Wherever your home sits â€” a starter house in Avondale, an inherited property in Mesa, or a longtime family home in Scottsdale â€” the right move depends on local comps, your timeline, and the home&apos;s condition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6">
                <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">Phoenix &amp; Scottsdale</h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed">In the core metro, well-kept homes often attract strong open-market interest, so a quick cash offer can leave more on the table than owners expect. We help you see the gap before you decide.</p>
              </div>
              <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6">
                <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">East Valley</h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed">Mesa, Chandler, Gilbert, and Tempe â€” family neighborhoods and steady demand mean condition and timing strongly affect what a cash sale costs you versus listing.</p>
              </div>
              <div className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl p-6">
                <h3 className="text-[17px] font-bold text-[#052316] mb-2 font-playfair">West Valley</h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed">Glendale, Peoria, Surprise, Goodyear, Avondale, and Buckeye â€” fast-growing communities where newer inventory and rising values make an apples-to-apples comparison especially worthwhile.</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {serviceAreas.map((city) => (
                <span key={city} className="text-[12px] font-semibold text-[#052316] bg-[#fcf9f3] border border-[#e0e0e0] px-3 py-1.5 rounded-full">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Answers */}
        <section className="loan-section bg-[#fcf9f3]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                QUICK ANSWERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Quick Answers: Selling Your Home for Cash
              </h2>
              <p className="text-[#4e5b4e] text-[15px] mt-4">
                Short, straight answers to the questions homeowners ask most.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {quickAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all hover:border-[#3fb364]/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuickAnswer(openQuickAnswer === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    aria-expanded={openQuickAnswer === idx}
                  >
                    <h3 className="font-bold text-[#052316] text-[16.5px] pr-4 font-playfair">{item.q}</h3>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold shrink-0">
                      {openQuickAnswer === idx ? "âˆ’" : "+"}
                    </span>
                  </button>

                  {openQuickAnswer === idx && (
                    <div className="px-6 pb-6 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#f0f0f0] pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="loan-section bg-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-bold font-playfair">
                Sell Home for Cash in Arizona: Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f3] border border-[#e0e0e0] rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    aria-expanded={openFaq === idx}
                  >
                    <h3 className="font-semibold text-[#052316] text-[16px] pr-4">{faq.q}</h3>
                    <span className="text-[#3fb364] text-[20px] ml-4 font-bold shrink-0">
                      {openFaq === idx ? "âˆ’" : "+"}
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

            <div className="loan-btn-wrap">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3a24] text-white font-semibold text-[15px] px-7 py-3 rounded-full transition-all"
              >
                Get Expert Answers Now
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="loan-section bg-[#052316] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-[28px] lg:text-[40px] font-bold font-playfair">
              Get Clarity. Compare Your Options. Decide with Confidence.
            </h2>
            <p className="text-[#c8c8b8] text-[16px] max-w-2xl mx-auto leading-relaxed">
              It&apos;s 100% free, there&apos;s zero obligation, and no one will ever make an offer on your home. You simply walk away with the clarity to make the right call for your family.
            </p>

            <ul className="text-left max-w-xl mx-auto space-y-3 text-[#c8c8b8] text-[14.5px]">
              <li className="flex items-start gap-3">
                <span className="text-[#3fb364] font-bold">âœ“</span>
                Compare every option side by side â€” cash sale, as-is listing, repair-then-sell, traditional sale, or keeping and refinancing.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3fb364] font-bold">âœ“</span>
                See your realistic net proceeds for each path, not just a headline offer.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3fb364] font-bold">âœ“</span>
                Get a straight, honest recommendation from someone who doesn&apos;t buy houses and has nothing to sell you on this page.
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#get-pre-approved"
                data-preapproval="true"
                className="btn-primary px-8 py-4 text-[16px]"
              >
                Get My Free Home Selling Options Review
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="border border-white/30 hover:border-white text-white font-semibold text-[15px] px-7 py-4 rounded-full transition-all hover:bg-white/10"
              >
                Call {COMPANY.phoneDisplay}
              </a>
            </div>

            <p className="text-[#b8d4b8] text-[13px] pt-2">
              100% Free Â· No Obligation Â· We Don&apos;t Buy Houses Â· Local Arizona Experts
            </p>

            <p className="text-[#b8d4b8] text-[12px] pt-4">
              {COMPANY.equalHousingLabel}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}