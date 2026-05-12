// components/CategoryPerformance.tsx

import { ChevronRight, Filter, RefreshCcw } from "lucide-react";

type Props = {
  onCardClick: (title: string) => void;
};

const categories = [
  {
    letter: "F",
    title: "Frozen Meat",
    skus: "3 active SKUs in portfolio",
    revenue: "AED 11.22M",
    volume: "4870K units",
    gm: "37.6%",
    ebit: "11.1%",
    avatarColor: "bg-violet-600",
    gmColor: "text-emerald-500",
    active: true,
  },
  {
    letter: "F",
    title: "Frozen Veg",
    skus: "1 active SKUs in portfolio",
    revenue: "AED 1.63M",
    volume: "980K units",
    gm: "34.7%",
    ebit: "9.1%",
    avatarColor: "bg-orange-200",
    gmColor: "text-red-500",
  },
  {
    letter: "C",
    title: "Cakes",
    skus: "1 active SKUs in portfolio",
    revenue: "AED 1.28M",
    volume: "410K units",
    gm: "41%",
    ebit: "13.5%",
    avatarColor: "bg-green-400",
    gmColor: "text-emerald-500",
  },
  {
    letter: "C",
    title: "Canned",
    skus: "1 active SKUs in portfolio",
    revenue: "AED 1.10M",
    volume: "720K units",
    gm: "33.3%",
    ebit: "8.3%",
    avatarColor: "bg-yellow-300",
    gmColor: "text-emerald-500",
  },
];

export default function CategoryPerformance({
  onCardClick,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#2e3a7b]">
            Category Performance
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Aggregate view of portfolio health by product category
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-600">
            <Filter size={16} />
            Filter
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-600">
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => onCardClick(item.title)}
            className={`cursor-pointer rounded-2xl border bg-white p-4 md:p-6 transition-all hover:shadow-md ${
              item.active
                ? "border-violet-500"
                : "border-gray-200"
            }`}
          >
            {/* Top */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${item.avatarColor}`}
                >
                  {item.letter}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.skus}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right">
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.revenue}
                </h3>

                <p className="text-xs uppercase text-gray-400">
                  Total Net Revenue
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 h-[2px] bg-gray-100" />

            {/* Bottom */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase text-gray-400">
                    Volume
                  </p>

                  <h4 className="mt-1 text-lg font-semibold text-gray-800">
                    {item.volume}
                  </h4>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400">
                    Avg GM%
                  </p>

                  <h4
                    className={`mt-1 text-lg font-semibold ${item.gmColor}`}
                  >
                    {item.gm}
                  </h4>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400">
                    Avg EBIT%
                  </p>

                  <h4 className="mt-1 text-lg font-semibold text-emerald-500">
                    {item.ebit}
                  </h4>
                </div>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-violet-600">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}