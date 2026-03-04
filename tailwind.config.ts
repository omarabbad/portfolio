import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ── Global backgrounds ──────────────────────────────────
                'coda-dark':  '#000000',
                'coda-light': '#F4F2E9',

                // ── Text ────────────────────────────────────────────────
                'text-primary':   '#F5F5F5',
                'text-secondary': '#B8B8B8',
                'text-dark':      '#000000',
                'text-muted':     '#555555',

                // ── Product card palettes ────────────────────────────────
                card: {
                    blue:   '#0E2BFF',
                    green:  '#0B7C47',
                    pink:   '#C61A73',
                    purple: '#5C2BFF',
                },

                // ── Accent ───────────────────────────────────────────────
                accent: '#0E2BFF',

                // ── Surface (dark mode cards/panels) ─────────────────────
                surface: {
                    DEFAULT: '#111111',
                    light:   '#FFFFFF',
                },

                // ── Border ───────────────────────────────────────────────
                border: {
                    dark:  'rgba(255,255,255,0.1)',
                    light: 'rgba(0,0,0,0.1)',
                },
            },

            fontFamily: {
                sans: ['"Inter Tight"', 'Inter', 'sans-serif'],
            },

            fontSize: {
                // Hero headline — controlled via clamp in CSS
                'hero':    ['clamp(72px, 10vw, 120px)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '900' }],
                'display': ['64px',  { lineHeight: '1.1',  fontWeight: '800' }],
                'card-title': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' }],
                'body':    ['16px',  { lineHeight: '1.6'  }],
                'label':   ['12px',  { lineHeight: '1.4', letterSpacing: '0.15em' }],
            },

            borderRadius: {
                'ui':        '12px',
                'card':      '28px',
                'container': '36px',
                'pill':      '999px',
                DEFAULT:     '12px',
                sm:          '8px',
                md:          '12px',
                lg:          '20px',
                xl:          '28px',
                '2xl':       '36px',
                full:        '9999px',
            },

            maxWidth: {
                'container': '1280px',
            },

            spacing: {
                // Section spacing scale
                'section':     '120px',
                'hero-gap':    '160px',
                'heading-gap': '48px',
                'card-pad':    '28px',
            },

            boxShadow: {
                'card':       '0 10px 30px rgba(0,0,0,0.3)',
                'card-hover': '0 30px 80px rgba(0,0,0,0.45)',
                'card-blue':  '0 20px 60px rgba(14,43,255,0.35)',
                'card-green': '0 20px 60px rgba(11,124,71,0.35)',
                'card-pink':  '0 20px 60px rgba(198,26,115,0.35)',
                'card-purple':'0 20px 60px rgba(92,43,255,0.35)',
                'nav':        '0 1px 0 rgba(255,255,255,0.06)',
            },

            animation: {
                'fade-up':   'fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
                'fade-in':   'fadeIn 0.4s ease forwards',
            },

            keyframes: {
                fadeUp: {
                    '0%':   { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },

            transitionTimingFunction: {
                'coda': 'cubic-bezier(0.4,0,0.2,1)',
            },
        },
    },
    plugins: [],
}

export default config
