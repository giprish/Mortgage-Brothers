"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type {
  InteractivePieChart as InteractivePieChartType,
  InteractiveLineChart as InteractiveLineChartType,
  BasicPaymentOverTimeChart as BasicPaymentOverTimeChartType,
  ScenarioBarChart as ScenarioBarChartType,
  InteractiveAmortizationChart as InteractiveAmortizationChartType,
  LtvOverTimeChart as LtvOverTimeChartType,
} from "../InteractiveCharts";

const ChartSkeleton = ({ height = 192 }: { height?: number }) => (
  <div
    className="w-full rounded-xl bg-[#f5f0e8] animate-pulse"
    style={{ height }}
    aria-hidden
  />
);

type PieProps = ComponentProps<typeof InteractivePieChartType>;
type LineProps = ComponentProps<typeof InteractiveLineChartType>;
type BasicProps = ComponentProps<typeof BasicPaymentOverTimeChartType>;
type ScenarioProps = ComponentProps<typeof ScenarioBarChartType>;
type AmortProps = ComponentProps<typeof InteractiveAmortizationChartType>;
type LtvProps = ComponentProps<typeof LtvOverTimeChartType>;

export const InteractivePieChart = dynamic<PieProps>(
  () => import("../InteractiveCharts").then((m) => m.InteractivePieChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

export const InteractiveLineChart = dynamic<LineProps>(
  () => import("../InteractiveCharts").then((m) => m.InteractiveLineChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);

export const BasicPaymentOverTimeChart = dynamic<BasicProps>(
  () => import("../InteractiveCharts").then((m) => m.BasicPaymentOverTimeChart),
  { ssr: false, loading: () => <ChartSkeleton height={280} /> }
);

export const ScenarioBarChart = dynamic<ScenarioProps>(
  () => import("../InteractiveCharts").then((m) => m.ScenarioBarChart),
  { ssr: false, loading: () => <ChartSkeleton height={320} /> }
);

export const InteractiveAmortizationChart = dynamic<AmortProps>(
  () => import("../InteractiveCharts").then((m) => m.InteractiveAmortizationChart),
  { ssr: false, loading: () => <ChartSkeleton height={320} /> }
);

export const LtvOverTimeChart = dynamic<LtvProps>(
  () => import("../InteractiveCharts").then((m) => m.LtvOverTimeChart),
  { ssr: false, loading: () => <ChartSkeleton height={280} /> }
);
