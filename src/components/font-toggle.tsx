"use client";

import * as React from "react";
import { useFont } from "@/components/font-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FontToggle() {
  const { setFont } = useFont();

  const fonts = [
    { name: "Inter", value: "font-inter" },
    { name: "Roboto Mono", value: "font-roboto-mono" },
    { name: "Playfair Display", value: "font-playfair" },
    { name: "Courier Prime", value: "font-courier-prime" },
    { name: "Lora", value: "font-lora" },
    { name: "Source Sans Pro", value: "font-source-sans-pro" },
    { name: "Merriweather", value: "font-merriweather" },
    { name: "Crimson Pro", value: "font-crimson-pro" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          Aa
          <span className="sr-only">Toggle font</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {fonts.map((f) => (
          <DropdownMenuItem
            key={f.value}
            className="cursor-pointer hover:bg-red-200"
            onClick={() => setFont(f.value)}
          >
            {f.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
