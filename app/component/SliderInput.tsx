"use client";

import React, { useCallback } from "react";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (val: number) => void;
  formatValue?: (val: number) => string;
}

export default function SliderInput({ label, value, min, max, step, prefix, suffix, onChange, formatValue }: SliderInputProps) {
  const pct = ((value - min) / (max - min)) * 100;

  const handleSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  }, [onChange]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const num = parseFloat(raw);
    if (raw === "" || raw === "0" || raw === "0.") {
      if (raw.endsWith(".")) return;
      onChange(0);
      return;
    }
    if (!isNaN(num)) {
      onChange(Math.min(max, Math.max(min, num)));
    }
  }, [onChange, min, max]);

  const displayValue = formatValue ? formatValue(value) :
    prefix ? `${prefix}${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: step < 1 ? 3 : 0 })}` :
    suffix ? `${value.toLocaleString("en-US", { minimumFractionDigits: step < 1 ? 3 : 0 })}${suffix}` :
    value.toLocaleString("en-US", { minimumFractionDigits: step < 1 ? 3 : 0 });

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[#052316] text-[14px] font-semibold">{label}</label>
        <span className="text-[#052316] text-[15px] font-bold">{displayValue}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[6px] bg-[#d4d4d4] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[6px] bg-[#3fb364] rounded-full pointer-events-none" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
          <input type="range" min={min} max={max} step={step} value={value}
            onChange={handleSlider}
            className="w-full appearance-none bg-transparent cursor-pointer relative z-10 slider-thumb" />
        </div>
        <div className="relative w-[130px] flex-shrink-0">
          {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888] font-semibold">{prefix}</span>}
          <input type="text" inputMode="decimal" value={value || ""}
            onChange={handleInput}
            className={`w-full bg-white border border-[#e8e0d0] rounded-xl py-2.5 ${prefix ? "pl-7" : "pl-3"} pr-3 text-[14px] font-bold text-[#052316] focus:outline-none focus:ring-2 focus:ring-[#3fb364]/30 focus:border-[#3fb364]`} />
          {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] font-semibold">{suffix}</span>}
        </div>
      </div>
    </div>
  );
}
