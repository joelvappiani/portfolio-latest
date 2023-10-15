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
        'neumorphism-outer': 'linear-gradient(145deg, #f5f7fb, #ced0d4)',
        'neumorphism-outer-orange': 'linear-gradient(145deg, #ffa740, #d98c36)',
      },
      backgroundColor: {
        'neumorphism-white': '#ebebeb'
      },
      boxShadow: {
        'neumorphism-inner': "inset 5px 5px 7px #b8b8b8, inset -5px -5px 7px #ffffff",
        'neumorphism-outer': '10px 10px 20px #c0c2c5,-10px -10px 20px #ffffff',
        'neumorphism-button-orange': 'inset -5px -5px 6px #b76f2e,inset 5px 5px 6px #ffb54a',
        'neumorphism-button-white': "inset -8px -8px 9px #bababa,inset 8px 8px 9px #ffffff"
      },
      borderRadius: {
        '4xl': "30px"
      }
    },
  },
  plugins: [],
}
export default config
