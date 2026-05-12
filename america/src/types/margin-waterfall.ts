// types.ts
export interface MarginWaterfallApiResponse {
  gross_revenue: number;
  trade_spend_impact: number;
  net_revenue: number;
  cogs_impact: number;
  gross_profit: number;
  distribution_impact: number;
  overhead_impact: number;
  ebit: number;

  trade_spend_pct: number;
  cogs_pct: number;
  gross_profit_pct: number;
  distribution_pct: number;
  overhead_pct: number;
  ebit_pct: number;

  key_insights: {
    title: string;
    description: string;
  }[];
}

export interface WaterfallBar {
  label: string;
  value: number;
  color: string;
}