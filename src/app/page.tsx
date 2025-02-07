import Hero from "./Components/Hero";
import MouseFollower from "./Components/MouseFollower";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="h-fit w-full flex flex-col px-10 xl:justify-center justify-start items-center">
      <MouseFollower />
      <div>
        <Hero />
      </div>
      <div>
        <Projects />
      </div>
    </main>
  );
}
