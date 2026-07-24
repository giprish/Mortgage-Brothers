import React from "react";
import Link from "next/link";
import Image from "next/image";

const insideLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "Mortgage Broker VS Banker", href: "/the-broker-advantage/" },
  { label: "Client Reviews", href: "/client-mortgage-reviews/" },
  { label: "News and Updates", href: "/blog/" },
  { label: "Job Opportunities", href: "/job-opportunities/" },
  { label: "Loan Applications", href: "/loan-applications/" },
  { label: "Mortgage Rates", href: "/mortgage-rates-tool-arizona/" },
  { label: "Mortgage Calculator", href: "/calculators/" },
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
  { label: "Service Areas", href: "/service-areas/" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[#e8ece8] hover:text-[#3fb364] text-[14px] leading-snug transition-colors duration-200"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#32353C] text-[#c8cdc8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 lg:pt-16 pb-10">
        {/* Three main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-12">
          {/* Column 1 — Inside Mortgage Brothers */}
          <div>
            <h3 className="text-[#3fb364] text-[16px] font-semibold mb-3">
              Inside Mortgage Brothers
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />
            <ul className="flex flex-col gap-2.5">
              {insideLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Arizona Loan Services */}
          <div>
            <h3 className="mb-3">
              <Link
                href="/mortgage-loan-programs-arizona/"
                className="text-[#3fb364] text-[16px] font-semibold hover:text-[#6bcf84] transition-colors"
              >
                Arizona Loan Services
              </Link>
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />
            <ul className="flex flex-col gap-2.5">
              {loanLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company / Licenses / Contact */}
          <div>
            <h3 className="text-[#3fb364] text-[16px] font-semibold mb-3">
              Mortgage Brothers LLC
            </h3>
            <div className="w-full h-px bg-[#3fb364]/70 mb-5" />

            <div className="text-[#e8ece8] text-[14px] leading-[1.7] mb-5">
              <p className="font-medium">NMLS #1007154</p>
              <p className="mb-3">AZ License #MB0922514</p>
              <p>
                <a
                  href="https://goo.gl/maps/GVLYa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3fb364] transition-colors"
                >
                  1599 East Orangewood Ave Suite 200
                  <br />
                  Phoenix, AZ 85020
                </a>
              </p>
              <p className="mt-2 mb-5">
                <a href="tel:+16025352171" className="hover:text-[#3fb364] transition-colors font-medium">
                  +1 602 535 2171
                </a>
              </p>

              <div className="mb-3">
                <p className="font-semibold text-white">Eddie Knoell</p>
                <p className="text-[#c8cdc8]">NMLS #210917</p>
                <p className="text-[#c8cdc8]">AZ License #LO-0911422</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-white">Thomas Knoell</p>
                <p className="text-[#c8cdc8]">NMLS #1618695</p>
                <p className="text-[#c8cdc8]">AZ License #LO-0942229</p>
              </div>
            </div>

            {/* Social icons — circular light badges like live site */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/azmortgagebrothers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center font-serif font-bold text-[20px] transition-transform hover:scale-105"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://x.com/azmortgagebros"
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
                href="https://www.linkedin.com/company/azmortgagebrothers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] flex items-center justify-center font-sans font-bold text-[15px] transition-transform hover:scale-105"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.youtube.com/@TheMortgageBrothersTeam"
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

        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom: disclaimers + badges */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-start">
          <div className="text-[12px] leading-[1.7] text-[#a8aea8] max-w-3xl">
            <p className="mb-3">
              You can verify our Mortgage Broker License through the{" "}
              <a
                href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1007154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] hover:underline"
              >
                official NMLS Consumer Access website
              </a>
              .
            </p>
            <p className="mb-3">
              You can verify our licenses on the official regulatory websites:{" "}
              <a
                href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1007154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] hover:underline"
              >
                NMLS Consumer Access
              </a>{" "}
              for our Mortgage Broker License and Arizona Department of Financial Institutions for
              our{" "}
              <a
                href="https://azdifi.portalus.thentiacloud.net/webs/portal/register/#/profile/LO-0911422/0/20/all/all/false/66185b7fa32d990aef41475d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] hover:underline"
              >
                Loan Originator License
              </a>
              .
            </p>
            <p className="mb-3">All loans subject to underwriter approval.</p>
            <p className="mb-3">
              <span className="font-semibold text-[#c8cdc8]">INFORMATION DISCLAIMER:</span> Content
              on this website is provided for informational purposes only and does not constitute an
              offer to lend. Information presented may not reflect current rates, terms, or program
              availability. Please{" "}
              <Link href="/contact-us/#Get-in-Touch" className="text-[#3fb364] hover:underline">
                contact our loan officers
              </Link>{" "}
              for the most up-to-date information.
            </p>
            <p className="mb-3">Mortgage Brothers LLC is an Equal Opportunity Employer.</p>
            <p className="mb-3">
              <Link href="/privacy-policy/" className="text-[#3fb364] hover:underline">
                Privacy Policy
              </Link>
              <span className="mx-2 text-[#6a706a]">|</span>
              <Link href="/terms-of-use/" className="text-[#3fb364] hover:underline">
                Terms of Use
              </Link>
            </p>
            <p className="text-[#8a908a]">Copyright © {new Date().getFullYear()} Mortgage Brothers LLC</p>
          </div>

          {/* Recognition badges */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[280px] mx-auto lg:mx-0">
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
              <Image
                src="/home/equal-housing.png"
                alt="Equal Housing Opportunity"
                width={72}
                height={72}
                className="object-contain max-h-[72px] w-auto"
              />
            </div>
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
              <Image
                src="/home/angies-list.png"
                alt="Angie's List Super Service Award"
                width={90}
                height={72}
                className="object-contain max-h-[72px] w-auto"
              />
            </div>
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
              <Image
                src="/home/shop-local.png"
                alt="Shop Local"
                width={72}
                height={72}
                className="object-contain max-h-[72px] w-auto"
              />
            </div>
            <div className="bg-white/5 rounded-lg p-3 flex items-center justify-center min-h-[88px]">
              <Image
                src="/home/fha-approved.png"
                alt="FHA Approved Lending Partner"
                width={90}
                height={72}
                className="object-contain max-h-[72px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
