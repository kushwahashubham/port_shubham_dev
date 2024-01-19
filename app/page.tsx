import About from "@/components/About";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { getAboutData } from "@/lib/actions/about.action";

export default async function Home() {
  const abouts = await getAboutData();
  return (
    <main>
      <Navigation />
      <Header />
      <About abouts={abouts} />
    </main>
  );
}
