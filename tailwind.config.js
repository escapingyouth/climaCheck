/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#94A3B8',
				secondary: '#ccc'
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif']
			}
		}
	},
	plugins: []
};
