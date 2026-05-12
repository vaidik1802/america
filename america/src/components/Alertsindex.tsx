import { IoAlert } from "react-icons/io5";

interface alertspanalProps {
    icon: React.ReactNode;
    title: string;
    label: string;
    solved: string;
    time?: string;
}
const aleertsdata: alertspanalProps[] = [
    {
        icon: <IoAlert />,
        title: "Zinc Burger 1kg margin -6.1pts",
        label:
            "Trade spend exceeded 38% of gross rev on e-commerce channel. Promo ROI negative.",
        solved: "UNRESOLVED",
        time: "2h ago",
    },
    {
        icon: <IoAlert />,
        title: "Frozen Veg returns +1.9% above threshold",
        label:
            "Northern Emirates route showing cold chain lag. COGS adjustment flagged.",
        solved: "INVESTIGATING",
        time: "5h ago",
    },
    {
        icon: <IoAlert />,
        title: "Chicken Nuggets mix shift detected ",
        label:
            "Modern trade volume -11% offset by food service growth. Net margin impact +0.3pts.",
        solved: "UNRESOLVED",
        time: "1D ago",
    },
];
function Alertspanal() {
    return (
        <div>
            <div>

            <h2 className="text-3xl font-bold text-[#2B3674]">Alerts Inbox</h2>
                <p className="text-lg text-slate-900 mt-1 font-bold">
                    Real-time monitoring of margin leakage and operational anomalies
                </p>
            </div>
            <div className="mt-5 space-y-4 ">
                {aleertsdata.map((alert, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 border border-slate-200 rounded-lg p-4 bg-white"
                    >
                        <div className="text-red-500 text-2xl  border border-slate-200 rounded-xs p-2 ">
                            {alert.icon}
                        </div>
                        <div className="w-full">
                            <div className="flex-1 flex items-start justify-between w-full">
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-slate-800">
                                        {alert.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">{alert.label}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">{alert.time}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-6 ">
                                <div>
                                <span
                                    className={`text-xs font-semibold ${alert.solved === "UNRESOLVED" ? "text-red-500" : "text-yellow-500"}`}
                                >
                                    {alert.solved}
                                </span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-green-600 mt-2">
                                        VIEW DETAILS
                                    </h3>
                                    </div>
                                    <div>
                                    <h3 className="text-sm font-medium text-gray-600 mt-2">
                                        ACKNOWLEDGE
                                    </h3>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Alertspanal;
