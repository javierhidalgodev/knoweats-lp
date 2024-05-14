import { color } from 'framer-motion';
import { toEditorSettings } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#2f695c',
        'orange': '#ff9933'
      },
    },
  },
  plugins: [
  ],
}

