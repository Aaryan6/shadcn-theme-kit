import { Inter, Playfair_Display, Lora } from "next/font/google";

// Modern Theme Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Retro Theme Font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Nature Theme Font
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export { inter, playfairDisplay, lora };
