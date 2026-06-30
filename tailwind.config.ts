import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        iyeon: {
          orange: '#ff5b00',
          amber: '#ff9a00',
          red: '#ef2f24',
          navy: '#07111f',
          ink: '#0b1020',
          soft: '#f6f4ef',
          line: '#e7e2d8'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        kr: ['var(--font-pretendard)', 'var(--font-inter)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(7,17,31,0.08)',
        glow: '0 0 80px rgba(255,91,0,0.22)'
      },
      backgroundImage: {
        'iyeon-gradient': 'linear-gradient(135deg, #ffb000 0%, #ff5b00 48%, #ef2f24 100%)',
        'dark-radial': 'radial-gradient(circle at 70% 20%, rgba(255,91,0,0.22), transparent 36%), linear-gradient(135deg, #07111f 0%, #0b1020 100%)'
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem'
      }
    }
  },
  plugins: []
};

export default config;
