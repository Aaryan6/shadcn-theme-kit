"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ModeToggle, ThemeToggle } from "./theme-toggle";
import { FontToggle } from "./font-toggle";
export function FloatingOptionsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-4 left-0 right-0 mx-auto w-fit px-4 py-2 rounded-full 
                    backdrop-blur-md
                    shadow-lg z-50`}
    >
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <FontToggle />
        <ModeToggle />
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full transition-colors duration-200 text-foreground"
        >
          <GitHubLogoIcon className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
}
