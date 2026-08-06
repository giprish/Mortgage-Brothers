"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import PreApprovedForm from "../component/PreApprovedForm";

const faqItems = [
  {
    q: "Who are the AZ Mortgage Brothers?",
    a: "We're Eddie and Tom Knoell, third-generation Phoenix natives with over 22 years of experience in the Arizona mortgage industry. We founded AZ Mortgage Brothers to provide personalized, expert mortgage solutions to our fellow Arizonans.",
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a wide range of loan products, including conventional, FHA, VA, Jumbo loans, and Refinancing options. Our extensive lender network allows us to find the best fit for your unique situation.",
  },
  {
    q: "How long does the mortgage process typically take?",
    a: "While every situation is unique, we generally aim to close loans within 30 days. Our efficient processes and digital tools help streamline the experience, keeping you informed every step of the way.",
  },
  {
    q: "What sets AZ Mortgage Brothers apart from other brokers?",
    a: "Our deep local roots, veteran-led team, and commitment to transparency set us apart. We combine cutting-edge technology with personalized service to ensure you get the best rates and a smooth, stress-free experience.",
  },
  {
    q: "Do you work with first-time homebuyers?",
    a: "Absolutely! We specialize in guiding first-time buyers through the process, offering educational resources and patient support to help you make informed decisions.",
  },
  {
    q: "How can I get started with AZ Mortgage Brothers?",
    a: "It's easy! You can call us directly at (602) 535-2171 or fill out our quick online form for a free consultation. We'll then match you with an expert loan officer to discuss your needs and options.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="h-[64px] sm:h-[72px] bg-[#08271B]" aria-hidden />

        <section className="w-full bg-brand-green-deep text-white py-10 sm:py-12 lg:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Badge */}
            <p className="text-brand-green-accent text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
              ABOUT US
            </p>

            {/* Title */}
            <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] mb-6">
              Your Phoenix Arizona Mortgage Team
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[16px] lg:text-[18px] leading-[1.7] max-w-2xl mx-auto">
              {"We've helped 2,300+ families secure $650M in loans with 98% satisfaction."}
            </p>

            {/* Hero Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {["Third-Generation Arizonans", "Comprehensive Loan Expertise", "Local Family Business"].map((badge) => (
                <span key={badge} className="text-[11px] font-semibold tracking-wide text-white px-4 py-2 rounded-full bg-white/10 border border-white/15">
                  {badge}
                </span>
              ))}
            </div>

            {/* Hero CTA */}
            <div className="flex flex-col items-center mt-8">
              <Link
                href="/#get-pre-approved"
                data-preapproval="true"
                className="btn-primary w-full sm:w-auto"
              >
                Start my preapproval →
              </Link>
              <p className="text-[#8a9a7a] text-[12px] font-medium mt-3">
                3 min · no credit impact
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 flex flex-col items-start w-full">
                <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  OUR STORY
                </span>
                <h2 className="text-brand-green-deep text-section-title font-playfair font-normal mb-6 leading-tight">
                  70+ years in Phoenix real estate, and we still answer our own phone.
                </h2>
                <div className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] flex flex-col gap-6">
                  <p>
                    {"Mortgage Brothers started with a simple idea: banks shouldn't be the only ones deciding what's best for you. As independent brokers, we shop your loan across dozens of lenders so the competition works in your favor."}
                  </p>
                  <p>
                    {"We're licensed across Arizona, but our roots are in the Valley — and that local knowledge shows up in every file we handle."}
                  </p>
                </div>
              </div>

              {/* Right Column: Stats Block */}
              <div className="lg:col-span-5 w-full flex flex-col gap-4">
                {/* Big Stat Box */}
                <div className="bg-brand-green-deep text-white rounded-2xl p-7 border border-white/5 shadow-lg">
                  <span className="block text-[36px] lg:text-[42px] font-bold tracking-tight leading-none mb-1 text-white">
                    2,300+
                  </span>
                  <span className="text-brand-text-light text-[12px] font-medium tracking-wide uppercase">
                    Arizona families helped home
                  </span>
                </div>

                {/* Grid of 2 Smaller Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Reviews Card */}
                  <div className="bg-brand-cream-light rounded-2xl p-5 border border-[#e8e0d0]/40 shadow-sm flex flex-col">
                    <span className="text-brand-green-deep text-[22px] lg:text-[26px] font-bold leading-tight mb-1">
                      4.9/5
                    </span>
                    <span className="text-brand-text-muted text-[11px] font-semibold tracking-wide uppercase leading-tight">
                      Client rating
                    </span>
                  </div>

                  {/* Satisfaction Card */}
                  <div className="bg-brand-cream-light rounded-2xl p-5 border border-[#e8e0d0]/40 shadow-sm flex flex-col">
                    <span className="text-brand-green-deep text-[22px] lg:text-[26px] font-bold leading-tight mb-1">
                      $650M
                    </span>
                    <span className="text-brand-text-muted text-[11px] font-semibold tracking-wide uppercase leading-tight">
                      in loans funded
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="w-full py-16 lg:py-24 bg-brand-cream-light border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                WHY US
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                Why Choose AZ Mortgage Brothers?
              </h2>
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Advice */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Local Expertise
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  With over 22 years of average experience, our team knows the Arizona market inside and out. We leverage this knowledge to find you the best loan options tailored to local conditions.
                </p>
              </div>

              {/* Lender Network */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Extensive Lender Network
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  Our partnerships with 50+ lenders allow us to offer you competitive rates and diverse loan products. We shop around so you don&apos;t have to.
                </p>
              </div>

              {/* Transparent Process */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Transparent Process
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  We believe in clear communication and no surprises. Our &ldquo;no surprises&rdquo; closing guarantee ensures you&apos;re informed every step of the way.
                </p>
              </div>

              {/* Award-Winning Service */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Award-Winning Service
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  Our commitment to excellence has earned us a 4.9/5 average client rating and recognition as the 2024 Arizona Business &ldquo;Best Mortgage Broker.&rdquo;
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Personalized Approach + Mortgage Options Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                PERSONALIZED APPROACH
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                We&apos;re not just brokers; we&apos;re your financial partners.
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mt-4">
                Our team takes the time to understand your unique situation and goals, crafting tailored solutions that fit your needs.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "22+", label: "Years of Experience" },
                { num: "4.9/5", label: "Client Rating" },
                { num: "2,300+", label: "Loans Funded" },
                { num: "2,300+", label: "Families Helped" },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-cream-light rounded-2xl p-6 text-center border border-[#e8e0d0]/40 shadow-sm">
                  <span className="block text-[32px] lg:text-[38px] font-bold tracking-tight text-brand-green-deep leading-none mb-2">
                    {stat.num}
                  </span>
                  <span className="text-brand-text-muted text-[11px] font-semibold tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rebuilt Large Cover Banner Section */}
        <section className="w-full bg-[#fcf9f3] py-12 border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="relative h-[320px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#e8e0d0]/50 group">
              <Image
                src="/az-mortgage-brothers.jpg"
                alt="Arizona Mortgage Brothers - Eddie & Thomas Knoell"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                sizes="(max-w-1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <p className="text-brand-green-accent text-[12px] font-bold tracking-[0.15em] uppercase mb-2">
                  THE MORTGAGE BROTHERS
                </p>
                <h3 className="text-white text-[24px] md:text-[32px] font-playfair font-normal leading-tight max-w-xl">
                  Eddie Knoell & Thomas Knoell
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* The Brothers Profile Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                THE BROTHERS
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                Meet Your Mortgage Advocates
              </h2>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Eddie Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* High-res Image Avatar */}
                    <div className="relative w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm">
                      <Image
                        src="/home/eddie-knoell.jpg"
                        alt="Eddie Knoell"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Eddie Knoell
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Senior Loan Officer / Owner · NMLS #210917
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    Eddie is an owner and Vice President of Mortgage Brothers LLC in Phoenix, Arizona and has been serving Arizona Homeowners as a loan officer for over 22 years. Eddie is a 3rd generation native of Phoenix (the Knoell family has been deeply rooted in real estate for over 70 years in the Valley with an excellent reputation for quality). &ldquo;Loan Professional&rdquo;, the true definition of the title can be found in what Eddie Knoell will bring to the table for you and your clients. Personable, Organized, Ethical and overall a true passion for being able to help his clients turn a stressful time into a memorable moment. Eddie has been committed to specialize in residential mortgages for Valley clients from the beginning and has never strayed away from his belief that helping his customers find their way home is the best gift he can give. Eddie graduated with a Bachelor of Arts Degree from Franciscan University of Steubenville Ohio and holds an Arizona Mortgage Loan Originator&rsquo;s license from the Department of Financial Institutions.
                  </p>
                </div>
                
                {/* Phone Contact */}
                <a
                  href="tel:6025352171"
                  className="flex items-center gap-2.5 text-brand-green-deep hover:text-brand-green-accent text-[14px] font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (602) 535-2171
                </a>
              </div>

              {/* Thomas Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* High-res Image Avatar */}
                    <div className="relative w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm">
                      <Image
                        src="/home/thomas-knoell.jpg"
                        alt="Thomas Knoell"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Thomas Knoell
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Senior Loan Officer / Owner · NMLS #1618695
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    Tom is an owner and Vice President of Mortgage Brothers LLC in Phoenix, Arizona. Tom is a 3rd generation native to Phoenix, Arizona with deep family roots in the local market and community. Tom has over 25 years of experience in and around real estate / finance and has been involved in large scale complex projects. Tom understands the need for both vision and plan execution in order to deliver the best product and customer service experience for the client. Tom understands the importance of relationships and works with a high degree of integrity, ethics, and professionalism. Tom graduated with a Bachelor of Arts Degree from Franciscan University of Steubenville Ohio and holds an Arizona Mortgage Loan Originator&rsquo;s license from the Department of Financial Institutions. He is a past member of the Phoenix Men&rsquo;s Art Council, Urban Land Institute and NAIOP, Board of Directors for Great Hearts Veritas Prep Academy.
                  </p>
                </div>

                {/* Phone Contact */}
                <a
                  href="tel:6025352171"
                  className="flex items-center gap-2.5 text-brand-green-deep hover:text-brand-green-accent text-[14px] font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (602) 535-2171
                </a>
              </div>

              {/* Steve Perez Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm flex items-center justify-center">
                      <span className="text-brand-green-deep text-[22px] font-bold font-playfair">SP</span>
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Steve Perez
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Loan Officer · NMLS #2074623
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    If you need a quick pick-me-up and words of encouragement, Steve is your guy! He is incredibly hardworking and dedicated. He always goes the extra mile for our customers. He is a family man and man of deep faith through and through. When customers are working with Steve they will certainly feel like they are a part of the family. Steve is a blessing to all of us.
                  </p>
                </div>
              </div>

              {/* Ann Stoppa Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm flex items-center justify-center">
                      <span className="text-brand-green-deep text-[22px] font-bold font-playfair">AS</span>
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Ann Stoppa
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Loan Officer · NMLS #1816024
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    Ann Stoppa is a dedicated loan officer specializing in Reverse Mortgages. With a passion for customer service and a deep commitment to her clients, Ann goes above and beyond to ensure they receive exceptional care. Her expertise in working with senior borrowers and their families, combined with her drive to understand market trends, makes her an invaluable asset to the AZ Mortgage Brothers team.
                  </p>
                </div>
              </div>

              {/* Macy McLaren Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm flex items-center justify-center">
                      <span className="text-brand-green-deep text-[22px] font-bold font-playfair">MM</span>
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Macy McLaren
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Production Manager · Licensed LO · NMLS #2096310
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    Our devoted production manager is truly a blessing to be with everyday. Macy&rsquo;s efficient work ethic, quick wit and love of life keeps our loan files on schedule and borrowers happy. With all the paperwork involved in the process of acquiring a loan, Macy keeps everything in order and our loans closing without a hitch.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3rd Generation Natives Section */}
        <section className="w-full py-16 lg:py-24 bg-brand-cream-light border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                OUR ROOTS
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                We&apos;re 3rd Generation Natives of Phoenix. Count on Us to Stick Around!
              </h2>
            </div>
            <div className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] flex flex-col gap-6 max-w-4xl mx-auto">
              <p>
                We&apos;re in a day and age when customers demand technology and automation to make life easier. Customer expectation levels for technology to solve complex problems is increasing daily. Our team embraces technology daily, however we understand the reality of getting a mortgage processed through underwriting, approved, and closed on time requires the collaboration of technology and human effort.
              </p>
              <p>
                Eddie and Tom both say &ldquo;Customer service is worth nothing if it lacks quality&rdquo;. This simple philosophy that the Mortgage Brothers have is what separates them from the rest. With exceptional customer service, consistent and accurate answers, Eddie and Tom will always be steadfast when it comes to putting your best interest first! For a true &ldquo;Loan Professional&rdquo; who truly understands and sees the whole picture for you and your family, call the Mortgage Brothers today to experience the difference.
              </p>
              <p>
                All of us were born and raised in Phoenix Arizona. We are now raising our own families here in Phoenix and we are a part of the community. Our work atmosphere is unique and refreshing to our clients. We are always here to answers your questions. You&apos;ll love working with us through your next mortgage for a purchase or a refinance.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm mt-2">
                <p className="text-brand-text-muted text-[14px] leading-[1.7]">
                  <span className="text-brand-green-deep font-semibold">Mortgage Brothers Team specialties:</span> Originating FHA, VA, Conventional, Jumbo loans, and Reverse Mortgages for Purchases &amp; Refinances. Up to 4 unit properties. Fixed Rates or ARMs. Cashout or Rate/Term. Primary residences, Second homes, and Investment properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who are the Mortgage Brothers Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="max-w-4xl mx-auto">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal mb-6">
                Who are the Mortgage Brothers?
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] mb-4">
                Mortgage Brothers is a family-run mortgage brokerage based in Phoenix, Arizona. Everyone in our company is considered family. The company blends local expertise with a personal touch. Their team of professional brokers is dedicated to providing personalized mortgage solutions that meet each client&rsquo;s unique needs.
              </p>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7]">
                Mortgage Brothers holds the broker&rsquo;s license in Arizona (MB0922514) and is registered with the Nationwide Mortgage Licensing System (NMLS #1007154).
              </p>
            </div>
          </div>
        </section>

        {/* YouTube Podcasts Section */}
        <section className="w-full py-16 lg:py-24 bg-brand-cream-light border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                STAY INFORMED
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                Stay Informed with Our YouTube Podcasts
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mt-4">
                At AZ Mortgage Brothers, we&apos;re committed to educating and empowering our clients beyond the mortgage process. That&apos;s why we&apos;ve launched our YouTube channel, where we regularly share valuable insights and expert advice through our engaging podcast series.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              {[
                "In-depth discussions on current mortgage trends",
                "Expert tips for first-time homebuyers",
                "Explanations of complex mortgage terms and processes",
                "Market updates specific to Arizona real estate",
              ].map((item) => (
                <div key={item} className="bg-white rounded-2xl p-5 border border-[#e8e0d0]/40 shadow-sm flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green-accent mt-1.5 flex-shrink-0"></span>
                  <p className="text-brand-text-muted text-[14px] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-brand-text-muted text-[15px] leading-[1.7] max-w-3xl mx-auto mb-8">
              Our YouTube podcasts are designed to keep you informed and confident in your home financing decisions. Whether you&apos;re a first-time buyer, looking to refinance, or interested in investment properties, our channel offers something for everyone.
            </p>
            <div className="text-center">
              <span className="text-brand-green-deep text-[15px] font-semibold">
                Subscribe to @TheMortgageBrothersTeam on YouTube to stay up-to-date with the latest in mortgage news and expert advice, delivered in an easy-to-understand format.
              </span>
            </div>
          </div>
        </section>

         {/* Licensing Badges Footer Strip */}
        <section className="w-full py-8 bg-[#fafafa] border-b border-[#e8e0d0]/20 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-4">
            <span className="text-[11px] font-semibold text-brand-text-muted px-4 py-2 border border-brand-light bg-[#fcfbf9] rounded-full shadow-sm">
              NMLS #1007154
            </span>
            <span className="text-[11px] font-semibold text-brand-text-muted px-4 py-2 border border-brand-light bg-[#fcfbf9] rounded-full shadow-sm">
              AZ License #MB0922514
            </span>
            <span className="text-[11px] font-semibold text-white px-4 py-2 bg-brand-green-deep rounded-full flex items-center gap-1.5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Equal Housing Lender
            </span>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 lg:py-24 bg-brand-cream-light border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                WHAT OUR CLIENTS SAY
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                What Our Clients Say
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mt-4">
                At AZ Mortgage Brothers, our clients&rsquo; success stories are the true measure of our commitment. We&rsquo;re proud to have helped thousands of Arizona families achieve their homeownership dreams. Here&rsquo;s what some of our satisfied clients have to say about their experience working with us:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Emails were responded to on a daily basis and in a very quick manner. Every step of the process was done very professionally and friendly. I enjoyed meeting Kristi and Bambi. I don't have a face to put with their name, but they were also very nice, professional and helpful. I always hesitated to do a refinance because of the large amount of paperwork and meetings. But this didn't happen that way. I highly recommend Eddie's mortgage team for your refinancing needs.",
                  author: "Chris and Vicky Smith",
                  loc: "Avondale, Arizona",
                },
                {
                  text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule. I can't say enough good things about Eddie as a mortgage lender!",
                  author: "Elizabeth Todd",
                  loc: "H2 Realty, Phoenix, Arizona",
                },
                {
                  text: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. As you know, I am a Realtor and have dealt with many mortgage people along my career. You are heads and shoulders beyond most I have worked with. Your communication skills are unique in this business. You were reassuring throughout this entire procedure. I just want you to know I will be proud to refer you to my family, friends and Clients.",
                  author: "Marleen Kapanicas",
                  loc: "Homesmart, Scottsdale, Arizona",
                },
                {
                  text: "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern in the process. All questions were answered promptly and completely with the correct issues addressed without extra fanfare, like dealing with a trusted family member. Thanks again Eddie!!!",
                  author: "Thomas and Carol Milberry",
                  loc: "Queen Creek, Arizona 85242",
                },
                {
                  text: "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he's picked up the phone and called to let me know where we are in the process. He closes every deal and communicates through it well. He's patient with the questions and great with every client I have sent his way.",
                  author: "Nancy Perry",
                  loc: "Solutions Real Estate, Avondale, Arizona",
                },
              ].map((r) => (
                <div key={r.author} className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col">
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] flex-1 mb-4">"{r.text}"</p>
                  <div>
                    <p className="text-brand-green-deep text-[14px] font-bold">{r.author}</p>
                    <p className="text-brand-text-muted text-[12px] mt-0.5">{r.loc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/client-mortgage-reviews/" className="btn-primary inline-flex items-center gap-2">
                Explore All Client Testimonials
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                FAQ
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                Frequently Asked Questions
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mt-4">
                We understand that choosing a mortgage broker is a big decision. To help you get to know us better, we&rsquo;ve compiled answers to some of the most common questions we receive about AZ Mortgage Brothers and our services.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className={`bg-brand-cream-light rounded-2xl border border-[#e8e0d0]/40 shadow-sm overflow-hidden transition-all duration-200 ${isOpen ? "ring-1 ring-[#3fb364]/30" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <h3 className="text-brand-green-deep text-[16px] font-semibold">{faq.q}</h3>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#3fb364] text-white flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <div className={`px-6 transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"}`}>
                      <p className="text-brand-text-muted text-[14.5px] leading-[1.7]">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <a href="/contact-us/" className="btn-primary inline-flex items-center gap-2">
                Get Expert Answers Now
              </a>
            </div>
          </div>
        </section>

        {/* Let's Talk CTA Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 text-center relative overflow-hidden border-b border-[#e8e0d0]/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-36 -right-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-white text-[28px] lg:text-[34px] font-playfair font-normal leading-tight mb-4">
              Ready to start your homeownership journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Our expert team is here to guide you every step of the way. Don&apos;t let mortgage questions keep you up at night &ndash; get personalized answers and solutions tailored to your unique situation.
            </p>
            <a
              href="tel:6025352171"
              className="btn-primary hover:shadow-brand-green-accent/20 group"
            >
              +1 602-535-2171 · Speak with a Mortgage Expert
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
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

       
      </main>

      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}