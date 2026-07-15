"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f5f0e8] border-b border-[#e8e0d0]">
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
          <Link
            href="/loan-programs"
            className="text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200"
          >
            Loan Programs
          </Link>
          <Link
            href="/calculators"
            className="text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200"
          >
            Calculators
          </Link>

          {/* Areas We Serve Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/areas-we-serve"
              className="flex items-center gap-1.5 text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200 cursor-pointer"
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
            <div className="absolute left-0 mt-2 w-48 bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {/* <Link
                href="/areas-we-serve"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150"
              >
                All Service Areas
              </Link> */}
              <Link
                href="/areas-we-serve/directory"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Arizona Directory
              </Link>
              <Link
                href="/areas-we-serve/maricopa-county"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Maricopa County
              </Link>
              <Link
                href="/areas-we-serve/maricopa-county/phoenix"
                className="block pl-8 pr-4 py-1.5 text-[13px] text-[#4e5b4e] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                ↳ Phoenix
              </Link>
              <Link
                href="/areas-we-serve/arizona-directory-2"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Arizona Directory 2
              </Link>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/about"
              className="flex items-center gap-1.5 text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200 cursor-pointer"
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
            <div className="absolute left-0 mt-2 w-48 bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/contact"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/term-condition"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
              Team & Careers
              </Link>
            </div>
          </div>
          <Link
            href="/reviews"
            className="text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200"
          >
            Reviews
          </Link>
          {/* Resources Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/resources"
              className="flex items-center gap-1.5 text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200 cursor-pointer"
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
            <div className="absolute left-0 mt-2 w-60 bg-white border border-[#e8e0d0] rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="/resources/mortgage-basics"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Mortgage Basics
              </Link>
              <Link
                href="/resources/videos"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Videos
              </Link>
              <Link
                href="/resources/mortgage-basics/conventional-loan-basics"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Conventional Loans
              </Link>              {/* <Link
                href="/resources/fha-loans"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                FHA Loans
              </Link>
              <Link
                href="/resources/real-estate-mortgages"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Real Estate & Mortgages
              </Link>
              <Link
                href="/resources/specialty-loans"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Specialty Loans
              </Link>
              <Link
                href="/resources/homeownership-tips"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Homeownership Tips
              </Link>
              <Link
                href="/resources/process-guidance"
                className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
              >
                Process Guidance
              </Link>
              <div className="border-t border-[#e8e0d0]/40 my-1"></div>
              <Link
                href="/resources"
                className="block px-4 py-2 text-[14px] text-[#3fb364] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-semibold"
              >
                All Resources
              </Link> */}
            </div>
          </div>
          <Link
            href="/faq"
            className="text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200"
          >
            FAQ
          </Link>
        </div>

        {/* Right Side - Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:6025352171"
            className="flex items-center gap-1.5 text-[#1a3a1a] text-[14px] font-medium hover:text-[#2d5a2d] transition-colors duration-200"
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
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1a3a1a]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              stroke="currentColor"
              strokeWidth="2"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5f0e8] border-t border-[#e8e0d0] px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/loan-programs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Loan Programs
          </Link>
          <Link
            href="/calculators"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Calculators
          </Link>

          <Link
            href="/areas-we-serve"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Areas We Serve
          </Link>
          <Link
            href="/areas-we-serve/directory"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Arizona Directory
          </Link>
          <Link
            href="/areas-we-serve/maricopa-county"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Maricopa County
          </Link>
          <Link
            href="/areas-we-serve/maricopa-county/phoenix"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[13.5px] pl-8 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-4"
          >
            ↳ Phoenix
          </Link>
          <Link
            href="/areas-we-serve/maricopa-county-2"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Maricopa County 2
          </Link>
          <Link
            href="/areas-we-serve/arizona-directory-2"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Arizona Directory 2
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            About
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Contact Us
          </Link>
          <Link
            href="/term-condition"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Team & Careers
          </Link>
          <Link
            href="/reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Reviews
          </Link>
          {/* Resources Mobile Link & Sub-items */}
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            Resources
          </Link>
          <Link
            href="/resources/mortgage-basics"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Mortgage Basics
          </Link>
          <Link
            href="/resources/videos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Videos
          </Link>
          <Link
            href="/resources/mortgage-basics/conventional-loan-basics"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Conventional Loans
          </Link>
          <Link
            href="/reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Reviews
          </Link>
          <Link
            href="/resources/fha-loans"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ FHA Loans
          </Link>
          <Link
            href="/resources/real-estate-mortgages"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Real Estate & Mortgages
          </Link>
          <Link
            href="/resources/specialty-loans"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Specialty Loans
          </Link>
          <Link
            href="/resources/homeownership-tips"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Homeownership Tips
          </Link>
          <Link
            href="/resources/process-guidance"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4e5b4e] text-[14px] pl-4 py-1.5 hover:text-[#2d5a2d] transition-colors font-medium border-l border-[#e8e0d0]/60 ml-2"
          >
            ↳ Process Guidance
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a3a1a] text-[15px] font-medium py-2"
          >
            FAQ
          </Link>
          <a
            href="tel:6025352171"
            className="flex items-center gap-2 text-[#1a3a1a] text-[15px] font-medium py-2"
          >
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
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (602) 535-2171
          </a>
          <Link
            href="/#get-pre-approved"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#3fb364] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Get Pre-Approved
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
