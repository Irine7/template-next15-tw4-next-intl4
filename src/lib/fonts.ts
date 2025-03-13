import {
  Inter,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Raleway,
  Poppins,
  Oswald,
  Source_Sans_3 as Source_Sans_Pro,
  Merriweather,
} from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })
const openSans = Open_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"] })
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] })
const montserrat = Montserrat({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const raleway = Raleway({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const oswald = Oswald({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const sourceSansPro = Source_Sans_Pro({ weight: ["300", "400", "600", "700"], subsets: ["latin"] })
const merriweather = Merriweather({ weight: ["300", "400", "700"], subsets: ["latin"] })

// Google Fonts list
export const googleFonts = [
  { name: "Inter", variable: inter.variable },
  { name: "Roboto", variable: roboto.variable },
  { name: "Open Sans", variable: openSans.variable },
  { name: "Lato", variable: lato.variable },
  { name: "Montserrat", variable: montserrat.variable },
  { name: "Raleway", variable: raleway.variable },
  { name: "Poppins", variable: poppins.variable },
  { name: "Oswald", variable: oswald.variable },
  { name: "Source Sans Pro", variable: sourceSansPro.variable },
  { name: "Merriweather", variable: merriweather.variable },
]

// Custom fonts (these should match the font files in your project's fonts directory)
export const customFonts = [
  "CustomFont1",
  "CustomFont2",
  "CustomFont3",
  // Add more custom fonts here
]

