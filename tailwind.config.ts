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
                // Core palette
                background: {
                    DEFAULT: '#F5F5F5',
                    dark: '#0A0A0A',
                },
                surface: {
                    DEFAULT: '#EBEBEB',
                    dark: '#141414',
                },
                text: {
                    primary: '#111111',
                    secondary: '#6B6B6B',
                    'primary-dark': '#FFFFFF',
                    'secondary-dark': '#9A9A9A',
                },
                border: {
                    DEFAULT: 'rgba(0,0,0,0.1)',
                    dark: 'rgba(255,255,255,0.08)',
                },
                accent: {
                    DEFAULT: '#FF4D00',
                    hover: '#E64400',
                },
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"Space Grotesk"', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(80px, 10vw, 160px)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
                'display': ['clamp(48px, 6vw, 96px)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '800' }],
                'heading': ['clamp(32px, 4vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
                'subheading': ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3', fontWeight: '600' }],
                'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
                'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                'label': ['12px', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
                'caption': ['11px', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '400' }],
            },
            spacing: {
                '18': '72px',
                '22': '88px',
                '30': '120px',
            },
            maxWidth: {
                'container': '1440px',
                'content': '1200px',
            },
            borderRadius: {
                DEFAULT: '2px',
                sm: '2px',
                md: '4px',
                lg: '8px',
                xl: '12px',
                full: '9999px',
            },
            borderWidth: {
                DEFAULT: '1px',
            },
            boxShadow: {
                'card': '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
                'card-dark': '0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
                'card-hover': '0 4px 24px rgba(0,0,0,0.12)',
                'card-hover-dark': '0 4px 24px rgba(0,0,0,0.6)',
                'accent': '0 0 0 1px #FF4D00',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease forwards',
                'fade-in': 'fadeIn 0.5s ease forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            gridTemplateColumns: {
                '12': 'repeat(12, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
}

export default config
