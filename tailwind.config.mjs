/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Montserrat"', 'ui-sans-serif', 'system-ui'],
			'serif': ['"Vollkorn"', 'ui-serif', 'Georgia'],
		},
		extend: {
			keyframes: {
				zoom: {
					'0%': { transform: 'scale(1, 1)' },
					'50%': { transform: 'scale(1.2, 1.2)' },
					'100%': { transform: 'scale(1, 1)' },
				}
			},
			animation: {
				zoom: 'zoom 20s ease infinite',
			}
		},
	},
	plugins: [require("daisyui")],
}