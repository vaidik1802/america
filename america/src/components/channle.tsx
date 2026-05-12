import type{ Channel } from "../types/channel";

type Props = {
  channel: Channel;
};

const CircularProgress = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => {
  return (
    <div
      className="relative flex items-center justify-center 
      w-20 h-20 sm:w-24 sm:h-24 
      rounded-full border-[5px]"
      style={{
        borderColor: color,
      }}
    >
      <span className="text-xl font-bold text-slate-800">
        {percentage}%
      </span>
    </div>
  );
};

export default function ChannelCard({
  channel,
}: Props) {
  return (
    <div
      className="bg-white rounded-2xl p-5 
      border border-slate-200 shadow-sm"
    >
      <div
        className="flex flex-col sm:flex-row 
        gap-5 items-start sm:items-center"
      >
        {/* Circle */}
        <CircularProgress
          percentage={channel.percentage}
          color={channel.color}
        />

        {/* Content */}
        <div className="flex-1 w-full">
          <h2
            className="text-2xl font-bold 
            text-slate-900 mb-4"
          >
            {channel.name}
          </h2>

          <div
            className="flex items-start 
            justify-between gap-4"
          >
            {/* Revenue */}
            <div>
              <p
                className="text-xs uppercase 
                text-slate-400 font-semibold"
              >
                Revenue
              </p>

              <p
                className="text-lg font-bold 
                text-slate-800"
              >
                {channel.revenue}
              </p>
            </div>

            {/* Gross Margin */}
            <div className="text-right">
              <p
                className="text-xs uppercase 
                text-slate-400 font-semibold"
              >
                Gross Margin
              </p>

              <p
                className="text-lg font-bold 
                text-green-500"
              >
                {channel.grossMargin}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div
            className="w-full h-2 bg-slate-200 
            rounded-full mt-5 overflow-hidden"
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${channel.percentage}%`,
                backgroundColor:
                  channel.color,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}