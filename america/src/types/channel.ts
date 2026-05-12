export type ApiChannel = {
  channel: string;
  net_revenue: number;
  gross_profit: number;
  gross_margin_pct: number;
  revenue_share_pct: number;
};

export type Channel = {
  id: number;
  name: string;
  percentage: number;
  revenue: string;
  grossMargin: string;
  color: string;
};