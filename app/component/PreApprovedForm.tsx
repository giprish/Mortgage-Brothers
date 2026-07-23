"use client";

import React from "react";
import { usePreApprovalModal } from "./PreApprovalProvider";

/**
 * Homepage pre-approval section. Does NOT load JotForm on page load.
 * Opens the deferred JotForm modal only after an intentional click.
 */
const PreApprovedForm = () => {
  const { open } = usePreApprovalModal();

  return (
    <section
      id="get-pre-approved"
      className="w-full bg-[#fcf9f3] py-16 lg:py-24 border-t border-[#e8e0d0]/40 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
          SECURE APPLICATION
        </p>
        <h2
          className="text-[#08271B] text-[32px] lg:text-[42px] font-normal leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Start Your Pre-Approval
        </h2>
        <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
          Ready when you are. Complete a short, secure application in about three minutes with no
          credit impact and no obligation.
        </p>

        <button
          type="button"
          onClick={open}
          className="inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3fb364]/20 cursor-pointer"
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
            aria-hidden
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[13.5px] text-[#4e5b4e]">
          <li className="flex items-center gap-2">
            <span className="text-[#3fb364] font-bold">✓</span>
            About 3 minutes
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#3fb364] font-bold">✓</span>
            No credit impact to start
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#3fb364] font-bold">✓</span>
            No cost, no obligation
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PreApprovedForm;
