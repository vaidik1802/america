// DeepResearchSection.tsx
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

type CardColor = "emerald" | "rose" | "amber";

interface CardItem {
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  color: CardColor;
  icon: React.ReactNode | string;
}

const cards: CardItem[] = [
  {
    title: "The Convenience Paradigm",
    description:
      "Consumers across the GCC are increasingly seeking hassle-free meal solutions. Key purchasing drivers particularly among Gen Z and younger Millennials include quick preparation and single-serve packaging.",
    footerLeft: "Impact Level",
    footerRight: "HIGH",
    color: "emerald",
    icon: <AiFillThunderbolt />,
  },
  {
    title: "Tourism-Led Demand",
    description:
      "The GCC has emerged as a global tourism hub (Dubai, Doha, Riyadh). The hospitality sector (HoReCa) relies significantly on processed poultry products to meet diverse dietary preferences of international visitors.",
    footerLeft: "Growth Driver",
    footerRight: "Hospitality",
    color: "rose",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "Food Security Framework",
    description:
      "Alignment with the UAE National Food Security Strategy 2051 is driving domestic production efforts. Strategic investments in local capacity are aimed at reducing import reliance and stabilizing regional supply chains.",
    footerLeft: "Policy Focus",
    footerRight: "Strategy 2051",
    color: "amber",
    icon:<MdOutlineSecurity />,
  },
];

const colorMap: Record<
  CardColor,
  {
    border: string;
    bottom: string;
    left: string;
    text: string;
  }
> = {
  emerald: {
    border: "border-emerald-400",
    bottom: "after:bg-emerald-400",
      left: "after:bg-emerald-400",
    text: "text-emerald-500",
  },
  rose: {
    border: "border-rose-400",
    bottom: "after:bg-rose-400",
    left: "after:bg-rose-400",
    text: "text-rose-500",
  },
  amber: {
    border: "border-amber-400",
    bottom: "after:bg-amber-400",
    left: "after:bg-amber-400",
    text: "text-amber-500",
  },
};

const DeepResearchSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f7fb]  py-10 ">
      <div className="mx-auto max-w-7xl border-y border-slate-300 py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#243a7a] sm:text-4xl">
              DEEP RESEARCH
            </h1>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#2e437e] sm:text-base">
              GCC Poultry Intelligence : Strategic Synthesis 2026-2031
            </p>
          </div>

          {/* Source Button */}
          <button className="flex w-fit items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-[#40518d] shadow-sm transition hover:shadow-md sm:text-base">
            <span>Source: Mordor Intelligence</span>
            <span className="text-lg">📖</span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const styles = colorMap[card.color];

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300  ${styles.border} border-l-5 border-b-5 after:absolute after:inset-0 after:-z-10 after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:scale-y-100 ${styles.bottom} ${styles.left} `}
              >
                {/* Card Header */}
                <div className="mb-4 flex items-center gap-2">
                  <span className={`text-lg ${styles.text}`}>
                    {card.icon}
                  </span>

                  <h3 className={`text-sm font-semibold ${styles.text}`}>
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-700">
                  {card.description}
                </p>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{card.footerLeft}</span>

                  <span className={`font-semibold uppercase ${styles.text}`}>
                    {card.footerRight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeepResearchSection;