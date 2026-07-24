"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const JOB_FORM_SRC = "https://form.jotform.com/250414406228146";

const featureStrip = [
  "Build a Rewarding Mortgage Career with Growth Opportunities",
  "Join Arizona’s Leading Team in Mortgage Lending Success",
  "Competitive Pay, Career Growth, and Impactful Work in Arizona",
];

const responsibilities = [
  "Primary contact between clients and Loan Originators. Responds to borrower’s general questions regarding policy and procedures.",
  "Submit complete loan applications for each customer file",
  "Your responsibility is to make sure that you have completed the upfront due diligence on every loan to assure that the income, assets, fit underwriting guidelines. Our team of processors will take care of the rest.",
  "Run Automated Underwriting and submitting files to processing team.",
  "Updates customers, real estate agents, and title companies on the loans progress",
  "Comply with Company policy and procedures to ensure all files are complete.",
  "Attend branch/team meetings.",
  "Comply with applicable state and federal compliance guidelines",
];

const commitments = [
  "You’ll be treated like family. You will never be a number. Everyone here will help you achieve your production goals, whether it is navigating the loan operating system, wholesale banks, product guidelines, etc.",
  "Our processing is second to none. We built our processing system from the ground up. Our processors are committed to keeping you focused on originating loans and not tracking down documents. Our processing is committed to closing EVERY file on time (or early), and to deliver exceptional communication to the clients, realtors, title companies, etc.",
];

const qualifications = [
  "Self Motivated",
  "Reliable",
  "Trustworthy",
  "Work with High Integrity",
  "Positive Attitude",
  "Responsive",
  "Proficient with computer navigation, browsing, Microsoft Office (especially Word, Excel, Outlook)",
  "Strong organizational skills and attention to detail",
  "Ability to prioritize and meet deadlines under minimal supervision",
  "Strong verbal and written communication skills",
  "Ability to be trained and work under minimal supervision",
];

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

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function MortgageBrokerLoanOfficerPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative w-full text-white min-h-[520px] lg:min-h-[640px] xl:min-h-[690px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/mortgage-broker-loan-officer.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[760px]">
              <h1 className="text-white text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] mb-5 tracking-tight">
                Mortgage Broker Loan Officer / Originator
              </h1>
              <h2 className="text-white text-[17px] sm:text-[22px] lg:text-[26px] font-normal leading-[1.35] mb-8 max-w-[640px]">
                Shape Futures, Build Dreams: Become a Key Player in Arizona&apos;s Mortgage Industry
              </h2>
              <a
                href="#Job-Description"
                className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] lg:text-[18px] font-semibold pl-7 pr-5 py-3 rounded-full transition-all shadow-lg"
              >
                View Job Description
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
            {featureStrip.map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="w-full bg-white py-12 lg:py-14 border-b border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto px-6 space-y-5 text-[#4e5b4e] text-[15.5px] leading-[1.8]">
            <p>
              Before you read any further, this is a 100% commissioned position. You must be an
              experienced (2 years minimum) loan originator with your own book of business in Arizona who
              is looking for a very reputable Mortgage Broker to work for. We are licensed only in the
              great state of Arizona.
            </p>
            <p>
              Work alongside experienced mortgage broker loan officers on the Mortgage Brothers team in
              Phoenix, AZ. We have always been a 100% Mortgage Broker company. We are a small (15
              employees) family-owned business. We believe in the Mortgage Broker business model and love
              the flexibility, low interest rates, and low costs that we give to our clients. We are
              ‘lifers’ in this business who are committed to making a great living for the long haul of
              our careers. Our excellent reputation with our customers, realtors, and wholesale banks give
              us so many advantages that other mortgage companies don’t have. Our office is located in
              Central Phoenix, right at 16th Street and Orangewood.
            </p>
          </div>
        </section>

        {/* Job description */}
        <section id="Job-Description" className="w-full py-16 lg:py-24 scroll-mt-[90px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Job Description
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-start gap-2">
                  <CheckIcon />
                  <span>Responsibilities</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-start gap-2">
                  <CheckIcon />
                  <span>Our Commitment to You</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {commitments.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-start gap-2">
                  <CheckIcon />
                  <span>Qualifications</span>
                </h3>
                <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-3 pl-7">
                  You will essentially be your own boss, but the expectation is that you will be:
                </p>
                <ul className="space-y-2.5 pl-7">
                  {qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#Get-in-Touch"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
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
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm"
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

        {/* Application path */}
        <section className="w-full py-16 lg:py-24">
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
                when you apply to become part of our dynamic team:
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
              <a
                href="#Get-in-Touch"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </section>

        {/* Contact + application form */}
        <section
          id="Get-in-Touch"
          className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50 scroll-mt-[90px]"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-[14.5px] text-[#08271B]">
                <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                  Phone +1 602-535-2171
                </a>
                <span className="hidden sm:inline text-[#c8c8b8]">|</span>
                <span className="text-center">
                  Address 1599 East Orangewood Ave Suite 200 Phoenix, AZ 85020
                </span>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 min-h-[400px]">
                  <div className="w-10 h-10 border-[3px] border-[#3fb364]/25 border-t-[#3fb364] rounded-full animate-spin" />
                  <p className="text-[#4e5b4e] text-[14px] font-medium">Loading application form…</p>
                </div>
              )}
              <iframe
                src={JOB_FORM_SRC}
                title="Mortgage Broker Loan Officer Application"
                className="w-full border-0"
                style={{ minHeight: "640px", height: "720px" }}
                onLoad={() => setIsLoading(false)}
                allow="clipboard-write"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
