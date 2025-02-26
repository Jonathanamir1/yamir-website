import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'], // This will be your main font
				raleway: ['Raleway', 'sans-serif'], // Secondary font
				klemer: ['Klemer', 'sans-serif'], // Add your custom font
			},
			backgroundImage: {
				'radial-vignette':
					'radial-gradient(ellipse at center, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.20) 70%)',
			},
			clipPath: {
				diagonal: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
			},
			colors: {
				primary: '#282a29',
				secondary: '#f6f4eb',
				accent: '#f4a261', // Light Pumpkin
				warm: '#e8c3a1', // Peach Beige
				highlight: '#f9d8c2', // Delicate Apricot
				gray: '#909090', // Soft Gray
				hero: '#D7D7D7',
				icon: '#C4C4C4',
			},
		},
	},
	plugins: [],
} satisfies Config;
