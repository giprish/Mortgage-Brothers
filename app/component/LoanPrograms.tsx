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
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Jumbo Loans",
    description: "For high-value properties that exceed conforming loan limits, providing flexible financing options.",
    linkText: "Learn more",
    href: "/jumbo-loans-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "FHA Home Loans",
    description: "Government-backed loans ideal for lower credit borrowers and low to-moderate-income buyers, requiring lower down payments and great interest rates.",
    linkText: "Discover FHA",
    href: "/fha-home-loans-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage",
    description: "A financial tool for seniors to convert home equity into cash while retaining home ownership.",
    linkText: "Get Cash",
    href: "/reverse-mortgage-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Refinancing",
    description: "Options to lower your interest rate or access equity in your home through refinancing.",
    linkText: "Lower Rates",
    href: "/refinancing-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3z" />
      </svg>
    )
  },
  {
    title: "FHA Streamline Refinance",
    description: "A simplified refinancing option for existing FHA borrowers that can lower your monthly payments.",
    linkText: "Streamline Now",
    href: "/fha-streamline-refinance-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "VA Loans",
    description: "Rightfully so, this is the best loan available to veterans and active military members with favorable terms and no down payment required.",
    linkText: "For Veterans",
    href: "/va-loans-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: "Private Money Lender",
    description: "Access alternative financing options through private lenders for unique situations. No income verification in some cases.",
    linkText: "Find Out",
    href: "/private-money-lender-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "First Time Home Buyer",
    description: "Specialized programs and guidance designed to help first-time buyers navigate the mortgage process confidently.",
    linkText: "Start Here",
    href: "/first-time-home-buyer-arizona-guide/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5 12h14a2 2 0 002-2V9a2 2 0 00-2-2h-14a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage for a Home Purchase",
    description: "Use your home equity to buy your dream home without monthly mortgage payments.",
    linkText: "Explore Reverse Purchase Options",
    href: "/reverse-mortgage-home-purchase-arizona/",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

const LoanPrograms = () => {
  return (
    <section className="w-full bg-[#f3f5f8] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-[#1a3a1a] text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our Mortgage Solutions
          </h2>
          <div className="w-16 h-1 bg-[#3fb364] mx-auto rounded-full mb-6"></div>
          <p className="text-[#4a5568] text-[15px] sm:text-[16px] leading-relaxed">
            At The Mortgage Brothers, we offer a variety of{" "}
            <span className="font-bold text-[#1a3a1a]">mortgage solutions</span>{" "}
            tailored to meet your needs. Whether you&apos;re a{" "}
            <span className="font-bold text-[#1a3a1a]">first time homebuyer</span>{" "}
            or looking to{" "}
            <span className="font-bold text-[#1a3a1a]">refinance</span>, we have the
            expertise to guide you through the process.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          {loanSolutions.map((item, index) => (
            <div key={index} className="flex gap-4 items-start group">
              {/* Green Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:bg-[#3fb364]/20 transition-all duration-200">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <Link
                  href={item.href}
                  className="text-[#3fb364] hover:text-[#2d8545] font-bold text-[18px] lg:text-[20px] transition-colors leading-snug mb-1.5"
                >
                  {item.title}
                </Link>

                <p className="text-[#4a5568] text-[14px] leading-[1.65] mb-2">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[#3fb364] hover:text-[#2d8545] text-[13.5px] font-semibold transition-colors mt-auto group-hover:translate-x-1 transition-transform"
                >
                  {item.linkText}
                  <svg
                    className="w-3.5 h-3.5"
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
        <div className="text-center">
          <Link
            href="/mortgage-loan-programs-arizona/"
            className="inline-block bg-[#007a33] hover:bg-[#006128] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
          >
            Find Your Perfect Loan
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LoanPrograms;
