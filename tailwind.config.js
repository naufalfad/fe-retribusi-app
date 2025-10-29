/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // penting agar dark mode bisa diaktifkan lewat className="dark"
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warna dasar
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0A0A0A',
        },
        black: {
          DEFAULT: '#0A0A0A',
          dark: '#FFFFFF',
        },
        teksKolom: {
          DEFAULT: '#696866',
          dark: '#7D7D7D',
        },
        fillKolom: {
          DEFAULT: '#FFFFFF',
          dark: '#161817',
        },
        outline: {
          DEFAULT: '#C8C8C8',
          dark: '#2F3332',
        },
        green: {
          DEFAULT: '#125735',
          dark: '#0FF689',
        },
      },
    },
  },
  plugins: [],
};
