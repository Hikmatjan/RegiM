/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "main-container": "1216px",
        "138": "592px",
        "152": "628px",
        "142": "768px",
        "190":"760"

      },
      colors: {
        regim: {
          "gray-90": "[#111827]",
          "gray-30": "[#0876DD]",
          "gray-25":"[#374151]",
        }


      },
      lineHeight: {
        "15": "60px",
        "18": "72px",


      },
      height: {
        "175": "700px",
        "100": "400px",
        "95": "387px",
        "47":"188px"
      },
      width: {
        "175": "700px",
        "100": "400px",
        "172": "688px",
        "84": "335px",

      },




    },
  },
  plugins: [],
}
