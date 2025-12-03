/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'electric-purple': '#BF00FF',
                'acid-green': '#CCFF00',
                'void-black': '#050505',
                'empower-pink': '#E91E63',
                'vibrant-magenta': '#C2185B',
                'deep-purple': '#8E24AA',
                'dark-violet': '#6A1B9A',
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
