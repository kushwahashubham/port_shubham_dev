import About from "@/components/About";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Work from "@/components/Work";
import { getAboutData } from "@/lib/actions/about.action";
import { getWorkData } from "@/lib/actions/work.action";

export default async function Home() {
  const abouts = await getAboutData();
  const works = await getWorkData();
  return (
    <main>
      <Navigation />
      <Header />
      <About abouts={abouts} />
      <Work data={works} />
    </main>
  );
}
