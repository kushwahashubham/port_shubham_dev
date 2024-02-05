import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { getAboutData } from "@/lib/actions/about.action";
import { getFeaturedPostData } from "@/lib/actions/blog.action";
import { getExperiencesData, getSkillsData } from "@/lib/actions/skills.action";
import { getWorkData } from "@/lib/actions/work.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dev Shubham",
  description:
    "Dev Overflow is a vibrant community of 1,000,000+ developers. Join us to connect, learn, and grow together.",
};

export default async function Home() {
  const abouts = await getAboutData();
  const works = await getWorkData();
  const skills = await getSkillsData();
  const experience = await getExperiencesData();
  const posts = await getFeaturedPostData();

  return (
    <main>
      <Header />
      <About abouts={abouts} />
      <Work data={works} />
      <Skills data={skills} experience={experience} />
      <Blog data={posts} />
      <Footer />
    </main>
  );
}
