import React from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Let's discuss your goals and explore your options, whether you're buying in Phoenix or refinancing in Mesa.",
  },
  {
    number: "02",
    title: "Loan Pre-Approval",
    description:
      "Submit your documents, and we'll connect you with the best loan options from our network of Arizona lenders.",
  },
  {
    number: "03",
    title: "Close Quickly and Confidently",
    description:
      "Our team ensures a smooth closing process, helping you move into your new home without stress.",
  },
];

const HomeownershipSteps = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-t border-[#e8e0d0]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            The Process
          </p>
          <h2
            className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Path to Homeownership in 3 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-14 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-[#08271B] flex items-center justify-center mb-6 relative z-10">
                <span
                  className="text-[#3fb364] text-[22px] font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.number}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-[#d8d0c0]" />
              )}
              <h3
                className="text-[#08271B] text-[19px] font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.title}
              </h3>
              <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/#get-pre-approved"
            className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200"
          >
            Start Your Journey Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeownershipSteps;
