/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@material-tailwind/react/utils/withMT"),
    require('@tailwindcss/forms'), // Official forms plugin
    require('@tailwindcss/typography'), // Official typography plugin
    require('@tailwindcss/aspect-ratio'), // Official aspect-ratio plugin
  ],
};
