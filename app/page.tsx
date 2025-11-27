'use client';

import { useEffect, useMemo, useState } from "react";
import Sidebar, { SidebarItemKey } from "./components/Sidebar";
import TopBar from "./components/TopBar";
import TrendIdentification from "./sections/TrendIdentification";
import ContentCreation from "./sections/ContentCreation";
import VideoClipping from "./sections/VideoClipping";
import SchedulingUploading from "./sections/SchedulingUploading";
import ViralOptimization from "./sections/ViralOptimization";

const Page = () => {
  const [active, setActive] = useState<SidebarItemKey>("trend");

  const sectionOrder = useMemo<
    { key: SidebarItemKey; label: string; component: React.ReactNode; anchor: string }[]
  >(
    () => [
      {
        key: "trend",
        label: "Trend Identification",
        component: <TrendIdentification />,
        anchor: "trend-identification"
      },
      {
        key: "content",
        label: "Content Creation",
        component: <ContentCreation />,
        anchor: "content-creation"
      },
      {
        key: "clipping",
        label: "Video Clipping",
        component: <VideoClipping />,
        anchor: "video-clipping"
      },
      {
        key: "scheduling",
        label: "Scheduling & Uploading",
        component: <SchedulingUploading />,
        anchor: "scheduling-uploading"
      },
      {
        key: "optimization",
        label: "Viral Optimization",
        component: <ViralOptimization />,
        anchor: "viral-optimization"
      }
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      let current: SidebarItemKey = "trend";
      for (const section of sectionOrder) {
        const element = document.getElementById(section.anchor);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 160) {
            current = section.key;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionOrder]);

  const handleSelect = (key: SidebarItemKey) => {
    const section = sectionOrder.find((item) => item.key === key);
    if (!section) return;
    const element = document.getElementById(section.anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar active={active} onSelect={handleSelect} />
      <div className="flex w-full flex-col">
        <TopBar />
        <main className="flex-1 space-y-20 px-4 pb-16 pt-6 md:px-8 lg:px-12">
          <div className="md:hidden">
            <label
              htmlFor="mobile-section-nav"
              className="sr-only"
            >
              Navigate sections
            </label>
            <select
              id="mobile-section-nav"
              value={active}
              onChange={(event) => handleSelect(event.target.value as SidebarItemKey)}
              className="w-full rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-600 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {sectionOrder.map((section) => (
                <option key={section.key} value={section.key}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
          {sectionOrder.map((section) => (
            <div key={section.key}>{section.component}</div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Page;
