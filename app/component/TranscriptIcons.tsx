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

const ICON = "w-[1.05em] h-[1.05em] shrink-0 mt-[0.2em]";

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
    <TranscriptItem icon={<Check className={`${ICON} text-[#3fb364]`} strokeWidth={2.5} />}>
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

export function TranscriptCarLine({ children, className = "mb-2 font-semibold text-[#052316]" }: LineProps) {
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
