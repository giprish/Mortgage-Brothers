"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { COMPANY, LOAN_PROGRAM_LINKS } from "@/lib/company";

const CALCULATOR_LINKS = [
  { href: "/basic-mortgage-payment-calculator/", label: "BASIC MORTGAGE PAYMENT" },
  { href: "/mortgage-affordability-calculator/", label: "MORTGAGE AFFORDABILITY" },
  { href: "/refinance-calculator/", label: "REFINANCE CALCULATOR" },
  { href: "/rent-vs-buy-calculator/", label: "RENT VS. BUY CALCULATOR" },
  { href: "/conventional-vs-fha-calculator/", label: "CONVENTIONAL VS. FHA" },
  { href: "/down-payment-calculator/", label: "DOWN PAYMENT CALCULATOR" },
  { href: "/debt-to-income-ratio-calculator/", label: "DEBT-TO-INCOME RATIO" },
  { href: "/extra-payment-mortgage-calculator/", label: "EXTRA PAYMENT MORTGAGE" },
  { href: "/fha-loan-calculator/", label: "FHA LOAN CALCULATOR" },
  { href: "/va-loan-calculator/", label: "VA LOAN CALCULATOR" },
  { href: "/home-purchase-closing-cost-calculator/", label: "HOME LOAN CLOSING COST CALCULATOR" },
] as const;

const AREA_LINKS = [
  { href: "/service-areas/", label: "ALL SERVICE AREAS" },
  { href: "/service-areas/maricopa-county-az/", label: "MARICOPA COUNTY" },
  { href: "/service-areas/pima-county-az/", label: "PIMA COUNTY" },
  { href: "/service-areas/pinal-county-az/", label: "PINAL COUNTY" },
  { href: "/service-areas/yavapai-county-az/", label: "YAVAPAI COUNTY" },
  { href: "/service-areas/coconino-county-az/", label: "COCONINO COUNTY" },
  { href: "/service-areas/navajo-county-az/", label: "NAVAJO COUNTY" },
  { href: "/service-areas/apache-county-az/", label: "APACHE COUNTY" },
  { href: "/service-areas/gila-county-az/", label: "GILA COUNTY" },
  { href: "/service-areas/cochise-county-az/", label: "COCHISE COUNTY" },
  { href: "/service-areas/graham-county-az/", label: "GRAHAM COUNTY" },
  { href: "/service-areas/greenlee-county-az/", label: "GREENLEE COUNTY" },
  { href: "/service-areas/santa-cruz-county-az/", label: "SANTA CRUZ COUNTY" },
  { href: "/service-areas/mohave-county-az/", label: "MOHAVE COUNTY" },
  { href: "/service-areas/la-paz-county-az/", label: "LA PAZ COUNTY" },
  { href: "/service-areas/yuma-county-az/", label: "YUMA COUNTY" },
] as const;

const ABOUT_LINKS = [
  { href: "/about-us/", label: "ABOUT US" },
  { href: "/contact-us/", label: "CONTACT US" },
  { href: "/team/", label: "TEAM & CAREERS" },
  { href: "/job-opportunities/", label: "JOB OPPORTUNITIES" },
] as const;

const LOAN_PROGRAM_MOBILE_LINKS = [
  { href: "/mortgage-loan-programs-arizona/", label: "ALL LOAN PROGRAMS" },
  ...LOAN_PROGRAM_LINKS,
] as const;

const CALCULATOR_MOBILE_LINKS = [
  { href: "/mortgage-calculator-arizona/", label: "ALL CALCULATORS" },
  ...CALCULATOR_LINKS,
] as const;

const RESOURCE_LINKS = [
  { href: "/blog/", label: "BLOG" },
  { href: "/mortgage-basics/", label: "MORTGAGE BASICS" },
  { href: "/videos/", label: "VIDEOS" },
  { href: "/mortgage-basics/conventional-loan-basics/", label: "CONVENTIONAL LOANS" },
  { href: "/client-mortgage-reviews/", label: "REVIEWS" },
  { href: "/faq/", label: "MORTGAGE FAQ" },
] as const;

function normalizePath(path: string) {
  if (!path) return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function pathsMatch(href: string, pathname: string) {
  return normalizePath(pathname) === normalizePath(href);
}

function mobileItemClass(active: boolean, size: "main" | "sub" = "sub") {
  const base =
    size === "main"
      ? "font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 border-b border-[#3b4148] transition-colors block"
      : "font-bold text-[13px] uppercase tracking-wider px-5 py-3.5 border-b border-[#3b4148] transition-colors";
  return active
    ? `${base} text-[#3fb364] hover:text-white`
    : `${base} text-white hover:text-[#3fb364]`;
}

const Navbar = () => {
  const pathname = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const isPathActive = useCallback((href: string) => pathsMatch(href, pathname), [pathname]);
  const isLoanProgramsActive = useMemo(() => LOAN_PROGRAM_LINKS.some((item) => isPathActive(item.href)), [isPathActive]);
  const isCalculatorsActive = useMemo(() => CALCULATOR_LINKS.some((item) => isPathActive(item.href)), [isPathActive]);
  const isAreasActive = useMemo(() => AREA_LINKS.some((item) => isPathActive(item.href)), [isPathActive]);
  const isAboutActive = useMemo(() => ABOUT_LINKS.some((item) => isPathActive(item.href)), [isPathActive]);
  const isResourcesActive = useMemo(() => RESOURCE_LINKS.some((item) => isPathActive(item.href)), [isPathActive]);

  // When opening the drawer on a matching page, jump straight into that submenu.
  const resolveSubmenuForPath = useCallback(() => {
    if (isCalculatorsActive) return "CALCULATORS";
    if (isLoanProgramsActive) return "LOAN PROGRAMS";
    if (isAreasActive) return "AREAS WE SERVE";
    if (isAboutActive) return "ABOUT";
    if (isResourcesActive) return "RESOURCES";
    return null;
  }, [isCalculatorsActive, isLoanProgramsActive, isAreasActive, isAboutActive, isResourcesActive]);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((open) => {
      setActiveSubmenu(null);
      return !open;
    });
  }, []);

  return (
    <nav className="w-full bg-[#08271B] border-b border-[#1a3a1a] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-10 flex items-center justify-between h-[64px] sm:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity duration-200 shrink-0">
          <Image
            src="/home/mortgage-brothers-logo.png"
            alt="Mortgage Brothers"
            width={150}
            height={48}
            priority
            className="h-[40px] sm:h-[48px] w-auto max-w-[150px] object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 xl:px-3 whitespace-nowrap">
          {/* Loan Programs Megamenu */}
          <div className="relative group py-2">
            <Link
              href="/mortgage-loan-programs-arizona/"
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
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

            {/* Megamenu container */}
            <div className="absolute left-0 top-full pt-3 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white border border-[#e8e0d0] rounded-xl shadow-xl p-6 grid grid-cols-3 gap-6 text-left">

                {/* Column 1 — Home Loans */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    HOME LOANS
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/conventional-home-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Conventional Home Loans
                    </Link>
                    <Link href="/fha-home-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      FHA Home Loans
                    </Link>
                    <Link href="/jumbo-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Jumbo Loans
                    </Link>
                    <Link href="/va-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      VA Loans
                    </Link>
                  </div>
                </div>

                {/* Column 2 — Specialty Programs */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    SPECIALTY PROGRAMS
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/reverse-mortgage-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Reverse Mortgage
                    </Link>
                    <Link href="/reverse-mortgage-home-purchase-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Reverse Mortgage for Purchase
                    </Link>
                    <Link href="/private-money-lender-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Private Money Lender
                    </Link>
                    <Link href="/sell-my-house-fast-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Sell Home for Cash
                    </Link>
                  </div>
                </div>

                {/* Column 3 — Refinancing */}
                <div>
                  <h4 className="text-[#3fb364] text-[11px] font-bold tracking-[0.12em] uppercase mb-4 pb-1.5 border-b border-[#e8e0d0]/40">
                    REFINANCING
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/fha-streamline-refinance-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      FHA Streamline Refinance
                    </Link>
                    <Link href="/refinancing-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Mortgage Refinancing
                    </Link>
                    <Link href="/conventional-vs-fha-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d] transition-colors">
                      Conventional vs FHA Loans
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Calculators Megamenu Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/mortgage-calculator-arizona/"
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
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
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
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
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
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
                  href="/team/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Team & Careers
                </Link>
                <Link
                  href="/job-opportunities/"
                  className="block px-4 py-2.5 text-[14px] text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d] transition-colors duration-150 font-medium"
                >
                  Job Opportunities
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/blog/"
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
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
            className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200 cursor-pointer"
          >
            Realtors
          </Link>

        </div>

        {/* Right Side - Phone + CTA */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 whitespace-nowrap">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors duration-200"
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
            {COMPANY.phoneDisplay}
          </a>
          <Link
            href="/#get-pre-approved"
            className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[12.5px] xl:text-[13px] font-semibold px-3.5 xl:px-4.5 py-2 rounded-full transition-all duration-200 hover:shadow-lg shrink-0"
          >
            Get Pre-Approved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={toggleMobileMenu}
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
            /* Sidebar-style menu icon (panel + lines) */
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
                <FaArrowLeft className="text-[14px] shrink-0" aria-hidden /> Back
              </button>
            ) : (
              <div className="flex items-center justify-between px-5 py-4 bg-[#292e34] border-b border-[#3b4148]">
                {/* Call Us Button */}
                <a
                  href={COMPANY.phoneHref}
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

                {/* Close Button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                  className="text-[#3fb364] p-1.5 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}

            {/* Menu List Body */}
            <div className="flex-1 overflow-y-auto bg-[#292e34]">
              {!activeSubmenu ? (
                /* Main Menu Items */
                <div className="flex flex-col">
                  {/* Loan Programs */}
                  <div className="flex items-center justify-between border-b border-[#3b4148] hover:bg-[#343a42]">
                    <Link
                      href="/mortgage-loan-programs-arizona/"
                      onClick={closeMobile}
                      className={`flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 ${
                        isLoanProgramsActive ? "text-[#3fb364]" : "text-white"
                      }`}
                    >
                      LOAN PROGRAMS
                    </Link>
                    <button
                      onClick={() => setActiveSubmenu("LOAN PROGRAMS")}
                      className="px-5 py-4 text-[#3fb364] hover:text-white shrink-0 cursor-pointer"
                      aria-label="Open Loan Programs submenu"
                    >
                      <FaAngleRight className="text-[14px]" aria-hidden />
                    </button>
                  </div>

                  {/* Calculators */}
                  <div className="flex items-center justify-between border-b border-[#3b4148] hover:bg-[#343a42]">
                    <Link
                      href="/mortgage-calculator-arizona/"
                      onClick={closeMobile}
                      className={`flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 ${
                        isCalculatorsActive ? "text-[#3fb364]" : "text-white"
                      }`}
                    >
                      CALCULATORS
                    </Link>
                    <button
                      onClick={() => setActiveSubmenu("CALCULATORS")}
                      className="px-5 py-4 text-[#3fb364] hover:text-white shrink-0 cursor-pointer"
                      aria-label="Open Calculators submenu"
                    >
                      <FaAngleRight className="text-[14px]" aria-hidden />
                    </button>
                  </div>

                  {/* Areas We Serve */}
                  <div className="flex items-center justify-between border-b border-[#3b4148] hover:bg-[#343a42]">
                    <Link
                      href="/service-areas/"
                      onClick={closeMobile}
                      className={`flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 ${
                        isAreasActive ? "text-[#3fb364]" : "text-white"
                      }`}
                    >
                      AREAS WE SERVE
                    </Link>
                    <button
                      onClick={() => setActiveSubmenu("AREAS WE SERVE")}
                      className="px-5 py-4 text-[#3fb364] hover:text-white shrink-0 cursor-pointer"
                      aria-label="Open Areas We Serve submenu"
                    >
                      <FaAngleRight className="text-[14px]" aria-hidden />
                    </button>
                  </div>

                  {/* About */}
                  <div className="flex items-center justify-between border-b border-[#3b4148] hover:bg-[#343a42]">
                    <Link
                      href="/about-us/"
                      onClick={closeMobile}
                      className={`flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 ${
                        isAboutActive ? "text-[#3fb364]" : "text-white"
                      }`}
                    >
                      ABOUT US
                    </Link>
                    <button
                      onClick={() => setActiveSubmenu("ABOUT")}
                      className="px-5 py-4 text-[#3fb364] hover:text-white shrink-0 cursor-pointer"
                      aria-label="Open About submenu"
                    >
                      <FaAngleRight className="text-[14px]" aria-hidden />
                    </button>
                  </div>

                  {/* Resources */}
                  <div className="flex items-center justify-between border-b border-[#3b4148] hover:bg-[#343a42]">
                    <Link
                      href="/blog/"
                      onClick={closeMobile}
                      className={`flex-1 font-bold text-[13.5px] uppercase tracking-wider px-5 py-4 ${
                        isResourcesActive ? "text-[#3fb364]" : "text-white"
                      }`}
                    >
                      RESOURCES
                    </Link>
                    <button
                      onClick={() => setActiveSubmenu("RESOURCES")}
                      className="px-5 py-4 text-[#3fb364] hover:text-white shrink-0 cursor-pointer"
                      aria-label="Open Resources submenu"
                    >
                      <FaAngleRight className="text-[14px]" aria-hidden />
                    </button>
                  </div>

                  {/* Contact Us */}
                  <Link
                    href="/contact-us/"
                    onClick={closeMobile}
                    className={`${mobileItemClass(isPathActive("/contact-us/"), "main")} hover:bg-[#343a42]`}
                  >
                    CONTACT US
                  </Link>

                  {/* Realtors */}
                  <Link
                    href="/realtorteam/"
                    onClick={closeMobile}
                    className={`${mobileItemClass(isPathActive("/realtorteam/"), "main")} hover:bg-[#343a42]`}
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

                  {activeSubmenu === "LOAN PROGRAMS" &&
                    LOAN_PROGRAM_MOBILE_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={mobileItemClass(isPathActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}

                  {activeSubmenu === "CALCULATORS" &&
                    CALCULATOR_MOBILE_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={mobileItemClass(isPathActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}

                  {activeSubmenu === "AREAS WE SERVE" &&
                    AREA_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={mobileItemClass(isPathActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}

                  {activeSubmenu === "ABOUT" &&
                    ABOUT_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={mobileItemClass(isPathActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}

                  {activeSubmenu === "RESOURCES" &&
                    RESOURCE_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={mobileItemClass(isPathActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}
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