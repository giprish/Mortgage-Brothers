import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#061D15] border-t border-[#162a16] text-[#8a9a7a] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Logo & Description Column */}
          <div className="flex flex-col">
            <div className="flex flex-col leading-tight mb-5">
              <span className="text-[#3fb364] font-bold text-[14px] tracking-[0.08em] uppercase">
                MORTGAGE
              </span>
              <span className="text-[#3fb364] font-bold text-[14px] tracking-[0.08em] uppercase">
                BROTHERS
              </span>
            </div>
            <p className="text-[#a8b89a] text-[13px] leading-[1.65] mb-6 max-w-[280px]">
              Independent Arizona mortgage brokers making banks compete for your business, since day one.
            </p>
            {/* Social Icons matching azmortgagebrothers.com */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/azmortgagebrothers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] hover:text-[#174820] flex items-center justify-center font-serif font-bold text-[20px] shadow-sm transition-all duration-200 transform hover:scale-105"
                aria-label="Facebook"
              >
                f
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/azmortgagebros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] hover:text-[#174820] flex items-center justify-center shadow-sm transition-all duration-200 transform hover:scale-105"
                aria-label="X (Twitter)"
              >
                <svg className="w-4.5 h-4.5 fill-[#22632d]" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/azmortgagebrothers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] hover:text-[#174820] flex items-center justify-center font-sans font-bold text-[15px] tracking-tighter shadow-sm transition-all duration-200 transform hover:scale-105"
                aria-label="LinkedIn"
              >
                in
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@TheMortgageBrothersTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ebf1f5] hover:bg-white text-[#22632d] hover:text-[#174820] flex items-center justify-center shadow-sm transition-all duration-200 transform hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-[#22632d]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Loans */}
          <div>
            <h4 className="text-[#3fb364] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">
              Loans
            </h4>
            <ul className="flex flex-col gap-3">
              {["Conventional", "FHA", "VA", "Refinance"].map((item) => (
                <li key={item}>
                  <a
                    href={`/mortgage-loan-programs-arizona/#${item.toLowerCase()}`}
                    className="text-[#a8b89a] hover:text-white text-[13px] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-[#3fb364] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "The Team", "Reviews", "Calculators", "Areas We Serve", "FAQ"].map((item) => {
                let href = `/#${item.toLowerCase().replace(" ", "-")}`;
                if (item === "FAQ") href = "/faq/";
                if (item === "About Us") href = "/about-us/";
                if (item === "Reviews") href = "/client-mortgage-reviews/";
                if (item === "Calculators") href = "/calculators/";
                if (item === "Areas We Serve") href = "/service-areas/";
                if (item === "The Team") href = "/team/";
                return (
                  <li key={item}>
                    <a
                      href={href}
                      className="text-[#a8b89a] hover:text-white text-[13px] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[#3fb364] text-[12px] font-semibold tracking-[0.12em] uppercase mb-5">
              Contact
            </h4>
            <p className="text-[#a8b89a] text-[13px] leading-relaxed mb-4 max-w-[240px]">
              1599 East Orangewood Ave, Suite 200, Phoenix, AZ 85020
            </p>
            <a
              href="tel:+16025352171"
              className="text-[#a8b89a] hover:text-white text-[13px] font-semibold transition-colors duration-200"
            >
              (602) 535-2171
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-[#162a16] mb-8"></div>

        {/* Bottom Footer Info */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Equal Housing Lender */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Equal Housing Icon */}
            <div className="w-6 h-6 border border-[#a8b89a] flex items-center justify-center rounded-sm p-0.5" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a8b89a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
            </div>
            <span className="text-[#a8b89a] text-[11px] font-semibold uppercase tracking-wider leading-none">
              Equal Housing<br />Lender
            </span>
          </div>

          {/* Disclaimers & Licensing */}
          <div className="flex-1 max-w-4xl lg:ml-8">
            <p className="text-[#8a9a7a] text-[11px] leading-[1.6]">
              Mortgage Brothers L.L.C. &bull; NMLS #1607154 &bull; AZ License #0937814 &bull; 1599 East Orangewood Ave, Suite 200, Phoenix, AZ 85020 &bull; (602) 535-2171. All loans subject to underwriter approval. &copy; 2026 Mortgage Brothers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
