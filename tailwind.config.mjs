/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				jade: "#279f83",
				darkJungleGreen: "#1c2028"
			},
			fontFamily: {
				montserrat: 'Montserrat Variable'
			}
		},
	},
	plugins: [],
}
