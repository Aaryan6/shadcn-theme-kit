import { useState, useEffect } from "react";

export function useFont() {
  const [font, setFont] = useState<string>("font-inter");

  useEffect(() => {
    document.body.className = document.body.className.replace(/font-\S+/, font);
  }, [font]);

  return { font, setFont };
}
