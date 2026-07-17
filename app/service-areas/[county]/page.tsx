"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { getCountyName } from "../../../lib/cityData";

const countiesCities: Record<string, string[]> = {
  "maricopa-county-az": ["Phoenix","Scottsdale","Mesa","Chandler","Gilbert","Glendale","Tempe","Peoria","Surprise","Goodyear","Avondale","Buckeye","Queen Creek","Fountain Hills","Paradise Valley","Cave Creek","Carefree","Anthem","Sun City","Sun City West","Litchfield Park","Wickenburg","Apache Junction","Guadalupe","El Mirage","Tolleson","Youngtown","Gila Bend"],
  "pima-county-az": ["Tucson","Oro Valley","Marana","Sahuarita","Vail","Green Valley","Catalina Foothills","South Tucson"],
  "pinal-county-az": ["Casa Grande","Maricopa","San Tan Valley","Florence","Coolidge","Eloy","Apache Junction","Superior","Kearny","Mammoth"],
  "yavapai-county-az": ["Prescott","Prescott Valley","Sedona","Cottonwood","Chino Valley","Camp Verde","Dewey-Humboldt","Clarkdale","Jerome"],
  "coconino-county-az": ["Flagstaff","Sedona","Williams","Page","Fredonia","Tusayan"],
  "navajo-county-az": ["Show Low","Pinetop-Lakeside","Holbrook","Taylor","Snowflake","Winslow"],
  "apache-county-az": ["St. Johns","Eagar","Springerville","Chinle","Window Rock"],
  "gila-county-az": ["Payson","Globe","Miami","Star Valley","Hayden"],
  "cochise-county-az": ["Sierra Vista","Douglas","Bisbee","Benson","Willcox","Tombstone","Huachuca City"],
  "graham-county-az": ["Safford","Thatcher","Pima"],
  "greenlee-county-az": ["Clifton","Duncan","Morenci"],
  "santa-cruz-county-az": ["Nogales","Rio Rico","Tubac","Patagonia"],
  "mohave-county-az": ["Lake Havasu City","Kingman","Bullhead City","Fort Mohave","Golden Valley","Colorado City"],
  "la-paz-county-az": ["Parker","Quartzsite","Salome","Bouse"],
  "yuma-county-az": ["Yuma","San Luis","Somerton","Wellton"]
};

const regionMap: Record<string, string> = {
  "maricopa-county-az": "Greater Phoenix",
  "pima-county-az": "Southern Arizona",
  "pinal-county-az": "Greater Phoenix",
  "yavapai-county-az": "Northern Arizona",
  "coconino-county-az": "Northern Arizona",
  "navajo-county-az": "Northern Arizona",
  "apache-county-az": "Northern Arizona",
  "gila-county-az": "Northern Arizona",
  "cochise-county-az": "Southern Arizona",
  "graham-county-az": "Southern Arizona",
  "greenlee-county-az": "Southern Arizona",
  "santa-cruz-county-az": "Southern Arizona",
  "mohave-county-az": "Western Arizona",
  "la-paz-county-az": "Western Arizona",
  "yuma-county-az": "Western Arizona"
};

export default function CountyPage() {
  const params = useParams();
  const countySlug = (params?.county as string) || "";

  const countyName = useMemo(() => getCountyName(countySlug), [countySlug]);
  const cities = countiesCities[countySlug] || [];
  const region = regionMap[countySlug] || "";

  if (!countyName || cities.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-[#052316] text-[32px] font-playfair mb-4">County Not Found</h1>
            <p className="text-[#4e5b4e] text-[15px] mb-8">The county you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/service-areas" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all">
              Browse All Areas →
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#e8e0d0]/40 py-3.5 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] font-medium text-[#4e5b4e]">
            <Link href="/service-areas" className="hover:text-[#3fb364] transition-colors">Areas We Serve</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#052316] font-semibold">{countyName}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 px-6 lg:px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none -mr-16 -mt-16"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">{region}</span>
            <h1 className="text-white text-[34px] lg:text-[44px] font-playfair font-normal leading-[1.15] mb-4">
              {countyName} Mortgage Experts
            </h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl">
              Local home loan solutions across {countyName}. We help buyers and homeowners in {cities.length} communities.
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="w-full py-16 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[#052316] text-[22px] lg:text-[28px] font-playfair font-normal">Cities & towns in {countyName}</h2>
              <span className="text-[#8a9a7a] text-[13px]">{cities.length} communities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cities.map((city) => {
                const citySlug = city.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");
                return (
                  <Link key={city} href={`/service-areas/${countySlug}/${citySlug}`}
                    className="bg-white rounded-2xl p-5 border border-[#e8e0d0]/60 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-[#3fb364]/30 transition-all duration-300 flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-[#e2edd8] text-[#2d5a2d] font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                      {city.substring(0, 2)}
                    </div>
                    <span className="text-[#052316] text-[14px] font-bold group-hover:text-[#3fb364] transition-colors">{city}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 px-6 bg-[#052316] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-[26px] lg:text-[32px] font-playfair font-normal mb-4">Ready to get started in {countyName}?</h2>
            <p className="text-[#c8c8b8] text-[15px] mb-6">Start your pre-approval in about three minutes — no cost, no obligation.</p>
            <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md">
              Get Pre-Approved →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
