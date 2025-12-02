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
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
