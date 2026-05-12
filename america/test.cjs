const axios = require("axios");
async function test() {
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
  const response = await axios.post("https://headless-api.gentleriver-743e82b0.eastus2.azurecontainerapps.io/headless/v1/workflow/run", payload);
  console.log(JSON.stringify(response.data, null, 2));
}
test();
