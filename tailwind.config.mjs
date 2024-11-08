/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ffde21',
				primarybg: '#000000',
				primaryhover: '#fce977',
				normal: '#e5e5e5',
				background: '#171717'
			}
		},
	},
	plugins: [],
}
