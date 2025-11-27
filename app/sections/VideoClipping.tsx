'use client';

import { useMemo, useState } from "react";
import { Play, Scissors, Search, ShieldCheck, Captions } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

interface ClipSource {
  id: string;
  title: string;
  channel: string;
  duration: string;
  tags: string[];
  category: "MrBeast" | "Podcast" | "Creator";
}

const VideoClipping = () => {
  const [query, setQuery] = useState("");
  const [startTime, setStartTime] = useState(12);
  const [endTime, setEndTime] = useState(42);
  const [captions, setCaptions] = useState(true);
  const [effects, setEffects] = useState(true);

  const sources = useMemo<ClipSource[]>(
    () => [
      {
        id: "mb1",
        title: "MrBeast - $1 vs $100,000 Vacation",
        channel: "MrBeast",
        duration: "18:15",
        tags: ["High Energy", "Challenge", "Travel"],
        category: "MrBeast"
      },
      {
        id: "pod1",
        title: "Diary of a CEO - Automation Journey",
        channel: "Steven Bartlett",
        duration: "1:08:40",
        tags: ["Entrepreneurship", "Mindset"],
        category: "Podcast"
      },
      {
        id: "pod2",
        title: "Colin and Samir - Viral Cuts Deep Dive",
        channel: "Colin & Samir",
        duration: "52:17",
        tags: ["Strategy", "Virality"],
        category: "Podcast"
      },
      {
        id: "creator1",
        title: "Ali Abdaal - Productivity OS",
        channel: "Ali Abdaal",
        duration: "14:02",
        tags: ["Productivity", "Systems"],
        category: "Creator"
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query) return sources;
    const q = query.toLowerCase();
    return sources.filter(
      (source) =>
        source.title.toLowerCase().includes(q) ||
        source.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        source.channel.toLowerCase().includes(q)
    );
  }, [query, sources]);

  return (
    <section
      aria-labelledby="video-clipping"
      className="flex flex-col gap-10"
    >
      <SectionHeader
        id="video-clipping"
        title="Video Clipping"
        description="Find contextually relevant moments from high-performing creators and slice publish-ready clips in seconds."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Scissors className="h-4 w-4" aria-hidden="true" />
            Extract Clip
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="relative">
            <label htmlFor="clip-search" className="sr-only">
              Search source videos
            </label>
            <Search
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            />
            <input
              id="clip-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search MrBeast, podcasts, or creator libraries…"
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 px-10 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div
            role="list"
            aria-label="Source library results"
            className="grid gap-3"
          >
            {filtered.map((source) => (
              <article
                key={source.id}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 transition hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800">
                      {source.title}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {source.channel} • {source.duration}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {source.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                  {source.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-neutral-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-900">
            <video
              className="h-full w-full object-cover"
              controls
              aria-label="Clip preview player"
              poster="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60"
            >
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                type="video/webm"
              />
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4">
            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>Trim Range</span>
              <span>
                {startTime}s - {endTime}s • {Math.max(endTime - startTime, 0)}s
              </span>
            </div>
            <div className="mt-3 h-16 rounded-xl bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10">
              <div
                aria-hidden="true"
                className="h-full bg-[length:20px_100%] bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_2px,_transparent_0)] opacity-70"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 text-sm">
                <label htmlFor="start-range" className="w-16 text-neutral-500">
                  Start
                </label>
                <input
                  id="start-range"
                  type="range"
                  min={0}
                  max={90}
                  value={startTime}
                  onChange={(event) =>
                    setStartTime(Math.min(Number(event.target.value), endTime - 1))
                  }
                  className="w-full accent-primary"
                />
                <span className="w-8 text-right text-xs text-neutral-500">
                  {startTime}s
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <label htmlFor="end-range" className="w-16 text-neutral-500">
                  End
                </label>
                <input
                  id="end-range"
                  type="range"
                  min={startTime + 1}
                  max={120}
                  value={endTime}
                  onChange={(event) =>
                    setEndTime(Math.max(Number(event.target.value), startTime + 1))
                  }
                  className="w-full accent-primary"
                />
                <span className="w-8 text-right text-xs text-neutral-500">
                  {endTime}s
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 text-sm text-neutral-600 shadow-sm">
              <input
                type="checkbox"
                checked={captions}
                onChange={(event) => setCaptions(event.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              <span className="flex items-center gap-2">
                <Captions className="h-5 w-5 text-primary" aria-hidden="true" />
                Auto captions (brand font)
              </span>
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 text-sm text-neutral-600 shadow-sm">
              <input
                type="checkbox"
                checked={effects}
                onChange={(event) => setEffects(event.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              <span className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" aria-hidden="true" />
                Strobe transitions & color grading
              </span>
            </label>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-secondary/30 bg-secondary/5 p-4 text-xs text-neutral-600">
            <ShieldCheck className="h-5 w-5 text-secondary" aria-hidden="true" />
            <p>
              Attribution & Fair Use: Clip metadata, source citation overlays, and
              usage thresholds are auto-applied for compliance. Legal audit trail is
              stored in your policy workspace for 24 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoClipping;
