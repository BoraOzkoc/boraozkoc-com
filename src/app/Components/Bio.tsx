import React from 'react';
import Image from 'next/image';

function Bio() {
	return (
		<div id="about" className="flex h-full flex-col items-center justify-center gap-10">
			<div>
				<h1 className="text-4xl font-bold">About Me</h1>
			</div>
			<div className="m-0 flex h-full flex-col items-center justify-center gap-10 text-center lg:w-[70%] lg:flex-row">
				<div className="flex h-64 items-center justify-center lg:w-fit lg:justify-end">
					<Image
						src="/BioPhoto.jpeg"
						alt="Profile"
						width={256}
						height={256}
						className="h-full w-auto rounded-lg object-contain"
					/>
				</div>
				<div className="flex w-[70%] items-center text-center max-sm:text-sm lg:w-1/2 lg:text-left">
					<span>
						{`Hi, I'm Bora Özkoç, a Software Engineering graduate from University of Economics. With 3 years of game development experience using C# & Unity, I'm currently leveraging my technical background to expand my expertise into full-stack development. I work with React, JavaScript, TypeScript, Tailwind CSS, and Next.js to build modern web applications.`}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Bio;
