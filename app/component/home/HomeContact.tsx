"use client";

import React, { useState } from "react";
import Link from "next/link";

const CONTACT_EMAIL = "info@azmortgagebrothers.com";

const HomeContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Website Inquiry from " + (form.name || "a visitor"));
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    setSubmitted(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="Get-in-Touch" className="w-full bg-[#fcf9f3] py-20 lg:py-28 border-t border-[#e8e0d0]/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info Column */}
          <div className="lg:col-span-2">
            <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
              Contact Us
            </p>
            <h2
              className="text-[#08271B] text-[30px] lg:text-[36px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch with The Mortgage Brothers
            </h2>
            <p className="text-[#4e5b4e] text-[15px] leading-[1.75] mb-8">
              Have questions or need assistance? Our team is here to help you navigate your
              mortgage journey. We&apos;re committed to providing personalized solutions for your
              unique situation, whether you&apos;re a first-time homebuyer in Phoenix or looking
              to refinance in Scottsdale.
            </p>

            <div className="flex flex-col gap-5">
              <a href="tel:+16025352171" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#8a9a7a] text-[11.5px] font-semibold uppercase tracking-wider mb-0.5">Phone</p>
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
                  <p className="text-[#8a9a7a] text-[11.5px] font-semibold uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-[#08271B] text-[15px] font-medium leading-snug">
                    1599 East Orangewood Ave Suite 200
                    <br />
                    Phoenix, AZ 85020
                  </p>
                </div>
              </div>

              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 text-[#3fb364] hover:text-[#2d8545] font-semibold text-[14.5px] transition-colors duration-200 w-fit mt-1"
              >
                Visit Contact Page
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3 bg-white border border-[#e8e0d0]/70 rounded-3xl p-7 sm:p-9 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-10">
                <div className="w-14 h-14 rounded-full bg-[#3fb364]/10 flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[#08271B] text-[19px] font-semibold mb-2">Thanks for reaching out!</h3>
                <p className="text-[#4e5b4e] text-[14px] max-w-xs">
                  Your email app should now be open. If it didn&apos;t, email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#3fb364] font-semibold">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full h-[46px] px-3.5 rounded-lg border border-[#e0d8c8] text-[14.5px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full h-[46px] px-3.5 rounded-lg border border-[#e0d8c8] text-[14.5px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                      placeholder="(602) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-[46px] px-3.5 rounded-lg border border-[#e0d8c8] text-[14.5px] text-[#08271B] focus:outline-none focus:border-[#3fb364]"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#3a443a] text-[13.5px] font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-lg border border-[#e0d8c8] text-[14.5px] text-[#08271B] focus:outline-none focus:border-[#3fb364] resize-none"
                    placeholder="Tell us about your mortgage goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer mt-1"
                >
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
