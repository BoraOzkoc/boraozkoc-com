import React from 'react';
import TechStack from './Components/TechStack';
import Image from 'next/image';
import IconButton from './Components/IconButton';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';
import { Oooh_Baby } from 'next/font/google';

const ooohBaby = Oooh_Baby({
	weight: '400',
	subsets: ['latin']
});

function GridSection() {
	return (
		<section className="flex h-[85vh] w-full items-center justify-center">
			<div className="flex w-[70%] grid-cols-4 grid-rows-4 flex-col gap-4 md:grid">
				<div className="col-span-2 row-span-6 row-start-1 flex items-center justify-center transition-all duration-500 hover:scale-[1.025]">
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
				<div className="card col-span-2 col-start-1 row-span-8 flex flex-row place-content-center place-items-center p-2 transition-all duration-500 hover:scale-[1.025]">
					<div className="flex h-full w-2/5 items-center justify-center">
						<Image src="/favicon.ico" alt="About Me" width={100} height={100} />
					</div>
					<div className="flex h-full w-full flex-col items-start justify-center gap-2">
						<h5 className="max-w-lg text-left text-xs leading-relaxed text-white max-sm:text-sm">
							{`A software engineer with a passion for full-stack development and a background in game development.`}
						</h5>
					</div>
				</div>
				<div className="card group col-span-2 col-start-3 row-span-9 row-start-1 overflow-hidden transition-all duration-500 hover:scale-[1.025]">
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center justify-center pt-3">
							<span className="translate-y-10 text-3xl font-bold transition-all duration-300 group-hover:translate-y-0">
								Projects
							</span>
						</div>
						<div className="flex flex-row items-center justify-center gap-2">
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
				</div>
				<div className="card col-start-4 row-span-5 row-start-10 place-content-center">
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
				<div className="card col-start-3 row-span-5 row-start-10 flex flex-row items-center justify-center transition-all duration-500 hover:scale-[1.025]">
					<Image src="/luqa.png" alt="Game Link" width={100} height={100} />
				</div>
				<div className="row-start-14 card col-span-4 col-start-1 row-span-7 h-fit">
					<TechStack />
				</div>
			</div>
		</section>
	);
}

export default GridSection;
