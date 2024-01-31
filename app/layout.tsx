import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
// import NavigationDots from "@/components/NavigationDots";
// import SocialMedia from "@/components/SocialMedia";

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
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div>
            <div className=" fixed bottom-0 left-0 z-50 pb-8 pl-8 max-ds:pb-4 max-ds:pl-4">
              <SocialMedia />
            </div> */}
          {children}
          {/* <div className="fixed right-0 top-[50%] mr-2 translate-x-0 translate-y-[-50%] max-ds:hidden">
              <NavigationDots />
            </div>
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
