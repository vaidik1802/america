// SkuWatchlist.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

type MarginColor = "green" | "red";

interface SKUItem {
  category: string;
  title: string;
  revenue: string;
  margin: string;
  marginColor: MarginColor;
}

const skuItems: SKUItem[] = [
  {
    category: "FROZEN MEAT",
    title: "Chicken Nuggets 750g",
    revenue: "4.84M",
    margin: "16.2%",
    marginColor: "green",
  },
  {
    category: "FROZEN MEAT",
    title: "Beef Burgers 1kg",
    revenue: "3.97M",
    margin: "12.8%",
    marginColor: "green",
  },
  {
    category: "FROZEN VEG",
    title: "Frozen Peas 400g",
    revenue: "1.63M",
    margin: "9.1%",
    marginColor: "red",
  },
];

const SkuWatchlist: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f7fb] py-5 ">
      <div className="mx-auto max-w-7xl  ">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#2f3f87] sm:text-5xl">
              THE SKU WATCHLIST
            </h2>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#33478b] sm:text-base">
              TOP PERFORMERS & CRITICAL RISKS · APRIL 2026
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex w-full items-center justify-center gap-3 rounded-xl border border-[#9aa6d1] bg-transparent px-6 py-4 text-base font-medium text-[#3b4d92] transition-all hover:bg-white hover:shadow-md sm:w-fit">
            <span>Explore Full Portfolio</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skuItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category */}
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8191c9]">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="mt-4 max-w-[240px]9 text-3xl font-bold leading-tight text-[#333333]">
                {item.title}
              </h3>

              {/* Bottom Stats */}
              <div className="mt-10 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#8d97b5]">
                    NET REVENUE
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#37426b]">
                    AED
                  </p>

                  <p className="text-base font-semibold text-[#37426b]">
                    {item.revenue}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-[#8d97b5]">
                    EDIT MARGIN
                  </p>

                  <p
                    className={`mt-2 text-base font-bold ${
                      item.marginColor === "green"
                        ? "text-emerald-500"
                        : "text-rose-500"
                    }`}
                  >
                    {item.margin}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkuWatchlist;