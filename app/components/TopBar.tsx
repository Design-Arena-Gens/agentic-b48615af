'use client';

import { Bell, Search, UserRound } from "lucide-react";

const TopBar = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 px-4 py-4 backdrop-blur-sm md:px-8">
      <div className="flex flex-1 items-center gap-3">
        <label
          htmlFor="dashboard-search"
          className="sr-only"
        >
          Search dashboard
        </label>
        <div className="relative flex w-full max-w-lg items-center">
          <Search
            aria-hidden="true"
            className="absolute left-3 h-5 w-5 text-neutral-400"
          />
          <input
            id="dashboard-search"
            type="search"
            placeholder="Search trends, scripts, clips..."
            className="w-full rounded-full border border-neutral-200 bg-white px-10 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-500 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm">
          <UserRound className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="hidden font-medium text-neutral-700 md:inline">
            Producer HQ
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
