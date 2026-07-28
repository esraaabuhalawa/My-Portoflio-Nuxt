import type { Config } from 'tailwindcss'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    50: '#f8f8f8',
                    100: '#f0f0f0',
                    200: '#e0e0e0',
                    300: '#c0c0c0',
                    400: '#808080',
                    500: '#606060',
                    600: '#303030',
                    700: '#202020',
                    800: '#110720',
                    900: '#0c021b',
                },
                light: {
                    50: '#ffffff',
                    100: '#f9f9f9',
                    200: '#f3f3f3',
                    300: '#e8e8e8',
                    400: '#d4d4d4',
                    500: '#a0a0a0',
                    600: '#606060',
                    700: '#404040',
                    800: '#262626',
                    900: '#0a0a0a',
                },
                neon: {
                    purple: '#a855f7',
                    blue: '#3b82f6',
                    pink: '#ec4899',
                    cyan: '#06b6d4',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                neon: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
                'neon-sm': '0 0 10px rgba(168, 85, 247, 0.3)',
                'neon-lg': '0 0 40px rgba(168, 85, 247, 0.6)',
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                glow: 'glow 2s ease-in-out infinite',
                'slide-up': 'slideUp 0.8s ease-out',
                'slide-down': 'slideDown 0.8s ease-out',
                shine: 'shine 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                },
            },
            transitionDuration: {
                2000: '2000ms',
                3000: '3000ms',
            },
            scrollBehavior: {
                smooth: 'smooth',
            },
        },
    },
    plugins: [],
} satisfies Config
