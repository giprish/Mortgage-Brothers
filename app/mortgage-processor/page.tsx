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

const overview = [
  "This person would have a high school diploma and could have college experience but it is not a requirement.",
  "The candidate would be responsible to process loans from right after the loan application is completed to the day the loan closes.",
  "They would be responsible for gathering/reviewing personal financial documents and bank statements, working with title and insurance companies requesting title and insurance fees, preparing documents for borrowers to sign via docusign, submitted loan packages to underwriters, reviewing conditions provided by underwriters and working with borrowers on submitting documentation and letters of explanation for particular aspects of the borrowers files needing to be explained, and finally making sure the loan receives final approval and the loan closes on time!",
  "This person would have excellent communication skills, and likely be considered detailed, organized, thorough, love numbers, ability to multi-task, observant, always positive attitude, and find great satisfaction in closing files on time. The loan business is not a super complicated business it is just very detailed and process heavy!",
];

const requirements = [
  "Positive Attitude is # 1.",
  "Must be able to make daily phone calls to clients and communicate effectively while delivering exceptional customer service.",
  "Must be Very Proficient with computer navigation, browsing, Microsoft Office (especially Word, Excel, Outlook).",
  "Strong organizational skills and attention to detail.",
  "Ability to prioritize, meet deadlines under minimal supervision.",
  "Available to work varying hours and overtime as needed.",
  "Strong sense of urgency and responsiveness along with the ability to demonstrate professionalism.",
  "Strong verbal and written communication skills.",
  "Ability to be trained and to work under minimal supervision, dependable and self-motivated.",
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

export default function MortgageProcessorPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
       <section
  className="relative w-full text-white min-h-[520px] lg:min-h-[640px] xl:min-h-[690px] flex items-center overflow-hidden bg-no-repeat"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/mortgage-processor.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "left top, center top",
    backgroundRepeat: "no-repeat",
  }}
>
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[760px]">
              <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[58px] font-bold leading-[1.08] mb-5 tracking-tight">
                Mortgage Processor
              </h1>
              <h2 className="text-white text-[17px] sm:text-[22px] lg:text-[26px] font-normal leading-[1.35] mb-8 max-w-[640px]">
                Start Your Mortgage Career: Support Clients and Build Your Future in the Industry
              </h2>
              <a
                href="#Job-Description"
                className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] font-semibold pl-7 pr-5 py-3 rounded-full transition-all shadow-lg"
              >
                View Job Description
              </a>
            </div>
          </div>
        </section>

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

        <section id="Job-Description" className="w-full py-16 lg:py-24 scroll-mt-[90px]">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Job Description: Mortgage Processor
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                The Mortgage Brothers Team is looking to add someone to the team to help with processing
                loans (Entry Level With OR Without Experience). You must be local and be able to work in
                our Phoenix, AZ office.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-start gap-2">
                  <CheckIcon />
                  <span>Mortgage Processor: Job Overview</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {overview.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2 text-[#4e5b4e] text-[14.5px] leading-relaxed">
                      <span className="text-[#3fb364] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 lg:p-7 shadow-sm">
                <h3 className="text-[#08271B] text-[18px] font-bold mb-4 flex items-start gap-2">
                  <CheckIcon />
                  <span>Mortgage Processor: Requirements</span>
                </h3>
                <ul className="space-y-2.5 pl-7">
                  {requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4e5b4e] text-[14.5px] leading-relaxed">
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

        <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Work With Us?
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
                The Mortgage Brothers Team is a leading mortgage lender in Arizona, dedicated to helping
                families achieve their homeownership dreams. Our mission is to simplify the mortgage
                process while providing unparalleled service to our clients and rewarding careers for our
                team members.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {whyCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
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

        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Path to Joining Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {pathSteps.map((step, i) => (
                <div key={step.title} className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm">
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

        <section id="Get-in-Touch" className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50 scroll-mt-[90px]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us: Let&apos;s Start Your Mortgage Career Journey
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
                We&apos;re excited about the possibility of you joining The Mortgage Brothers Team. Reach
                out today and take the first step towards a rewarding career in mortgage lending.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-[14.5px] text-[#08271B]">
                <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                  Phone +1 602-535-2171
                </a>
                <span className="hidden sm:inline text-[#c8c8b8]">|</span>
                <span className="text-center">Address 1599 East Orangewood Ave Suite 200 Phoenix, AZ 85020</span>
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
                title="Mortgage Processor Application"
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
