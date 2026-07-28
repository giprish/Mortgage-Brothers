"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { COMPANY, LOAN_OFFICERS } from "@/lib/company";
import eddiePosts from "@/lib/eddie-knoell-posts.json";
import { getArticleImage } from "@/lib/article-images";

const PER_PAGE = 9;

const bioParagraphs = [
  "Eddie Knoell is the owner and Vice President of Mortgage Brothers LLC, based in Phoenix, Arizona. With over 18 years of experience as a loan officer, Eddie has been dedicated to serving Arizona homeowners with professionalism and expertise. As a third-generation native of Phoenix, Eddie comes from a family deeply rooted in real estate for over 70 years, known for their exceptional reputation and commitment to quality.",
  'Eddie embodies the true definition of a "Loan Professional," bringing a personable, organized, and ethical approach to his work. His passion lies in helping clients navigate the mortgage process, transforming what can be a stressful experience into a memorable milestone. Specializing in residential mortgages, Eddie has remained steadfast in his belief that helping customers find their way home is the most rewarding gift he can offer.',
  "A graduate of Franciscan University of Steubenville, Ohio, Eddie holds a Bachelor of Arts degree and an Arizona Mortgage Loan Originator's license from the Department of Financial Institutions. Whether you're purchasing your first home or refinancing, Eddie Knoell's expertise and commitment make him a trusted partner in achieving your homeownership goals.",
];

type AuthorPost = {
  title: string;
  href: string;
  date: string;
  excerpt: string;
};

const posts = eddiePosts as AuthorPost[];

export default function EddieKnoellAuthorPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));

  const pagePosts = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return posts.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />
      <div className="h-[72px] w-full shrink-0" aria-hidden />

      <main className="flex-grow">
        {/* Author bio */}
        <section className="w-full bg-white border-b border-[#e8e0d0]/50">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
              <div className="mx-auto lg:mx-0 w-full max-w-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/home/Knoell-Eddie-Co-Founder.jpg"
                  alt="Eddie Knoell, co-founder of AZ Mortgage Brothers, trusted mortgage professional"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-md object-cover bg-[#2a2a2a]"
                />
              </div>

              <div>
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                  Author
                </p>
                <h1
                  className="text-[#08271B] text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-tight mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Eddie Knoell
                </h1>
                <p className="text-[#4e5b4e] text-[15px] mb-6">
                  {LOAN_OFFICERS.eddie.title} · {LOAN_OFFICERS.eddie.nmlsDisplay} ·{" "}
                  {LOAN_OFFICERS.eddie.azLicenseDisplay}
                </p>

                <div className="space-y-5 text-[#3a4a3a] text-[16px] leading-[1.8]">
                  {bioParagraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#get-pre-approved"
                    className="inline-flex items-center justify-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all"
                  >
                    Get a Free Mortgage Consultation
                  </Link>
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center justify-center gap-2 text-[#3fb364] hover:underline text-[15px] font-semibold px-4 py-3"
                  >
                    Call {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author posts */}
        <section className="w-full py-14 lg:py-16 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 pb-4 border-b border-[#e8e0d0]/70 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2
                  className="text-[#052316] text-[28px] lg:text-[34px] font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Articles by Eddie Knoell
                </h2>
                <p className="text-[#4e5b4e] text-[14px] mt-2">
                  {posts.length} posts · Page {page} of {totalPages}
                </p>
              </div>
              <Link
                href="/blog/"
                className="text-[#3fb364] hover:underline text-[14px] font-semibold"
              >
                View all resources →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pagePosts.map((post) => {
                const imageSrc = getArticleImage(post.href);
                return (
                <article
                  key={post.href}
                  className="bg-white border border-[#e8e0d0]/70 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40 w-full overflow-hidden bg-[#f2eee3]">
                    {imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="h-40 w-full object-cover"
                      />
                    ) : (
                      <div className="h-40 w-full bg-gradient-to-br from-[#f2eee3] to-[#e8f5e9]" />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[#8a9a7a] text-[12px] mb-3">{post.date}</p>
                  <h3
                    className="text-[#052316] text-[20px] font-normal leading-snug mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <Link
                      href={post.href}
                      className="hover:text-[#3fb364] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#4e5b4e] text-[14px] leading-relaxed mb-5 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#e8e0d0]/60">
                    <span className="text-[#8a9a7a] text-[13px]">Eddie Knoell</span>
                    <Link
                      href={post.href}
                      className="text-[#3fb364] hover:text-[#2d5a2d] text-[13px] font-bold inline-flex items-center gap-1"
                    >
                      Read more
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  </div>
                </article>
              );
              })}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 rounded-full text-[14px] font-semibold border border-[#e8e0d0] bg-white text-[#052316] disabled:opacity-40 hover:border-[#3fb364] transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`min-w-[40px] h-10 px-3 rounded-full text-[14px] font-semibold transition-colors ${
                      n === page
                        ? "bg-[#3fb364] text-white"
                        : "bg-white border border-[#e8e0d0] text-[#052316] hover:border-[#3fb364]"
                    }`}
                    aria-current={n === page ? "page" : undefined}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-4 py-2 rounded-full text-[14px] font-semibold border border-[#e8e0d0] bg-white text-[#052316] disabled:opacity-40 hover:border-[#3fb364] transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
