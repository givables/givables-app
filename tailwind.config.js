module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {
			fontFamily: {
				'space': ['TeXGyreHerosCondensed', 'Helvetica'],
			},
      fontSize: {
        '2xs': ['0.5rem', {
          lineHeight: '1rem',
        }],
      }
		}
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
