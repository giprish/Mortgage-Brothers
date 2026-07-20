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

export default function SliderInput({ label, value, min, max, step, prefix, suffix, onChange }: SliderInputProps) {
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const num = parseFloat(raw);
    if (raw === "" || raw === "0" || raw === "0.") {
      if (raw.endsWith(".")) return;
      onChange(0);
      return;
    }
    if (!isNaN(num)) {
      onChange(num);
    }
  }, [onChange]);

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <label className="text-[#32353C] text-[14px] font-medium">{label}</label>
        </div>
      )}
      <div className="relative w-full">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666] font-medium text-[14px] pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={value !== undefined && value !== null ? value.toLocaleString("en-US") : ""}
          onChange={handleInput}
          className={`w-full h-[45px] bg-white border border-[#e0e0e0] rounded-md ${
            prefix ? "pl-8" : "pl-3.5"
          } ${suffix ? "pr-8" : "pr-3.5"} text-[15px] font-medium text-[#32353C] focus:outline-none focus:border-[#4CAF50]`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666] font-medium text-[14px] pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
