import { create } from "zustand";
import { THEMES } from "@/components/themes";

type ThemeState = {
  theme: (typeof THEMES)[0];
  setTheme: (theme: (typeof THEMES)[0]) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: THEMES[0], // Default to the first theme
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
