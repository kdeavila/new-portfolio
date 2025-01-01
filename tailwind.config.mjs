/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1a1f24',
				'secondary': '#1d242d',
				'card': '#2a3038',
				'dark': '#14181f'
			},
			boxShadow: {
				'back': '0 5px 1px'
			},
			screens: {
				xs: '475px'
			}
		},
	},
	plugins: [],
}
