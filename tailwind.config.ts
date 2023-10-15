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
        'neumorphism-outer-darker': 'linear-gradient(145deg, #f5f7fb, #8b8b8b)',


      },
      backgroundColor: {
        'neumorphism-white': '#ebebeb',
      },
      boxShadow: {
        'neumorphism-inner': "inset 5px 5px 7px #b8b8b8, inset -5px -5px 7px #ffffff",
        'neumorphism-outer': '7px 7px 14px #cfd1d1,-7px -7px 14px #ffffff',
        'neumorphism-button-orange': 'inset -5px -5px 6px #b76f2e,inset 5px 5px 6px #ffb54a, 7px 7px 14px #cfd1d1,-7px -7px 14px #ffffff',
        'neumorphism-button-purple': 'inset -5px -5px 6px #7328b7,inset 5px 5px 6px #b33eff, 7px 7px 14px #b3b3b3,-7px -7px 14px #ffffff',
        'neumorphism-button-white': "inset -8px -8px 9px #bababa,inset 8px 8px 9px #ffffff",
        'neumorphism-image': "inset -7px -7px 14px #cfd1d1,inset 7px 7px 14px #ffffff, 7px 7px 14px #cfd1d1,-7px -7px 14px #ffffff"
      },
      borderRadius: {
        '4xl': "30px"
      }
    },
  },
  plugins: [],
}
export default config
