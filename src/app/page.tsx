import MouseFollower from './Components/MouseFollower';
import Projects from './Components/Projects';
import Bio from './Components/Bio';
import GridSection from './GridSection';
export default function Home() {
	return (
		<main className="container flex h-full w-full flex-col items-center justify-center">
			<MouseFollower />
			<GridSection />
			<Bio />
			<Projects />
		</main>
	);
}
