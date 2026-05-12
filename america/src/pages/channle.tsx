import {
  useEffect,
  useState,
} from "react";

import ChannelCard from "../components/channle";

import type{ Channel } from "../types/channel";

import { getChannels } from "../api/channelapi";

export default function Dashboard() {
  const [channels, setChannels] =
    useState<Channel[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChannels(
          2025,
          "Dec"
        );

        setChannels(data);
      } catch (err) {
        console.error(err);

        setError(
          "Failed to fetch channel analytics"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-slate-100 
      p-4 sm:p-6 lg:p-10"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl sm:text-4xl 
          font-bold text-slate-900"
        >
          Channel Analytics
        </h1>

        <p className="text-slate-500 mt-2">
          Performance breakdown by
          sales channel
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 
        lg:grid-cols-2 gap-6"
      >
        {channels.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
          />
        ))}
      </div>
    </div>
  );
}