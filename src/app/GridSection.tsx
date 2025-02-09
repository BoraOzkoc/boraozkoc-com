import React from 'react';
import TechStack from './Components/TechStack';
import Image from 'next/image';
import IconButton from './Components/IconButton';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';

function GridSection() {
	return (
		<section className="flex h-full w-full items-center justify-center">
			<div className="grid w-[70%] grid-cols-3 grid-rows-4 gap-4">
				<div className="row-span-10 flex flex-col place-content-center place-items-center rounded-xl border border-[#b7b7b753] bg-[#22272f97]">
					<Image src="/favicon.ico" alt="About Me" width={100} height={100} />
					<h3 className="text-[clamp(1rem,3vw,2rem)] font-medium leading-[1.05] tracking-tight">{`Hi, I'm Bora!`}</h3>
					<h5 className="mb-8 max-w-lg px-4 text-left text-xs leading-relaxed text-white max-sm:text-sm lg:text-center">
						{`A software engineer with a passion for full-stack development and a background in game development.`}
					</h5>
				</div>
				<div className="col-span-2 col-start-2 row-span-7 row-start-8 h-fit rounded-xl border border-[#b7b7b753] bg-[#22272f97]">
					<TechStack />
				</div>
				<div className="col-start-3 row-span-7 row-start-1 rounded-xl border border-[#b7b7b753] bg-[#22272f97]">
					x
				</div>
				<div className="col-start-2 row-span-7 row-start-1 flex flex-row items-center justify-center rounded-xl border border-[#b7b7b753] bg-[#22272f97]">
					<div className="flex flex-row items-center gap-4 lg:justify-center">
						<IconButton link="https://www.linkedin.com/in/bora-ozkoc/" icon={FaLinkedin} />
						<IconButton link="https://github.com/BoraOzkoc" icon={FaGithub} />
						<IconButton
							link="https://apps.apple.com/developer/bora-ozkoc/id1742469862"
							icon={IoLogoAppleAppstore}
						/>
						<IconButton link="mailto:bora.ozkoc@hotmail.com" icon={IoMail} />
					</div>
				</div>
				<div className="row-span-4 row-start-11 flex items-center justify-center rounded-xl border border-[#b7b7b753] bg-[#22272f97]">
					Bora Özkoç
				</div>
			</div>
		</section>
	);
}

export default GridSection;
