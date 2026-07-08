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
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Yelp */}
              <a
                href="#yelp"
                className="w-9 h-9 rounded-full bg-[#142814] hover:bg-[#1f3d1f] border border-[#1b341b] flex items-center justify-center text-[#8a9a7a] hover:text-white transition-all duration-200"
                aria-label="Yelp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 8V16" />
                  <path d="M8 12H16" />
                </svg>
              </a>
              {/* Google */}
              <a
                href="#google"
                className="w-9 h-9 rounded-full bg-[#142814] hover:bg-[#1f3d1f] border border-[#1b341b] flex items-center justify-center text-[#8a9a7a] hover:text-white transition-all duration-200"
                aria-label="Google"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-[#142814] hover:bg-[#1f3d1f] border border-[#1b341b] flex items-center justify-center text-[#8a9a7a] hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                    href={`/loan-programs#${item.toLowerCase()}`}
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
              {["About Us", "The Team", "Reviews", "Calculators", "FAQ"].map((item) => {
                let href = `/#${item.toLowerCase().replace(" ", "-")}`;
                if (item === "FAQ") href = "/faq";
                if (item === "About Us") href = "/about";
                if (item === "Reviews") href = "/reviews";
                if (item === "Calculators") href = "/calculators";
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
              1833 E Queensborough Ave, Ste 202, Phoenix, AZ 85020
            </p>
            <a
              href="tel:6028352171"
              className="text-[#a8b89a] hover:text-white text-[13px] font-semibold transition-colors duration-200"
            >
              (602) 835-2171
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
              Mortgage Brothers L.L.C. &bull; NMLS #1607154 &bull; AZ License #0937814 &bull; 1833 E Queensborough Ave, Suite 202, Phoenix, AZ 85020 &bull; (602) 835-2171. All loans subject to underwriter approval. &copy; 2026 Mortgage Brothers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
