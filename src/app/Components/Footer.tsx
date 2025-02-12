import React from 'react';

function Footer() {
	return (
		<div className="flex w-full flex-row justify-between gap-2 py-10">
			<div className="flex items-start justify-start gap-2 text-start">
				<span className="">© 2025 Bora Özkoç</span>
			</div>
			<div className="flex flex-col items-start justify-center gap-3 pr-6">
				<div className="transition-all duration-200 hover:scale-110">
					<a href="https://github.com/boraozkoc/" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</div>
				<div className="transition-all duration-200 hover:scale-110">
					<a
						href="https://www.linkedin.com/in/bora-ozkoc/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</div>
				<div className="transition-all duration-200 hover:scale-110">
					<a href="mailto:boraozkoc@hotmail.com" target="_blank" rel="noopener noreferrer">
						Mail
					</a>
				</div>
				<div className="transition-all duration-200 hover:scale-110">
					<a
						href="https://apps.apple.com/tr/developer/bora-ozkoc/id1656888393"
						target="_blank"
						rel="noopener noreferrer"
					>
						App Store
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
