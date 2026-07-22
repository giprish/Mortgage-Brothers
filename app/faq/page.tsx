"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import PreApprovedForm from "../component/PreApprovedForm";

// FAQ categories with their target element IDs for scroll-spy
const categories = [
  { name: "General", targetId: "topic-01" },
  { name: "Loan programs", targetId: "topic-02" },
  { name: "Process & timeline", targetId: "topic-03" },
  { name: "Rates & costs", targetId: "topic-04" },
  { name: "Arizona & local", targetId: "topic-05" },
  { name: "Agent partners", targetId: "topic-06" },
];

// Complete FAQ data containing all topics, questions, and answers with quickAnswer for every question
const faqData = [
  {
    targetId: "topic-01",
    topicId: "TOPIC 01",
    topicTitle: "General mortgage questions",
    bgClass: "bg-[#fcf9f3]", // Alternating cream background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    questions: [
      {
        id: "gen-1",
        question: "What does a mortgage broker actually do?",
        answer:
          "We're independent — instead of offering one bank's products, we shop your scenario across 30+ lenders and bring you the most competitive fit. You get more options and one point of contact from application to closing.",
        quickAnswer:
          "A mortgage broker shops your loan across many lenders to find the best fit, rather than selling one bank's products.",
      },
      {
        id: "gen-2",
        question: "Is it better to use a broker or go straight to my bank?",
        answer:
          "A broker generally offers better interest rates and more flexible loan options because they work with dozens of wholesale lenders. Your bank can only offer their own products, which might not be the best rate or fit for your financial situation.",
        quickAnswer:
          "Brokers offer more wholesale loan options and competitive rates by shopping dozens of lenders for you.",
      },
      {
        id: "gen-3",
        question: "How much does it cost to work with Mortgage Brothers?",
        answer:
          "We do not charge any upfront broker fees to our borrowers. In the vast majority of scenarios, our fees are paid directly by the wholesale lender who wins your business. You get independent expert advice at no extra cost.",
        quickAnswer:
          "No upfront fees — in almost all cases, our broker fees are paid directly by the lender who wins your business.",
      },
      {
        id: "gen-4",
        question: "Will exploring my options hurt my credit?",
        answer:
          "No. When we start shopping loan programs, we perform a soft credit pull which has absolutely zero impact on your credit score. We only run a formal hard inquiry once you are ready to submit your full application to a specific lender.",
        quickAnswer:
          "No. We start with a soft credit pull that has zero credit score impact.",
      },
      {
        id: "gen-5",
        question: "How do I get started?",
        answer:
          "Simply click 'Start My Pre-Approval' above! The application takes about three minutes and does not impact your credit score to start.",
        quickAnswer:
          "Click 'Start My Pre-Approval' to complete our quick, credit-safe 3-minute application.",
      },
    ],
  },
  {
    targetId: "topic-02",
    topicId: "TOPIC 02",
    topicTitle: "Loan programs",
    bgClass: "bg-white", // Alternating white background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    questions: [
      {
        id: "loan-1",
        question: "What's the difference between FHA and conventional loans?",
        answer:
          "FHA loans are government-backed with lower credit and down-payment requirements, while conventional loans often cost less over time for buyers with stronger credit. We'll compare both against your actual numbers.",
        quickAnswer:
          "FHA loans have easier qualifying and lower down payments; conventional loans often cost less long-term for strong-credit buyers.",
      },
      {
        id: "loan-2",
        question: "I'm a veteran — how do VA loans work?",
        answer:
          "VA loans are backed by the Department of Veterans Affairs and offer 0% down payment, no monthly mortgage insurance (PMI), and competitive interest rates for eligible active-duty service members, veterans, and surviving spouses.",
        quickAnswer:
          "VA loans are backed by the VA, offering eligible veterans 0% down and no monthly mortgage insurance (PMI).",
      },
      {
        id: "loan-3",
        question: "What is a USDA loan and do I qualify?",
        answer:
          "USDA loans are designed for rural and suburban home buyers. They offer 100% financing (0% down) and lower interest rates. Eligibility is based on both the property location and household income limits.",
        quickAnswer:
          "USDA loans offer 100% financing (0% down) for properties in designated rural and suburban areas.",
      },
      {
        id: "loan-4",
        question: "When would I need a jumbo loan?",
        answer:
          "You need a jumbo loan if the amount you need to borrow exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA). These loans typically require higher credit scores and larger down payments.",
        quickAnswer:
          "Jumbo loans are required when borrowing more than the standard conforming limit (FHFA limit) for a property.",
      },
      {
        id: "loan-5",
        question: "Which program is right for me?",
        answer:
          "The right program depends on your credit score, down payment budget, and personal financial goals. We'll run side-by-side comparisons of all eligible programs to help you make an informed decision.",
        quickAnswer:
          "We'll run side-by-side program comparisons to find the best fit for your credit, budget, and goals.",
      },
    ],
  },
  {
    targetId: "topic-03",
    topicId: "TOPIC 03",
    topicTitle: "The process & timeline",
    bgClass: "bg-[#fcf9f3]", // Alternating cream background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    questions: [
      {
        id: "proc-1",
        question: "How long does it take to close on a home loan?",
        answer:
          "Many of our Arizona buyers close in around 25 days from application, though timelines vary with the property and how quickly documents come together.",
        quickAnswer:
          "Most of our buyers close in about 25 days from application, depending on the property and documentation.",
      },
      {
        id: "proc-2",
        question: "What documents do I need to apply?",
        answer:
          "Typically, you'll need proof of income (last 30 days of paystubs, W-2s for the past two years), tax returns, bank statements for the last 60 days, and a government-issued ID.",
        quickAnswer:
          "Typically: ID, paystubs (last 30 days), W-2s (past 2 years), tax returns, and bank statements (last 60 days).",
      },
      {
        id: "proc-3",
        question: "What's the difference between pre-qualification and pre-approval?",
        answer:
          "Pre-qualification is an estimate of what you might be approved for based on self-reported info. Pre-approval is a conditional commitment from a lender after they verify your financial documents and pull your credit.",
        quickAnswer:
          "Pre-qualification is an estimate based on self-reported info; pre-approval is a verified commitment from a lender.",
      },
      {
        id: "proc-4",
        question: "What are the steps from application to keys?",
        answer:
          "The steps are: 1) Pre-approval, 2) Home search and offer, 3) Loan application submission, 4) Appraisal and underwriting, 5) Conditional approval and clearing conditions, and 6) Closing (signing documents and funding).",
        quickAnswer:
          "Pre-approval, home search, formal application, appraisal, underwriting approval, signing, and funding.",
      },
      {
        id: "proc-5",
        question: "Can I get pre-approved before I find a house?",
        answer:
          "Yes! In fact, you should get pre-approved before you start shopping. Most real estate agents will require a pre-approval letter before showing you homes, and sellers require it to accept an offer.",
        quickAnswer:
          "Yes. Getting pre-approved first is highly recommended and required by most sellers and real estate agents.",
      },
    ],
  },
  {
    targetId: "topic-04",
    topicId: "TOPIC 04",
    topicTitle: "Rates & costs",
    bgClass: "bg-white", // Alternating white background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    questions: [
      {
        id: "rate-1",
        question: "What determines my interest rate?",
        answer:
          "Lenders determine interest rates based on market factors (bond markets, inflation) and individual factors (your credit score, down payment size, loan term, and occupancy type).",
        quickAnswer:
          "Interest rates depend on bond market conditions plus your credit score, down payment size, and loan type.",
      },
      {
        id: "rate-2",
        question: "What are closing costs, and how much are they?",
        answer:
          "Closing costs typically range from 2% to 5% of the loan amount. They cover title insurance, appraisal, escrow fees, underwriting, and prepaids like property taxes and homeowners insurance.",
        quickAnswer:
          "Closing costs are generally 2% to 5% of the loan amount, covering title, appraisal, prepaids, and lender fees.",
      },
      {
        id: "rate-3",
        question: "How much do I need for a down payment?",
        answer:
          "Conventional home loans allow down payments as low as 3% for first-time home buyers and 5% down for repeat home buyers. FHA loans start at 3.5% down, while VA and USDA loans offer 0% down for eligible borrowers.",
        quickAnswer:
          "Down payments start at 3% for Conventional and 3.5% for FHA. VA and USDA offer 0% down options.",
      },
      {
        id: "rate-4",
        question: "Should I pay points to lower my rate?",
        answer:
          "Paying discount points (prepaid interest) lowers your rate and monthly payment. It makes sense if you plan to keep the loan long enough for the monthly savings to recover the upfront cost of the points.",
        quickAnswer:
          "Points reduce your monthly payment; they are worth it if you plan to keep the home past the break-even point.",
      },
      {
        id: "rate-5",
        question: "Can I lock my rate?",
        answer:
          "Yes, you can lock your rate once you have an accepted contract on a home. A rate lock guarantees your interest rate for a specific period (typically 30 to 60 days) while your loan is processed.",
        quickAnswer:
          "Yes, you can lock your rate for 30-60 days once you have an accepted contract on a home.",
      },
    ],
  },
  {
    targetId: "topic-05",
    topicId: "TOPIC 05",
    topicTitle: "Arizona & local questions",
    bgClass: "bg-[#fcf9f3]", // Alternating cream background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    questions: [
      {
        id: "az-1",
        question: "What areas of Arizona do you serve?",
        answer:
          "We serve buyers across the Phoenix metro and the whole state — Phoenix, Scottsdale, Mesa, Gilbert, Tempe, Chandler, Tucson, Flagstaff, and beyond.",
        quickAnswer:
          "We serve the entire state, with deep roots across the Phoenix metro and beyond.",
      },
      {
        id: "az-2",
        question: "Do you really know the local Arizona market?",
        answer:
          "We've spent 70+ years in Phoenix real estate. That means realistic timelines, lenders who understand Arizona, and advice grounded in your actual neighborhood.",
        quickAnswer:
          "With 70+ years in Phoenix real estate, we know Arizona lenders, timelines, and neighborhoods first-hand.",
      },
      {
        id: "az-3",
        question: "Are there Arizona-specific programs for first-time buyers?",
        answer:
          "Yes, we work with several Arizona state and local down payment assistance programs, including HOME Plus and AzIDA, to help first-time buyers secure funding.",
        quickAnswer:
          "Yes, we work with local programs (like HOME Plus and AzIDA) offering down payment assistance.",
      },
      {
        id: "az-4",
        question: "Can you help with second homes or investment properties?",
        answer:
          "Absolutely. We offer competitive rates and flexible guidelines for second homes in popular Arizona vacation destinations, as well as investment property financing for landlords.",
        quickAnswer:
          "Yes, we offer competitive rates and flexible guidelines for vacation homes and rental properties state-wide.",
      },
      {
        id: "az-5",
        question: "Do you work with new construction in the Valley?",
        answer:
          "Yes, we coordinate directly with local builders and their preferred lenders to ensure you get the best deal, whether you need a construction-to-permanent loan or standard financing.",
        quickAnswer:
          "Yes, we coordinate directly with builders to secure the best loan terms, including preferred lender matching.",
      },
    ],
  },
  {
    targetId: "topic-06",
    category: "Agent partners",
    topicId: "TOPIC 06",
    topicTitle: "For real estate agent partners",
    bgClass: "bg-white", // Alternating white background
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    questions: [
      {
        id: "agent-1",
        question: "How do you work with real estate agents?",
        answer:
          "We treat your clients like our own — fast pre-approvals, clear communication, and on-time closings so your deals stay on track. You get a reliable lending partner, not a bottleneck.",
        quickAnswer:
          "We give agents fast pre-approvals, clear updates, and on-time closings so deals stay on track.",
      },
      {
        id: "agent-2",
        question: "How quickly can my buyer get pre-approved?",
        answer:
          "We can typically issue a pre-approval letter within 24 hours of receiving the buyer's completed application and required financial documents.",
        quickAnswer:
          "We typically issue pre-approval letters within 24 hours of receiving a completed application.",
      },
      {
        id: "agent-3",
        question: "Will you keep me updated during the transaction?",
        answer:
          "Absolutely. We send milestone updates at every key stage of the loan process so you and your buyers are always informed.",
        quickAnswer:
          "Yes, we send milestone updates at every key stage so you always know the loan status.",
      },
      {
        id: "agent-4",
        question: "Can we co-host homebuyer events or workshops?",
        answer:
          "Yes, we partner with agents to host educational homebuyer seminars, workshops, and co-branded marketing events.",
        quickAnswer:
          "Yes, we partner with agents to host co-branded homebuyer education seminars and events.",
      },
      {
        id: "agent-5",
        question: "How do I refer a client?",
        answer:
          "You can introduce us via email, text, or have your client contact us directly. We will take it from there and keep you updated.",
        quickAnswer:
          "Connect us via text or email, or have them call us directly. We will take care of the rest and keep you posted.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    faqData.forEach((cat) => {
      cat.questions.forEach((q) => {
        initial[q.id] = true;
      });
    });
    return initial;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);

  // Tab click handler — just changes active category, no scroll
  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
  };

  // Click outside listener to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle accordion item
  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Search logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };

  const isSearching = searchQuery.trim().length > 0;

  // Flattened list of matching questions for the dropdown suggestions
  const searchResults = isSearching
    ? faqData.flatMap((cat) =>
        cat.questions
          .filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((q) => ({
            ...q,
            topicId: cat.targetId,
            topicTitle: cat.topicTitle,
          }))
      )
    : [];

  // Handle clicking a suggestion in the dropdown
  const handleSelectSuggestion = (qId: string) => {
    // 1. Expand the selected question card
    setExpandedIds((prev) => ({
      ...prev,
      [qId]: true,
    }));
    // 2. Clear query and close dropdown
    setSearchQuery("");
    setShowDropdown(false);

    // 3. Set active category and scroll to the question
    setTimeout(() => {
      const element = document.getElementById(qId);
      if (element) {
        const parentSection = element.closest('section[id^="topic-"]');
        if (parentSection) {
          const cat = categories.find(c => c.targetId === parentSection.id);
          if (cat) setActiveCategory(cat.name);
        }
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* FAQ Hero Section */}
        <section className="w-full bg-[#08271B] relative py-16 lg:py-24 text-center z-40">
          {/* Subtle design circles wrapped to prevent overflow clipping of the dropdown */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Subtitle */}
            <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-4">
              HELP CENTER
            </p>

            {/* Title */}
            <h1
              className="text-white text-[38px] lg:text-[50px] font-normal leading-[1.15] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mortgage questions, answered.
            </h1>

            {/* Description */}
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Straight answers from Arizona brokers who do this every day — no jargon, no pressure. Search below, or browse by topic.
            </p>

            {/* Search Bar Container */}
            <div ref={searchRef} className="max-w-2xl mx-auto mb-8 relative">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a9a7a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search questions — VA loans, closing costs, timelines..."
                className="w-full bg-white text-[#1a3a1a] placeholder-[#8a9a7a] text-[15px] pl-13 pr-6 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#3fb364] shadow-md transition-all duration-200"
              />

              {/* Suggestions Dropdown Overlay */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#e8e0d0] text-left overflow-hidden z-50 max-h-80 overflow-y-auto">
                  {isSearching ? (
                    searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((q) => (
                          <button
                            key={q.id}
                            onClick={() => handleSelectSuggestion(q.id)}
                            className="w-full px-5 py-3 text-left hover:bg-[#faf6ef] transition-colors duration-150 flex items-start gap-3 border-b border-[#e8e0d0]/20 last:border-b-0 cursor-pointer"
                          >
                            {/* Search Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#8a9a7a"
                              strokeWidth="2.5"
                              className="mt-1 flex-shrink-0"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <div className="flex-1">
                              <p className="text-[#1a3a1a] text-[14px] font-semibold leading-snug">
                                {q.question}
                              </p>
                              <p className="text-[#b89a5a] text-[10px] font-bold tracking-wider uppercase mt-0.5">
                                {q.topicTitle}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-5 py-4 text-center text-[#8a9a7a] text-[14px]">
                        No matches found for &ldquo;{searchQuery}&rdquo;
                      </div>
                    )
                  ) : (
                    /* Popular / Suggested Searches */
                    <div className="py-2">
                      <p className="px-5 py-2 text-[#8a9a7a] text-[11px] font-bold tracking-wider uppercase border-b border-[#e8e0d0]/30 mb-1">
                        Popular Searches
                      </p>
                      {[
                        { id: "gen-1", topicId: "topic-01", question: "What does a mortgage broker actually do?", topicTitle: "General mortgage questions" },
                        { id: "loan-1", topicId: "topic-02", question: "What's the difference between FHA and conventional loans?", topicTitle: "Loan programs" },
                        { id: "proc-1", topicId: "topic-03", question: "How long does it take to close on a home loan?", topicTitle: "The process & timeline" },
                        { id: "rate-1", topicId: "topic-04", question: "What determines my interest rate?", topicTitle: "Rates & costs" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelectSuggestion(item.id)}
                          className="w-full px-5 py-3 text-left hover:bg-[#faf6ef] transition-colors duration-150 flex items-start gap-3 border-b border-[#e8e0d0]/20 last:border-b-0 cursor-pointer"
                        >
                          {/* Sparkle Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#b89a5a"
                            strokeWidth="2.5"
                            className="mt-1 flex-shrink-0"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <div className="flex-1">
                            <p className="text-[#1a3a1a] text-[14px] font-semibold leading-snug">
                              {item.question}
                            </p>
                            <p className="text-[#b89a5a] text-[10px] font-bold tracking-wider uppercase mt-0.5">
                              {item.topicTitle}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Licensing details */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#8a9a7a] text-[11px] font-medium tracking-wider uppercase">
              <span>NMLS #1007154</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>AZ #MB0922514</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="inline-block"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                Equal Housing Lender
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Licensed in Arizona</span>
            </div>
          </div>
        </section>

        {/* Tab & Badge Section */}
        <section className="w-full bg-[#f5f0e8] py-8 border-b border-[#e8e0d0]/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
            {/* Schema Tag Badge */}
            <div className="mb-6 bg-white border border-[#e8e0d0] rounded-full px-4 py-1.5 flex items-center gap-2 text-[#6b7a5a] text-[11px] font-medium shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span>
                <strong>FAQPage schema</strong> — every Q&A marked up for rich results + AI answer engines (SEO).
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {categories.map((c) => {
                const isActive = c.name === activeCategory;
                return (
                  <button
                    key={c.name}
                    onClick={() => handleCategoryChange(c.name)}
                    className={`text-[13px] font-medium px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#3fb364] border-[#3fb364] text-white shadow-md shadow-[#3fb364]/10"
                        : "bg-white border-[#d8d0c0] text-[#1a3a1a] hover:bg-[#faf6ef] hover:border-[#b89a5a]"
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Contents Area */}
        <div>
          {faqData.map((topic) => {
            const isVisible = topic.targetId === categories.find(c => c.name === activeCategory)?.targetId;
            return (
            <section
              key={topic.targetId}
              id={topic.targetId}
              className={`w-full py-16 lg:py-20 border-b border-[#e8e0d0]/40 scroll-mt-24 ${topic.bgClass}${!isVisible ? ' hidden' : ''}`}
            >
              <div className="max-w-5xl mx-auto px-6">
                {/* Topic Header */}
                <div className="flex items-start gap-4 mb-12">
                  {/* Icon Block */}
                  <div className="w-11 h-11 rounded-lg bg-[#1a3a1a] flex items-center justify-center text-white flex-shrink-0">
                    {topic.icon}
                  </div>
                  <div>
                    <p className="text-[#b89a5a] text-[11px] font-bold tracking-wider uppercase">
                      {topic.topicId}
                    </p>
                    <h2
                      className="text-[#1a3a1a] text-[28px] lg:text-[34px] font-normal leading-[1.1] inline-block relative pb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {topic.topicTitle}
                      <div className="w-12 h-[3px] bg-[#3fb364] rounded absolute bottom-0 left-0"></div>
                    </h2>
                  </div>
                </div>

                {/* 2-Column Grid Questions List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
                  {topic.questions.map((q) => {
                    const isExpanded = expandedIds[q.id];
                    return (
                      <div
                        key={q.id}
                        id={q.id}
                        className="border-b border-[#e8e0d0]/60 pb-6 flex flex-col transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleExpand(q.id)}
                          className="w-full flex items-start justify-between text-left gap-3 group cursor-pointer"
                        >
                          <h3 className="text-[#052316] text-[15.5px] lg:text-[16.5px] font-bold leading-snug group-hover:text-[#3fb364] transition-colors">
                            {q.question}
                          </h3>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                              isExpanded ? "bg-[#e8f5e9] text-[#3fb364] rotate-180" : "bg-[#f5f0e8] text-[#052316]"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="mt-3 transition-all duration-200">
                            <p className="text-[#4e5b4e] text-[13.5px] lg:text-[14px] leading-relaxed">
                              {q.answer}
                            </p>

                            {q.quickAnswer && (
                              <div className="bg-[#0f220f] border-l-3 border-[#3fb364] text-white rounded-r-lg p-3.5 flex items-start gap-2.5 mt-3">
                                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-[#b89a5a] mt-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="none"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-[#b89a5a] text-[9.5px] font-bold tracking-wider uppercase mb-0.5">
                                    QUICK SUMMARY
                                  </p>
                                  <p className="text-[#c8c8b8] text-[12.5px] leading-snug">
                                    {q.quickAnswer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            );
          })}
        </div>
      </main>

      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}
