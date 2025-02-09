'use client';

import React from 'react';
import { RiNextjsLine, RiReactjsLine } from 'react-icons/ri';
import { SiTailwindcss, SiUnity, SiAppstore } from 'react-icons/si';
import { GrSwift } from 'react-icons/gr';
import { TbBrandCSharp, TbBrandTypescript } from 'react-icons/tb';
import { DiJavascript1 } from 'react-icons/di';
import { FaSlack } from 'react-icons/fa6';
import { FaGit } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

const techStackItems = [
	{
		quote: 'React',
		icon: <RiReactjsLine className="h-full w-full p-3" />
	},
	{
		quote: 'Next.js',
		icon: <RiNextjsLine className="h-full w-full p-3" />
	},
	{
		quote: 'Tailwind CSS',
		icon: <SiTailwindcss className="h-full w-full p-3" />
	},

	{
		quote: 'Unity',
		icon: <SiUnity className="h-full w-full p-3" />
	},
	{
		quote: 'C#',
		icon: <TbBrandCSharp className="h-full w-full p-3" />
	},
	{
		quote: 'App Store',
		icon: <SiAppstore className="h-full w-full p-3" />
	},
	{
		quote: 'Swift',
		icon: <GrSwift className="h-full w-full p-3" />
	},
	{
		quote: 'TypeScript',
		icon: <TbBrandTypescript className="h-full w-full p-3" />
	},
	{
		quote: 'JavaScript',
		icon: <DiJavascript1 className="h-full w-full p-3" />
	},
	{
		quote: 'Slack',
		icon: <FaSlack className="h-full w-full p-3" />
	},
	{
		quote: 'Git',
		icon: <FaGit className="h-full w-full p-3" />
	},
	{
		quote: 'GitHub',
		icon: <LuGithub className="h-full w-full p-3" />
	}
];

function TechStack() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex h-[100px] w-full items-center justify-center rounded-3xl">
				<div className="relative flex w-full overflow-hidden">
					<div className="absolute left-0 top-0 z-10 h-64 w-32 bg-gradient-to-r from-[#15171B]"></div>
					<div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#15171B]"></div>
					<div className="flex w-full gap-2">
						<ul className="flex shrink-0 animate-infinite-scroll flex-row items-center justify-center gap-2">
							{[...techStackItems].map((item, idx) => (
								<li
									className="group relative h-[70px] w-[70px] max-w-full rounded-3xl bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 p-px transition-all duration-300 hover:w-[100px] hover:p-1 hover:pb-6"
									key={`first-${idx}`}
								>
									<div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-gray-800">
										<div className="flex h-full w-full flex-row items-center justify-center">
											{item.icon}
										</div>
										<div className="duration-600 pointer-events-none absolute bottom-1 w-full rounded-lg text-center text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
											{item.quote}
										</div>
									</div>
								</li>
							))}
						</ul>
						<ul className="flex shrink-0 animate-infinite-scroll flex-row items-center justify-center gap-2">
							{[...techStackItems].map((item, idx) => (
								<li
									className="group relative h-[70px] w-[70px] max-w-full rounded-3xl bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 p-px transition-all duration-300 hover:w-[100px] hover:p-1 hover:pb-6"
									key={`second-${idx}`}
								>
									<div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-gray-800">
										<div className="flex h-full w-full flex-row items-center justify-center">
											{item.icon}
										</div>
										<div className="duration-600 pointer-events-none absolute bottom-1 w-full rounded-lg text-center text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
											{item.quote}
										</div>
									</div>
								</li>
							))}
						</ul>
						<ul className="flex shrink-0 animate-infinite-scroll flex-row items-center justify-center gap-2">
							{[...techStackItems].map((item, idx) => (
								<li
									className="group relative h-[70px] w-[70px] max-w-full rounded-3xl bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 p-px transition-all duration-300 hover:w-[100px] hover:p-1 hover:pb-6"
									key={`second-${idx}`}
								>
									<div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-gray-800">
										<div className="flex h-full w-full flex-row items-center justify-center">
											{item.icon}
										</div>
										<div className="duration-600 pointer-events-none absolute bottom-1 w-full rounded-lg text-center text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
											{item.quote}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TechStack;
