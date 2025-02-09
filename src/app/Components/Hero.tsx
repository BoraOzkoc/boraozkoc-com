import React from 'react';

function Hero() {
	return (
		<div className="flex h-screen w-full flex-col">
			<div className="flex h-full w-full flex-col items-start justify-center px-6 sm:px-12 lg:items-center">
				<div className="flex h-full w-full flex-col justify-center px-6 lg:w-3/4 lg:items-center">
					<h3 className="text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.05] tracking-tight">{`Hi, I'm Bora!`}</h3>
					<h5 className="mb-8 max-w-lg text-left leading-relaxed text-white max-sm:text-sm lg:text-center">
						{`A software engineer with a passion for full-stack development and a background in game development.`}
					</h5>
				</div>
			</div>
			{/* <div id="techstack" className="flex items-center justify-center">
				<TechStack />
			</div> */}
		</div>
	);
}

export default Hero;
