"use client";

import * as React from "react";
import { useFont } from "@/components/font-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function FontToggle() {
  const { font, setFont } = useFont();

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
    <Select value={font} onValueChange={(e) => setFont(e)}>
      <SelectTrigger className="rounded-full">
        <SelectValue placeholder="Select a font" />
      </SelectTrigger>
      <SelectContent>
        {fonts.map((f) => (
          <SelectItem key={f.value} value={f.value}>
            {f.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
