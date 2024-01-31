import BlogNavigation from "@/components/BlogNavigation";
import Posts from "@/components/Posts";
import { getBlogData } from "@/lib/actions/blog.action";
// import { getWorkData } from "@/lib/actions/work.action";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Posts | Dev Shubham",
  description:
    "Dev Overflow is a vibrant community of 1,000,000+ developers. Join us to connect, learn, and grow together.",
};

export default async function Page() {
  const posts = await getBlogData();
  // const works = await getWorkData();

  return (
    <main>
      <BlogNavigation />
      <Posts data={posts} />
    </main>
  );
}
