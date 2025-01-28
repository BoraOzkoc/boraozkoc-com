import Hero from "./Components/Hero";
import MouseFollower from "./Components/MouseFollower";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col px-10 xl:justify-center justify-start items-center">
      <MouseFollower />
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}
