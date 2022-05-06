module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: '#8257e6',
				primary: '#F4F4F5',
				secondary: '#A1A1AA',
				surface: {
					primary: '#18181B',
				},
			},
		},
	},
	plugins: [],
};
