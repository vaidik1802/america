import type { JSX } from "react/jsx-runtime";

type WaterfallItem = {
    left: number;
    right: number;
};

type ChannelItem = {
    label: string;
    value: number;
    color: string;
};

const waterfallData: WaterfallItem[] = [
    { left: 0, right: 25 },
    { left: 15, right: 0 },
    { left: 0, right: 20 },
    { left: 25, right: 0 },
    { left: 0, right: 10 },
    { left: 10, right: 0 },
    { left: 7, right: 0 },
    { left: 0, right: 10 },
];

const channelData: ChannelItem[] = [
    {
        label: "MODERN TRADE",
        value: 42,
        color: "bg-emerald-400",
    },
    {
        label: "VAN SALES",
        value: 28,
        color: "bg-yellow-400",
    },
    {
        label: "DISTRIBUTOR",
        value: 18,
        color: "bg-blue-500",
    },
    {
        label: "E-COMMERCE",
        value: 9,
        color: "bg-red-400",
    },
    {
        label: "FOOD SERVICE",
        value: 3,
        color: "bg-indigo-400",
    },
];

export default function MarginWaterfall(): JSX.Element {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Card */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">
                                The Margin Waterfall
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Data Visualization · Americana Analytics
                            </p>
                        </div>

                        <button className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
                            VIEW FULL BREAKDOWN
                            <span>→</span>
                        </button>
                    </div>

                    {/* Waterfall Chart */}
                    <div className="relative h-80 flex items-end justify-center">
                        {/* Center line */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />

                        {/* Bars */}
                        <div className="w-full flex flex-col justify-between h-full py-4">
                            {waterfallData.map((item: WaterfallItem, index: number) => (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-center h-10"
                                >
                                    {/* Left bar (negative) */}
                                    {item.left > 0 && (
                                        <div
                                            className="absolute right-1/2 mr-0.5 h-7 bg-[#EE5D50] rounded-l-md rounded-r-sm"
                                            style={{
                                                width: `${item.left}%`,
                                                maxWidth: "45%",
                                            }}
                                        />
                                    )}

                                    {/* Right bar (positive) */}
                                    {item.right > 0 && (
                                        <div
                                            className="absolute left-1/2 ml-0.5 h-7 bg-[#05CD99] rounded-r-md rounded-l-sm"
                                            style={{
                                                width: `${item.right}%`,
                                                maxWidth: "45%",
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Labels */}
                    <div className="mt-6 flex justify-between text-[11px] font-semibold tracking-wide text-indigo-900 uppercase">
                        <span>Gross Revenue</span>
                        <span>Net EBIT</span>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase mb-8">
                        Channel Pulse
                    </h2>

                    <div className="space-y-6">
                        {channelData.map((item: ChannelItem) => (
                            <div key={item.label}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[11px] font-semibold text-gray-700 uppercase tracking-wide">
                                        {item.label}
                                    </span>
                                    <span className="text-[11px] font-semibold text-gray-600">
                                        {item.value}%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${item.color}`}
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}