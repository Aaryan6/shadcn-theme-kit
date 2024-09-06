"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    console.log({ theme });
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-modern")}
        >
          Modern Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-modern-dark")}
        >
          Modern Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-retro")}
        >
          Retro Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-retro-dark")}
        >
          Retro Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-nature")}
        >
          Nature Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("theme-nature-dark")}
        >
          Nature Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-red-200"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
