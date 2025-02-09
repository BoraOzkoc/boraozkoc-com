import React from 'react';
import Image from 'next/image';

function Bio() {
	return (
		<div className="flex h-full flex-col gap-10 lg:w-3/4 lg:flex-row">
			<div className="flex h-64 items-center justify-center lg:w-1/2">
				<Image
					src="/favicon.ico"
					alt="Profile"
					width={200}
					height={200}
					className="object-contain"
				/>
			</div>
			<div className="flex w-full items-center text-left lg:w-1/2">
				<span>
					{`Hi, I'm Bora Özkoç, a Software Engineering graduate from University of Economics. With 3 years of game development experience using C# & Unity, I'm currently leveraging my technical background to expand my expertise into full-stack development. I work with React, JavaScript, TypeScript, Tailwind CSS, and Next.js to build modern web applications.`}
				</span>
			</div>
		</div>
	);
}

export default Bio;
