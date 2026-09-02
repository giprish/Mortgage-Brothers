/**
 * Podcast transcript icons — single source of truth for article transcript sections.
 *
 * Import from this file in post pages:
 *   import { TranscriptList, TranscriptCheckItem, ... } from "@/lib/utils/transcript-icons";
 *
 * Icon catalog (Lucide + emoji):
 * | Component                 | Icon              | Color     | Use for                          |
 * |---------------------------|-------------------|-----------|----------------------------------|
 * | TranscriptCheckItem       | Check             | #3fb364   | Positive / allowed list items    |
 * | TranscriptCheckHeading    | Check             | #3fb364   | Section headings with checkmark  |
 * | TranscriptCrossItem       | X                 | #e05252   | Not allowed / negative items     |
 * | TranscriptBanItem         | Ban               | #e05252   | Prohibited / blocked items       |
 * | TranscriptPointItem       | Hand              | #3a4a3a   | Discussion questions / points    |
 * | TranscriptDiamondItem     | Diamond           | #6b7280   | Key takeaways / highlights       |
 * | TranscriptMoneyItem       | CircleDollarSign  | #3fb364   | Dollar / borrower comparisons    |
 * | TranscriptPinItem         | Pin               | #d97706   | Notes / bottom-line callouts     |
 * | TranscriptPinLine         | Pin               | #d97706   | Standalone note paragraphs       |
 * | TranscriptLightbulbLine   | Lightbulb         | #d97706   | Tips / insights / results        |
 * | TranscriptAlertLine       | AlertTriangle     | #e05252   | Warnings / cautions              |
 * | TranscriptPhoneLine       | Phone             | #3fb364   | Contact / call-to-action lines   |
 * | TranscriptTvLine          | Tv                | #3fb364   | Subscribe / channel prompts      |
 * | TranscriptMicLine         | Mic               | #3fb364   | Podcast / audio references       |
 * | TranscriptCarLine         | Car               | #3a4a3a   | Auto / car-payment topics        |
 * | TranscriptEmojiItem       | (emoji prop)      | —         | Decorative metaphors (no Lucide) |
 * | TranscriptFalseTrueLine   | Ban + Check       | red/green | False vs true comparison pairs   |
 * | TranscriptList            | —                 | —         | Wrapper `<ul>` for list items    |
 */
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  Ban,
  Car,
  Check,
  CircleDollarSign,
  Diamond,
  Hand,
  Lightbulb,
  Mic,
  Phone,
  Pin,
  Tv,
  X,
} from "lucide-react";

/** Shared size class for inline transcript list icons. */
export const TRANSCRIPT_ICON_SIZE = "w-[1.05em] h-[1.05em] shrink-0 mt-[0.2em]";

/** Brand colors used across transcript icons. */
export const TRANSCRIPT_ICON_COLORS = {
  success: "#3fb364",
  danger: "#e05252",
  warning: "#d97706",
  neutral: "#3a4a3a",
  muted: "#6b7280",
} as const;

export type TranscriptIconEntry = {
  component: string;
  lucideIcon: LucideIcon | null;
  color: string;
  description: string;
};

/** Reference list of all transcript icon variants for developers. */
export const TRANSCRIPT_ICON_LIST: readonly TranscriptIconEntry[] = [
  {
    component: "TranscriptCheckItem",
    lucideIcon: Check,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Positive or allowed list items",
  },
  {
    component: "TranscriptCheckHeading",
    lucideIcon: Check,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Section headings with a checkmark",
  },
  {
    component: "TranscriptCrossItem",
    lucideIcon: X,
    color: TRANSCRIPT_ICON_COLORS.danger,
    description: "Not allowed or negative list items",
  },
  {
    component: "TranscriptBanItem",
    lucideIcon: Ban,
    color: TRANSCRIPT_ICON_COLORS.danger,
    description: "Prohibited or blocked items",
  },
  {
    component: "TranscriptPointItem",
    lucideIcon: Hand,
    color: TRANSCRIPT_ICON_COLORS.neutral,
    description: "Discussion questions or talking points",
  },
  {
    component: "TranscriptDiamondItem",
    lucideIcon: Diamond,
    color: TRANSCRIPT_ICON_COLORS.muted,
    description: "Key takeaways and highlights",
  },
  {
    component: "TranscriptMoneyItem",
    lucideIcon: CircleDollarSign,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Dollar amounts and borrower comparisons",
  },
  {
    component: "TranscriptPinItem",
    lucideIcon: Pin,
    color: TRANSCRIPT_ICON_COLORS.warning,
    description: "Notes and bottom-line callouts in lists",
  },
  {
    component: "TranscriptPinLine",
    lucideIcon: Pin,
    color: TRANSCRIPT_ICON_COLORS.warning,
    description: "Standalone note paragraphs",
  },
  {
    component: "TranscriptLightbulbLine",
    lucideIcon: Lightbulb,
    color: TRANSCRIPT_ICON_COLORS.warning,
    description: "Tips, insights, and result callouts",
  },
  {
    component: "TranscriptAlertLine",
    lucideIcon: AlertTriangle,
    color: TRANSCRIPT_ICON_COLORS.danger,
    description: "Warnings and cautions",
  },
  {
    component: "TranscriptPhoneLine",
    lucideIcon: Phone,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Contact and call-to-action lines",
  },
  {
    component: "TranscriptTvLine",
    lucideIcon: Tv,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Subscribe and channel prompts",
  },
  {
    component: "TranscriptMicLine",
    lucideIcon: Mic,
    color: TRANSCRIPT_ICON_COLORS.success,
    description: "Podcast and audio references",
  },
  {
    component: "TranscriptCarLine",
    lucideIcon: Car,
    color: TRANSCRIPT_ICON_COLORS.neutral,
    description: "Auto and car-payment topics",
  },
  {
    component: "TranscriptEmojiItem",
    lucideIcon: null,
    color: "—",
    description: "Decorative metaphors via emoji prop (no Lucide icon)",
  },
  {
    component: "TranscriptFalseTrueLine",
    lucideIcon: Ban,
    color: `${TRANSCRIPT_ICON_COLORS.danger} / ${TRANSCRIPT_ICON_COLORS.success}`,
    description: "False vs true comparison pairs (Ban + Check)",
  },
] as const;

const ICON = TRANSCRIPT_ICON_SIZE;

type ItemProps = { children: ReactNode };
type LineProps = ItemProps & { className?: string };

function TranscriptItem({
  icon,
  children,
  iconClassName = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  iconClassName?: string;
}) {
  return (
    <li className="flex gap-2 items-start">
      <span className={`inline-flex ${iconClassName}`} aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}

function TranscriptLine({
  icon,
  children,
  className = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex gap-2 items-start ${className}`}>
      <span className="inline-flex" aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </p>
  );
}

export function TranscriptList({
  children,
  className = "mb-3",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={`list-none pl-0 space-y-2 ${className}`}>{children}</ul>;
}

export function TranscriptCheckItem({ children }: ItemProps) {
  return (
    <TranscriptItem
      icon={<Check className={`${ICON} text-[#3fb364]`} strokeWidth={2.5} />}
    >
      {children}
    </TranscriptItem>
  );
}

export function TranscriptCrossItem({ children }: ItemProps) {
  return (
    <TranscriptItem icon={<X className={`${ICON} text-[#e05252]`} strokeWidth={2.5} />}>
      {children}
    </TranscriptItem>
  );
}

export function TranscriptBanItem({ children }: ItemProps) {
  return (
    <TranscriptItem icon={<Ban className={`${ICON} text-[#e05252]`} strokeWidth={2} />}>
      {children}
    </TranscriptItem>
  );
}

export function TranscriptPointItem({ children }: ItemProps) {
  return (
    <TranscriptItem icon={<Hand className={`${ICON} text-[#3a4a3a]`} strokeWidth={2} />}>
      {children}
    </TranscriptItem>
  );
}

export function TranscriptDiamondItem({ children }: ItemProps) {
  return (
    <TranscriptItem icon={<Diamond className={`${ICON} text-[#6b7280]`} strokeWidth={2} />}>
      {children}
    </TranscriptItem>
  );
}

export function TranscriptMoneyItem({ children }: ItemProps) {
  return (
    <TranscriptItem
      icon={<CircleDollarSign className={`${ICON} text-[#3fb364]`} strokeWidth={2} />}
    >
      {children}
    </TranscriptItem>
  );
}

export function TranscriptCarLine({
  children,
  className = "mb-2 font-semibold text-[#052316]",
}: LineProps) {
  return (
    <TranscriptLine
      icon={<Car className={`${ICON} text-[#3a4a3a] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptPinItem({ children }: ItemProps) {
  return (
    <TranscriptItem icon={<Pin className={`${ICON} text-[#d97706]`} strokeWidth={2} />}>
      {children}
    </TranscriptItem>
  );
}

/** Decorative metaphors without lucide equivalents (e.g. ice cream flavors). */
export function TranscriptEmojiItem({
  emoji,
  children,
}: {
  emoji: string;
  children: ReactNode;
}) {
  return (
    <TranscriptItem
      icon={<span className="text-[1.05em] leading-none mt-[0.15em]">{emoji}</span>}
    >
      {children}
    </TranscriptItem>
  );
}

export function TranscriptPinLine({ children, className = "mb-3" }: LineProps) {
  return (
    <TranscriptLine
      icon={<Pin className={`${ICON} text-[#d97706] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptLightbulbLine({ children, className = "mb-3" }: LineProps) {
  return (
    <TranscriptLine
      icon={<Lightbulb className={`${ICON} text-[#d97706] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptAlertLine({ children, className = "" }: LineProps) {
  return (
    <TranscriptLine
      icon={<AlertTriangle className={`${ICON} text-[#e05252] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptPhoneLine({ children, className = "mb-3" }: LineProps) {
  return (
    <TranscriptLine
      icon={<Phone className={`${ICON} text-[#3fb364] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptTvLine({ children, className = "mb-3" }: LineProps) {
  return (
    <TranscriptLine
      icon={<Tv className={`${ICON} text-[#3fb364] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptMicLine({ children, className = "mb-3" }: LineProps) {
  return (
    <TranscriptLine
      icon={<Mic className={`${ICON} text-[#3fb364] mt-[0.2em]`} strokeWidth={2} />}
      className={className}
    >
      {children}
    </TranscriptLine>
  );
}

export function TranscriptCheckHeading({ children }: ItemProps) {
  return (
    <p className="mb-2 font-semibold text-[#052316] flex gap-2 items-center">
      <Check className="w-[1.05em] h-[1.05em] text-[#3fb364] shrink-0" strokeWidth={2.5} />
      {children}
    </p>
  );
}

export function TranscriptFalseTrueLine({
  falseText,
  trueText,
}: {
  falseText: ReactNode;
  trueText: ReactNode;
}) {
  return (
    <li className="space-y-1">
      <p className="flex gap-2 items-start">
        <Ban className={`${ICON} text-[#e05252] mt-[0.2em]`} strokeWidth={2} aria-hidden="true" />
        <span>{falseText}</span>
      </p>
      <p className="flex gap-2 items-start pl-[calc(1.05em+0.5rem)]">
        <Check className={`${ICON} text-[#3fb364] mt-[0.2em]`} strokeWidth={2.5} aria-hidden="true" />
        <span>{trueText}</span>
      </p>
    </li>
  );
}
