import axios from "axios";

import type {
  ApiChannel,
  Channel,
} from "../types/channel";

const colors = [
  "#05CD99",
  "#6ED3EE",
  "#FFB547",
  "#EE5D50",
  "#A3AED0",
];

const formatCurrency = (
  value: number
) => {
  if (value >= 1000000) {
    return `AED ${(value / 1000000).toFixed(
      1
    )}M`;
  }

  if (value >= 1000) {
    return `AED ${(value / 1000).toFixed(
      1
    )}K`;
  }

  return `AED ${value}`;
};

export const getChannels = async (
  year: number,
  month: string
): Promise<Channel[]> => {
  const payload = {
    workflow_key:
      "fpa-channel-analytics-page",

    app_token:
      "fpa-application-services",

    user_id: 30,

    user_name: "30",

    user_input: JSON.stringify({
      year,
      month,
    }),
  };

  const response = await axios.post(
    "https://headless-api.gentleriver-743e82b0.eastus2.azurecontainerapps.io/headless/v1/workflow/run",
    payload
  );



  const apiData: ApiChannel[] =
    response.data;

  return apiData.map(
    (item, index) => ({
      id: index + 1,

      name: item.channel,

      percentage: Math.round(
        item.revenue_share_pct
      ),

      revenue: formatCurrency(
        item.net_revenue
      ),

      grossMargin: `${item.gross_margin_pct}%`,

      color:
        colors[index % colors.length],
    })
  );
};