import React from "react";
import { COMPANY } from "@/lib/company";

/**
 * Homepage contact CTA. Opens the same full-screen JotForm modal as Pre-Approval
 * (via data-contact + sitewide click interceptor). No script on page load.
 */
const HomeContact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#fcf9f3] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 border-t border-[#e8e0d0]/40 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6b5420] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
            Contact Us
          </p>
          <h2 className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-5">
            Get in Touch with The Mortgage Brothers
          </h2>
          <p className="text-[#4e5b4e] text-[15px] leading-[1.75] mb-4">
            Have questions or need assistance? Our team is here to help you navigate your
            mortgage journey.
          </p>
          <p className="text-[#4e5b4e] text-[15px] leading-[1.75] mb-4">
            Reach out below, and one of our mortgage experts will get back to you shortly.
          </p>
          <p className="text-[#4e5b4e] text-[15px] leading-[1.75] mb-8">
            We&apos;re committed to providing personalized solutions for your unique situation,
            whether you&apos;re a first-time homebuyer in Phoenix or looking to refinance in
            Scottsdale.
          </p>

          <button
            type="button"
            data-contact="true"
            className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
          >
            Contact Us →
          </button>

          <p className="mt-8 text-[#5f6f54] text-[13px]">
            Or call{" "}
            <a
              href={COMPANY.phoneHref}
              className="text-[#08271B] font-semibold hover:text-[#3fb364] transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
