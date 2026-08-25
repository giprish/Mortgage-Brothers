import Link from "next/link";

const loanPrograms = [
  {
    title: "Conventional Home Loans",
    href: "/conventional-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#e2edd8" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "FHA Home Loans",
    href: "/fha-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" fill="#e2edd8" />
      </svg>
    ),
  },
  {
    title: "First-Time Home Buyer",
    href: "/first-time-home-buyer-arizona-guide/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#e2edd8" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "VA Loans",
    href: "/va-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" fill="#e2edd8" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Jumbo Loans",
    href: "/jumbo-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" fill="#e2edd8" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    title: "Reverse Mortgage",
    href: "/reverse-mortgage-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    title: "Reverse Mortgage for Purchase",
    href: "/reverse-mortgage-home-purchase-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="#e2edd8" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    title: "FHA Streamline Refinance",
    href: "/fha-streamline-refinance-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#e2edd8" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Refinancing",
    href: "/refinancing-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="#e2edd8" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Private Money Lender",
    href: "/private-money-lender-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" />
        <path d="M6 18v-7" fill="#e2edd8" />
        <path d="M10 18v-7" fill="#e2edd8" />
        <path d="M14 18v-7" fill="#e2edd8" />
        <path d="M18 18v-7" fill="#e2edd8" />
        <path d="m12 2-10 5h20Z" fill="#e2edd8" />
      </svg>
    ),
  },
];

export default function MortgageSolutionsGrid({ placeName }: { placeName: string }) {
  return (
    <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight mb-4">
            Explore Our {placeName} Mortgage Solutions
          </h2>
          <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.7] max-w-2xl mx-auto">
            Comprehensive mortgage programs designed specifically for {placeName}&apos;s unique real estate market and homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loanPrograms.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              prefetch={false}
              className="bg-white border border-[#3fb364]/30 hover:border-[#3fb364] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative min-h-[190px] justify-between"
            >
              <div className="w-12 h-1 bg-[#3fb364] rounded-full mx-auto mb-3" />

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                {program.icon}
              </div>

              <span className="text-[#32353C] text-[15px] font-bold leading-snug px-1">
                {program.title}
              </span>

              <div className="w-full flex justify-end mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3fb364"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
