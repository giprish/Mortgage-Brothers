import React from "react";
import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
  readTime: string;
};

export default function ArticleCard({
  title,
  description,
  href,
  category,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-[#e8e0d0]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 sm:p-7 min-h-[280px]"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span className="block w-5 h-[2px] bg-[#3fb364] shrink-0" aria-hidden />
        <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.14em] uppercase">
          {category}
        </span>
      </div>

      <h3 className="text-[#052316] text-[20px] sm:text-[22px] font-playfair font-bold leading-snug mb-3 group-hover:text-[#3fb364] transition-colors">
        {title}
      </h3>

      <p className="text-[#5a675a] text-[14px] leading-[1.65] mb-6 flex-grow line-clamp-4">
        {description}
      </p>

      <div className="mt-auto pt-4 border-t border-[#ebe4d6] flex items-center justify-between gap-3">
        <span className="text-[12px] text-[#5f6f54]">
          {readTime ? `${date} · ${readTime}` : date}
        </span>
        <span className="text-[#3fb364] text-[13.5px] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
          Read
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
