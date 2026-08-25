import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, LOAN_OFFICERS } from "@/lib/company";

const insideLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Mortgage Broker VS Banker", href: "/the-broker-advantage/" },
  { label: "Client Reviews", href: "/client-mortgage-reviews/" },
  { label: "News and Updates", href: "/blog/" },
  { label: "Job Opportunities", href: "/job-opportunities/" },
  { label: "Loan Applications", href: "/loan-applications/" },
  { label: "Mortgage Rates", href: "/mortgage-rates-tool-arizona/" },
  { label: "Mortgage Calculator", href: "/mortgage-calculator-arizona/" },
  { label: "Mortgage 101", href: "/mortgage-101/" },
  { label: "Credit Score Quiz", href: "/credit-score-quiz/" },
  { label: "Glossary", href: "/glossary/" },
];

const loanLinks = [
  {
    label: "Conventional VS FHA Loans",
    href: "/conventional-vs-fha-loans-arizona/",
  },
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Mortgage for Excellent Credit", href: "/mortgage-for-excellent-credit/" },
  { label: "Home Loans for Good Credit", href: "/mortgage-for-good-credit/" },
  { label: "Mortgage Options for Poor Credit", href: "/mortgage-for-poor-credit/" },
  { label: "Sell Home for Cash", href: "/sell-my-house-fast-arizona/" },
  { label: "Areas we Serve", href: "/service-areas/" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    data-no-form-modal="true"
    className="footer-link block text-[14px] leading-snug py-1 transition-colors duration-200"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      data-no-form-modal="true"
      className="w-full bg-[#32353C] text-[#c8cdc8] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-14 lg:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 mb-12">
          <div>
            <h3 className="text-[#6bcf84] text-[16px] font-semibold mb-3">
              Inside Mortgage Brothers
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />
            <ul className="flex flex-col">
              {insideLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3">
              <Link prefetch={false}
                href="/mortgage-loan-programs-arizona/"
                className="text-[#6bcf84] text-[16px] font-semibold hover:text-[#6bcf84] transition-colors"
              >
                Arizona Loan Services
              </Link>
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />
            <ul className="flex flex-col">
              {loanLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#6bcf84] text-[16px] font-semibold mb-3">
              {COMPANY.legalName}
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />

            <div className="text-[#e8ece8] text-[14px] leading-[1.7] mb-5">
              <p className="font-medium">{COMPANY.nmlsDisplay}</p>
              <p className="mb-3">{COMPANY.azLicenseDisplay}</p>
              <p>
                <a
                  href={COMPANY.addressMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6bcf84] transition-colors"
                >
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.addressLine2}
                </a>
              </p>
              <p className="mt-2 mb-5">
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-[#6bcf84] transition-colors font-medium"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </p>

              <div className="mb-3">
                <p className="font-semibold text-white">{LOAN_OFFICERS.eddie.name}</p>
                <p className="text-[#c8cdc8]">{LOAN_OFFICERS.eddie.nmlsDisplay}</p>
                <p className="text-[#c8cdc8]">{LOAN_OFFICERS.eddie.azLicenseDisplay}</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-white">{LOAN_OFFICERS.thomas.name}</p>
                <p className="text-[#c8cdc8]">{LOAN_OFFICERS.thomas.nmlsDisplay}</p>
                <p className="text-[#c8cdc8]">{LOAN_OFFICERS.thomas.azLicenseDisplay}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center font-serif font-bold text-[20px] transition-transform hover:scale-105"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={COMPANY.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center transition-transform hover:scale-105"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={COMPANY.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center font-sans font-bold text-[15px] transition-transform hover:scale-105"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={COMPANY.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center transition-transform hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">

          {/* Left: Logo + Verify Licenses card + Disclaimer */}
          <div>
            {/* Mortgage Brothers Logo */}
            <Link prefetch={false}
              href="/"
              className="inline-block mb-5 hover:opacity-90 transition-opacity"
            >
              <Image
                src={COMPANY.logoSrc}
                alt="Mortgage Brothers"
                width={104}
                height={34}
                sizes="104px"
                loading="lazy"
                className="h-[30px] w-auto max-w-[104px] object-contain"
              />
            </Link>

            {/* Verify our licenses card */}
            <div className="border border-white/10 rounded-xl p-5 mb-6 bg-white/5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#3fb364]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#6bcf84]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-[13px] leading-[1.7]">
                  <p className="font-semibold text-white mb-1">Verify our licenses</p>
                  <p className="text-[#cdd3cd]">
                    Check our Mortgage Broker License through the{" "}
                    <a
                      href={COMPANY.nmlsConsumerAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6bcf84] underline underline-offset-2 hover:text-[#6bcf84]"
                    >
                      official NMLS Consumer Access website
                    </a>
                    . Arizona licenses are verifiable via{" "}
                    <a
                      href={COMPANY.nmlsConsumerAccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6bcf84] underline underline-offset-2 hover:text-[#6bcf84]"
                    >
                      NMLS Consumer Access
                    </a>{" "}
                    and the Arizona Department of Financial Institutions{" "}
                    <a
                      href="https://azdifi.portalus.thentiacloud.net/webs/portal/register/#/profile/LO-0911422/0/20/all/all/false/66185b7fa32d990aef41475d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6bcf84] underline underline-offset-2 hover:text-[#6bcf84]"
                    >
                      Loan Originator License
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Information Disclaimer */}
            <div className="text-[13px] leading-[1.75] text-[#cdd3cd]">
              <p className="text-[#6bcf84] font-bold tracking-wide text-[11px] uppercase mb-2">
                Information Disclaimer
              </p>
              <p className="mb-4">
                Content on this website is provided for informational purposes only and does not
                constitute an offer to lend. Rates, terms, and program availability may change
                without notice.{" "}
                <Link prefetch={false} href="/contact-us/" className="text-[#6bcf84] underline underline-offset-2 hover:text-[#6bcf84]">
                  Contact our loan officers
                </Link>{" "}
                for the most up-to-date information. All loans subject to underwriter approval.
              </p>
              <p>
                {COMPANY.legalName} is an{" "}
                <strong className="text-white font-semibold">Equal Housing Lender</strong> and an{" "}
                <strong className="text-white font-semibold">Equal Opportunity Employer</strong>.
              </p>
            </div>
          </div>

          {/* Right: Accredited & Recognized */}
          <div className="flex flex-col items-center lg:items-end pt-0 lg:pt-[62px]">
            {/* <p className="text-[#a8aea8] text-[11px] font-bold tracking-[0.14em] uppercase mb-4">
              Accredited &amp; Recognized
            </p> */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[320px] sm:max-w-[280px]">
              <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center min-h-[88px] gap-1">
                <Image
                  src="/home/equal-housing.png"
                  alt="Equal Housing Opportunity"
                  width={72}
                  height={72}
                  sizes="72px"
                  loading="lazy"
                  className="object-contain max-h-[56px] w-auto"
                />
                <span className="text-[10px] text-[#c8cdc8] text-center leading-tight">
                  {COMPANY.equalHousingLabel}
                </span>
              </div>
              <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
                <Image
                  src="/home/angies-list.png"
                  alt="Angie's List Super Service Award"
                  width={90}
                  height={72}
                  sizes="90px"
                  loading="lazy"
                  className="object-contain max-h-[72px] w-auto"
                />
              </div>
              <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
                <Image
                  src="/home/shop-local.png"
                  alt="Shop Local"
                  width={72}
                  height={72}
                  sizes="72px"
                  loading="lazy"
                  className="object-contain max-h-[72px] w-auto"
                />
              </div>
              <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
                <Image
                  src="/home/fha-approved-sm.webp"
                  alt="FHA Approved Lending Partner"
                  width={90}
                  height={67}
                  sizes="90px"
                  loading="lazy"
                  decoding="async"
                  className="object-contain max-h-[72px] w-auto"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full h-px bg-white/10 mb-5" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-4 min-w-0">
            {/* <Link prefetch={false} href="/" className="shrink-0 hover:opacity-90 transition-opacity">
             
              <img
                src={COMPANY.logoSrc}
                alt="Mortgage Brothers"
                width={120}
                height={40}
                className="h-[36px] w-auto object-contain"
              />
            </Link> */}
            <span className="text-[#d6dbd6] text-[11px] sm:text-[12px] leading-snug break-words" suppressHydrationWarning>
              © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.nmlsDisplay}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[12px] shrink-0">
            <Link prefetch={false} href="/privacy-policy/" className="text-[#6bcf84] hover:underline font-medium">
              Privacy Policy
            </Link>
            <span className="text-[#6a706a]">·</span>
            <Link prefetch={false} href="/terms-of-use/" className="text-[#6bcf84] hover:underline font-medium">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
