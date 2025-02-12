import React from 'react';
import Image from 'next/image';

function Bio() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-10 text-center lg:w-[70%] lg:flex-row">
			<div className="flex h-64 items-center justify-center lg:w-fit lg:justify-end">
				<Image
					src="/favicon.ico"
					alt="Profile"
					width={200}
					height={200}
					className="object-contain"
				/>
			</div>
			<div className="flex w-[70%] items-center text-center max-sm:text-sm md:text-center lg:w-1/2">
				<span>
					{`Hi, I'm Bora Özkoç, a Software Engineering graduate from University of Economics. With 3 years of game development experience using C# & Unity, I'm currently leveraging my technical background to expand my expertise into full-stack development. I work with React, JavaScript, TypeScript, Tailwind CSS, and Next.js to build modern web applications.`}
				</span>
			</div>
		</div>
	);
}

export default Bio;
