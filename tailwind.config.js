/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        postred: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#e11d2f',
          600: '#c91527',
          700: '#a91020',
          900: '#5f0610',
        },
        ink: '#141416',
        graphite: '#2b2d31',
        mist: '#f7f7f8',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(20, 20, 22, 0.10)',
        card: '0 18px 50px rgba(20, 20, 22, 0.08)',
        red: '0 20px 50px rgba(225, 29, 47, 0.22)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        reveal: { '0%': { opacity: '0', transform: 'translateY(18px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        reveal: 'reveal .7s ease-out both',
      },
    },
  },
  plugins: [],
}
