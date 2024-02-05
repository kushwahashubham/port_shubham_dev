import BlogNavigation from "@/components/BlogNavigation";
import Posts from "@/components/Posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Posts | Dev Shubham",
  description:
    "Dev Overflow is a vibrant community of 1,000,000+ developers. Join us to connect, learn, and grow together.",
};

export default function Page() {
  return (
    <main>
      <BlogNavigation />
      <Posts />
    </main>
  );
}
