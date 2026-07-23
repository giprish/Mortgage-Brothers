import React from "react";
import Image from "next/image";

const items = [
  {
    title: "Angie's List Super Service Award",
    image: "/home/angies-list.png",
    description:
      "Awarded for consistently delivering exceptional customer service, the Angie's List Super Service Award recognizes our dedication to meeting and exceeding client expectations in mortgage lending.",
  },
  {
    title: "Equal Housing Opportunity Certification",
    image: "/home/equal-housing.png",
    description:
      "This certification highlights our commitment to providing fair and equitable housing opportunities for all clients, ensuring compliance with federal non-discrimination laws in the mortgage process.",
  },
  {
    title: "Partnered with FHA Approved Institutions",
    image: "/home/fha-approved.png",
    description:
      "We are partnered with FHA-approved lending institutions allowing us to offer secure, government-backed mortgage solutions, providing peace of mind to homebuyers seeking trusted financing options.",
  },
  {
    title: "Shop Local Commitment",
    image: "/home/shop-local.png",
    description:
      "Supporting our local communities, this recognition showcases our dedication to offering personalized mortgage services that strengthen local economies and build lasting relationships.",
  },
];

const Recognition = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 lg:py-24 border-t border-[#e8e0d0]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            Recognized Excellence
          </p>
          <h2
            className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Recognition &amp; Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#e8e0d0]/60 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-16 h-16 mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <h3 className="text-[#08271B] text-[15px] font-bold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#4e5b4e] text-[13px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
