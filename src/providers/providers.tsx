"use client";

import { THEMES } from "@/components/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { useThemeStore } from "@/lib/hooks/use-theme-store";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const { theme } = useThemeStore();

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={[
        ...THEMES.map((theme) => theme.id),
        ...THEMES.map((theme) => `${theme.id}.dark`),
      ]}
    >
      {children}
    </NextThemesProvider>
  );
}

export function applyTheme(themeId: string, isDark: boolean = false) {
  const [baseTheme, variant] = themeId.split(".");
  const theme = THEMES.find((t) => t.id === baseTheme);
  if (theme) {
    const root = document.documentElement;

    // Apply theme variables
    const cssVars = isDark ? theme.cssVars.dark : theme.cssVars.light;
    Object.entries(cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Toggle dark class on html element
    root.classList.toggle("dark", isDark);
  }
}
