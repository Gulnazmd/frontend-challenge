module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          purple: 'var(--color-purple)',
          white: 'var(--color-white)',
          blue: 'var(--color-blue)',
          'dark-blue': 'var(--color-dark-blue)',
          red: 'var(--color-red)',
          crimson: 'var(--color-crimson)',
          'light-blue': 'var(--color-light-blue)',
          cyan: 'var(--color-cyan)',
          magenta: 'var(--color-magenta)',
      },
      dropShadow: {
        'xl': '10px 5px 5px rgba(0, 0, 0, 0.35)',
      }
      },
  },
  plugins: [],
}
