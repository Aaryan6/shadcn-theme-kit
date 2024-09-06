import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={[
          "theme-modern",
          "theme-modern-dark",
          "theme-retro",
          "theme-retro-dark",
          "theme-nature",
          "theme-nature-dark",
          "system",
        ]}
      >
        {children}
      </NextThemesProvider>
    </>
  );
}
