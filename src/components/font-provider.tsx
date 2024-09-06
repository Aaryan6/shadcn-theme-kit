"use client";

import React, { createContext, useContext } from "react";
import { useFont as useFontHook } from "@/lib/hooks/use-font";

type FontContextType = ReturnType<typeof useFontHook>;

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
  const fontContext = useFontHook();

  return (
    <FontContext.Provider value={fontContext}>
      <div className={fontContext.font}>{children}</div>
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
