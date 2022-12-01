/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        spaTheme: {
          primary: '#4a7887',
          secondary: '#FEF9f6',
          accent: '#F2E9E3',
          neutral: '#000000',
          'base-100': '#E5E4E2',
          'base-200': '#ffffff'
        }
      },
      {
        dark: {
          secondary: '#1F2937',
          'base-100': '#1F2937',
          neutral: '#ffffff',
          'base-200': '#1F2937',
          accent: '#1F2937'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
