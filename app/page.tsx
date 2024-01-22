import About from "@/components/About";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { getAboutData } from "@/lib/actions/about.action";
import { getExperiencesData, getSkillsData } from "@/lib/actions/skills.action";
import { getWorkData } from "@/lib/actions/work.action";

export default async function Home() {
  const abouts = await getAboutData();
  const works = await getWorkData();
  const skills = await getSkillsData();
  const experience = await getExperiencesData();
  return (
    <main>
      <Navigation />
      <Header />
      <About abouts={abouts} />
      <Work data={works} />
      <Skills data={skills} experience={experience} />
    </main>
  );
}
