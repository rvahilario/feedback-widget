module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					500: '#8257e6',
				},
			},
		},
	},
	plugins: [],
};
