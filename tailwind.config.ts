import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#2c2518',
                    gold: '#c88e28',
                    yellow: '#f6be00',
                    light: '#faf9f6',
                    text: '#2e2e24',
                    'off-white': '#fdfcf5',
                    gray: '#9ca3af',
                },
                honey: {
                    50: '#FFFAF0',
                    100: '#FFF4D6',
                    200: '#FFE6A3',
                    300: '#FFD970',
                    400: '#FFCB3D',
                    500: '#FFBF0A',
                    600: '#CC9808',
                    700: '#997206',
                    800: '#664C04',
                    900: '#332602',
                },
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-outfit)', 'sans-serif'],
                spartan: ['var(--font-league-spartan)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            }
        },
    },
    plugins: [],
};
export default config;
