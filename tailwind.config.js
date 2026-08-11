/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#e46222",
          crimson: "#520701",
          black: "#000000",
          cardBg: "rgba(15, 15, 18, 0.75)",
          cardBorder: "rgba(255, 255, 255, 0.08)",
          cardBorderGlow: "rgba(228, 98, 34, 0.35)",
          muted: "#4c4c4c",
        },
      },
      borderRadius: {
        '24': '24px',
        '30': '30px',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Syne', 'Cinzel', 'sans-serif'],
        body: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'flame': '0 0 25px rgba(228, 98, 34, 0.35)',
        'flame-intense': '0 0 40px rgba(228, 98, 34, 0.65), 0 0 80px rgba(82, 7, 1, 0.8)',
        'pill-glow': '0 0 20px #e46222, inset 0 0 15px rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'ember-rise': 'emberRise 4s infinite linear',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(228, 98, 34, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(228, 98, 34, 0.9), 0 0 60px rgba(82, 7, 1, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.6)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        emberRise: {
          '0%': { transform: 'translateY(0) opacity(1)' },
          '100%': { transform: 'translateY(-100px) opacity(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'radial-flame': 'radial-gradient(circle at 50% 50%, rgba(228, 98, 34, 0.18) 0%, rgba(82, 7, 1, 0.12) 45%, rgba(0, 0, 0, 0) 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(228, 98, 34, 0.25), rgba(82, 7, 1, 0.15) 50%, rgba(0, 0, 0, 1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #e46222 0%, #520701 100%)',
      }
    },
  },
  plugins: [],
};
