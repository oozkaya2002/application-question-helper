"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="bg-primary-forground text-primary"
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0" }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "rotate-90 scale-0" : "rotate-0 scale-100" }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
