/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ["Nunito"],
      serif: ["Nunito"],
      mono: ["Nunito"],
      display: ["Nunito"],
      body: ["Nunito"]
    },
    extend: {
      animation: {
        'spin-tick': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}

