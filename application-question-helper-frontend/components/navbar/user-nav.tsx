// Credit to "Code with Stein" for the original code https://www.youtube.com/@CodeWithStein

"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import MenuLink from "./menu-link";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User, UserPlus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserNavProps {
  userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  //   userId = "skibidisigmarizz";
  return (
    <div className="p-2 relative inline-block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center mx-auto"
            variant="outline"
          >
            <User className="mr-2 h-4 w-4" />
            <span className="hidden sm:block">
              {userId ? `${userId}` : "Login"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent className="w-56">
            {userId ? (
              <>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Sign Up</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
