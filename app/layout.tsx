import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DPA — The CRM Built for Insurance Brokers",
  description:
    "DPA keeps your lead pipeline, tasks, reminders, and documents in one place, built specifically for how insurance brokers work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full snap-y snap-proximity antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
