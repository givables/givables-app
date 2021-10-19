module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			fontFamily: {
				'space': ['Space\\ Mono, Azeret\\ Mono, ui-monospace'],
			}
		}
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
