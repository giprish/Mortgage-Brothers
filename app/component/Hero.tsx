import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#1a3a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            {/* Subtitle */}
            <p className="text-[#b89a5a] text-[13px] font-medium tracking-[0.08em] uppercase mb-6">
              ARIZONA MORTGAGE BROKERS · NMLS #1007154
            </p>

            {/* Main Heading */}
            <h1 className="text-white text-[42px] lg:text-[52px] font-normal leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Arizona home loan,
              <br />
              handled with care.
            </h1>

            {/* Description */}
            <p className="text-[#c8c8b8] text-[16px] leading-[1.7] mb-8 max-w-md">
              We are independent brokers who shop your scenario across
              <br className="hidden sm:block" />
              dozens of lenders — so banks compete for your business,
              <br className="hidden sm:block" />
              and you close faster, for less.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55]  text-white text-[15px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#c85a28]/20"
              >
                Get Pre-Approved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#talk-to-broker"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Talk to a Broker
              </a>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap items-center gap-6 text-[#8a9a7a] text-[13px]">
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                NMLS #1007154
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Equal Housing Lender
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Licensed in Arizona
              </span>
            </div>
          </div>

          {/* Right Card - Pre-Approval Snapshot */}
          <div className="w-full lg:w-[380px] bg-[#243a24] rounded-2xl p-7 border border-[#2d4a2d]">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-5">
              <p className="text-[#b89a5a] text-[11px] font-semibold tracking-[0.12em] uppercase">
                PRE-APPROVAL SNAPSHOT
              </p>
              <div className="w-10 h-10 bg-[#2d4a2d] rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b89a5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
            </div>

            {/* Big Number */}
            <div className="mb-1">
              <span className="text-white text-[48px] font-light leading-none">
                ~25{" "}
              </span>
              <span className="text-white text-[20px] font-light">days</span>
            </div>
            <p className="text-[#8a9a7a] text-[13px] mb-6">
              Average time from application to keys.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#2d4a2d] mb-5"></div>

            {/* Feature List */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#2d4a2d] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b89a5a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-white text-[14px] font-medium">
                  Independent, unbiased advice
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#2d4a2d] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b89a5a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="text-white text-[14px] font-medium">
                  30+ lenders shopped for you
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#2d4a2d] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b89a5a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white text-[14px] font-medium">
                  No credit impact to start
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
