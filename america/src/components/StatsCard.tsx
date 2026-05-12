
type Props = {
  title: string;
  value: string;
  trend: string;
  desc: string;
  positive: boolean;
};

const StatsCard = ({ title, value, trend, desc, positive }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-[32px] font-bold text-slate-900">{value}</h2>

      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className={positive ? "text-green-600" : "text-red-500"}>
          {trend}
        </span>

        <span className="text-slate-400">{desc}</span>
      </div>
    </div>
  );
};

export default StatsCard;