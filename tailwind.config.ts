import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
        'body-color': '#637381',
        'gray-light': '#F7F8FC',
        'gray-2': '#F1F5F9',
        'dark-bg': '#0F172A',
        dark: '#1E293B',
        'gray-dark': '#1F2937',
      },
      boxShadow: {
        'one': '0px 2px 3px rgba(7, 7, 77, 0.05)',
        'two': '0px 5px 10px rgba(4, 10, 34, 0.15)',
        'three': '0px 5px 15px rgba(34, 34, 34, 0.1)',
        'submit': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'submit-dark': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'sticky': '0px 0px 50px 0px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
