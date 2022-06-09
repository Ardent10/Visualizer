module.exports = {
  content: [
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "Roboto-Mono"],
      body: ["Poppins", "Roboto-Mono"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
    },
  },
  plugins: [],
}
