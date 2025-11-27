'use client';

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import {
  Hash,
  Lightbulb,
  Rocket,
  SplitSquareHorizontal
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

type MetricKey = "views" | "likes" | "shares";

const ViralOptimization = () => {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("views");
  const [activeVariant, setActiveVariant] = useState<"A" | "B">("A");

  const chartData = useMemo(
    () => [
      { label: "Mon", views: 9200, likes: 1450, shares: 320 },
      { label: "Tue", views: 10800, likes: 1630, shares: 410 },
      { label: "Wed", views: 13700, likes: 2100, shares: 520 },
      { label: "Thu", views: 15600, likes: 2450, shares: 670 },
      { label: "Fri", views: 18200, likes: 3120, shares: 890 },
      { label: "Sat", views: 20100, likes: 3560, shares: 1040 },
      { label: "Sun", views: 18900, likes: 3370, shares: 980 }
    ],
    []
  );

  const recommendations = useMemo(
    () => [
      {
        id: 1,
        title: "Keyword Density",
        detail:
          "Include 'AI automation' in the first 20 characters to capture 31% more watch time from search traffic."
      },
      {
        id: 2,
        title: "Hook Refinement",
        detail:
          "Lead with transformation payoff within 1.2 seconds. Use kinetic typography overlays with primary accent pulses."
      },
      {
        id: 3,
        title: "Retention Anchors",
        detail:
          "Add a mid-roll micro CTA at 21s. Creator economy segments respond with +18% average session duration."
      }
    ],
    []
  );

  const variantData = useMemo(
    () => ({
      A: {
        title: "This AI Tool Replaced 6 Hours of Work",
        thumbnail: "Gradient Pulse • Automation dashboard hero",
        conversion: "CTR 3.4%",
        isWinner: false
      },
      B: {
        title: "Automate Your Viral Clips in 60 Seconds",
        thumbnail: "Creator reaction + dashboard overlay",
        conversion: "CTR 4.9%",
        isWinner: true
      }
    }),
    []
  );

  return (
    <section
      aria-labelledby="viral-optimization"
      className="flex flex-col gap-10"
    >
      <SectionHeader
        id="viral-optimization"
        title="Viral Optimization"
        description="Power growth with keyword intelligence, hashtag orchestration, A/B testing experiments, and performance insights."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Rocket className="h-4 w-4" aria-hidden="true" />
            Launch Optimization
          </button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-neutral-800">
                Performance Overview
              </h2>
              <p className="text-sm text-neutral-500">
                Track impact across watch metrics to steer iterative optimizations.
              </p>
            </div>
            <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs">
              {(["views", "likes", "shares"] as MetricKey[]).map((metric) => (
                <button
                  key={metric}
                  type="button"
                  onClick={() => setActiveMetric(metric)}
                  className={`rounded-full px-3 py-1 font-semibold capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeMetric === metric
                      ? "bg-primary text-white shadow-sm"
                      : "text-neutral-500"
                  }`}
                >
                  {metric}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3498db" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3498db" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2ecc71" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="label" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    border: "1px solid #e5e7eb",
                    fontSize: 12
                  }}
                  cursor={{ stroke: "#3498db", strokeWidth: 1, strokeDasharray: "4 4" }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey={activeMetric}
                  stroke={activeMetric === "shares" ? "#2ecc71" : "#3498db"}
                  fill={`url(#${activeMetric === "shares" ? "colorSecondary" : "colorPrimary"})`}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-neutral-800">
                Optimization Plays
              </h2>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-neutral-600">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4"
                >
                  <p className="font-semibold text-neutral-800">{item.title}</p>
                  <p className="mt-1 text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-700">
              <Hash className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold">Hashtag Intelligence</h2>
            </div>
            <p className="mt-1 text-sm text-neutral-500">
              Blend broad & niche discovery. Score updates hourly from TikTok analytics.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              {[
                { tag: "#AIAutomation", score: 97, action: "Use" },
                { tag: "#CreatorOps", score: 91, action: "Test" },
                { tag: "#ShortFormLab", score: 86, action: "Use" },
                { tag: "#ProductivityStack", score: 79, action: "Monitor" }
              ].map((item) => (
                <div
                  key={item.tag}
                  className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-neutral-50/70 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-neutral-700">{item.tag}</p>
                    <p className="text-xs text-neutral-400">
                      Engagement score • {item.score}/100
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.action === "Use"
                        ? "bg-secondary/10 text-secondary"
                        : item.action === "Test"
                        ? "bg-primary/10 text-primary"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SplitSquareHorizontal
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h2 className="text-lg font-semibold text-neutral-800">
                  A/B Experiment
                </h2>
              </div>
              <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs">
                {["A", "B"].map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setActiveVariant(variant as "A" | "B")}
                    className={`rounded-full px-3 py-1 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeVariant === variant
                        ? "bg-primary text-white shadow-sm"
                        : "text-neutral-500"
                    }`}
                  >
                    Variant {variant}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 text-sm text-neutral-600">
              <p className="text-neutral-500">Title:</p>
              <p className="text-base font-semibold text-neutral-800">
                {variantData[activeVariant].title}
              </p>
              <p className="mt-3 text-neutral-500">Thumbnail:</p>
              <p className="font-medium text-neutral-700">
                {variantData[activeVariant].thumbnail}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-neutral-200 px-3 py-1 font-semibold text-neutral-600">
                  {variantData[activeVariant].conversion}
                </span>
                {variantData[activeVariant].isWinner ? (
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-semibold text-secondary">
                    Leading Variant
                  </span>
                ) : (
                  <span className="text-neutral-400">Monitoring…</span>
                )}
              </div>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Apply Winning Assets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralOptimization;
