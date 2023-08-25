const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        bbyellow: "#f5f34a",
      },
      fontFamily: {
        stencil: ["Black Ops One", ...defaultTheme.fontFamily.sans],
      },
      aria: {
        current: 'current="true"',
      },
    },
  },
  plugins: [],
}
