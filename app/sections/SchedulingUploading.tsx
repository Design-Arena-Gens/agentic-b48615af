'use client';

import { useMemo, useState } from "react";
import { CalendarCheck2, Link2, Plus, Sheet } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

interface ScheduleEntry {
  id: string;
  platform: "TikTok" | "YouTube Shorts";
  time: string;
  title: string;
  status: "Queued" | "Rendered" | "Published";
}

const SchedulingUploading = () => {
  const [frequency, setFrequency] = useState<"Daily" | "Twice Daily">(
    "Twice Daily"
  );

  const schedule = useMemo<ScheduleEntry[]>(
    () => [
      {
        id: "1",
        platform: "TikTok",
        time: "Today • 09:30 AM",
        title: "AI Productivity Hacks - Hook Variant A",
        status: "Queued"
      },
      {
        id: "2",
        platform: "YouTube Shorts",
        time: "Today • 07:00 PM",
        title: "Automation Workflow Reveal",
        status: "Rendered"
      },
      {
        id: "3",
        platform: "TikTok",
        time: "Tomorrow • 09:30 AM",
        title: "Creator Burnout Story Cut",
        status: "Queued"
      }
    ],
    []
  );

  const calendarDays = useMemo(
    () => [
      { day: "Mon", date: "13", slots: [{ platform: "TikTok", time: "09:30" }] },
      {
        day: "Tue",
        date: "14",
        slots: [
          { platform: "YouTube Shorts", time: "10:00" },
          { platform: "TikTok", time: "18:30" }
        ]
      },
      { day: "Wed", date: "15", slots: [{ platform: "TikTok", time: "12:00" }] },
      {
        day: "Thu",
        date: "16",
        slots: [
          { platform: "TikTok", time: "08:45" },
          { platform: "YouTube Shorts", time: "19:00" }
        ]
      },
      {
        day: "Fri",
        date: "17",
        slots: [
          { platform: "TikTok", time: "09:30" },
          { platform: "YouTube Shorts", time: "21:15" }
        ]
      },
      { day: "Sat", date: "18", slots: [{ platform: "TikTok", time: "11:00" }] },
      { day: "Sun", date: "19", slots: [] }
    ],
    []
  );

  return (
    <section
      aria-labelledby="scheduling-uploading"
      className="flex flex-col gap-10"
    >
      <SectionHeader
        id="scheduling-uploading"
        title="Scheduling & Uploading"
        description="Sync deliverables to Google Sheets, coordinate upload cadences, and govern metadata in a single control surface."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
            Confirm Upload Plan
          </button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-800">
                Google Sheets Integration
              </h2>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
              >
                <Sheet className="h-4 w-4" aria-hidden="true" />
                Sync Now
              </button>
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Sheet: <span className="font-medium">Shortform Strategic Planner</span>
              <br />
              Range locked across production sprint 27.
            </p>
            <div className="mt-4 grid gap-3 text-xs text-neutral-600">
              <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-neutral-50/70 p-3">
                <span>Last Synced</span>
                <span className="font-semibold text-primary">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-neutral-50/70 p-3">
                <span>Worksheet Tabs</span>
                <span className="font-semibold text-neutral-700">
                  Editorial • Clips • KPI
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-neutral-50/70 p-3">
                <span>Write-back Mode</span>
                <span className="font-semibold text-secondary">Bi-directional</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-800">
                Upload Frequency
              </h2>
              <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs">
                {["Daily", "Twice Daily"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setFrequency(option as "Daily" | "Twice Daily")
                    }
                    className={`rounded-full px-3 py-1 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      frequency === option
                        ? "bg-primary text-white shadow-sm"
                        : "text-neutral-500"
                    }`}
                    aria-pressed={frequency === option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-500">
              Platform cadence meets growth targets by balancing freshness and depth.
            </p>
            <div className="mt-4 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 text-sm">
              <p className="font-semibold text-neutral-700">Publishing Windows</p>
              <ul className="mt-2 grid gap-2 text-neutral-600">
                <li>• Morning spike: 09:30 AM (TikTok)</li>
                <li>• Evening momentum: 07:00 PM (YouTube Shorts)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-800">
              Metadata Toolkit
            </h2>
            <div className="mt-4 grid gap-4">
              <label className="text-sm text-neutral-600">
                Title
                <input
                  type="text"
                  defaultValue="AI Productivity Hacks - Hook Variant A"
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="text-sm text-neutral-600">
                Description
                <textarea
                  rows={3}
                  defaultValue="Unlock creator-grade automation workflows with this 45-second blueprint. Tools, templates, and schedule inside."
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="text-sm text-neutral-600">
                Tags
                <input
                  type="text"
                  defaultValue="automation, productivity, creator economy"
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-neutral-600">
                  Thumbnail
                  <div className="mt-1 flex items-center justify-between rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-xs text-primary">
                    <span>Upload or Select Preset</span>
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </div>
                </label>
                <label className="text-sm text-neutral-600">
                  Sheet Reference
                  <div className="mt-1 flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-500">
                    <span>Sheets Row: <span className="font-semibold text-neutral-700">C27</span></span>
                    <Link2 className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-800">
              Calendar Overview
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Drag windows to reschedule. Platform badges indicate automated upload routing.
            </p>
            <div className="mt-4 grid grid-cols-7 gap-3 text-center text-sm">
              {calendarDays.map((day) => (
                <div
                  key={day.date}
                  className="flex h-40 flex-col gap-2 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-3 text-neutral-600"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
                    <span>{day.day}</span>
                    <span>{day.date}</span>
                  </div>
                  <div className="flex-1 space-y-2 overflow-auto">
                    {day.slots.length ? (
                      day.slots.map((slot, index) => (
                        <div
                          key={`${slot.platform}-${index}`}
                          className={`rounded-xl px-2 py-2 text-xs font-semibold text-white ${
                            slot.platform === "TikTok"
                              ? "bg-primary"
                              : "bg-secondary"
                          }`}
                        >
                          {slot.platform}
                          <br />
                          <span className="text-[0.7rem] font-medium">
                            {slot.time}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-xl border border-dashed border-neutral-200 bg-white p-2 text-xs text-neutral-400">
                        Open slot
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-800">
              Upcoming Uploads
            </h2>
            <div className="mt-3 space-y-3">
              {schedule.map((entry) => (
                <article
                  key={entry.id}
                  className="flex flex-col gap-3 rounded-2xl border border-neutral-100 bg-neutral-50/60 p-4 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white ${
                        entry.platform === "TikTok" ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      {entry.platform === "TikTok" ? "TT" : "YS"}
                    </span>
                    <div>
                      <p className="font-semibold text-neutral-800">
                        {entry.title}
                      </p>
                      <p className="text-xs text-neutral-500">{entry.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        entry.status === "Published"
                          ? "bg-secondary/10 text-secondary"
                          : entry.status === "Rendered"
                          ? "bg-primary/10 text-primary"
                          : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {entry.status}
                    </span>
                    <button
                      type="button"
                      className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-500 transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingUploading;
