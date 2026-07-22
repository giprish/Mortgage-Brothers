"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const fmtCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);

// ─── 1. Interactive Donut / Pie Chart Component ─────────────────────────────

interface PieChartItem {
  label: string;
  value: number;
  color: string;
}

interface InteractivePieChartProps {
  dataItems: PieChartItem[];
  title?: string;
  donut?: boolean;
  centerTextTitle?: string;
  centerTextSub?: string;
  showLegend?: boolean;
  className?: string;
}

export function InteractivePieChart({
  dataItems,
  title,
  donut = true,
  centerTextTitle,
  centerTextSub,
  showLegend = true,
  className = "",
}: InteractivePieChartProps) {
  const filtered = dataItems.filter((item) => item.value > 0);
  const labels = filtered.map((item) => item.label);
  const dataValues = filtered.map((item) => item.value);
  const bgColors = filtered.map((item) => item.color);
  const total = dataValues.reduce((a, b) => a + b, 0);

  const chartData = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: bgColors,
        borderWidth: 2,
        borderColor: "#ffffff",
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: "bottom" as const,
        labels: {
          font: { size: 12, family: "sans-serif", weight: "bold" as const },
          color: "#32353C",
          usePointStyle: true,
          padding: 14,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#1e293b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 13 },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context: any) => {
            const val = context.raw || 0;
            const pct = total > 0 ? ((val / total) * 100).toFixed(1) : "0.0";
            return ` ${context.label}: ${fmtCurrency(val)} (${pct}%)`;
          },
        },
      },
    },
    cutout: donut ? "68%" : "0%",
  };

  const ChartComponent = donut ? Doughnut : Pie;

  return (
    <div className={`w-full flex flex-col items-center justify-center ${className}`}>
      {title && <h4 className="text-[15px] font-bold text-[#32353C] mb-3 text-center">{title}</h4>}
      <div className="relative w-full h-[240px] md:h-[280px] flex items-center justify-center">
        <ChartComponent data={chartData} options={options} />
        {donut && (centerTextTitle || centerTextSub) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            {centerTextTitle && <span className="text-[11px] uppercase font-bold tracking-wider text-[#888]">{centerTextTitle}</span>}
            {centerTextSub && <span className="text-[16px] md:text-[18px] font-bold text-[#32353C]">{centerTextSub}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 2. Interactive Amortization Chart (Dual Axis: Bars + Line) ─────────────

interface AmortizationDataPoint {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

interface InteractiveAmortizationChartProps {
  schedule: AmortizationDataPoint[];
  title?: string;
  className?: string;
}

export function InteractiveAmortizationChart({
  schedule,
  title = "Payment & Balance Progression Over Time",
  className = "",
}: InteractiveAmortizationChartProps) {
  if (!schedule || schedule.length === 0) return null;

  // Filter for performance (max ~60 points)
  const step = Math.max(1, Math.floor(schedule.length / 60));
  const filteredData = schedule.filter((_, idx) => idx % step === 0 || idx === schedule.length - 1);

  const labels = filteredData.map((d) => `Month ${d.month}`);
  const principalValues = filteredData.map((d) => d.principalPaid);
  const interestValues = filteredData.map((d) => d.interestPaid);
  const balanceValues = filteredData.map((d) => d.remainingBalance);

  const chartData = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Remaining Balance",
        data: balanceValues,
        borderColor: "#2196F3",
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#2196F3",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        yAxisID: "yBalance",
        tension: 0.3,
      },
      {
        type: "bar" as const,
        label: "Principal Paid",
        data: principalValues,
        backgroundColor: "#4CAF50",
        yAxisID: "yPayment",
        stack: "payment",
      },
      {
        type: "bar" as const,
        label: "Interest Paid",
        data: interestValues,
        backgroundColor: "#FF9800",
        yAxisID: "yPayment",
        stack: "payment",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 12, family: "sans-serif", weight: "bold" as const },
          color: "#32353C",
          usePointStyle: true,
          padding: 16,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(30, 30, 30, 0.95)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12.5 },
        padding: 12,
        cornerRadius: 8,
        borderColor: "#444",
        borderWidth: 1,
        callbacks: {
          title: (items: any) => {
            if (!items.length) return "";
            const idx = items[0].dataIndex;
            const entry = filteredData[idx];
            return `Month ${entry?.month || ""}`;
          },
          label: (context: any) => {
            const val = context.raw || 0;
            return `${context.dataset.label}: ${fmtCurrency(val)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          font: { size: 11 },
          color: "#666",
          maxTicksLimit: 12,
        },
        title: {
          display: true,
          text: "Month",
          color: "#32353C",
          font: { size: 12, weight: "bold" as const },
        },
      },
      yPayment: {
        stacked: true,
        type: "linear" as const,
        position: "left" as const,
        grid: { color: "#f0f0f0" },
        ticks: {
          font: { size: 11 },
          color: "#666",
          callback: (v: any) => `$${v}`,
        },
        title: {
          display: true,
          text: "Monthly Payment ($)",
          color: "#32353C",
          font: { size: 12, weight: "bold" as const },
        },
      },
      yBalance: {
        type: "linear" as const,
        position: "right" as const,
        grid: { display: false },
        ticks: {
          font: { size: 11 },
          color: "#2196F3",
          callback: (v: any) => `$${v.toLocaleString()}`,
        },
        title: {
          display: true,
          text: "Remaining Balance ($)",
          color: "#2196F3",
          font: { size: 12, weight: "bold" as const },
        },
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      {title && <h3 className="text-[17px] font-bold text-[#32353C] mb-4 text-center">{title}</h3>}
      <div className="relative w-full h-[320px] md:h-[360px]">
        {/* @ts-ignore */}
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

// ─── 3. Basic Mortgage "Payment Over Time" Line Chart (Matches User Screenshot) ───

interface BasicPaymentOverTimeChartProps {
  schedule: {
    paymentNum: number;
    principal: number;
    interest: number;
    endBalance: number;
  }[];
  className?: string;
}

export function BasicPaymentOverTimeChart({ schedule, className = "" }: BasicPaymentOverTimeChartProps) {
  if (!schedule || schedule.length === 0) return null;

  // Filter ~50 points for smooth performance
  const step = Math.max(1, Math.floor(schedule.length / 50));
  const filtered = schedule.filter((_, idx) => idx % step === 0 || idx === schedule.length - 1);

  const labels = filtered.map((d) => `Mo ${d.paymentNum}`);
  const principalData = filtered.map((d) => d.principal);
  const interestData = filtered.map((d) => d.interest);
  const balanceData = filtered.map((d) => d.endBalance);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Principal",
        data: principalData,
        borderColor: "#3fb364",
        backgroundColor: "#3fb364",
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#3fb364",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        tension: 0.35,
        yAxisID: "yLeft",
      },
      {
        label: "Interest",
        data: interestData,
        borderColor: "#b89a5a",
        backgroundColor: "#b89a5a",
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#b89a5a",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        tension: 0.35,
        yAxisID: "yLeft",
      },
      {
        label: "Remaining Balance",
        data: balanceData,
        borderColor: "#052316",
        backgroundColor: "#052316",
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#052316",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        tension: 0.35,
        yAxisID: "yRight",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        align: "start" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          boxWidth: 14,
          boxHeight: 14,
          padding: 20,
          font: { size: 13, family: "sans-serif", weight: "bold" as const },
          color: "#888888",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#052316",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12.5 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            const val = context.raw || 0;
            return ` ${context.dataset.label}: ${fmtCurrency(val)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 11, family: "sans-serif" },
          color: "#a89a70",
          maxTicksLimit: 6,
        },
      },
      yLeft: {
        type: "linear" as const,
        position: "left" as const,
        grid: {
          color: "#f0ece1",
        },
        ticks: {
          font: { size: 11, family: "sans-serif" },
          color: "#a89a70",
          callback: (val: any) => {
            if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
            return `$${val.toFixed(2)}`;
          },
        },
      },
      yRight: {
        type: "linear" as const,
        position: "right" as const,
        grid: { display: false },
        ticks: {
          font: { size: 11, family: "sans-serif" },
          color: "#a89a70",
          callback: (val: any) => {
            if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
            return `$${val.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-[300px] md:h-[340px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

// ─── 3b. Scenario Bar Chart (single series, per-bar colors) ─────────────────

interface ScenarioBarChartProps {
  labels: string[];
  values: number[];
  colors: string[];
  seriesLabel?: string;
  className?: string;
}

export function ScenarioBarChart({
  labels,
  values,
  colors,
  seriesLabel = "Max Home Price",
  className = "",
}: ScenarioBarChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: seriesLabel,
        data: values,
        backgroundColor: colors,
        borderRadius: 6,
        maxBarThickness: 90,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#052316",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12.5 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => ` ${fmtCurrency(context.raw || 0)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12, family: "sans-serif", weight: "bold" as const }, color: "#4c5647" },
      },
      y: {
        grid: { color: "#f0ece1" },
        ticks: {
          font: { size: 11, family: "sans-serif" },
          color: "#a89a70",
          callback: (val: any) => {
            if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
            return `$${val}`;
          },
        },
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-[300px] md:h-[340px]">
        {/* @ts-ignore */}
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

// ─── 4. Interactive Line Comparison Chart ────────────────────────────────────

interface ComparisonLineSeries {
  label: string;
  data: number[];
  color: string;
}

interface InteractiveLineChartProps {
  labels: string[];
  series: ComparisonLineSeries[];
  title?: string;
  xTitle?: string;
  yTitle?: string;
  className?: string;
}

export function InteractiveLineChart({
  labels,
  series,
  title,
  xTitle = "Years",
  yTitle = "Value ($)",
  className = "",
}: InteractiveLineChartProps) {
  const datasets = series.map((s) => ({
    label: s.label,
    data: s.data,
    borderColor: s.color,
    backgroundColor: s.color,
    borderWidth: 3,
    pointRadius: 3,
    pointHoverRadius: 7,
    pointHoverBackgroundColor: s.color,
    pointHoverBorderColor: "#ffffff",
    pointHoverBorderWidth: 2,
    tension: 0.3,
  }));

  const chartData = { labels, datasets };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 12, family: "sans-serif", weight: "bold" as const },
          color: "#32353C",
          usePointStyle: true,
          padding: 16,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#1e293b",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 13, weight: "bold" as const },
        bodyFont: { size: 12.5 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            const val = context.raw || 0;
            return `${context.dataset.label}: ${fmtCurrency(val)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, color: "#666" },
        title: { display: !!xTitle, text: xTitle, color: "#32353C", font: { size: 12, weight: "bold" as const } },
      },
      y: {
        grid: { color: "#f0f0f0" },
        ticks: {
          font: { size: 11 },
          color: "#666",
          callback: (v: any) => `$${v.toLocaleString()}`,
        },
        title: { display: !!yTitle, text: yTitle, color: "#32353C", font: { size: 12, weight: "bold" as const } },
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      {title && <h3 className="text-[17px] font-bold text-[#32353C] mb-4 text-center">{title}</h3>}
      <div className="relative w-full h-[320px] md:h-[360px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

// ─── 5. LTV Over Time (FHA MIP milestone) ─────────────────────────────────────

interface LtvOverTimeChartProps {
  /** Month index + LTV % for each sample point */
  points: { month: number; ltv: number }[];
  /** Optional month to call out in the caption (MIP removal / refinance) */
  milestoneMonth?: number | null;
  className?: string;
}

export function LtvOverTimeChart({
  points,
  milestoneMonth = null,
  className = "",
}: LtvOverTimeChartProps) {
  if (!points || points.length === 0) return null;

  const step = Math.max(1, Math.floor(points.length / 60));
  const filtered = points.filter((_, idx) => idx % step === 0 || idx === points.length - 1);

  const labels = filtered.map((d) => `Mo ${d.month}`);
  const ltvData = filtered.map((d) => d.ltv);
  const n = filtered.length;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Loan-to-value",
        data: ltvData,
        borderColor: "#1b2a1f",
        backgroundColor: "#1b2a1f",
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 5,
        tension: 0.25,
      },
      {
        label: "90% — life-of-loan threshold",
        data: Array(n).fill(90),
        borderColor: "#a3372b",
        backgroundColor: "#a3372b",
        borderWidth: 1.5,
        borderDash: [4, 3],
        pointRadius: 0,
        tension: 0,
      },
      {
        label: "80% — refinance-eligible",
        data: Array(n).fill(80),
        borderColor: "#2c5e1a",
        backgroundColor: "#2c5e1a",
        borderWidth: 1.5,
        borderDash: [4, 3],
        pointRadius: 0,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index" as const, intersect: false },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          font: { size: 11, family: "sans-serif", weight: "bold" as const },
          color: "#4a5a4d",
          usePointStyle: true,
          padding: 12,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#1b2a1f",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        titleFont: { size: 12, weight: "bold" as const },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            const val = context.raw ?? 0;
            return ` ${context.dataset.label}: ${Number(val).toFixed(1)}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, color: "#4a5a4d", maxTicksLimit: 8 },
      },
      y: {
        min: 75,
        max: 100,
        grid: { color: "#e2ded2" },
        ticks: {
          font: { size: 11 },
          color: "#4a5a4d",
          callback: (v: any) => `${Math.round(v)}%`,
        },
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-[200px] md:h-[220px]">
        <Line data={chartData} options={options} />
      </div>
      {milestoneMonth != null && (
        <p className="text-[11.5px] text-[#4a5a4d] mt-2 mb-0">
          Milestone callout at month {milestoneMonth}
          {milestoneMonth >= 132 ? " (11-year MIP cancellation window)" : ""}.
        </p>
      )}
    </div>
  );
}
