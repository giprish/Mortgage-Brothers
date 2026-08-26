import React from "react";
import { COMPANY } from "@/lib/company";

/**
 * Homepage Get in Touch — copy and contact rows matched to live homepage.
 * Contact opens the sitewide JotForm modal via #contact-us-form / data-contact.
 */
const HomeContact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 border-t border-[#e8e0d0]/40 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <h2 className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-5">
          Get in Touch with The Mortgage Brothers
        </h2>

        <p className="text-[#4e5b4e] text-[15px] sm:text-[16px] leading-[1.75] max-w-3xl mx-auto mb-5">
          Have questions or need assistance? Our team is here to help you navigate your
          mortgage journey.
        </p>

        <div
          className="mx-auto h-0.5 w-12 rounded-full bg-[#3fb364] mb-5"
          aria-hidden
        />

        <p className="text-[#4e5b4e] text-[15px] sm:text-[16px] leading-[1.75] max-w-3xl mx-auto mb-4">
          Fill out the form below, and one of our mortgage experts will get back to you
          shortly.
        </p>

        <p className="text-[#4e5b4e] text-[15px] sm:text-[16px] leading-[1.75] max-w-3xl mx-auto mb-10">
          We&apos;re committed to providing personalized solutions for your unique situation,
          whether you&apos;re a first-time homebuyer in Phoenix or looking to refinance in
          Scottsdale.
        </p>

        {/* Canonical order: Phone → Address → Contact (never reorder for live parity) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full md:items-start text-left">
          <a
            href={COMPANY.phoneHref}
            aria-label={`Call ${COMPANY.phoneDisplay}`}
            className="flex items-start gap-3 min-w-0 w-full bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-xl px-5 py-4 shadow-sm hover:border-[#3fb364]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 min-h-11"
          >
            <span className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13px] text-[#3fb364] uppercase tracking-wider font-bold mb-1">
                Phone
              </p>
              <p className="text-[#052316] text-[14px] sm:text-[15px] leading-relaxed">
                {COMPANY.phoneDisplay}
              </p>
            </div>
          </a>

          <a
            href={COMPANY.addressMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open map for ${COMPANY.addressFull}`}
            className="flex items-start gap-3 min-w-0 w-full bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-xl px-5 py-4 shadow-sm hover:border-[#3fb364]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 min-h-11"
          >
            <span className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13px] text-[#3fb364] uppercase tracking-wider font-bold mb-1">
                Address
              </p>
              <p className="text-[#052316] text-[14px] sm:text-[15px] leading-relaxed">
                {COMPANY.addressLine1}
                <br />
                {COMPANY.addressLine2}
              </p>
            </div>
          </a>

          <a
            href="#contact-us-form"
            data-contact="true"
            aria-label="Open contact form"
            className="flex items-start gap-3 min-w-0 w-full text-left bg-[#fcf9f3] border border-[#e8e0d0]/70 rounded-xl px-5 py-4 shadow-sm hover:border-[#3fb364]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 min-h-11 cursor-pointer"
          >
            <span className="mt-0.5 flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3fb364] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13px] text-[#3fb364] uppercase tracking-wider font-bold mb-1">
                Contact
              </p>
              <p className="text-[#052316] text-[14px] sm:text-[15px] leading-relaxed">
                Contact Us
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
