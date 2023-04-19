/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      safelist: [
        'text-2xl',
        'text-3xl',
        {
          pattern: /bg-(red|green|blue)-(100|200|300)/,
          variants: ['lg', 'hover', 'focus', 'lg:hover'],
        },
      ],
  theme: {
    extend: {},
  },
  plugins: [],
}

