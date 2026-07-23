import React from "react";

const features = [
  {
    title: "Local Expertise",
    description:
      "Our Arizona roots ensure tailored strategies for every region, whether you're buying in Scottsdale or refinancing in Tucson, or looking to get out of the heat and buy a second home in Flagstaff.",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Wide Lender Network",
    description:
      "We connect you with multiple lenders to find the best rates and terms available in Arizona.",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Fast Pre-Approvals",
    description:
      "Our streamlined process ensures you can make competitive offers in the fast-moving Arizona market.",
    icon: (
      <svg className="w-6 h-6 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const snippets = [
  {
    initials: "H.O.",
    text: "I have been working with Eddie for years, same attention to details and excellent communication.",
  },
  {
    initials: "T.L.",
    text: "We recently completed a refinance with Mortgage Brothers, and I can honestly say it was the best refinance experience.",
  },
  {
    initials: "P.W.",
    text: "We have secured two home mortgages with Tom. Tom is very diligent in his research and has great follow up.",
  },
];

const stats = [
  { value: "24", suffix: "hrs", label: "Hours to Preapproval" },
  { value: "40+", suffix: "", label: "Partner Banks" },
  { value: "98", suffix: "%", label: "Closing Success" },
];

const BrokersAdvocate = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            Why Work With Us
          </p>
          <h2
            className="text-[#08271B] text-[32px] lg:text-[42px] font-normal leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Are Brokers Advocating For You
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
            The Mortgage Brothers have helped thousands of families secure their dream homes in
            Arizona. From first-time buyers in Phoenix, to an investment property in Mesa. How
            about a second home in Flagstaff, Payson, or Pinetop? We provide personalized
            solutions tailored to the unique needs of Arizona families. As mortgage brokers, we
            shop your scenario so banks compete for your business! We have access to rates and
            loan programs other banks can&apos;t offer.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3fb364]/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3
                className="text-[#08271B] text-[19px] font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Review Snippets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 lg:mb-20">
          {snippets.map((s) => (
            <div
              key={s.initials}
              className="bg-white/70 border border-[#e8e0d0]/60 rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#08271B] text-[#3fb364] flex items-center justify-center text-[12.5px] font-bold">
                {s.initials}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#b89a5a">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3a443a] text-[13.5px] leading-relaxed italic">
                  &ldquo;{s.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-[#08271B] rounded-2xl px-8 py-10 lg:py-12 grid grid-cols-3 divide-x divide-[#1a3a1a]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-2">
              <span
                className="text-[#3fb364] text-[32px] lg:text-[42px] font-semibold leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
                <span className="text-[20px] lg:text-[26px]">{stat.suffix}</span>
              </span>
              <span className="text-[#c8c8b8] text-[12.5px] lg:text-[13.5px] font-medium mt-2.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokersAdvocate;
