import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': 'rgb(147 51 234)',
        'orange': 'rgb(251 146 60)',
        'black': 'black',
        'white': 'white',
        transparent: 'transparent',
        current: 'currentColor',
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
        ibm: ['var(--font-ibm)'],
        poppins: ['var(--font-poppins)']
      },
      backgroundImage: {
        'neumorphism-outer': 'linear-gradient(145deg, #f0f0f0, #cacaca)',
      },
      backgroundColor: {
        'neumorphism-inner': '#e0e0e0',
      },
      boxShadow: {
        'neumorphism-inner': "inset 5px 5px 7px #b8b8b8, inset -5px -5px 7px #ffffff",
        'neumorphism-outer': '5px 5px 30px #dedede,-5px -5px 30px #e2e2e2'
      },
      borderRadius: {
        '4xl': "30px"
      }
    },
  },
  plugins: [],
}
export default config
