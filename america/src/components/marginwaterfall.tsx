import React from "react";

interface WaterfallBar {
  label: string;
  value: number;
  color: string;
}

const data: WaterfallBar[] = [
  { label: "Gross Revenue", value: 24, color: "bg-slate-300" },
  { label: "Trade Spend", value: -7, color: "bg-red-500" },
  { label: "Net Revenue", value: 20, color: "bg-emerald-500" },
  { label: "COGS", value: -20, color: "bg-red-500" },
  { label: "Gross Profit", value: 13, color: "bg-emerald-500" },
  { label: "Distribution", value: -12, color: "bg-red-500" },
  { label: "Overhead", value: -10, color: "bg-red-500" },
  { label: "EBIT", value: 6, color: "bg-emerald-500" },
];

const insights = [
  {
    title: "Trade Spend Impact",
    border: "border-red-400",
    titleColor: "text-slate-700",
    description:
      "Trade spend accounts for 18.5% of gross revenue, primarily driven by aggressive e-commerce promotions in the Frozen category.",
  },
  {
    title: "Net Margin Health",
    border: "border-emerald-400",
    titleColor: "text-slate-700",
    description:
      "Net revenue remains strong at AED 18.4M. Premium SKU mix shift is partially offsetting promotional intensity.",
  },
  {
    title: "Distribution Costs",
    border: "border-amber-400",
    titleColor: "text-slate-700",
    description:
      "Fuel surcharges in Northern Emirates route increased distribution costs by 4% this month. Route optimization pending.",
  },
];

const chartHeight = 400;
const zeroLine = 180;
const maxAbs = 24;

function WaterfallChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Y-axis labels */}
        <div className="relative" style={{ height: chartHeight }}>
          {[36, 24, 12, 0, -12].map((tick) => {
            const positions: Record<number, number> = {
              36: 0,
              24: 56,
              12: 112,
              0: zeroLine,
              [-12]: 236,
            };

            return (
              <div
                key={tick}
                className="absolute left-0 right-0 flex items-center"
                style={{ top: positions[tick] }}
              >
                <span className="w-8 text-[10px] text-slate-400">{tick}</span>
                <div className="ml-2 h-px flex-1 bg-slate-100" />
              </div>
            );
          })}

          {/* Bars */}
          <div className="absolute inset-0 ml-12 flex items-end justify-between px-2">
            {data.map((item) => {
              const height = Math.max((Math.abs(item.value) / maxAbs) * 140, 16);
              const isPositive = item.value >= 0;

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-end"
                  style={{ width: "11%" }}
                >
                  <div
                    className={`w-6 sm:w-8 md:w-10 rounded-md ${item.color}`}
                    style={{
                      height,
                      marginBottom: isPositive ? 0 : undefined,
                      transform: isPositive
                        ? `translateY(${zeroLine - chartHeight}px)`
                        : `translateY(${zeroLine - chartHeight + height}px)`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Zero line */}
          <div
            className="absolute left-10 right-0 h-px bg-slate-200"
            style={{ top: zeroLine }}
          />
        </div>

        {/* X-axis labels */}
        <div className="ml-12 mt-3 grid grid-cols-8 gap-2 text-center text-[10px] text-slate-500 sm:text-xs">
          {data.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightCard({
  title,
  description,
  border,
  titleColor,
}: {
  title: string;
  description: string;
  border: string;
  titleColor: string;
}) {
  return (
    <div
      className={`rounded-2xl border-l-4 ${border} bg-white p-5 shadow-sm ring-1 ring-slate-100`}
    >
      <h3 className={`mb-2 text-sm font-semibold ${titleColor}`}>{title}</h3>
      <p className="text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

export default function MarginWaterfallDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left Card */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-indigo-900 sm:text-3xl">
                  The Margin Waterfall
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Value leakage analysis from Gross Revenue to EBIT
                </p>
              </div>

              <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 transition hover:bg-slate-50">
                VIEW FULL BREAK DOWN
                <span className="ml-2">→</span>
              </button>
            </div>

            <WaterfallChart />
          </div>

          {/* Right Panel */}
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 sm:p-4">
            <h2 className="mb-5 text-sm font-bold tracking-wide text-slate-800">
              KEY INSIGHTS
            </h2>

            <div className="space-y-4">
              {insights.map((insight) => (
                <InsightCard key={insight.title} {...insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
