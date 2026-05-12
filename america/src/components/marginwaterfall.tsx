
import type{ WaterfallBar } from "../types/margin-waterfall";


interface Props {
  data?: WaterfallBar[];
}
// utils/format.ts

export const formatMillions = (value: number) => {
  return `${(value / 1000000).toFixed(1)}M`;
};
export default function WaterfallChart({ data = [] }: Props) {
  // SAFE VALUE
  const safeData = Array.isArray(data) ? data : [];

  const chartHeight = 400;
  const zeroLine = 180;

  // SAFE max value
  const maxAbs =
    safeData.length > 0
      ? Math.max(...safeData.map((d) => Math.abs(d.value)))
      : 1;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        <div className="relative" style={{ height: chartHeight }}>
          {/* Grid */}
          {[100, 75, 50, 25, 0].map((tick, index) => (
            <div
              key={tick}
              className="absolute left-0 right-0 flex items-center"
              style={{
                top: index * 70,
              }}
            >
              <span className="w-12 text-[10px] text-slate-400">
                {tick}%
              </span>

              <div className="ml-2 h-px flex-1 bg-slate-100" />
            </div>
          ))}

          {/* Bars */}
          <div className="absolute inset-0 ml-14 flex items-end justify-between px-2">
            {safeData.map((item) => {
              const height = Math.max(
                (Math.abs(item.value) / maxAbs) * 140,
                16
              );

              const isPositive = item.value >= 0;

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-end"
                  style={{ width: "11%" }}
                >
                  <span className="mb-2 text-[11px] font-medium text-slate-600">
                    {formatMillions(item.value)}
                  </span>

                  <div
                    className={`w-8 rounded-md md:w-10 ${item.color}`}
                    style={{
                      height,
                      transform: isPositive
                        ? `translateY(${zeroLine - chartHeight}px)`
                        : `translateY(${
                            zeroLine - chartHeight + height
                          }px)`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Zero line */}
          <div
            className="absolute left-12 right-0 h-px bg-slate-300"
            style={{ top: zeroLine }}
          />
        </div>

        {/* Labels */}
        <div className="ml-14 mt-4 grid grid-cols-8 gap-2 text-center text-[10px] text-slate-500 sm:text-xs">
          {safeData.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}