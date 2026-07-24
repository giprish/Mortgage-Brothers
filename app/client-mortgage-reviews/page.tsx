"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const reviews = [
  {
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. Every step of the process was done very professionally and friendly. I highly recommend Eddie's mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith",
    location: "Avondale, Arizona",
  },
  {
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier.",
    author: "Elizabeth Todd",
    location: "H2 Realty, Phoenix, Arizona",
  },
  {
    text: "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern. All questions were answered promptly and completely, like dealing with a trusted family member. Thanks again Eddie!!!",
    author: "Thomas and Carol Milberry",
    location: "Queen Creek, Arizona",
  },
  {
    text: "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he's picked up the phone and called to let me know where we are. He closes every deal and communicates through it well.",
    author: "Nancy Perry",
    location: "Solutions Real Estate, Avondale, Arizona",
  },
  {
    text: "My fiancé and I were very nervous about buying our first house. The service Eddie provided made the whole process very easy. Eddie answered all the questions we had. He provided us with prompt and accurate service.",
    author: "Sean Cassidy",
    location: "Phoenix, Arizona",
  },
  {
    text: "I continue to refer my clients to you because I know I can count on you to provide a fast response and a courteous and professional service. You are the only mortgage contact I have used that provides daily updates on interest rates, costs, etc.",
    author: "Linda Martin",
    location: "Coldwell Banker, Phoenix, Arizona",
  },
  {
    text: "This is my 8th home purchase and mortgage. Working with Eddie has been by far, the most simple, straight forward experience I've ever had obtaining a mortgage.",
    author: "Denise Roeder",
    location: "Chandler, Arizona",
  },
  {
    text: "Working with Eddie has been the smoothest portion of my relocation. Eddie was always on focus. He answered my questions by cell phone after hours when most lenders are turning it off for the day. I would and will recommend Eddie Knoell to anyone looking for a top notch loan officer.",
    author: "Teresa Beckman",
    location: "Chandler, Arizona",
  },
  {
    text: "Thank you so much for all you have done in helping me complete my loan and getting me house. I am loving it and all is well.",
    author: "Donald and Connie Geahlen",
    location: "Mesa Realty, Mesa, Arizona",
  },
  {
    text: "Eddie has been a great help to me. He has refinanced many properties for me and are in the process of refinancing several more now. He has always been very professional and I have recommended them to many people.",
    author: "Eric and Joy Stevens",
    location: "Phoenix, Arizona",
  },
  {
    text: "Eddie helped us refinance our home. He was a very good communicator and honest. Got the job done even when His hands were tied due to regulations. Thank you Eddie!",
    author: "Matthew and Christine Mostrom",
    location: "Chandler, Arizona",
  },
  {
    text: "Eddie offered us professional service. Most importantly he is honest! I felt 100% confident that he was doing everything possible to get the best loan for us closed in a timely manner. I will definitely refer him to friends and family.",
    author: "John and Theresa Gorraiz",
    location: "Gilbert, Arizona",
  },
  {
    text: "Very Satisfied! Eddie's prompt returned calls, professionalism and clarification in matters that I did not understand was exceptional.",
    author: "Hope Rosky",
    location: "Phoenix, Arizona",
  },
  {
    text: "Shopping for a new loan can be very intimidating. I found that different lenders often make promises they just can't keep. Eddie delivers every time with accurate and timely loans. NO surprises at the closing table!",
    author: "Rich Eneim",
    location: "Phoenix, Arizona",
  },
  {
    text: "You closed our house loan in 17 days!!! We can't thank you enough for all you did to help us close this house in the three week deadline we were given. We will never go to a large bank for a home loan again, you are our loan guy period!",
    author: "James Robbins",
    location: "Phoenix, Arizona",
  },
  {
    text: "The experience working with Eddie was good. Have not done a mortgage in a long time and had no idea really what I was doing. Eddie provided me with everything I needed and explained what all the charges were.",
    author: "Patricia Barrier",
    location: "Surprise, Arizona",
  },
  {
    text: "Eddie went above the call of duty on 3 separate transactions for us. Each time we challenged him to work under different circumstances & each time he came through and exceeded our expectations!",
    author: "Anita Sanda",
    location: "HomeSmart, Surprise, Arizona",
  },
  {
    text: "Eddie Knoell was the utmost professional. He is detail oriented, on top of the loan and process. He was able to adjust and accommodate any glitch that came our way. We would highly recommend Eddie.",
    author: "Jeanne Morain",
    location: "Gilbert, Arizona",
  },
  {
    text: "Thank you Eddie for the fast closing of our loan. Our loan closed in 30 days thanks to you and your staff's diligence. We appreciate the fact that you gave us several financing options.",
    author: "Diane Stackwick",
    location: "Phoenix, Arizona",
  },
  {
    text: "I appreciated your good communication and frequent updates. I also appreciate every time I call you I never got a recording — always able to talk to someone in person. You also kept on top of things and were able to close early.",
    author: "Mike Cameli",
    location: "DPR Realty, Tempe, Arizona",
  },
  {
    text: "Thank you so much for the professional way in which you dealt with my buyers. They remarked that they felt you gave them the time and attention they wanted and that you responded to their questions in a timely manner.",
    author: "James Smith",
    location: "Queen Creek, Arizona",
  },
  {
    text: "Thank you for outstanding service in the refinance of our home! Not only were you professional and courteous, you were realistic and honest. Our transaction was easier than we could have imagined.",
    author: "Kristy Bartusek",
    location: "Tempe, Arizona",
  },
  {
    text: "Eddie works fast and is thorough. He gave us a great deal. We were financed in no time, and it was a lot faster and easier than any other loan process we've ever gone through.",
    author: "Arlyn and Jennifer Stotts",
    location: "Phoenix, Arizona",
  },
  {
    text: "I am a Realtor who uses Eddie as my personal broker. Eddie is the first lender that I recommend to my clients. Eddie is dependable, hardworking, and knowledgeable. The house will close on time and my clients will be extremely happy.",
    author: "Teresa Eneim",
    location: "Scottsdale, Arizona",
  },
  {
    text: "Thank you for your service & advice on the purchase of our 2ND home. We would have been lost without your help & guidance. We have & will continue to recommend you to family & friends as the very best Phoenix has to offer in mortgage financing.",
    author: "Michael and Vory Flis",
    location: "Phoenix, Arizona",
  },
  {
    text: "Eddie refinanced our home with professionalism, timeliness, and accuracy. He was courteous, kept us informed, and got us a good rate.",
    author: "Gregory LeBeau",
    location: "Scottsdale, Arizona",
  },
  {
    text: "You made it happen so fast! Thanks for all your help! Your communication skills were excellent and your proficiency was unbelievable. Thanks again for treating us like we were your only client.",
    author: "Matt Gonshorowski",
    location: "Phoenix, Arizona",
  },
  {
    text: "Purchasing a home is always confusing and overwhelming. Eddie helped and guided me throughout the entire process and without his assistance I don't think everything would have went through as smoothly as it did.",
    author: "Mona Collins",
    location: "Phoenix, Arizona",
  },
  {
    text: "I want to say what a pleasant experience I had when dealing with Eddie Knoell. He went out of his way to keep in touch with me every step of the way. Whenever someone I know needs a mortgage agent, I will certainly recommend Eddie.",
    author: "Suzanne Cormier",
    location: "Sun City, Arizona",
  },
  {
    text: "The service I received from Eddie at Mortgage Brothers was nothing short of exceptional. Mine was a complicated application and they worked tirelessly to secure me a great mortgage at an exceptional rate.",
    author: "Matthew MaClean",
    location: "Phoenix, Arizona",
  },
  {
    text: "We have bought & sold a total of 5 homes and we have refinanced at least 3 times and Eddie Knoell is our mortgage guy for life. Eddie is honest, timely, and available and come highly recommended!",
    author: "Liza Garcia",
    location: "Scottsdale, Arizona",
  },
  {
    text: "Eddie Knoell was a pleasure to work with. He got me a great rate with a quick approval and funding. I highly recommend him without reservation.",
    author: "John Fynmore",
    location: "Phoenix, Arizona",
  },
  {
    text: "I trust Eddie with my lending needs and have referred him to my own family members. All of the loans I have done with Eddie were handled in a professional and prompt manner and even closed ahead of schedule!",
    author: "Marie Haynes",
    location: "Glendale, Arizona",
  },
  {
    text: "Eddie Knoell is the best Loan Officer we've ever dealt with. Both Ched and I feel like he was always there for us even on the weekend!! Eddie's best quality is his ability to get the job done efficiently and really fast.",
    author: "Ched and Nanette Salasek",
    location: "Phoenix, Arizona",
  },
  {
    text: "Eddie Knoell is the best lender I've ever worked with. He was prompt, courteous and did what he promised, on or before the promised date. As a real estate agent the entire process was a breeze.",
    author: "Judy Gibson",
    location: "Mesa, Arizona",
  },
  {
    text: "We couldn't be more pleased with our choice in lending broker. Your demeanor, timeliness, sincerity and skill with finding the right loan vehicle for us was instrumental to our happiness. You have us as a lifelong customer.",
    author: "T. and E. Cakmak",
    location: "Chandler, Arizona",
  },
  {
    text: "As a first time home buyer, your constant and open communication was helpful and comforting. Thank you for your patience and always thoroughly explaining all the steps along the way.",
    author: "Jaclyn Lindsey",
    location: "Tempe, Arizona",
  },
  {
    text: "Working with Eddie was an absolute pleasure. He has a very high level of integrity and the knowledge to back it up. Without Eddie by my side, I could not have closed this deal.",
    author: "Michele Bonner",
    location: "Tempe, Arizona",
  },
  {
    text: "Eddie saved us over $500 a month! He explained in great detail and was very knowledgeable about the HARP2 program. We will definitely be referring our family and friends to him.",
    author: "Michael and Donna Hawkins",
    location: "Glendale, Arizona",
  },
  {
    text: "Eddie is a true professional. My case had a special set of circumstances, but he continued to work tirelessly on my behalf until we were finally able to close. I am very pleased with the service that I received.",
    author: "Matt Fahrendorf",
    location: "Phoenix, Arizona",
  },
  {
    text: "I have been using Eddie Knoell from Mortgage Brothers for 10 years. He is a very honest, reliable and hard working man. He always gave me the best rates and a very reasonable closing cost.",
    author: "Billy Ha",
    location: "Mesa, Arizona",
  },
  {
    text: "Eddie and his entire staff were wonderful. They helped us through the very intense process of purchasing a second home. Also our mortgage was such a good rate that the closing agent actually commented on how wonderful our mortgage broker must be!",
    author: "Michelle Blank",
    location: "Glendale, Arizona",
  },
  {
    text: "My husband and I would like to thank you for an outstanding job you did with our refinance. Your professionalism was impeccable and your timing was perfect. You are heads and shoulders beyond most I have worked with.",
    author: "Marleen Kapanicas",
    location: "HomeSmart, Scottsdale, Arizona",
  },
  {
    text: "With Eddie it was the easiest mortgage we've ever applied for. By phone we applied and were approved right then and there. We are very committed to using Eddie's vast knowledge and services if we ever buy another home.",
    author: "Carlos Baldenegro",
    location: "Chandler, Arizona",
  },
  {
    text: "Eddie did an incredible job getting our new home loan processed quickly and efficiently at an even lower interest rate than we had discussed. Eddie helped us to realize our dreams of living in our new home!",
    author: "Marina McLennan",
    location: "Chandler, Arizona",
  },
  {
    text: "Eddie was a blessing. I am a single female buying my first home. He came up with a mortgage plan that was best for me and made the whole process go very smoothly and essentially worry free.",
    author: "Jennifer Speer",
    location: "Sun City, Arizona",
  },
  {
    text: "Eddie's attention to detail, prompt responses and knowledge of the market far surpasses his competition. If it is my call on who to use for a loan officer, I call Eddie.",
    author: "Joey Slade",
    location: "JB Carlson & Associates, Gilbert, Arizona",
  },
  {
    text: "You made my first time home buying experience smooth and educational. You were ALWAYS a phone call away to answer any of my questions. Thanks!",
    author: "Christian Holt",
    location: "Phoenix, Arizona",
  },
];

const steps = [
  {
    title: "Consultation",
    text: "Speak with our mortgage experts to discuss your goals and financial situation. We'll help you find the best loan options tailored to your needs.",
  },
  {
    title: "Pre-Approval",
    text: "Get pre-approved quickly so you can shop for your dream home with confidence. We'll guide you through the paperwork and requirements.",
  },
  {
    title: "Closing",
    text: "Once you've found your home, we'll handle the final steps to ensure a smooth and timely closing. All you need to do is get ready to move in!",
  },
];

const expertCards = [
  {
    title: "Personalized Mortgage Solutions",
    text: "We take the time to understand your unique financial situation and goals, offering tailored loan options that fit your needs perfectly.",
  },
  {
    title: "Fast and Hassle-Free Process",
    text: "Our streamlined approach ensures a quick, stress-free experience, so you can focus on what matters most—finding your dream home.",
  },
  {
    title: "Expert Guidance Every Step of the Way",
    text: "From pre-approval to closing, our experienced team is here to answer your questions and guide you through every stage of the process.",
  },
  {
    title: "Competitive Rates and Programs",
    text: "We work hard to secure the best rates and loan programs available, helping you save money while achieving your homeownership goals.",
  },
  {
    title: "Proven Track Record of Success",
    text: "With hundreds of satisfied clients and glowing reviews, we've built a reputation for delivering results you can count on.",
  },
  {
    title: "Local Expertise You Can Count On",
    text: "As proud members of the Arizona community, we understand the local market and are committed to helping our neighbors succeed.",
  },
];

const faqs = [
  {
    q: "How long does the mortgage process take?",
    a: "The timeline varies depending on your situation, but most mortgages are processed and closed within 30-45 days. Our team works hard to ensure a smooth and timely experience.",
  },
  {
    q: "What documents do I need to apply for a mortgage?",
    a: "Typically, you'll need proof of income, tax returns, bank statements, and identification. Don't worry—we'll provide you with a detailed checklist to make it easy.",
  },
  {
    q: "Can I qualify for a mortgage with less-than-perfect credit?",
    a: "Yes! We work with clients of all credit levels and will help you explore loan options that fit your financial situation.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "Down payments vary based on the loan program. Some options require as little as 3%, while others may not require a down payment at all, like VA loans.",
  },
  {
    q: "What's the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification gives you an estimate of what you might qualify for, while pre-approval is a more in-depth process that shows sellers you're serious and financially ready to buy.",
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a variety of loan programs, including conventional loans, FHA loans, VA loans, and refinancing options. Our team will help you choose the best one for your needs.",
  },
];

const loanSolutions = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First Time Home Buyer", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "Refinancing", href: "/refinancing-arizona/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
];

const INITIAL_VISIBLE = 12;

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#3fb364] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5 text-[#b89a5a] mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function ClientMortgageReviewsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, INITIAL_VISIBLE);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative w-full text-white min-h-[560px] lg:min-h-[700px] xl:min-h-[725px] flex items-center overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%), url('/home/client-reviews.jpg')",
            backgroundPosition: "0% 50%, 100% 50%",
            backgroundSize: "cover, cover",
          }}
        >
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
            <div className="max-w-[640px]">
              <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.05] mb-5 tracking-tight">
                Real Stories, Real Results
              </h1>
              <h2 className="text-white text-[18px] sm:text-[24px] lg:text-[30px] font-normal leading-[1.35] mb-8 max-w-[580px]">
                See How We&apos;ve Helped Clients Achieve Their Homeownership Dreams
              </h2>
              <div className="flex flex-col items-start gap-3">
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-3 bg-[#4B800A] hover:bg-[#3f6d09] text-white text-[16px] lg:text-[18px] font-semibold pl-7 pr-2 py-2 rounded-full transition-all shadow-lg"
                >
                  Start my preapproval
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#052316]/35">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </Link>
                <p className="text-white/85 text-[13px] lg:text-[14px] font-medium flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  3 min / no credit impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="w-full bg-[#eeeff4] border-b border-[#e0e2e8] py-10 lg:py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Personalized mortgage solutions",
              "Fast and hassle-free process",
              "Expert guidance every step of the way",
            ].map((title) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckIcon />
                </div>
                <h3 className="text-[#333333] text-[16px] font-semibold leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Trusted by Hundreds of Homeowners Across Arizona
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-4">
              At The Mortgage Brothers Team, we pride ourselves on delivering exceptional service and
              results for our clients.
            </p>
            <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75] mb-8">
              From first-time buyers to seasoned homeowners, we&apos;ve helped hundreds of families
              achieve their dreams of homeownership with personalized mortgage solutions and expert
              guidance. But don&apos;t just take our word for it—see what our happy clients have to say!
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleReviews.map((rev) => (
                <div
                  key={rev.author + rev.location}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <Stars />
                  <p className="text-[#3a443a] text-[14px] leading-relaxed flex-1 mb-5">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-[#08271B] text-[14px] font-bold">{rev.author}</p>
                    <p className="text-[#8a9a7a] text-[12px] mt-0.5">{rev.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && reviews.length > INITIAL_VISIBLE && (
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3d26] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all cursor-pointer"
                >
                  Show More Reviews
                </button>
              </div>
            )}

            <div className="text-center mt-10">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Pre-Approved Now
              </Link>
            </div>
          </div>
        </section>

        {/* Path to homeownership */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-[#08271B] text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Path to Homeownership Made Simple
              </h2>
              <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed">
                We&apos;ve streamlined the mortgage process to make it easy, fast, and stress-free for
                you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl p-7 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e8f5e9] text-[#3fb364] font-bold text-[18px] flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-[#08271B] text-[18px] font-bold mb-3">{step.title}</h3>
                  <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        {/* Why trust us */}
        <section className="w-full bg-[#08271B] py-16 lg:py-24 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-white text-[30px] lg:text-[40px] font-normal leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Top Mortgage Experts in Arizona
              </h2>
              <p className="text-[#c8c8b8] text-[15.5px] leading-relaxed">
                At The Mortgage Brothers Team, we believe that every client deserves more than just a
                loan—they deserve a trusted partner who truly understands their needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {expertCards.map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-[#3fb364] text-[17px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[#c8c8b8] text-[14px] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:+16025352171"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-[#08271B] text-[28px] lg:text-[36px] font-normal leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Everything You Need to Know About the Mortgage Process
              </h2>
              <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
                We understand that getting a mortgage can feel overwhelming. That&apos;s why we&apos;ve
                answered some of the most common questions.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-white border border-[#e8e0d0]/70 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      aria-expanded={open}
                    >
                      <span className="text-[#08271B] text-[15px] font-semibold leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`text-[#3fb364] text-[22px] font-light shrink-0 transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 text-[#4e5b4e] text-[14.5px] leading-relaxed border-t border-[#e8e0d0]/50 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
              >
                Get Expert Answers Now
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-y border-[#e8e0d0]/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2
              className="text-[#08271B] text-[30px] lg:text-[38px] font-normal leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s Make Your Mortgage Process Simple &amp; Stress-Free
            </h2>
            <p className="text-[#4e5b4e] text-[15.5px] leading-relaxed mb-8 max-w-2xl mx-auto">
              At AZ Mortgage Brothers, we&apos;re here to help you secure the best mortgage for your
              financial goals. Whether you&apos;re buying a new home, refinancing, or just exploring your
              options, our experienced team is ready to guide you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14.5px] text-[#08271B]">
              <a href="tel:+16025352171" className="font-semibold hover:text-[#3fb364] transition-colors">
                +1 602-535-2171
              </a>
              <span className="hidden sm:inline text-[#c8c8b8]">|</span>
              <a
                href="https://goo.gl/maps/GVLYa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3fb364] transition-colors text-center"
              >
                1599 East Orangewood Ave Suite 200, Phoenix, AZ 85020
              </a>
            </div>

            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              Start my preapproval
            </Link>
          </div>
        </section>

        {/* Explore solutions */}
        <section className="w-full py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2
              className="text-[#08271B] text-[28px] lg:text-[34px] font-normal text-center mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Our Mortgage Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loanSolutions.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white border border-[#e8e0d0]/70 rounded-xl px-5 py-4 text-[#08271B] font-semibold text-[14.5px] hover:border-[#3fb364]/50 hover:text-[#3fb364] transition-all"
                >
                  <CheckIcon />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
