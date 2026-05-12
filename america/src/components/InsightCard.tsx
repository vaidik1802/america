// components/InsightCard.tsx

interface Props {
  title: string;
  description: string;
  border?: string;
}

export default function InsightCard({
  title,
  description,
  border = "border-slate-300",
}: Props) {
  return (
    <div
      className={`rounded-2xl border-l-4 ${border} bg-white p-5 shadow-sm ring-1 ring-slate-100`}
    >
      <h3 className="mb-2 text-sm font-semibold text-slate-700">{title}</h3>

      <p className="text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}