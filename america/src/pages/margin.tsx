// pages/MarginWaterfallDashboard.tsx

import { useEffect, useMemo, useState } from "react";

import InsightCard from "../components/InsightCard";
import WaterfallChart from "../components/marginwaterfall";

import { getMarginWaterfallData } from "../api/marginwaterfall";

import type{ MarginWaterfallApiResponse, WaterfallBar } from "../types/margin-waterfall";

export default function MarginWaterfallDashboard() {
  const [loading, setLoading] = useState(true);

  const [apiData, setApiData] =
    useState<MarginWaterfallApiResponse | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await getMarginWaterfallData();

      setApiData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const waterfallData: WaterfallBar[] = useMemo(() => {
    if (!apiData) return [];

    return [
      {
        label: "Gross Revenue",
        value: apiData.gross_revenue,
        color: "bg-slate-300",
      },
      {
        label: "Trade Spend",
        value: apiData.trade_spend_impact,
        color: "bg-red-500",
      },
      {
        label: "Net Revenue",
        value: apiData.net_revenue,
        color: "bg-emerald-500",
      },
      {
        label: "COGS",
        value: apiData.cogs_impact,
        color: "bg-red-500",
      },
      {
        label: "Gross Profit",
        value: apiData.gross_profit,
        color: "bg-emerald-500",
      },
      {
        label: "Distribution",
        value: apiData.distribution_impact,
        color: "bg-red-500",
      },
      {
        label: "Overhead",
        value: apiData.overhead_impact,
        color: "bg-red-500",
      },
      {
        label: "EBIT",
        value: apiData.ebit,
        color: apiData.ebit >= 0 ? "bg-emerald-500" : "bg-red-500",
      },
    ];
  }, [apiData]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
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
              </button>
            </div>

            <WaterfallChart data={waterfallData} />
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <h2 className="mb-5 text-sm font-bold tracking-wide text-slate-800">
              KEY INSIGHTS
            </h2>

            <div className="space-y-4">
              {apiData?.key_insights?.map((item, index) => (
                <InsightCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  border={
                    index === 0
                      ? "border-red-400"
                      : index === 1
                      ? "border-amber-400"
                      : "border-emerald-400"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}