import React from 'react';
import TechStack from './TechStack';
import Image from 'next/image';
import IconButton from './IconButton';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';
import { Oooh_Baby } from 'next/font/google';
import Link from 'next/link';

const ooohBaby = Oooh_Baby({
	weight: '400',
	subsets: ['latin']
});

function GridSection() {
	return (
		<section className="flex h-full w-full items-center justify-center pt-6 md:h-[85vh]">
			<div className="flex w-[65%] grid-cols-4 grid-rows-8 flex-col gap-4 sm:h-[550px] md:grid">
				<div className="col-span-2 row-span-3 row-start-1 flex items-center justify-center transition-all duration-500 hover:scale-[1.025]">
					<div className="flex w-full flex-row items-center justify-start gap-2">
						<div className="flex flex-col items-start justify-center gap-0 px-3 text-3xl">
							<span>Hi</span>
							<span>{`I'm`}</span>
						</div>
						<div className="flex w-full items-center justify-center">
							<span className={`${ooohBaby.className} text-3xl md:text-4xl lg:text-6xl`}>
								BORA ÖZKOÇ
							</span>
						</div>
					</div>
				</div>
				<div className="card col-span-2 col-start-1 row-span-3 flex flex-col place-content-center place-items-center px-2 transition-all duration-500 hover:scale-[1.025] sm:flex-row">
					<div className="flex h-full w-2/5 items-center justify-center">
						<Image src="/favicon.ico" alt="About Me" width={140} height={140} />
					</div>
					<div className="flex h-full w-full flex-col items-start justify-center gap-2">
						<h5 className="max-w-lg text-left text-xs leading-relaxed text-white max-md:p-3 sm:text-base">
							{`A software engineer with a passion for full-stack development and a background in game development.`}
						</h5>
					</div>
				</div>
				<div className="card group col-span-2 col-start-3 row-span-4 row-start-1 overflow-hidden transition-all duration-500 hover:scale-[1.025]">
					<Link href="#projects" scroll={true}>
						<div className="flex flex-col gap-2 p-6">
							<div className="flex flex-row items-center justify-center p-1 max-sm:h-full sm:pt-3">
								<span className="text-3xl font-bold transition-all duration-300 group-hover:translate-y-0 sm:translate-y-10">
									Projects
								</span>
							</div>
							<div className="flex flex-row items-center justify-center gap-2 max-sm:hidden">
								<div className="-translate-x-20 translate-y-16 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
									<Image
										className="rounded-xl"
										src="https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true"
										alt="Game Image"
										width={200}
										height={200}
									/>
								</div>
								<div className="translate-x-20 translate-y-16 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
									<Image
										className="rounded-xl"
										src="https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true"
										alt="Game Image"
										width={200}
										height={200}
									/>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className="card col-start-4 row-span-2 row-start-5 place-content-center">
					<div className="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:py-0">
						<IconButton link="https://www.linkedin.com/in/bora-ozkoc/" icon={FaLinkedin} />
						<IconButton link="https://github.com/BoraOzkoc" icon={FaGithub} />
						<IconButton
							link="https://apps.apple.com/developer/bora-ozkoc/id1742469862"
							icon={IoLogoAppleAppstore}
						/>
						<IconButton link="mailto:bora.ozkoc@hotmail.com" icon={IoMail} />
					</div>
				</div>
				<div className="card col-start-3 row-span-2 row-start-5 flex flex-row items-center justify-center transition-all duration-500 hover:scale-[1.025]">
					<Link
						className="flex h-full w-full items-center justify-center py-3"
						href="https://luqagames.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="rounded-xl"
							src="/luqa.jpeg"
							alt="Game Link"
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<div className="row-start-14 card col-span-4 col-start-1 row-span-2 h-fit">
					<TechStack />
				</div>
			</div>
		</section>
	);
}

export default GridSection;
