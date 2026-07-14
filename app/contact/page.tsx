"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const helpTopics = [
  "I want to get pre-approved",
  "I'm refinancing",
  "I have a question about my loan",
  "I'm a real estate agent partner",
  "Something else"
];

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("I want to get pre-approved");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      // Reset form after some time
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow py-16 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-[#052316] text-[36px] lg:text-[48px] font-playfair font-normal leading-tight mb-4">
              Let&apos;s talk about your loan.
            </h1>
            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              Real people, same-day replies, and no pressure. Reach us however you like.
            </p>
          </div>

          {/* Three Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 - Call or Text */}
            <div className="bg-[#faf7f0] rounded-2xl p-6 border border-[#e8e0d0]/60 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center text-[#3fb364] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-1.5">
                CALL OR TEXT
              </span>
              <a href="tel:6025352171" className="text-[#052316] text-[18px] font-bold hover:text-[#3fb364] transition-colors mb-1">
                (602) 535-2171
              </a>
              <span className="text-[#8a9a7a] text-[12px]">
                Mon-Fri 8am–8pm MST
              </span>
            </div>

            {/* Card 2 - Email */}
            <div className="bg-[#faf7f0] rounded-2xl p-6 border border-[#e8e0d0]/60 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center text-[#3fb364] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-1.5">
                EMAIL
              </span>
              <a href="mailto:loans@azmortgagebrothers.com" className="text-[#052316] text-[16px] lg:text-[18px] font-bold hover:text-[#3fb364] transition-colors mb-1 break-all">
                loans@azmortgagebrothers.com
              </a>
              <span className="text-[#8a9a7a] text-[12px]">
                We reply same business day
              </span>
            </div>

            {/* Card 3 - Visit */}
            <div className="bg-[#faf7f0] rounded-2xl p-6 border border-[#e8e0d0]/60 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#3fb364]/10 flex items-center justify-center text-[#3fb364] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="text-[#a89a70] text-[10px] font-bold tracking-widest uppercase mb-1.5">
                VISIT
              </span>
              <span className="text-[#052316] text-[15px] font-bold mb-1">
                1599 E Orangewood Ave, Ste 200
              </span>
              <span className="text-[#8a9a7a] text-[12px]">
                Phoenix, AZ 85020
              </span>
            </div>
          </div>

          {/* Two-Column Form & Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e8e0d0]/60 p-8 shadow-sm">
              <h2 className="text-[#052316] text-[24px] font-playfair font-normal mb-6">
                Send us a message
              </h2>

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#3fb364]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-[#052316] text-[18px] font-bold">Message Sent!</h3>
                  <p className="text-[#4e5b4e] text-[14px] max-w-xs">
                    Thanks for reaching out. One of the Mortgage Brothers will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* First and Last Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">First name</label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jordan"
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Last name</label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Rivera"
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(602) 000-0000"
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] transition-all"
                      />
                    </div>
                  </div>

                  {/* Help Topics Selector Pills */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[#1a3a1a] text-[12px] font-semibold">What can we help with?</label>
                    <div className="flex flex-wrap gap-2">
                      {helpTopics.map((topic) => {
                        const isSelected = selectedTopic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-4 py-2 text-[12.5px] font-semibold rounded-full border transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? "bg-[#3fb364] text-white border-transparent shadow-sm"
                                : "bg-white border-[#e8e0d0] text-[#1a3a1a] hover:bg-[#faf7f0] hover:text-[#052316]"
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1a3a1a] text-[12px] font-semibold">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a bit about your situation..."
                      className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14.5px] font-bold px-6 py-3 rounded-xl transition-all duration-200 w-fit cursor-pointer shadow-md hover:shadow-lg shadow-[#3fb364]/10"
                  >
                    Send message
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Map & Hours */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Map Placeholder Card */}
              <div className="bg-[#f5f0e8] border border-[#e8e0d0] rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px] text-center shadow-sm">
                {/* Diagonal stripes */}
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(45deg, #a89a70 0px, #a89a70 8px, transparent 8px, transparent 16px)" }}></div>
                
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#3fb364] mb-3 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#052316] text-[12px] font-bold uppercase tracking-wider block relative z-10 mb-1">
                  MAP · 1599 E ORANGEWOOD AVE
                </span>
                <span className="text-[#4e5b4e] text-[13px] relative z-10">
                  PHOENIX, AZ 85020
                </span>
              </div>

              {/* Office Hours Card */}
              <div className="bg-[#052316] rounded-3xl p-8 border border-white/5 text-white shadow-lg">
                <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.15em] uppercase mb-5 block">
                  OFFICE HOURS
                </span>

                <div className="flex flex-col gap-4 text-[14px]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-white font-medium">Monday – Friday</span>
                    <span className="text-[#c8c8b8]">8:00a – 6:00p</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-white font-medium">Saturday</span>
                    <span className="text-[#c8c8b8]">By appointment</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Sunday</span>
                    <span className="text-[#c8c8b8]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
