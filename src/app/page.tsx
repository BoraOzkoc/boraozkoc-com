import Hero from "./Components/Hero";
import MouseFollower from "./Components/MouseFollower";

export default function Home() {
  return (
    <main className="h-screen w-screen flex p-10 xl:justify-center justify-start items-center">
      <MouseFollower />
      <Hero />
    </main>
  );
}
