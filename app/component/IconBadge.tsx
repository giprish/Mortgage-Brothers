import React from "react";

/** Shared hover-synced icon badge — parent card must include `group`. */
export const ICON_BADGE_HOVER =
  "group-hover:bg-[#3fb364] group-hover:text-white group-hover:[&_svg]:stroke-white group-hover:[&_svg]:text-white";

const SIZE_CLASSES = {
  xs: "w-8 h-8 rounded-lg text-[14px]",
  sm: "w-10 h-10 text-[18px]",
  md: "w-11 h-11",
  lg: "w-12 h-12",
} as const;

export type IconBadgeProps = {
  children: React.ReactNode;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
};

export default function IconBadge({ children, size = "md", className = "" }: IconBadgeProps) {
  return (
    <div
      className={`${SIZE_CLASSES[size]} ${size === "xs" ? "" : "rounded-xl"} bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center shrink-0 transition-colors duration-200 ${ICON_BADGE_HOVER} ${className}`}
    >
      {children}
    </div>
  );
}

/** For inline badge divs that can't use the component (e.g. numbered steps). */
export function cardIconBadgeClassName(
  size: keyof typeof SIZE_CLASSES = "md",
  extra = "",
): string {
  const radius = size === "xs" ? "" : "rounded-xl";
  return `${SIZE_CLASSES[size]} ${radius} bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center shrink-0 transition-colors duration-200 ${ICON_BADGE_HOVER} ${extra}`.trim();
}
