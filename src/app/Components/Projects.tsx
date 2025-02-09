'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FaReact, FaSwift } from 'react-icons/fa6';
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiJavascript,
	SiXcode,
	SiUnity
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

function Projects() {
	const [showAll, setShowAll] = useState(false);

	const allProjects = [
		{
			projectName: 'Card Game',
			projectDescription:
				'A fun and interactive memory card game built with React, Next.js, TypeScript, and Tailwind CSS. Test your memory by matching pairs of dog images!',
			projectImage: 'https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true',
			projectIcons: [
				<FaReact key="react" size={16} />,
				<SiTypescript key="typescript" size={16} />,
				<SiNextdotjs key="next" size={16} />,
				<SiTailwindcss key="tailwind" size={16} />
			],
			projectType: 'Web Application',
			projectLink: 'https://card-game-eosin.vercel.app'
		},
		{
			projectName: 'Trivia Quiz',
			projectDescription:
				'A modern, interactive trivia quiz game built with React, Javascript Next.js and Tailwind CSS. Challenge yourself with random quiz categories and test your knowledge in this engaging web application.',
			projectImage:
				'https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true',
			projectIcons: [
				<FaReact key="react" size={16} />,
				<SiJavascript key="javascript" size={16} />,
				<SiNextdotjs key="next" size={16} />,
				<SiTailwindcss key="tailwind" size={16} />
			],
			projectType: 'Web Application',
			projectLink: 'https://trivia-quiz-pearl.vercel.app'
		},
		{
			projectName: 'Calculator',
			projectDescription:
				'A calculator app built with SwiftUI and Swift. It allows you to perform basic calculations.',
			projectImage:
				'https://github.com/BoraOzkoc/Calculator/blob/main/Calculator%20App%20Video-2.gif?raw=true',
			projectIcons: [<SiXcode key="xcode" size={16} />, <FaSwift key="swift" size={16} />],
			projectType: 'Mobile App',
			projectLink: 'https://github.com/BoraOzkoc/Calculator'
		},
		{
			projectName: 'Map App',
			projectDescription:
				'A map app built with SwiftUI and Swift. It allows you to search for places and get information about the place.',
			projectImage:
				'https://github.com/BoraOzkoc/SwiftUiMapApp/blob/main/Ekran%20Kaydı%202024-08-23%2022.07.03.gif?raw=true',
			projectIcons: [<SiXcode key="xcode" size={16} />, <FaSwift key="swift" size={16} />],
			projectType: 'Mobile App',
			projectLink: 'https://github.com/BoraOzkoc/SwiftUiMapApp'
		},
		{
			projectName: 'Merging Dragons',
			projectDescription:
				'A mobile game built with Unity and C#. It is a merging game where you merge dragons to get a stronger dragon.',
			projectImage:
				'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/64/69/27/64692790-324e-a687-d773-bbb12f531232/a4939644-5d87-412d-8778-ddc5a3aa6ba0__screen_1242x2208_4.png/392x696bb.png',
			projectIcons: [<SiUnity key="unity" size={16} />, <TbBrandCSharp key="csharp" size={16} />],
			projectType: 'Mobile Game',
			projectLink: 'https://apps.apple.com/tr/app/merging-dragons/id6502720658?l=tr'
		},
		{
			projectName: 'Reconstructed Rome',
			projectDescription:
				'A mobile game built with Unity and C#. It is a simulation game where you build variety of structures in Rome.',
			projectImage:
				'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/65/07/e9/6507e92d-97c9-fffa-7ecf-c6139690690c/f329bbf9-d56e-4a0d-9bc4-5bcc39a09f4e__screen_1242x2208_2024-07-01_15-58-33.png/392x696bb.png',
			projectIcons: [<SiUnity key="unity" size={16} />, <TbBrandCSharp key="csharp" size={16} />],
			projectType: 'Mobile Game',
			projectLink: 'https://apps.apple.com/tr/app/reconstructedrome/id6504153435?l=tr'
		}
	];

	const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

	return (
		<div className="flex h-fit w-fit flex-col items-center justify-center gap-10 p-6">
			<h1 className="text-4xl font-bold">Projects</h1>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
				{visibleProjects.map((project, index) => (
					<ProjectCard
						key={index}
						projectName={project.projectName}
						projectDescription={project.projectDescription}
						projectImage={project.projectImage}
						projectIcons={project.projectIcons}
						projectType={project.projectType}
						projectLink={project.projectLink}
					/>
				))}
			</div>
			<button
				onClick={() => setShowAll(!showAll)}
				className="w-full px-4 text-right text-blue-500 transition-colors hover:text-blue-700"
			>
				{showAll ? 'See Less' : 'See More'}
			</button>
		</div>
	);
}

export default Projects;
