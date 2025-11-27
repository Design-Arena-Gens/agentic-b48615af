import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Automation Dashboard",
  description:
    "Comprehensive automation suite for trend analysis, content creation, clipping, scheduling, and optimization."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
