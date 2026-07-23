"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="w-full bg-[#08271B] border-b border-[#1a3a1a] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200">
          <div className="flex flex-col leading-tight">
            <span className="text-[#3fb364] font-bold text-[18px] tracking-[0.08em] uppercase leading-[1.1]">
              MORTGAGE
            </span>
            <span className="text-[#3fb364] font-bold text-[18px] tracking-[0.08em] uppercase leading-[1.1]">
              BROTHERS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 px-3">
          {/* Loan Programs Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/mortgage-loan-programs-arizona/"
              className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
            >
              Loan Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className="absolute left-[-12px] top-full pt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2">
                {/* <Link
                  href="/loan-programs/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  All Programs
                </Link> */}
                <Link
                  href="/fha-loans/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  FHA Loans
                </Link>
                <Link
                  href="/loan-programs-detail/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Loan Program Details
                </Link>
                {/* <Link
                  href="/loan-programs/#va"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  VA Loans
                </Link> */}
              </div>
            </div>
          </div>
          {/* Calculators Megamenu Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/calculators/"
              className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
            >
              Calculators
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            
            {/* Megamenu container */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-left">
                {/* Column 1 */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    BASIC CALCULATORS
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/basic-mortgage-payment-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Basic Mortgage Payment
                    </Link>
                    <Link href="/mortgage-affordability-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Mortgage Affordability
                    </Link>
                    <Link href="/refinance-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Refinance Calculator
                    </Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    COMPARISON TOOLS
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/rent-vs-buy-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Rent vs. Buy Calculator
                    </Link>
                    <Link href="/conventional-vs-fha-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Conventional vs. FHA Calculator
                    </Link>
                    <Link href="/down-payment-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Down Payment Calculator
                    </Link>
                    <Link href="/debt-to-income-ratio-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Debt-to-Income Ratio
                    </Link>
                  </div>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    SPECIALIZED
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/extra-payment-mortgage-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Extra Payment Mortgage
                    </Link>
                    <Link href="/fha-loan-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      FHA Loan Calculator
                    </Link>
                    <Link href="/va-loan-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      VA Loan Calculator
                    </Link>
                    <Link href="/home-purchase-closing-cost-calculator/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Home Purchase Closing Cost
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas We Serve Dropdown — matches live site mega menu */}
          <div className="relative group py-2">
            <Link
              href="/service-areas/"
              className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
            >
              Areas We Serve
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl p-6 grid grid-cols-4 gap-6 text-left">
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    MAJOR COUNTIES
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/service-areas/maricopa-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Maricopa County</Link>
                    <Link href="/service-areas/pima-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Pima County</Link>
                    <Link href="/service-areas/pinal-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Pinal County</Link>
                    <Link href="/service-areas/yavapai-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Yavapai County</Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    NORTHERN AZ
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/service-areas/coconino-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Coconino County</Link>
                    <Link href="/service-areas/navajo-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Navajo County</Link>
                    <Link href="/service-areas/apache-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Apache County</Link>
                    <Link href="/service-areas/gila-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Gila County</Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    SOUTHERN AZ
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/service-areas/cochise-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Cochise County</Link>
                    <Link href="/service-areas/graham-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Graham County</Link>
                    <Link href="/service-areas/greenlee-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Greenlee County</Link>
                    <Link href="/service-areas/santa-cruz-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Santa Cruz County</Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    WESTERN AZ
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/service-areas/mohave-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Mohave County</Link>
                    <Link href="/service-areas/la-paz-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">La Paz County</Link>
                    <Link href="/service-areas/yuma-county-az/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">Yuma County</Link>
                    {/* <Link href="/service-areas/" className="text-[#3fb364] text-[13.5px] font-bold hover:text-[#2d5a2d] transition-colors mt-1">View All Areas →</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/about-us/"
              className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className="absolute left-[-12px] top-full pt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2">
                <Link
                  href="/contact-us/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/term-condition/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                Team & Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/blog/"
              className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className="absolute left-[-12px] top-full pt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2">
                <Link
                  href="/blog/"
                  className="block px-4 py-2.5 text-[14px] text-[#3fb364] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-bold"
                >
                  Blog
                </Link>
                <Link
                  href="/mortgage-basics/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Mortgage Basics
                </Link>
                <Link
                  href="/videos/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Videos
                </Link>
                <Link
                  href="/mortgage-basics/conventional-loan-basics/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Conventional Loans
                </Link>
                <Link
                  href="/client-mortgage-reviews/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Reviews
                </Link>
                <Link
                  href="/faq/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  FAQ
                </Link>{/*  <Link
                  href="/resources/fha-loans/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  FHA Loans
                </Link>
                <Link
                  href="/resources/real-estate-mortgages/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Real Estate & Mortgages
                </Link>
                <Link
                  href="/resources/specialty-loans/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Specialty Loans
                </Link>
                <Link
                  href="/resources/homeownership-tips/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Homeownership Tips
                </Link>
                <Link
                  href="/resources/process-guidance/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Process Guidance
                </Link>
                <div className="border-t border-[#e8e0d0]/40 my-1"></div>
                <Link
                  href="/blog/"
                  className="block px-4 py-2 text-[14px] text-[#3fb364] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-semibold"
                >
                  All Resources
                </Link> */}
              </div>
            </div>
          </div>

          {/* Realtors */}
          <Link
            href="/realtorteam/"
            className="text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
          >
            Realtors
          </Link>

        </div>

        {/* Right Side - Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:6025352171"
            className="flex items-center gap-1.5 text-white text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (602) 535-2171
          </a>
          <Link
            href="/#get-pre-approved"
            className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[13px] font-semibold px-4.5 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            Get Pre-Approved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setActiveSubmenu(null);
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3fb364"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveSubmenu(null);
            }}
          />

          {/* Right Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-[82%] max-w-[310px] bg-[#292e34] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            
            {/* Top Control Bar */}
            {activeSubmenu ? (
              <button
                onClick={() => setActiveSubmenu(null)}
                className="w-full bg-[#348e38] text-white font-bold text-[14px] px-5 py-3.5 flex items-center gap-2 tracking-wide uppercase shadow-sm cursor-pointer"
              >
                <span className="text-[16px] font-extrabold">&lt;</span> Back
              </button>
            ) : (
              <div className="flex items-center justify-between px-5 py-4 bg-[#292e34] border-b border-[#3b4148]">
                {/* Call Us Button */}
                <a
                  href="tel:6025352171"
                  className="border-2 border-white/90 text-white font-bold text-[12px] tracking-wider uppercase px-4 py-1.5 rounded flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.37z" />
                  </svg>
                  CALL US
                </a>

                {/* Hamburger Close Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                  className="text-[#3fb364] p-1.5 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            {/* Menu List Body */}
            <div className="flex-1 overflow-y-auto bg-[#292e34]">
              {!activeSubmenu ? (
                /* Main Menu Items */
                <div className="flex flex-col">
                  <button
                    onClick={() => setActiveSubmenu("LOAN PROGRAMS")}
                    className="w-full text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] flex items-center justify-between hover:bg-[#343a42] transition-colors cursor-pointer text-left"
                  >
                    <span>LOAN PROGRAMS</span>
                    <span className="text-[10px] text-white/70">▶</span>
                  </button>

                  <button
                    onClick={() => setActiveSubmenu("CALCULATORS")}
                    className="w-full text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] flex items-center justify-between hover:bg-[#343a42] transition-colors cursor-pointer text-left"
                  >
                    <span>CALCULATORS</span>
                    <span className="text-[10px] text-white/70">▶</span>
                  </button>

                  <button
                    onClick={() => setActiveSubmenu("AREAS WE SERVE")}
                    className="w-full text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] flex items-center justify-between hover:bg-[#343a42] transition-colors cursor-pointer text-left"
                  >
                    <span>AREAS WE SERVE</span>
                    <span className="text-[10px] text-white/70">▶</span>
                  </button>

                  <button
                    onClick={() => setActiveSubmenu("ABOUT")}
                    className="w-full text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] flex items-center justify-between hover:bg-[#343a42] transition-colors cursor-pointer text-left"
                  >
                    <span>ABOUT</span>
                    <span className="text-[10px] text-white/70">▶</span>
                  </button>

                  <button
                    onClick={() => setActiveSubmenu("RESOURCES")}
                    className="w-full text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] flex items-center justify-between hover:bg-[#343a42] transition-colors cursor-pointer text-left"
                  >
                    <span>RESOURCES</span>
                    <span className="text-[10px] text-white/70">▶</span>
                  </button>

                  <Link
                    href="/contact-us/"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSubmenu(null);
                    }}
                    className="text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] hover:bg-[#343a42] transition-colors block"
                  >
                    CONTACT US
                  </Link>

                  <Link
                    href="/realtorteam/"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSubmenu(null);
                    }}
                    className="text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] hover:bg-[#343a42] transition-colors block"
                  >
                    REALTORS
                  </Link>
                </div>
              ) : (
                /* Submenu Items */
                <div className="flex flex-col">
                  {/* Submenu Header Label */}
                  <div className="text-white font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] bg-[#23272c]">
                    {activeSubmenu}
                  </div>

                  {activeSubmenu === "LOAN PROGRAMS" && (
                    <>
                      <Link
                        href="/fha-loans/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        FHA LOANS
                      </Link>
                      <Link
                        href="/loan-programs-detail/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        LOAN PROGRAM DETAILS
                      </Link>
                    </>
                  )}

                  {activeSubmenu === "CALCULATORS" && (
                    <>
                      <Link
                        href="/basic-mortgage-payment-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        BASIC MORTGAGE PAYMENT
                      </Link>
                      <Link
                        href="/mortgage-affordability-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        MORTGAGE AFFORDABILITY
                      </Link>
                      <Link
                        href="/refinance-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        REFINANCE CALCULATOR
                      </Link>
                      <Link
                        href="/rent-vs-buy-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        RENT VS. BUY CALCULATOR
                      </Link>
                      <Link
                        href="/conventional-vs-fha-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        CONVENTIONAL VS. FHA
                      </Link>
                      <Link
                        href="/down-payment-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        DOWN PAYMENT CALCULATOR
                      </Link>
                      <Link
                        href="/debt-to-income-ratio-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        DEBT-TO-INCOME RATIO
                      </Link>
                      <Link
                        href="/extra-payment-mortgage-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-[#3fb364] font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-white transition-colors"
                      >
                        EXTRA PAYMENT MORTGAGE
                      </Link>
                      <Link
                        href="/fha-loan-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        FHA LOAN CALCULATOR
                      </Link>
                      <Link
                        href="/va-loan-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        VA LOAN CALCULATOR
                      </Link>
                      <Link
                        href="/home-purchase-closing-cost-calculator/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        HOME LOAN CLOSING COST CALCULATOR
                      </Link>
                    </>
                  )}

                  {activeSubmenu === "AREAS WE SERVE" && (
                    <>
                      <Link
                        href="/service-areas/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-[#3fb364] font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-white transition-colors"
                      >
                        ALL SERVICE AREAS
                      </Link>
                      <Link href="/service-areas/maricopa-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">MARICOPA COUNTY</Link>
                      <Link href="/service-areas/pima-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">PIMA COUNTY</Link>
                      <Link href="/service-areas/pinal-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">PINAL COUNTY</Link>
                      <Link href="/service-areas/yavapai-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">YAVAPAI COUNTY</Link>
                      <Link href="/service-areas/coconino-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">COCONINO COUNTY</Link>
                      <Link href="/service-areas/navajo-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">NAVAJO COUNTY</Link>
                      <Link href="/service-areas/apache-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">APACHE COUNTY</Link>
                      <Link href="/service-areas/gila-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">GILA COUNTY</Link>
                      <Link href="/service-areas/cochise-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">COCHISE COUNTY</Link>
                      <Link href="/service-areas/graham-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">GRAHAM COUNTY</Link>
                      <Link href="/service-areas/greenlee-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">GREENLEE COUNTY</Link>
                      <Link href="/service-areas/santa-cruz-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">SANTA CRUZ COUNTY</Link>
                      <Link href="/service-areas/mohave-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">MOHAVE COUNTY</Link>
                      <Link href="/service-areas/la-paz-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">LA PAZ COUNTY</Link>
                      <Link href="/service-areas/yuma-county-az/" onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }} className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors">YUMA COUNTY</Link>
                    </>
                  )}

                  {activeSubmenu === "ABOUT" && (
                    <>
                      <Link
                        href="/contact-us/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        CONTACT US
                      </Link>
                      <Link
                        href="/term-condition/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        TEAM & CAREERS
                      </Link>
                    </>
                  )}

                  {activeSubmenu === "RESOURCES" && (
                    <>
                      <Link
                        href="/blog/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-[#3fb364] font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-white transition-colors"
                      >
                        BLOG
                      </Link>
                      <Link
                        href="/mortgage-basics/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        MORTGAGE BASICS
                      </Link>
                      <Link
                        href="/videos/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        VIDEOS
                      </Link>
                      <Link
                        href="/mortgage-basics/conventional-loan-basics/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        CONVENTIONAL LOANS
                      </Link>
                      <Link
                        href="/client-mortgage-reviews/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        REVIEWS
                      </Link>
                      <Link
                        href="/faq/"
                        onClick={() => { setMobileMenuOpen(false); setActiveSubmenu(null); }}
                        className="text-white font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] hover:text-[#3fb364] transition-colors"
                      >
                        MORTGAGE FAQ
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
