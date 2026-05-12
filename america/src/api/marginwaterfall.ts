// services/marginWaterfallApi.ts

import type{ MarginWaterfallApiResponse } from "../types/margin-waterfall";

const API_URL = "https://headless-api.gentleriver-743e82b0.eastus2.azurecontainerapps.io/headless/v1/workflow/run";

export const getMarginWaterfallData = async (): Promise<MarginWaterfallApiResponse> => {
  const payload = {
    workflow_key: "fpa-margin-waterfall-page",
    app_token: "fpa-application-services",
    user_id: 30,
    user_name: "30",
    user_input: JSON.stringify({
      year: 2025,
      month: "Dec",
    }),
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch waterfall data");
  }

  return response.json();
};