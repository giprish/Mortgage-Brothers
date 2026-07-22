"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const WHY_PARTNER = [
  {
    title: "Fast Loan Closings",
    body: "Our streamlined process ensures quick approvals and on-time closings, helping you maintain client satisfaction and close more deals efficiently.",
  },
  {
    title: "Dedicated Support Team",
    body: "Each partner receives a personal mortgage advisor who understands your business needs and provides responsive, expert assistance.",
  },
  {
    title: "Competitive Loan Programs",
    body: "Access a comprehensive suite of mortgage products with competitive rates designed to meet the diverse needs of your clients.",
  },
  {
    title: "Marketing Resources",
    body: "Benefit from co-branded materials, educational content, and digital tools that help you attract and convert more qualified leads.",
  },
  {
    title: "Technology Integration",
    body: "Our user-friendly platforms connect seamlessly with your systems, creating a smooth workflow and enhancing communication throughout transactions.",
  },
  {
    title: "Ongoing Education",
    body: "Stay ahead with regular updates on market trends, loan program changes, and specialized training to strengthen your client relationships.",
  },
];

const AUDIENCES = [
  {
    title: "Real Estate Agents",
    body: "Enhance your client service with rapid pre-approvals, competitive rates, and on-time closings. Our dedicated agent portal provides real-time loan status updates and marketing materials to help you win more listings.",
  },
  {
    title: "Home Builders",
    body: "Simplify new construction financing with specialized loan programs, extended rate locks, and a dedicated construction lending team. We understand the unique timeline challenges builders face and provide solutions that keep projects moving.",
  },
  {
    title: "Title & Escrow Companies",
    body: "Experience seamless closings with our streamlined documentation process and clear communication channels. Our integration capabilities and closing specialists ensure smooth transactions from contract to completion.",
  },
  {
    title: "Financial Advisors",
    body: "Complement your wealth management services with expert mortgage solutions. Our collaborative approach helps your clients optimize their real estate investments while maintaining their broader financial strategy.",
  },
  {
    title: "Attorneys",
    body: "Partner with mortgage professionals who understand legal complexities in real estate transactions. We provide clear documentation, regulatory compliance expertise, and responsive communication throughout the lending process.",
  },
  {
    title: "Property Managers",
    body: "Offer your property owners and potential buyers valuable mortgage resources. Our investor-friendly loan programs and refinancing options help property managers add value beyond traditional management services.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "Schedule a brief call with our partnership team to discuss your business needs, client base, and how we can best support your growth objectives.",
  },
  {
    step: "02",
    title: "Partnership Agreement",
    body: "Complete our simple partnership registration form and receive your personalized welcome kit with all necessary materials and account credentials.",
  },
  {
    step: "03",
    title: "System Integration",
    body: "Our tech team will help set up any necessary connections between our platforms and your existing systems to ensure seamless communication and referrals.",
  },
  {
    step: "04",
    title: "Launch & Support",
    body: "Begin referring clients immediately with full support from your dedicated mortgage advisor who will provide ongoing training and assistance.",
  },
];

const STATS = [
  { value: "25", label: "Days Average Closing Time" },
  { value: "22+", label: "Years Industry Experience" },
  { value: "4.9", label: "Realtor Star Rating" },
  { value: "99%", label: "Communication Satisfaction" },
];

const HIGHLIGHTS = [
  "Grow Your Business with Premier Mortgage Partner",
  "Strategic Partnerships for Real Estate Success",
  "Trusted Mortgage Solutions for Industry Professionals",
];

export default function RealtorTeamPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="w-full text-white py-24 lg:py-32 text-left relative overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/arizona-mortgage-brothers-team.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-[#08271B]/75 z-0" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5" />
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
            <div className="max-w-2xl">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                REALTOR PARTNERSHIPS
              </p>
              <h1 className="text-white text-[36px] lg:text-[54px] font-playfair font-normal leading-[1.1] mb-5">
                A Mortgage Partner You Can Depend On
              </h1>
              <p className="text-[#c8c8b8] text-[15px] lg:text-[18px] leading-[1.7] mb-8 max-w-xl">
                Partner with trusted mortgage experts to deliver exceptional service and grow your business together
              </p>
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3.5 rounded-full transition-all shadow-lg shadow-[#3fb364]/20"
              >
                Become a Business Partner
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Highlight strip */}
        <section className="w-full bg-[#052316] py-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#3fb364] flex-shrink-0" />
                <p className="text-white text-[14px] lg:text-[15px] font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Partner */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-12">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHY PARTNER</p>
              <h2 className="text-[#052316] text-[30px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Why Partner With AZ Mortgage Brothers?
              </h2>
              <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] mb-4">
                We&apos;ve built our reputation on creating meaningful partnerships that drive success for everyone involved. Our approach combines industry expertise, personalized service, and innovative mortgage solutions that help your business thrive.
              </p>
              <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7]">
                When you partner with AZ Mortgage Brothers, you&apos;re not just gaining a mortgage resource – you&apos;re joining a team committed to your growth and your clients&apos; satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {WHY_PARTNER.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3fb364]/12 text-[#3fb364] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[#052316] text-[18px] font-bold mb-2">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[14px] font-bold px-6 py-3.5 rounded-full transition-all"
              >
                Join Our Partner Network
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-14 lg:py-16 bg-[#052316]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white text-[36px] lg:text-[48px] font-bold leading-none mb-2">{stat.value}</div>
                <div className="text-[#c8c8b8] text-[12px] lg:text-[13px] font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized audiences */}
        <section className="w-full py-16 lg:py-24 bg-[#fcf9f3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-12">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">WHO WE SERVE</p>
              <h2 className="text-[#052316] text-[30px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Specialized Solutions for Industry Professionals
              </h2>
              <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7]">
                We offer tailored partnership programs designed to meet the unique needs of different real estate professionals. Our specialized approach ensures you receive the exact support, tools, and resources that matter most to your business segment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {AUDIENCES.map((item) => (
                <div key={item.title} className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[#052316] text-[18px] font-bold mb-3">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3.5 rounded-full transition-all"
              >
                Contact Our Partnership Team
              </a>
            </div>
          </div>
        </section>

        {/* Four steps */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-12">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">HOW IT WORKS</p>
              <h2 className="text-[#052316] text-[30px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Four Simple Steps to a Powerful Partnership
              </h2>
              <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7]">
                Becoming an AZ Mortgage Brothers partner is straightforward and designed to get you up and running quickly. Our streamlined onboarding process ensures you&apos;ll have all the resources you need to start referring clients and growing your business right away.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {STEPS.map((item) => (
                <div key={item.step} className="relative bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-2xl p-6">
                  <div className="text-[#3fb364] text-[28px] font-bold mb-3">{item.step}</div>
                  <h3 className="text-[#052316] text-[17px] font-bold mb-2">{item.title}</h3>
                  <p className="text-[#4e5b4e] text-[13.5px] leading-[1.65]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 text-center">
              <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-3xl mx-auto mb-6">
                Ready to elevate your business? Join hundreds of successful partners who have grown their business with AZ Mortgage Brothers. Our team is ready to answer your questions and help you get started.
              </p>
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3.5 rounded-full transition-all"
              >
                Schedule Your Partnership Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Contact / form */}
        <section id="get-in-touch" className="w-full py-16 lg:py-24 bg-[#fcf9f3] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-12">
              <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">GET IN TOUCH</p>
              <h2 className="text-[#052316] text-[30px] lg:text-[40px] font-playfair font-normal leading-tight mb-5">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7]">
                Ready to explore how a partnership with AZ Mortgage Brothers can benefit your business? Complete the form below, and one of our partnership specialists will reach out within one business day to discuss your specific needs and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e8e0d0]/60 p-8 shadow-sm">
                <h3 className="text-[#052316] text-[22px] font-playfair font-normal mb-6">
                  Partnership Inquiry
                </h3>

                {formSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#3fb364]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-[#052316] text-[18px] font-bold">Message Sent!</h4>
                    <p className="text-[#4e5b4e] text-[14px] max-w-xs">
                      Thanks for reaching out. Our partnership team will contact you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[#1a3a1a] text-[12px] font-semibold">First name</label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[#1a3a1a] text-[12px] font-semibold">Last name</label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[#1a3a1a] text-[12px] font-semibold">Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[#1a3a1a] text-[12px] font-semibold">Phone</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Company / Brokerage</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">How can we help?</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your partnership goals..."
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14.5px] font-bold px-6 py-3 rounded-xl transition-all w-fit cursor-pointer"
                    >
                      Send partnership inquiry
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-6 shadow-sm">
                  <p className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-2">PHONE</p>
                  <a href="tel:6025352171" className="text-[#052316] text-[20px] font-bold hover:text-[#3fb364] transition-colors">
                    +1 602-535-2171
                  </a>
                </div>
                <div className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-6 shadow-sm">
                  <p className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-2">CONTACT US</p>
                  <Link href="/contact-us" className="text-[#052316] text-[16px] font-bold hover:text-[#3fb364] transition-colors">
                    Open contact page →
                  </Link>
                </div>
                <div className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-6 shadow-sm">
                  <p className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-2">ADDRESS</p>
                  <p className="text-[#052316] text-[15px] font-bold leading-relaxed">
                    1599 East Orangewood Ave<br />
                    Suite 200<br />
                    Phoenix, AZ 85020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
