import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:       '#d97742',
          'orange-lt':  '#e89060',
          'orange-dk':  '#c0622e',
          'orange-glow':'rgba(217,119,66,0.18)',
          teal:         '#1a8fa0',
          'teal-lt':    '#26b5cc',
        },
        dark: {
          primary:    '#091920',
          secondary:  '#0d2330',
          card:       '#102535',
          hover:      '#163045',
          border:     'rgba(26,143,160,0.18)',
        },
        light: {
          primary:   '#f0f9ff',
          secondary: '#e2f3f8',
          card:      '#ffffff',
          hover:     '#f8fcff',
          border:    'rgba(26,143,160,0.2)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        typing: 'typing 3.5s steps(30,end) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
