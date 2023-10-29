/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
    },
    extend: {
      fontSize: {
        "small-medium": "2rem",
      },
      margin: {
        "klein-margin": "0.05em",
      },
      colors: {
        "vervoer-grey": "#454545",
        "vervoer-roze": "#e30059",
        "container-kleur": "#2c2c2c",
        "tekst-grijs": "#757575",
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fill, minmax(20em, 1fr))",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
