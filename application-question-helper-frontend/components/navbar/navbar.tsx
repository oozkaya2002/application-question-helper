"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Auth-related imports are commented out for now
// import { useSession } from "next-auth/react";

import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import UserNav from "./user-nav";
import { Button } from "@/components/ui/button";
import { link } from "fs";

export default function Navbar() {
  const pathname = usePathname();

  // const { data: session, status } = useSession(); // Auth session data
  // const isLoggedIn: boolean = status === "authenticated"; // Check if user is authenticated

  return (
    <nav className="border-b">
      <div className="relative flex justify-between mx-auto container h-16 px-4 items-center">
        <div className="flex space-x-4 w-56">
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
        <div className="relative flex items-center justify-evenly">
          <Button
            asChild
            variant="link"
            className={`text-sm font-medium transition-colors hover:text-primary mx-2 ${
              pathname === "/coverletter"
                ? "text-primary underline"
                : "text-muted-foreground"
              }`}
          >
            <Link href="/coverletter">Cover Letter Assistant</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className={`text-sm font-medium transition-colors hover:text-primary mx-2 ${
              pathname === "/questions"
                ? "text-primary underline"
                : "text-muted-foreground"
              }`}
          >
            <Link href="/questions">Questions Assistant</Link>
          </Button>
        </div>
        <div className="flex items-center space-x-4 w-56">
          <UserNav />
        </div>
      </div>
    </nav>
  );
}
