"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const whyCards = [
  {
    title: "Career Growth",
    text: "Embark on a dynamic career path with our comprehensive training programs and mentorship opportunities. We provide clear advancement tracks, allowing you to progress from entry-level positions to leadership roles based on your performance and ambition.",
  },
  {
    title: "Supportive Culture",
    text: "Join a collaborative team that values innovation and mutual support. Our open-door policy encourages idea-sharing, while regular team-building events foster strong relationships among colleagues.",
  },
  {
    title: "Competitive Compensation",
    text: "Enjoy a rewarding financial package that recognizes your contributions. We offer competitive base salaries, performance-based bonuses, and a generous commission structure for loan officers, ensuring your hard work directly translates to your earnings.",
  },
  {
    title: "Work-Life Balance",
    text: "Achieve harmony between your professional and personal life with our flexible scheduling options. We understand the importance of family and personal time, offering remote work possibilities and paid time off to help you recharge and stay productive.",
  },
];

const positions = [
  {
    title: "Mortgage Broker Loan Officer",
    text: "Guide clients through the mortgage process, analyze financial situations, and recommend suitable loan products. Build relationships with real estate professionals and financial advisors.",
  },
  {
    title: "Reverse Mortgage Loan Officer",
    text: "Specialize in reverse mortgages for seniors, educating clients on this unique financial tool. Conduct in-depth financial assessments and guide applicants through the reverse mortgage process.",
  },
  {
    title: "Mortgage Processor",
    text: "Manage loan application pipelines, verify documentation, and ensure smooth progression of loans through the approval process. Great opportunity to start your career in the mortgage industry.",
  },
  {
    title: "Loan Officer Assistant",
    text: "Support loan officers in client communication, document collection, and basic loan file preparation. Ideal for those looking to enter the mortgage industry and learn from experienced professionals.",
  },
];

const pathSteps = [
  {
    title: "Submit Your Application",
    items: [
      "Complete our online application form",
      "Upload your resume and cover letter",
      "Provide any additional requested documents",
    ],
  },
  {
    title: "Initial Screening",
    items: [
      "HR team reviews your application",
      "Selected candidates receive a phone interview invitation",
      "Brief discussion about your background and career goals",
    ],
  },
  {
    title: "In-Person or Video Interview",
    items: [
      "Meet with the hiring manager and team members",
      "Discuss your experience and skills in detail",
      "Learn more about the role and our company culture",
    ],
  },
  {
    title: "Skills Assessment",
    items: [
      "Complete a job-specific task or test",
      "Showcase your abilities relevant to the position",
      "Demonstrate your problem-solving skills",
    ],
  },
  {
    title: "Final Interview",
    items: [
      "Meet with senior leadership team",
      "Discuss your long-term career aspirations",
      "Address any remaining questions or concerns",
    ],
  },
  {
    title: "Offer and Onboarding",
    items: [
      "Receive and review your offer letter",
      "Complete background check and necessary paperwork",
      "Begin your comprehensive onboarding process",
    ],
  },
];

const faqs = [
  {
    q: "What qualifications do I need to work as a Loan Officer?",
    a: "Typically, you'll need a high school diploma or equivalent, strong communication skills, and the ability to pass the NMLS exam. Experience in sales or finance is beneficial but not always required.",
  },
  {
    q: "Do you offer training for new employees?",
    a: "Yes, we provide comprehensive training programs for all new hires, regardless of their experience level. Our goal is to set every team member up for success.",
  },
  {
    q: "What's the work culture like at The Mortgage Brothers Team?",
    a: "We foster a collaborative, supportive environment that encourages innovation and personal growth. Our team values work-life balance and celebrates diversity.",
  },
  {
    q: "Are there opportunities for career advancement?",
    a: "Absolutely. We believe in promoting from within and offer clear career paths for ambitious individuals who demonstrate skills and dedication.",
  },
  {
    q: "What benefits do you offer?",
    a: "Our benefits package includes health insurance, 401(k) with company match, paid time off, and professional development opportunities. Specific benefits may vary by position.",
  },
  {
    q: "Is remote work an option?",
    a: "We offer flexible work arrangements for many positions, including hybrid and remote options, depending on the role and individual circumstances.",
  },
];

const stats = [
  { value: "$86k", label: "Avg. Broker Salary" },
  { value: "258", label: "Avg. Broker Openings" },
  { value: "1.7%", label: "AZ Job Growth" },
  { value: "3.8%", label: "AZ Unemployment" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function JobOpportunitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative w-full text-white min-h-[520px] lg:min-h-[640px] xl:min-h-[670px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/job-opportunities.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[680px]">
              <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[58px] xl:text-[64px] font-bold leading-[1.08] mb-5 tracking-tight">
                Mortgage Job Opportunities in Arizona
              </h1>
              <h2 className="text-white text-[17px] sm:text-[22px] lg:text-[28px] font-normal leading-[1.35] mb-8 max-w-[560px]">
                Join Our Team and Build a Rewarding Career in Mortgage Lending
              </h2>
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] lg:text-[18px] font-semibold pl-7 pr-5 py-3 rounded-full transition-all shadow-lg"
              >
                View Open Positions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Build a Rewarding Mortgage Career with Growth Opportunities",
              "Join Arizona's Leading Team in Mortgage Lending Success",
              "Competitive Pay, Career Growth, and Impactful Work in Arizona",
            ].map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why work with us */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Work With Us?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
                The Mortgage Brothers Team is a leading mortgage lender in Arizona, dedicated to helping
                families achieve their homeownership dreams.
              </p>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                Our mission is to simplify the mortgage process while providing unparalleled service to
                our clients and rewarding careers for our team members.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-[#08271B] text-[18px] font-bold mb-3 flex items-start gap-2">
                    <CheckIcon />
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed pl-7">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#08271B] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-[#3fb364] text-[32px] lg:text-[40px] font-bold leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#c8c8b8] text-[13.5px] font-medium leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open positions */}
        <section id="open-positions" className="w-full py-16 lg:py-24 scroll-mt-[90px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Explore Exciting Mortgage Job Opportunities
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                At The Mortgage Brothers Team, we&apos;re always on the lookout for talented individuals
                passionate about helping Arizona families achieve their homeownership dreams. Explore our
                current openings and find your perfect fit:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {positions.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm hover:border-[#3fb364]/40 hover:shadow-lg transition-all"
                >
                  <h3 className="text-[#3fb364] text-[19px] font-bold mb-3">{job.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-5">{job.text}</p>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-1.5 text-[#08271B] hover:text-[#3fb364] font-semibold text-[14px] transition-colors"
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application path */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Path to Joining Our Team
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                Joining The Mortgage Brothers Team is an exciting journey, and we&apos;re committed to
                making the process as smooth and transparent as possible. Here&apos;s what you can expect
                when you apply:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {pathSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[16px] flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#08271B] text-[17px] font-bold mb-3">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                        <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                We understand you may have questions about working with us. Here are answers to some of
                the most common inquiries we receive from potential team members.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      aria-expanded={open}
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`text-[#3fb364] text-[22px] font-light shrink-0 transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Contact our HR team
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us: Let&apos;s Start Your Mortgage Career Journey
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              We&apos;re excited about the possibility of you joining The Mortgage Brothers Team. Whether
              you&apos;re ready to apply, have questions about our open positions, or simply want to learn
              more about building a career in the mortgage industry, we&apos;re here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>

            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Reach Out Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
