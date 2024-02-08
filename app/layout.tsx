import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Developer",
  description: "Official Website of Developer Shubham kushwaha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <SpeedInsights />
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
