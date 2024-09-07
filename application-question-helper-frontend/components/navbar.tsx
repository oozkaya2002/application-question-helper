"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex space-x-4">
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
        <div className="flex justify-center">
          <Link
            href="/coverletter"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/coverletter"
                ? "text-primary"
                : "text-muted-foreground"
              }`}
          >
            Cover Letter Assistant
          </Link>
          <Link
            href="/questions"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/questions"
                ? "text-primary"
                : "text-muted-foreground"
              }`}
          >
            Questions Assistant
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="sm">
                Account
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/login" className="flex w-full items-center">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login/logout" className="flex w-full items-center">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
