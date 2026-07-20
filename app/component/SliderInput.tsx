"use client";

import React, { useState, useEffect } from "react";

interface SliderInputProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (val: number) => void;
  formatValue?: (val: number) => string;
}

export default function SliderInput({ label, value, prefix, suffix, onChange }: SliderInputProps) {
  // Local string state to allow seamless typing of decimal points (e.g. "6.", "6.5", "0.75")
  const [localStr, setLocalStr] = useState<string | null>(null);

  useEffect(() => {
    if (localStr !== null) {
      const parsed = parseFloat(localStr);
      if (!isNaN(parsed) && parsed === value) {
        return;
      }
    }
    setLocalStr(null);
  }, [value]);

  const displayVal =
    localStr !== null
      ? localStr
      : value !== undefined && value !== null
      ? suffix === "%"
        ? value.toString()
        : value.toLocaleString("en-US")
      : "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^0-9.]/g, "");

    // Allow only one decimal point
    const parts = raw.split(".");
    if (parts.length > 2) {
      raw = parts[0] + "." + parts.slice(1).join("");
    }

    setLocalStr(raw);

    if (raw === "" || raw === ".") {
      onChange(0);
      return;
    }

    const num = parseFloat(raw);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    setLocalStr(null);
  };

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
          value={displayVal}
          onChange={handleInputChange}
          onBlur={handleBlur}
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
