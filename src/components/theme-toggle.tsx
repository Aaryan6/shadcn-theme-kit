"use client";

import { useTheme } from "next-themes";
import { THEMES } from "./themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { applyTheme } from "@/providers/providers";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/lib/hooks/use-theme-store";

export function ThemeToggle() {
  const { theme: nextTheme } = useTheme();
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newThemeId: string) => {
    const newTheme = THEMES.find((t) => t.id === newThemeId);
    if (newTheme) {
      setTheme(newTheme);
      const isDark = nextTheme === "dark";
      applyTheme(newTheme.id, isDark);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Select value={theme.id} onValueChange={handleThemeChange}>
      <SelectTrigger className="rounded-full">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((t) => (
          <SelectItem key={t.id} value={t.id}>
            {t.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const ModeToggle = () => {
  const { theme: nextTheme, setTheme: setNextTheme } = useTheme();
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = (mode: "light" | "dark") => {
    setNextTheme(mode);
    const isDark = mode === "dark";
    applyTheme(theme.id, isDark);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => toggleTheme(nextTheme === "dark" ? "light" : "dark")}
      className="rounded-full w-fit p-3"
    >
      <SunIcon className="h-4 w-4 transition-all dark:hidden" />
      <MoonIcon className="h-4 w-4 transition-all hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
