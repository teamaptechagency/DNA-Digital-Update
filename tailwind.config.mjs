/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dna-white': '#FFFFFF',
        'dna-black': '#060505',
        'dna-dark': '#2A2A2A',
        'dna-beige-light': '#F5F1EA',
        'dna-beige-mid': '#E9E4DD',
        'dna-beige-warm': '#CDC6BC',
        'dna-footer': '#5D5749',
        'dna-gold': '#91836C',
        'dna-gold-dark': '#766B58',
        'dna-gold-light': '#E0C9A3',
        'dna-sage': '#4E5854',
        'dna-sage-light': '#CDDCCE',
        'dna-card-1': '#6A747D',
        'dna-card-2': '#887660',
        'dna-card-3': '#86845E',
        'dna-footer-bg': '#5D5749',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '86.4px', fontWeight: '600' }],
        'quote': ['60px', { lineHeight: '66px', fontWeight: '700' }],
        'section': ['40px', { lineHeight: '47.2px', fontWeight: '700' }],
        'sub': ['24px', { lineHeight: '28.8px', fontWeight: '600' }],
        'body-xl': ['20px', { lineHeight: '28px' }],
        'body-lg': ['18px', { lineHeight: '30.6px' }],
        'body': ['16px', { lineHeight: '19.5px' }],
        'nav': ['14px', { lineHeight: '19.6px', fontWeight: '600' }],
        'label': ['12px', { lineHeight: '19.6px' }],
        'tagline': ['10px', { lineHeight: '15px', fontWeight: '600' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      maxWidth: {
        'container': '1280px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.1) 100%)',
      }
    },
  },
  plugins: [],
};
