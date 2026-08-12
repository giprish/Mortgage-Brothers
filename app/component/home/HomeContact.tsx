import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const HomeContact = () => {
  return (
    <section id="contact" className="w-full bg-[#fcf9f3] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 border-t border-[#e8e0d0]/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info Column — static, server-rendered */}
          <div className="lg:col-span-2">
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
              Fill out the form below, and one of our mortgage experts will get back to you
              shortly.
            </p>
            <p className="text-[#4e5b4e] text-[15px] leading-[1.75] mb-8">
              We&apos;re committed to providing personalized solutions for your unique situation,
              whether you&apos;re a first-time homebuyer in Phoenix or looking to refinance in
              Scottsdale.
            </p>

            <div className="flex flex-col gap-5">
              <a href="tel:+16025352171" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#5f6f54] text-[11.5px] font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-[#08271B] group-hover:text-[#3fb364] text-[15px] font-semibold transition-colors duration-200">
                    +1 (602) 535-2171
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#5f6f54] text-[11.5px] font-semibold uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-[#08271B] text-[15px] font-medium leading-snug">
                    1599 East Orangewood Ave Suite 200<br />
                    Phoenix, AZ 85020
                  </p>
                </div>
              </div>

              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 text-[#2d8545] hover:text-[#246d39] font-semibold text-[14.5px] transition-colors duration-200 w-fit mt-1 min-h-[44px] py-2"
              >
                Visit Contact Page
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Form Column — client-rendered leaf */}
          <div className="lg:col-span-3 bg-white border border-[#e8e0d0]/70 rounded-3xl p-7 sm:p-9 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;