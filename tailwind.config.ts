import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 20s linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(calc(-100% - 0.5rem))' }
				}
			}
		}
	},
	plugins: [],
	variants: {
		extend: {
			animation: ['hover', 'group-hover']
		}
	}
};

export default config;
