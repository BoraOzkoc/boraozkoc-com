import MouseFollower from './Components/MouseFollower';
import Projects from './Components/Projects';
import Bio from './Components/Bio';
import GridSection from './Components/GridSection';
import Footer from './Components/Footer';
export default function Home() {
	return (
		<main className="container flex h-full w-full flex-col items-center justify-center gap-20">
			<MouseFollower />
			<GridSection />
			<Bio />
			<Projects />
			<Footer />
		</main>
	);
}
