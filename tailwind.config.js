// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        adlblue: '#3b82f6',
        adldark: '#1e293b',
      }
    }
  },
  plugins: [],
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

/* styles/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional custom styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
