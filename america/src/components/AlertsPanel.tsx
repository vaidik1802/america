import { alerts } from "../data/dashboardData";
import { GoDotFill } from "react-icons/go";

const AlertsPanel = () => {
  return (
    <div className="rounded-3xl border-t-5 border-2  border-red-500 bg-white p-5 shadow-sm 2px solid red">
      <h3 className="mb-6 text-lg font-bold text-red-600 sm:text-xl flex items-center gap-2">
       <GoDotFill /> Breaking Alerts
      </h3>

      <div className="space-y-6">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="border-b border-slate-200 pb-2 last:border-none"
          >
            <p className="text-md font-sm text-red-500">{alert.level}</p>

            <h4 className=" text-md font-bold text-[#2B3674] sm:text-lg">
              {alert.title}
            </h4>

            <p className="mt-2 text-lg font-medium text-slate-600">{alert.desc}</p>
            <h4 className="mt-2 text-base  gap-3 font-medium text-[#2B3674] flex items-center">
              <div>

              {alert.time}
              </div>
              <div>

              {alert.status}
              </div>
            </h4>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full rounded-xl  px-4 py-3 text-sm font-medium text-black border border-gray-500">
        View All Alerts
      </button>

    </div>
  );
};

export default AlertsPanel;