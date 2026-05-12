// components/PortfolioPage.tsx

import {
  ArrowLeft,
  Filter,
  RefreshCcw,
} from "lucide-react";

type Props = {
  category: string;
  onBack: () => void;
};

const portfolioData: any = {
  "Frozen Meat": {
    title: "Frozen Meat Portfolio",
    subtitle:
      "Deep dive into unit economics for Frozen Meat SKUs",
    items: [
      {
        name: "Chicken Nuggets 750g",
        channel: "Frozen Meat . Modern trade",
        volume: "2200K",
        revenue: "AED 4.84M",
        gm: "45.2%",
        ebit: "16.2%",
        returns: "0.8%",
        status: "Healthy",
        statusColor: "text-emerald-500",
        progress: "45%",
      },
      {
        name: "Beef Burgers 1kg",
        channel: "Frozen Meat . Van sales",
        volume: "1850K",
        revenue: "AED 3.97M",
        gm: "38.4%",
        ebit: "12.8%",
        returns: "0.5%",
        status: "Healthy",
        statusColor: "text-emerald-500",
        progress: "38%",
      },
      {
        name: "Zinc Burger 1kg",
        channel: "Frozen Meat . E-commerce",
        volume: "820K",
        revenue: "AED 2.41M",
        gm: "29.3%",
        ebit: "4.2%",
        returns: "2.5%",
        status: "Critical",
        statusColor: "text-red-500",
        progress: "29%",
      },
    ],
  },

  "Frozen Veg": {
    title: "Frozen Veg Portfolio",
    subtitle:
      "Deep dive into unit economics for Frozen Veg SKUs",
    items: [
      {
        name: "Frozen peas 400g",
        channel: "Frozen Veg . Modern trade",
        volume: "980K",
        revenue: "AED 1.63M",
        gm: "34.7%",
        ebit: "9.1%",
        returns: "1.1%",
        status: "Warning",
        statusColor: "text-orange-500",
        progress: "34%",
      },
    ],
  },

  Cakes: {
    title: "Cakes Portfolio",
    subtitle: "Deep dive into unit economics for Cakes SKUs",
    items: [
      {
        name: "Chocolate Cake 400g",
        channel: "Cakes . Modern trade",
        volume: "410K",
        revenue: "AED 1.28M",
        gm: "41%",
        ebit: "13.5%",
        returns: "0.5%",
        status: "Healthy",
        statusColor: "text-emerald-500",
        progress: "41%",
      },
    ],
  },

  Canned: {
    title: "Canned Portfolio",
    subtitle: "Deep dive into unit economics for Canned SKUs",
    items: [
      {
        name: "Fava Beans 400g",
        channel: "Canned . Van sales",
        volume: "720K",
        revenue: "AED 1.10M",
        gm: "33.3%",
        ebit: "8.3%",
        returns: "1.8%",
        status: "Warning",
        statusColor: "text-orange-500",
        progress: "33%",
      },
    ],
  },
};

export default function PortfolioPage({
  category,
  onBack,
}: Props) {
  const data = portfolioData[category];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-sm text-gray-500"
      >
        <ArrowLeft size={16} />
        Back to Categories
      </button>

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#2e3a7b]">
            {data.title}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {data.subtitle}
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

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-xs uppercase text-gray-500">
              <th className="pb-4">SKU DETAILS</th>
              <th className="pb-4">VOLUME(UNITS)</th>
              <th className="pb-4">NETREVENUE</th>
              <th className="pb-4">GM%</th>
              <th className="pb-4">EBIT%</th>
              <th className="pb-4">RETURNS%</th>
              <th className="pb-4">STATUS</th>
            </tr>
          </thead>

          <tbody>
            {data.items.map((item: any, index: number) => (
              <tr
                key={index}
                className="border-b border-gray-100 last:border-none"
              >
                <td className="py-5">
                  <h3 className="font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.channel}
                  </p>
                </td>

                <td className="py-5 text-sm text-gray-500">
                  {item.volume}
                </td>

                <td className="py-5 font-semibold text-[#2e3a7b]">
                  {item.revenue}
                </td>

                <td className="py-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500">
                      {item.gm}
                    </span>

                    <div className="h-2 w-20 rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-emerald-400"
                        style={{
                          width: item.progress,
                        }}
                      />
                    </div>
                  </div>
                </td>

                <td className="py-5 text-sm text-gray-500">
                  {item.ebit}
                </td>

                <td className="py-5 text-sm text-gray-500">
                  {item.returns}
                </td>

                <td
                  className={`py-5 text-sm font-medium ${item.statusColor}`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}