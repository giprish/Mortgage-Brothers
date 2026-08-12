import React from "react";
import Link from "next/link";

const loanSolutions = [
  {
    title: "Conventional Home Loans",
    description:
      "Ideal for buyers with good credit and a stable income, offering competitive rates and terms and down payments as low as 1% for first time home buyers.",
    linkText: "View Details",
    href: "/conventional-home-loans-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-5.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
      </svg>
    )
  },
  {
    title: "Jumbo Loans",
    description: "For high-value properties that exceed conforming loan limits, providing flexible financing options.",
    linkText: "View Jumbo Loan Options",
    href: "/jumbo-loans-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h.008M9 9.75h.008M9 12.75h.008M9 15.75h.008M15 6.75h.008M15 9.75h.008M15 12.75h.008M15 15.75h.008" />
      </svg>
    )
  },
  {
    title: "FHA Home Loans",
    description: "Government-backed loans ideal for lower credit borrowers and low to-moderate-income buyers, requiring lower down payments and great interest rates.",
    linkText: "Discover FHA",
    href: "/fha-home-loans-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage",
    description: "A financial tool for seniors to convert home equity into cash while retaining home ownership.",
    linkText: "Get Cash",
    href: "/reverse-mortgage-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.278-.659 2.003-.659.725 0 1.45.22 2.003.659l.797.599M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Refinancing",
    description: "Options to lower your interest rate or access equity in your home through refinancing.",
    linkText: "Lower Rates",
    href: "/refinancing-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    )
  },
  {
    title: "FHA Streamline Refinance",
    description: "A simplified refinancing option for existing FHA borrowers that can lower your monthly payments.",
    linkText: "Streamline Now",
    href: "/fha-streamline-refinance-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: "VA Loans",
    description: "Rightfully so, this is the best loan available to veterans and active military members with favorable terms and no down payment required.",
    linkText: "For Veterans",
    href: "/va-loans-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
  {
    title: "Private Money Lender",
    description: "Access alternative financing options through private lenders for unique situations. No income verification in some cases.",
    linkText: "Explore Private Money Options",
    href: "/private-money-lender-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "First Time Home Buyer",
    description: "Specialized programs and guidance designed to help first-time buyers navigate the mortgage process confidently.",
    linkText: "First-Time Buyer Guide",
    href: "/first-time-home-buyer-arizona-guide/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage for a Home Purchase",
    description: "Use your home equity to buy your dream home without monthly mortgage payments.",
    linkText: "Explore Reverse Purchase Options",
    href: "/reverse-mortgage-home-purchase-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    title: "Sell Home for Cash",
    description: "Compare cash offers to every other way you could sell — with local experts who don't buy houses.",
    linkText: "Compare Your Options",
    href: "/sell-my-house-fast-arizona/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.278-.659 2.003-.659.725 0 1.45.22 2.003.659l.797.599M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const LoanPrograms = () => {
  return (
    <section className="w-full bg-[#f4f6f9] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[#3fb364] text-[13px] font-bold tracking-[0.15em] uppercase mb-3">
            Loan Programs
          </span>
          <h2
            className="font-playfair text-[#08271B] text-[32px] lg:text-[42px] font-normal leading-tight mb-4"
            
          >
            Explore Our Mortgage Solutions
          </h2>
          <div className="w-14 h-[3px] bg-[#3fb364] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4e5b4e] text-[15.5px] sm:text-[16.5px] leading-relaxed">
            At The Mortgage Brothers, we offer a variety of{" "}
            <span className="font-bold text-[#08271B]">mortgage solutions</span>{" "}
            tailored to meet your needs. Whether you&apos;re a{" "}
            <span className="font-bold text-[#08271B]">first time homebuyer</span>{" "}
            or looking to{" "}
            <span className="font-bold text-[#08271B]">refinance</span>, we have the
            expertise to guide you through the process.
          </p>
        </div>

        {/* 2-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {loanSolutions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_16px_rgba(0,0,0,0.015)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(63,179,100,0.08)] hover:border-[#3fb364]/20 transition-all duration-300 ease-out flex flex-col"
            >
              <div>
                {/* Icon Container with Hover Animation */}
                <div className="w-11 h-11 rounded-xl bg-[#e8f6ed] text-[#2d8545] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#2d8545] group-hover:text-white group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#08271B] font-bold text-[18px] sm:text-[19px] leading-snug mb-2 transition-colors duration-200 group-hover:text-[#246d39]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#3a443a] text-[14px] sm:text-[14.5px] leading-[1.6] mb-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-1">
                {/* Link with translate arrow micro-animation */}
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[#246d39] text-[14.5px] font-semibold transition-colors duration-200 hover:text-[#1a5c2e] [-webkit-tap-highlight-color:transparent] no-underline"
                >
                  <span>{item.linkText}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-2">
          <Link
            href="/mortgage-loan-programs-arizona/"
            className="inline-flex items-center justify-center bg-[#2d8545] hover:bg-[#246d39] active:bg-[#246d39] text-white font-bold text-[15.5px] px-9 py-4 min-h-[48px] rounded-full shadow-lg shadow-[#2d8545]/20 hover:shadow-xl hover:shadow-[#2d8545]/30 transition-all duration-200 [-webkit-tap-highlight-color:transparent]"
          >
            Find Your Perfect Loan
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LoanPrograms;