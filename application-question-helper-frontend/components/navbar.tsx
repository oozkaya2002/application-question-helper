"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Auth-related imports are commented out for now
// import { useSession } from "next-auth/react";

import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

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
          <Link
            href="/coverletter"
            className={`text-sm font-medium transition-colors hover:text-primary mx-2 ${
              pathname === "/coverletter"
                ? "text-primary"
                : "text-muted-foreground"
              }`}
          >
            Cover Letter Assistant
          </Link>
          <Link
            href="/questions"
            className={`text-sm font-medium transition-colors hover:text-primary mx-2 ${
              pathname === "/questions"
                ? "text-primary"
                : "text-muted-foreground"
              }`}
          >
            Questions Assistant
          </Link>
        </div>
        <div className="flex items-center space-x-4 w-56">
          {/* For now, hardcoding the "Sign up / Log in" link */}
          <Link
            href="/api/auth/login"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sign up / Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
