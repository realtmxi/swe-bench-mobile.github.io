import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'brand-dark': 'rgb(var(--brand-dark) / <alpha-value>)',
        'brand-light': 'rgb(var(--brand-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '500' }],
        'headline': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '500' }],
        'title': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.011em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.006em' }],
        'small': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
        'soft': '0 2px 8px -2px rgb(0 0 0 / 0.05), 0 4px 16px -4px rgb(0 0 0 / 0.05)',
        'medium': '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 8px 24px -4px rgb(0 0 0 / 0.06)',
        'elevated': '0 8px 24px -4px rgb(0 0 0 / 0.1), 0 16px 48px -8px rgb(0 0 0 / 0.08)',
        'brand': '0 4px 14px -2px rgb(255 45 85 / 0.25)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
