'use client';

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { ArrowDownWideNarrow, BarChart3 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

type RegionFilter = "global" | "us" | "eu";
type SortKey = "volume" | "title";

interface TrendRow {
  id: string;
  title: string;
  searchVolume: number;
  source: "Google Trends" | "TikTok" | "YouTube";
  region: RegionFilter;
  changePct: number;
}

const TrendIdentification = () => {
  const [region, setRegion] = useState<RegionFilter>("global");
  const [sortKey, setSortKey] = useState<SortKey>("volume");
  const [isDescending, setIsDescending] = useState<boolean>(true);

  const trends = useMemo<TrendRow[]>(
    () => [
      {
        id: "1",
        title: "AI Productivity Hacks",
        searchVolume: 94,
        source: "YouTube",
        region: "global",
        changePct: 28
      },
      {
        id: "2",
        title: "Eco-Friendly Travel Tips",
        searchVolume: 88,
        source: "Google Trends",
        region: "eu",
        changePct: 17
      },
      {
        id: "3",
        title: "MrBeast Philanthropy Challenge",
        searchVolume: 97,
        source: "TikTok",
        region: "us",
        changePct: 39
      },
      {
        id: "4",
        title: "24hr Productivity Sprints",
        searchVolume: 81,
        source: "TikTok",
        region: "global",
        changePct: 22
      },
      {
        id: "5",
        title: "Mindful Morning Routines",
        searchVolume: 76,
        source: "Google Trends",
        region: "eu",
        changePct: 9
      },
      {
        id: "6",
        title: "Podcast: Creator Burnout",
        searchVolume: 73,
        source: "YouTube",
        region: "us",
        changePct: 14
      },
      {
        id: "7",
        title: "AI Voiceover Companions",
        searchVolume: 84,
        source: "TikTok",
        region: "global",
        changePct: 31
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    const subset = region === "global" ? trends : trends.filter((t) => t.region === region);
    const sorted = subset.slice().sort((a, b) => {
      if (sortKey === "volume") {
        return isDescending ? b.searchVolume - a.searchVolume : a.searchVolume - b.searchVolume;
      }
      return isDescending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
    return sorted;
  }, [region, trends, sortKey, isDescending]);

  return (
    <section
      aria-labelledby="trend-identification"
      className="flex flex-col gap-10"
    >
      <SectionHeader
        id="trend-identification"
        title="Trend Identification"
        description="Monitor trending topics across top discovery channels and prioritize the signals with the highest growth velocity."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            Export Snapshot
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Signals In Queue",
            value: "142",
            caption: "+18% vs last 24h"
          },
          {
            label: "Average Growth Velocity",
            value: "27%",
            caption: "+6% vs last 7d"
          },
          {
            label: "Cross-Platform Overlap",
            value: "63%",
            caption: "Tripled sources"
          },
          {
            label: "Priority Alerts",
            value: "9",
            caption: "Ready for analysis"
          }
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {card.label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-neutral-900">
              {card.value}
            </p>
            <p className="mt-1 text-xs text-secondary">{card.caption}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-neutral-200 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "global", label: "Global" },
              { id: "us", label: "United States" },
              { id: "eu", label: "European Union" }
            ].map((option) => {
              const isActive = region === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-neutral-200 text-neutral-500 hover:border-primary/40 hover:text-primary"
                  )}
                  onClick={() => setRegion(option.id as RegionFilter)}
                  aria-pressed={isActive}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide text-neutral-400">
              Sort By
            </span>
            <button
              type="button"
              onClick={() => {
                if (sortKey === "volume") {
                  setIsDescending((prev) => !prev);
                } else {
                  setSortKey("volume");
                  setIsDescending(true);
                }
              }}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                sortKey === "volume"
                  ? "border-primary/60 text-primary"
                  : "border-neutral-200 text-neutral-500"
              )}
            >
              <ArrowDownWideNarrow className="h-4 w-4" aria-hidden="true" />
              Volume
            </button>
            <button
              type="button"
              onClick={() => {
                if (sortKey === "title") {
                  setIsDescending((prev) => !prev);
                } else {
                  setSortKey("title");
                  setIsDescending(false);
                }
              }}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                sortKey === "title"
                  ? "border-primary/60 text-primary"
                  : "border-neutral-200 text-neutral-500"
              )}
            >
              <ArrowDownWideNarrow className="h-4 w-4 rotate-90" aria-hidden="true" />
              Alphabetical
            </button>
          </div>
        </div>

        <div className="overflow-x-auto" role="region" aria-live="polite">
          <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
            <thead className="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Trend
                </th>
                <th scope="col" className="px-6 py-3">
                  Search Volume
                </th>
                <th scope="col" className="px-6 py-3">
                  Change
                </th>
                <th scope="col" className="px-6 py-3">
                  Source
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {filtered.map((trend) => (
                <tr key={trend.id} className="transition hover:bg-primary/5">
                  <td className="px-6 py-4">
                    <p className="font-medium text-neutral-800">{trend.title}</p>
                    <p className="text-xs text-neutral-400 capitalize">
                      {trend.region} focus
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-32 overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${trend.searchVolume}%` }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-semibold text-neutral-800">
                        {trend.searchVolume}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                      +{trend.changePct}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                      {trend.source}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Analyze
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TrendIdentification;
