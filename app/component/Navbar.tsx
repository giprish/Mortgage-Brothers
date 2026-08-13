import Link from "next/link";
import { COMPANY } from "@/lib/company";
import MobileNavButton from "./MobileNavButton";

/**
 * Server-rendered navbar. Desktop megamenus use CSS hover (no JS).
 * Only the mobile hamburger is a client island; drawer code-splits on open.
 */
export default function Navbar() {
  return (
    <header className="w-full">
      <nav
        aria-label="Main Navigation"
        className="w-full bg-[#08271B] border-b border-[#1a3a1a] fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-10 flex items-center justify-between h-[64px] sm:h-[72px]">
          <Link
            prefetch={false}
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity duration-200 shrink-0"
          >
            <img
              src={COMPANY.logoSrc}
              alt="Mortgage Brothers"
              width={150}
              height={48}
              className="h-[40px] sm:h-[48px] w-auto max-w-[150px] object-contain"
              decoding="async"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5 xl:px-3 whitespace-nowrap">
            <div className="relative group py-2">
              <Link
                prefetch={false}
                href="/mortgage-loan-programs-arizona/"
                className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors"
              >
                Loan Programs
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full pt-2 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-[#e8e0d0]/60 p-4 w-[280px] flex flex-col gap-2">
                  <Link prefetch={false} href="/conventional-home-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d]">Conventional</Link>
                  <Link prefetch={false} href="/fha-home-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d]">FHA</Link>
                  <Link prefetch={false} href="/va-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d]">VA Loans</Link>
                  <Link prefetch={false} href="/jumbo-loans-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d]">Jumbo</Link>
                  <Link prefetch={false} href="/reverse-mortgage-arizona/" className="text-[#1a3a1a] text-[13.5px] font-medium hover:text-[#2d5a2d]">Reverse Mortgage</Link>
                  <Link prefetch={false} href="/mortgage-loan-programs-arizona/" className="text-[#3fb364] text-[13.5px] font-semibold">View all →</Link>
                </div>
              </div>
            </div>

            <Link prefetch={false} href="/mortgage-calculator-arizona/" className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors">
              Calculators
            </Link>
            <Link prefetch={false} href="/service-areas/" className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors">
              Areas We Serve
            </Link>
            <Link prefetch={false} href="/about-us/" className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors">
              About
            </Link>
            <Link prefetch={false} href="/blog/" className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors">
              Resources
            </Link>
            <Link prefetch={false} href="/realtorteam/" className="text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors">
              Realtors
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 whitespace-nowrap">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-1.5 text-white text-[13px] xl:text-[14px] font-medium hover:text-[#3fb364] transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>
            <Link
              prefetch={false}
              href="/#get-pre-approved"
              className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[12.5px] xl:text-[13px] font-semibold px-3.5 xl:px-4.5 py-2 rounded-full transition-all"
            >
              Get Pre-Approved
            </Link>
          </div>

          <MobileNavButton />
        </div>
      </nav>
    </header>
  );
}
