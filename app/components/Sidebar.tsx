'use client';

import { clsx } from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import {
  Lightbulb,
  FileText,
  Scissors,
  CalendarDays,
  Rocket
} from "lucide-react";

export type SidebarItemKey =
  | "trend"
  | "content"
  | "clipping"
  | "scheduling"
  | "optimization";

export interface SidebarProps {
  active: SidebarItemKey;
  onSelect: (key: SidebarItemKey) => void;
}

const iconMap: Record<SidebarItemKey, React.ReactNode> = {
  trend: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
  content: <FileText className="h-5 w-5" aria-hidden="true" />,
  clipping: <Scissors className="h-5 w-5" aria-hidden="true" />,
  scheduling: <CalendarDays className="h-5 w-5" aria-hidden="true" />,
  optimization: <Rocket className="h-5 w-5" aria-hidden="true" />
};

const Sidebar = ({ active, onSelect }: SidebarProps) => {
  const items = useMemo<
    { id: SidebarItemKey; label: string; description: string }[]
  >(
    () => [
      {
        id: "trend",
        label: "Trend Identification",
        description: "Cross-platform signals and insights"
      },
      {
        id: "content",
        label: "Content Creation",
        description: "Script drafting and media automation"
      },
      {
        id: "clipping",
        label: "Video Clipping",
        description: "Smart trimming and compliance"
      },
      {
        id: "scheduling",
        label: "Scheduling & Uploading",
        description: "Calendar sync across channels"
      },
      {
        id: "optimization",
        label: "Viral Optimization",
        description: "Optimization playbooks & analytics"
      }
    ],
    []
  );

  return (
    <nav
      aria-label="Main navigation"
      className="hidden w-72 shrink-0 border-r border-neutral-200 bg-white/70 backdrop-blur md:flex md:flex-col"
    >
      <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-5">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
        >
          VA
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Video Automation
          </p>
          <p className="text-xs text-neutral-500">
            Operate your short-form pipeline
          </p>
        </div>
      </div>

      <ul className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <Link
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(item.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(item.id);
                  }
                }}
                href={`#${item.id}`}
                className={clsx(
                  "flex flex-col rounded-xl border px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "border-primary/80 bg-primary/10 text-primary shadow-sm"
                    : "border-transparent text-neutral-600 hover:border-primary/40 hover:bg-primary/5"
                )}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  {iconMap[item.id]}
                  {item.label}
                </span>
                <span className="mt-1 text-xs text-neutral-500">
                  {item.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-neutral-200 px-6 py-4 text-xs text-neutral-500">
        © {new Date().getFullYear()} Viral Architect. All rights reserved.
      </div>
    </nav>
  );
};

export default Sidebar;
