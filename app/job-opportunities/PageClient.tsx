"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";
import CareerApplicationPath from "../component/CareerApplicationPath";
import { careerContactParagraphsWithEddie, CAREER_FORM_CTA } from "@/lib/careerContactCopy";
import { renderGetInTouchText } from "@/lib/renderInlineLinks";
import LoanProgramHero from "../component/LoanProgramHero";
import StatsBanner from "../component/StatsBanner";
import { COMPANY } from "@/lib/company";

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
    title: "Mortgage Broker Loan Officer/Originator",
    text: "Guide clients through the mortgage process, analyze financial situations, and recommend suitable loan products. Build relationships with real estate professionals and financial advisors.",
    href: "/mortgage-broker-loan-officer-originator/",
  },
  {
    title: "Reverse Mortgage Loan Officer – with Experience",
    text: "Specialize in reverse mortgages for seniors, educating clients on this unique financial tool. Conduct in-depth financial assessments and guide applicants through the reverse mortgage process.",
    href: "/reverse-mortgage-loan-officer/",
  },
  {
    title: "Mortgage Processor – Entry Level With OR Without Experience",
    text: "Manage loan application pipelines, verify documentation, and ensure smooth progression of loans through the approval process. Great opportunity to start your career in the mortgage industry.",
    href: "/mortgage-processor/",
  },
  {
    title: "Loan Officer Assistant – Entry Level, No Experience",
    text: "Support loan officers in client communication, document collection, and basic loan file preparation. Ideal for those looking to enter the mortgage industry and learn from experienced professionals.",
    href: "/loan-officer-assistant/",
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
    a: "We offer flexible work arrangements for many positions, including hybrid and remote options, depending on the role and individual circumstances. Our team is always ready to provide more information and support your career journey. Whether you have specific questions about a role, want to learn more about our company culture, or need guidance on the application process, we're just a click away. Contact our HR team",
  },
];

const stats = [
  { value: "$86k", label: "Avg. Broker Salary" },
  { value: "258", label: "Avg. Broker Openings" },
  { value: "~0.6%", label: "AZ Job Growth" },
  { value: "~4.9%", label: "AZ Unemployment" },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function JobOpportunitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        <LoanProgramHero
          title="Mortgage Job Opportunities in Arizona"
          subtitle="Join Our Team and Build a Rewarding Career in Mortgage Lending"
          ctaLabel="View Open Positions"
          ctaHref="#open-positions"
          note=""
        />

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Build a Rewarding Mortgage Career with Growth Opportunities",
              "Join Arizona's Leading Team in Mortgage Lending Success",
              "Competitive Pay, Career Growth, and Impactful Work in Arizona",
            ].map((title) => (
              <div key={title} className="flex items-center gap-3">
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
                  <h3 className="text-[#08271B] text-[18px] font-bold mb-3 flex items-center gap-2">
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
        <StatsBanner stats={stats} />

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
                    href={job.href}
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

        <CareerApplicationPath variant="beige" ctaHref="/contact-us/" />

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
              <a
                href="#contact-us-form"
                data-contact="true"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all cursor-pointer"
              >
                Contact our HR team
              </a>
            </div>
          </div>
        </section>

        <GetInTouch
          theme="light"
          title="Contact Us: Let's Start Your Mortgage Career Journey"
          paragraphs={careerContactParagraphsWithEddie(COMPANY.phoneDisplay)}
          renderParagraph={renderGetInTouchText}
          showDivider
          showPreApproveCta
          ctaHref={CAREER_FORM_CTA.href}
          ctaLabel={CAREER_FORM_CTA.label}
        />
      </main>

      <Footer />
    </div>
  );
}