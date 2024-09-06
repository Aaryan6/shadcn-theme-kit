import {
  Inter,
  Roboto_Mono,
  Merriweather,
  Playfair_Display,
  Courier_Prime,
  Lora,
  Source_Sans_3,
  Crimson_Pro,
} from "next/font/google";

// Modern Theme Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

// Retro Theme Fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier-prime",
});

// Nature Theme Fonts
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
});

// Additional fonts for flexibility
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-pro",
});

const fonts = {
  inter,
  robotoMono,
  playfairDisplay,
  courierPrime,
  lora,
  sourceSansPro,
  merriweather,
  crimsonPro,
};

export default fonts;
